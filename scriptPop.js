const popObjects = [
    {
      title: 'Tonic',
      subtitle: 'CANOPY',
      experience: ['Back End Dev', '2015'],
      image: 'images/pop/Portfolio5.svg',
      description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
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
      description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
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

  