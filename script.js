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
hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

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

    // Fullscreen image
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;
    fullscreenImg.style.cssText = 'max-width: 100%; max-height: 100%;';

    // Close button
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

    // Append elements
    fullscreenDiv.appendChild(fullscreenImg);
    fullscreenDiv.appendChild(closeButton);
    document.body.appendChild(fullscreenDiv);

    // Add fade-in animation
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



