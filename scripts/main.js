var scene = document.querySelector("a-scene");

var overlay = document.getElementById('overlayText');
var introText = document.getElementById('introText');
var introButtonText = document.getElementById('introButtonText');
var introButton = document.getElementById('introButton');

var button = document.getElementById('button1');
var button2 = document.getElementById('button2');
var text = document.getElementById('mainText');
var text2 = document.getElementById('mainText2');
var buttonText = document.getElementById('buttonText');
var buttonText2 = document.getElementById('button2Text');

var blackout = document.getElementById('blackout');

var base = document.getElementById('base');
var pillars = document.getElementsByClassName('pillar');
var videosphere = document.getElementById('videosphere');
var vid = document.getElementById('video')

var step = 0;
var option = 0;



function playVideo () {
  vid.play();
  videosphere.components.material.material.map.image.play();
}



introButton.addEventListener('click', function(){

  playVideo();

  blackout.setAttribute('animation', 'property: opacity');
  overlay.setAttribute('visible', false);
  introText.setAttribute('visible', false);
  introButtonText.setAttribute('visible', false);
  introButton.setAttribute('animation', 'property: opacity');


  if (step == 0) {

    setTimeout(function(){
      button.setAttribute('animation__2', 'property: opacity');
      button2.setAttribute('animation__2', 'property: opacity');
      setTimeout(function(){
          buttonText.setAttribute('visible', true);
          buttonText2.setAttribute('visible', true);
          introButton.object3D.position.z = 10;
          introButtonText.object3D.position.z = 10;
      }, 1000);
    }, 2500);

  }

  step++;
});



button.addEventListener('click', function(){


  if (step == 1) {

    text.setAttribute('text', 'value: Oh, I am glad you noticed the music!');
    text2.setAttribute('text', 'value: I created it just for this place!');
    step1(button, buttonText, button2, buttonText2);
    step++;

  } else if (step == 2) {

    step2(button, buttonText, button2, buttonText2);
    step++;

  } else if (step == 3) {

    step3();
    step++;

  } else if (step == 4) {

    text.setAttribute('text', 'value: Hmm, I know how I could fix that.');
    text2.setAttribute('text', 'value: You know, I have been working on something... something amazing!');

    step4(button, buttonText, button2, buttonText2);
    step++;

  } else if (step == 5) {

    step5(button, buttonText, button2, buttonText2);
    step++;

  } else if (step == 6) {

    step6()
    step == 100;

  }
});




button2.addEventListener('click', function(){

  if (step == 1) {

    text.setAttribute('text', 'value: Oh, welcome! I did not expect guests just yet...');
    text2.setAttribute('text', 'value: This my my virtual music realm - a new way of experiencing music.');
    step1(button2, buttonText2, button, buttonText);
    step++;

  } else if (step == 2) {

    step2(button2, buttonText2, button, buttonText);
    step++;

  } else if (step == 3) {

    step3();
    step++;

  } else if (step == 4) {

    text.setAttribute('text', 'value: Oh, I forgot to mention that!');
    text.setAttribute('text', 'value: This, my friend, is my virtual reality audio visualizer!');

    step4(button2, buttonText2, button, buttonText);
    step++;

  } else if (step == 5) {

    step5(button2, buttonText2, button, buttonText);
    step++;

  } else if (step == 6) {

    step6()
    step == 100;

  }

});




function step1(btn, btnTxt, otherBtn, otherBtnTxt) {
  btn.setAttribute('animation__1', 'property: position;');
  btn.setAttribute('animation__3', 'property: width;');
  btnTxt.setAttribute('animation', 'property: position;');
  otherBtn.setAttribute('animation__2', 'to: 0;');

  setTimeout(function(){
    text.setAttribute('visible', true);
    text2.setAttribute('visible', true);
    otherBtnTxt.setAttribute('visible', false);
    btnTxt.setAttribute('text', 'value: So... this is a virtual concert hall?');
  }, 500);
}


