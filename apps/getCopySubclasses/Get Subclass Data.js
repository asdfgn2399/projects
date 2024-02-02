var useUA = false;
var usePSA = false;
documentOutput.innerHTML = `Example Output
	{
		"source": "JBoE",                         *New Source*
		"className": "Ranger (Expanded)",         *New Class Name*
		"classSource": "JBoE",                    *New Class Source*
		"_copy": {
			"name": "Beast Master",           *Generated*
			"source": "PHB",                  *Generated*
			"shortName": "Beast Master",      *Generated*
			"className": "Ranger",            *Old Class Name*
			"classSource": "PHB"              *Old Class Source*
		}
	}`;

function toggleUA() {
	useUA = useUA ? false : true;
	useUAButton.innerHTML = useUA ? 'Exclude UA' : 'Include UA';
}

function togglePSA() {
	usePSA = usePSA ? false : true;
	usePSAButton.innerHTML = usePSA ? 'Exclude PSA' : 'Include PSA';
}

function getSubclasses() {
	var data = '';
	var currentClass = classInput.value;
  var currentSource = sourceInput.value;
  var newSource = newSourceInput.value;
  var newClass = newClassNameInput.value;
  var newClassSource = newClassSourceInput.value ;
  var urlToFetch = urlInput.value !== "" ? urlInput.value : `https://raw.githubusercontent.com/5etools-mirror-2/5etools-mirror-2.github.io/master/data/class/class-${currentClass.toLowerCase()}.json`;
	console.log("Fetching: " + urlToFetch)
	fetch(urlToFetch).then((response) => response.json()).then((json) => {
    data = json;
    var subclasses = data.subclass;
    var output = '';

    subclasses.forEach(sub => {
      var isUA = sub.source.substring(0, 2) == 'UA';
      var isPSA = sub.source.substring(0, 3) == 'PSA';
      var isUAClass = sub.classSource.substring(0, 2) == 'UA';
      console.log(sub.className + ' == ' + currentClass);
      var isRightClass = sub.className == currentClass;
      if ((isUA == useUA || isUA == false) && (isPSA == usePSA || isPSA == false) && !isUAClass && isRightClass) {
        output += `
	{
		"source": "${newSource}",
		"className": "${newClass}",
		"classSource": "${newClassSource}",
		"_copy": {
			"name": "${sub.name || sub._copy.name}",
			"source": "${sub.source}",
			"shortName": "${sub.shortName || sub._copy.shortName}",
			"className": "${currentClass}",
			"classSource": "${currentSource}"
		}
	},`;
      }
    });

		output = output.slice(0, -1)
    documentOutput.innerHTML = output;
  });
}

function copyOutput() {
	navigator.clipboard.writeText(documentOutput.innerHTML)
	alert("Copied!")
}