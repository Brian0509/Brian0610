// 產生一個介於 min 和 max 之間的隨機整數
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var minNumber = 1;
  var maxNumber = 100;
  var secretNumber = getRandomInt(minNumber, maxNumber);
  var guessCount = 0;
  var maxGuesses = 10;
  
  function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
  
    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
      alert("請輸入介於 " + minNumber + " 到 " + maxNumber + " 之間的有效數字！");
      return;
    }
  
    guessCount++;
  
    var result = document.getElementById("result");
    var remainingGuesses = maxGuesses - guessCount;
  
    if (guess === secretNumber) {
      result.textContent = "恭喜！你猜對了！總共猜了 " + guessCount + " 次。";
      resetGame();
    } else if (guess < secretNumber) {
      result.textContent = "猜的數字太小了！還有 " + remainingGuesses + " 次機會。數字範圍: " + (guess + 1) + " 到 " + maxNumber + "。";
      minNumber = guess + 1;
    } else {
      result.textContent = "猜的數字太大了！還有 " + remainingGuesses + " 次機會。數字範圍: " + minNumber + " 到 " + (guess - 1) + "。";
      maxNumber = guess - 1;
    }
  
    if (guessCount === maxGuesses) {
      result.textContent = "很遺憾，你沒有猜中！正確數字是 " + secretNumber + "。";
      resetGame();
    }
  
    guessInput.value = "";
  }
  
  function resetGame() {
    minNumber = 1;
    maxNumber = 100;
    secretNumber = getRandomInt(minNumber, maxNumber);
    guessCount = 0;
  }
  