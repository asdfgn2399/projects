// References Renderer.stripTags() from 5e.tools/js/render.js
// Without this function, output will contain 5etools tags
const WARNING = "Load /js/render.js, /js/utils.js, and /js/parser.js from 5e.tools to use this script fully"

var script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.src = 'https://asdfgn2399.github.io/5etools-mirror-3/js/render.js';
document.head.appendChild(script1);

var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.src = 'https://asdfgn2399.github.io/5etools-mirror-3/js/parser.js';
document.head.appendChild(script2);

var script3 = document.createElement('script');
script3.type = 'text/javascript';
script3.src = 'https://asdfgn2399.github.io/5etools-mirror-3/js/utils.js';
document.head.appendChild(script3);

function convert5eToolsToStatblock(input, legendaryGroup) {
  return {
    name: input.name || "Monster",
    size: convertSize(input.size[0]) || "medium",
    type: convertType(input.type, "type") || "humanoid",
    tag: convertType(input.type, "tag") || "",
    alignment: convertAlignment(input.alignment, input.alignmentPrefix) || "any alignment",
    hitDice: extractHitDice(input.hp.formula) || 5,
    armorName: findArmorName(input.ac) || "",
    natArmorBonus: findNatArmorBonus(input.ac, input.dex) - findShieldBonus(input.ac) || 3,
    shieldBonus: findShieldBonus(input.ac) || 0,
    speed: input.speed?.walk >= 0 ? input.speed.walk : input.speed || 30,
    burrowSpeed: input.speed?.burrow || 0,
    climbSpeed: input.speed?.climb || 0,
    swimSpeed: input.speed?.swim || 0,
    flySpeed: checkForHover(input.speed, "fly") || 0,
    hover: checkForHover(input.speed, "hover") || false,
    speedDesc: formatSpeedDescription(input.speed) || "30 ft.",
    strPoints: input.str || 10,
    dexPoints: input.dex || 10,
    conPoints: input.con || 10,
    intPoints: input.int || 10,
    wisPoints: input.wis || 10,
    chaPoints: input.cha || 10,
    blindsight: extractSense(input.senses, "blindsight") || 0,
    blind: input.senses?.find((sense) => (sense.includes("(blind beyond this radius)"))) ? true : false,
    darkvision: extractSense(input.senses, "darkvision") || 0,
    tremorsense: extractSense(input.senses, "tremorsense") || 0,
    truesight: extractSense(input.senses, "truesight") || 0,
    telepathy: extractSense(input.senses, "telepathy") || 0,
    cr: input.cr || 1,
    abilities: (input.trait ? input.trait.map(convertTrait) : []).concat(checkForSpellcasting(input.spellcasting)).filter((ele) => ele !== undefined) || [],
    actions: (input.action ? input.action.map(convertAction) : []).concat(checkForSpellcasting(input.spellcasting, "action")).filter((ele) => ele !== undefined) || [],
    bonusActions: input.bonus ? input.bonus.map(convertAction) : [],
    reactions: input.reaction ? input.reaction.map(convertAction) : [],
    sthrows: convertSavingThrows(input.save) || [],
    skills: convertSkills(input) || [],
    damagetypes: input.immune
    ? input.immune?.filter((dmg) => (typeof dmg === "string")).map((dmg) => ({ name: dmg, note: " (Immune)", type: "i" })).concat(input.resist?.filter((dmg) => (typeof dmg === "string")).map((dmg) => ({ name: dmg, note: " (Resistant)", type: "r" }))).filter((ele) => ele !== undefined)
    : [],
    specialdamage: input.immune
    ? input.immune?.filter((dmg) => (typeof dmg === "object")).map((dmg) => ({ name: getFullImmRes([dmg]), note: " (Immune)", type: "i" })).concat(input.resist?.filter((dmg) => (typeof dmg === "object")).map((dmg) => ({ name: getFullImmRes([dmg]), note: " (Resistant)", type: "r" }))).filter((ele) => ele !== undefined)
    : [],
    languages: input.languages
    ? input.languages?.map((lang) => ({ name: lang, speaks: true }))
    : [],
    conditions: input.conditionImmune?.map((condition) => ({ name: condition })) || [],
    isLegendary: Boolean(input.legendary) || false,
    legendaries: input.legendary ? input.legendary.map(convertAction) : [],
    legendariesDescription: input.legendary ? "The " + (input.name || "Monster").toLowerCase() + " can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The " + (input.name || "Monster").toLowerCase() + " regains spent legendary actions at the start of its turn." : "",
    isLair: Boolean(legendaryGroup?.lairActions) || false,
    lairs: legendaryGroup?.lairActions ? convertLairRegionalActions(legendaryGroup.lairActions, "actions") : [],
    lairDescription: legendaryGroup?.lairActions ? convertLairRegionalActions(legendaryGroup.lairActions, "beginning") : [],
    lairDescriptionEnd: legendaryGroup?.lairActions ? convertLairRegionalActions(legendaryGroup.lairActions, "ending") : [],
    isRegional: Boolean(legendaryGroup?.regionalEffects) || false,
    regionals: legendaryGroup?.regionalEffects ? convertLairRegionalActions(legendaryGroup.regionalEffects, "actions") : [],
    regionalDescription: legendaryGroup?.regionalEffects ? convertLairRegionalActions(legendaryGroup.regionalEffects, "beginning") : [],
    regionalDescriptionEnd: legendaryGroup?.regionalEffects ? convertLairRegionalActions(legendaryGroup.regionalEffects, "ending") : [],
    isMythic: Boolean(input.mythic) || false,
    mythics: input.mythic ? input.mythic.map(convertAction) : [],
    mythicDescription: input?.mythicHeader ? input.mythicHeader[0] : "",
    
    // Could be used but current lang configuration works(TM) - Added to end of languages that have "speaks" set to false
    understandsBut: "", 

    // No clue what this is for
    properties: [], 
    
    // Placeholder for custom fields - shouldn't ever be used in 5etools
    otherArmorDesc: "10 (armor)",
    customHP: false,
    customSpeed: false,
    hpText: "4 (1d8)",
    customCr: "",
    customProf: 2,
    shortName: "",
    pluralName: "",
  };
}

