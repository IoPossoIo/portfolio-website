import './style.scss'



document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    const root = document.documentElement;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
        // Update CSS variables used by the reveal-layer mask
        root.style.setProperty('--mx', `${event.clientX}px`);
        root.style.setProperty('--my', `${event.clientY}px`);
    });

    move();
});/* Enhanced window popup function */
function openWindowWithAnimation(win, iconId) {
  if (!win) return;
  if (iconId) {
    const icon = document.getElementById(iconId);
    if (icon) icon.style.display = "none";
  }
  win.style.display = "block";
  win.style.position = "absolute";
  win.style.zIndex = "100";
  
  // Remove any existing animation classes
  win.classList.remove("window-popup", "window-entrance");
  
  // Add popup animation (force reflow to ensure animation plays)
  win.offsetHeight; // Trigger reflow
  win.classList.add("window-popup");
  
  // Always (re)enable dragging on open
  dragElement(win);
}
/* Window popup animation with staggered timing */
function openMusicPlayer() {
  const musicPlayer = document.getElementById("musicPlayer");
  if (musicPlayer) {
    openWindowWithAnimation(musicPlayer, "iconMusic");
  }
}

function openGifViewer() {
  const gifViewer = document.getElementById("gifViewer");
  if (gifViewer) {
    openWindowWithAnimation(gifViewer, "iconGifs");
  }
}

function openAboutWindow() {
  const aboutWindow = document.getElementById("aboutWindow");
  if (aboutWindow) {
    openWindowWithAnimation(aboutWindow, "iconAbout");
  }
}
/* Make popup functions globally available */
(window as any).openMusicPlayer = openMusicPlayer;
(window as any).openGifViewer = openGifViewer;
(window as any).openAboutWindow = openAboutWindow;
/* Enhanced close function to reset animations */
function closeWindow(win, iconId) {
  if (!win) return;
  win.style.display = "none";
  // Remove animation classes so they can animate again when reopened
  win.classList.remove("window-popup", "window-entrance");
  if (iconId) {
    const icon = document.getElementById(iconId);
    if (icon) icon.style.display = "block";
  }
}
// Add event listeners for window popup animations
document.addEventListener("DOMContentLoaded", () => {
  // Function to show window with animation
  function showWindow(windowId, iconId) {
    const window = document.getElementById(windowId);
    const icon = document.getElementById(iconId);
    
    if (window) {
      // Reset animation
      window.style.animation = none;
      void window.offsetWidth; // Trigger reflow
      
      // Apply the appropriate animation class
      window.classList.add(window-popup);
      window.style.display = block;
      
      // Hide the icon when window is open
      if (icon) icon.style.display = none;
    }
  }
  
  // Function to close window
  function closeWindow(windowId, iconId) {
    const window = document.getElementById(windowId);
    const icon = document.getElementById(iconId);
    
    if (window) {
      window.style.display = none;
      // Show the icon when window is closed
      if (icon) icon.style.display = block;
    }
  }
  
  // Music Player
  const musicIcon = document.getElementById(iconMusic);
  const musicPlayer = document.getElementById(musicPlayer);
  const closeMusic = document.getElementById(closeMusic);
  
  if (musicIcon && musicPlayer) {
    musicIcon.addEventListener(click, () => showWindow(musicPlayer, iconMusic));
  }
  if (closeMusic && musicPlayer) {
    closeMusic.addEventListener(click, (e) => {
      e.stopPropagation();
      closeWindow(musicPlayer, iconMusic);
    });
  }
  
  // GIF Viewer
  const gifIcon = document.getElementById(iconGifs);
  const gifViewer = document.getElementById(gifViewer);
  const closeGif = document.getElementById(closeGif);
  
  if (gifIcon && gifViewer) {
    gifIcon.addEventListener(click, () => showWindow(gifViewer, iconGifs));
  }
  if (closeGif && gifViewer) {
    closeGif.addEventListener(click, (e) => {
      e.stopPropagation();
      closeWindow(gifViewer, iconGifs);
    });
  }
  
  // About Window
  const aboutIcon = document.getElementById(iconAbout);
  const aboutWindow = document.getElementById(aboutWindow);
  const closeAbout = document.getElementById(closeAbout);
  
  if (aboutIcon && aboutWindow) {
    aboutIcon.addEventListener(click, () => showWindow(aboutWindow, iconAbout));
  }
  if (closeAbout && aboutWindow) {
    closeAbout.addEventListener(click, (e) => {
      e.stopPropagation();
      closeWindow(aboutWindow, iconAbout);
    });
  }
});
