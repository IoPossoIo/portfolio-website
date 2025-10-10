// Function to detect if the browser is Safari
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Global XP window helpers
function openCentered(win, iconId) {
  if (!win) return;
  if (iconId) {
    const icon = document.getElementById(iconId);
    if (icon) icon.style.display = 'none';
  }
  win.style.display = 'block';
  win.style.position = 'absolute';
  win.style.zIndex = '100';
  // Force a reflow and add animation class on the next frame to prevent position jump
  win.classList.remove('zoom-in');
  // Always (re)enable dragging on open
  dragElement(win);
  // Defer animation to next frame to ensure layout is settled
  requestAnimationFrame(() => {
    win.classList.add('zoom-in');
    setTimeout(() => win.classList.remove('zoom-in'), 240);
  });
}

function closeWindow(win, iconId) {
  if (!win) return;
  win.style.display = 'none';
  if (iconId) {
    const icon = document.getElementById(iconId);
    if (icon) icon.style.display = 'block';
  }
}

// Disable the interactive element if the browser is Safari
if (isSafari()) {
  const interactiveElement = document.querySelector('.interactive');
  if (interactiveElement) {
    interactiveElement.style.display = 'none'; // Hide the interactive element
  }
}

// Global helpers (not Safari-only)
function rectsOverlap(a, b) {
  return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
}

function triggerBinFeedback() {
  const recycleBin = document.getElementById('recycleBin');
  if (recycleBin) {
    recycleBin.classList.add('bin-bounce');
    setTimeout(() => recycleBin.classList.remove('bin-bounce'), 700);
  }
  const clippy = document.querySelector('.clippy-helper .clippy-bubble');
  if (clippy) {
    clippy.style.display = 'block';
    const body = clippy.querySelector('.bubble-body');
    if (body) {
      const p = body.querySelector('p') || document.createElement('p');
      p.textContent = 'Looks like you’re trying to delete something. Need help?';
      if (!p.parentElement) body.prepend(p);
    }
    setTimeout(() => { clippy.style.display = ''; }, 3500);
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

// Function to hide all content
function hideAllContent() {
    document.getElementById('imageContainer').style.display = 'none';
    document.getElementById('photographyFolders').style.display = 'none';
    document.getElementById('sectionNavigation').style.display = 'none';
    document.getElementById('marketingContainer').style.display = 'none';
    document.getElementById('marketingNavigation').style.display = 'none';
    document.getElementById('sectionTitle').style.display = 'none';
    document.getElementById('middleText').style.display = 'none';
    document.querySelector('.folder-container').style.display = 'none';
    document.querySelector('.quote').style.display = 'none';
    document.getElementById('backToFolders').style.display = 'none'; // Hide back arrow
    
    // Ensure back arrow is hidden when content is cleared
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.style.display = 'none';
    }
    document.querySelector('.photography-folders-home').style.display = 'none';
    document.querySelector('.mobile-back-button').style.display = 'none';
}

// Click event for CONTACT
document.getElementById('contact').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('middleText').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'none';
    document.getElementById('marketingFolders').style.display = 'none';
    
    const email = 'hello@antoniotaurisano.com';
    const mainText = document.getElementById('mainText');
    mainText.textContent = email;
    mainText.style.fontSize = '1.5em'; // Match GO HOME size on desktop
    
    // Adjust for mobile
    if (window.innerWidth <= 480) {
        mainText.style.fontSize = '0.5em';
    }
});

// Click event for ABOUT
document.getElementById('about').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('middleText').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'none';
    document.getElementById('marketingFolders').style.display = 'none';
    
    // Create image with error handling
    const img = new Image();
    img.src = '/windows-update/me.jpeg';
    img.alt = 'Antonio Taurisano';
    img.style.width = '150px';
    img.style.height = '150px';
    img.style.borderRadius = '50%';
    img.style.marginRight = '20px';
    img.style.objectFit = 'cover';
    img.style.border = '3px solid #C65D57';
    
    // Fallback to default image if not found
    img.onerror = function() {
      this.src = '/images/antonio-profile.jpg';
    };
    
    document.getElementById('mainText').innerHTML = `
        <div style="display: flex; align-items: flex-start; margin-bottom: 1em;">
            <div id="profile-image-container" style="flex-shrink: 0;">
                <!-- Image will be inserted here by JavaScript -->
            </div>
            <div>
                <p style="margin-top: 0; margin-bottom: 1em;">Antonio is a marketing <span class="rainbow-professional">professional</span> with a <span style="color: #C65D57;">Data Analytics BSc</span> and a passion for storytelling and creative strategy.</p>
            </div>
        </div>
        <p style="margin-bottom: 1em; margin-left: 170px;">Blending  <span style="color: #C65D57;">creativity </span>with data-driven insights to develop consumer-first marketing initiatives by day.</p>
        <p style="margin-bottom: 1em; margin-left: 170px;">Capturing movement through <span style="color: #C65D57;">photography and writing</span> by night.</p>
    `;
    
    // Insert the image after the container is created
    const container = document.getElementById('profile-image-container');
    if (container) {
      container.appendChild(img);
    }
    
    document.getElementById('mainText').style.fontSize = '2em';
});

// Photography section data
const photographySections = {
    "100 GECS": {
        images: ["/images/100gecs/gecs1.jpeg", "/images/100gecs/gecs2.jpeg", "/images/100gecs/gecs3.jpeg", "/images/100gecs/gecs4.jpeg", 
                "/images/100gecs/gecs5.jpeg", "/images/100gecs/gecs6.jpeg", "/images/100gecs/gecs7.jpeg"],
        text: "<a href='https://almostfamouszine.com/surviving-100-gecs-pit-dazed-confused-and-alive/' style='color:#fff; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>100 GECS LIVE AT KNOCKDOWN CENTER ✨ SHOT FOR ALMOST FAMOUS ZINE</a>"
    },
    "JULIEN BAKER": {
        images: ["/images/julienbaker/baker1.jpeg", "/images/julienbaker/baker2.jpeg", "/images/julienbaker/baker3.jpeg", "/images/julienbaker/baker4.jpeg", "/images/julienbaker/baker5.jpeg", "/images/julienbaker/baker6.jpeg", "/images/julienbaker/baker7.jpeg"],
        text: "<a href='https://almostfamouszine.com/emotional-night-with-julien-baker-at-earth-hall/' style='color:#fff; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>JULIEN BAKER LIVE AT EARTH HALL ✨ SHOT FOR ALMOST FAMOUS ZINE</a>"
    },
    "ST. VINCENT": {
        images: ["/images/stvincent/vincent1.jpeg", "/images/stvincent/vincent2.jpeg", "/images/stvincent/vincent3.jpeg", "/images/stvincent/vincent4.jpeg", "/images/stvincent/vincent5.jpeg", "/images/stvincent/vincent6.jpeg", "/images/stvincent/vincent7.jpeg"],
        text: "<a href='https://almostfamouszine.com/welcome-to-the-all-born-screaming-tour-brought-to-you-by-st-vincent/' style='color:#fff; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>ST. VINCENT LIVE AT FABRIQUE ✨ SHOT FOR ALMOST FAMOUS ZINE</a>"
    },
    "THE PAPER KITES": {
        images: ["/images/paperkites/kites1.jpeg", "/images/paperkites/kites2.jpeg", "/images/paperkites/kites3.jpeg", "/images/paperkites/kites4.jpeg", "/images/paperkites/kites5.jpeg", "/images/paperkites/kites6.jpeg", "/images/paperkites/kites7.jpeg"],
        text: "<a href='https://almostfamouszine.com/a-tale-of-the-paper-kites-dreamy-night-at-the-vega-in-copenhagen/' style='color:#fff; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>THE PAPER KITES LIVE AT VEGA ✨ SHOT FOR ALMOST FAMOUS ZINE</a>"
    },
    "FENNE LILY": {
        images: ["/images/fennelily/lily1.jpeg", "/images/fennelily/lily2.jpeg", "/images/fennelily/lily3.jpeg", "/images/fennelily/lily4.jpeg", "/images/fennelily/lily5.jpeg", "/images/fennelily/lily6.jpeg", "/images/fennelily/lily7.jpeg"],
        text: "<a href='https://almostfamouszine.com/on-hold-never-felt-this-good-fenne-lilys-opening-night-in-brooklyn/' style='color:#fff; text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>FENNE LILY LIVE AT THE BROADWAY ✨ SHOT FOR ALMOST FAMOUS ZINE</a>"
    },
    "YOUBET": {
        images: ["/images/youbet/youbet1.jpeg", "/images/youbet/youbet2.jpeg", "/images/youbet/youbet3.jpeg", "/images/youbet/youbet4.jpeg", "/images/youbet/youbet5.jpeg"],
        text: "<span style='color:#fff;'>YOUBET LIVE AT UNION POOL</span>"
    }
};