/** Helper functions for conversion **/
const skillToStatMap = {
  acrobatics: "dex",
  animalHandling: "wis",
  arcana: "int",
  athletics: "str",
  deception: "cha",
  history: "int",
  insight: "wis",
  intimidation: "cha",
  investigation: "int",
  medicine: "wis",
  nature: "int",
  perception: "wis",
  performance: "cha",
  persuasion: "cha",
  religion: "int",
  sleightOfHand: "dex",
  stealth: "dex",
  survival: "wis",
};

const sizeMap = {
  T: "tiny",
  S: "small",
  M: "medium",
  L: "large",
  H: "huge",
  G: "gargantuan",
};

const alignMap = {
  C: "chaotic",
  L: "lawful",
  N: "neutral",
  E: "evil",
  G: "good",
  A: "any alignment",
  U: "unaligned",
};

const toolsCRToProfMap = {
  0: 2,
  "1/8": 2,
  "1/4": 2,
  "1/2": 2,
  1: 2,
  2: 2,
  3: 2,
  4: 2,
  5: 3,
  6: 3,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
  11: 4,
  12: 4,
  13: 5,
  14: 5,
  15: 5,
  16: 5,
  17: 6,
  18: 6,
  19: 6,
  20: 6,
  21: 7,
  22: 7,
  23: 7,
  24: 7,
  25: 8,
  26: 8,
  27: 8,
  28: 8,
  29: 9,
  30: 9,
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertSize(size) {
  return sizeMap[size] || "medium";
}

function convertType(type, typeOrTag) {
  if (typeOrTag === "type") {
    if (!type) return "humanoid";
    else if (typeof type === "string") return capitalizeFirstLetter(type);
    else return capitalizeFirstLetter(type.type)
  } else if (typeOrTag === "tag") {
    if (typeof type === "object") return type.tags.join(", ");
  } else return undefined
}

function convertAlignment(alignment, alignmentPrefix) {
  // TODO - Handle NX, NY, etc..
  return (alignmentPrefix ? alignmentPrefix : "") + alignment.map((a) => alignMap[a] || "neutral").join(" ");
}

function extractHitDice(formula) {
  const match = formula.match(/(\d+)d(\d+)/);
  return match ? parseInt(match[1]) : 1;
}

function extractSense(senses, type) {
  const sense = senses?.find((s) => s.split(" ").includes(type));
  return sense ? parseInt(sense.match(/\d+/)[0]) : 0;
}

function convertTrait(trait) {
  return { name: trait.name, desc: (function() { try { Renderer.stripTags(`${trait.entries.join(" ")}`) } catch { console.warn(WARNING); console.error(error); trait.entries.join(" ") }})() };
}

function convertAction(action) {
  return { name: action.name, desc: (function() { try { Renderer.stripTags(`${action.entries.join(" ")}`) } catch { console.warn(WARNING); console.error(error); action.entries.join(" ") }})() };
}

function checkForSpellcasting(spellcasting, displayAs) {
  if (!spellcasting) return;
  let spellcastingArr = _renderSpellcasting(spellcasting[0], [], {}, {});

  return displayAs == spellcasting[0].displayAs ? { name: spellcasting[0].name, desc: spellcastingArr[0].entries.map((entry) => {
    if (typeof entry === "string") return entry;
    else  if (typeof entry === "object") {
      if (!entry.data?.isSpellList) console.error("Error: Unhandled table in spellcasting entry!")
      else {
        let output = ""

        for (const item of entry.items) {
          output += `\n> * ${item.name} ${item.entry}`
        }

        return output
      }
    }
  }).join("\n") } : undefined;
}

function convertSavingThrows(saves) {
  return saves
    ? Object.keys(saves).map((save, index) => ({
        name: save,
        order: index + 1,
      }))
    : [];
}

function convertSkills(input) {
  let skills = input.skill;
  if (!skills) return [];
  return Object.entries(skills).map(([key, value]) => {
    if (Number(value) > Math.floor((input[skillToStatMap[key]] - 10) / 2 ) + toolsCRToProfMap[input.cr]) return { name: key,  stat: skillToStatMap[key],  note: " (ex)"}
    else return { name: key,  stat: skillToStatMap[key] }
  });
}

function formatSpeedDescription(speedData) {
  if (!speedData) return "30 ft.";
  return Object.entries(speedData)
    .map(([key, value]) => `${value} ft. ${key}`)
    .join(", ");
}

function checkForHover(speedObj, type) {
  if (type === "fly") return typeof speedObj.fly === "object" ? speedObj.fly.number : speedObj.fly
  else if (type === "hover") return typeof speedObj.fly === "object" ? speedObj.canHover : false
}

function findNatArmorBonus(ac, dex) {
  natArmorAC = ac.find(armor => armor.from?.includes("natural armor"));
  if (natArmorAC) return natArmorAC.ac - 10 - Math.floor((dex - 10) / 2);
}

function findShieldBonus(ac) {
  return ac[0].from?.find((item) => (item.includes("shield|phb") || item.includes("shield|xphb"))) ? 2 : 0
}

function findArmorName(ac) {
  if (!ac[0].from) return "none";
  else return ac[0].from[0].substring(0, 7) === "{@item " ? ac[0].from[0].substring(7, ac[0].from[0].indexOf("|")) === "studded leather armor" ? "studded leather" : ac[0].from[0].substring(7, ac[0].from[0].indexOf("|")) : ac[0].from[0]
}

function convertLairRegionalActions(lairActions, actionType) {
  if (actionType === "actions") return lairActions[1].items.map((action) => ({ name: lairActions[1].items.indexOf(action), desc: (function() { try { Renderer.stripTags((action.name ? "**" + action.name + ":** " + action.entry : action)) } catch { console.warn(WARNING); console.error(error); (action.name ? "**" + action.name + ":** " + action.entry : action) }})()}))
  else if (actionType === "beginning") return lairActions[0];
  else if (actionType === "ending") return lairActions[2] || "";
}

// Taken and modified from render.js and parser.js in 5e.tools - MIT License - Mar 24, 2025 - v2.7.1

function _getFullImmRes_isSimpleTerm(val) {
	if (typeof val === "string" || val.special) return true;
	const prop = _getFullImmRes_getNextProp(val);
	return prop == null;
};

function _getFullImmRes_getNextProp(obj) { return obj.immune ? "immune" : obj.resist ? "resist" : obj.vulnerable ? "vulnerable" : null; }

function _getFullImmRes_getRenderedString(str, {isPlainText = false, isTitleCase = false} = {}) {
	if (isTitleCase) str = str.toTitleCase();
	(function() { try { return Renderer.stripTags(`${str}`);} catch (error) { console.warn(WARNING); console.error(error); return str }})()
};

function _getFullImmRes_getRenderedObject(obj, {isPlainText = false, isTitleCase = false} = {}) {
	const stack = [];

	if (obj.preNote) stack.push(_getFullImmRes_getRenderedString(obj.preNote, {isPlainText}));

	const prop = _getFullImmRes_getNextProp(obj);
	if (prop) stack.push(_getFullImmRes_getRenderedArray(obj[prop], {isPlainText, isTitleCase, isGroup: true}));

	if (obj.note) stack.push(_getFullImmRes_getRenderedString(obj.note, {isPlainText}));

	return stack.join(" ");
};

function _getFullImmRes_getRenderedArray(values, {isPlainText = false, isTitleCase = false, isGroup = false} = {}) {
	// if (values.length === DMG_TYPES.length && CollectionUtil.deepEquals(DMG_TYPES, values)) {
	  // return "all damage"[isTitleCase ? "toTitleCase" : "toString"]();
	// }

	return values
		.map((val, i, arr) => {
      const isSimpleCur = _getFullImmRes_isSimpleTerm(val);

			const rendCur = isSimpleCur
				? val.special
					? _getFullImmRes_getRenderedString(val.special, {isPlainText, isTitleCase: false})
					: _getFullImmRes_getRenderedString(val, {isPlainText, isTitleCase})
				: _getFullImmRes_getRenderedObject(val, {isPlainText, isTitleCase});

			if (i === arr.length - 1) return rendCur;

			const isSimpleNxt = _getFullImmRes_isSimpleTerm(arr[i + 1]);

			if (!isSimpleCur || !isSimpleNxt) return `${rendCur}; `;
			if (!isGroup || i !== arr.length - 2 || arr.length < 2) return `${rendCur}, `;
			if (arr.length === 2) return `${rendCur} and `;
			return `${rendCur}, and `;
		})
		.join("");
};

function getFullImmRes(values, {isPlainText = false, isTitleCase = false} = {}) {
	if (!values?.length) return "";
	return _getFullImmRes_getRenderedArray(values, {isPlainText, isTitleCase});
};

const _SPELLCASTING_PROPS = [
  "constant",
  "will",
  "recharge",
  "charges",
  "rest",
  "restLong",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "ritual",
  "legendar",
];

spLevelToFull = function (level) {
	if (level === 0) return "Cantrip";
	else {
    i = Number(level);
    if (isNaN(i)) return "";
    const j = i % 10; const k = i % 100;
    if (j === 1 && k !== 11) return `${i}st`;
    if (j === 2 && k !== 12) return `${i}nd`;
    if (j === 3 && k !== 13) return `${i}rd`;
    return `${i}th`;
  }
};

copyFast = function (obj) {
  if ((typeof obj !== "object") || obj == null) return obj;

  if (obj instanceof Array) return obj.map(copyFast);

  const cpy = {};
  for (const k of Object.keys(obj)) cpy[k] = copyFast(obj[k]);
  return cpy;
}

_renderSpellcasting_getEntries = function (entry) {
  const hidden = new Set(entry.hidden || []);
  const toRender = [{type: "entries", name: entry.name, entries: entry.headerEntries ? copyFast(entry.headerEntries) : []}];

  if (_SPELLCASTING_PROPS.some(prop => entry[prop])) {
    const tempList = {type: "list", style: "list-hang-notitle", items: [], data: {isSpellList: true}};
    if (entry.constant && !hidden.has("constant")) tempList.items.push({type: "itemSpell", name: `Constant:`, entry: _renderSpellcasting_getRenderableList(entry.constant).join(", ")});
    if (entry.will && !hidden.has("will")) tempList.items.push({type: "itemSpell", name: `At will:`, entry: _renderSpellcasting_getRenderableList(entry.will).join(", ")});

    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "recharge", fnGetDurationText: num => `{@recharge ${num}|m}`, isSkipPrefix: true});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "legendary", fnGetDurationText: num => ` legendary action${num === 1 ? "" : "s"}`});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "charges", fnGetDurationText: num => ` charge${num === 1 ? "" : "s"}`});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "rest", durationText: "/rest"});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "restLong", durationText: "/long rest"});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "daily", durationText: "/day"});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "weekly", durationText: "/week"});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "monthly", durationText: "/month"});
    _renderSpellcasting_getEntries_procPerDuration({entry, tempList, hidden, prop: "yearly", durationText: "/year"});

    if (entry.ritual && !hidden.has("ritual")) tempList.items.push({type: "itemSpell", name: `Rituals:`, entry: _renderSpellcasting_getRenderableList(entry.ritual).join(", ")});
    tempList.items = tempList.items.filter(it => it.entry !== "");
    if (tempList.items.length) toRender[0].entries.push(tempList);
  }

  if (entry.spells && !hidden.has("spells")) {
    const tempList = {type: "list", style: "list-hang-notitle", items: [], data: {isSpellList: true}};

    const lvls = Object.keys(entry.spells)
      .map(lvl => Number(lvl))
      .sort((a, b) => {
        if (typeof FilterItem !== "undefined") {
          if (a instanceof FilterItem) a = a.item;
          if (b instanceof FilterItem) b = b.item;
        }
    
        if (b === a) return 0;
        return b < a ? 1 : -1;
      });

    for (const lvl of lvls) {
      const spells = entry.spells[lvl];
      if (spells) {
        let levelCantrip = `${spLevelToFull(lvl)}${(lvl === 0 ? "s" : " level")}`;
        let slotsAtWill = ` (at will)`;
        const slots = spells.slots;
        if (slots >= 0) slotsAtWill = slots > 0 ? ` (${slots} slot${slots > 1 ? "s" : ""})` : ``;
        if (spells.lower && spells.lower !== lvl) {
          levelCantrip = `${spLevelToFull(spells.lower)}-${levelCantrip}`;
          if (slots >= 0) slotsAtWill = slots > 0 ? ` (${slots} ${spLevelToFull(lvl)}-level slot${slots > 1 ? "s" : ""})` : ``;
        }
        tempList.items.push({type: "itemSpell", name: `${levelCantrip}${slotsAtWill}:`, entry: _renderSpellcasting_getRenderableList(spells.spells).join(", ") || "\u2014"});
      }
    }

    toRender[0].entries.push(tempList);
  }

  if (entry.footerEntries) toRender.push({type: "entries", entries: entry.footerEntries});
  return toRender;
};

