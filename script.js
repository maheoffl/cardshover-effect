// let elem1 = document.querySelector('#elem1');
// let img = document.querySelector('img');
// let elemImg = document.querySelector('#elem1 img');

// elem1.addEventListener('mousemove', function (a) {
//     elemImg.style.left=a.x+'px'
//     elemImg.style.top=a.y+'px'
// })
// elem1.addEventListener('mouseenter', function () {
//     elemImg.style.opacity=1
// })
// elem1.addEventListener('mouseleave', function () {
//     elemImg.style.opacity=0
// })





elem = document.querySelectorAll('.elem');


elem.forEach(function (a) {
   
    a.addEventListener('mouseenter', function () {
  a.childNodes[1].style.opacity=1
        
    })   
    a.addEventListener('mouseleave', function () {
        a.childNodes[1].style.opacity=0
    })  

    
    a.addEventListener('mousemove', function (dets) {
    a.childNodes[1].style.left=dets.x+'px'
})

})
