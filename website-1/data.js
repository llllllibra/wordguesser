

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getDatabase, ref, runTransaction } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBouWmEzoDcGMq0Vo12rXn0IfGB9_dm83M",
      authDomain: "highscores-7720b.firebaseapp.com",
      projectId: "highscores-7720b",
      storageBucket: "highscores-7720b.appspot.com",
      messagingSenderId: "106813683494",
      appId: "1:106813683494:web:e00ad83e730349467eb3e7",
      databaseURL: "https://highscores-7720b-default-rtdb.europe-west1.firebasedatabase.app",
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const highscoresRef = ref(db, 'highscores');


document.addEventListener("DOMContentLoaded", function() {
const lockButton = document.querySelector('.lock-button');
const nameBox = document.querySelector('.name-input');
const mode1Btn = document.querySelector('#mode1-btn');
const mode2Btn = document.querySelector('#mode2-btn');
const mainMenu = document.querySelector('.mainmenu');
const scoreReset = document.querySelector('.scoreboard-reset');
const scoreContainer = document.querySelector('.score-container');
const leaderboardButton = document.querySelector('button.leaderboard');

var locked = 0;
var userName;
let currentScore;
let data = null;

lockButton.addEventListener('click', function() {
  locked = 1;
  userName = nameBox.value.toLowerCase();
  lockButton.classList.add('username-invisible');
  nameBox.classList.add('username-invisible');
  console.log(`username is ${userName}`);
  document.querySelector('.scoreboard').classList.add('scoreboard-visible')
  const userNameLong = userName.length > 6 ? userName.slice(0, 6) + '...' : userName;
  document.querySelector('.scoreboard-reset').classList.add('scoreboard-visible');

  const userNameDiv = document.createElement('p');
  userNameDiv.classList.add('scoreboard-name');
  userNameDiv.textContent = "User: " + userNameLong;
  scoreContainer.appendChild(userNameDiv);
  document.querySelector('.scoreboard-name').classList.add('scoreboard-name-visible');
}, false);

mode1Btn.addEventListener('click', function() {
  lockButton.classList.add('username-invisible');
  nameBox.classList.add('username-invisible');
  document.querySelector('.high-score').classList.remove('scoreboard-name-visible');
  document.querySelector('.scoreboard-reset').classList.remove('scoreboard-visible');
  const scoreboardName = document.querySelector('.scoreboard-name');
  if (scoreboardName) {
    scoreboardName.classList.remove('scoreboard-name-visible');
  }
}, false);

mode2Btn.addEventListener('click', function() {
  lockButton.classList.add('username-invisible');
  nameBox.classList.add('username-invisible');
  document.querySelector('.high-score').classList.remove('scoreboard-name-visible');
  document.querySelector('.scoreboard-reset').classList.remove('scoreboard-visible');

  const scoreboardName = document.querySelector('.scoreboard-name');
  if (scoreboardName) {
    scoreboardName.classList.remove('scoreboard-name-visible');
  }
}, false);

mainMenu.addEventListener('click', function() {
  console.log(`Locked is: ${locked}`);
  if (locked === 0) {
  lockButton.classList.remove('username-invisible');
  nameBox.classList.remove('username-invisible');
 }
 else if (locked === 1){
  document.querySelector('.scoreboard-reset').classList.add('scoreboard-visible');
  document.querySelector('.high-score').classList.add('scoreboard-name-visible');
  document.querySelector('.scoreboard-name').classList.add('scoreboard-name-visible');
 }
}, false);


scoreReset.addEventListener('click', function() {
  const scoreboard = document.querySelector('.scoreboard-visible');
  if (scoreboard) {
    const currentScore = parseInt(scoreboard.textContent.split(': ')[1]);
    console.log(`The current score is: ${currentScore}`);
    const hiScores = document.querySelectorAll('.high-score');
    hiScores.forEach(hiScores => hiScores.remove());
    setTimeout(() => {
      runTransaction(highscoresRef, (data) => {
        if (!data) {
          data = {};
        }
        if (!data[userName.toLowerCase()]) {
          data[userName.toLowerCase()] = {
            name: userName.toLowerCase(),
            score: 0
          };
        }
        if (data[userName].score < currentScore) {
          data[userName].score = currentScore;
        }
        return data;
      }).then((result) => {
  const updatedData = result.snapshot.val();
  if (result.committed) {
    const userHighScore = updatedData[userName].score ? updatedData[userName].score : 0;
    console.log(`${userName}'s score is :${currentScore} hi-score is: ${userHighScore}`);
    const highScore = document.createElement('p');
    highScore.classList.add('high-score');
    highScore.textContent = "Hi-Score: " + userHighScore;
    scoreContainer.appendChild(highScore);
    document.querySelector('.high-score').classList.add('scoreboard-name-visible');
    console.log(`High score for ${userName} has been updated to ${currentScore}`);
  } else {
    console.log(`High score for ${userName} was not updated`);
  }
      }).catch((error) => {
        console.error(error);
      });
    }, 100);
  } else {
    console.error('Could not find scoreboard element');
  }
}, false);

leaderboardButton.addEventListener('click', function() {
  const leaderboardMenu = document.getElementById('leaderboard-menu');
  const leaderboardList = document.getElementById('leaderboard-list');

  // Clear any existing leaderboard entries
  while (leaderboardList.firstChild) {
    leaderboardList.removeChild(leaderboardList.firstChild);
  }

  // Retrieve all high scores from the database and sort them by score
  runTransaction(highscoresRef, (data) => {
    const highScores = [];
    for (const key in data) {
      highScores.push(data[key]);
    }
    highScores.sort((a, b) => b.score - a.score);
    return highScores;
  }).then((result) => {
    const highScores = result.snapshot.val();

    // Display the top 15 high scores in the leaderboard
    for (let i = 0; i < Math.min(highScores.length, 50); i++) {
      const highScore = highScores[i];
      const listItem = document.createElement('li');
      listItem.textContent = `${i + 1}. ${highScore.name}: ${highScore.score}`;
      leaderboardList.appendChild(listItem);
    }


    // Show the leaderboard menu
    leaderboardMenu.classList.remove('leaderboard-fade-out');
    leaderboardMenu.classList.add('leaderboard-fade');
    leaderboardMenu.style.pointerEvents = 'none';
  }).catch((error) => {
    console.error(error);
  });
});

});
