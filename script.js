// PopUp Object

const popObjects = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    experience: ['Back End Dev', '2015'],
    image: './images/pop/Portfolio5.svg',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'css', 'javaScript', 'Ruby', 'Bootstrap'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popCard1',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    experience: ['Full Stack Dev', '2015'],
    image: './images/pop/Portfolio4.svg',
    description1: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'Ruby on rails', 'css', 'javaScript'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popCard2',
  },
  {
    title: 'Facebook 360',
    subtitle: 'FACEBOOK',
    experience: ['Full Stack Dev', '2015'],
    image: './images/pop/Portfolio1.svg',
    description1: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'Ruby on rails', 'css', 'javaScript'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popCard3',
  },
  {
    title: 'Uber Navigation',
    subtitle: 'Uber',
    experience: ['Lead Developer', '2018'],
    image: './images/pop/Portfolio2.png',
    description1: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'Ruby on rails', 'css', 'javaScript'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popCard4',
  },
];

// hamburguer menu

const hamburger = document.querySelector('.hamburger');
const backing = document.querySelector('.backing');
const body = document.querySelector('body');
const popDiv = document.createElement('div');
const uList = document.createElement('ul');
const headerMenu = document.querySelector('.header-main');
const mSection = document.querySelector('.main');
const xOption = document.createElement('a');
const menuOption = ['Portfolio', 'About', 'Contact'];
const refElements = ['#portfolio', '#aboutme', '#contact'];
const barDiv = document.createElement('div');

hamburger.addEventListener('click', () => {
  xOption.innerText = 'x';
  xOption.classList.add('xOption');
  popDiv.appendChild(xOption);

  popDiv.style.display = 'flex';
  popDiv.style.position = 'absolute';
  popDiv.style.fontSize = '2rem';
  popDiv.style.fontWeight = '600';
  popDiv.style.lineHeight = '4rem';
  popDiv.style.padding = '5rem 0rem';
  popDiv.style.zIndex = '100';
  popDiv.style.width = '100%';
  popDiv.style.minHeight = '100vh';
  popDiv.style.opacity = '0.8';
  popDiv.style.backgroundColor = '#6070FF';
  uList.style.listStyleType = 'none';
  headerMenu.style.filter = 'blur(6px)';
  mSection.style.filter = 'blur(6px)';
  body.style.overflow = 'hidden';
  body.insertBefore(popDiv, backing);
  popDiv.appendChild(uList);

  for (let i = 0; i < menuOption.length; i += 1) {
    const listElement = document.createElement('li');
    const listRef = document.createElement('a');
    listRef.href = refElements[i];
    listRef.style.color = '#fff';
    listRef.style.textAlign = 'left';
    uList.appendChild(listElement);
    listElement.appendChild(listRef);
    listRef.innerText = menuOption[i];
  }

  const xOptionClass = document.querySelector('.xOption');
  xOptionClass.addEventListener('click', () => {
    window.location.reload();
  });

  const refTags = document.querySelectorAll('body div ul li a');
  for (let i = 0; i < refTags.length; i += 1) {
    refTags[i].classList.add(`refTags${i}`);
  }

  const refTags0 = document.querySelector('.refTags0');
  refTags0.addEventListener('click', () => {
    window.location.reload();
  });

  const refTags1 = document.querySelector('.refTags1');
  refTags1.addEventListener('click', () => {
    window.location.reload();
  });

  const refTags2 = document.querySelector('.refTags2');
  refTags2.addEventListener('click', () => {
    window.location.reload();
  });

  popDiv.appendChild(barDiv);

  barDiv.style.width = '30%';
  barDiv.style.height = '0.5rem';
  barDiv.style.background = '#000';
  barDiv.style.marginLeft = '35%';
  barDiv.style.marginTop = '46rem';
  barDiv.style.position = 'absolute';
});

// Dinamic cards

// Pop Up Windows
const popContainer = document.querySelector('.gridPop');

