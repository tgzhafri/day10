window.addEventListener("mousemove", onMouseMove);

var container = document.getElementById("container");
var layerOne = document.getElementById("layer1");
var layerTwo = document.getElementById("layer2");
var layerThree = document.getElementById("layer3");
var layerFour = document.getElementById("layer4");
var layerFive = document.getElementById("layer5");
var layerSix = document.getElementById("layer6");

var containerPos = { w: 1000, h: 600 };
var layerOnePos = { x: 0, y: 0, w: 1200, h: 600 };
var layerTwoPos = { x: 0, y: 0, w: 1200, h: 600 };
var layerThreePos = { x: 0, y: 0, w: 1200, h: 600 };
var layerFourPos = { x: 0, y: 0, w: 1200, h: 600 };
var layerFivePos = { x: 0, y: 0, w: 1200, h: 600 };
var layerSixPos = { x: 0, y: 0, w: 1200, h: 600 };


var levelOne = document.getElementById("level1");
var levelTwo = document.getElementById("level2");
var levelThree = document.getElementById("level3");
var levelFour = document.getElementById("level4");
var levelFive = document.getElementById("level5");

var levelOnePos = { x: 0, y: 0, w: 1200, h: 600 };
var levelTwoPos = { x: 0, y: 0, w: 1200, h: 600 };
var levelThreePos = { x: 0, y: 0, w: 1200, h: 600 };
var levelFourPos = { x: 0, y: 0, w: 1200, h: 600 };
var levelFivePos = { x: 0, y: 0, w: 1200, h: 600 };


function onMouseMove(evt) {
  var mouse = {
    x: evt.pageX - container.offsetLeft,
    y: evt.pageY - container.offsetTop,
  };

  layerOnePos.x = -mouse.x * 0.001 + (containerPos.w / 2 - layerOnePos.w / 2);
  layerOne.style.left = layerOnePos.x + "px";

  layerTwoPos.x = -mouse.x * 0.003 + (containerPos.w / 2 - layerTwoPos.w / 2);
  layerTwo.style.left = layerTwoPos.x + "px";

  layerThreePos.x = -mouse.x * 0.006 + (containerPos.w / 2 - layerThreePos.w / 2);
  layerThree.style.left = layerThreePos.x + "px";

  layerFourPos.x = -mouse.x * 0.009 + (containerPos.w / 2 - layerFourPos.w / 2);
  layerFour.style.left = layerFourPos.x + "px";

  layerFivePos.x = -mouse.x * 0.01 + (containerPos.w / 2 - layerFivePos.w / 2);
  layerFive.style.left = layerFivePos.x + "px";

  layerSixPos.x = -mouse.x * 0.03 + (containerPos.w / 2 - layerSixPos.w / 2);
  layerSix.style.left = layerSixPos.x + "px";



  levelOnePos.x = -mouse.x * 0.03 + (containerPos.w / 2 - levelOnePos.w / 2);
  levelOne.style.left = levelOnePos.x + "px";

  levelTwoPos.x = -mouse.x * 0.01 + (containerPos.w / 2 - levelTwoPos.w / 2);
  levelTwo.style.left = levelTwoPos.x + "px";

  levelThreePos.x = -mouse.x * 0.009 + (containerPos.w / 2 - levelThreePos.w / 2);
  levelThree.style.left = levelThreePos.x + "px";

  levelFourPos.x = -mouse.x * 0.009 + (containerPos.w / 2 - levelFourPos.w / 2);
  levelFour.style.left = levelFourPos.x + "px";

  levelFivePos.x = -mouse.x * 0.006 + (containerPos.w / 2 - levelFivePos.w / 2);
  levelFive.style.left = levelFivePos.x + "px";

}


