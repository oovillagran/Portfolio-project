// PopUp Window Details

const popObjects = [
  {
    title: 'Tonic',
    subtitle: 'CANOPY',
    experience: ['Back End Dev', '2015'],
    image: 'images/pop/Portfolio5.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'css', 'javaScript', 'Ruby', 'Bootstrap'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popDetail1',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'FACEBOOK',
    experience: ['Full Stack Dev', '2015'],
    image: 'images/pop/Portfolio2.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    tech: ['html', 'Ruby on rails', 'css', 'javaScript'],
    seeLive: 'https://oovillagran.github.io/Portfolio-project/',
    seeSource: 'https://github.com/oovillagran',
    class: 'popDetail2',
  }
];

// hamburguer menu

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
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

  for (let i = 0; i < menuOption.length; i++) {
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
  for ( let i = 0; i < refTags.length; i++) {
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
  barDiv.style.marginTop = '46rem'
  barDiv.style.position = 'absolute';
});





// Pop Up Windows
// const popContainer = document.querySelector('.gridPop');

// popObjects.forEach((postData) => {
//   const card = document.createElement('div');
//   card.classList.add('card', postData.class);
//   card.style.backgroundImage = `url(${postData.image})`;
//   card.innerHTML = `
//     <div class="background_card">
//     <h2 class="title">${postData.title}</h2>
//     <p class="popDescription">${postData.description}</p>
//     <ul class="popUl">
//     <li class="popLi">${postData.tech[0]}</li>
//     <li class="popLi">${postData.tech[1]}</li>
//     <li class="popLi">${postData.tech[2]}</li>
//     </ul>
//     <button class="popButton">see project</button>
//     </div>
//   `;
//   popContainer.appendChild(card);
// });

// pop Up Window

const popUp = document.querySelector('.popUp');

popObjects.map((postData, index) => {
  const popDetail = document.createElement('div');
  popDetail.classList.add('popDetail', 'scroll');
  popDetail.setAttribute('id', postData.class);
  popDetail.innerHTML = `
    <div id="popInfo">
      <style>.popDetail:nth-child(${index +1}) .pImage {background-image: url(${postData.image}) !important;}</style>
      <div class="pmain">
        <h2 class="pop-title">${postData.title}</h2>
        <button type="button" class="xButton"></button>
      </div>
      <ul class="ul-popscreen">
        <li class="li-popscreen subtitle">${postData.subtitle}</li>
        <li class="li-popscreen sub_exp">${postData.experience[0]}</li>
        <li class="li-popscreen sub_exp">${postData.experience[1]}</li>
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
            <ul class="ul-popscreen">
              <li class="li-popscreen popscreen">${postData.tech[0]}</li>
              <li class="li-popscreen popscreen">${postData.tech[1]}</li>
              <li class="li-popscreen popscreen">${postData.tech[2]}</li>
              <li class="li-popscreen popscreen">${postData.tech[3]}</li>
              <li class="li-popscreen popscreen">${postData.tech[4]}</li>
            </ul>
          </div>
          <div class="pop_buttons_see">
            <a href="${postData.seeLive}" target="_blank" rel="noopener noreferrer" class="popSee">See live <img src="images/pop/See3.png" alt="Elipse Icon" id="popSee"></a>
            <a href="${postData.seeSource}" target="_blank" rel="noopener noreferrer" class="popSource">See source <img src="images/pop/Source.svg" alt="gitHub Icon"></a>
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
const seeButton = document.querySelector('.seeButton');
// const seeButton = document.querySelectorAll('.seeButton');
const xButton = document.querySelectorAll('.xButton');

xButton.forEach((index) => {
  index.addEventListener('click', () => {
    document.querySelector('.pop_div').classList.add('pop_X');
    setTimeout(() => {popSection.classList.remove('pop_active');},300);
    body.classList.remove('no-scroll');
  });
});

// See project Button

seeButton.addEventListener('click', () => {
  document.querySelector('.pop_div').classList.remove('pop_X');
  popSection.classList.add('pop_active');
  body.classList.add('no-scroll');
  
});
// const button = querySelectorAll('.seep')
// seeButton.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     document.querySelector('.pop_div').classList.remove('pop_X');
//     popSection.classList.add('pop_active');
//     body.classList.add('no-scroll');
//     const sectionId = `#card${index + 1}`;
//     const section = document.querySelector(sectionId);
//     section.scrollIntoView();
//   })
// });
