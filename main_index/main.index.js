//======================= 검색창

const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const searchTxt = document.querySelector('.search-txt');

let Expand = false;

searchBtn.addEventListener('click', () => {
  if (!Expand) {
    searchBox.classList.add('search-box-expanded');
    searchTxt.style.width = '240px';
    Expand = true;
    searchBox.focus();

  } else {
    searchBox.classList.remove('search-box-expanded');
    searchTxt.style.width = '0px';
    Expand = false;
  }
});

document.addEventListener('click', (event) => {
  if (Expand && !searchBox.contains(event.target)) {
    searchBox.classList.remove('search-box-expanded');
    searchTxt.style.width = '0px';
    Expand = false;
  }
});


//=========================슬라이드 
const prevBtn = document.querySelector('.button.left');
const nextBtn = document.querySelector('.button.right');
const slideList = document.querySelector('.slidelist');
const slideItems = document.querySelectorAll('.slidelist > li');
const totalSlides = slideItems.length;
let currentIndex = 0;
let lastClickTime = 0;
const delay = 500;
let slideInterval;

// 슬라이드 이동 함수
const moveToSlide = (index) => {
  currentIndex = index;
  slideList.style.transform = `translateX(-${index * 100}%)`;

  // 선택된 버튼 보여주기
  const buttonList = document.querySelectorAll('.buttonlist a');
  for (let i = 0; i < buttonList.length; i++) {
    const button = buttonList[i];
    if (i === currentIndex) {
      button.style.opacity = 1;
    } else {
      button.style.opacity = 0.4;
    }
  }
};

// 다음 슬라이드 함수
const nextSlide = () => {
  if (new Date() - lastClickTime > delay) {
    lastClickTime = new Date();
    currentIndex === totalSlides - 1 ? moveToSlide(0) : moveToSlide(currentIndex + 1);
  }
};

// 이전 슬라이드 함수
const prevSlide = () => {
  if (new Date() - lastClickTime > delay) {
    lastClickTime = new Date();
    currentIndex === 0 ? moveToSlide(totalSlides - 1) : moveToSlide(currentIndex - 1);
  }
};

// 이전/다음 버튼 이벤트 추가
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// 하단 슬라이드 버튼 생성
const buttonList = document.querySelector('.buttonlist');
for (let i = 0; i < totalSlides; i++) {
  const button = document.createElement('a');
  button.classList.add('buttons');
  button.href = '#';
  button.textContent = i + 1;

  // 첫 번째 버튼은 선택된 상태로 보이게 함
  if (i === 0) {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0.4;
  }

  // 버튼 클릭 이벤트 추가
  button.addEventListener('click', () => {
    if (new Date() - lastClickTime > delay) {
      lastClickTime = new Date();
      moveToSlide(i);
    }
  });
  buttonList.appendChild(button);
}

// 자동 슬라이드 함수
const startSlideInterval = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 2500);
};

// 마우스가 슬라이드 컨테이너 위에 있으면 자동 슬라이드 중지
slideList.addEventListener('mouseover', () => {
  clearInterval(slideInterval);
});

// 마우스가 슬라이드 컨테이너에서 벗어나면 자동 슬라이드 재개
slideList.addEventListener('mouseout', () => {
  startSlideInterval();
});

// 자동 슬라이드 인터벌 시작
startSlideInterval();


//중간 슬라이드 배너 =====================================

// 변수 선언
const slides = document.querySelectorAll('.img_slide_list ul li');
const slideContainer = document.querySelector('.img_slide_list ul');
const slideWidth = slides[0].clientWidth;
const prevButton = document.querySelector('.left_arrow');
const nextButton = document.querySelector('.right_arrow');
let slideIndex = 0;
let isMoving = false;
const DELAYTIME = 500; // 딜레이 시간 
let slideTimer;

// 슬라이드 이동 함수
function moveSlide() {
  if (isMoving) return; // 슬라이드가 이동 중이면 함수 호출 무시
  isMoving = true;
  slideContainer.style.transition = 'transform 0.5s ease-in-out';
  slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  setTimeout(() => {
    isMoving = false;
  }, DELAYTIME); // 딜레이 시간 이후 isMoving 플래그 리셋
}

