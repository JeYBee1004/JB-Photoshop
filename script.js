// Disable right-click globally (optional: remove this if you only want to restrict inspection)
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Right-click disabled 😊.');
});

// Restrict only developer tools shortcuts
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (
        (event.ctrlKey && event.shiftKey && (key === 'I' || key === 'J')) || // Ctrl+Shift+I or J
        key === 'F12' // F12
    ) {
        event.preventDefault();
        alert('Developer tools access is restricted!');
    }
});

// Disable right-click only on images with class "-protected-image"
document.querySelectorAll('.-protected-image').forEach(img => {
    img.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        alert('Right-click on image disabled 😊.');
    });
});

// Adjust row span dynamically based on image aspect ratio
document.querySelectorAll('#photoshop .img').forEach(img => {
    img.onload = () => {
        const rowSpan = Math.ceil((img.naturalHeight / img.naturalWidth) * 10);
        img.style.setProperty('--row-span', rowSpan);
    };
});

// Toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
}

// Open image in fullscreen mode
function openFullscreen(img) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.id = 'fullscreen';
    fullscreenDiv.style.cssText = `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background-color: rgba(0, 0, 0, 0.8); 
        display: flex; 
        justify-content: center; 
        align-items: center;
        z-index: 1000;
    `;

    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;
    fullscreenImg.style.cssText = 'max-width: 100%; max-height: 100%;';

    const closeButton = document.createElement('div');
    closeButton.innerText = '✖';
    closeButton.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    `;
    closeButton.addEventListener('click', () => document.body.removeChild(fullscreenDiv));

    fullscreenDiv.appendChild(fullscreenImg);
    fullscreenDiv.appendChild(closeButton);
    document.body.appendChild(fullscreenDiv);

    fullscreenDiv.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    #fullscreen {
        animation: fadeIn 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
