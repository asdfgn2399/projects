let playing = false
let currentID = "stop"

function runApp() {
  playing = true
  let toggle = document.getElementById("startButton")
  toggle.onclick = () => { stopApp() }
  toggle.innerHTML = "Stop!"
  changeTheme()
  setStop()
}

function stopApp() {
  playing = false
  let toggle = document.getElementById("startButton")
  toggle.onclick = () => { runApp() }
  toggle.innerHTML = "Go!"
}

function changeTheme() {
  currentID = (currentID == "start") ? "stop" : "start"

  document.getElementById("container").className = currentID;
  document.getElementById("textbox").innerHTML = currentID.toUpperCase()
}

function setStop() {
  let time = 6000 + (Math.random() * 9000)

  setTimeout(() => {
    changeTheme()
    if (playing) {
      setStart()
    }
  }, time)
}

function setStart() {
  let time = 1000 + (Math.random() * 5000)

  setTimeout(() => {
    changeTheme()
    if (playing) {
      setStop()
    }
  }, time)
}
