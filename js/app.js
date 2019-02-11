window.onload = function(){
  var progressBars = document.querySelectorAll('div[role="progressbar"]');
  var width;
  progressBars.forEach(function(progressBarObject){
    width = progressBarObject.getAttribute('aria-valuenow');
    progressBarObject.style.width = width + '%';
  });
}
