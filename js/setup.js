'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
// var coatColors = ['red', 'black', 'yellow', 'blue', 'green'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var randoms = [];
var maxlength = 4;
var randomNum;
var wizards = [];
var getRandom = function () {
  return Math.floor(Math.random() * maxlength);
};
for (var i = 0; i < maxlength; i++) {
  randomNum = getRandom();
  while (randoms.length < maxlength) {
    if (randoms.indexOf(randomNum) === -1) {
      randoms.push(randomNum);
    } else {
      randomNum = getRandom();
    }
  }
}
for (var j = 0; j < randoms.length; j++) {
  wizards[j] =
      {name: wizardNames[randoms[j]] + ' ' + wizardSurnames[randoms[j]],
        coatColor: coatColors[randoms[j]],
        eyesColor: eyesColors[randoms[j]]
      };
}
// console.log(wizards);
var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (i = 0; i < maxlength; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
