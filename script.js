const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
const menuElement = document.getElementsByClassName('menu-option');
const navbarLi = document.querySelectorAll('#navbar li');
const featuredProject = document.getElementsByClassName('featured-work')[0];
const cardsContainer = document.getElementsByClassName('cards-container')[0];
const blurBg = [document.getElementById('headline'), document.getElementById('portfolio'), document.getElementById('about'), document.getElementById('contact'), document.getElementById('footer')];

const data = [
  {
    id: 'conferencePage',
    name: 'Conference Website',
    technologies: ['CSS', 'HTML', 'JavaScript', 'Bootstrap'],
    featuredImageCard: './img/conference-page.png',
    featuredImage: './img/conference-page.gif',
    description: 'A conference page for an important incoming event. This site contains all the information about the event and shows the user how to join the featured event. This app stands out for its responsiveness, clean layout, and professional design.',
    descriptionCard: 'A conference page for an important incoming event. This site contains all the information about the event and shows the user how to join the featured event. This app stands out for its responsiveness, clean layout, and professional design.',
    linkLive: 'https://helio3197.github.io/conference-page/',
    linkSource: 'https://github.com/helio3197/conference-page',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
  {
    id: 'projectOne',
    name: 'Profesional Art Printing Data',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImageCard: '',
    featuredImage: './img/img-modal.png',
    descriptionCard: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
];

function openMenu() {
  header.classList.add('mobile-menu', 'mobile-menu-animation');
  logo.style.display = 'none';
  menuIcon.classList.replace('menu-icon', 'menu-icon-close');
  closeMenuIcon.style.display = 'block';
  navbar.classList.replace('navbar', 'navbar-open');
  mobileNav.classList.add('mobile-menu-nav');
  setTimeout(() => {
    for (let i = 0; i < 3; i += 1) {
      menuElement[i].classList.add('menu-animation');
      navbarLi[i].classList.add('navbar-animation');
    }
  }, 1);
}

function closeMenu() {
  for (let i = 0; i < 3; i += 1) {
    menuElement[i].classList.remove('menu-animation');
    navbarLi[i].classList.remove('navbar-animation');
  }
  header.classList.remove('mobile-menu-animation');
  closeMenuIcon.style.display = 'none';
  setTimeout(() => {
    logo.style.display = 'block';
    menuIcon.classList.replace('menu-icon-close', 'menu-icon');
    navbar.classList.replace('navbar-open', 'navbar');
    mobileNav.classList.remove('mobile-menu-nav');
    header.classList.remove('mobile-menu');
  }, 350);
}

function openModalFunc(e) {
  const dataObj = data[+e.target.dataset.index];
  header.style.display = 'none';
  const div = document.createElement('div');
  div.className = 'popup-container';
  document.body.appendChild(div);
  const modalSection = document.getElementsByClassName('popup-container')[0];
  const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');
  const technologiesList = dataObj.technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('');

  function switchDesktopMobile(mediaQuery) {
    if (mediaQuery.matches) {
      modalSection.innerHTML = `
      <section id="modal-section" class="modal-section">
        <div class="headline-button-wrapper">
          <h1 class="title-modal">${dataObj.name}</h1>
          <button type="button" class="close-menu" id="close-modal"></button>
        </div>
        <ul class="tags tags-modal">
          ${technologiesList}
        </ul>
        <div class="img-paragraph-button-wrapper">
          <div class="featured-image-modal-wrapper">
            <img class="featured-image-modal" src=${dataObj.featuredImage} alt="featured image for the project">
          </div>
          <div class="paragraph-button-wrapper">
            <p class="description-modal">${dataObj.description}</p>
            <div class="buttons-modal">
              <a class="button" href=${dataObj.linkLive} target="_blank" rel="noreferrer noopener">See Live<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
              <a class="button" href=${dataObj.linkSource} target="_blank" rel="noreferrer noopener">See Source<i class="fab fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </section>`;
    } else {
      modalSection.innerHTML = `
      <section id="modal-section" class="modal-section">
        <div class="headline-button-wrapper">
          <h1 class="title-modal">${dataObj.name}</h1>
          <button type="button" class="close-menu" id="close-modal"></button>
        </div>
        <ul class="tags tags-modal">
          ${technologiesList}
        </ul>
        <div class="image-paragraph-wrapper">
          <img class="featured-image-modal" src=${dataObj.featuredImage} alt="featured image for the project">
          <p class="description-modal">${dataObj.description}</p>
        </div>
        <div class="buttons-modal">
          <a class="button" href=${dataObj.linkLive} target="_blank" rel="noreferrer noopener">See Live<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
          <a class="button" href=${dataObj.linkSource} target="_blank" rel="noreferrer noopener">See Source<i class="fab fa-github" aria-hidden="true"></i></a>
        </div>
      </section>`;
    }
  }

  mediaQueryDesktop.addEventListener('change', switchDesktopMobile);
  switchDesktopMobile(mediaQueryDesktop);

  function closeModalFunc() {
    const popupContainer = document.getElementsByClassName('popup-container')[0];
    popupContainer.remove();
    header.style.display = 'flex';
    blurBg.forEach((element) => element.classList.remove('blur'));
  }

  function modalClick(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

  const closeModalButton = document.getElementById('close-modal');
  const noCloseClickInside = document.getElementById('modal-section');
  const closeClickOutside = document.getElementsByClassName('popup-container')[0];

  closeModalButton.addEventListener('click', closeModalFunc, true);
  noCloseClickInside.addEventListener('click', modalClick);
  closeClickOutside.addEventListener('click', closeModalFunc);

  blurBg.forEach((element) => element.classList.add('blur'));
}

menuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);
menuElement[0].addEventListener('click', closeMenu, true);
menuElement[1].addEventListener('click', closeMenu, true);
menuElement[2].addEventListener('click', closeMenu, true);
/*
for (let i = 0; i < openModal.length; i += 1) {
  openModal[i].addEventListener('click', openModalFunc, true);
}
*/
featuredProject.id = `${data[0].id}`;
featuredProject.innerHTML = `
<div class="featured-img-wrapper">
  <img class="featured-img" src=${data[0].featuredImageCard} alt="featured-project"/>
</div>
<section class="featured-work-right-container">
  <h2>${data[0].name}</h2>
  <p>${data[0].descriptionCard}</p>
  <ul class="tags">
    ${data[0].technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('')}
  </ul>
  <button type="button" class="button open-modal" data-index="0">See Project</button>
</section>`;
const openModal = document.getElementsByClassName('open-modal')[0];
openModal.addEventListener('click', openModalFunc);

for (let i = 1; i < data.length; i += 1) {
  const section = document.createElement('section');
  section.className = 'card-works cards-animation';
  section.innerHTML = `
  <h2>${data[i].name}</h2>
  <p>${data[i].descriptionCard}</p>
  <ul class="tags">
  ${data[i].technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('')}
  </ul>
  <button type="button" class="button open-modal" data-index="${i}">See Project</button>`;
  section.querySelector('button').addEventListener('click', openModalFunc);
  cardsContainer.appendChild(section);
}

const form = document.getElementById('contact-form');
const {
  username,
  email,
  message,
} = form.elements;
const errorElmnt = document.getElementById('submit-error-message');
const errorMsg = 'Please enter a valid email address format';
const regEx = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/gm;

function showError(msg) {
  errorElmnt.textContent = msg;
  if (errorElmnt.className !== 'submit-error-message') errorElmnt.classList.toggle('submit-error-message');
  email.style.border = '1px solid red';
  email.style.padding = '14px 15px';
}

function emptyForm() {
  username.value = '';
  email.value = '';
  message.value = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regEx.test(email.value.trim())) {
    showError(errorMsg);
  } else {
    form.submit();
    localStorage.removeItem('form');
    emptyForm();
  }
});

function fillStorage() {
  const formObj = {
    username: username.value,
    email: email.value,
    message: message.value,
  };
  const formJSON = JSON.stringify(formObj);
  localStorage.setItem('form', formJSON);
}

function fillForm() {
  const formObj = JSON.parse(localStorage.getItem('form'));

  try {
    username.value = formObj.username;
    email.value = formObj.email;
    message.value = formObj.message;
  } catch {
    username.value = '';
    email.value = '';
    message.value = '';
  }
}

fillForm();

username.addEventListener('change', fillStorage);
email.addEventListener('change', fillStorage);
message.addEventListener('change', fillStorage);