let passengerCount = 0

function increment() {
      let theCount = document.getElementById("count")
      passengerCount += 1
      theCount.innerText = passengerCount
}

function save() {
      let theCount = document.getElementById("count")
      theCount.innerText = 0
      let previousEntries = document.getElementById("previous")
      previousEntries.textContent += passengerCount + " - "
      passengerCount = 0
}

function reset() {
      let resetValue = document.getElementById("previous")
      resetValue.textContent = "Previous entries: "
}