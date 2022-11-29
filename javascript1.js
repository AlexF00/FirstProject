'use strict';

let imgA = document.getElementsByClassName('a')
let imgB = document.getElementsByClassName('b')
let imgC = document.getElementsByClassName('c')
let imgD = document.getElementsByClassName('d')

//sizes color change
const sizes = document.getElementsByClassName('sizeli')
const sizelist = document.getElementsByClassName('sizelist')
for (let s = 0; s < sizes.length; s++) {
  sizelist[0].addEventListener('click', function(a) {
    if (sizes[s].contains(a.target)) {
      sizes[s].style.cssText = 'background-color: black; color: white;'
      sizes[s].classList.add('cart')
    } else {
      sizes[s].style.cssText = ' '
      sizes[s].classList.remove('cart')
    }
  })
}

//For dropdown window of .containertop2
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

//For visibility of Account dropdown window
  document.addEventListener('click', function(e){
    if(window.innerWidth > 500) {
      if (document.querySelector('.Account').contains(e.target)){
        document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible; transform-origin:top center;';
      } else {
        document.querySelector('.accountwindow').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden; transform-origin:top center;';
      }
    }
  });
  function showwindow() {
    if(window.innerWidth < 501) {
      document.querySelector('.accountwindow').style.cssText = 'transform: scaleX(1); opacity:1; visibility:visible; transform-origin:center right;'
      document.querySelector('body').style.cssText = 'overflow-y: hidden'
    }
  }
  document.querySelector('.gg-close').addEventListener('click', function() {
    document.querySelector('.accountwindow').style.cssText = 'transform: scaleX(0); opacity:0; visibility:hidden; transform-origin:center right;'
    document.querySelector('body').style.cssText = 'overflow-y: auto'
  });

  //For visibility of Menu dropdown window
  document.addEventListener('click', function(e){
    if(window.innerWidth > 500) {
      if (document.querySelector('.Menu').contains(e.target)){
        document.querySelector('.menuwindow').style.cssText = 'transform: scaleY(1); opacity:100%; visibility:visible; transform-origin:top center;';
      } else {
        document.querySelector('.menuwindow').style.cssText = 'transform: scaleY(0); opacity:0; visibility:hidden; transform-origin:top center;';
      }
    }
  });
  function showwindow2() {
    if(window.innerWidth < 501) {
      document.querySelector('.menuwindow').style.cssText = 'transform: scaleX(1); opacity:1; visibility:visible; transform-origin:center right;'
      document.querySelector('body').style.cssText = 'overflow-y: hidden'
    }
  }
  document.querySelector('#menuclose').addEventListener('click', function() {
    document.querySelector('.menuwindow').style.cssText = 'transform: scaleX(0); opacity:0; visibility:hidden; transform-origin:center right;'
    document.querySelector('body').style.cssText = 'overflow-y: auto'
  });

//For class active and store ids of bikini items
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

