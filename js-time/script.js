var timeOutput = document.getElementById('time-output'),
    rgbOutput = document.getElementById('rgb-output'),
    hexOutput = document.getElementById('hex-output');
var date, hh, mm, ss;

function getTime() {
  date = new Date();
  hh = date.getHours(),
  mm = date.getMinutes(),
  ss = date.getSeconds();
};

setInterval(function() {
  getTime();
  hh = parseInt(hh*11);
  mm = parseInt(mm*4.3);
  ss = parseInt(ss*4.3);
  colorRgb = 'rgb(' + hh + ', ' + mm + ', ' + ss + ')';
  colorHex = '#' + hh.toString(16) + mm.toString(16) + ss.toString(16);

  timeOutput.innerHTML = date.toLocaleTimeString('en-US', { hour12: false });
  rgbOutput.innerHTML = colorRgb;
  hexOutput.innerHTML = colorHex;
  
  document.body.style.background = colorRgb;
}, 1000);
