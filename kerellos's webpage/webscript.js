//makes sure that the window is pulled to the top bc sometimes it doesnt rlly work
window.onload = function() {
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 50); // Adjust delay as needed
};

window.addEventListener('scroll', function() {
  const parallaxText = document.querySelector('.name h1');
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  let scrollPosition = window.scrollY;

  if (scrollPosition < headerHeight) {
      // Apply parallax effect within the header
      parallaxText.style.transform = 'translate(-50%, calc(-50% + ' + scrollPosition * 0.5 + 'px))';
      // Gradually reduce opacity as the text approaches the bottom of the header
      parallaxText.style.opacity = 0.5 - (scrollPosition / headerHeight);
  } else {
      // Make sure the text is fully hidden after the header
      parallaxText.style.opacity = 0;
  }
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


window.addEventListener('scroll', function() {
  const aboutMeHeading = document.querySelector('#about-me h2');
  const sectionTop = document.querySelector('#about-me').offsetTop;
  const sectionHeight = document.querySelector('#about-me').offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  const maxMovement = 100;  /* Maximum amount the text will move in percentage */

  if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Calculate how far to move the text based on scroll position
      let movement = ((scrollPosition - sectionTop) / sectionHeight) * maxMovement;
      if (movement > maxMovement) movement = maxMovement;
      aboutMeHeading.style.right = `${-100 + movement}%`;  /* Move the text */
  } else if (scrollPosition >= sectionTop + sectionHeight) {
      // When the scroll is beyond the section, keep the text in place
      aboutMeHeading.style.right = '0';
  }
});
