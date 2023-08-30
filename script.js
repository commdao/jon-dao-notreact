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
    menuContent.classList.toggle("active");
}