popObjects.forEach((postData) => {
  const card = document.createElement('div');
  card.classList.add('card', postData.class);
  card.innerHTML = `
    <div class="background_card">
        
      <div class="pop_mainView_card">
      <img class="modal-card__img" src="${postData.image}" alt="" />
      </div>
      
      <div class="text_desc_card">
        <h2 class="title_card">${postData.title}</h2>
        <ul class="ul-popscreen card_experience">
          <li class="li-popscreen subtitle_card">${postData.subtitle}</li>
          <li class="li-popscreen sub_exp">${postData.experience[0]}</li>
          <li class="li-popscreen sub_exp">${postData.experience[1]}</li>
        </ul>
      
        <p class="popDescription">${postData.description1}</p>
        <ul class="popUl_card popUlCards">
          <li class="popLi popscreen">${postData.tech[0]}</li>
          <li class="popLi popscreen">${postData.tech[1]}</li>
          <li class="popLi popscreen">${postData.tech[2]}</li>
        </ul>
        <button class="popButton">See Project</button>
      </div>
    </div>
  `;
  popContainer.appendChild(card);
});

// pop Up Window

const popUp = document.querySelector('.popUp');

popObjects.map((postData, index) => {
  const popDetail = document.createElement('div');
  popDetail.classList.add('popDetail', 'scroll');
  popDetail.setAttribute('id', postData.class);
  popDetail.innerHTML = `
    <div id="popInfo">
      <style>.popDetail:nth-child(${index + 1}) .pImage {background-image: url(${postData.image}) !important;}</style>
      <div class="pmain">
        <h2 class="pop-title">${postData.title}</h2>
        <button type="button" class="xButton"></button>
      </div>
      <ul class="ul-popscreen ulpopscreen">
        <li class="li-popscreen subtitle">${postData.subtitle}</li>
        <li class="li-popscreen sub_exp">${postData.experience[0]}</li>
        <li class="li-popscreen sub_exp subyear">${postData.experience[1]}</li>
      </ul>
      <div class="pop_mainView">
        <div class="pImage">
        </div>
        
      </div>
      <div class="popupconteiner">
        <div class="popUpParagraph">
          <p class="pop_paragraph">${postData.description}</p>
        </div>
        <div class="popFooterFlex">
          <div class="popTechs">
            <ul class="ul-popscreen ulpopscreen">
              <li class="li-popscreen popscreen">${postData.tech[0]}</li>
              <li class="li-popscreen popscreen">${postData.tech[1]}</li>
              <li class="li-popscreen popscreen">${postData.tech[2]}</li>
              <li class="li-popscreen popscreen">${postData.tech[3]}</li>
              <li class="li-popscreen popscreen">${postData.tech[4]}</li>
            </ul>
          </div>
          <div class="pop_buttons_see">
            <a href="${postData.seeLive}" target="_blank" rel="noopener noreferrer" class="popSee">See live <img src="images/pop/See3.png" alt="Elipse Icon" id="popSee"></a>
            <a href="${postData.seeSource}" target="_blank" rel="noopener noreferrer" class="popSource">See source <img src="images/pop/Source.svg" alt="gitHub Icon" id="popSource"></a>
          </div>
        </div>
      </div>
    </div>
    `;
  popUp.appendChild(popDetail);
  return popDetail;
});

// buttons

const popSection = document.querySelector('.pop_section');
const sButton = document.querySelectorAll('.popButton');
const xButton = document.querySelectorAll('.xButton');

xButton.forEach((index) => {
  index.addEventListener('click', () => {
    document.querySelector('.pop_div').classList.add('pop_X');
    setTimeout(() => { popSection.classList.remove('pop_active'); }, 300);
    body.classList.remove('no-scroll');
  });
});

// See project Button

sButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.pop_div').classList.remove('pop_X');
    popSection.classList.add('pop_active');
    body.classList.add('no-scroll');
    const sectionId = `#popCard${index + 1}`;
    const section = document.querySelector(sectionId);
    section.scrollIntoView();
  });
});
