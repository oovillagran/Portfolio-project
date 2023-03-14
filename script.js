// const hamburguerMenuIcon = document.querySelector('.three-bar-menu');
// const header = document.querySelector('header');
// const backing = document.querySelector('.backing')
// const body = document.querySelector('body');
// const popUpMenuDiv = document.createElement('div');
// const unorderedList = document.createElement('ul');
// const headerBar = document.querySelector('.header-bar');
// const mainSection = document.querySelector('.main-section');
// const crossIcon = document.createElement('a');
// const titlesOfMenu = ['Portfolio', 'About', 'Contact'];
// const anchorIds = ['#main-img', '#about-section-1', '#form-footer'];

// hamburguerMenuIcon.addEventListener('click', () => {
//   crossIcon.innerText = 'X';
//   crossIcon.classList.add('crossIcon');
//   popUpMenuDiv.appendChild(crossIcon);

//   popUpMenuDiv.style.fontWeight = '600';
//   popUpMenuDiv.style.fontSize = '32px';
//   popUpMenuDiv.style.display = 'flex';
//   popUpMenuDiv.style.padding = '1rem -10rem';
//   popUpMenuDiv.style.zIndex = '100';
//   popUpMenuDiv.style.position = 'absolute';
//   popUpMenuDiv.style.width = '100%';
//   popUpMenuDiv.style.height = '100vh';
//   popUpMenuDiv.style.backgroundColor = '#6070ff';
//   popUpMenuDiv.style.mixBlendMode = 'multiply';
//   headerBar.style.filter = 'blur(6px)';
//   mainSection.style.filter = 'blur(6px)';

//   body.insertBefore(popUpMenuDiv, backing);

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const backing = document.querySelector('.backing')
const body = document.querySelector ('body');
const popDiv = document.createElement('div');
const uList = document.createElement('ul');
const headerMenu = document.querySelector('.header-main');
const mSection = document.querySelector('.main');
const xOption = document.createElement('a');
const menuOption = ['Portfolio', 'About', 'Contact'];
const refElements = ['#portfolio', '#aboutme', '#contact']

hamburger.addEventListener('click', () => {
  xOption.innerText = 'X';
  xOption.classList.add('xOption');
  popDiv.appendChild(xOption);

  popDiv.style.display = 'flex';
  popDiv.style.position = 'absolute';
  popDiv.style.fontSize = '2rem';
  popDiv.style.fontWeight = '600';
  popDiv.style.lineHeight = '2.75rem';
  popDiv.style.padding = '5rem 2rem';
  popDiv.style.zIndex = '1000';
  popDiv.style.width = '100%';
  popDiv.style.minHeight = '100vh';
  popDiv.style.mixBlendMode = 'multiply';
  popDiv.style.backgroundColor = '#6070FF';
  popDiv.style.position = "absolute";
  uList.style.listStyleType = "none";
  headerMenu.style.filter = 'blur(6px)';
  mSection.style.filter = 'blur(6px)';
    
  body.insertBefore(popDiv, backing);
  popDiv.appendChild(uList);

  for (let i = 0; i < menuOption.length; i++) {
    const listElement = document.createElement('li');
    const listRef = document.createElement('a');
    listRef.href = refElements[i];
    listRef.style.color = '#fff';
    listRef.style.textAlign = 'left'
    uList.appendChild(listElement);
    listElement.appendChild(listRef);
    listRef.innerText = menuOption[i];
  }

  const xOptionClass = document.querySelector('.xOption');
  xOptionClass.addEventListener('click', () => {
    window.location.reload();
  })

  const refTags = document.querySelectorAll ('body header div ul li a');
  for ( let i = 0; i < refTags.length; i++){
    refTags[i].classList.add(`refTags${i}`);
  }

  const refTags0 = document.querySelector ('refTags0');
  refTags0.addEventListener('click', () => {
    window.location.reload();
  });

  const refTags1 = document.querySelector ('refTags1');
  refTags1.addEventListener('click', () => {
    window.location.reload();
  });

  const refTags2 = document.querySelector ('refTags2');
  refTags2.addEventListener('click', () => {
    window.location.reload();
  });

});
