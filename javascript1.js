
function show1() {
  document.querySelector('.dropdownwindow1').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  document.querySelector('main').style.cssText = 'filter: blur(5px) brightness(0.8);'
  document.querySelector('footer').style.cssText = 'filter: blur(5px) brightness(0.8);'
}
function hide1() {
  document.querySelector('.dropdownwindow1').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  document.querySelector('main').style.cssText = 'filter: blur(0px)'
  document.querySelector('footer').style.cssText = 'filter: blur(0px)'
}


function show2() {
  document.querySelector('.dropdownwindow2').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  document.querySelector('main').style.cssText = 'filter: blur(5px) brightness(0.8);'
  document.querySelector('footer').style.cssText = 'filter: blur(5px) brightness(0.8);'
}
function hide2() {
  document.querySelector('.dropdownwindow2').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  document.querySelector('main').style.cssText = 'filter: blur(0px)'
  document.querySelector('footer').style.cssText = 'filter: blur(0px)'
}


function show3() {
  document.querySelector('.dropdownwindow3').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  document.querySelector('main').style.cssText = 'filter: blur(5px) brightness(0.8);'
  document.querySelector('footer').style.cssText = 'filter: blur(5px) brightness(0.8);'
}
function hide3() {
  document.querySelector('.dropdownwindow3').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  document.querySelector('main').style.cssText = 'filter: blur(0px)'
  document.querySelector('footer').style.cssText = 'filter: blur(0px)'
}


function show4() {
  document.querySelector('.dropdownwindow4').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  document.querySelector('main').style.cssText = 'filter: blur(5px) brightness(0.8);'
  document.querySelector('footer').style.cssText = 'filter: blur(5px) brightness(0.8);'
}
function hide4() {
  document.querySelector('.dropdownwindow4').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  document.querySelector('main').style.cssText = 'filter: blur(0px)'
  document.querySelector('footer').style.cssText = 'filter: blur(0px)'
}


function show5() {
  document.querySelector('.dropdownwindow5').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  document.querySelector('main').style.cssText = 'filter: blur(5px) brightness(0.8);'
  document.querySelector('footer').style.cssText = 'filter: blur(5px) brightness(0.8);'
}
function hide5() {
  document.querySelector('.dropdownwindow5').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  document.querySelector('main').style.cssText = 'filter: blur(0px)'
  document.querySelector('footer').style.cssText = 'filter: blur(0px)'
}


function click1() {
  window.location.reload();
}
document.addEventListener('click', function(e){
  if (document.querySelector('.Account').contains(e.target)){
    document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  } else {
    document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  }
});

function addItemWishlist() {
  console.log('Adding item to the wishlist')
}
function removeItemWishlist() {
  console.log('Removing item from the wishlist')
}
let wishListButton = document.getElementsByClassName('wishlistbutton')
for (i = 0; i < wishListButton.length; i++) {
  wishListButton[i].addEventListener('click', function(){
  if(this.classList.contains('active')) {
    removeItemWishlist();
    this.classList.remove('active')
  } else {
    addItemWishlist();
    this.classList.add('active')
  }
})}
let notificationPhrase = document.getElementsByClassName('notificationp')
let z = 103
let x = 103
for (k = 0; k < wishListButton.length; k++) {
  wishListButton[k].addEventListener('click', function(){
    if(this.classList.contains('active')) {
      document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer1').style.zIndex = z
      z++;
      document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0)';
      }, 3000);
    } else {
      document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer2').style.zIndex = x
      x++
      document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0)';
      }, 3000);
    }
})}