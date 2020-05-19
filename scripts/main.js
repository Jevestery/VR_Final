var button = document.getElementById('button');
var overlay = document.getElementById('overlayText');
var text = document.getElementById('mainText');
var buttonText = document.getElementById('buttonText');
var blackout = document.getElementById('blackout');
var base = document.getElementById('base');
var pillars = document.getElementsByClassName('pillar');
var video = document.getElementById('videosphere')

var step = 1;


button.addEventListener('click', function(){

  if (step == 1) {
    // button.object3D.position.y = 1.35;
    text.setAttribute('text', 'value: My name is Jeve. I prepared something. Just... for you.');
    overlay.setAttribute('animation', 'property: position');
    button.setAttribute('animation', 'property: position');
    buttonText.setAttribute('animation', 'property: position');
    setTimeout(function(){
      buttonText.setAttribute('text', 'value: Huh?');
    }, 500);

    step++;
  } else if (step == 2) {
    text.setAttribute('text', 'value: No worries. It is going to be amazing.');
    button.setAttribute('animation', 'to: 0 2 -0.8;');
    buttonText.setAttribute('animation', 'to: 0 2 -0.75;');
    setTimeout(function(){
      buttonText.setAttribute('text', 'value: Okay...');
    }, 500);

    step++;
  } else if (step == 3) {
    text.setAttribute('text', 'value: But first... Have a look around.');
    button.setAttribute('animation', 'to: 0 1.35 0.8;');
    buttonText.setAttribute('animation', 'to: 0 1.36 0.70;');
    setTimeout(function(){
      buttonText.object3D.rotation.y = 3.165;
      buttonText.setAttribute('text', 'value: What is this place?');
      button.setAttribute('width', '0.7');
    }, 500);

    step++;
  } else if (step == 4) {
    text.object3D.rotation.y = 3.165;
    text.object3D.position.z = 0.8;
    buttonText.object3D.rotation.y = 3.165;

    text.setAttribute('text', 'value: It is my concert hall for you!');
    overlay.setAttribute('animation', 'property: position');
    button.setAttribute('animation', 'to: 0 2 0.8;');
    buttonText.setAttribute('animation', 'to: 0 1.98 0.7;');
    setTimeout(function(){
        button.setAttribute('width', '0.5');
      buttonText.setAttribute('text', 'value: It is creepy...');
    }, 500);

    step++;
  } else if (step == 5) {
    text.object3D.rotation.y = 3.165;
    text.object3D.position.z = 0.8;
    buttonText.object3D.rotation.y = 3.165;

    text.setAttribute('text', 'value: Hmm... You are right. But I have an idea!');
    button.setAttribute('animation', 'to: 0 1.35 0.8;');
    buttonText.setAttribute('animation', 'to: 0 1.36 0.7;');
    setTimeout(function(){
      button.setAttribute('width', '0.4');
      buttonText.setAttribute('text', 'value: Which is?');
    }, 500);

    step++;
  } else if (step == 6) {
    text.object3D.rotation.y = 3.165;
    text.object3D.position.z = 0.8;
    buttonText.object3D.rotation.y = 3.165;

    text.setAttribute('text', 'value: Just turn around and give me one second!');
    button.setAttribute('animation', 'to: 0 1.6 -0.8;');
    buttonText.setAttribute('animation', 'to: 0 1.6 -0.75;');
    setTimeout(function(){
      button.setAttribute('width', '0.55');
      buttonText.setAttribute('text', 'value: Okay, I am ready!');
      buttonText.object3D.rotation.y = 0;
    }, 500);

    step++;
  } else if (step == 7) {
    blackout.setAttribute('animation', 'property: position')
    text.setAttribute('visible', false);
    setTimeout(function(){
      button.setAttribute('visible', false);
      buttonText.setAttribute('visible', false);
      base.setAttribute('visible', false);
      for (var i = 0; i < pillar.length; i++) {
        pillar[i].setAttribute('visible', false);
      }
    }, 1500);
    setTimeout(function(){
      blackout.setAttribute('visible', false);
      video.style.display('block');
    }, 1000);

    step++;
  }
});
