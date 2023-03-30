/*document.addEventListener("DOMContentLoaded", function(){
    document.body.addEventListener("touchstart", playVideo);
    function playVideo() {
        const video = document.getElementById('myVideo');
        if(video.playing) {
        } else {
            video.play();
        }
    }
});
*/
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
const successBell = document.getElementById('20secbeat');
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
const blackOverlay = document.querySelector('.blackoverlay');
const volumeSlider = document.getElementById("volume-slider");
const sounds = [s20secbeat, s40secbeat, s60secbeat,s60secreplaymode,click,cosmicGlow,endAmbience,laserGroove,spaceAmbient,strangeLaser,successBell,swoosh,swoosh2,swoosh3,swoosh4, ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7];
const satelliteSound = document.querySelector(".satellite-click");
const satelliteSVG = document.querySelector(".satellite");
const ufoSounds = [ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7];
const replayModeBtn = document.querySelector(".replaymode-button");
const replayBtn = document.querySelector(".replay-button");
const replayText = document.querySelector('.replaymode-text');
const mainMenu = document.querySelector('.mainmenu');
const inputBox = document.querySelector('.input-box input');
const wordContainer = document.querySelector('.word-container');
const dashesContainer = document.querySelector('.dashes-container');

  var definition;  
  var numChars;  
  var word;
  var timeLeft;
  var randomWord;
  var startPosition;
  let middleIndex;
  let gameMode;
  let replayMode = 0;
  let soundVolume = 0.5;
  let musicVolume = 0;
  var soundEnabled = true;
  var timerElement = document.getElementById("timer");
  var secondsElement = document.querySelector(".seconds");
  var timerValueElement = document.querySelector("#timer-value");




mode1Btn.addEventListener('click', function() {
  click.currentTime = 0;
  click.play();
  startMode1();
}, false);

mode1Btn.addEventListener('mouseover', function() {
  swoosh.currentTime = 0;
  swoosh.play();
}, false);

