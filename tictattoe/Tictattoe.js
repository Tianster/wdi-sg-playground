var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]] // winning combinations 
var currentBoardState = [null, null, null,
                          null, null, null,
                          null, null, null]
var currentPlayer = 'one' //  Setting that it's player one's turn
var body = document.querySelector('body')
body.addEventListener('click', event => {
  var tile = event.target

  if (tile.className === 'buttonBox') {
    Array.from(document.querySelectorAll('.tile')).forEach(function (tile) {
      tile.textContent = ''
      document.getElementById('ResultBanner').textContent = ''
      currentBoardState.forEach(function (element, index) {
      currentBoardState[index] = null
      })
    })
  }
  if (tile.className !== 'tile') return //  if the class name of what was clicked on is not tile then quit function
  if (tile.textContent) return // to make sure once clicked it wont override
  if (currentPlayer === 'one') {
    tile.textContent = 'x'
    currentPlayer = 'two'
    currentBoardState[tile.id] = 'x'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one'
    currentBoardState[tile.id] = 'o'
  }
  // Check win lose or draw here
  // console.log(checkWin())
  if(checkWin ()) {
    //Print on page
    var winner = 'one'
    if (currentPlayer === 'one') winner = 'two'
    document.getElementById('ResultBanner').textContent = 'The winner is ' + winner
  }
})


function checkWin () {
  return winCombos.some(function (winCombo) {
    return threeInRow(winCombo)
  })
}

function threeInRow (winCombo) {
  var first = currentBoardState[winCombo[0]]
  var second = currentBoardState[winCombo[1]]
  var third = currentBoardState[winCombo[2]]

  if (first) {
    return first === second && first === third
  }
  else { return false }
}
