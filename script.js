const contentSections = document.querySelectorAll('.content-section');

const heroSection = document.querySelector('.hero');
const heroHeading = heroSection.querySelector('h1');
const heroParagraph = heroSection.querySelector('p');

contentSections.forEach(section => {
    section.addEventListener('click', (e) => {
        e.stopPropagation();
        resetPage();
    });
});

function displaySection(sectionId) {
    contentSections.forEach(section => {
      section.style.display = 'none';
    });

    heroHeading.style.display = 'none';
    heroParagraph.style.display = 'none';
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    history.pushState(null, null, `${sectionId}`);
  }
function resetPage() {
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    heroSection.style.display = 'flex';
    heroHeading.style.display = 'flex';
    heroParagraph.style.display = 'flex';
}

document.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (!clickedElement.closest('.menu a')) {
        resetPage();
    }
});

const email1 = "contact";
const email2 = "jondao.com";

const emailFull = `${email1}@${email2}`;

const emailLink = document.getElementById("email-link");
emailLink.href = `mailto:${emailFull}`;

function toggleMobileMenu() {
    console.log("click is working");
    const menuContent = document.querySelector(".mobile-menu-content");
    
    if (menuContent.innerHTML === '') {
        const links = [
            { text: 'Writing', href: 'writing.html' },
            { text: 'Music', href: 'music.html' },
            { text: 'Projects', href: 'projects.html' },
            { text: 'About', href: 'about.html' }
        ];

        links.forEach(linkInfo => {
            const link = document.createElement('a');
            link.href = linkInfo.href;
            link.textContent = linkInfo.text;
            link.onclick = () => displaySection(linkInfo.text.toLowerCase());
            menuContent.appendChild(link);
        });
    } else {
        menuContent.innerHTML = '';
    }
    
    menuContent.classList.toggle("active");
}