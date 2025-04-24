// DECLARATIONS
var header = document.getElementById('header');
var topButton = document.getElementById('top');


// SHORT WAY !!
window.addEventListener('scroll', function () {
    // Toggle navbar transparency
    header.classList.toggle('bg-transparent', scrollY <= 5);
  
    // Toggle Go Top button visibility
    topButton.classList.toggle('d-none', scrollY <= 100);
  });


// When i click in Go top Button Then Go Top.
topButton.addEventListener('click', function () {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



//  NEW WAY !!
// window.addEventListener('scroll', function () {

//     // change color of navbar in home page.
//   if (scrollY > 5) {
//     header.classList.remove('bg-transparent');
//   } else {
//     header.classList.add('bg-transparent');
//   }

//   // Appear/Disappear Go top Button in home page.
//   if (scrollY > 100) {
//     topButton.classList.remove('d-none');
//   } else {
//     topButton.classList.add('d-none');
//   }
// });


//   OLD WAY!!
// change color of navbar in home page.  
// var color = setInterval(function () {
//     // console.log(scrollY);
//     if (scrollY > 5) {
//         // header.style.backgroundColor = 'white';
//         header.classList.remove('bg-transparent');
//     }else if (scrollY < 5) {
//         header.classList.add('bg-transparent');
//     }
// } , 5);
