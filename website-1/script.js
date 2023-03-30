
document.addEventListener("DOMContentLoaded", function() {
const logo = document.querySelector('.logo');
const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu_button");
const menuXBtn = document.querySelector(".xmenubutton-container");
const mode1Btn = document.querySelector('#mode1-btn');
const mode2Btn = document.querySelector('#mode2-btn');
const elementsToFade = document.querySelectorAll('.fade, .fade-out');
const elementsToGameFade = document.querySelectorAll('.game-fade');
const menuElementsToFade = document.querySelectorAll('.menu-fade-out');
const leaderboardElementsToFade = document.querySelectorAll('.leaderboard-fade-out');
const soundBtn = document.querySelector(".soundbutton");
const musicBtn = document.querySelector(".musicbutton");
const coffeeBtn = document.querySelector(".coffeebutton");
const s20secbeat = document.getElementById('20secbeat');
const s40secbeat = document.getElementById('40secbeat');
const s60secbeat = document.getElementById('60secbeat');
const s60secreplaymode = document.getElementById('60secreplaymode');
const click = document.getElementById('click');
const cosmicGlow = document.getElementById('cosmic-glow');
const endAmbience = document.getElementById('end-ambience');
const laserGroove = document.getElementById('laser-groove');
const spaceAmbient = document.getElementById('space-ambient');
const strangeLaser = document.getElementById('strange-laser');
const successBell = document.getElementById('success-bell');
const wrongBell = document.getElementById('wrong-bell');
const pling = document.getElementById('pling');
const swoosh = document.getElementById('swoosh');
const swoosh2 = document.getElementById('swoosh2');
const swoosh3 = document.getElementById('swoosh3');
const swoosh4 = document.getElementById('swoosh4');
const ufo1 = document.getElementById('ufo1');
const ufo2 = document.getElementById('ufo2');
const ufo3 = document.getElementById('ufo3');
const ufo4 = document.getElementById('ufo4');
const ufo5 = document.getElementById('ufo5');
const ufo6 = document.getElementById('ufo6');
const ufo7 = document.getElementById('ufo7');
const keytap1 = document.getElementById('keytap1');
const keytap2 = document.getElementById('keytap2');
const keytap3 = document.getElementById('keytap3');
const keytap4 = document.getElementById('keytap4');
const keytap5 = document.getElementById('keytap5');
const keytap6 = document.getElementById('keytap6');
const keytap7 = document.getElementById('keytap7');
const keytap8 = document.getElementById('keytap8');
const keytap9 = document.getElementById('keytap9');
const keytap10 = document.getElementById('keytap10');
const blackOverlay = document.querySelector('.blackoverlay');
const volumeSlider = document.getElementById("volume-slider");
const sounds = [s20secbeat, s40secbeat, s60secbeat,s60secreplaymode,click,cosmicGlow,endAmbience,laserGroove,spaceAmbient,strangeLaser,successBell,swoosh,swoosh2,swoosh3,swoosh4, ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7];
const satelliteSound = document.querySelector(".satellite-click");
const satelliteSVG = document.querySelector(".satellite");
const ufoSounds = [ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7];
const keytaps = [keytap1, keytap2, keytap3, keytap4, keytap5, keytap6, keytap7, keytap8, keytap9, keytap10];
const replayModeBtn = document.querySelector(".replaymode-button");
const replayBtn = document.querySelector(".replay-button");
const replayText = document.querySelector('.replaymode-text');
const usernameTextplainer = document.querySelector('.username-textsplainer');
const mainMenu = document.querySelector('.mainmenu');
const inputBox = document.querySelector('.input-box input');
const wordContainer = document.querySelector('.word-container');
const dashesContainer = document.querySelector('.dashes-container');
const leaderboardButton = document.querySelector('button.leaderboard');
const leaderboardXButton = document.querySelector('.xleaderboard-container');
const lockButton = document.querySelector('.lock-button');
const nameBox = document.querySelector('.name-input');

  let endAmbiencePlaying = false;
  let gameStartedCount = 0;
  let won1 = 0
  var definition; 
  var definitionExample; 
  var numChars;  
  var word;
  var timeLeft;
  var lastWord;
  var randomWord;
  var startPosition;
  var score = 0;
  let noBackSpace = 0;
  let middleIndex;
  var gameMode;
  let replayMode = 0;
  let soundVolume = 0.5;
  let musicVolume = 0.5;
  let usedWords = [];
  let continueListening = true;
  var timer;
  var caretDiv;
  var wordChars;
  let inputListener;
  var soundEnabled = true;
  var timerElement = document.getElementById("timer");
  var secondsElement = document.querySelector(".seconds");
  var timerValueElement = document.querySelector("#timer-value");

startInputListener();

var img = new Image();
img.src = 'Content/Satellite/satellite1-2.svg';

// Load the other satellite images into the browser cache
var img2 = new Image();
img2.src = 'Content/Satellite/satellite2-2.svg';

var img3 = new Image();
img3.src = 'Content/Satellite/satellite3-2.svg';

var img4 = new Image();
img4.src = 'Content/Satellite/satellite4-2.svg';

mode1Btn.addEventListener('click', function() {
  continueListening = true;
  document.querySelector('.scoreboard-reset').classList.remove('scoreboard-visible');
  lockButton.classList.add('username-invisible');
  nameBox.classList.add('username-invisible');
  click.currentTime = 0;
  click.play();
  gameMode = 1;
  gameStart();
  
  enterKey();
      function interpolate(startValue, endValue, fraction) {
    return startValue * (1 - fraction) + endValue * fraction;
  }
    const fadeOutInterval = setInterval(() => {
    if (!continueListening) {
    return;
  }
      if (spaceAmbient.paused) return;
    if (spaceAmbient.volume > 0) {
      const progress = 0.1; // Example progress value
      const newVolume = interpolate(spaceAmbient.volume, 0, progress);
      spaceAmbient.volume = Math.max(0, Math.min(1, newVolume));
      if (spaceAmbient.volume < 0.01) { 
    spaceAmbient.volume = 0; 
  }
    } else {
      clearInterval(fadeOutInterval);
      spaceAmbient.pause();
    }
  }, 100);
      
}, false);

mode1Btn.addEventListener('mouseover', function() {
  swoosh.currentTime = 0;
  swoosh.play();
}, false);

mode2Btn.addEventListener('click', function() {
  continueListening = true;
  document.querySelector('.scoreboard-reset').classList.remove('scoreboard-visible');
  lockButton.classList.add('username-invisible');
  nameBox.classList.add('username-invisible');
  click.currentTime = 0;
  click.play();
  gameMode = 2;
  gameStart();
  
  enterKey();
      function interpolate(startValue, endValue, fraction) {
    return startValue * (1 - fraction) + endValue * fraction;
  }
    const fadeOutInterval = setInterval(() => {
    if (!continueListening) {
    return;
  }
      if (spaceAmbient.paused) return;
    if (spaceAmbient.volume > 0) {
      const progress = 0.1; // Example progress value
      const newVolume = interpolate(spaceAmbient.volume, 0, progress);
      spaceAmbient.volume = Math.max(0, Math.min(1, newVolume));
      if (spaceAmbient.volume < 0.01) { 
    spaceAmbient.volume = 0; 
  }
    } else {
      clearInterval(fadeOutInterval);
      spaceAmbient.pause();
    }
  }, 100);
      
}, false);

mode2Btn.addEventListener('mouseover', function() {

  swoosh2.currentTime = 0;
  swoosh2.play();
}, false);

menuBtn.addEventListener('click', function() {
  click.play();
  openMenu();
}, false);

menuBtn.addEventListener('mouseover', function() {
  swoosh3.play()
}, false);

leaderboardButton.addEventListener('click', function() {
  click.play();
  leaderboardMenu();
}, false);

leaderboardButton.addEventListener('mouseover', function() {
  swoosh3.play()
}, false);

leaderboardXButton.addEventListener('click', function() {
  click.play();
  leaderboardMenu();
}, false);

leaderboardXButton.addEventListener('mouseover', function() {
  swoosh3.play()
}, false);


const leaderboardList = document.getElementById('leaderboard-list');
if (leaderboardList.querySelectorAll('li').length === 0) {
  console.error('Could not find leaderboards');
  // Display an error message
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'No high scores found.';
  leaderboardList.appendChild(errorMessage);
}



mainMenu.addEventListener('click', function() {
  swoosh3.currentTime = 0;
  swoosh3.play();
  document.getElementById('timer').classList.remove('timer-visible');
  document.querySelector('.replay-up').style.visibility = 'hidden';
  secondsElement.style.display = 'none';
  replayModeBtn.style.visibility = 'hidden'

  openMenu();
sounds.forEach(sound => {
  sound.pause();
  sound.currentTime = 0;
});
    const elementsWithMonkeOrbit = document.querySelectorAll('.monke_orbit');
    mode1Btn.classList.add("menubutton-reactable")
    mode2Btn.classList.add("menubutton-reactable")
  for (let i = 0; i < elementsWithMonkeOrbit.length; i++) {
    elementsWithMonkeOrbit[i].classList.remove('monke_wobble');
    elementsWithMonkeOrbit[i].classList.add('monke_orbit');
  }
    const elementsWithMonkeScale = document.querySelectorAll('.monke_scale');
  for (let i = 0; i < elementsWithMonkeScale.length; i++) {
    elementsWithMonkeScale[i].classList.remove('monke_scale2');
    elementsWithMonkeScale[i].classList.add('monke_scale');
  }
  for (let i = 0; i < elementsToGameFade.length; i++) {
    elementsToGameFade[i].classList.remove('game-fade-out');
    elementsToGameFade[i].classList.add('game-fade');
    fadeInElements()
    }
  mainMenuFn();
}, false);







menuXBtn.addEventListener('click', function() {
  click.play();
  openMenu();
}, false);

menuXBtn.addEventListener('mouseover', function() {
  swoosh3.play();
}, false);

blackOverlay.addEventListener('click', function() {
  blackOverlay.style.display = 'none';
spaceAmbient.play();
});

coffeeBtn.addEventListener('mouseover', function() {
  swoosh4.play();
}, false);

coffeeBtn.addEventListener('click', function() {
  click.play();
  
}, false);

satelliteSound.addEventListener('click', function() {
  var randomIndex = Math.floor(Math.random() * ufoSounds.length);
  ufoSounds[randomIndex].play();
  ufoSounds.currentTime = 0;
  ufoSounds.volume = soundVolume / 5;

}, false);






  s20secbeat.volume = musicVolume;
  s40secbeat.volume = musicVolume;
  s60secbeat.volume = musicVolume;
  s60secreplaymode.volume = soundVolume;
  click.volume = soundVolume;
  cosmicGlow.volume = musicVolume;
  endAmbience.volume = musicVolume;
  laserGroove.volume = soundVolume;
  spaceAmbient.volume = musicVolume;
  strangeLaser.volume = soundVolume;
  successBell.volume = soundVolume;
  swoosh.volume = soundVolume;
  swoosh2.volume = soundVolume;
  swoosh3.volume = soundVolume;


musicBtn.addEventListener('click', function() {
  if (musicVolume > 0) {
  click.currentTime = 0;
  click.play();
    musicVolume = 0;
    musicBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">X</p>';
    musicBtn.classList.add("menuindent");
      setTimeout(() => {
       musicBtn.classList.remove("menuindent");
      }, 100);

  } else {
  click.currentTime = 0;
  click.play();
    musicVolume = volumeSlider.value;
    musicBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">&#10004;</p>';
    musicBtn.classList.add("menuindent");
      setTimeout(() => {
       musicBtn.classList.remove("menuindent");
      }, 100);
  }
  // Set the volume for all sounds
  s20secbeat.volume = musicVolume;
  s40secbeat.volume = musicVolume;
  s60secbeat.volume = musicVolume;
  s60secreplaymode.volume = musicVolume;
  cosmicGlow.volume = musicVolume;
  endAmbience.volume = musicVolume;
  spaceAmbient.volume = musicVolume;
});

musicBtn.addEventListener('mouseover', function() {
  swoosh4.play();
}, false);

soundBtn.addEventListener('click', function() {
  if (soundVolume > 0) {
  click.currentTime = 0;
  click.play();
    soundBtn.classList.add("menuindent");
    setTimeout(() => {
      soundBtn.classList.remove("menuindent");
      soundBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">X</p>';
      soundVolume = 0;
      sounds.forEach(sound => {
        sound.volume = soundVolume;
      });
    }, 200); 

  } else {
  click.currentTime = 0;
  click.play();
    soundBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">&#10004;</p>'; 
    soundVolume = volumeSlider.value;
    soundBtn.classList.add("menuindent");
      setTimeout(() => {
       soundBtn.classList.remove("menuindent");
      }, 100);
  }
  sounds.forEach(sound => {
    sound.volume = soundVolume;
  });
}, false);

soundBtn.addEventListener('mouseover', function() {
  swoosh4.play();
}, false);

volumeSlider.addEventListener("input", function() {
  const volume = this.value;
  sounds.forEach(sound => {
    sound.volume = volume;

  });
}, false);

volumeSlider.addEventListener("mouseup", function() {
  click.currentTime = 0;
  click.play();
    musicVolume = volumeSlider.value;
    soundVolume = volumeSlider.value;
    musicBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">&#10004;</p>';
    soundBtn.innerHTML = '<p style="font-family: \'Nasalization Regular\', sans-serif;">&#10004;</p>'; 
    musicBtn.classList.add("menuindent");
    soundBtn.classList.add("menuindent");
      setTimeout(() => {
       musicBtn.classList.remove("menuindent");
       soundBtn.classList.remove("menuindent");
      }, 150);

  }, false);

replayBtn.addEventListener('click', function() {
  click.currentTime = 0;
  click.play();
  continueListening = true;
  gameStart();
  
}, false);


replayModeBtn.addEventListener('click', function() {
  if (replayMode == 0) {
  click.currentTime = 0;
  click.play();

       replayModeBtn.classList.add("replayindent");
       document.querySelector(".replaycontainer").classList.add("spinning");
          setTimeout(() => {
       document.querySelector(".replaycontainer").classList.remove("spinning");
      }, 500);
       replayMode = 1;

  } else {
  click.currentTime = 0;
  click.play();

    replayModeBtn.classList.remove("replayindent");
    document.querySelector(".replaycontainer").classList.remove("spinning");
    replayMode = 0;
}


}, false);

replayModeBtn.addEventListener('mouseover', function() {
  swoosh4.currentTime = 0;
  swoosh4.play();
  document.querySelector(".replay-up").style.visibility= 'hidden';
  document.querySelector(".replay-down").style.visibility= 'visible';
}, false);

replayModeBtn.addEventListener('mouseout', function() {
  document.querySelector(".replay-up").style.visibility= 'visible';
  document.querySelector(".replay-down").style.visibility= 'hidden';
}, false);

document.addEventListener('mousemove', function(event) {
  if (event.target.classList.contains('replaymode-button')) {
    
    const x = event.clientX + 10;
    const y = event.clientY + 40;
    
    replayText.style.left = x + 'px';
    replayText.style.top = y + 'px';
    
    replayText.style.visibility = 'visible';
  } else {
    replayText.style.visibility = 'hidden';
  }
});
document.addEventListener('mousemove', function(event) {
  if (event.target.classList.contains('lock-button')) {
    
    const x = event.clientX + 10;
    const y = event.clientY + -40;
    
    usernameTextplainer.style.left = x + 'px';
    usernameTextplainer.style.top = y + 'px';
    
    usernameTextplainer.style.visibility = 'visible';
  } else {
    usernameTextplainer.style.visibility = 'hidden';
  }
});
// URBAN DICTIONARY //////////////////
    const wordsDatabase1 = [
 /* { word: 'apple', numChars: 5, definition: 'a round fruit with red or green skin' },
  { word: 'banana', numChars: 6, definition: 'a long curved fruit with yellow skin' },*/
  { word: 'Porch Pirate', numChars: 12, definition: 'Person or persons who steal packages off of unsuspecting customers porches or front door areas.', definitionExample: ''},
  { word: 'Sasshole', numChars: 8, definition: 'Combination of the word "____" and "asshole". A person of great sarcastic wit', definitionExample: ''},
    { word: 'Designated Drunk', numChars: 16, definition: 'The individual who drinks all offers of free drinks sent to the designated driver', definitionExample: ''},
    { word: 'Earjacking', numChars: 10, definition: '1) Eavesdropping on a conversation you have no business hearing; 2) Forcing your friends to listen to (bad) music they don’t want to hear', definitionExample: ''},
    { word: 'Friend Zone', numChars: 11, definition: 'The status of being stuck as a person’s friend after attempting to woo him or her', definitionExample: ''},
    { word: 'Gaydar', numChars: 6, definition: 'Similar to sonar in dolphins, the innate ability to detect homosexuality in other people', definitionExample: ''},
    { word: 'Helicopter Parent', numChars: 17, definition: 'A parent who meddles constantly in a child’s life, often into adulthood, to the point of attempting to control every aspect of the child’s life and the actions of those he or she interacts with', definitionExample: ''},
    { word: 'Hot Mess', numChars: 8, definition: 'A situation, behavior or appearance in a disastrous state; often refers to an individual who’s attractive but doesn’t have it together', definitionExample: ''},
    { word: 'Hundo', numChars: 5, definition: 'Shortening of 100 percent; Also, “_____ p”', definitionExample: '-"yeah dude Im _____ p going to that party tonight"'},
    { word: 'Knosh', numChars: 5, definition: 'As a verb, to eat; as a noun, the food being consumed (Hint: not munch or scran)', definitionExample: ''},
    { word: 'Kicks', numChars: 5, definition: 'Shoes', definitionExample: '"All the other kids with the pumped up _____"'},
    { word: 'Lit', numChars: 3, definition: 'Previously meant drunk, more recently means awesome, excellent, turned up', definitionExample: ''},
    { word: 'Make it Rain', numChars: 12, definition: 'To throw large quantities of paper money in the air (often in the context of a strip club) to pay service providers, usually as a display of wealth', definitionExample: ''},
    { word: 'Moobs', numChars: 5, definition: 'Refers to gynecomastia, a medical condition caused by obesity or a hormonal imbalance in which men appear to have female-like breasts', definitionExample: ''},
    { word: 'Nom', numChars: 3, definition: 'Eating in the same manner the cookie monster consumes cookies', definitionExample: ''},
    { word: 'Ratchet', numChars: 7, definition: 'A diva, especially one from an urban area or of lower socioeconomic status, who incorrectly believes she is every man’s dream', definitionExample: ''},
    { word: 'Rickroll', numChars: 8, definition: 'A prank involving sending a video with a promising or salacious title that turns out to be a video of Rick Astley singing “Never Gonna Give You Up”', definitionExample: ''},
    { word: 'Salty', numChars: 5, definition: 'Mad, upset; term often used by gamers', definitionExample: ''},
    { word: 'Selfie', numChars: 6, definition: 'A picture one takes of herself or himself, usually with a camera phone, and often with the purpose of uploading it to social media sites', definitionExample: ''},
    { word: 'Snail Mail', numChars: 10, definition: 'The use of the regular postal service rather than email (the implication often being that it will take longer to get it and could have been sent via email)', definitionExample: ''},
    { word: 'Swag', numChars: 4, definition: 'A term used to refer positively to the manner in which someone presents himself or herself, often with confidence. was used to describe stolen goods in the 1800s', definitionExample: ''},
    { word: 'Thats What She Said', numChars: 19, definition: 'A one-liner response to indicate what the individual just said to you could have a sexual connotation', definitionExample: ''},
    { word: 'Twerk', numChars: 5, definition: 'A rhythmic dance featuring the gyration of the hips, often creating a rippling effect in the buttocks', definitionExample: ''},
    { word: 'Took an L', numChars: 9, definition: '(past tense) To take an unfortunate loss and turn of events', definitionExample: '“last night ____ __ _, but tonight I bounce back” – Big Sean (2017)'},
    { word: 'Karen', numChars: 5, definition: 'Middle aged woman, typically blonde, makes solutions to others’ problems an inconvenience to her although she isn’t even remotely affected', definitionExample: ''},
    { word: 'Lightbulb', numChars: 9, definition: 'British slang for a sudden, clever idea. Similar to the American "brainstorm."', definitionExample: ''},
    { word: 'Beanis', numChars: 6, definition: 'The measure of how far back you wear a beanie. The further back you wear it on your head, the longer your ______ is (usually measured in inches).', definitionExample: '"His ______ is HUGE!"'},
    { word: 'ChadGPT', numChars: 7, definition: 'The Chad whos always using Chat-GPT to think for him and always swears it was his idea. He uses ChatGPT to sound smart in conversations, but in reality, he has no real intelligence or original thoughts of his own', definitionExample: ''},
    { word: 'Self Checkout', numChars: 13, definition: 'When one passes a reflective surface and cant resist the urge to "check themselves out"', definitionExample: '"did you see that guy pass that window? he totally just did a ____ ________"'},
    { word: 'Rizz', numChars: 4, definition: 'Comes from the word charisma, where in southern Baltimore they started to shorten it, to "___ma", Describes a person with pickup game.', definitionExample: ''},
    { word: 'Shrimp Fried Rice', numChars: 17, definition: 'Thanks in part to better culinary education, crustacians now have the ability to fry their own rice', definitionExample: ''},
    { word: 'Sleighed', numChars: 8, definition: 'To be immeasurably drunk on Christmas Eve, so much so that you are either still drunk Christmas Day or are massively hung over. The same as "wasted" or "shit-faced" but used specifically on the Christmas Holiday', definitionExample: ''},
    { word: 'Lalala', numChars: 6, definition: 'The definitive thing to say when you dont want to hear somebody speak anymore. Usually accompanied by a clasping of the hands over the ears in a mature and composed fashion to signify that you are done with the conversation', definitionExample: ''},
    { word: 'Nah', numChars: 3, definition: 'Used when "no" is too formal, and "nope" is too casual', definitionExample: 'Police: "Did you kill this man?!"    Me: "___"'},
    { word: 'Ticketbastard', numChars: 13, definition: 'Another word for ticketmaster. Born out of wedlock, this indevidual in the ticket selling and distribution business', definitionExample: ''},
    { word: 'Real One', numChars: 8, definition: 'Someone who is blunt, or keeps it true to whomever they keeping around, Being 100. A solid individual', definitionExample: '"Man, that woman right there is a ____ ___"'},
    { word: 'Feck', numChars: 4, definition: 'It was originally a slang term used in Ireland to mean either a) "to steal" or b) "to throw". Its also used as a pretty mild swear word in Ireland. Used to express that youre pissed off', definitionExample: ''},
    { word: 'Hot Potato', numChars: 10, definition: 'A difficult problem that nobody wants to be associated with. Also a game that involves throwing a starchy object', definitionExample: '"Lets see how the manager handles a ___ ______ like that"'},
    { word: 'Ruh Roh', numChars: 7, definition: 'Originally one of the many iconic Scooby-Doo sayings but has been turned into a phrase used at times of wrongdoing or mistake to make people laugh or lighten the mood', definitionExample: ''},
    { word: 'Truss', numChars: 5, definition: 'To _____ something up. Named after the UKs shortest PM Liz Truss, who _____ed up the economy with her _____onomics', definitionExample: ''},
    { word: 'Greenwashing', numChars: 12, definition: 'When companies pretend to be environmentally friendly when in fact they are not. Some examples include planting a tree to clear your conscience of your new carbon emitting SUV purchase or the Kyoto accord;', definitionExample: ''},
    { word: 'Student Loan', numChars: 12, definition: 'A mystical transaction in which a student and/or parent subjects themselves to financial slavery (indentured servitude) for the foreseeable future, to pay the excessive costs of higher education.', definitionExample: ''},
    { word: 'Badonkadonk', numChars: 11, definition: 'A large and formidable posterior', definitionExample: '"Denise does not need a car, she can bounce home on her badonkadonk"'},
    { word: 'Creeper', numChars: 7, definition: 'Person 1: "______". Person 2: Aww man. Everyone: SO WE BACK IN THE MINE -ThisIsFun_Lmao November 1, 2020', definitionExample: ''},
    { word: 'Yeet', numChars: 4, definition: 'To discard an item at a high velocity', definitionExample: 'Alex finishes his soda and proceeds to ____ his empty can into a trash bin'},
    { word: 'Down Bad', numChars: 8, definition: 'When you are so desperate for something that you loose all rational thought', definitionExample: '"He was really down bad as he spent his last buck on a fortnite skin."'},
    { word: 'Triggered', numChars: 9, definition: 'The state of being upset, distressed, or pissed, due to reacting to something negative, unreasonably', definitionExample: '"SJWs need to stop getting so ________"'},
    { word: 'Ratio', numChars: 5, definition: 'When a reply to a tweet gets more likes than the tweet it was replying to, usually indicating the unpopularity or stupidity of the original tweet', definitionExample: 'ice cold _____ g 🥶'},
    { word: 'Chili Head', numChars: 10, definition: '1. A person who gets a high from chilis, especially really hot ones.  2. To eat a spicy pepper then perform oral sex', definitionExample: ''},
    { word: 'Shits Creek', numChars: 11, definition: 'To be in serious or complex trouble, such as to (literally) be "up a creek without a paddle."', definitionExample: ''},
    { word: 'Florida Man', numChars: 11, definition: 'A key word used a lot to describe all the weird news stories about random Floridian\'s committing weird and dumb crimes, due to the state law regarding freedom of press about the fact that every police or court case must be public', definitionExample: '"_______ ___ lights off fireworks inside Wendys restaurant"'},
    { word: 'Cuck Chair', numChars: 10, definition: 'That single chair in a hotel room that’s always somehow facing the bed', definitionExample: '"Me and my wife really liked his vibe so we took him back to our hotel room and I sat in the ____ _____ and watched"'},
    { word: 'Second Breakfast', numChars: 16, definition: 'Invented by hobbits, second breakfast is breakfast all over again', definitionExample: 'Well just have time for second breakfast before it\'s time to start cooking lunch.'},
    { word: 'Scran', numChars: 5, definition: 'A term used for food generally in the north of England, originally used by the British Royal Navy', definitionExample: '"Let\'s go gets some _____, I\'m starving"'},
    { word: 'British Exit', numChars: 12, definition: 'The opposite of an Irish Goodbye. A departure from a party that is specifically designed to be as harmful to everyone involved as possible', definitionExample: 'This can include verbal abuse, extensive damage, loud refusals to pay for anything, and hurling oneself through a closed window into people standing outside'},
    { word: 'LGBTQ', numChars: 5, definition: 'A delicious sandwich containing Lettuce, Guacamole, Bacon, Tomato, and Quantum physics', definitionExample: ''},
    { word: 'Plot Armour', numChars: 11, definition: 'Character shields are plot devices in films and television shows that prevent important characters from dying or being seriously injured at dramatically inconvenient moments', definitionExample: ''},
    { word: 'Heightest', numChars: 9, definition: 'Someone who believes that people are superior to or inferior to others on account of their respective heights, or that people of differing heights have different moral qualities and intellectual capabilities', definitionExample: ''},
    { word: 'AFK', numChars: 3, definition: 'Used on online gaming, used to say if somebody is inactive or away from their keyboard', definitionExample: ''},
    { word: 'Out of pocket', numChars: 13, definition: 'To say something\'s gone too far, or someone that acts so goofy that no definition can express', definitionExample: '"Never say that again, that was just ___ __ ______..."'},
    { word: 'Elongate', numChars: 8, definition: 'A scandal involving Elon Musk', definitionExample: '"Have you heard about the ________?"'},
    { word: 'Ick', numChars: 3, definition: 'Something someone does that is an instant turn-off for you, making you instantly hate the idea of being with them romantically', definitionExample: '"Friend: Omg did you see (insert name of crush) picking his nose?? That is such an ick"'},
    { word: 'Grindset', numChars: 8, definition: 'Noun: The state of mind one puts oneself in, in order to outperform fears, insecurities, doubts, and anxieties, to achieve the seemingly impossible and step into their greatness', definitionExample: 'I must get my ________ on to out preform all betas.'},
    { word: 'Blursed', numChars: 7, definition: 'Simultaneously blessed and cursed by a situation, object, person, etc', definitionExample: ''},
    { word: 'Awooga', numChars: 6, definition: 'Humina humina humina, *eyes pop out*, NOW THATS A DAME', definitionExample: ''},
    { word: 'Maidenless', numChars: 10, definition: 'Term originated from the 2022 fromsoftware title else ring. Typically used to call someone a virgin or single', definitionExample: '"Unfortunately for you however you are __________"'},
    { word: 'AAAAA', numChars: 5, definition: 'American Association for the Abolition of Acronyms and Abbreviations', definitionExample: 'I\'m a card-carrying member of the _____!'},
    { word: 'Porky Pies', numChars: 10, definition: 'Cockney slang for "lies"', definitionExample: '"Don\'t be telling me _____ ____!"'},
    { word: 'Return to Monke', numChars: 15, definition: 'To devolve back into monkeys by rejecting modernity and embracing a primitive lifestyle', definitionExample: '"Reject modernity, ______ __ _____"'},
    { word: 'Elf Esteem', numChars: 8, definition: 'The feeling of being overworked, underappreciated and like you don\'t exist to others during the holidays while in actuality the season\'s success depends on you.', definitionExample: 'I think Hermey is having some ___-______ issues. He\'s pulling the stuffing out of all the teddy bears.'},
    { word: 'LIGMA', numChars: 5, definition: '_____ is part of the BOFA spectrum of conditions. _____ (Loose Internal Gene Mi-Asintits) is the second stage of BOFA (Biologically Offset Farkwonian Asintits)', definitionExample: '"RIP Ninja. At least he died of Ligma and not E-TMA"'},
    { word: 'Peng', numChars: 4, definition: 'Adj. amenable esp. delicious, comfortable, aesthetically pleasing or sexually attractive', definitionExample: '"Bro, this nectarine galette is ____"'},
    { word: 'Short king', numChars: 10, definition: 'A term of endearment for men under 5’9 with a strong personality', definitionExample: ''},
    { word: 'Copium', numChars: 6, definition: 'A metaphorical opiate inhaled when faced with loss, failure or defeat, especially in sports, politics and other tribal settings', definitionExample: '"Yeah huff you ______ you lost!"'},
    { word: 'Lick', numChars: 4, definition: '(noun) A successful type of theft which results in an acceptable, impressive and rewarding payday for the protagonist', definitionExample: '"Last night, hit a good ____. I brought home three figures easy for about two hours worth of my time"'},
    { word: 'Metaverse', numChars: 9, definition: 'One particular term often used to characterize any hypothetical future form of the Internet. Coined by Neal Stephenson in the book "Snow Crash"', definitionExample: ''},
    { word: 'Oof', numChars: 3, definition: 'Originating from the death sound effect of an online game known as Roblox, it is a common expression or response shared when one is faced with a melodramatic defeat or taken an embarrassing L in any real-world situation', definitionExample: ''},
    { word: 'Tilted', numChars: 6, definition: 'When you\'re so pissed off from losing multiple amount of games that you play worse and worse till you\'re so pissed you begin leaning over your keyboard screaming over every little mistake you make and complaining about gaming imbalances', definitionExample: ''},
    { word: 'CRAFT', numChars: 5, definition: 'It’s an acronym standing for Can’t Remember A Fucking Thing. It’s usually used to describe embarrassment at being unable to remember someone (_____ moment)', definitionExample: ''},
    { word: 'Philosopher Stoned', numChars: 18, definition: 'When you think up something brilliantly righteous while baked', definitionExample: ''},
    { word: 'Fracking', numChars: 8, definition: 'A polite term for shoving a lubricated probe into the Earth\'s hole to release gas', definitionExample: ''},
    { word: 'Bruh', numChars: 4, definition: 'The reaction to every single situation possible. The most versatile word in existence. Can be used to show happiness, sadness, distress, anger, fear, sleepiness, disgust, approval, disapproval, confusion.. and many more!', definitionExample: ''},
    { word: 'Smooth Brain', numChars: 12, definition: 'A stupid person; it refers to the lack of surface area on an individual\'s brain. The general thought is that the more surface area (wrinkles, creases, etc.) a brain has, the smarter the person is', definitionExample: ''},
    { word: 'Simp', numChars: 4, definition: 'A guy that is overly desperate for women, someone who does way too much for a person they like', definitionExample: '"Dude, quit being such a ____"'},
    { word: 'Doomscrolling', numChars: 13, definition: 'When you keep scrolling through all of your social media feeds, looking for the most recent upsetting news about the latest catastrophe. The amount of time spent doing this is directly proportional to how much worse you feel afterwards', definitionExample: ''},
    { word: 'Doomer', numChars: 6, definition: 'A person with a pessimistic outlook on life. Invended by 4Chan, these people feel a sense of helplessness and aimlessness and are often stricken with deep despair for life', definitionExample: ''},
    { word: 'Chonk', numChars: 5, definition: 'That which is fat or large, in a way that is majestic', definitionExample: '"That cat is a hecking _____er!"'},
    { word: 'Stonks', numChars: 6, definition: 'A term to express a financial decision that resulted in financial gain. Mostly used ironically', definitionExample: '"I traded 600 wheat for 1 emerald from a villager, ______!"'},
    { word: 'Deadass', numChars: 7, definition: 'New Yorker term equivalent to saying: for real; im serious; telling the truth', definitionExample: '"I _______ need some new Timbs, B"'},
    { word: 'Doge', numChars: 4, definition: 'A very popular meme of a Shiba Inu dog with a strange look on his face. It went viral all over the internet', definitionExample: '"such wow very much so many wow"'},
    { word: 'Drip', numChars: 4, definition: 'When your bling is iced out. Adjective to describe your outfit similar to swag, sauce, steez, swank', definitionExample: '"____ Check!"'},
    { word: 'Vibe Check', numChars: 10, definition: 'A spontaneous and usually random time where someone _____s your ____. Can typically be followed by a short, aggressive attack, such as a bludgeoning, or classic a kick, punch or a good old slap', definitionExample: ''},
    { word: 'Edgelord', numChars: 8, definition: 'Someone, especially posting on the internet, who uses shocking and nihilistic speech and opinions that they themselves may or may not actually believe to gain attention and come across as a more dangerous and unique person', definitionExample: ''},
    { word: 'Stan', numChars: 8, definition: 'Mix of stalker and fan. Its a crazy fan who basically worships a celebrity. The word was popularized by Eminem and now it is generally used as a verb', definitionExample: ''},
    { word: 'Rat', numChars: 3, definition: 'Someone who tells the cops vital information that leads to an arrest of another person', definitionExample: 'He is a ___, just so he could get away with his crimes'},
    { word: 'No Nut November', numChars: 15, definition: 'NNN, A Challenge Where A man must not ejaculate for the whole second last month of the year', definitionExample: ''},
    { word: 'Weird Flex But OK', numChars: 17, definition: 'said when someone proudly boasts or brags about something that most people would find either awkward, irrelevant or just plain weird. It\'s usually stated in a dismissive fashion', definitionExample: ''},
    { word: 'Saw con', numChars: 7, definition: 'A convention which raises money in order to prevent ligma, a serious condition which has taken the lives of many Sugondese people', definitionExample: ''},
    { word: 'Clout', numChars: 5, definition: 'Being famous and having influence or followers. Mainly said by edgy 13-year-olds who listen to way too much rap', definitionExample: ''},
    { word: 'Ripperoni', numChars: 9, definition: 'What you say when an unfortunate event transpires to you or another person. Slang term for "Rest In Pepperoni."', definitionExample: ''},
    { word: 'Sus', numChars: 3, definition: 'Giving the impression that something is questionable or dishonest. This word gained popularity with being the catchphrase in the online multiplayer game among us', definitionExample: 'Cyan: Red\'s kinda ___'},
    { word: 'Noob', numChars: 4, definition: 'Someone who has just started doing something, especially playing a computer game or using a type of software, and so does not know much about it', definitionExample: '"Bro you\'re such a ____"'},

  // more words here...
];


// CAMBRIDGE DICTIONARY ////////////////////
   const wordsDatabase2 = [
 /* { word: 'cat', numChars: 3, definition: 'a small carnivorous mammal with soft fur' },
  { word: 'dog', numChars: 3, definition: 'a domesticated carnivorous mammal with four legs' },*/
  { word: 'abundance', numChars: 9, definition: 'the situation in which there is more than enough of something:', definitionExample: 'There was an _________ of food at the wedding.'},
    { word: 'Anecdote', numChars: 8, definition: 'A short, often funny story, especially about something someone has done', definitionExample: ''},
    { word: 'Botox', numChars: 5, definition: 'A brand name for a substance that is injected (= put in through a needle) into the skin in order to make it look smooth and young', definitionExample: ''},
    { word: 'Cursed', numChars: 6, definition: 'Experiencing bad luck caused by magic or unfotunate events, or something has a history of failure', definitionExample: '"I think my car is ______ - it never starts when I need it"'},
    { word: 'Dispute', numChars: 7, definition: 'An argument or disagreement, especially an official one between, for example, workers and employers or two countries with a common border', definitionExample: ''},
    { word: 'Elaborate', numChars: 9, definition: 'To add more information to or explain something that you have said', definitionExample: '"The congresswoman said she was resigning, but refused to _________ on her reasons for doing so"'},
    { word: 'Fidget', numChars: 6, definition: 'To make continuous, small movements, especially if they do not have a particular purpose and you make them without meaning to, for example because you are nervous or bored', definitionExample: ''},
    { word: 'Goosebumps', numChars: 10, definition: 'Small raised areas that appear on the skin because of cold, fear, or excitement', definitionExample: 'Halloween may have just passed us by, but prepare to get __________ by this one'},
    { word: 'Hinduism', numChars: 8, definition: 'An ancient religion with Indian origins whose characteristics include the worship of many gods and goddesses and the belief that when a person or creature dies, their spirit returns to life in another body', definitionExample: ''},
    { word: 'Ignorant', numChars: 8, definition: 'Not having enough knowledge, understanding, awareness or information about something', definitionExample: '"Many teenagers are surprisingly ________ about current politics"'},
    { word: 'Jewel', numChars: 5, definition: 'A precious stone that is used to decorate valuable objects', definitionExample: '"The biggest heist in history woule be to steal the Crown _____"'},
    { word: 'Hydrogen', numChars: 8, definition: '1st chemical element that is the lightest gas, has no colour, taste, or smell, and combines with oxygen to form water', definitionExample: ''},
    { word: 'Indestructable', numChars: 14, definition: 'Impossible to destroy or break, immune', definitionExample: '"Whatever the degradation, the human spirit can be ______________"'},
    { word: 'Curb', numChars: 4, definition: 'The edge of a raised path nearest the road', definitionExample: ''},
    { word: 'Kitten', numChars: 6, definition: 'A very young cat', definitionExample: '"Our cat just had six ______s"'},
    { word: 'Leprechaun', numChars: 10, definition: '(In old Irish stories) A magical creature in the shape of a little old man who likes to cause trouble', definitionExample: '"The leprechaun\'s jacket has seven rows of buttons with seven buttons to each row"'},
    { word: 'Literature', numChars: 10, definition: 'Written artistic works, especially those with a high and lasting artistic value', definitionExample: '"Wuthering Heights" is a classic of English __________"'},
    { word: 'Makeup', numChars: 6, definition: 'Colored substances used on your face to improve or change your appearance', definitionExample: '"She wears a lot of ______"'},
    { word: 'Mumble', numChars: 6, definition: 'To speak quietly and in a way that is not clear so that the words are difficult to understand', definitionExample: '"I\'m sorry," he ______d'},
    { word: 'Noon', numChars: 4, definition: 'twelve o\'clock in the middle of the day, or about that time', definitionExample: ''},
    { word: 'Nymph', numChars: 5, definition: '(In ancient Greek and Roman traditional stories) A goddess or spirit in the form of a young woman, living in a tree, river, mountain, etc', definitionExample: '"We played the part of wood _____s dancing around Snow White in the forest"'},
    { word: 'Onion', numChars: 5, definition: 'A vegetable with a strong smell and flavour, made up of several layers surrounding each other tightly in a round shape, usually brown or red on the outside and white inside', definitionExample: 'I always cry when I\'m chopping _____s'},
    { word: 'Organism', numChars: 8, definition: 'A single living plant, animal, virus, etc', definitionExample: 'Amoebae and bacteria are single-celled _______s'},
    { word: 'Precaution', numChars: 10, definition: 'An action that is done to prevent something unpleasant or dangerous happening', definitionExample: 'Many people have been stockpiling food as a __________ against shortages'},
    { word: 'Pygmy', numChars: 5, definition: 'A _____ animal is one of a type that is smaller than their species usually are', definitionExample: '"A _____ hippopotamus"'},
    { word: 'Pylon', numChars: 5, definition: 'A tall metal structure to which wires carrying electricity are fixed so that they are safely held high above the ground', definitionExample: ''},
    { word: 'Pyromania', numChars: 9, definition: 'A mental illness in which a person feels a strong wish to start fires', definitionExample: '"Arsonists should be medically checked out for _________"'},
    { word: 'Pyjamas', numChars: 7, definition: 'Soft, loose clothing that is worn in bed and consists of trousers and a type of shirt', definitionExample: 'I need a new pair of _______'},
    { word: 'Quack', numChars: 5, definition: 'To make the usual sound of a duck', definitionExample: '"The ducks started _____ing loudly when we threw them some bread"'},
    { word: 'Quadrillion', numChars: 11, definition: 'the number 1,000,000,000,000,000', definitionExample: '"The system will be capable of more than a ___________ calculations per second"'},
    { word: 'Queue', numChars: 5, definition: 'A line of people, usually standing or in cars, waiting for something', definitionExample: 'If you want tickets you\'ll have to join the _____'},
    { word: 'Quirky', numChars: 6, definition: 'Unusual in an attractive and interesting way', definitionExample: ''},
    { word: 'Rare', numChars: 4, definition: '1: Not common or frequent; very unusual 2: (Of meat) Not cooked for very long and still red', definitionExample: 'The museum is full of ____ and precious treasures'},
    { word: 'Rhyme', numChars: 5, definition: 'A word that has the same last sound as another word', definitionExample: '"Can you think of a word that _____s with orange"'},
    { word: 'Rectify', numChars: 7, definition: 'To correct something or make something right', definitionExample: '"I am determined to take whatever action is necessary to _______ the situation"'},
    { word: 'Rotund', numChars: 6, definition: '(Especially of a person) Round or rounded in shape, fat', definitionExample: ''},
    { word: 'Rough', numChars: 5, definition: 'Not even or smooth, often because of being in bad condition', definitionExample: '"It was a _____ mountain road, full of stones and huge holes"'},
    { word: 'Scout', numChars: 5, definition: '1: A person, especially a soldier, sent out to get information about where the enemy are and what they are doing 2: A talent/modelling _____ 3: An international organization that encourages young people of all ages to take part in activities outside', definitionExample: ''},
    { word: 'Source', numChars: 6, definition: 'The place something comes from or starts at, or the cause of something (similar to but not origin)', definitionExample: '"Experts are trying to track down the ______ of the contamination in the water supply"'},
    { word: 'Syrup', numChars: 5, definition: 'A very sweet, thick liquid', definitionExample: '"Corn _____ is used for sweetening drinks"'},
    { word: 'Skeptical', numChars: 9, definition: 'Doubting that something is true or useful', definitionExample: '"Many experts remain _________ about/of his claims"'},
    { word: 'Skid', numChars: 4, definition: '(Especially of a vehicle) To slide along a surface so that you have no control', definitionExample: '"Tony\'s car ____ded on some ice and hit a tree"'},
    { word: 'Tinnitus', numChars: 8, definition: 'A condition of the ear in which the person suffering from it hears noises such as ringing', definitionExample: ''},
    { word: 'Tip', numChars: 3, definition: '1: To give someone who has provided you with a service an extra amount of money to thank them 2: The pointed end of something 3: A useful piece of information or advice', definitionExample: ''},
    { word: 'Twinkle', numChars: 7, definition: '(Of light or a shiny surface) To shine repeatedly strongly then weakly, as if flashing on and off very quickly', definitionExample: 'The lights of the town _______d in the distance'},
    { word: 'Twin', numChars: 4, definition: 'Used to describe two similar people or things that are a pair', definitionExample: ''},
    { word: 'Troubleshoot', numChars: 12, definition: 'To discover why something does not work effectively and help to improve it, identifying problems', definitionExample: '"A top German engineer has been appointed to ____________ the cause of the accident"'},
    { word: 'Trophy', numChars: 6, definition: '1: A prize, such as a gold or silver cup, that is given to the winner of a competition or race 2: Something used as a symbol of success from hunting or war', definitionExample: ''},
    { word: 'Umbrella', numChars: 8, definition: 'A device for protection against the rain, consisting of a stick with a folding frame covered in material at one end and usually a handle at the other, or a similar, often larger, device used for protection against the sun', definitionExample: ''},
    { word: 'Utopia', numChars: 6, definition: 'A perfect society in which people work well with each other and are happy', definitionExample: '"Try and imagine a perfect society, a ______, in which the government really got everything right"'},
    { word: 'Urgent', numChars: 6, definition: 'Very important and needing attention immediately', definitionExample: 'Many people are in ______ need of food and water'},
    { word: 'Understand', numChars: 10, definition: 'To know the meaning of something that someone says, to figure it out in your head', definitionExample: '"She explained the whole idea again, but I still didn\'t __________"'},
    { word: 'Vampire', numChars: 7, definition: '(In stories) An undead person who sucks blood from other people at night', definitionExample: '"blaa..."'},
    { word: 'Vengeance', numChars: 9, definition: 'the punishing of someone for harming you or your friends or family, or the wish for such punishment to happen. Similar to revenge', definitionExample: '"She cried out for ________"'},
    { word: 'Vulgar', numChars: 6, definition: 'Not suitable or dignified; not in the style preferred by the upper classes of society. Being impolite or socially unacceptable', definitionExample: '"His manners were coarse and ______"'},
    { word: 'Voyage', numChars: 6, definition: 'A long journey, especially by ship', definitionExample: '"He was a young sailor on his first sea ______"'},
    { word: 'Vandalism', numChars: 9, definition: 'The crime of intentionally damaging property belonging to other people', definitionExample: '"Beset by violence and _________, this is one of the most unpleasant areas in the city"'},
    { word: 'Vanish', numChars: 6, definition: 'To disappear or stop being present or existing, especially in a sudden, surprising way', definitionExample: ''},
    { word: 'Wilderness', numChars: 10, definition: 'An area of land that has not been used to grow crops or had towns and roads built on it, especially because it is difficult to live in as a result of its extremely cold or hot weather or bad earth. The last haven for Nature', definitionExample: 'It\'s a __________ area, under the protection of the Parks Department'},
    { word: 'Wok', numChars: 3, definition: 'A large, bowl-shaped Chinese pan used for frying food quickly in hot oil', definitionExample: ''},
    { word: 'Wham', numChars: 4, definition: 'Used to suggest the sound of a sudden hit', definitionExample: ''},
    { word: 'White', numChars: 5, definition: 'Of a colour like that of snow, milk, or bone', definitionExample: ''},
    { word: 'Xenophobics', numChars: 11, definition: 'peaople showing extreme dislike or fear of foreigners, their customs, their religions, etc', definitionExample: '"Our neighbor\'s been saying some __________ things lately..."'},
    { word: 'Xylem', numChars: 5, definition: 'The type of plant tissue that carries water and minerals from the roots to the leaves and gives support to the stem or trunk, similar to phloem', definitionExample: ''},
    { word: 'Xylophone', numChars: 9, definition: 'A musical instrument consisting of flat wooden bars of different lengths that are hit with sticks', definitionExample: ''},
    { word: 'Yuzu', numChars: 4, definition: 'An Asian citrus fruit that looks like a lemon', definitionExample: '"The ____ tastes like a mix of lemon, mandarin, and grapefruit"'},
    { word: 'Yearn', numChars: 5, definition: 'To wish very strongly, especially for something that you cannot have or something that is very difficult to have', definitionExample: '"Despite his great commercial success he still _____s for critical approval"'},
    { word: 'Yawn', numChars: 4, definition: 'The uncontrollable urge to open the mouth wide and take a lot of air into the lungs and slowly send it out, usually when tired or bored', definitionExample: ''},
    { word: 'Yoghurt', numChars: 7, definition: 'A slightly sour, thick liquid made from milk with bacteria added to it, sometimes eaten plain and sometimes with sugar, fruit, etc. added', definitionExample: ''},
    { word: 'Yoga', numChars: 4, definition: 'A set of physical and mental exercises, originally from India, intended to give control over the body and mind', definitionExample: ''},
    { word: 'Yesterday', numChars: 9, definition: 'On the day before today', definitionExample: '"He called _________ while you were out"'},
    { word: 'Zeitgeist', numChars: 9, definition: 'The general set of ideas, beliefs, feelings, etc. that is typical of a particular period in history', definitionExample: ''},
    { word: 'Zebra', numChars: 5, definition: 'An African wild animal that looks like a horse, with black or brown and white lines on its body', definitionExample: ''},
    { word: 'Zap', numChars: 3, definition: 'To destroy or attack something suddenly, esp. with electricity, radiation, or another form of energy, used especially in comics', definitionExample: '"Pow! ___!"'},
    { word: 'Zigzag', numChars: 6, definition: 'A line or pattern that looks like a Z or a row of Zs joined together', definitionExample: '"The kids ran in ______s around the playground"'},
    { word: 'Admit', numChars: 5, definition: 'To agree that something is true, especially unwillingly', definitionExample: '"He _____ted his guilt/mistake"'},
    { word: 'Atom', numChars: 4, definition: 'The smallest unit of any chemical element, consisting of a positive nucleus surrounded by negative electrons. ____s can combine to form a molecule', definitionExample: ''},
    { word: 'Atmosphere', numChars: 10, definition: '1: A mixture of gases that surrounds any planet 2: The character, feeling, or mood of a place or situation', definitionExample: '"There\'s a very relaxed __________ in our office"'},
    { word: 'Breathe', numChars: 7, definition: 'To move air into and out of the lungs. Or letting air through an abject such as clothes', definitionExample: 'It\'s so airless in here - I can hardly _______'},
    { word: 'Buddhism', numChars: 8, definition: 'A religion that originally comes from South Asia, and teaches that personal spiritual improvement will lead to escape from human suffering', definitionExample: ''},
    { word: 'Burrito', numChars: 7, definition: 'A type of Mexican food made by folding a tortilla (thin, round bread) and putting meat, beans, and cheese inside it', definitionExample: ''},
    { word: 'Caffeine', numChars: 8, definition: 'A chemical, found for example in tea and coffee, that is a stimulant (something that makes people more active)', definitionExample: ''},
    { word: 'Canoe', numChars: 5, definition: 'A small, light, narrow boat, pointed at both ends and moved using a paddle (a short pole with a flat blade)', definitionExample: ''},
    { word: 'Carrot', numChars: 6, definition: 'A long pointed orange root eaten as a vegetable', definitionExample: ''},
    { word: 'Clock', numChars: 5, definition: 'A device for measuring and showing time, usually found in or on a building and not worn by a person', definitionExample: ''},
    { word: 'Biker', numChars: 5, definition: 'A member of a group of people riding motorcycles', definitionExample: '"We were passed by a crowd of _____s doing over 90 mph"'},
    { word: 'Biased', numChars: 6, definition: 'showing an unreasonable like or dislike for a person based on personal opinions', definitionExample: '"The newspapers gave a very ______ report of the meeting"'},
    { word: 'Dancer', numChars: 6, definition: 'A person who moves his or her body and feet in rhythm to music', definitionExample: '"He\'s a ______ in the Royal Ballet"'},
    { word: 'Declaration', numChars: 12, definition: 'An announcement or statement, often that is written and official', definitionExample: '"As witnesses to the accident, we were asked to make written ___________s of what we had seen"."'},
    { word: 'Flatmate', numChars: 8, definition: 'A person who shares an apartment with another person', definitionExample: '"The show focused on four female ________s and their landlady"'},
    { word: 'Fossil Fuel', numChars: 11, definition: 'Fuels, such as gas, coal, and oil, that were formed underground from plant and animal remains millions of years ago', definitionExample: ''},
    { word: 'Gymnastics', numChars: 10, definition: 'Physical exercises and activities performed inside, often using equipment such as bars and ropes, intended to increase the body\'s strength and the ability to move and bend easily"', definitionExample: '"I do __________ after school on Fridays"'},
    { word: 'Golden Ratio', numChars: 12, definition: 'A mathematical ratio (a relationship between numbers) of approximately 1.6, which is often found in the sizes of things in nature and in art and architecture', definitionExample: '"The proportions of the illustrations are based on the ______ _____"'},
    { word: 'Golf Club', numChars: 9, definition: 'One of a set of specially shaped wooden or metal sticks used for hitting a golf ball', definitionExample: ''},
    { word: 'Industrial Revolution', numChars: 21, definition: 'The period of time during which work began to be done more by machines in factories than by hand at home', definitionExample: '"Employment conditions in the factory have not changed much since the __________ __________"'},
    { word: 'Jazz', numChars: 4, definition: 'A type of modern music originally developed by African-Americans, with a rhythm in which the strong notes often come before the beat. ____ is usually improvised (invented as it is played)', definitionExample: 'Hint: Not Afro'},
    { word: 'Jump Scare', numChars: 10, definition: 'Something, such as a scene in a film, that shocks and frightens you so that you suddenly move or jolt', definitionExample: '"He loves watching ____ _____ videos on the internet"'},
    { word: 'Jot', numChars: 3, definition: 'To make a quick short note of something', definitionExample: '"Could you ___ your address and phone number in my address book?"'},
    { word: 'Kidney Bean', numChars: 11, definition: 'A small, dark red bean with a curved shape like an organ that can be eaten', definitionExample: '"A good Chili requires lots of ______ ____s"'},
    { word: 'Loose Cannon', numChars: 12, definition: 'Someone who behaves in an uncontrolled or unexpected way and is likely to cause problems for other people', definitionExample: ''},



  // more words here...
];



function fadeOutElements() {
  for (let i = 0; i < elementsToFade.length; i++) {
    elementsToFade[i].classList.add('fade-out');
    elementsToFade[i].classList.remove('fade');
    }
  }

function fadeInElements() {
  for (let i = 0; i < elementsToFade.length; i++) {
    elementsToFade[i].classList.remove('fade-out');
    elementsToFade[i].classList.add('fade');
    }
  }

function selectRandomWord(wordsArray) {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex].word;
}






function gameStart() {
    if (!continueListening) {
    return;
  }

  if (gameMode === 1) {
    randomWord = selectRandomWord(wordsDatabase1);
    while (usedWords.includes(randomWord)) {
      randomWord = selectRandomWord(wordsDatabase1);
    }
    usedWords.push(randomWord);
  
        

  }
if (gameMode === 2) {
    randomWord = selectRandomWord(wordsDatabase2);
    while (usedWords.includes(randomWord)) {
      randomWord = selectRandomWord(wordsDatabase2);
    }
    usedWords.push(randomWord);


  }
  clearInterval(timer);
  timeLeft = 60;
  timerValueElement.innerHTML = timeLeft;
  //let numChars = 15;
  word = randomWord;
  wordsDatabase2.forEach(wordObj => {
    if (wordObj.word === word) {
      numChars = wordObj.numChars;
      definition = wordObj.definition;
      definitionExample = wordObj.definitionExample

    }
  });
  wordsDatabase1.forEach(wordObj => {
    if (wordObj.word === word) {
      numChars = wordObj.numChars;
      definition = wordObj.definition;
      definitionExample = wordObj.definitionExample

    }
  });
  console.log(`The word is ${word}, it has ${numChars} characters, definition is ${definition} and example is ${definitionExample}.`);

  const existingWordChars = document.querySelectorAll('.word-char');
  existingWordChars.forEach((char) => char.remove());
  const existingDashes = document.querySelectorAll('.dash');
  existingDashes.forEach((dash) => dash.remove());
  const caretDivs = document.querySelectorAll('.caret');
  caretDivs.forEach(caretDiv => caretDiv.remove());
  const definitions = document.querySelectorAll('.definition');
  definitions.forEach(definition => definition.remove());
  const definitionExamples = document.querySelectorAll('.definition-example');
  definitionExamples.forEach(definitionExamples => definitionExamples.remove());

  document.getElementById('timer').classList.add('timer-visible');
  document.getElementById('green-dot').classList.remove('red-dot');
  document.getElementById('green-dot').classList.remove('green-dot2');
  document.getElementById('green-dot').classList.remove('red-dot-dash');
  document.getElementById('small-yellow-dot').style.visibility = 'hidden';
  document.querySelector('button.leaderboard').classList.remove('scoreboard-visible');
  document.querySelector('.monke').classList.add('monke_alive');
  document.querySelector('.monke').classList.remove('monke_ded'); 

  document.addEventListener('click', function(event) {
    if (!continueListening) {
    return;
  }
  if (!wordContainer.contains(event.target)) {
    inputBox.focus();
  }
  });

  satelliteSVG.classList.remove('satellite-charging');
  satelliteSVG.classList.remove('satellite-beam');
  secondsElement.style.display = 'none';
  
  replayBtn.classList.add('replay-button-hidden');
  replayBtn.classList.remove('replay-button-visible');
  replayBtn.classList.remove('replay-button-growshrink');

  if (musicVolume === 0) {
    // Set the volume for all sounds to 0
    s20secbeat.volume = 0;
    s40secbeat.volume = 0;
    s60secbeat.volume = 0;
    s60secreplaymode.volume = 0;
    cosmicGlow.volume = 0;
    endAmbience.volume = 0;
    spaceAmbient.volume = 0;
  }


      function interpolate2(startValue, endValue, fraction) {
    return startValue * (1 - fraction) + endValue * fraction;
  }
  const fadeOutInterval2 = setInterval(() => {
        if (!continueListening) {
        return;
        }
      if (endAmbience.paused) return;
    console.log('endAmbience volume:', endAmbience.volume);
if (endAmbience.volume > 0) {
  const progress2 = 0.05; // Example progress value
  const newVolume2 = interpolate2(endAmbience.volume, 0, progress2);
  endAmbience.volume = Math.max(0, Math.min(1, newVolume2));
  cosmicGlow.volume = Math.max(0, Math.min(1, newVolume2));
  if (endAmbience.volume < 0.01) { // check if volume is very close to zero
    endAmbience.volume = 0; // set volume to zero
  }
} else {
  endAmbience.pause();
  cosmicGlow.pause();
  clearInterval(fadeOutInterval2);

}
}, 100);

      setTimeout(() => {
        timeLeft = 59;
      }, 1000);  
  s20secbeat.currentTime = 0;
  s20secbeat.play();
  document.querySelector('.lives-container').classList.add('lives-container-visible');
  document.querySelector('.banana-move').classList.remove('banana0sec');
  document.querySelector('.banana-move').classList.add('banana60-40sec');
  document.querySelector('.banana-move').style.visibility = 'visible';
  
  noBackSpace = 0;

  replayModeBtn.style.visibility = 'visible';
  document.querySelector('.replay-up').style.visibility = 'visible';
  inputBox.value = "";

const definitionContainer = document.querySelector('.definition-container');
const definitionText = document.createElement('p');
definitionText.classList.add('definition');
definitionText.textContent = definition;
definitionContainer.appendChild(definitionText);
const definitionExampleText = document.createElement('p');
definitionExampleText.classList.add('definition-example');
definitionExampleText.textContent = definitionExample;
definitionContainer.appendChild(definitionExampleText);
satelliteSound.style.pointerEvents = 'auto';


      setTimeout(() => {
      document.querySelector('.definition').classList.add('definition-visible');
      document.querySelector('.definition-example').classList.add('definition-example-visible');
      document.querySelector('.scoreboard').classList.add('scoreboard-visible');
      document.querySelector('.scoreboard').classList.add('scoreboard-left');
      }, 25);    


  timer = setInterval(function() {
    


        if (timeLeft == 40) {
      document.querySelector('.banana-move').classList.remove('banana60-40sec');
      document.querySelector('.banana-move').classList.add('banana40-20sec');

      s40secbeat.currentTime = 0;
      s40secbeat.play()
      document.getElementById('green-dot').classList.add('green-dot2');
    }
    if (timeLeft == 38) {
      var currentInput = inputBox.value;
      var newInput = word[0] + currentInput.substring(1);
      inputBox.value = newInput;
      noBackSpace = 1;
      const inputEvent = new Event('input');
      inputBox.dispatchEvent(inputEvent);
      pling.play();
      
    }

        if (timeLeft == 20) {
      document.querySelector('.banana-move').classList.remove('banana40-20sec');
      document.querySelector('.banana-move').classList.add('banana20-0sec');
      document.getElementById('green-dot').classList.add('red-dot');
      document.getElementById('green-dot').classList.remove('green-dot2');



      s60secbeat.currentTime = 0;
      s60secbeat.play();
      setTimeout(() => {
      var currentInput = inputBox.value;
      var newInput = word[0] + word[1] + currentInput.substring(2);
      inputBox.value = newInput;
      noBackSpace = 2;
      const inputEvent = new Event('input');
      inputBox.dispatchEvent(inputEvent);
      pling.play();
      
      }, 2100);
    }
    if (timeLeft == 10) {
      satelliteSound.style.pointerEvents = 'none';
      timerValueElement.classList.add('pulse');
      secondsElement.classList.add('pulse');
      satelliteSVG.classList.add('satellite-charging');
    }

    timerValueElement.innerHTML = timeLeft;

  if (timeLeft % 2 == 0) {
    secondsElement.style.display = 'none';
  } else {
    secondsElement.style.display = 'block';
  }

    if (timeLeft == 0) {
      gameEnd();
    }
    timeLeft--;
  }, 1000);

    mode1Btn.classList.add("menubutton-unreactable")
    mode2Btn.classList.add("menubutton-unreactable")

    const elementsWithMonkeScale2 = document.querySelectorAll('.monke_scale2');
  for (let i = 0; i < elementsWithMonkeScale2.length; i++) {
    elementsWithMonkeScale2[i].classList.remove('monke_scale2');
    setTimeout(() => {
    elementsWithMonkeScale2[i].classList.add('monke_scale2');
  },10);
  }
    const elementsWithMonkeOrbit = document.querySelectorAll('.monke_orbit');
  for (let i = 0; i < elementsWithMonkeOrbit.length; i++) {
    elementsWithMonkeOrbit[i].classList.add('monke_wobble');
    elementsWithMonkeOrbit[i].classList.remove('monke_orbit');
  }
    const elementsWithMonkeScale = document.querySelectorAll('.monke_scale');
  for (let i = 0; i < elementsWithMonkeScale.length; i++) {
    elementsWithMonkeScale[i].classList.add('monke_scale2');
    elementsWithMonkeScale[i].classList.remove('monke_scale');
  }
  for (let i = 0; i < elementsToGameFade.length; i++) {
    elementsToGameFade[i].classList.add('game-fade-out');
    elementsToGameFade[i].classList.remove('game-fade');
    fadeOutElements();
    }



document.querySelector(".textbox").style.visibility = 'visible';
document.documentElement.style.setProperty('--numChars', numChars);
wordContainer.style.setProperty('--numChars', numChars);
inputBox.focus();





for (let i = 0; i < numChars; i++) {
  const dash = document.createElement('span');
  dash.classList.add('dash');
  if (word[i] === ' ') { // if the character is a space
    dash.textContent = ' '; // add a space instead of a dash
    } else if (word[i] === '-') {
    dash.textContent = '-'; // add a dash for any other character
    } else {
    dash.textContent = '_'; // add a dash for any other character
  }

  dashesContainer.appendChild(dash);
}

for (let i = 0; i < numChars; i++) {
  // create wordChar element
  const wordChar = document.createElement('div');
  wordChar.classList.add('word-char');
  wordContainer.appendChild(wordChar);

}


}

function updateScore() {
  if (won1 = 1) {
  won1 = 0;
  score++;
  console.log(`score: ${score}`);
  const scoreContainers = document.querySelectorAll('.score-container');
  scoreContainers.forEach(scoreContainer => {
    const oldScoreBoard = scoreContainer.querySelector('.scoreboard');
    const newScoreBoard = document.createElement('p');
    newScoreBoard.classList.add('scoreboard');
    newScoreBoard.textContent = "Score: " + score;
    scoreContainer.replaceChild(newScoreBoard, oldScoreBoard);
    document.querySelector('.scoreboard').classList.add('scoreboard-visible');
    document.querySelector('.scoreboard').classList.add('scoreboard-left');
  });
}
}






function enterKey() {
  if (!continueListening) {
    return;
  }
   inputBox.addEventListener('keydown', function(event) {
        if (!continueListening) {
    return;
  }
    const key = event.key;
      if (key === 'Enter') {
      if (inputBox.value.toLowerCase() === word.toLowerCase()) {
      if (won1 === 0) {
      if (word === "Rickroll") {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      }
      successBell.currentTime = 0;
      successBell.play();
      clearInterval(timer);
      won1 = 1;
      continueListening = false;
      updateScore();
      if (!s60secbeat.paused) {
        s60secbeat.pause();
      }

      if (!s40secbeat.paused) {
        s40secbeat.pause();
      }

      if (!s20secbeat.paused) {
        s20secbeat.pause();
      }
      document.querySelector('.banana-move').classList.remove('banana60-40sec');
      document.querySelector('.banana-move').classList.remove('banana40-20sec');
      document.querySelector('.banana-move').classList.remove('banana20-0sec');
      document.querySelector('.banana-move').classList.add('banana-win');
      const elementsWithMonkeScale2 = document.querySelectorAll('.monke_scale2');
  for (let i = 0; i < elementsWithMonkeScale2.length; i++) {
    elementsWithMonkeScale2[i].classList.remove('monke_scale2');
    elementsWithMonkeScale2[i].classList.add('monke_scale3');
    setTimeout(() => {
    elementsWithMonkeScale2[i].classList.remove('monke_scale3');
    elementsWithMonkeScale2[i].classList.add('monke_scale2');
  },1000);
  }

      setTimeout(() => {
        document.querySelector('.monke').classList.remove('monke_alive');
        document.querySelector('.monke').classList.add('monke_with_banan');

      },200)

      setTimeout(() => {
        continueListening = true;
        gameStart();
        document.querySelector('.banana-move').classList.remove('banana-win');
        document.querySelector('.monke').classList.remove('monke_with_banan'); 
      },1000)
      }

        

      } else if (timeLeft > 40) {
      timeLeft = 40;
      document.querySelector('.banana-move').classList.remove('banana60-40sec');
      document.querySelector('.banana-move').classList.add('banana40-20sec');
      wrongBell.currentTime = 0;
      wrongBell.play();
      if (!s20secbeat.paused) {
        s20secbeat.pause();
      }
      //s40secbeat.play();
      document.getElementById('green-dot').classList.add('green-dot2');
      timerValueElement.innerHTML = timeLeft;
    } else if (timeLeft <= 40 && timeLeft > 20) {
      document.querySelector('.banana-move').classList.remove('banana40-20sec');
      document.querySelector('.banana-move').classList.add('banana20-0sec');
      document.getElementById('green-dot').classList.add('red-dot');
      document.getElementById('green-dot').classList.remove('green-dot2');
      if (!s40secbeat.paused) {
        s40secbeat.pause();
      }
      //s60secbeat.play();
      wrongBell.currentTime = 0;
      wrongBell.play();
      timeLeft = 20;
      timerValueElement.innerHTML = timeLeft;
    } else if (timeLeft <= 20 && timeLeft > 0) {
      wrongBell.currentTime = 0;
      wrongBell.play();
      if (!s60secbeat.paused) {
        s60secbeat.pause();
      }
      gameEnd();
    }
  }
});
}


function startInputListener() {
  if (!continueListening) {
    return;
  }
  gameStartedCount++;
  const caretDiv = document.createElement('div');
  caretDiv.classList.add('caret');
  wordContainer.appendChild(caretDiv);
  caretDiv.style.left = '50%';


  inputBox.addEventListener('keydown', function(event) {
      if (!continueListening) {
    return;
  }
    var randomIndex = Math.floor(Math.random() * keytaps.length);
    keytaps.currentTime = 0;
    keytaps[randomIndex].play();
    
    
  if (!continueListening) {
    return;wordChars[startPosition].style.color = '#8ed1fc';
  }



    const allowedKeys = [' ', 'Backspace'];
    const key = event.key;
    if (key === 'Backspace' && (inputBox.selectionStart === 1 || inputBox.selectionStart === 2) && noBackSpace === 2) {
    event.preventDefault();
    }
    if (key === 'Backspace' && inputBox.selectionStart === 1 && noBackSpace === 1) {
    event.preventDefault();
    }


    if (/^[a-zA-Z]$/.test(key) || allowedKeys.includes(key)) {
      return;
    }
    event.preventDefault();
  });

  inputBox.addEventListener('input', function(event) {
  if (!continueListening) {
    return;
  }
    const text = event.target.value.replace(/[^a-zA-Z \-]/g, '');
    const wordChars = document.querySelectorAll('.word-char');

  /*  console.log(`text length: ${text.length}`);
    console.log(`numChars: ${numChars}`);
    console.log(`event.target.value: ${event.target.value}`);
    console.log(`text: ${text}`);
    console.log(`word: ${word}`);
    console.log(`timeLeft: ${timeLeft}`);
    console.log(`backspace: ${noBackSpace}`);
    console.log(`gameStart has been called ${gameStartedCount} times`);
    console.log(`continueListening: ${continueListening}`);*/
    console.log(`gamemode: ${gameMode}`); 
    console.log(`backspace: ${noBackSpace}`)

    if (text.length > numChars) { 
      event.target.value = text.slice(0, numChars); 
    }

    // Find the middle character index
   middleIndex = Math.floor(numChars / 2);

    // Determine the starting position based on the length of the input text
    startPosition = middleIndex - Math.floor(text.length / 2);

    // Ensure the starting position is not negative
    startPosition = Math.max(0, startPosition);

    // Determine the ending position based on the length of the input text
    const endPosition = startPosition + text.length;

    // Find the index of the div containing the first character of the input text
    let redCharIndex = -1;
    for (let i = 0; i < numChars; i++) {
      if (text.charAt(0).toLowerCase() === wordChars[i].textContent.toLowerCase()) {
        redCharIndex = i;
        break;
      }
    }
  // Set the text content of the word characters
for (let i = 0; i < numChars; i++) {
  if (i < startPosition || i >= endPosition) {
    wordChars[i].textContent = '';
  } else {
    const charIndex = i - startPosition;
    if (noBackSpace === 1 && i === startPosition) {
      wordChars[startPosition].style.color = '#8ed1fc';
    } else if (noBackSpace === 2 && (i === startPosition || i === startPosition+1)) {
      wordChars[i].style.color = '#8ed1fc';
    } else {
      wordChars[i].style.color = '';
    }
    wordChars[i].textContent = text[charIndex];
    // Add input event listener to each word char div
    wordChars[i].addEventListener('input', function(event) {
      if (event.target.textContent.length > 1) {
        event.target.textContent = event.target.textContent.slice(0, 1);
      }
    });
  }
}

    const lastChar = wordChars[endPosition - 1];
    if (lastChar) {
      const lastCharRect = lastChar.getBoundingClientRect();
      const containerRect = wordContainer.getBoundingClientRect();
      const caretLeft = lastCharRect.right - containerRect.left;
      caretDiv.style.left = `${caretLeft}px`;
    }

  });
}

function gameEnd() {
      timeLeft = 0;
      noBackSpace = 0;
      clearInterval(timer);
      timerValueElement.innerHTML = timeLeft;
      inputBox.value = "";
      inputBox.value = word;
      const inputEvent = new Event('input');
      inputBox.dispatchEvent(inputEvent);
      continueListening = false;
      satelliteSound.style.pointerEvents = 'auto';
      if (!s60secbeat.paused) {
        s60secbeat.pause();
      }

      if (!s40secbeat.paused) {
        s40secbeat.pause();
      }

      if (!s20secbeat.paused) {
        s20secbeat.pause();
      }
      if (!spaceAmbient.paused) {
        spaceAmbient.pause();
      }
      console.log(`replaymode: ${replayMode}`);

      document.querySelector('.banana-move').classList.remove('banana20-0sec');
      document.querySelector('.banana-move').classList.add('banana0sec');
      document.getElementById('green-dot').classList.add('red-dot-dash');
      document.getElementById('green-dot').classList.remove('red-dot');
      document.getElementById('small-yellow-dot').style.visibility = 'visible';
      
      satelliteSVG.classList.remove('satellite-charging');
      satelliteSVG.classList.add('satellite-beam');
      timerValueElement.classList.remove('pulse');
      secondsElement.classList.remove('pulse');

      const caretDivs = document.querySelectorAll('.caret');
      caretDivs.forEach(caretDiv => caretDiv.remove());
      const elements = document.querySelectorAll('.word-char');
      elements.forEach(element => {
        element.style.color = '#ff2d2d';
      });

          

      if (replayMode == 0) {
      console.log(`continueListening: ${continueListening}`);
       s60secreplaymode.currentTime = 0;
       s60secreplaymode.play();
       endAmbience.currentTime = 0;
       endAmbience.play();
       replayBtn.classList.add('replay-button-visible');
       document.getElementById('timer').classList.remove('timer-visible');
       replayBtn.classList.remove('replay-button-hidden');
       document.querySelector('.monke').classList.remove('monke_alive');
       document.querySelector('.monke').classList.add('monke_ded'); 

      endAmbience.addEventListener('ended', () => {
      endAmbience.currentTime = 0;
      endAmbience.play();
    });
      cosmicGlow.addEventListener('ended', () => {
      cosmicGlow.currentTime = 0;
      cosmicGlow.play();
    });
      setTimeout(() => {
      satelliteSVG.classList.remove('satellite-beam');
     // document.querySelector('.lives-container').classList.remove('lives-container-visible');
      endAmbience.play();
      endAmbience.volume = musicVolume;
      cosmicGlow.volume = musicVolume;
    },3000)
      
      setTimeout(() => {
        if (continueListening == false) {
      document.querySelector('.banana-move').style.visibility = 'hidden';
      }
      setTimeout(() => {document.querySelector('.banana-move').classList.remove('banana0sec'); },500)
      
      
    },4500)
      setTimeout(() => {
        if (continueListening == false) {
      replayBtn.classList.add('replay-button-growshrink');
      }
    },10000)
      setTimeout(() => {
        if (continueListening == false) {
            if (cosmicGlow.paused) {
      setTimeout(() => {
      cosmicGlow.currentTime = 0;
      cosmicGlow.play();
    },1000);
    }
      }
    },20000)

    } else {
      s60secreplaymode.currentTime = 0;
      s60secreplaymode.play();
      
      setTimeout(() => {
       continueListening = true;
       gameStart();
      }, 2000);       
  }


}

function openMenu() {
  
  
  if (menu.classList.contains('menu-fade-out')) {
    if (!leaderboardButton.classList.contains('scoreboard-visible')) {
    leaderboardButton.classList.add('scoreboard-visible')
    fadeInElements();
    mode1Btn.classList.remove("menubutton-unreactable");
    mode2Btn.classList.remove("menubutton-unreactable");
    leaderboardButton.style.pointerEvents = "auto";
    leaderboardXButton.style.pointerEvents = "none";
    for (let i = 0; i < leaderboardElementsToFade.length; i++) {
    leaderboardElementsToFade[i].classList.add('leaderboard-fade-out');
    leaderboardElementsToFade[i].classList.remove('leaderboard-fade');
    leaderboardElementsToFade[i].classList.remove('menubutton-reactable'); 
  }
  }
    fadeOutElements();
    menuBtn.classList.add("fade-out")
    for (let i = 0; i < menuElementsToFade.length; i++) {
    menuElementsToFade[i].classList.remove('menu-fade-out');
    menuElementsToFade[i].classList.add('menu-fade');
    menuBtn.style.pointerEvents = "none";
    menuXBtn.style.pointerEvents = "auto";
    menuBtn.classList.add('menubutton-reactable');
    menuXBtn.classList.add('menubutton-reactable');
    mode1Btn.classList.add("menubutton-unreactable");
    mode2Btn.classList.add("menubutton-unreactable");
    soundBtn.classList.add('menubutton-reactable');
    musicBtn.classList.add('menubutton-reactable');
    coffeeBtn.classList.add('menubutton-reactable');
    volumeSlider.classList.add('menubutton-reactable');
    document.querySelector(".no-link-select").classList.add('menubutton-reactable');
    mainMenu.classList.add('menubutton-reactable');
  }
  } else {
    fadeInElements();
    menuBtn.classList.remove("fade-out");
    mode1Btn.classList.remove("menubutton-unreactable");
    mode2Btn.classList.remove("menubutton-unreactable");
    for (let i = 0; i < menuElementsToFade.length; i++) {
    menuElementsToFade[i].classList.add('menu-fade-out');
    menuElementsToFade[i].classList.remove('menu-fade');
    menuElementsToFade[i].classList.remove('menubutton-reactable');
    menuBtn.style.pointerEvents = "auto";
    menuXBtn.style.pointerEvents = "none";
    menuBtn.classList.remove('menubutton-reactable');
    menuXBtn.classList.remove('menubutton-reactable');
    soundBtn.classList.remove('menubutton-reactable');
    musicBtn.classList.remove('menubutton-reactable');
    coffeeBtn.classList.remove('menubutton-reactable');
    volumeSlider.classList.remove('menubutton-reactable');
    document.querySelector(".no-link-select").classList.remove('menubutton-reactable');
    mainMenu.classList.remove('menubutton-reactable');
  }
  }
}

function leaderboardMenu() {

  if (leaderboardButton.classList.contains('scoreboard-visible')) {
    if (!menu.classList.contains('menu-fade-out')) {
    fadeInElements();
    menuBtn.classList.remove("fade-out");
    mode1Btn.classList.remove("menubutton-unreactable");
    mode2Btn.classList.remove("menubutton-unreactable");
    for (let i = 0; i < menuElementsToFade.length; i++) {
    menuElementsToFade[i].classList.add('menu-fade-out');
    menuElementsToFade[i].classList.remove('menu-fade');
    menuElementsToFade[i].classList.remove('menubutton-reactable');
    menuBtn.style.pointerEvents = "auto";
    menuXBtn.style.pointerEvents = "none";
    menuBtn.classList.remove('menubutton-reactable');
    menuXBtn.classList.remove('menubutton-reactable');
    soundBtn.classList.remove('menubutton-reactable');
    musicBtn.classList.remove('menubutton-reactable');
    coffeeBtn.classList.remove('menubutton-reactable');
    volumeSlider.classList.remove('menubutton-reactable');
    document.querySelector(".no-link-select").classList.remove('menubutton-reactable');
    mainMenu.classList.remove('menubutton-reactable');
  }
  }
    leaderboardButton.classList.remove('scoreboard-visible')
    fadeOutElements();
    mode1Btn.classList.add("menubutton-unreactable");
    mode2Btn.classList.add("menubutton-unreactable");
    leaderboardButton.style.pointerEvents = "none";
    leaderboardXButton.style.pointerEvents = "auto";
    for (let i = 0; i < leaderboardElementsToFade.length; i++) {
    leaderboardElementsToFade[i].classList.remove('leaderboard-fade-out');
    leaderboardElementsToFade[i].classList.add('leaderboard-fade'); 
    leaderboardElementsToFade[i].classList.add('menubutton-reactable'); 
  }

  } else {
    leaderboardButton.classList.add('scoreboard-visible')
    fadeInElements();
    mode1Btn.classList.remove("menubutton-unreactable");
    mode2Btn.classList.remove("menubutton-unreactable");
    leaderboardButton.style.pointerEvents = "auto";
    leaderboardXButton.style.pointerEvents = "none";
    for (let i = 0; i < leaderboardElementsToFade.length; i++) {
    leaderboardElementsToFade[i].classList.add('leaderboard-fade-out');
    leaderboardElementsToFade[i].classList.remove('leaderboard-fade');
    leaderboardElementsToFade[i].classList.remove('menubutton-reactable'); 
  }

  }

};

function coffeeLink() {


}

function mainMenuFn() {
  const existingWordChars = document.querySelectorAll('.word-char');
  existingWordChars.forEach((char) => char.remove());
  const existingDashes = document.querySelectorAll('.dash');
  existingDashes.forEach((dash) => dash.remove());
  const caretDivs = document.querySelectorAll('.caret');
  caretDivs.forEach(caretDiv => caretDiv.remove());
  const definitions = document.querySelectorAll('.definition');
  definitions.forEach(definition => definition.remove());
  const definitionExamples = document.querySelectorAll('.definition-example');
  definitionExamples.forEach(definitionExamples => definitionExamples.remove());
  clearInterval(timer);
  inputBox.removeEventListener('input', inputListener);
  inputBox.value = "";
  timeLeft = 60;
  noBackSpace = 0;
  continueListening = false;
  document.querySelector('.banana-move').classList.remove('banana20-0sec');
  document.querySelector('.banana-move').classList.remove('banana0sec');
  document.querySelector('.banana-move').classList.remove('banana40-20sec');
  document.querySelector('.banana-move').classList.remove('banana60-40sec');
  document.querySelector('.lives-container').classList.remove('lives-container-visible');
  satelliteSound.style.pointerEvents = 'auto';
  document.getElementById('small-yellow-dot').style.visibility = 'hidden';
  replayBtn.classList.remove('replay-button-visible');
  document.querySelector('.scoreboard').classList.remove('scoreboard-left');
  lockButton.classList.remove('username-invisible');
  nameBox.classList.remove('username-invisible');
};







});

