function updateTimers() {
  if (timerRunning) {
    console.log("Updated!")
    for (const timer of timers) {
      if (timer.timeStarted !== 0)
        ms = Date.now() - timer.timeStarted
        cs = Math.floor((ms / 10) % 100).toLocaleString('en-US', {minimumIntegerDigits: 2, maximumIntegerDigits: 2, useGrouping:false})
        s = Math.floor((ms / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        m = Math.floor(ms / 60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        document.getElementById(timers[i].name).innerHTML = m + ':' + s + ':' + cs
    }
  }
}

function lapTimer() {
  console.log("Running!")
  timerRunning = true
  for (let i = 1; i < timers.length + 1; i++) {
    if (i == timerLap) {
      timers[i].timeStarted = Date.now()
    }
  }
  
  timerLap += 1
  if (timerLap == 5) {
    timerLap = 0
    timerRunning = false
  }
  document.getElementById('lap').innerHTML = lines[timerLap]
}

function resetTimer() {
  console.log("Reset!")
  timerRunning = false
  timerLap = 0
  for (let i = 0; i < timers.length; i++) {
    timers[i].timeStarted = 0
  }
  
  document.getElementById('lap').innerHTML = lines[0]
  for (const timer of timers) {
    document.getElementById(timer.name).innerHTML = '00:00:00'
  }
}

function saveTimerData() {
  console.log(JSON.stringify(timers))
}

timerRunning = false
timerLap = 0
timers = [
  {name: "timer-back-hog", timeStarted: 0},
  {name: "timer-tee-hog", timeStarted: 0},
  {name: "timer-hog-hog", timeStarted: 0},
  {name: "timer-hog-stop", timeStarted: 0}
]
lines = ["Start", "Tee Line", "Hog Line", "Hog Line", "Stop"]
timerData = {}

setInterval(updateTimers, 10);
