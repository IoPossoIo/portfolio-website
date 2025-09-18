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
    
    document.getElementById('mainText').innerHTML = `
        <p style="margin-bottom: 1em;">Antonio is a marketing professional with a <span style="color: #C65D57;">Data Analytics BSc</span> and a passion for storytelling and creative strategy.</p>
        <p style="margin-bottom: 1em;">Blending  <span style="color: #C65D57;">creativity </span>with data-driven insights to develop consumer-first marketing initiatives by day.</p>
        <p style="margin-bottom: 1em;">Capturing movement through <span style="color: #C65D57;">photography and writing</span> by night.</p>
    `;
    document.getElementById('mainText').style.fontSize = '2em';
});

// Photography section data
const photographySections = {
    "100 GECS": {
        images: ["/images/100gecs/gecs1.jpeg", "/images/100gecs/gecs2.jpeg", "/images/100gecs/gecs3.jpeg", "/images/100gecs/gecs4.jpeg", 
                "/images/100gecs/gecs5.jpeg", "/images/100gecs/gecs6.jpeg", "/images/100gecs/gecs7.jpeg"],
        text: "<a href='https://almostfamouszine.com/surviving-100-gecs-pit-dazed-confused-and-alive/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>100 gecs live at knockdown center ✨ shot for almost famous zine</a>"
    },
    "JULIEN BAKER": {
        images: ["/images/julienbaker/baker1.jpeg", "/images/julienbaker/baker2.jpeg", "/images/julienbaker/baker3.jpeg", "/images/julienbaker/baker4.jpeg", "/images/julienbaker/baker5.jpeg", "/images/julienbaker/baker6.jpeg", "/images/julienbaker/baker7.jpeg"],
        text: "<a href='https://almostfamouszine.com/emotional-night-with-julien-baker-at-earth-hall/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>julien baker live at earth hall ✨ shot for almost famous zine</a>"
    },
    "ST. VINCENT": {
        images: ["/images/stvincent/vincent1.jpeg", "/images/stvincent/vincent2.jpeg", "/images/stvincent/vincent3.jpeg", "/images/stvincent/vincent4.jpeg", "/images/stvincent/vincent5.jpeg", "/images/stvincent/vincent6.jpeg", "/images/stvincent/vincent7.jpeg"],
        text: "<a href='https://almostfamouszine.com/welcome-to-the-all-born-screaming-tour-brought-to-you-by-st-vincent/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>st. vincent live at fabrique ✨ shot for almost famous zine</a>"
    },
    "THE PAPER KITES": {
        images: ["/images/paperkites/kites1.jpeg", "/images/paperkites/kites2.jpeg", "/images/paperkites/kites3.jpeg", "/images/paperkites/kites4.jpeg", "/images/paperkites/kites5.jpeg", "/images/paperkites/kites6.jpeg", "/images/paperkites/kites7.jpeg"],
        text: "<a href='https://almostfamouszine.com/a-tale-of-the-paper-kites-dreamy-night-at-the-vega-in-copenhagen/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>the paper kites live at vega ✨ shot for almost famous zine</a>"
    },
    "FENNE LILY": {
        images: ["/images/fennelily/lily1.jpeg", "/images/fennelily/lily2.jpeg", "/images/fennelily/lily3.jpeg", "/images/fennelily/lily4.jpeg", "/images/fennelily/lily5.jpeg", "/images/fennelily/lily6.jpeg", "/images/fennelily/lily7.jpeg"],
        text: "<a href='https://almostfamouszine.com/on-hold-never-felt-this-good-fenne-lilys-opening-night-in-brooklyn/' style='color:rgb(0, 0, 0); text-decoration: none;' onmouseover='this.style.textDecoration=\"underline\"' onmouseout='this.style.textDecoration=\"none\"'>fenne lily live at the broadway ✨ shot for almost famous zine</a>"
    },
    "YOUBET": {
        images: ["/images/youbet/youbet1.jpeg", "/images/youbet/youbet2.jpeg", "/images/youbet/youbet3.jpeg", "/images/youbet/youbet4.jpeg", "/images/youbet/youbet5.jpeg"],
        text: "youbet live at union pool"
    }
};

