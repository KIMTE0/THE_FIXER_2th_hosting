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