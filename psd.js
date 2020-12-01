menu.onclick = function menuTrigger() {

  var topnav = document.getElementById('myTopnav');

  if (topnav.className === 'topnav') {
    topnav.classList.add('responsive')

  } else {
    topnav.classList.remove('responsive')
  }
}