// Marketing section data structure (refactored to define each item once)
const marketingFolders = {
    "SOCIAL MEDIA CONTENT": {
        items: [
            { label: "Hunters On-Chain 18 Seconds Sold Out!", link: "https://x.com/BoomLandGames/status/1620478702407778304", icon: "./images/text.png" },
            { label: "Hunters On-Chain DappRadar Article", link: "https://dappradar.com/blog/hunters-on-chain-game-guide", icon: "./images/text.png" },
            { label: "Planet Mojo New Game Announcement", link: "https://x.com/WeArePlanetMojo/status/1776365595040047194", icon: "./images/text.png" },
            { label: "Get Plucked Medium Article", link: "https://medium.com/@collectVOX/hatch-eggs-and-get-feathers-856cf13a26b2", icon: "./images/text.png" },
            { label: "VOX: What is it?", link: "https://www.youtube.com/watch?v=ojEZtZars7Q", icon: "./images/video.png" }
        ],
        headerText: "I swear i wrote copy and storyboarded this stuff without chatgpt"
    },
    "IP PARTNERSHIPS": {
        items: [
            { label: "VOX & DreamWorks Trolls", link: "https://www.youtube.com/watch?v=LJhwu2xsqaA", icon: "./images/video.png" },
            { label: "VOX & AMC's The Walking Dead ", link: "https://www.youtube.com/watch?v=mhnusMyUWm0", icon: "./images/video.png" },
            { label: "Planet Mojo & WowWee Plushies", link: "https://decrypt.co/225883/mystic-moose-and-wowwee-join-forces-to-create-planet-mojo-toys-connected-to-blockchain", icon: "./images/text.png" },
            { label: "Planet Mojo & Talon Esports", link: "https://esportsinsider.com/2024/04/talon-esports-web3-planet-mojo", icon: "./images/text.png" }
        ],
        headerText: "a lot of cool partnerships with cool people!"
    },
    "LIVESTREAMS": {
        items: [
            { label: "Get Plucked Mobile Game Release", link: "https://www.youtube.com/watch?v=0bvVVXM1OqA", icon: "./images/video.png" },
            { label: "Interview with Neo Tokyo", link: "https://x.com/NeoTokyoCode/status/1834373045311676533", icon: "./images/video.png" },
            { label: "Interview with Decentraland", link: "https://www.linkedin.com/events/7208541648673210369/comments/", icon: "./images/video.png" }
        ],
        headerText: "Bonus: in all these videos you can see my pretty face!!"
    },
    "METRICS": {
        items: [
            { label: "Planet Mojo Twitter Growth YoY", link: "/Planet Mojo Twitter - YoY Impact.png", icon: "./images/pdf.png" },
            { label: "Boombit F2P Campaign Performance", link: "/a-brief-campaign-overview.pdf", icon: "./images/pdf.png" }
        ],
        headerText: "maybe the real impact was the friends we made along the way?"
    },
    "DATA ANALYTICS": {
        items: [
            { label: "United Nations PowerBI Dashboard", link: "/UN_MONUSCO.pdf", icon: "./images/pdf.png" },
            { label: "A self-esteem journey through gender identities", link: "https://rpubs.com/iopossoio/psychometrics", icon: "./images/pdf.png" },
            { label: "360X Art Pitch Deck", link: "/360X Art Pitch Deck.pdf", icon: "./images/pdf.png" }
        ],
        headerText: "yeah I happen to have a degree in this stuff"
    }
};

// Initialize photography section
function initPhotography() {
    // Set up click handler for Photography folder
    const photoLink = document.getElementById('Photography');
    if (photoLink) {
        photoLink.addEventListener('click', (e) => {
            if (e && e.preventDefault) e.preventDefault();
            showFolderGrid();
            document.querySelector('.text-top-right').style.display = 'block';
        });
    }

    // Initialize folder click handlers
    document.querySelectorAll('#photographyFolders .folder').forEach(folder => {
        folder.addEventListener('click', (e) => {
            e.preventDefault();
            const section = folder.getAttribute('data-section');
            if (section) {
                displayPhotographySection(section);
            }
        });
    });

    // Handle photography navigation clicks
    document.querySelectorAll('#sectionNavigation .nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            if (section && photographySections[section]) {
                displayPhotographySection(section);
            }
        });
    });
}

// Call initialization on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initPhotography();
});

// Click event for Marketing
document.getElementById('Marketing').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('marketingFolders').style.display = 'grid';
    document.getElementById('marketingNavigation').style.display = 'flex';
    document.getElementById('goBackMarketing').style.display = 'none';
    document.getElementById('backToFolders').style.display = 'none'; // Hide back arrow in grid view
});

// Handle photography folder clicks
document.querySelectorAll('#photographyFolders .folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const section = folder.dataset.section;
        if (section) {
            displayPhotographySection(section);
        }
    });
});

// Handle photography navigation clicks
document.querySelectorAll('#sectionNavigation .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        if (section) {
            displayPhotographySection(section);
        }
    });
});

let currentIndex = 0; // Track the current image index

function displayPhotographySection(section) {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    
    // Show the image container
    const imageContainer = document.getElementById('imageContainer');
    if (imageContainer) {
        imageContainer.style.display = 'flex';
    }
    
    // Show the section title
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
        sectionTitle.style.display = 'block';
    }
    
    // Set up navigation
    const sectionNav = document.getElementById('sectionNavigation');
    if (sectionNav) {
        sectionNav.style.display = 'flex';
        sectionNav.style.justifyContent = 'center';
        sectionNav.style.margin = '20px 0';
        
        // Show GO BACK button
        const goBack = sectionNav.querySelector('#goBack');
        if (goBack) {
            goBack.style.display = 'inline-block';
            goBack.onclick = () => {
                showFolderGrid();
            };
        }
    }

    const sectionData = photographySections[section];
    if (sectionData) {
        currentIndex = 0; // Reset index
        updateImage(sectionData.images[currentIndex]); // Show the first image
        document.getElementById('sectionTitle').innerHTML = sectionData.text; // Display the text
        document.getElementById('sectionTitle').style.display = 'block'; // Ensure the title is visible

        // Show and style the navigation
        const sectionNav = document.getElementById('sectionNavigation');
        const navLinks = sectionNav.querySelector('.nav-links');
        navLinks.style.flexDirection = 'row';
        navLinks.style.gap = '20px';
        sectionNav.style.display = 'flex';

        // Ensure GO BACK is visible
        document.getElementById('goBack').style.display = 'inline-block';

        // Add click handler for Go Back
        document.getElementById('goBack').onclick = () => {
            hideAllContent();
            const photographyFolders = document.getElementById('photographyFolders');
            photographyFolders.style.display = 'grid'; // Changed from 'block' to 'grid'
            photographyFolders.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Restore grid layout
            document.querySelector('.text-top-right').style.display = 'block';
            
            // Show the navigation with just GO HOME
            const sectionNav = document.getElementById('sectionNavigation');
            sectionNav.style.display = 'flex';
            document.getElementById('goBack').style.display = 'none'; // Hide GO BACK
        };

        // Add click handlers for navigation arrows
        const leftArrow = document.querySelector('.nav-arrow.left');
        const rightArrow = document.querySelector('.nav-arrow.right');

        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + sectionData.images.length) % sectionData.images.length;
            updateImage(sectionData.images[currentIndex]);
        });

        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % sectionData.images.length;
            updateImage(sectionData.images[currentIndex]);
        });
    }

  // Get window references
  const musicPlayer = document.getElementById('musicPlayer');
  const gifViewer = document.getElementById('gifViewer');
  const aboutWindow = document.getElementById('aboutWindow');

  // (icon bindings and helpers handled globally)

  // Enhanced About window with typewriter animation and expansion
  const typewriterText = document.getElementById('typewriterText');
  const aboutWindowEl = document.getElementById('aboutWindow');
  const aboutContent = document.getElementById('aboutContent');
  const typewriterContainer = document.getElementById('typewriterContainer');
  
  // About window: keep small; open a separate details window on click (not drag)
  if (aboutWindowEl) {
    aboutWindowEl.classList.remove('expanded');
    aboutWindowEl.classList.add('compact');
    setTimeout(() => dragElement(aboutWindowEl), 100);

    let startX = 0, startY = 0, moved = false, pointerId = null;
    const moveThreshold = 6;

    const onDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return; // left click only
      pointerId = e.pointerId || null;
      startX = e.clientX; startY = e.clientY; moved = false;
      aboutWindowEl.setPointerCapture?.(pointerId);
    };
    const onMove = (e) => {
      if (pointerId == null) return;
      if (Math.abs(e.clientX - startX) > moveThreshold || Math.abs(e.clientY - startY) > moveThreshold) {
        moved = true;
      }
    };
    const onUp = (e) => {
      if (pointerId == null) return;
      aboutWindowEl.releasePointerCapture?.(pointerId);
      pointerId = null;
      if (!moved) {
        openAboutDetailsWindow();
      }
    };
    aboutWindowEl.addEventListener('pointerdown', onDown);
    aboutWindowEl.addEventListener('pointermove', onMove);
    aboutWindowEl.addEventListener('pointerup', onUp);
  }

  function openAboutDetailsWindow() {
    // prevent duplicates
    const existing = document.getElementById('aboutDetailsWindow');
    if (existing) { existing.style.display = 'block'; existing.style.zIndex = '3000'; return; }

    const win = document.createElement('div');
    win.id = 'aboutDetailsWindow';
    win.className = 'window-xp zoom-in';
    win.style.position = 'absolute';
    win.style.width = '520px';
    win.style.left = '20vw';
    win.style.top = '18vh';
    win.innerHTML = `
      <div class="title-bar">
        <div class="title-bar-text">About & Contact</div>
        <div class="title-bar-controls"><button aria-label="Close"></button></div>
      </div>
      <div class="window-body" style="max-height:60vh; overflow:auto;">
        <div style="text-align: center; margin-bottom: 20px; padding: 20px;">
          <img src="/me.png" alt="Antonio Taurisano" style="width: 200px; height: auto; border-radius: 12px; border: 3px solid #D4D0C8; box-shadow: 0 0 20px rgba(0,0,0,0.3); display: block; background: white;" onerror="console.error('Failed to load image: /me.png'); this.style.display='none'; this.parentElement.innerHTML='<div style=\'color: red; font-size: 24px; padding: 20px; background: #FFE5E5; border: 2px solid red; border-radius: 8px;\'>Image failed to load</div>';" onload="console.log('Image loaded successfully: /me.png'); this.style.opacity='1';">
        </div>
      </div>`;
    document.body.appendChild(win);
    const body = win.querySelector('.window-body');
    if (body) {
      if (aboutContent) {
        const clone = aboutContent.cloneNode(true);
        clone.style.display = 'block';
        body.appendChild(clone);
      } else {
        // Only add fallback text if there's no existing content
        if (!body.querySelector('img')) {
          body.innerHTML += '<p>About content coming soon.</p>';
        }
      }
      // Append contact quick links if present in top-right markup was removed/hidden
      const contact = document.getElementById('contact');
      if (contact) {
        const contactClone = contact.cloneNode(true);
        contactClone.style.display = 'block';
        contactClone.style.marginTop = '8px';
        body.appendChild(contactClone);
      }
    }
    win.querySelector('.title-bar-controls button').addEventListener('click', () => win.remove());
    dragElement(win);
    setTimeout(() => win.classList.remove('zoom-in'), 260);
  }

    // Show mobile back button
    if (window.innerWidth <= 768) {
        document.querySelector('.mobile-back-button').style.display = 'block';
    }
}