// 슬라이드 인덱스 업데이트 함수
function updateSlideIndex() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
}

// 자동 슬라이드 함수
function startSlideTimer() {
  slideTimer = setInterval(() => {
    updateSlideIndex();
    moveSlide();
  }, 3000);
}

function stopSlideTimer() {
  clearInterval(slideTimer);
}

// 이전 버튼 클릭 이벤트 리스너
prevButton.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 동작 방지
  if (!isMoving) {
    slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    moveSlide();
  }
});

// 다음 버튼 클릭 이벤트 리스너
nextButton.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 동작 방지
  if (!isMoving) {
    slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    moveSlide();
  }
});

// 자동 슬라이드 시작
startSlideTimer();

const middleSectionMiddle = document.querySelector('.middle_section_middle');

// 마우스가 슬라이드 컨테이너 위에 있으면 자동 슬라이드 정지
middleSectionMiddle.addEventListener('mouseover', () => {
  stopSlideTimer();
});

// 마우스가 슬라이드 컨테이너 밖으로 나가면 자동 슬라이드 다시 시작
middleSectionMiddle.addEventListener('mouseout', () => {
  startSlideTimer();
});


//===================햄버거

const dropdown = document.querySelector('.dropdown');
// 드롭다운 메뉴 체크박스를 선택
const checkbox = dropdown.querySelector('input[type="checkbox"]');
const hamburgerButton = dropdown.querySelector('.dropbtn');
const burgerxLabel = dropdown.querySelector('.burgerx');
const dropdownContent = dropdown.querySelector('.dropdown-content');

function showDropdown() {
  dropdown.classList.add('active'); // 드롭다운 메뉴를 보이게.
  hamburgerButton.classList.add('active'); // 햄버거 버튼을 활성화
  burgerxLabel.classList.add('active'); // X 버튼을 활성화
  checkbox.checked = true; // 체크박스를 선택 상태로 변경
}

function hideDropdown() {
  dropdown.classList.remove('active'); // 드롭다운 메뉴를 숨김
  hamburgerButton.classList.remove('active'); // 햄버거 버튼을 비활성화
  burgerxLabel.classList.remove('active'); // X 버튼을 비활성화
  checkbox.checked = false; // 체크박스를 선택되지 않은 상태로 변경
}

function toggleDropdown() {
  // 드롭다운 메뉴가 열려있으면 닫고, 닫혀있으면 열기.
  dropdown.classList.contains('active') ? hideDropdown() : showDropdown();
}

// 드롭다운 메뉴를 클릭했을 때 토글 메소드를 호출
dropdown.addEventListener('click', toggleDropdown);
checkbox.addEventListener('click', toggleDropdown);

// 다른 곳을 클릭했을 때 드롭다운 메뉴를 숨기기
document.addEventListener('click', (event) =>
  !event.target.closest('.dropdown') && hideDropdown()
);

// 드롭다운 메뉴의 링크를 클릭했을 때 드롭다운 메뉴를 숨기기
dropdownContent.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', hideDropdown)
);

/*========================용도별 추천 ====================== */

const gameLinks = document.querySelectorAll('.gameName span a');
const gameNameLinks = document.querySelectorAll('.gameName a');

