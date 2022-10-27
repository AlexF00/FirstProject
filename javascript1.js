'use strict';
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


document.addEventListener('click', function(e){
  if (document.querySelector('.Account').contains(e.target)){
    document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible';
  } else {
    document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden';
  }
});
const wishListStore = []
let wishListButton = document.getElementsByClassName('wishlistbutton')
for (let i = 0; i < wishListButton.length; i++) {
  wishListButton[i].addEventListener('click', function(){
  if(this.classList.contains('active')) {
    this.classList.remove('active')
    wishListStore.splice(wishListStore.indexOf(this.id), 1)
  } else {
    this.classList.add('active')
    wishListStore.push(this.id)
  }
})}
let z = 103
let x = 103
for (let k = 0; k < wishListButton.length; k++) {
  wishListButton[k].addEventListener('click', function(){
    if(this.classList.contains('active')) {
      document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer1').style.zIndex = z
      z++;
      document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0)';
      }, 3000);
      document.getElementsByClassName('gg-crown')[k + 1].style.cssText = 'background-color: gold;'
    } else {
      document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer2').style.zIndex = x
      x++;
      document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0)';
      }, 3000);
      document.getElementsByClassName('gg-crown')[k + 1].style.cssText = 'background-color: transparent;'
    }
})}
for (let y = 0; y < wishListButton.length; y++) {
  wishListButton[y].addEventListener('click', function(){
    sessionStorage.setItem('Store', wishListStore)
  })
}
let bar = document.getElementsByClassName('bikinibar')
function searchItems() {
  bar[0].style.display = 'block'
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let bikiniItems = document.getElementsByClassName('bikinisets')
  let bikiniA = document.getElementsByClassName('bikinia')
  for (let j = 0; j < bikiniItems.length; j++) {
    if (bikiniItems[j].innerHTML.toLowerCase().includes(input)) {
      bikiniItems[j].style.display = 'flex'
      bikiniA[j].style.display = 'flex'
    } else {
      bikiniItems[j].style.display = 'none'
      bikiniA[j].style.display = 'none'
    }
  }
    if (input === "") {
      bar[0].style.display = 'none'
    } else {
      bar[0].style.display = 'grid'
    }
}
document.getElementById('searchbar').addEventListener('click', function() {
  let input = document.getElementById('searchbar').value
  if (input !== '') {
    bar[0].style.display = 'grid'
  }
})

document.addEventListener('click', function(f) {
  if (document.getElementById('searchbar').contains(f.target) || bar[0].contains(f.target)){
    
  } else {
    bar[0].style.display = 'none'
  }
});
function show() {
  document.querySelector('.container').style.display = 'flex'
}
function hide() {
  document.querySelector('.container').style.display = 'none'
}
document.querySelector('.box1').addEventListener('click', function() {
  document.querySelector('.grid').scrollBy({top:0, left:-500, behavior:"smooth"})
})
document.querySelector('.box2').addEventListener('click', function() {
  document.querySelector('.grid').scrollBy({top:0, left:500, behavior:"smooth"})
})

