// Function to detect if the browser is Safari
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Disable the interactive element if the browser is Safari
if (isSafari()) {
  const interactiveElement = document.querySelector('.interactive');
  if (interactiveElement) {
    interactiveElement.style.display = 'none'; // Hide the interactive element
  }
}

// Existing code...
document.querySelector('.gradients-container').addEventListener('click', function() {
  const bubbles = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5');
  bubbles.forEach(bubble => {
    bubble.classList.toggle('bubble-swirl'); // Toggle the swirling effect on click
  });
});

// Logo hover functionality
const logoContainer = document.querySelector('.logo-container');
const blackLogo = logoContainer.querySelector('.black');
const whiteLogo = logoContainer.querySelector('.white');

logoContainer.addEventListener('mouseenter', () => {
  blackLogo.style.opacity = '0'; // Fade out black logo
  whiteLogo.style.opacity = '1'; // Fade in white logo
});

logoContainer.addEventListener('mouseleave', () => {
  blackLogo.style.opacity = '1'; // Fade in black logo
  whiteLogo.style.opacity = '0'; // Fade out white logo
});

const bubbles = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5');
bubbles.forEach(bubble => {
  bubble.addEventListener('click', (e) => {
    // Removed logging for bubble click
  });
});

// Add click event to the gradient background
document.querySelector('.gradient-bg').addEventListener('click', function() {
  const bubbles = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5');
  // No swirl effect logic here
});

