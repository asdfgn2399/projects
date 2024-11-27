function updateTimers() {
  if (timerRunning) {
    console.log("Updated!")
    for (i = 0; i < 4; i++) {
      if (timeStarted[i] !== 0)
        ms = Date.now() - timeStarted[i]
        cs = Math.floor((ms / 10) % 100).toLocaleString('en-US', {minimumIntegerDigits: 2, maximumIntegerDigits: 2, useGrouping:false})
        s = Math.floor((ms / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        m = Math.floor(ms / 60000).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        document.getElementById(timers[i]).innerHTML = m + ':' + s + ':' + cs
    }
  }
}

function lapTimer() {
  console.log("Running!")
  timerRunning = true
  timeStarted[timerLap] = Date.now()
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
  timeStarted = [0, 0, 0, 0, 0]
  document.getElementById('lap').innerHTML = lines[0]
  for (const timer of timers) {
    document.getElementById(timer).innerHTML = '00:00:00'
  }
}

function saveTimerData() {

}

timeStarted = [0, 0, 0, 0, 0]
timerRunning = false
timerLap = 0
timers = ["timer-back-hog", "timer-tee-hog", "timer-hog-hog", "timer-hog-stop"]
lines = ["Start", "Tee Line", "Hog Line", "Hog Line", "Stop"]
timerData = {}

setInterval(updateTimers, 10);