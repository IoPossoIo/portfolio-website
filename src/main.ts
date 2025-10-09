import './style.scss';

// Global variables for window management

// Global variables for window management
const windows = {
  music: {
    iconId: 'iconMusic',
    windowId: 'musicPlayer',
    closeId: 'closeMusic'
  },
  gif: {
    iconId: 'iconGifs',
    windowId: 'gifViewer',
    closeId: 'closeGif'
  },
  about: {
    iconId: 'iconAbout',
    windowId: 'aboutWindow',
    closeId: 'closeAbout'
  }
};

// Interactive bubble effect
document.addEventListener('DOMContentLoaded', () => {
  // Only run if interactive element exists
  const interBubble = document.querySelector<HTMLDivElement>('.interactive');
  if (!interBubble) return;
  
  const root = document.documentElement;
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble!.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener('mousemove', (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
    root.style.setProperty('--mx', `${event.clientX}px`);
    root.style.setProperty('--my', `${event.clientY}px`);
  });

  move();
  initializeWindows();
});

// Window management functions
function openWindowWithAnimation(win: HTMLElement | null, iconId: string): void {
  if (!win) return;
  
  const icon = document.getElementById(iconId);
  if (icon) icon.style.display = 'none';
  
  win.style.display = 'block';
  win.style.position = 'absolute';
  win.style.zIndex = '100';
  
  // Trigger reflow and add animation
  win.offsetHeight;
  win.classList.add('window-popup');
  
  // Enable dragging
  dragElement(win);
}

function closeWindow(win: HTMLElement | null, iconId: string): void {
  if (!win) return;
  
  win.style.display = 'none';
  win.classList.remove('window-popup', 'window-entrance');
  
  const icon = document.getElementById(iconId);
  if (icon) icon.style.display = 'block';
}

// Initialize all windows and event listeners
function initializeWindows(): void {
  Object.values(windows).forEach(({ iconId, windowId, closeId }) => {
    const icon = document.getElementById(iconId);
    const window = document.getElementById(windowId);
    const closeBtn = document.getElementById(closeId);
    
    if (icon && window) {
      icon.addEventListener('click', () => openWindowWithAnimation(window, iconId));
    }
    
    if (closeBtn && window) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeWindow(window, iconId);
      });
    }
  });
}

// Drag functionality
function dragElement(elmnt: HTMLElement): void {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = elmnt.querySelector('.title-bar');
  
  if (!header) return;
  
  (header as HTMLElement).onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent): void {
    e.preventDefault();
    // Get the mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // Call a function whenever the cursor moves
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent): void {
    e.preventDefault();
    // Calculate the new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // Set the element's new position
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
  }

  function closeDragElement(): void {
    // Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Make functions available globally for HTML onclick handlers
(window as any).openMusicPlayer = () => {
  const { windowId, iconId } = windows.music;
  openWindowWithAnimation(document.getElementById(windowId), iconId);
};

(window as any).openGifViewer = () => {
  const { windowId, iconId } = windows.gif;
  openWindowWithAnimation(document.getElementById(windowId), iconId);
};

(window as any).openAboutWindow = () => {
  const { windowId, iconId } = windows.about;
  openWindowWithAnimation(document.getElementById(windowId), iconId);
};