//For ActiveSet wishlist store
function shoppingid1() {
  let wishlistShoppingItem1 = document.getElementById('bikini01')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini01 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini01 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid2() {
  let wishlistShoppingItem1 = document.getElementById('bikini02')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini02 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini02 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid3() {
  let wishlistShoppingItem1 = document.getElementById('bikini03')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini03 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini03 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid4() {
  let wishlistShoppingItem1 = document.getElementById('bikini04')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini04 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini04 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid5() {
  let wishlistShoppingItem1 = document.getElementById('bikini05')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini05 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini05 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid6() {
  let wishlistShoppingItem1 = document.getElementById('bikini06')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini06 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini06 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

function shoppingid7() {
  let wishlistShoppingItem1 = document.getElementById('bikini07')
  if (wishlistShoppingItem1.classList.contains('active')) {
    wishlistShoppingItem1.classList.remove('active')
    wishListStore.shift(wishlistShoppingItem1.id)
    document.querySelector('#bikini07 h3').style.cssText = ' '
  } else {
    wishlistShoppingItem1.classList.add('active')
    wishListStore.push(wishlistShoppingItem1.id)
    document.querySelector('#bikini07 h3').style.cssText = 'background-color: gold; color: black; transition: all 0.3s ease-in-out;'
  }
  sessionStorage.setItem('Store', wishListStore)
}

/*For wishlist notifications
let z = 103
let x = 103*/
for (let k = 0; k < wishListButton.length; k++) {
  wishListButton[k].addEventListener('click', function(){
    if(this.classList.contains('active')) {
      /*document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer1').style.zIndex = z
      z++;
      document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0)';
      }, 3000);*/
      document.getElementsByClassName('gg-crown')[k + 1].style.cssText = 'background-color: gold;'
    } else {
      /*document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(1);'
      document.querySelector('.notificationcontainer2').style.zIndex = x
      x++;
      document.querySelector('.notificationcontainer1').style.cssText = 'transform: scaleY(0);'
      setTimeout(function(){
        document.querySelector('.notificationcontainer2').style.cssText = 'transform: scaleY(0)';
      }, 3000);*/
      document.getElementsByClassName('gg-crown')[k + 1].style.cssText = 'background-color: transparent;'
    }
})}

//For moving ids from array to session storage
for (let y = 0; y < wishListButton.length; y++) {
  wishListButton[y].addEventListener('click', function(){
    sessionStorage.setItem('Store', wishListStore)
  })
}

//For searchbar functionality and visibility
let bar = document.getElementsByClassName('bikinibar')
let triangle2 = document.getElementsByClassName('triangle2')
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
      triangle2[0].style.display = 'none'
    } else {
      bar[0].style.display = 'grid'
      triangle2[0].style.display = 'flex'
    }
}
document.getElementById('searchbar').addEventListener('click', function() {
  let input = document.getElementById('searchbar').value
  if (input !== '') {
    bar[0].style.display = 'grid'
    triangle2[0].style.display = 'flex'
  }
})
document.addEventListener('click', function(f) {
  if (document.getElementById('searchbar').contains(f.target) || bar[0].contains(f.target)){
    
  } else {
    bar[0].style.display = 'none'
    triangle2[0].style.display = 'none'
  }
});

//For menu Searchbar

let bar2 = document.getElementsByClassName('bikinibar2')
let triangle4 = document.getElementsByClassName('triangle4')
function searchItems2() {
  bar2[0].style.display = 'block'
  let input = document.getElementById('searchbar2').value
  input = input.toLowerCase();
  let bikiniItems2 = document.getElementsByClassName('bikinisets2')
  let bikiniA2 = document.getElementsByClassName('bikinia2')
  for (let j = 0; j < bikiniItems2.length; j++) {
    if (bikiniItems2[j].innerHTML.toLowerCase().includes(input)) {
      bikiniItems2[j].style.display = 'flex'
      bikiniA2[j].style.display = 'flex'
    } else {
      bikiniItems2[j].style.display = 'none'
      bikiniA2[j].style.display = 'none'
    }
  }
    if (input === "") {
      bar2[0].style.display = 'none'
      triangle4[0].style.display = 'none'
    } else {
      bar2[0].style.display = 'grid'
      triangle4[0].style.display = 'flex'
    }
}
document.getElementById('searchbar2').addEventListener('click', function() {
  let input = document.getElementById('searchbar2').value
  if (input !== '') {
    bar2[0].style.display = 'grid'
    triangle4[0].style.display = 'flex'
  }
})
document.addEventListener('click', function(f) {
  if (document.getElementById('searchbar2').contains(f.target) || bar2[0].contains(f.target)){
    
  } else {
    bar2[0].style.display = 'none'
    triangle4[0].style.display = 'none'
  }
});

//For bikini arrows functionality and visibility

function show() {
  document.querySelector('.container').style.display = 'flex'
  document.querySelector('.box1').addEventListener('click', function() {
    document.querySelector('.grid').scrollBy({top:0, left:-500, behavior:"smooth"})
  })
  document.querySelector('.box2').addEventListener('click', function() {
    document.querySelector('.grid').scrollBy({top:0, left:500, behavior:"smooth"})
  })
}
function hide() {
  document.querySelector('.container').style.display = 'none'
}

//For ActiveSet img visibility

function showimg1() {
  imgA[0].style.display = 'block'
  imgB[0].style.display = 'none'
  imgC[0].style.display = 'none'
  imgD[0].style.display = 'none'
}
function showimg2() {
  imgB[0].style.display = 'block'
  imgA[0].style.display = 'none'
  imgC[0].style.display = 'none'
  imgD[0].style.display = 'none'
}
function showimg3() {
  imgC[0].style.display = 'block'
  imgB[0].style.display = 'none'
  imgA[0].style.display = 'none'
  imgD[0].style.display = 'none'
}
function showimg4() {
  imgD[0].style.display = 'block'
  imgB[0].style.display = 'none'
  imgC[0].style.display = 'none'
  imgA[0].style.display = 'none'
}