function updateImage(imageSrc) {
    const currentImage = document.getElementById('currentImage');
    currentImage.src = imageSrc; // Update the image source
}

function displayMarketingSection(section) {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('marketingNavigation').style.display = 'flex';
    document.getElementById('goBackMarketing').style.display = 'block'; // Show GO BACK
    document.getElementById('slideViewer').style.display = 'flex';
    document.querySelector('.slide-viewer').dataset.currentSection = section;
    
    const sectionData = marketingSections[section];
    if (sectionData && sectionData.slides) {
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);
    }
}

const bubbles = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5');
bubbles.forEach(bubble => {
  bubble.addEventListener('click', (e) => {
    // Removed logging for bubble click
  });
});

// Handle image clicks
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        // Here you would load the next set of images
        // For now, just update the page indicator
        document.querySelector('.page-indicator').textContent = '2/4';
    });
});

// Handle back button
document.getElementById('backButton').addEventListener('click', () => {
    // Go back to previous set of images or main photography page
    document.querySelector('.page-indicator').textContent = '1/4';
});

// Handle marketing navigation clicks
document.querySelectorAll('#marketingNavigation .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const section = item.dataset.section;
        if (section && marketingSections[section]) {
            displayMarketingSection(section);
        }
    });
});

// Back arrow click handler
document.getElementById('backToFolders').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'grid';
    document.getElementById('sectionNavigation').style.display = 'flex';
});

// Add modal close functionality
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
});

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('imageModal')) {
        document.getElementById('imageModal').style.display = 'none';
    }
});

// Add keyboard escape functionality
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('imageModal').style.display = 'none';
    }
});

// Go back click handlers
document.getElementById('goBack').addEventListener('click', () => {
    showFolderGrid();
});

document.getElementById('goBackMarketing').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('marketingFolders').style.display = 'grid';
    document.getElementById('marketingNavigation').style.display = 'flex';
});

function showFolderGrid() {
    hideAllContent();
    
    // Show photography folders
    const folders = document.getElementById('photographyFolders');
    if (folders) {
        folders.style.display = 'grid';
        folders.style.gridTemplateColumns = 'repeat(3, 1fr)';
        folders.style.gap = '20px';
        folders.style.padding = '20px';
    }
    
    document.body.classList.remove('photography-bg');
    document.querySelector('.text-top-right').style.display = 'block';
    
    // Show the navigation with GO BACK and GO HOME
    const sectionNav = document.getElementById('sectionNavigation');
    if (sectionNav) {
        sectionNav.style.display = 'flex';
        
        // Hide GO BACK button in grid view
        const goBack = sectionNav.querySelector('#goBack');
        if (goBack) {
            goBack.style.display = 'none';
        }
    }
}

// Add this to your existing click handler setup
document.querySelectorAll('.marketing-folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const folderName = folder.getAttribute('data-folder');
        handleMarketingClick(folderName);
    });
});

// Handle marketing folder clicks
document.querySelectorAll('#marketingFolders .folder').forEach(folder => {
    folder.addEventListener('click', () => {
        const section = folder.getAttribute('data-section');
        const folderData = marketingFolders[section];
        
        if (folderData) {
            document.getElementById('marketingFolders').style.display = 'none';
            // Pass the unified items list instead of separate arrays/maps
            displayMarketingSubfolders(section, folderData.items);
        }
    });
});

