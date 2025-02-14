// Smooth scrolling
const navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for (let i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();

        const targetSectionID = this.textContent.trim().toLowerCase();
        const targetSection = document.getElementById(targetSectionID);

        if (targetSection) { // Check if the target section exists
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


// Skill bar animation
const progressBars = document.querySelectorAll(".skill-progress > div");
const skillContainer = document.getElementById('skills-container');
let animationDone = false;

function initializeBars() {
    for (const bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initializeBars();

function fillBars() {
    for (const bar of progressBars) {
        const targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;

        const interval = setInterval(function () {
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 8); // Adjust speed here (lower number = faster)
    }
}

function checkScroll() {
    const coordinates = skillContainer.getBoundingClientRect();

    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {  // Reset when out of view
        animationDone = false;
        initializeBars();
    }
}

window.addEventListener('scroll', checkScroll);