const games = [{
  name: '리그오브레전드',
  bgImage: 'league.jpg',
  specs: [{
    imgSrc: './image/computer_img1.png',
    title: 'THE.FIXER-특가 제품-BEST-1',
    subtitle: 'AMD 라이젠 PRO4 4600G',
    price: '330,000원'
  },

  {
    imgSrc: './image/computer_img8.png',
    title: 'AMD 라이젠5 4세대 5600G',
    subtitle: 'AMD Ryzen 5 4th Gen 5600G',
    price: '378,000원'
  },
  {
    imgSrc: './image/computer_img3.png',
    title: 'THE.FIXER-특가 제품-BEST-2',
    subtitle: 'i3 12100F + RX6500XT',
    price: '634,800원'
  }]
},
{
  name: '배틀그라운드',
  bgImage: 'battle.jpg',
  specs: [
    {
      imgSrc: './image/computer_img4.png',
      title: 'THE.FIXER-특가 제품-BEST-4',
      subtitle: 'Intel i5 11400F + RX6700XT',
      price: '1,412,500원'
    },
    {
      imgSrc: './image/computer_img5.png',
      title: '인텔 12세대 12100 사무용PC ',
      subtitle: 'Intel i3 12100',
      price: '381,500원'
    },
    {
      imgSrc: './image/computer_img6.png',
      title: 'THE.FIXER-특가 제품-BEST-3',
      subtitle: 'Intel pentium 6405',
      price: '283,900원'
    }
  ]
},
{
  name: '발로란트',
  bgImage: 'valo.jpg',
  specs: [
    {
      imgSrc: './image/computer_img7.png',
      title: 'THE.FIXER-특가 제품-BEST-5',
      subtitle: 'AMD Ryzen 5 4th Gen 5600G',
      price: '705,900원'
    },
    {
      imgSrc: './image/computer_img8.png',
      title: 'THE.FIXER-특가 제품-BEST-6',
      subtitle: 'i3 12100F + RX5500XT',
      price: '545,100원'
    },
    {
      imgSrc: './image/computer_img9.png',
      title: 'AMD 라이젠 5 4세대 5700G',
      subtitle: 'Ryzen Cezanne 5700G',
      price: '545,100원'
    }
  ]
},
{
  name: '피파온라인',
  bgImage: 'fifa.jpg',
  specs: [
    {
      imgSrc: './image/computer_img10.png',
      title: 'THE.FIXER-특가 제품-BEST-8',
      subtitle: 'Intel i5 11400F + RTX3060',
      price: '1,355,400원'
    },
    {
      imgSrc: './image/computer_img11.png',
      title: 'AMD 라이젠 5 4세대 5600G',
      subtitle: 'AMD Ryzen 5 4th Gen 5600G',
      price: '626,000원'
    },
    {
      imgSrc: './image/computer_img12.png',
      title: 'THE.FIXER-특가 제품-BEST-7',
      subtitle: 'i3 12100F + RX6700XT',
      price: '1,369,500원'
    }
  ]
},
{
  name: '로스트아크',
  bgImage: 'lost.jpg',
  specs: [
    {
      imgSrc: './image/computer_img13.png',
      title: 'THE.FIXER-특가 제품-BEST-9',
      subtitle: 'i3 12100F + RX6700XT',
      price: '1,464,800원'
    },
    {
      imgSrc: './image/computer_img14.png',
      title: 'AMD 라이젠 5 4세대 5600G',
      subtitle: 'AMD Ryzen 5 4th Gen 5600G',
      price: '716,000원'
    },
    {
      imgSrc: './image/computer_img15.png',
      title: 'THE.FIXER-특가 제품-BEST-10',
      subtitle: 'AMD Ryzen 5 4th Gen 5600G',
      price: '817,000원'
    }
  ]
}
];

for (let i = 0; i < gameNameLinks.length; i++) {
  const gameNameLink = gameNameLinks[i];
  gameNameLink.addEventListener('click', (e) => {
    e.preventDefault();
    const gameName = gameNameLink.textContent.trim();
    let bgImage = '';
    let currentGame = games.find(game => game.name === gameName);
    if (currentGame) {
      bgImage = currentGame.bgImage;
      const specs = currentGame.specs;

      const imagePath = './image/';
      const newImage = imagePath + bgImage;
      const cases = document.querySelectorAll('.case');

      for (let j = 0; j < specs.length; j++) {
        const spec = cases[j].parentNode.parentNode;
        const img = cases[j].querySelector('img');
        img.src = specs[j].imgSrc;
        spec.style.backgroundImage = 'url(' + newImage + ')';
        const specTexts = cases[j].querySelectorAll('.spectext');
        specTexts[0].textContent = specs[j].title;
        specTexts[1].textContent = specs[j].subtitle;
        specTexts[2].textContent = specs[j].price;
      }
    }
  });
}

//=====================사무용===================

const computerNameLinks = document.querySelectorAll('.gm2 a');
const computerCases = document.querySelectorAll('.case');

