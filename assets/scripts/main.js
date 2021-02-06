// main.js

// TODO

var volNum = document.getElementById('volume-number');
var volSlide = document.getElementById('volume-slider');
var volIcon = document.getElementById('volume-image');

var airHorn = document.getElementById('radio-air-horn-container');
var carHorn = document.getElementById('radio-car-horn-container');
var partyHorn = document.getElementById('radio-party-horn-container');

var hornSound = document.getElementById('horn-sound');
var hornIcon = document.getElementById('sound-image');

var honk = document.getElementById('honk-btn');

var volume = 100;

// Listens for changes to volume value
volNum.addEventListener("change", function(){

    volume = volNum.value;
    volSlide.value = volNum.value;

    updateIcon();
    setAudioLevel();
    
});

// Listens for changes to volume slider
volSlide.addEventListener("change", function() {

    volume = volSlide.value;
    volNum.value = volSlide.value;

    updateIcon();
    setAudioLevel();
});

function updateIcon() {

    if (volume == 0) {
        volIcon.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
    else if (volume < 34) {
        volIcon.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else if (volume < 67) {
        volIcon.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else {
        volIcon.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
}

function setAudioLevel() {

    hornSound.volume = volume / 100;

}

// Listens for click on air horn
airHorn.addEventListener("click", function(){
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    hornIcon.src = "./assets/media/images/air-horn.svg";
    
});

// Listens for click on car horn
carHorn.addEventListener("click", function(){
    hornSound.src = "./assets/media/audio/car-horn.mp3";
    hornIcon.src = "./assets/media/images/car.svg";
});

// Listens for click on party horn
partyHorn.addEventListener("click", function() {
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    hornIcon.src = "./assets/media/images/party-horn.svg";
});

// Listens for click on honk button
honk.addEventListener("click", function(event) {
    event.preventDefault();
    hornSound.play();
})