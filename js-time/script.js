function getTimeFormat() {
  var data = new Date(); 
  hh = data.getHours(), mm = data.getMinutes(), ss = data.getSeconds();
  hh = (hh<10) ? '0' + hh : hh;
  mm = (mm<10) ? '0' + mm : mm;
  ss = (ss<10) ? '0' + ss : ss;
  return hh + ':' + mm + ':' + ss;
}

function resultTime() {
  dateOutput.innerHTML = getTimeFormat();
}

setInterval(function() {
  resultTime();
  var resultColor = '#' + hh + mm + ss;
  document.body.style.background = resultColor;
  bgOutput.style.color = resultColor;
  bgOutput.innerHTML = resultColor;
}, 1000);