const computerSpecs = [
  {
    name: '사무용',
    bgImage: 'office2.jpg',
    specs: [
      {
        imgSrc: './image/computer_img1.png',
        title: 'THE.FIXER-특별 추천-BEST-3 ',
        subtitle: 'Intel Pentium 6405',
        price: '283,900원'
      },
      {
        imgSrc: './image/computer_img3.png',
        title: '인텔 12세대 12100 PC',
        subtitle: 'Intel i3 12100',
        price: '381,500원'
      },
      {
        imgSrc: './image/computer_img2.png',
        title: 'THE.FIXER-특가 제품-BEST-4',
        subtitle: 'Intel i5 11400F + RX6700XT',
        price: '1,412,500원'
      }
    ]
  },
  {
    name: '디자인',
    bgImage: 'design.png',
    specs: [
      {
        imgSrc: './image/computer_img3.png',
        title: 'AMD 라이젠5 4세대 5700G',
        subtitle: 'Ryzen Cezanne 5700G',
        price: '545,100원'
      },
      {
        imgSrc: './image/computer_img6.png',
        title: 'THE.FIXER-특가 제품-BEST-2',
        subtitle: 'i3 12100F + RX6500XT',
        price: '634,800원'
      },
      {
        imgSrc: './image/computer_img4.png',
        title: 'THE.FIXER-특가 제품-BEST-5',
        subtitle: 'Intel i5 11400F + RX6700XT',
        price: '1,412,500원'
      }
    ]
  },
  {
    name: '영상편집',
    bgImage: 'video.jpg',
    specs: [
      {
        imgSrc: './image/computer_img7.png',
        title: 'THE.FIXER-특가 제품-BEST-6',
        subtitle: 'i3 12100F + RX5500XT',
        price: '545,100원'
      },
      {
        imgSrc: './image/computer_img9.png',
        title: 'THE.FIXER-특가 제품-BEST-7',
        subtitle: 'AMD Ryzen 5 4th Gen 5700G',
        price: '545,100원'
      },
      {
        imgSrc: './image/computer_img8.png',
        title: 'THE.FIXER-특가 제품-BEST-8',
        subtitle: 'Intel i5 11400F + RTX3060',
        price: '1,355,400원'
      }
    ]
  },
  {
    name: '인터넷방송',
    bgImage: 'youtube.png',
    specs: [
      {
        imgSrc: './image/computer_img10.png',
        title: 'THE.FIXER-특가 제품-BEST-9',
        subtitle: 'i3 12100F + RX6700XT',
        price: '1,464,800원'
      },
      {
        imgSrc: './image/computer_img3.png',
        title: 'AMD 라이젠5 4세대 5700G ',
        subtitle: 'Ryzen Cezanne 5700G',
        price: '545,100원'
      },
      {
        imgSrc: './image/computer_img14.png',
        title: 'AMD 라이젠 5 4세대 5600G',
        subtitle: 'AMD Ryzen 5 4th Gen 5600G',
        price: '716,000원'
      }
    ]
  }
];

const spec2 = document.querySelector('.spec2');

for (let i = 0; i < computerNameLinks.length; i++) {
  const computerNameLink = computerNameLinks[i];
  computerNameLink.addEventListener('click', (e) => {
    e.preventDefault();
    const computerName = computerNameLink.textContent.trim();
    let bgImage = '';
    let currentComputer = computerSpecs.find(computer => computer.name === computerName);
    if (currentComputer) {
      bgImage = currentComputer.bgImage;
      const specs = currentComputer.specs;
      const imagePath = './image/';
      const newImage = imagePath + bgImage;

      const spec2Cases = document.querySelectorAll('.spec2 .case');
      for (let j = 0; j < specs.length; j++) {
        const specTexts = spec2Cases[j].querySelectorAll('.spectext');
        const img = spec2Cases[j].querySelector('img');
        img.src = specs[j].imgSrc;
        specTexts[0].textContent = specs[j].title;
        specTexts[1].textContent = specs[j].subtitle;
        specTexts[2].textContent = specs[j].price;
      }
      spec2.style.backgroundImage = 'url(' + newImage + ')';
    }
  });
}






