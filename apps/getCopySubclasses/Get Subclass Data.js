var useUA = false
var usePSA = false

function toggleUA() {
	useUA = useUA ? false : true
	useUAButton.innerHTML = useUA ? 'Exclude UA' : 'Include UA'
}

function togglePSA() {
	usePSA = usePSA ? false : true
	usePSAButton.innerHTML = usePSA ? 'Exclude PSA' : 'Include PSA'
}

function getSubclasses() {
	var data = ''
	var currentClass = classInput.value
	fetch(`https://raw.githubusercontent.com/5etools-mirror-1/5etools-mirror-1.github.io/master/data/class/class-${currentClass.toLowerCase()}.json`)
			.then((response) => response.json())
			.then((json) => {
				data = json
				var subclasses = data.subclass
				var output = ''
	
				subclasses.forEach(sub => {
					var isUA = sub.source.substring(0, 2) == 'UA'
					var isPSA = sub.source.substring(0, 3) == 'PSA'
					var isUAClass = sub.classSource.substring(0, 2) == 'UA'
					if ((isUA == useUA || isUA == false) && (isPSA == usePSA || isPSA == false) && !isUAClass) {
						output += `{
		"source": "JarlaxlesBagOfEverything",
		"className": "${currentClass} (Expanded)",
		"classSource": "JarlaxlesBagOfEverything",
		"_copy": {
			"name": "${sub.name}",
			"source": "${sub.source}",
			"shortName": "${sub.shortName}",
			"className": "${currentClass}",
			"classSource": "PHB"
		}
	},
	`
					}
				})
	
				documentOutput.innerHTML = output
			});
}