function step2(btn, btnTxt, otherBtn, otherBtnTxt) {
  text.setAttribute('text', 'value: Not quite. See, these days, it is difficult to visit real concerts.');
  text2.setAttribute('text', 'value: So I came up with an alternative! Can you hear the music moving around you?');
  btn.setAttribute('animation__1', 'to: -0.4 2 -0.8;');
  btn.setAttribute('animation__3', 'to: 0.65;');
  btnTxt.setAttribute('animation', 'to: -0.4 2 -0.75;');

  otherBtn.setAttribute('animation__2', 'to: 1;');
  otherBtn.object3D.position.x = 0.4;
  otherBtn.object3D.position.y = 2;

  otherBtn.setAttribute('width', '0.65;');
  otherBtnTxt.setAttribute('visible', true);
  otherBtnTxt.setAttribute('text', 'value: What is your alternative?');
  otherBtnTxt.object3D.position.x = 0.4;
  otherBtnTxt.object3D.position.y = 2;

  setTimeout(function(){
    btnTxt.setAttribute('text', 'value: Yes, I can hear it!');
  }, 500);
}


function step3() {
  text.setAttribute('text', 'value: Ohh, take a look around!');
  text2.setAttribute('text', 'value: What do you think?');

  button.setAttribute('animation__1', 'property: position;');
  button.setAttribute('animation__1', 'to: 0.4 1.35 0.8;');

  button2.setAttribute('animation__1', 'property: position;');
  button2.setAttribute('animation__1', 'to: -0.4 1.35 0.8;');

  buttonText.setAttribute('animation', 'property: position;');
  buttonText.setAttribute('animation', 'to: 0.375 1.37 0.7;');

  buttonText2.setAttribute('animation', 'property: position;');
  buttonText2.setAttribute('animation', 'to: -0.375 1.37 0.7;');
  setTimeout(function(){
    buttonText.object3D.rotation.y = 3.165;
    buttonText2.object3D.rotation.y = 3.165;
    buttonText.setAttribute('text', 'value: This looks boring');
    buttonText2.setAttribute('text', 'value: Where am I?');
  }, 500);
}


function step4(btn, btnTxt, otherBtn, otherBtnTxt) {
  text.object3D.rotation.y = 3.165;
  text.object3D.position.z = 0.8;
  text2.object3D.rotation.y = 3.165;
  text2.object3D.position.z = 0.8;
  buttonText.object3D.rotation.y = 3.165;

  btn.setAttribute('animation__1', 'to: 0 2 0.8;');
  btn.setAttribute('animation__3', 'property: width;');
  btn.setAttribute('animation__3', 'to: 0.8');

  btnTxt.setAttribute('animation', 'to: 0 1.98 0.7;')

  otherBtn.setAttribute('animation__2', 'to: 0');

  setTimeout(function(){
    otherBtnTxt.setAttribute('visible', false);
    if (btn == document.getElementById('button1')) {
      btnTxt.setAttribute('text', 'value: Oh, wow, please show me!');
    } else {
      btnTxt.setAttribute('text', 'value: But I cannot see anything!');
    }

  }, 500);
}


function step5(btn, btnTxt, otherBtn, otherBtnTxt) {
  text2.setAttribute('visible', false);
  text.setAttribute('text', 'value: Just turn around and give me one second!');

  btn.setAttribute('animation__1', 'property: position');
  btn.setAttribute('animation__1', 'to: 0 1.6 -0.8;');
  btnTxt.setAttribute('animation', 'to: 0 1.6 -0.75;');
  setTimeout(function(){
    btn.setAttribute('width', '0.55');
    btnTxt.setAttribute('text', 'value: Okay, I am ready!');
    btnTxt.object3D.rotation.y = 0;

  }, 500);
}


function step6() {
  blackout.object3D.position.x = 2;
  blackout.setAttribute('animation', 'from: 0;')
  blackout.setAttribute('animation', 'to: 1;')
  text.setAttribute('visible', false);


  button.setAttribute('animation__2', 'to: 0;');
  button2.setAttribute('animation__2', 'to: 0;');

  setTimeout(function(){

    buttonText.setAttribute('visible', false);
    buttonText2.setAttribute('visible', false);
    base.setAttribute('visible', false);
    for (var i = 0; i < pillars.length; i++) {
      pillars[i].setAttribute('visible', false);
    }
  }, 1500);

  setTimeout(function(){
    blackout.setAttribute('animation', 'to: 0;')
    blackout.setAttribute('animation', 'from: 1;')
    videosphere.setAttribute('visible', true);
  }, 3000);

  setTimeout(function() {
    blackout.setAttribute('visible', false);
  }, 5000);

}