// Marketing section data structure
const marketingFolders = {
    "SOCIAL MEDIA CONTENT": {
        folders: [
            "Hunters On-Chain 18 Seconds Sold Out!",
            "Hunters On-Chain DappRadar Article",
            "Planet Mojo New Game Announcement",
            "Get Plucked Medium Article",
            "VOX: What is it?"
        ],
        links: {
            "Hunters On-Chain 18 Seconds Sold Out!": "https://x.com/BoomLandGames/status/1620478702407778304",
            "Hunters On-Chain DappRadar Article": "https://dappradar.com/blog/hunters-on-chain-game-guide",
            "Planet Mojo New Game Announcement": "https://x.com/WeArePlanetMojo/status/1776365595040047194",
            "Get Plucked Medium Article": "https://medium.com/@collectVOX/hatch-eggs-and-get-feathers-856cf13a26b2",
            "VOX: What is it?": "https://www.youtube.com/watch?v=ojEZtZars7Q"
        },
        icons: {
            "Hunters On-Chain 18 Seconds Sold Out!": "./images/text.png",
            "Hunters On-Chain DappRadar Article": "./images/text.png",
            "Planet Mojo New Game Announcement": "./images/text.png",
            "Get Plucked Medium Article": "./images/text.png",
            "VOX: What is it?": "./images/video.png"
        },
        headerText: "I swear i wrote copy and storyboarded this stuff without chatgpt"
    },
    "IP PARTNERSHIPS": {
        folders: [
            "VOX & DreamWorks Trolls",
            "VOX & AMC's The Walking Dead ",
            "Planet Mojo & WowWee Plushies",
            "Planet Mojo & Talon Esports"
        ],
        links: {
            "VOX & DreamWorks Trolls": "https://www.youtube.com/watch?v=LJhwu2xsqaA",
            "VOX & AMC's The Walking Dead ": "https://www.youtube.com/watch?v=mhnusMyUWm0",
            "Planet Mojo & WowWee Plushies": "https://decrypt.co/225883/mystic-moose-and-wowwee-join-forces-to-create-planet-mojo-toys-connected-to-blockchain",
            "Planet Mojo & Talon Esports": "https://esportsinsider.com/2024/04/talon-esports-web3-planet-mojo"
        },
        icons: {
            "VOX & DreamWorks Trolls": "./images/video.png",
            "VOX & AMC's The Walking Dead ": "./images/video.png",
            "Planet Mojo & WowWee Plushies": "./images/text.png",
            "Planet Mojo & Talon Esports": "./images/text.png"
        },
        headerText: "a lot of cool partnerships with cool people!"
    },
    "LIVESTREAMS": {
        folders: [
            "Get Plucked Mobile Game Release",
            "Interview with Neo Tokyo",
            "Interview with Decentraland"
        ],
        links: {
            "Get Plucked Mobile Game Release": "https://www.youtube.com/watch?v=0bvVVXM1OqA",
            "Interview with Neo Tokyo": "https://x.com/NeoTokyoCode/status/1834373045311676533",
            "Interview with Decentraland": "https://www.linkedin.com/events/7208541648673210369/comments/"
        },
        icons: {
            "Get Plucked Mobile Game Release": "./images/video.png",
            "Interview with Neo Tokyo": "./images/video.png",
            "Interview with Decentraland": "./images/video.png"
        },
        headerText: "Bonus: in all these videos you can see my pretty face!!"
    },
    "METRICS": {
        folders: [
            "Planet Mojo Twitter Growth YoY",
            "Boombit F2P Campaign Performance"
        ],
        links: {
            "Planet Mojo Twitter Growth YoY": "/Planet Mojo Twitter - YoY Impact.png",
            "Boombit F2P Campaign Performance": "/a-brief-campaign-overview.pdf"
        },
        icons: {
            "Planet Mojo Twitter Growth YoY": "./images/pdf.png",
            "Boombit F2P Campaign Performance": "./images/pdf.png"
        },
        headerText: "maybe the real impact was the friends we made along the way?"
    },
    "DATA ANALYTICS": {
        folders: [
            "United Nations PowerBI Dashboard",
            "A self-esteem journey through gender identities",
            "360X Art Pitch Deck"
        ],
        links: {
            "United Nations PowerBI Dashboard": "/UN_MONUSCO.pdf",
            "A self-esteem journey through gender identities": "https://rpubs.com/iopossoio/psychometrics",
            "360X Art Pitch Deck": "/360X Art Pitch Deck.pdf"
        },
        icons: {
            "United Nations PowerBI Dashboard": "./images/pdf.png",
            "A self-esteem journey through gender identities": "./images/pdf.png",
            "360X Art Pitch Deck": "./images/pdf.png"
        },
        headerText: "yeah I happen to have a degree in this stuff"
    }
};

// Click event for Photography
document.getElementById('Photography').addEventListener('click', () => {
    hideAllContent();
    document.getElementById('photographyFolders').style.display = 'grid';
    document.querySelector('.text-top-right').style.display = 'block';
    
    // Show the home button only on mobile
    if (window.innerWidth <= 768) {
        document.querySelector('.photography-folders-home').style.display = 'block';
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

let currentIndex = 0; // Track the current image index

function displayPhotographySection(section) {
    hideAllContent();
    document.querySelector('.text-top-right').style.display = 'block';
    document.getElementById('sectionNavigation').style.display = 'flex'; // Show section navigation
    document.getElementById('imageContainer').style.display = 'flex'; // Show image container

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
    document.getElementById('photographyFolders').style.display = 'grid';
    document.getElementById('sectionNavigation').style.display = 'flex'; // Show navigation
    document.getElementById('goBack').style.display = 'none'; // Hide just the "GO BACK" button
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
            displayMarketingSubfolders(section, folderData.folders);
        }
    });
});

function displayMarketingSubfolders(parentSection, folders) {
    const marketingContainer = document.getElementById('marketingContainer');
    marketingContainer.innerHTML = '';
    marketingContainer.style.display = 'block';
    
    if (marketingFolders[parentSection].headerText) {
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

    folders.forEach(folderName => {
        const folder = document.createElement('div');
        folder.className = 'folder';
        
        // Use the appropriate icon if specified, otherwise use folder.png
        const iconPath = marketingFolders[parentSection].icons?.[folderName] || "./images/folder.png";
        
        folder.innerHTML = `
            <img src="${iconPath}" alt="${folderName} Icon" class="folder-image" />
            <div class="folder-text">${folderName}</div>
        `;
        
        folder.addEventListener('click', () => {
            const parentData = marketingFolders[parentSection];
            if (parentData && parentData.links && parentData.links[folderName]) {
                window.open(parentData.links[folderName], '_blank');
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