function displayMarketingSubfolders(parentSection, items) {
    const marketingContainer = document.getElementById('marketingContainer');
    marketingContainer.innerHTML = '';
    marketingContainer.style.display = 'block';
    
    // To re-enable the marketing header text and sparkles animations, change `false &&` to just the condition below
    // e.g., `if (marketingFolders[parentSection].headerText) {`
    if (false && marketingFolders[parentSection].headerText) {
        const headerText = document.createElement('div');
        headerText.className = 'marketing-header-text';
        headerText.style.display = window.innerHeight > 600 ? 'block' : 'none';
        headerText.style.fontFamily = 'Comic Sans MS, cursive';
        headerText.style.textAlign = 'center';
        headerText.style.position = 'absolute';
        headerText.style.top = '5%';
        headerText.style.left = '50%';
        headerText.style.transform = 'translateX(-50%)';
        headerText.style.fontSize = '28px';
        headerText.style.backgroundColor = 'transparent';
        headerText.style.padding = '15px';
        headerText.style.borderRadius = '10px';
        headerText.style.zIndex = '100';
        headerText.style.width = '80%';
        headerText.style.lineHeight = '1.4';
        headerText.style.animation = 'wobble 5s infinite';
        
        // Format text with line breaks and separate emoji line
        let displayText = marketingFolders[parentSection].headerText;
        if (parentSection === "LIVESTREAMS") {
            displayText = "Bonus:\nin all these videos\nyou can see my pretty face!";
        } else if (parentSection === "METRICS") {
            displayText = "maybe the real impact\nwas the friends\nwe made along the way?";
        } else if (parentSection === "DATA ANALYTICS") {
            displayText = "yeah I happen to have\na degree in this stuff";
        } else if (parentSection === "SOCIAL MEDIA CONTENT") {
            displayText = "I swear i wrote copy and\nstoryboarded this stuff\nwithout chatgpt";
        } else if (parentSection === "IP PARTNERSHIPS") {
            displayText = "a lot of cool partnerships\nwith cool people!";
        }
        
        // Simplified text formatting without per-letter spans
        const formattedText = displayText.split('\n').join('<br>');
            
        headerText.innerHTML = `${formattedText}<br><span class="sparkles">✨ ✨ ✨</span>`;
        
        marketingContainer.appendChild(headerText);

        // Update CSS for animations - only sparkles and overall wobble
        const style = document.createElement('style');
        style.textContent = `
            @keyframes wobble {
                0%, 100% { transform: translateX(-50%) rotate(-1deg); }
                50% { transform: translateX(-50%) rotate(1deg); }
            }
            
            @keyframes sparkle {
                0% { transform: scale(1) rotate(0deg); }
                25% { transform: scale(1.2) rotate(90deg); }
                50% { transform: scale(1) rotate(180deg); }
                75% { transform: scale(1.2) rotate(270deg); }
                100% { transform: scale(1) rotate(360deg); }
            }
            
            .sparkles {
                display: block;
                margin-top: 10px;
            }
            
            .sparkles span {
                display: inline-block;
                margin: 0 10px;
                animation: sparkle 2s infinite;
            }
        `;
        document.head.appendChild(style);
        
        // Add individual animation delays to sparkles
        const sparkles = headerText.querySelector('.sparkles');
        sparkles.innerHTML = Array(3).fill('✨')
            .map((sparkle, i) => `<span style="animation-delay: ${i * 0.3}s">${sparkle}</span>`)
            .join(' ');
    }

    const folderGrid = document.createElement('div');
    folderGrid.className = 'folder-grid';
    folderGrid.style.display = 'grid';
    folderGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';

    items.forEach(item => {
        const folder = document.createElement('div');
        folder.className = 'folder';
        
        // Use the item's icon if specified, otherwise use Windows XP-style transparent PNG folder icon
        const iconPath = item.icon || "/windows-update/folder.png";
        
        folder.innerHTML = `
            <img src="${iconPath}" alt="${item.label} Icon" class="folder-image" />
            <div class="folder-text">${item.label}</div>
        `;
        
        folder.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank');
            }
        });

        folderGrid.appendChild(folder);
    });

    marketingContainer.appendChild(folderGrid);

    // Show navigation with GO BACK and GO HOME
    const marketingNav = document.getElementById('marketingNavigation');
    marketingNav.style.display = 'flex';
    document.getElementById('goBackMarketing').style.display = 'inline-block';
    
    // Update GO BACK functionality
    document.getElementById('goBackMarketing').onclick = () => {
        hideAllContent();
        document.getElementById('marketingFolders').style.display = 'grid';
        document.getElementById('marketingFolders').style.gridTemplateColumns = 'repeat(3, 1fr)';
        document.querySelector('.text-top-right').style.display = 'block';
        marketingContainer.style.display = 'none';
        
        // Ensure marketing navigation stays visible with both buttons
        marketingNav.style.display = 'flex';
        document.getElementById('goBackMarketing').style.display = 'none';
    };
}

// Ensure the about section is updated correctly
function displayAboutSection() {
    const aboutText = "Your dynamic about text here...<br>Strategy<br>Day<br>"; // Add line breaks
    document.getElementById('aboutContent').innerHTML = aboutText; // Update the about content
    document.getElementById('aboutContainer').style.display = 'block'; // Ensure it's visible

    // Hide marketing and photography folders
    document.getElementById('photographyFolders').style.display = 'none'; // Hide photography folders
    document.querySelector('.text-top-right').style.display = 'none'; // Hide marketing links
}

function adjustFontSize() {
    const aboutContent = document.getElementById('aboutContent');
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // Calculate font size based on viewport dimensions
    const baseFontSize = Math.min(viewportWidth / 20, viewportHeight / 15); // Adjust the divisor for desired size
    aboutContent.style.fontSize = `${baseFontSize}px`; // Set the calculated font size
}

// Handle window resize
function handleResize() {
    adjustFontSize();
    // Update header text visibility based on window height and width
    const headerText = document.querySelector('.marketing-header-text');
    if (headerText) {
        headerText.style.display = (window.innerHeight > 600 && window.innerWidth > 768) ? 'block' : 'none';
    }
}

// Call the function on load and on resize
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

// Add click handler for mobile back button
document.querySelector('.mobile-back-button').addEventListener('click', () => {
    hideAllContent();
    document.getElementById('photographyFolders').style.display = 'grid';
    document.querySelector('.text-top-right').style.display = 'block';
    if (window.innerWidth <= 768) {
        document.querySelector('.photography-folders-home').style.display = 'block';
    }
});

// -----------------------------
// Simple client-side routing
// -----------------------------
const routes = new Set(['/', '/photography', '/boombit', '/gala-games', '/mystic-moose', '/test']);

function renderRoute(pathname) {
  // Normalize
  if (!routes.has(pathname)) pathname = '/';

  // Always show background container
  const gradientBg = document.querySelector('.gradient-bg');
  if (gradientBg) gradientBg.style.display = 'flex';

  // Route class toggling for CSS-driven differences
  document.body.classList.remove('route-home', 'route-nonhome');

  // Reset everything
  hideAllContent();

  // On all routes, keep top links visible
  const topRight = document.querySelector('.text-top-right');
  if (topRight) topRight.style.display = 'block';

  // Toggle reveal-layer per route (only on main page)
  const reveal = document.querySelector('.reveal-layer');
  const gradients = document.querySelector('.gradients-container');
  const wallpaper = document.querySelector('.wallpaper-layer');
  const blobEls = document.querySelectorAll('.g1, .g2, .g3, .g4, .g5, .interactive');
  switch (pathname) {
    case '/photography': {
      document.body.classList.add('route-nonhome');
      if (reveal) reveal.style.display = 'none';
      // Use wallpaper + starfield like home, hide gradients/blobs
      if (gradients) { 
        gradients.style.display = 'none';
        gradients.style.visibility = 'hidden';
        gradients.style.opacity = '0';
      }
      blobEls.forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        el.style.animationPlayState = 'paused';
      });
      if (wallpaper) wallpaper.style.display = 'block';
      const starFieldP = document.getElementById('starField');
      if (starFieldP) starFieldP.style.display = 'block';
      // Hide XP windows and star field when not on home
      const _mp1 = document.getElementById('musicPlayer');
      const _gv1 = document.getElementById('gifViewer');
      const _aw1 = document.getElementById('aboutWindow');
      const _sf1 = document.getElementById('starField');
      if (_mp1) _mp1.style.display = 'none';
      if (_gv1) _gv1.style.display = 'none';
      if (_aw1) _aw1.style.display = 'none';
      if (_sf1) _sf1.style.display = 'none';
      // Show the folders grid like after clicking photography
      const grid = document.getElementById('photographyFolders');
      if (grid) grid.style.display = 'grid';
      if (window.innerWidth <= 768) {
        const home = document.querySelector('.photography-folders-home');
        if (home) home.style.display = 'block';
      }
      break;
    }
    case '/boombit':
    case '/gala-games':
    case '/mystic-moose':
    case '/test': {
      document.body.classList.add('route-nonhome');
      if (reveal) reveal.style.display = 'none';
      // Use wallpaper + starfield like home
      if (gradients) { 
        gradients.style.display = 'none';
        gradients.style.visibility = 'hidden';
        gradients.style.opacity = '0';
      }
      blobEls.forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        el.style.animationPlayState = 'paused';
      });
      if (wallpaper) wallpaper.style.display = 'block';
      const starFieldM = document.getElementById('starField');
      if (starFieldM) starFieldM.style.display = 'block';
      // Blank: just background animations visible
      // Nothing else to show
      // Hide XP windows and star field when not on home
      const _mp2 = document.getElementById('musicPlayer');
      const _gv2 = document.getElementById('gifViewer');
      const _aw2 = document.getElementById('aboutWindow');
      const _sf2 = document.getElementById('starField');
      if (_mp2) _mp2.style.display = 'none';
      if (_gv2) _gv2.style.display = 'none';
      if (_aw2) _aw2.style.display = 'none';
      if (_sf2) _sf2.style.display = 'none';
      break;
    }
    case '/':
    default: {
      document.body.classList.add('route-home');
      if (reveal) reveal.style.display = 'none';
      // Disable all background effects on home page for better performance
      if (gradients) { 
        gradients.style.display = 'none'; 
        gradients.style.visibility = 'hidden'; 
        gradients.style.opacity = '0'; 
      }
      blobEls.forEach(el => {
        el.style.display = 'none';
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        el.style.animationPlayState = 'paused';
      });
      if (wallpaper) wallpaper.style.display = 'block';
      // Main page: show folder-container
      const folders = document.querySelector('.folder-container');
      if (folders) folders.style.display = 'flex';
      const quote = document.querySelector('.quote');
      if (quote) quote.style.display = 'block';
      
      // Show star field on home page
      const starField = document.getElementById('starField');
      if (starField) starField.style.display = 'block';

      // Initialize windows but keep them hidden by default
      try {
        const mp = document.getElementById('musicPlayer');
        const gv = document.getElementById('gifViewer');
        const aw = document.getElementById('aboutWindow');
        const iconMusic = document.getElementById('iconMusic');
        const iconGifs = document.getElementById('iconGifs');
        const iconAbout = document.getElementById('iconAbout');
        
        // Initialize music player but keep it hidden
        if (mp) {
          mp.style.display = 'none'; // Keep it hidden by default
          mp.style.position = 'absolute';
          mp.style.zIndex = '2000';
          // Initialize draggable but don't show the window
          setTimeout(() => dragElement(mp), 50);
          // Keep the music icon visible
          if (iconMusic) iconMusic.style.display = 'block';
        }
        if (gv) {
          // Keep gif viewer closed by default - only open when clicked
          gv.style.display = 'none';
          gv.style.position = 'absolute';
          gv.style.zIndex = '2000';
          gv.style.visibility = 'visible';
          gv.style.opacity = '1';
          // Ensure draggable after a longer delay for smoother initialization
          setTimeout(() => dragElement(gv), 100);
          // Show icon since window is closed
          if (iconGifs) iconGifs.style.display = 'block';
        }
        if (aw) {
          aw.style.display = 'block';
          aw.style.position = 'absolute';
          aw.style.zIndex = '2000';
          aw.style.visibility = 'visible';
          aw.style.opacity = '1';
          // Start in expanded mode with content visible by default
          aw.classList.add('expanded');
          aw.classList.remove('compact');
          const _aboutContent = document.getElementById('aboutContent');
          if (_aboutContent) {
            _aboutContent.style.display = 'block'; // Show content by default
            // Hide typewriter container since we're showing full content
            const typewriterContainer = document.getElementById('typewriterContainer');
            if (typewriterContainer) {
              typewriterContainer.style.display = 'none';
            }
            const clickHint = document.querySelector('.click-hint');
            if (clickHint) {
              clickHint.style.display = 'none';
            }
          }
          // Ensure draggable after a longer delay for smoother initialization
          setTimeout(() => dragElement(aw), 100);
          // Show the About window but keep the icon hidden
          if (iconAbout) iconAbout.style.display = 'none';
        }
      } catch {}
      break;
    }
  }
}

