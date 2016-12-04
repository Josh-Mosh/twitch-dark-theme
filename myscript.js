var changeColors = function() {
  console.log('-=-=-=-==-=-=-= CHANGING THE COLORS -=-=-=-=-=-=-=-=-=--=-');
  $("div").each(function () {
    var backgroundColor = $(this).css("background-color");
    var background = $(this).css("background");
    // console.log('backgroundColor ', backgroundColor);
    // console.log('background ', background);
    if (backgroundColor == "rgb(255, 255, 255)" || background === "rgb(255, 255, 255)") {
      $(this).css("background", "#242229");
    }
  });
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  changeColors();
  console.log('background message ', msg, sender);
});
