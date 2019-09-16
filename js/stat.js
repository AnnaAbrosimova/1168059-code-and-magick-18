'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', 120, 35);
  ctx.fillText('Список результатов:', 120, 50);
  // Нахождение максимального элемента
  var max = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = Math.round(times[i]);
    }
  }
  var MAX_HEIGHT = 150;
  var GAP = 50;
  var COLUMN_WIDTH = 40;
  // рисуем гистограмму
  for (i = 0; i < times.length; i++) {
    var heightBar = Math.round(MAX_HEIGHT * times[i] / max);
    var barOffset = Math.round(MAX_HEIGHT - heightBar);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.random() * 255 + ', 1)';
    }
    ctx.fillRect(MAX_HEIGHT + (GAP + COLUMN_WIDTH) * i, 100 + barOffset, COLUMN_WIDTH, heightBar);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(heightBar, MAX_HEIGHT + 5 + (GAP + COLUMN_WIDTH) * i, 90 + barOffset);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], MAX_HEIGHT + (GAP + COLUMN_WIDTH) * i, 265);
  }
};