function navigateTo(pathname) {
  if (location.pathname !== pathname) {
    history.pushState({}, '', pathname);
  }
  renderRoute(pathname);
}

// Handle back/forward
window.addEventListener('popstate', () => {
  renderRoute(location.pathname);
});

// Interactive Star Field - only in sky area (top 40% of screen) and main page only
function initStarField() {
  const starField = document.getElementById('starField');
  if (!starField) return;
  
  const stars = [];
  const isMobile = window.innerWidth <= 768;
  const numStars = isMobile ? 25 : 50; // Fewer stars on mobile
  let mouseX = 0;
  let mouseY = 0;
  
  // Create stars only in top 40% of screen (sky area)
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size classes
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    star.classList.add(randomSize);
    
    // Random position - only in top 40% of screen (sky area)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.4); // Only top 40%
    
    star.style.left = '0';
    star.style.top = '0';
    star.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    
    // Random animation delay for twinkling
    star.style.animationDelay = Math.random() * 3 + 's';
    
    starField.appendChild(star);
    stars.push({
      element: star,
      originalX: x,
      originalY: y,
      currentX: x,
      currentY: y
    });
  }
  
  // Mouse tracking with optimized animation
  let animationFrame = null;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Cancel previous animation frame to prevent stacking
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    
    // Use requestAnimationFrame for smooth animations
    animationFrame = requestAnimationFrame(() => {
      stars.forEach(star => {
        const dx = mouseX - star.currentX;
        const dy = mouseY - star.currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Cursor interaction radius (smaller on mobile)
        const interactionRadius = isMobile ? 60 : 100;
        
        if (distance < interactionRadius) {
          // Star reacts to cursor
          star.element.classList.add('cursor-near');
          
          // Subtle repulsion effect
          const force = (interactionRadius - distance) / interactionRadius;
          const repelX = (star.currentX - mouseX) * force * 0.3;
          const repelY = (star.currentY - mouseY) * force * 0.3;
          
          star.currentX = star.originalX + repelX;
          star.currentY = star.originalY + repelY;
          
          star.element.style.transform = `translate3d(${star.currentX}px, ${star.currentY}px, 0)`;
        } else {
          // Star returns to original position
          star.element.classList.remove('cursor-near');
          
          // Smooth return animation
          star.currentX += (star.originalX - star.currentX) * 0.1;
          star.currentY += (star.originalY - star.currentY) * 0.1;
          
          star.element.style.transform = `translate3d(${star.currentX}px, ${star.currentY}px, 0)`;
        }
      });
    });
  });
  
  // Occasional shooting star
  setInterval(() => {
    if (Math.random() < 0.1) { // 10% chance every interval
      createShootingStar();
    }
  }, 5000);
  
  function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'star shooting large';
    
    // Start from random edge
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 200; // Upper portion of screen
    
    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';
    
    starField.appendChild(shootingStar);
    
    // Remove after animation
    setTimeout(() => {
      if (shootingStar.parentNode) {
        shootingStar.parentNode.removeChild(shootingStar);
      }
    }, 2000);
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    stars.forEach(star => {
      // Reposition stars proportionally
      const xRatio = star.originalX / window.innerWidth;
      const yRatio = star.originalY / window.innerHeight;
      
      star.originalX = xRatio * window.innerWidth;
      star.originalY = yRatio * window.innerHeight;
      star.currentX = star.originalX;
      star.currentY = star.originalY;
      
      star.element.style.transform = `translate3d(${star.originalX}px, ${star.originalY}px, 0)`;
    });
  });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  // First, disable animations
  document.body.classList.add('no-animations');
  
  renderRoute(location.pathname);
  initStarField();
  initClippyDialogue();
  
  // Initialize windows
  const aboutWindow = document.getElementById('aboutWindow');
  
  if (aboutWindow) {
    aboutWindow.classList.remove('zoom-in');
    aboutWindow.classList.add('zoom-in'); // Add startup animation
    // CSS handles all positioning and visibility now
  }
  
  // Re-enable animations after a short delay
  setTimeout(() => {
    document.body.classList.remove('no-animations');
  }, 100);

  // Initialize brainrot mode
  const brainrotToggle = document.getElementById('brainrotMode');
  const brainrotVideos = document.getElementById('brainrotVideos');
  // Brainrot mode videos
  const brainrotSources = [
    '/brainrot-1.mp4',
    '/brainrot-2.mp4',
    '/brainrot-3.mp4',
    '/brainrot-5.mp4' 
  ];

  // Store timeouts for cleanup
  let brainrotTimeouts = [];
  
  function renderBrainrot(on) {
    // Clear any pending timeouts first to prevent new windows from appearing
    brainrotTimeouts.forEach(clearTimeout);
    brainrotTimeouts = [];
    
    // Remove any existing brainrot windows and videos
    document.querySelectorAll('.brainrot-win').forEach(w => {
      // Pause any videos before removing
      const video = w.querySelector('video');
      if (video) {
        video.pause();
        video.src = ''; // Stop loading
      }
      w.remove();
    });
    
    if (on) {
      document.body.classList.add('brainrot-on');
      // Spawn XP windows sequentially like pop-up ads
      const slots = [
        { left: '12vw', top: '6vh' },  // top-left (clear of Marketing/Photography)
        { left: '75vw', top: '5vh' },  // top-right (moved further right)
        { left: '70vw', top: '52vh' }, // bottom-right (nudged up)
        { left: '13vw', top: '51vh' }  // bottom-left (nudged up)
      ];
      
      brainrotSources.slice(0,4).forEach((src, idx) => {
        // Create a timeout for each video
        const timeoutId = setTimeout(() => {
          // Double check brainrot is still on before creating window
          if (!document.body.classList.contains('brainrot-on')) return;
          
          const win = document.createElement('div');
          win.className = 'window-xp brainrot-win zoom-in';
          win.style.width = '220px';
          win.style.height = '400px';
          win.style.position = 'absolute';
          win.style.left = (slots[idx] ? slots[idx].left : '10vw');
          win.style.top = (slots[idx] ? slots[idx].top : '10vh');
          win.style.zIndex = String(3000 + idx);
          win.style.transition = 'none';
          win.style.willChange = 'left, top';
          win.style.transform = 'none';
          win.innerHTML = `
            <div class="title-bar">
              <div class="title-bar-text">Brainrot ${idx + 1}.mp4</div>
              <div class="title-bar-controls"><button aria-label="Close"></button></div>
            </div>
            <div class="window-body" style="padding:0;background:#000;display:flex;align-items:center;justify-content:center;height:calc(100% - 22px);">
              <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:contain;background:#000;">
                <source src="${src}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>`;
          
          document.body.appendChild(win);
          
          // Close button handler
          const closeBtn = win.querySelector('.title-bar-controls button');
          if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              const video = win.querySelector('video');
              if (video) {
                video.pause();
                video.src = '';
              }
              win.remove();
            });
          }
          
          // Remove zoom-in class after animation
          setTimeout(() => win.classList.remove('zoom-in'), 260);
          
          // Set up drag functionality
          const vidEl = win.querySelector('video');
          if (vidEl) vidEl.style.pointerEvents = 'none';
          
          const title = win.querySelector('.title-bar');
          if (title) {
            title.style.userSelect = 'none';
            title.style.pointerEvents = 'auto';
            title.style.cursor = 'move';
            const body = win.querySelector('.window-body');
            title.addEventListener('pointerdown', () => {
              if (body) body.style.pointerEvents = 'none';
            });
            title.addEventListener('pointerup', () => {
              if (body) body.style.pointerEvents = '';
            });
          }
          
          dragElement(win);
          
        }, idx * 220); // staggered pop-ups
        
        brainrotTimeouts.push(timeoutId);
      });
    } else {
      // When turning off, ensure all videos are removed
      document.body.classList.remove('brainrot-on');
      
      // Force remove any remaining brainrot windows
      document.querySelectorAll('.brainrot-win').forEach(win => {
        const video = win.querySelector('video');
        if (video) {
          video.pause();
          video.src = '';
        }
        win.remove();
      });
    }
  }

  // Click/keyboard toggle
  if (brainrotToggle) {
    const updateVisual = (on) => {
      brainrotToggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      brainrotToggle.classList.toggle('on', !!on);
      const txt = brainrotToggle.querySelector('.txt');
      if (txt) txt.textContent = on ? 'Brainrot Mode: On' : 'Brainrot Mode: Off';
    };
    const toggle = () => {
      const on = brainrotToggle.getAttribute('aria-pressed') !== 'true';
      updateVisual(on);
      renderBrainrot(on);
    };
    brainrotToggle.addEventListener('click', toggle);
    brainrotToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
    updateVisual(false); // Initialize as off
  }

  // Global About window typewriter animation
  (function initTypewriter() {
    const typewriterText = document.getElementById('typewriterText');
    if (!typewriterText) return;
    const messages = [
      "Want to learn about my lore? 🧌",
      "Data nerd alert: I got a Statistics degree ☝️🤓",
      "Built my first online community at 14 on COD MW2 🫂",
      "Coffee-to-creativity converter ☕",
      "Spreadsheet wizard in disguise 🧙‍♂️",
      "I can type 145 WPM ⚡️",
      "Did you know I'm Diamond in Valorant and TFT? 💎",
    ];
    let iMsg = 0, iChar = 0, typing = true;
    function tick() {
      const msg = messages[iMsg];
      if (typing) {
        if (iChar < msg.length) {
          typewriterText.textContent = msg.substring(0, iChar + 1);
          iChar++;
          setTimeout(tick, 50 + Math.random() * 50);
        } else {
          typing = false;
          setTimeout(tick, 2000);
        }
      } else {
        if (iChar > 0) {
          typewriterText.textContent = msg.substring(0, iChar - 1);
          iChar--;
          setTimeout(tick, 30);
        } else {
          typing = true;
          iMsg = (iMsg + 1) % messages.length;
          setTimeout(tick, 500);
        }
      }
    }
    tick();
  })();
  
  // Global desktop icon -> window open bindings
  const gMusic = document.getElementById('musicPlayer');
  const gGif = document.getElementById('gifViewer');
  const gAbout = document.getElementById('aboutWindow');
  const icMusic = document.getElementById('iconMusic');
  const icGifs = document.getElementById('iconGifs');
  const icAbout = document.getElementById('iconAbout');
  const headerAboutLink = document.getElementById('about');
  if (icMusic && gMusic) icMusic.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openCentered(gMusic, 'iconMusic'); });
  if (icGifs && gGif) icGifs.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); if (typeof loadCatGif === 'function') loadCatGif(); openCentered(gGif, 'iconGifs'); });
  if (icAbout && gAbout) icAbout.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openCentered(gAbout, 'iconAbout'); });
  // Also open About via header top-right ABOUT link
  if (headerAboutLink && gAbout) headerAboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openCentered(gAbout, 'iconAbout');
    // Ensure draggable in case styles changed
    dragElement(gAbout);
  });

  // Global close buttons -> re-show icons
  const btnCloseMusic = document.getElementById('closeMusic');
  const btnCloseGif = document.getElementById('closeGif');
  const btnCloseAbout = document.getElementById('closeAbout');
  if (btnCloseMusic && gMusic) btnCloseMusic.addEventListener('click', (e) => { e.stopPropagation(); closeWindow(gMusic, 'iconMusic'); });
  if (btnCloseGif && gGif) btnCloseGif.addEventListener('click', (e) => { e.stopPropagation(); closeWindow(gGif, 'iconGifs'); });
  if (btnCloseAbout && gAbout) btnCloseAbout.addEventListener('click', (e) => { e.stopPropagation(); closeWindow(gAbout, 'iconAbout'); });

  function initClippyDialogue() {
    const clippyText = document.getElementById('clippyText');
    const clippyOptions = document.getElementById('clippyOptions');
    let currentQuest = null;
    
    const dialogues = {
      help: {
        text: "Need help? You can drag folders around, click them to explore Antonio's work, or try the windows on screen. The recycle bin has some... interesting content!",
        options: [
          { text: "Show me the photography", action: () => navigateTo('/photography') },
          { text: "What's in the recycle bin?", response: "trash" },
          { text: "Back to main menu", response: "main" }
        ]
      },
      quest: {
        text: "Ah, a fellow adventurer! I have some quests for you:",
        options: [
          { text: "🐱 Generate a cat GIF", action: () => startQuest('catgif') },
          { text: "🗑️ Explore the recycle bin", action: () => startQuest('trash') },
          { text: "🎵 Play some music", action: () => startQuest('music') },
          { text: "Maybe later", response: "main" }
        ]
      },
      about: {
        text: "This is Antonio's digital portfolio! He's a marketing wizard by day, photographer by night. Think of me as your guide through his creative chaos!",
        options: [
          { text: "Tell me more about Antonio", action: () => openWindow('aboutWindow') },
          { text: "Show me his work", response: "help" },
          { text: "Back to main menu", response: "main" }
        ]
      },
      joke: {
        text: "Why did the marketer break up with the photographer? Because they couldn't focus on the same target audience!",
        options: [
          { text: "That's terrible!", response: "joke2" },
          { text: "Tell me another", response: "joke3" },
          { text: "Back to business", response: "main" }
        ]
      },
      joke2: {
        text: "I know, I know... I'm better at organizing files than telling jokes! 📎",
        options: [
          { text: "Give me a quest instead", response: "quest" },
          { text: "Back to main menu", response: "main" }
        ]
      },
      joke3: {
        text: "What do you call a cat that works in marketing? A purr-suasion specialist! 🐱💼",
        options: [
          { text: "Okay, that's enough", response: "main" },
          { text: "I want a real cat now", action: () => startQuest('catgif') }
        ]
      },
      trash: {
        text: "The recycle bin? Oh my... that's where Antonio's failed 'creative experiments' ended up. Proceed with caution!",
        options: [
          { text: "Open it anyway", action: () => openWindow('recycleBinWindow') },
          { text: "Maybe not...", response: "main" }
        ]
      },
      main: {
        text: "Hello! I'm Clippy, your helpful assistant. I see you're exploring Antonio's portfolio!",
        options: [
          { text: "I need help navigating", response: "help" },
          { text: "Give me a quest!", response: "quest" },
          { text: "Tell me about this site", response: "about" },
          { text: "Tell me a joke", response: "joke" }
        ]
      }
    };
    
    function startQuest(questType) {
      currentQuest = questType;
      const questTexts = {
        catgif: "Quest accepted! Generate a cat GIF using the Cat GIF Generator window. Click the 'Generate cat gif' button!",
        trash: "Quest accepted! Explore the mysteries of the recycle bin. Double-click it to open!",
        music: "Quest accepted! Open the music player and enjoy some tunes. The window should be open already!"
      };
      
      updateDialogue({
        text: questTexts[questType],
        options: [
          { text: "Quest completed!", action: () => completeQuest(questType) },
          { text: "I need help", response: "help" },
          { text: "Cancel quest", response: "main" }
        ]
      });
      
      // Auto-open relevant windows
      if (questType === 'catgif') openWindow('gifViewer');
      if (questType === 'music') openWindow('musicPlayer');
    }
    
    function completeQuest(questType) {
      const rewards = {
        catgif: "Excellent! You've mastered the ancient art of cat GIF generation! 🏆 Your reward: infinite cat content!",
        trash: "Brave explorer! You've uncovered Antonio's digital archaeology. 🏆 Some secrets are best left buried...",
        music: "Wonderful! Music soothes the digital soul. 🏆 You've earned the title of 'Playlist Pioneer'!"
      };
      
      updateDialogue({
        text: rewards[questType],
        options: [
          { text: "Give me another quest!", response: "quest" },
          { text: "Back to main menu", response: "main" }
        ]
      });
      currentQuest = null;
    }
    
    function openWindow(windowId) {
      const win = document.getElementById(windowId);
      if (win) {
        win.style.display = 'block';
        win.classList.add('zoom-in');
        setTimeout(() => win.classList.remove('zoom-in'), 260);
      }
    }
    
    function updateDialogue(dialogue) {
      if (clippyText) clippyText.textContent = dialogue.text;
      if (clippyOptions) {
        clippyOptions.innerHTML = '';
        dialogue.options.forEach(option => {
          const btn = document.createElement('button');
          btn.className = 'btn clippy-btn';
          btn.textContent = option.text;
          btn.addEventListener('click', () => {
            if (option.action) {
              option.action();
            } else if (option.response) {
              updateDialogue(dialogues[option.response]);
            }
          });
          clippyOptions.appendChild(btn);
        });
      }
    }
    
    // Initialize with main dialogue
    if (dialogues.main) updateDialogue(dialogues.main);
  }

  // Remove Clippy initialization
