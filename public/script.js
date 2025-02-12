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
    
    // Ensure back arrow is hidden when content is cleared
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.style.display = 'none';
    }
}

// Click event for CONTACT
document.getElementById('contact').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('middleText').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'none';
    document.getElementById('marketingFolders').style.display = 'none';
    
    const email = 'antoniotaurisanowrites@gmail.com';
    document.getElementById('mainText').innerHTML = `<a href="mailto:${email}" style="color: inherit; text-decoration: none;">${email}</a>`;
    document.getElementById('mainText').style.fontSize = '1em';
});

// Click event for ABOUT
document.getElementById('about').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('middleText').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'none';
    document.getElementById('marketingFolders').style.display = 'none';
    
    document.getElementById('mainText').innerHTML = `
        <p style="margin-bottom: 1em;">Antonio is a marketing professional with a <span style="color: #C65D57;">Data Analytics BSc</span> and a passion for storytelling and creative strategy.</p>
        <p style="margin-bottom: 1em;">Blending creativity with data-driven insights to develop consumer-first marketing initiatives by day.</p>
        <p><a href="https://almostfamouszine.com" style="color: inherit; text-decoration: none; font-size: inherit;">Capturing movement through photography and writing for <span style="color: #C65D57;">Almost Famous Zine</span> by night.</a></p>
    `;
    document.getElementById('mainText').style.fontSize = '3em';
});

// Photography section data
const photographySections = {
    "100 GECS": {
        images: ["/images/100gecs/gecs1.jpeg", "/images/100gecs/gecs2.jpeg", "/images/100gecs/gecs3.jpeg", "/images/100gecs/gecs4.jpeg", 
                "/images/100gecs/gecs5.jpeg", "/images/100gecs/gecs6.jpeg", "/images/100gecs/gecs7.jpeg"],
        text: "<a href='https://almostfamouszine.com/100-gecs' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>100 gecs live at knockdown center, queens nyc shot for almost famous zine</a>"
    },
    "JULIEN BAKER": {
        images: ["/images/julienbaker/baker1.jpeg", "/images/julienbaker/baker2.jpeg", "/images/julienbaker/baker3.jpeg", "/images/julienbaker/baker4.jpeg", "/images/julienbaker/baker5.jpeg", "/images/julienbaker/baker6.jpeg", "/images/julienbaker/baker7.jpeg"],
        text: "<a href='https://almostfamouszine.com/julien-baker' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>julien baker live at earth hall, london shot for almost famous zine</a>"
    },
    "ST. VINCENT": {
        images: ["/images/stvincent/vincent1.jpeg", "/images/stvincent/vincent2.jpeg", "/images/stvincent/vincent3.jpeg", "/images/stvincent/vincent4.jpeg", "/images/stvincent/vincent5.jpeg", "/images/stvincent/vincent6.jpeg", "/images/stvincent/vincent7.jpeg"],
        text: "<a href='https://almostfamouszine.com/welcome-to-the-all-born-screaming-tour-brought-to-you-by-st-vincent/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>st. vincent live at fabrique, milan shot for almost famous zine</a>"
    },
    "THE PAPER KITES": {
        images: ["/images/paperkites/kites1.jpeg", "/images/paperkites/kites2.jpeg", "/images/paperkites/kites3.jpeg", "/images/paperkites/kites4.jpeg", "/images/paperkites/kites5.jpeg", "/images/paperkites/kites6.jpeg", "/images/paperkites/kites7.jpeg"],
        text: "<a href='https://almostfamouszine.com/a-tale-of-the-paper-kites-dreamy-night-at-the-vega-in-copenhagen/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>the paper kites live at vega, copenhagen shot for almost famous zine</a>"
    },
    "FENNE LILY": {
        images: ["/images/fennelily/lily1.jpeg", "/images/fennelily/lily2.jpeg", "/images/fennelily/lily3.jpeg", "/images/fennelily/lily4.jpeg", "/images/fennelily/lily5.jpeg", "/images/fennelily/lily6.jpeg", "/images/fennelily/lily7.jpeg"],
        text: "<a href='https://almostfamouszine.com/on-hold-never-felt-this-good-fenne-lilys-opening-night-in-brooklyn/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>fenne lily live at the broadway, brooklyn nyc shot for almost famous zine</a>"
    },
    "YOUBET": {
        images: ["/images/youbet/youbet1.jpeg", "/images/youbet/youbet2.jpeg", "/images/youbet/youbet3.jpeg", "/images/youbet/youbet4.jpeg", "/images/youbet/youbet5.jpeg", "/images/youbet/youbet6.jpeg", "/images/youbet/youbet7.jpeg"],
        text: "youbet live at union pool, brooklyn nyc"
    }
};

// Marketing section data
const marketingSections = {
    "BOOMBIT": {
        image: "boombit.jpg",
        text: "BoomBit project details..."
    },
    "GALA GAMES": {
        image: "gala.jpg",
        text: "Gala Games project details..."
    },
    "PLANET MOJO": {
        image: "mojo.jpg",
        text: "Planet Mojo project details..."
    },
    "EXTRA": {
        image: "extra.jpg",
        text: "Extra project details..."
    }
};

// Click event for Photography
document.getElementById('Photography').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'grid';
    document.getElementById('sectionNavigation').style.display = 'flex';
    document.getElementById('goBack').style.display = 'none';
    document.getElementById('backToFolders').style.display = 'none';
    
    // Explicitly hide back arrow
    const backArrow = document.querySelector('.back-arrow');
    if (backArrow) {
        backArrow.style.display = 'none';
    }
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

let currentImageIndex = 0;

function displayPhotographySection(section) {
    hideAllContent();
    const sectionData = photographySections[section];
    const container = document.getElementById('imageContainer');
    container.innerHTML = '';

    if (window.innerWidth <= 768) { // Mobile view
        // Create navigation arrows
        const navArrows = document.createElement('div');
        navArrows.className = 'nav-arrows';
        navArrows.innerHTML = `
            <img src="/images/arrow-left.svg" class="nav-arrow left" alt="Previous">
            <img src="/images/arrow-right.svg" class="nav-arrow right" alt="Next">
        `;
        container.appendChild(navArrows);

        // Add all images but only show the first one
        sectionData.images.forEach((img, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.className = `photo ${index === 0 ? 'active' : ''}`;
            container.appendChild(imgElement);
        });

        // Add click handlers for arrows
        const leftArrow = container.querySelector('.nav-arrow.left');
        const rightArrow = container.querySelector('.nav-arrow.right');

        leftArrow.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + sectionData.images.length) % sectionData.images.length;
            updateActiveImage(container);
        });

        rightArrow.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % sectionData.images.length;
            updateActiveImage(container);
        });

        // Add swipe handlers
        let touchStartX = 0;
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) { // Swipe left
                    rightArrow.click();
                } else { // Swipe right
                    leftArrow.click();
                }
            }
        });
    } else {
        // Desktop view (keep existing grid layout)
        // ... existing desktop code ...
    }

    document.getElementById('sectionTitle').innerHTML = sectionData.text;
    document.getElementById('sectionTitle').style.display = 'block';
}

function updateActiveImage(container) {
    container.querySelectorAll('.photo').forEach((img, index) => {
        img.classList.toggle('active', index === currentImageIndex);
    });
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
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('photographyFolders').style.display = 'grid';
    document.getElementById('sectionNavigation').style.display = 'flex';
});

document.getElementById('goBackMarketing').addEventListener('click', () => {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('marketingFolders').style.display = 'grid';
    document.getElementById('marketingNavigation').style.display = 'flex';
});

