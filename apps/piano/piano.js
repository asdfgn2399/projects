function playNote(note, octave) {
	tones.play(note, octave)
}

async function loadPiano() {
	var pianoKeys = await fetch('piano.json').then((response) => response.json())
	window.pianoKeys = pianoKeys;
	window.isGettingKey = false;
	window.useDefault = true;

	renderPiano(3, 6)
}

function renderPiano(bottomOctave, topOctave) {
	var pianoHTMLString = ""
	var i = 0;
	pianoKeys.map.forEach((key) => {
		if (key.octave >= bottomOctave && key.octave <= topOctave) {
			var color = key.note.length == 1 ? 'white' : 'black';
			var bindTxt = "";
			var bindData = "";
			if (key?.userBind) {
				bindTxt = '(' + key.userBind + ')';
				bindData = key.userBind;
			} else if (key?.bind && useDefault) {
				bindTxt = '(' + key.bind + ')';
				bindData = key.bind;
			}
			pianoHTMLString += `<div class="piano-key ${color}" data-bind="${bindData}" data-index="${i}" onclick="playNote('${key.note}', ${key.octave})" ondblclick="setBind(this)">${key.display}<br>${bindTxt}</div>`
		}
		i++;
	})
	
	if (bottomOctave > topOctave && bottomOctave > 4) pianoHTMLString = "Your Bottom Octave is too high!"
	else if (bottomOctave > topOctave && bottomOctave <= 4) pianoHTMLString = "Your Top Octave is too low!"
	pianoContainer.innerHTML = pianoHTMLString;
}

function checkBinds(e) {
	var keys = document.getElementsByClassName('piano-key')
	var isUsed = false
	for (var i = 0; i < keys.length; i++) {
		if (e.key == keys[i].dataset.bind) { 
			keys[i].click();
			isUsed = true;
			window.newKey = undefined;
			break;
		}
	}

	if (!isUsed && e.key.length == 1) {
		title.innerHTML = "Piano (Double Click a key to set its bind as '" + e.key + "')"
		window.newKey = e.key;
	} else {
		title.innerHTML = "Piano"
	}
}

function setBind(ele) {
	if (newKey == undefined) {
		if (!confirm('Are you sure you want to remove this keybind?')) {
			return;
		}
	}
	ele.dataset.bind = newKey;
	pianoKeys.map[ele.dataset.index].userBind = newKey;
	newKey = undefined;
	renderPiano(bottomOctave.value, topOctave.value)
	title.innerHTML = "Piano"
}

window.addEventListener('load', loadPiano)
window.addEventListener('keydown', (e) => {
	checkBinds(e)
})

bottomOctave.onchange = () => {
	bottomOctaveNum.value = bottomOctave.value
	renderPiano(bottomOctave.value, topOctave.value)
}
topOctave.onchange = () => {
	topOctaveNum.value = topOctave.value
	renderPiano(bottomOctave.value, topOctave.value)
}
useDefaultBinds.onchange = () => {
	useDefault = useDefaultBinds.checked
	renderPiano(bottomOctave.value, topOctave.value)
}