// Clippy related code has been removed as per request

// Recycle Bin functionality
  const recycleBin = document.getElementById('recycleBin');
  const recycleBinWindow = document.getElementById('recycleBinWindow');
  const closeBin = document.getElementById('closeBin');

  if (recycleBin && recycleBinWindow) {
    recycleBin.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      recycleBinWindow.style.display = 'block';
      recycleBinWindow.style.position = 'absolute';
      recycleBinWindow.style.zIndex = '2000';
      recycleBinWindow.style.visibility = 'visible';
      recycleBinWindow.style.opacity = '1';
      // Center the window without transform (to avoid drag position issues)
      const centerX = (window.innerWidth - 400) / 2; // assuming 400px width
      const centerY = (window.innerHeight - 300) / 2; // assuming 300px height
      recycleBinWindow.style.left = centerX + 'px';
      recycleBinWindow.style.top = centerY + 'px';
      recycleBinWindow.style.transform = 'none'; // Remove transform to prevent drag conflicts
      dragElement(recycleBinWindow);
      console.log('Recycle Bin window opened');
    });
  }

  if (closeBin && recycleBinWindow) {
    closeBin.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      recycleBinWindow.style.display = 'none';
    });
  }

  // Ensure Clippy sits on top
  const clippyHelper = document.getElementById('clippyHelper');
  if (clippyHelper) {
    clippyHelper.style.zIndex = '1000';
  }
  const closeClippy = document.getElementById('closeClippyBubble');
  if (closeClippy) {
    closeClippy.addEventListener('click', (e) => {
      e.stopPropagation();
      const bubble = document.querySelector('.clippy-helper .clippy-bubble');
      if (bubble) bubble.style.display = 'none';
    });
  }

  // Make all windows draggable
  const allWindows = document.querySelectorAll('.window-xp, .window-xp-widget');
  allWindows.forEach(window => {
    if (window) {
      dragElement(window);
      console.log('Made window draggable:', window.id);
    }
  });
  
  // Make the recycle bin window draggable
  dragElement(recycleBinWindow);

  // Clickable files inside Recycle Bin (open data-link if provided)
  recycleBinWindow.querySelectorAll('.folder[data-link]').forEach(el => {
    el.addEventListener('click', () => {
      const link = el.getAttribute('data-link');
      if (link) window.open(link, '_blank');
    });
  });

  // 3D corner hover effect for XP windows (exclude brainrot popups)
  (function enableCorner3D() {
    const all = document.querySelectorAll('.window-xp, .window-xp-widget');
    all.forEach(win => {
      if (win.classList.contains('brainrot-win')) return;
      let raf = null;
      const reset = () => {
        if (raf) cancelAnimationFrame(raf);
        win.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        win.style.transform = win.style.transform?.replace(/rotate[XY]\([^)]*\)/g, '').trim() || '';
      };
      const handleMove = (e) => {
        const rect = win.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;   // 0..1
        const y = (e.clientY - rect.top) / rect.height;  // 0..1
        const corner = 0.25; // Smaller corner area for more subtle effect
        let rx = 0, ry = 0, apply = false;
        if (x < corner && y < corner) { // top-left
          rx = 4; ry = 4; apply = true; // Reduced from 8 to 4 degrees
        } else if (x > 1-corner && y < corner) { // top-right
          rx = 4; ry = -4; apply = true; // Reduced from 8 to 4 degrees
        } else if (x < corner && y > 1-corner) { // bottom-left
          rx = -4; ry = 4; apply = true; // Reduced from 8 to 4 degrees
        } else if (x > 1-corner && y > 1-corner) { // bottom-right
          rx = -4; ry = -4; apply = true; // Reduced from 8 to 4 degrees
        }
        if (!apply) { reset(); return; }
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          // preserve existing translate if any
          const base = (win.dataset.baseTransform || win.style.transform || '').replace(/rotate[XY]\([^)]*\)/g, '').trim();
          win.dataset.baseTransform = base;
          win.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Smooth transition
          win.style.transform = `${base} rotateX(${rx}deg) rotateY(${ry}deg)`;
        });
      };
      win.addEventListener('pointermove', handleMove);
      win.addEventListener('pointerleave', reset);
    });
  })();

  // Enhanced cat GIF viewer with better functionality
  const gifSingle = document.getElementById('gifSingle');
  const btnGenCat = document.getElementById('btnGenCat');
  // Cycle through a curated list of cat GIFs (typing first)
  const catGifList = [
    'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFncDh3MHFxdWxwbHNxM290cG5paHA5Y3Zha2F1MXJoNGt3MHlzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vQSQ3cNXuDGo/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdhZWx5OHBrd243azZ5MGM3OWFldnZ2cTJ5bDdiZ3duZWNpcXI3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjR4ZnNmZTY0dXhsZjhiam94N24ya3p5cWx4OXJrYTRvbGNwYTZwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5HSYaZTcRpYnS/giphy.gif',

  ];
  let catGifIndex = 0;
  
  async function loadCatGif() {
    console.log('Loading cat GIF...');
    if (btnGenCat) {
      btnGenCat.textContent = 'Loading...';
      btnGenCat.disabled = true;
    }
    
    try {
      // Round-robin through curated GIFs, starting with typing cat
      const nextUrl = catGifList[catGifIndex % catGifList.length] + '?cb=' + Date.now();
      catGifIndex++;
      if (gifSingle) {
        gifSingle.onerror = null;
        gifSingle.src = nextUrl;
        gifSingle.alt = 'Cat GIF';
      }
      
    } catch (e) {
      console.error('Error loading cat GIF:', e);
      if (gifSingle) {
        gifSingle.src = 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif';
        gifSingle.alt = 'Cat GIF fallback';
      }
    } finally {
      if (btnGenCat) {
        btnGenCat.textContent = 'Generate cat GIF';
        btnGenCat.disabled = false;
      }
    }
  }
  
  if (gifSingle) loadCatGif();
  if (btnGenCat) {
    btnGenCat.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Generate cat GIF button clicked');
      loadCatGif();
    });
  }

  // Build a simple music player and load only 'Are You Bored Yet?' via iTunes Search API
  const musicPlayerEl = document.getElementById('musicPlayer');
  if (musicPlayerEl) {
    // Get elements from the simple music interface
    const trackInfo = document.getElementById('trackInfo');
    const btnPrev = document.getElementById('prevBtn');
    const btnPlay = document.getElementById('playBtn');
    const btnNext = document.getElementById('nextBtn');
    const progressFill = document.getElementById('progressFill');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const audio = new Audio();
    audio.preload = 'metadata';
    let tracks = [];
    let idx = 0;
    let progTimer = null;

    function setTrack(i) {
      if (!tracks.length) return;
      idx = (i + tracks.length) % tracks.length;
      const t = tracks[idx];
      audio.src = t.previewUrl;
      if (trackInfo) trackInfo.textContent = `${t.trackName} — ${t.artistName}`;
      if (progressFill) progressFill.style.width = '0%';
      if (currentTimeEl) currentTimeEl.textContent = '0:00';
      if (totalTimeEl) totalTimeEl.textContent = '0:00';
    }

      fetch('https://itunes.apple.com/search?term=Are%20You%20Bored%20Yet%20Clairo&entity=song&limit=25')
        .then(r => r.json())
        .then(data => {
          const all = (data.results || []).filter(t => t.previewUrl);
          // Strict filter: exact track and known artist (Wallows feat. Clairo)
          tracks = all.filter(t => /are you bored yet\??/i.test(t.trackName||'') && /(wallows)/i.test(t.artistName||'') );
          if (tracks.length) {
            setTrack(0);
          } else {
            if (trackInfo) trackInfo.textContent = 'No previews available.';
          }
        })
        .catch(() => { if (trackInfo) trackInfo.textContent = 'Failed to load tracks.'; });

    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        if (!audio.src) return;
        if (audio.paused) {
          audio.play();
          btnPlay.textContent = '⏸';
          btnPlay.classList.add('playing');
          // start progress updater
          if (progTimer) clearInterval(progTimer);
          progTimer = setInterval(() => {
            if (!isNaN(audio.duration) && audio.duration > 0) {
              const pct = Math.min(100, (audio.currentTime / audio.duration) * 100);
              if (progressFill) progressFill.style.width = pct + '%';
              if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
              if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
            }
          }, 200);
        } else {
          audio.pause();
          btnPlay.textContent = '▶';
          btnPlay.classList.remove('playing');
          if (progTimer) { clearInterval(progTimer); progTimer = null; }
        }
      });
    }
    
    if (btnPrev) btnPrev.addEventListener('click', () => { setTrack(idx - 1); if (!audio.paused) audio.play(); });
    if (btnNext) btnNext.addEventListener('click', () => { setTrack(idx + 1); if (!audio.paused) audio.play(); });

    audio.addEventListener('ended', () => {
      if (btnPlay) {
        btnPlay.textContent = '▶';
        btnPlay.classList.remove('playing');
      }
      if (progTimer) { clearInterval(progTimer); progTimer = null; }
      if (progressFill) progressFill.style.width = '0%';
      if (currentTimeEl) currentTimeEl.textContent = '0:00';
    });

    // Click-to-seek
    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const pct = Math.max(0, Math.min(1, x / rect.width));
        if (!isNaN(audio.duration) && audio.duration > 0) {
          audio.currentTime = pct * audio.duration;
          if (progressFill) progressFill.style.width = (pct * 100) + '%';
          if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
          if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
        }
      });
    }

    function formatTime(t) {
      const m = Math.floor(t / 60);
      const s = Math.floor(t % 60);
      return m + ':' + String(s).padStart(2, '0');
    }
  }

  // Make desktop folders/icons draggable on home screen with a click threshold
  const desktopItems = document.querySelectorAll('.folder-container > .folder, .folder-container > a.folder');
  desktopItems.forEach(el => {
    el.setAttribute('draggable', 'false');
    makeDraggableIcon(el);
    console.log('Made draggable:', el.id || el.className); // Debug log
  });
  // Disable native drag on images to avoid ghost image following cursor
  document.querySelectorAll('.folder-image, .file-image').forEach(img => {
    img.setAttribute('draggable', 'false');
  });

  let lastBinTriggerAt = 0;
  function makeDraggableIcon(elmnt) {
    let startX = 0, startY = 0, origX = 0, origY = 0, dragging = false;

    elmnt.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return; // primary button only
      e.preventDefault(); // stop native drag/select
      elmnt.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startY = e.clientY;
      const rect = elmnt.getBoundingClientRect();
      const parentRect = elmnt.parentElement.getBoundingClientRect();
      origX = rect.left - parentRect.left;
      origY = rect.top - parentRect.top;
      elmnt.style.cursor = 'grabbing';

      const onMove = (ev) => {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (!dragging && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
          dragging = true;
          elmnt.style.position = 'absolute';
          elmnt.style.zIndex = '5';
          document.body.style.userSelect = 'none';
        }
        if (dragging) {
          const parentRect = elmnt.parentElement.getBoundingClientRect();
          const iconRect = elmnt.getBoundingClientRect();
          let newLeft = origX + dx;
          let newTop = origY + dy;
          const maxLeft = parentRect.width - iconRect.width;
          const maxTop = parentRect.height - iconRect.height;
          newLeft = Math.max(0, Math.min(maxLeft, newLeft));
          newTop = Math.max(0, Math.min(maxTop, newTop));
          elmnt.style.left = `${newLeft}px`;
          elmnt.style.top = `${newTop}px`;
        }
      };

      const finish = (ev) => {
        elmnt.releasePointerCapture(e.pointerId);
        elmnt.removeEventListener('pointermove', onMove);
        elmnt.removeEventListener('pointerup', finish);
        elmnt.removeEventListener('pointercancel', finish);
        elmnt.removeEventListener('pointerleave', finish);
        document.body.style.userSelect = '';
        elmnt.style.cursor = '';
        if (dragging) {
          // Suppress ONLY the immediate synthetic click on this element once
          const cancelOnce = (clickEv) => {
            clickEv.preventDefault();
            clickEv.stopPropagation();
            elmnt.removeEventListener('click', cancelOnce, true);
          };
          elmnt.addEventListener('click', cancelOnce, true);

          // Detect drop over Recycle Bin and trigger Clippy
          try {
            if (elmnt && elmnt.id === 'recycleBin') return; // don't trigger when moving the bin itself
            const binRect = recycleBin.getBoundingClientRect();
            const iconRect = elmnt.getBoundingClientRect();
            const now = Date.now();
            if (rectsOverlap(iconRect, binRect) && now - lastBinTriggerAt > 1500) {
              lastBinTriggerAt = now;
              triggerBinFeedback();
            }
          } catch {}
        }
        dragging = false;
      };

      elmnt.addEventListener('pointermove', onMove);
      elmnt.addEventListener('pointerup', finish);
      elmnt.addEventListener('pointercancel', finish);
      elmnt.addEventListener('pointerleave', finish);
    }, { passive: false });
  }

  function dragElement(elmnt) {
    if (!elmnt || elmnt.dataset.dragInit === 'true') return;
    const handle = elmnt.querySelector('.title-bar') || elmnt;
    handle.style.cursor = 'move';
    elmnt.style.position = elmnt.style.position || 'absolute';

    let startX = 0, startY = 0;
    let origLeft = 0, origTop = 0;
    let pointerId = null;
    const moveThreshold = 5; // Slightly higher threshold for smoother feel
    let hasMoved = false;
    let isDragging = false;

    const onPointerDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return; // only primary mouse
      if (e.target.closest('.title-bar-controls') || e.target.closest('button') || e.target.closest('input')) return;
      pointerId = e.pointerId || 'mouse';
      handle.setPointerCapture && e.pointerId !== undefined && handle.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startY = e.clientY;
      const rect = elmnt.getBoundingClientRect();
      origLeft = rect.left + window.scrollX;
      origTop = rect.top + window.scrollY;
      document.body.style.userSelect = 'none';
      elmnt.style.zIndex = '2100';
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp, { once: true });
      window.addEventListener('pointercancel', onPointerUp, { once: true });
      e.preventDefault();
      e.stopPropagation();
    };

    const onPointerMove = (e) => {
      if (pointerId !== null && e.pointerId !== undefined && e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!hasMoved && Math.hypot(dx, dy) < moveThreshold) {
        return; // don't move until threshold exceeded
      }
      hasMoved = true;
      let newLeft = origLeft + dx;
      let newTop = origTop + dy;
      // bounds in viewport
      const rect = elmnt.getBoundingClientRect();
      const maxLeft = window.innerWidth - rect.width;
      const maxTop = window.innerHeight - rect.height;
      newLeft = Math.max(0, Math.min(maxLeft, newLeft));
      newTop = Math.max(0, Math.min(maxTop, newTop));
      elmnt.style.left = newLeft + 'px';
      elmnt.style.top = newTop + 'px';
    };

    const onPointerUp = (e) => {
      window.removeEventListener('pointermove', onPointerMove);
      document.body.style.userSelect = '';
      elmnt.style.zIndex = '2000';
      pointerId = null;
      hasMoved = false;
    };

    handle.addEventListener('pointerdown', onPointerDown);
    elmnt.dataset.dragInit = 'true';
  }
});
