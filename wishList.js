'use strict'
if (window.sessionStorage.getItem('Store') === '' || window.sessionStorage.length === 0) {
    document.querySelector('.myWishlist p').style.cssText = 'display: block';
}
let sessionDelete = []
sessionDelete = sessionStorage.getItem('Store').split(',')

if (window.sessionStorage.getItem('Store').indexOf('bikini01') > -1) {
    document.getElementById('bikini01').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini02') > -1) {
    document.getElementById('bikini02').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini03') > -1) {
    document.getElementById('bikini03').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini04') > -1) {
    document.getElementById('bikini04').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini05') > -1) {
    document.getElementById('bikini05').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini06') > -1) {
    document.getElementById('bikini06').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini07') > -1) {
    document.getElementById('bikini07').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini08') > -1) {
    document.getElementById('bikini08').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini09') > -1) {
    document.getElementById('bikini09').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
} if (window.sessionStorage.getItem('Store').indexOf('bikini10') > -1) {
    document.getElementById('bikini10').style.cssText = 'display: flex';
    document.querySelector('.myWishlist p').style.cssText = 'display: none';
}

let bikiniContainer = document.getElementsByClassName('bikinicontainer')
for (let w = 0; w < wishListButton.length; w++) {
    wishListButton[w].addEventListener('click', function(){
        sessionDelete.splice(wishListStore.indexOf(wishListButton[w]), 1)
        bikiniContainer[w].style.cssText = 'display: none';
        if (sessionDelete.length === 0) {
            document.querySelector('.myWishlist p').style.cssText = 'display: block';
        }
    }
)}
console.log(sessionDelete)