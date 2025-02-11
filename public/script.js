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

// Click event for CONTACT
document.getElementById('contact').addEventListener('click', () => {
  document.querySelector('.text-top-right').style.display = 'yes'; // Hide top right text
  document.querySelector('.quote').style.display = 'none'; // Hide quote
  document.querySelector('.folder-container').style.display = 'none'; // Hide folder container
  document.getElementById('middleText').style.display = 'block'; // Show middle text
  
  // Set the email text as a clickable link
  const email = 'antoniotaurisanowrites@gmail.com';
  document.getElementById('mainText').innerHTML = `<a href="mailto:${email}" style="color: inherit; text-decoration: none;">${email}</a>`; // Make email clickable
  document.getElementById('mainText').style.fontSize = '1em'; // Make the text larger

  // Style the "Go home" link
  const goHomeLink = document.querySelector('.go-home');
  goHomeLink.style.fontSize = '3em'; // Make the "Go home" link larger
  goHomeLink.style.marginTop = '40px'; // Increase margin for more spacing
  goHomeLink.style.textDecoration = 'underline'; // Underline the link
  goHomeLink.style.display = 'block'; // Make it a block element to detach it
});

// Click event for ABOUT
document.getElementById('about').addEventListener('click', () => {
  document.querySelector('.text-top-right').style.display = 'yes'; // Hide top right text
  document.querySelector('.quote').style.display = 'none'; // Hide quote
  document.querySelector('.folder-container').style.display = 'none'; // Hide folder container
  document.getElementById('middleText').style.display = 'block'; // Show middle text
  
  // Set the about text with a link to Almost Famous Zine
  document.getElementById('mainText').innerHTML = `Antonio is a marketing professional with a Data Analytics BSC and a passion for storytelling and creative strategy. <br><br>Blendingcreativity with data-driven insights to develop consumer-first marketing initiatives by day.<br><br>Capturing movement through photography and writing for Almost Famous Zine</a> by night.`;
  document.getElementById('mainText').style.fontSize = '3em'; // Make the text larger
});

// Ensure the "Go home" link is styled correctly
const goHomeLink = document.querySelector('.go-home');
goHomeLink.style.marginTop = '20px'; // Add margin for spacing
goHomeLink.style.textDecoration = 'underline'; // Underline the link
goHomeLink.style.display = 'block'; // Make it a block element to detach it

const bubbles = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5');
bubbles.forEach(bubble => {
  bubble.addEventListener('click', (e) => {
    // Removed logging for bubble click
  });
});

// Click event for Marketing
document.getElementById('Marketing').addEventListener('click', () => {
  document.querySelector('.text-top-right').style.display = 'yes'; // Hide top right text
  document.querySelector('.quote').style.display = 'none'; // Hide quote
  document.querySelector('.folder-container').style.display = 'none'; // Hide folder container
  document.getElementById('middleText').style.display = 'block'; // Show middle text
  document.getElementById('mainText').innerHTML = 'COMING SOON';
  document.getElementById('mainText').style.fontSize = '3em'; // Make the text larger
});

// Click event for Photography
document.getElementById('Photography').addEventListener('click', () => {
  document.querySelector('.text-top-right').style.display = 'yes'; // Hide top right text
  document.querySelector('.quote').style.display = 'none'; // Hide quote
  document.querySelector('.folder-container').style.display = 'none'; // Hide folder container
  document.getElementById('middleText').style.display = 'block'; // Show middle text
  document.getElementById('mainText').innerHTML = 'COMING SOON';
  document.getElementById('mainText').style.fontSize = '3em'; // Make the text larger
});