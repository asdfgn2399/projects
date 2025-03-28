// References Renderer.stripTags() from 5e.tools/js/render.js
// Without this function, output will contain 5etools tags
const WARNING = "Load /js/render.js, /js/utils.js, and /js/parser.js from 5e.tools to use this script fully"

function convert5eToolsToStatblock(input, legendaryGroup) {
  return {
    name: input.name || "Monster",
    size: convertSize(input.size[0]) || "medium",
    type: convertType(input.type, "type") || "humanoid",
    tag: convertType(input.type, "tag") || "",
    alignment: convertAlignment(input.alignment, input.alignmentPrefix) || "any alignment",
    hitDice: extractHitDice(input.hp?.formula) || 5,
    ac: input.ac[0]?.ac ? input.ac[0]?.ac : input.ac || 10,
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
    cr: input.cr || "*",
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
    ? input.immune?.filter((dmg) => (typeof dmg === "object")).map((dmg) => ({ name: Parser.getFullImmRes([dmg]), note: " (Immune)", type: "i" })).concat(input.resist?.filter((dmg) => (typeof dmg === "object")).map((dmg) => ({ name: Parser.getFullImmRes([dmg]), note: " (Resistant)", type: "r" }))).filter((ele) => ele !== undefined)
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
    
    // Custom fields - should only be used for summoned creatures or other edge cases
    otherArmorDesc: (function (ac) { return Boolean(ac?.special) ? ac?.special : (Boolean(ac?.condition) ? (function() { try { return Parser.acToFull(input.ac) } catch { console.warn(WARNING); console.error(error); JSON.stringify(input.ac) }})() : ac.ac + " (" + rendererStripTagsTC(ac.from?.join(", ")) + ")" )})(input.ac[0]) || "10 (armor)",
    customHP: Boolean(input.hp?.special) || false,
    customSpeed: (typeof input.speed === "object" ? Boolean(Object.entries(input.speed).find(([key, value]) => (value.condition?.length > 0))) : false),
    hpText: input.hp?.special || "4 (1d8)",
    customCr: /* Custom CR text if necessary */ "",
    customProf: 2,
    shortName: "",
    pluralName: "",
  };
}

function rendererStripTagsTC(input) {
  try { 
    return Renderer.stripTags(`${input}`)
  } catch (error) { 
    console.warn(WARNING); 
    console.error(error); 
    return input
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertSize(size) {
  return Parser.SIZE_ABV_TO_FULL[size].toLowerCase() || "medium";
}

function convertType(type, typeOrTag) {
  if (typeOrTag === "type") {
    if (!type) return "humanoid";
    else if (typeof type === "string") return capitalizeFirstLetter(type);
    else return capitalizeFirstLetter(type.type)
  } else if (typeOrTag === "tag") return (typeof type === "object" && type.tags) ? type.tags?.join(", ") : undefined;
}

function convertAlignment(alignment, alignmentPrefix) {
  // TODO - Handle NX, NY, etc..
  return (alignmentPrefix ? alignmentPrefix : "") + Parser.alignmentListToFull(alignment);
}

function extractHitDice(formula) {
  const match = formula !== undefined ? formula.match(/(\d+)d(\d+)/) : undefined
  return match ? parseInt(match[1]) : match;
}

function extractSense(senses, type) {
  const sense = senses?.find((s) => s.split(" ").includes(type));
  return sense ? parseInt(sense.match(/\d+/)[0]) : 0;
}

function convertTrait(trait) {
  return { name: rendererStripTagsTC(trait.name), desc: rendererStripTagsTC(trait.entries.join(" ")) };
}

function convertAction(action) {
  return { name: rendererStripTagsTC(action.name), desc: rendererStripTagsTC(action.entries.join(" ")) };
}

function checkForSpellcasting(spellcasting, displayAs) {
  if (!spellcasting) return;
  let spellcastingArr = _renderSpellcasting(spellcasting[0], [], {}, {});

  return displayAs == spellcasting[0].displayAs ? { name: spellcasting[0].name, desc: spellcastingArr[0].entries.map((entry) => {
    if (typeof entry === "string") return rendererStripTagsTC(entry);
    else  if (typeof entry === "object") {
      if (!entry.data?.isSpellList) console.error("Error: Unhandled table in spellcasting entry!")
      else {
        let output = ""

        for (const item of entry.items) {
          output += `\n> * ${item.name} ${item.entry}`
        }

        return rendererStripTagsTC(output)
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
    if (Number(value) > Math.floor((input[Parser.SKILL_TO_ATB_ABV[key]] - 10) / 2 ) + Parser.crToPb(input.cr)) return { name: key,  stat: Parser.SKILL_TO_ATB_ABV[key],  note: " (ex)"}
    else return { name: key,  stat: Parser.SKILL_TO_ATB_ABV[key] }
  });
}

function formatSpeedDescription(speedData) {
  if (!speedData) return "30 ft.";
  return Object.entries(speedData)
    .map(([key, value]) => `${(key === "walk" ? "" : key + " ")}${(typeof value === "object" ? value.number : value)} ft.${(value?.condition ? " " + value.condition : "")}`)
    .filter((ent) => ent !== "canHover true ft.")
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
  return ac.find((armor) => (armor.from?.find((item) => (item.includes("shield|phb") || item.includes("shield|xphb"))))) ? 2 : 0;
}

function findArmorName(ac) {
  if (ac[0]?.special || ac[0]?.condition || ac.length > 1) return "other"
  else if (!ac[0].from) return "none";
  else return ac.map((armor) => (rendererStripTagsTC(armor.from[0]))).join(", ");
}

function convertLairRegionalActions(lairActions, actionType) {
  if (actionType === "actions") return lairActions[1].items.map((action) => ({ name: lairActions[1].items.indexOf(action), desc: rendererStripTagsTC((action.name ? "**" + action.name + ":** " + action.entry : action))}))
  else if (actionType === "beginning") return rendererStripTagsTC(lairActions[0]);
  else if (actionType === "ending") {
    return (typeof lairActions[2] === "string") ? rendererStripTagsTC(lairActions[2]) : (function() {
      alert("Additional Lair Actions will not be shown");
      return "See book for Additional Lair Actions"
    })();
  }
}

_renderSpellcasting = function (entry) {
  const toRender = (function() { try { return Renderer.get()._renderSpellcasting_getEntries(entry) } catch { console.warn(WARNING); console.error(error); JSON.stringify(entry) }})();
  return !toRender?.[0].entries?.length ? undefined : toRender;
}