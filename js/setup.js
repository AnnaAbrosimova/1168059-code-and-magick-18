'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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
  wizards.push({name: wizardNames[randoms[j]] + ' ' + wizardSurnames[randoms[j]],
    coatColor: coatColors[randoms[j]],
    eyesColor: eyesColors[randoms[j]],
  });
}
// console.log(wizards);
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (i = 0; i < maxlength; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
//   ЗАДАНИЕ 4.1
var setup = document.querySelector('.setup');
var openSetupButton = document.querySelector('.setup-open');
var closeSetupButton = setup.querySelector('.setup-close');
var userName = setup.querySelector('.setup-user-name');
var saveSubmit = document.querySelector('.button setup-submit');
// console.log(saveSubmit);
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && (!userName)) { // проверяю, что при фокусе на ввод имени на esc закрыть нельзя (не работает)
    closePopup();
  }
};
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
openSetupButton.addEventListener('click', function () {
  openPopup();
});
openSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
closeSetupButton.addEventListener('click', function () {
  closePopup();
});
closeSetupButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
// saveSubmit не находит почему-то, в консоли выводит 0
saveSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.submit();
  }
});
var setupWiz = document.querySelector('.setup-wizard');
var ChangeCoatCol = setupWiz.querySelector('.wizard-coat');
var ChangeEyesCol = setupWiz.querySelector('.wizard-eyes');
var ChangeFireballCol = document.querySelector('.setup-fireball-wrap');
// Счетчик
function getIterator(array) {
  var count = 1;
  return function () {
    if (count >= array.length) {
      count = 0;
    }
    return array[count++];
  };
}
var getNextCoatColor = getIterator(coatColors);
var getNextEyeColor = getIterator(eyesColors);
var getNextFireballColor = getIterator(fireballColors);
// дальше при нажатии цвета меняются, но при отправке формы отображаются старые значения из инпута
ChangeCoatCol.addEventListener('click', function () {
  ChangeCoatCol.style.fill = getNextCoatColor();
  ChangeCoatCol.setAttribute('value', getNextCoatColor());
});
ChangeEyesCol.addEventListener('click', function () {
  ChangeEyesCol.style.fill = getNextEyeColor();
  ChangeEyesCol.setAttribute('value', getNextEyeColor());
});
ChangeFireballCol.addEventListener('click', function () {
  ChangeFireballCol.style.background = getNextFireballColor();
  ChangeFireballCol.setAttribute('value', getNextFireballColor());
});
