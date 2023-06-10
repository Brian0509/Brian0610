// 單詞列表
var words = ['TEAM', 'APPLE', 'CAR', 'HOUSE', 'COMPUTER'];

var currentWordIndex = 0;
var currentWord = '';
var scrambledWord = '';

function scrambleWord(word) {
  // 將單詞的字母順序打亂
  var scrambledWord = word.split('').sort(function() {
    return 0.5 - Math.random();
  });
  return scrambledWord.join('');
}

function startGame() {
  currentWordIndex = 0;
  generateScrambledWord();
}

function generateScrambledWord() {
  if (currentWordIndex < words.length) {
    currentWord = words[currentWordIndex];
    scrambledWord = scrambleWord(currentWord);
  
    var scrambledWordElement = document.getElementById("scrambledWord");
    scrambledWordElement.textContent = scrambledWord;

    var guessInput = document.getElementById("guessInput");
    guessInput.value = "";

    var result = document.getElementById("result");
    result.textContent = "";
  } else {
    alert("遊戲結束！");
  }
}

function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value.toUpperCase();

  if (guess !== "") {
    var result = document.getElementById("result");
    var originalWord = unscrambleWord(scrambledWord);

    if (guess === currentWord) {
      result.textContent = "恭喜！你猜對了！";
    } else {
      result.textContent = "很抱歉，你猜錯了。正確答案是：" + currentWord;
    }

    currentWordIndex++;
    setTimeout(generateScrambledWord, 2000); // 2秒後生成下一個題目
  }
}

function unscrambleWord(scrambledWord) {
  // 移除字母間的空格
  var word = scrambledWord.replace(/\s/g, "");
  return word;
}

// 遊戲初始化
startGame();