mode2Btn.addEventListener('click', function() {
  click.currentTime = 0;
  click.play();
  startMode2();
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
  s60secreplaymode.volume = musicVolume;
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


   const wordsDatabase2 = [
  { word: 'cat', numChars: 3, definition: 'a small carnivorous mammal with soft fur' },
  { word: 'dog', numChars: 3, definition: 'a domesticated carnivorous mammal with four legs' },
  // more words here...
];
    const wordsDatabase1 = [
  { word: 'apple', numChars: 5, definition: 'a round fruit with red or green skin' },
  { word: 'banana', numChars: 6, definition: 'a long curved fruit with yellow skin' },
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

function startMode1() {
  //fadeOutElements();
  randomWord = selectRandomWord(wordsDatabase1);
        gameStart();
  
  function interpolate(startValue, endValue, fraction) {
  return startValue * (1 - fraction) + endValue * fraction;
}
  const fadeOutInterval = setInterval(() => {
  if (spaceAmbient.volume > 0) {
    const progress = 0.1; // Example progress value
    const newVolume = interpolate(spaceAmbient.volume, 0, progress);
    spaceAmbient.volume = Math.max(0, Math.min(1, newVolume));
  } else {
    clearInterval(fadeOutInterval);
    spaceAmbient.pause();
  }
}, 100);
    
     

}

function startMode2() {
  //fadeOutElements();
  randomWord = selectRandomWord(wordsDatabase2);
        gameStart();

  
  function interpolate(startValue, endValue, fraction) {
  return startValue * (1 - fraction) + endValue * fraction;
}
  const fadeOutInterval = setInterval(() => {
  if (spaceAmbient.volume > 0) {
    const progress = 0.1; // Example progress value
    const newVolume = interpolate(spaceAmbient.volume, 0, progress);
    spaceAmbient.volume = Math.max(0, Math.min(1, newVolume));
  } else {
    clearInterval(fadeOutInterval);
    spaceAmbient.pause();
  }
}, 100);
   




}


function gameStart() {
  clearInterval(timer);
  var timeLeft = 60;

  //let numChars = 15;
  let word = randomWord;
  wordsDatabase2.forEach(wordObj => {
    if (wordObj.word === word) {
      numChars = wordObj.numChars;
      definition = wordObj.definition;
    }
  });
  wordsDatabase1.forEach(wordObj => {
    if (wordObj.word === word) {
      numChars = wordObj.numChars;
      definition = wordObj.definition;
    }
  });
  console.log(`The word is ${word}, it has ${numChars} characters, and its definition is ${definition}.`);

  const existingWordChars = document.querySelectorAll('.word-char');
  existingWordChars.forEach((char) => char.remove());


  document.getElementById('timer').classList.add('timer-visible');
  document.getElementById('green-dot').classList.remove('red-dot');
  document.getElementById('green-dot').classList.remove('green-dot2');
  document.getElementById('green-dot').classList.remove('red-dot-dash');
  satelliteSVG.classList.remove('satellite-charging');
  satelliteSVG.classList.remove('satellite-beam');
  secondsElement.style.display = 'none';
  satelliteSound.style.pointerEvents = 'none';
  replayBtn.classList.add('replay-button-hidden');
  replayBtn.classList.remove('replay-button-visible');

  if (musicVolume == 0) {
    // Set the volume for all sounds to 0
    s20secbeat.volume = 0;
    s40secbeat.volume = 0;
    s60secbeat.volume = 0;
    s60secreplaymode.volume = 0;
    cosmicGlow.volume = 0;
    endAmbience.volume = 0;
    spaceAmbient.volume = 0;
  }

  const fadeOutInterval = setInterval(() => {
  if (endAmbience.volume > 0) {
    const progress = 0.1; // Example progress value
    const newVolume = interpolate(endAmbience.volume, 0, progress);
    endAmbience.volume = Math.max(0, Math.min(1, newVolume));
  } else {
    clearInterval(fadeOutInterval);
    endAmbience.pause();
  }
}, 100);


  document.querySelector('.banana-move').classList.remove('banana0sec');
  document.querySelector('.banana-move').classList.add('banana60-40sec');
  s20secbeat.play();
  replayModeBtn.style.visibility = 'visible';

  var timer = setInterval(function() {
    timeLeft--;
    console.log(`word: ${word}`);
if (timeLeft == 55) {
  
  middleIndex = Math.floor(numChars / 2);
  inputBox.value = word[0];

  const existingWordChars = document.querySelectorAll('.word-char');
  existingWordChars.forEach((char, index) => {
    if (index === middleIndex) {
      char.classList.add('first-char');
      char.textContent = word[0];
    } else {
      char.classList.remove('first-char');
    }
  });

  const inputEvent = new Event('input');
  inputBox.dispatchEvent(inputEvent);
  pling.play();
}


      
        if (timeLeft == 40) {
      document.querySelector('.banana-move').classList.remove('banana60-40sec');
      document.querySelector('.banana-move').classList.add('banana40-20sec');
      s40secbeat.play()
      document.getElementById('green-dot').classList.add('green-dot2');
    }
        if (timeLeft == 20) {
      document.querySelector('.banana-move').classList.remove('banana40-20sec');
      document.querySelector('.banana-move').classList.add('banana20-0sec');
      document.getElementById('green-dot').classList.add('red-dot');
      document.getElementById('green-dot').classList.remove('green-dot2');
      s60secbeat.play()
    }
    if (timeLeft == 10) {

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
      document.querySelector('.banana-move').classList.remove('banana20-0sec');
      document.querySelector('.banana-move').classList.add('banana0sec');
      document.getElementById('green-dot').classList.add('red-dot-dash');
      document.getElementById('green-dot').classList.remove('red-dot');
      document.getElementById('small-yellow-dot').style.visibility = 'visible';
      satelliteSVG.classList.remove('satellite-charging');
      satelliteSVG.classList.add('satellite-beam');
      clearInterval(timer);
      if (replayMode == 0) {
       s60secreplaymode.play();
       endAmbience.play();

      setTimeout(() => {
      satelliteSVG.classList.remove('satellite-beam');
      replayBtn.classList.remove('replay-button-hidden');
      replayBtn.classList.add('replay-button-visible');
      document.getElementById('timer').classList.remove('timer-visible');
      }, 3000);       

    } else {
       s60secreplaymode.play();

      setTimeout(() => {
       gameStart();
      }, 2000);       
  }
    }

  }, 1000);


      // TODO: Add game logic here





    const elementsWithMonkeOrbit = document.querySelectorAll('.monke_orbit');
    mode1Btn.classList.add("menubutton-unreactable")
    mode2Btn.classList.add("menubutton-unreactable")
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



document.querySelector(".textbox").style.visibility = 'visible';;
document.documentElement.style.setProperty('--numChars', numChars);
wordContainer.style.setProperty('--numChars', numChars);

inputBox.setAttribute('tabindex', '-1');
inputBox.focus();

document.addEventListener('click', function(event) {
  if (!wordContainer.contains(event.target)) {
    inputBox.focus();
  }
});

  //document.querySelector('.definition').textContent = definition;
  startInputListener();

for (let i = 0; i < numChars; i++) {
  const dash = document.createElement('span');
  dash.textContent = '_';
  dashesContainer.appendChild(dash);
}

let prevFirstCharIndex = middleIndex;

for (let i = 0; i < numChars; i++) {
  // create wordChar element
  const wordChar = document.createElement('div');
  wordChar.classList.add('word-char');
  wordContainer.appendChild(wordChar);

  // add first-char class to the corresponding element
  if (i === startPosition) {
    wordChar.classList.add('first-char');
    prevFirstCharIndex = i;
  }

  // remove first-char class from the previous element
  if (i === prevFirstCharIndex && i !== startPosition) {
    wordChars[i].classList.remove('first-char');
    prevFirstCharIndex = startPosition;
  }
}


}

function startInputListener() {


  inputBox.addEventListener('input', function(event) {
    const text = event.target.value.replace(/[^a-zA-Z -]/g, '');
    const wordChars = document.querySelectorAll('.word-char');
    console.log(`text length: ${text.length}`);
    console.log(`numChars: ${numChars}`);
    console.log(`event.target.value: ${event.target.value}`);
    console.log(`text: ${text}`);
    if (text.length > numChars) { 
      event.target.value = text.slice(0, numChars); 
    }

    // Find the middle character index
   middleIndex = Math.floor(numChars / 2);

    // Determine the starting position based on the length of the input text
    let startPosition = middleIndex - Math.floor(text.length / 2);

    // Ensure the starting position is not negative
    startPosition = Math.max(0, startPosition);

    // Determine the ending position based on the length of the input text
    const endPosition = startPosition + text.length;

    // Set the text content of the word characters
    for (let i = 0; i < numChars; i++) {
      if (i < startPosition || i >= endPosition) {
        wordChars[i].textContent = '';
      } else {
        const charIndex = i - startPosition;
        if (charIndex === 0) {
          wordChars[i].textContent = text[0];
        } else {
          wordChars[i].textContent = text[charIndex];
        }
        // Add input event listener to each word char div
        wordChars[i].addEventListener('input', function(event) {
          if (event.target.textContent.length > 1) {
            event.target.textContent = event.target.textContent.slice(0, 1);
          }
        });
      }
    }

  });
}



function openMenu() {
  
  
  if (menu.classList.contains('menu-fade-out')) {

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


function coffeeLink() {


}

});


