var els = ['div', 'p', 'a', 'span', 'ul', 'li', 'h2', 'h3'];

var changeColors = function() {
  console.log('-=-=-=-==-=-=-= CHANGING THE COLORS -=-=-=-=-=-=-=-=-=--=-');
  els.forEach(function(e) {
    $(e).each(function() {

      // Background
      var backgroundColor = $(this).css('background-color');
      var background = $(this).css('background');
      var backgroundImage = $(this).css('background-image');
      if (backgroundColor && (backgroundImage === 'none')) {
        $(this).css('background', getReplacementColor(backgroundColor));
      }

      if (background && (backgroundImage === 'none')) {
        $(this).css('background', getReplacementColor(background));
      }

      // Font Colors
      var color = $(this).css('color');
      if (color) {
        $(this).css('color', getReplacementColor(color));
      }

    });
  });
};

function getReplacementColor(oldColor) {
  var newColor = oldColor;
  switch (oldColor) {
    case 'rgb(255, 255, 255)':
      return '#242229';
    case 'rgb(239, 238, 241)':
      return '#17141F';
    case 'rgb(229, 227, 232)':
      return '#383340';
    case 'rgb(56, 51, 64)':
      return '#e5e3e8';
    case 'rgb(35, 33, 39)':
      return '#e1dfe6';
    case 'rgb(50, 47, 55)':
      return '#faf9fa';
    case 'rgb(25, 23, 28)':
      return '#faf9fa';
    case 'rgb(67, 63, 74)':
      return '#e5e3e8';
  }
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  changeColors();
  console.log('background message ', msg, sender);
});
