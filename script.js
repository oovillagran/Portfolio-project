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
