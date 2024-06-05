let playing = false
let currentID = "stop"
let lastTimeoutID

function runApp() {
  playing = true
  let toggle = document.getElementById("startButton")
  toggle.onclick = () => { stopApp() }
  toggle.innerHTML = "Stop!"
  changeTheme()
  setStop()
}

function stopApp() {
  console.log("Stopping App")
  clearTimeout(lastTimeoutID)
  playing = false
  changeTheme("ready")
  let toggle = document.getElementById("startButton")
  toggle.onclick = () => { runApp() }
  toggle.innerHTML = "Go!"
}

function changeTheme(changeTo) {
  currentID = (currentID == "stop" || currentID == "ready") ? "start" : "stop"
  currentID = changeTo ? changeTo : currentID

  let puctuation = (currentID == "ready") ? "?" : ""

  document.getElementById("container").className = currentID;
  document.getElementById("textbox").innerHTML = currentID.toUpperCase() + puctuation
}

function setStop() {
  console.log("Setting stop")
  let time = 6000 + (Math.random() * 9000)

  lastTimeoutID = setTimeout(() => {
    changeTheme()
    if (playing) {
      setStart()
    }
  }, time)
}

function setStart() {
  console.log("Setting start")
  let time = 1000 + (Math.random() * 5000)

  lastTimeoutID = setTimeout(() => {
    changeTheme()
    if (playing) {
      setStop()
    }
  }, time)
}
