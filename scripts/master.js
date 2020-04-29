let showingAuthorInfo = false, count = 0, chaos;

function addToBlue() {
  let parent = document.getElementById('divBlue');
  if (parent.hasChildNodes() == false) {
    let child = document.createElement('a');
    child.setAttribute('href', 'https://repl.it/@FaruqHammed1/IR-3');
    child.setAttribute('target', '_blank');
    child.setAttribute('id', 'linkInBlue');
    child.setAttribute('onclick', 'this.remove();');
    child.style.visibility = 'visible';
    child.innerHTML = 'Click here';
    parent.append(child);
  }
}

function makeVisible(name) {
  document.getElementById(name).style.visibility = 'visible';
}

function makeInvisible(name) {
  document.getElementById(name).style.visibility = 'hidden';
}

function changeBgColor(name, color) {
  document.getElementById(name).style.color = color;
}


function showAuthorInfo() {
  if (!showingAuthorInfo) {
    let au = document.getElementById('author');
    au.innerHTML = '';

    let child = document.createElement('div');
    child.setAttribute('id', 'authorChild');

    let authorImage = document.createElement('img');
    authorImage.src = 'images/Faruq.png';
    authorImage.width = '100';
    authorImage.height = '100';
    child.append(authorImage);

    let brk = document.createElement('br');
    child.append(brk);

    let authorname = document.createElement('strong');
    authorname.innerHTML = 'Faruq Hammed';
    child.append(authorname);

    brk = document.createElement('br');
    child.append(brk);

    let sch = document.createElement('text');
    sch = 'Philander Smith College';

    brk = document.createElement('br');
    child.append(sch, brk);

    let mjr = document.createElement('text');
    mjr = 'CS & Maths';
    child.append(mjr);
    child.style.textAlign = "center";

    au.append(child);
    showingAuthorInfo = true;
  }
}

function genColor() {
  c1 = Math.round(Math.random() * 256);
  c2 = Math.round(Math.random() * 256);
  c3 = Math.round(Math.random() * 256);
  c1 = c1.toString(16);
  c2 = c2.toString(16);
  c3 = c2.toString(16);

  color = "#" + c1 + c2 + c3;
  return color;
}

function genColorHsl() {
  var h = Math.round(Math.random() * 256);
  var s = Math.round(Math.random() * 100);
  var l = Math.round(Math.random() * 100);

  var res = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  return res;
}

function changeLinearGradient(elm) {
  if (count % 3 == 0) {
    elm.style.backgroundImage = 'repeating-radial-gradient( circle'
      + genColor() + ', ' + genColorHsl() + ', ' + genColor() + ') ';
  }
  else if (count % 3 == 1) {
    elm.style.backgroundImage = 'repeating-conic-gradient('
      + genColorHsl() + ', ' + genColor() + ', ' + genColorHsl() + ') ';
  }
  else if (count % 3 == 2) {
    elm.style.backgroundImage = 'repeating-linear-gradient( to right, '
      + genColor() + ', ' + genColorHsl() + ', ' + genColor() + ', ' + genColorHsl() + ')';
  }
  count += 1;
}

function change(elm) {
  chaos = window.setInterval(changeLinearGradient, 100, elm);
}

function stop(elm) {
  clearInterval(chaos);
}

//swap top and bottom
function swap() {
  let tp = document.getElementById('top').children,
    btm = document.getElementById('bottom').children;

  console.log(tp.length);
}

function addHighlight(elm) {
  let pjts = elm.getElementsByClassName('project');
  for (var i = 0; i < pjts.length; i++) {
    pjts[i].setAttribute('onmouseenter', 'highlight(this)');
    pjts[i].setAttribute('onmouseleave', 'removeHighlight(this)');
  }
}

function highlight(elm) {
  elm.style.background = 'lightblue';
  elm.style.padding = '1rem';
  elm.style.border = '1px solid #4e4a3b';
  elm.style.borderRadius = '1rem';
  let hds = elm.getElementsByTagName('h3');
  for (var i = 0; i < hds.length; i++) {
    hds[i].style.textDecoration = 'underline';
  }
}

function removeHighlight(elm) {
  elm.style.background = document.body.style.backgroundColor;
  elm.style.padding = '0';
  elm.style.border = 'none';
  let hds = elm.getElementsByTagName('h3');
  for (var i = 0; i < hds.length; i++) {
    hds[i].style.textDecoration = 'none';
  }
}