_renderSpellcasting_getEntries_procPerDuration = function ({entry, hidden, tempList, prop, durationText, fnGetDurationText, isSkipPrefix}) {
  if (!entry[prop] || hidden.has(prop)) return;

  for (let lvl = 9; lvl > 0; lvl--) {
    const perDur = entry[prop];
    if (perDur[lvl]) {
      tempList.items.push({
        type: "itemSpell",
        name: `${isSkipPrefix ? "" : lvl}${fnGetDurationText ? fnGetDurationText(lvl) : durationText}:`,
        entry: _renderSpellcasting_getRenderableList(perDur[lvl]).join(", "),
      });
    }

    const lvlEach = `${lvl}e`;
    if (perDur[lvlEach]) {
      const isHideEach = !perDur[lvl] && perDur[lvlEach].length === 1;
      tempList.items.push({
        type: "itemSpell",
        name: `${isSkipPrefix ? "" : lvl}${fnGetDurationText ? fnGetDurationText(lvl) : durationText}${isHideEach ? "" : ` each`}:`,
        entry: _renderSpellcasting_getRenderableList(perDur[lvlEach]).join(", "),
      });
    }
  }
};

_renderSpellcasting_getRenderableList = function (spellList) {
  return spellList.filter(it => !it.hidden).map(it => it.entry || it);
};

_renderSpellcasting = function (entry, textStack, meta, options) {
  const toRender = _renderSpellcasting_getEntries(entry);
  return !toRender?.[0].entries?.length ? undefined : toRender;
}


