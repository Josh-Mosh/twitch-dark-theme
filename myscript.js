var els = ['div', 'p', 'label', 'a', 'button', 'span', 'ul', 'li', 'h2', 'h3'];

function changeColors() {
  console.log('-=-=-=-==-=-=-= CHANGING THE COLORS -=-=-=-=-=-=-=-=-=--=-');
  els.forEach(function(e) {
    $(e).each(function() {

      // Background
      var backgroundColor = $(this).css('background-color');
      var background = $(this).css('background');
      var backgroundImage = $(this).css('background-image');

      if ((background || backgroundColor) && (backgroundImage === 'none')) {
        $(this).css('background', getBackgroundColor(background));
      }

      // Font Colors
      var color = $(this).css('color');
      if (color) {
        $(this).css('color', getFontColor(color));
      }

      // Borders
      var border = $(this).css('border');
      if (border) {
        $(this).css('border', getBorder(border));
      }

    });
  });
}

function getBackgroundColor(oldColor) {
  switch (oldColor) {
    case 'rgb(255, 255, 255)':
      return '#242229';
    case 'rgb(239, 238, 241)':
      return '#17141F';
    case 'rgb(229, 227, 232)':
      return '#383340';
    case 'rgb(250, 249, 250)':
      return '#383340';
    case 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box':
      return '#242229';
  }
}

function getFontColor(oldColor) {
  switch (oldColor) {
    case 'rgb(56, 51, 64)':
      return '#e5e3e8';
    case 'rgb(35, 33, 39)':
      return '#e1dfe6';
    case 'rgb(50, 47, 55)':
      return '#faf9fa';
    case 'rgb(25, 23, 28)':
      return '#faf9fa';
    case 'rgb(67, 63, 74)':
      return '#898395';
  }
}

function getBorder(oldBorder) {
  switch (oldBorder) {
    case '1px solid rgb(218, 216, 222)':
      return '1px solid #4c4952';
  }
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  changeColors();
  console.log('background message ', msg, sender);
});
