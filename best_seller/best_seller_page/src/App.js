import { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';



function App() {
  const [my_wish, setmy_wish] = useState(0);      // 장바구니에 담은 수
  const [userSelctName, setuserSelctName] = useState('CPU');
  const [userSelctMainProduct, setuserSelctMainProduct] = useState('Intel');


  // 주 메뉴, 서브 메뉴
  const itemList = [
    {
      prdocutName: 'CPU',
      Imgsrc: './images/cpu_img_mini.jpg',
      kind: [
        {
          subMenuName: 'Intel',
          subImgsrc: './images/intel_logo.png',
        },
        {
          subMenuName: 'AMD',
          subImgsrc: './images/AMD_logo.jpg',
        },],
    },

    {
      prdocutName: 'Mainboard',
      Imgsrc: './images/mainboard_img_mini.jpg',
      kind: [
        {
          subMenuName: 'Intel',
          subImgsrc: './images/intel_logo.png',
        },
        {
          subMenuName: 'AMD',
          subImgsrc: './images/AMD_logo.jpg',
        },],
      madeBy: ['ASRock', 'GIGABYTE', 'MSI', 'ASUS'],
    },

    {
      prdocutName: 'VGA',
      Imgsrc: './images/vga_img_mini.png',
      kind: [
        {
          subMenuName: 'NVIDIA',
          subImgsrc: './images/Nvidia_logo.png',
        },
        {
          subMenuName: 'AMD',
          subImgsrc: './images/AMD_logo.jpg',
        },],
      madeBy: ['NVIDIA', 'AMD'],
    },

    {
      prdocutName: 'Case',
      Imgsrc: './images/chase_img_mini.jpg',
      kind: [
        {
          subMenuName: 'ATX',
          subImgsrc: './images/logo_OG.png',
        },
        {
          subMenuName: 'M-ATX',
          subImgsrc: './images/logo_OG.png',
        },
        {
          subMenuName: 'RTX',
          subImgsrc: './images/logo_OG.png',
        },
        {
          subMenuName: 'Mini-ITX',
          subImgsrc: './images/logo_OG.png',
        },],
      madeBy: ['마이크로닉스', '앱코', 'darkFlash', '잘만', 'Fractal', '리안리'],
    },

    {
      prdocutName: 'SSD',
      Imgsrc: './images/ssd_img_mini_.jpg',
      kind: [
        {
          subMenuName: '512GB',
          subImgsrc: './images/logo_OG.png',
        },
        {
          subMenuName: '1TB',
          subImgsrc: './images/logo_OG.png',
        },],
      madeBy: ['SKhynix', 'Samsung',],
    },

    {
      prdocutName: 'RAM',
      Imgsrc: './images/ram_img_mini.jpg',
      kind: [
        {
          subMenuName: 'DDR4',
          subImgsrc: './images/logo_OG.png',
        },
        {
          subMenuName: 'DDR5',
          subImgsrc: './images/logo_OG.png',
        },],
      madeBy: ['GeIL', 'Samsung', 'TeamGroup', 'G.Skill', 'OLOy']
    },
  ]

  //  메인 상품 만들기
  const selectProduct = [{
    mainProductMade: 'Intel',
    mainProductName: [
      'intel 12th_I7 - 12700K.jpg',
      'intel 12th_I9 - 12900K.jpg',
      'intel 13th_I7 - 13700K.jpg',
      'intel 13th_I7 - 13900K.jpg',
    ],
    mainProdutImgSrc: [
      './images/intel_cpu/intel 12th_I7-12700K.jpg',
      './images/intel_cpu/intel 12th_I9-12900K.jpg',
      './images/intel_cpu/intel 13th_I7-13700K.jpg',
      './images/intel_cpu/intel13th_I9-13900K.jpg',
    ],
    mainProductDetail: [
      '인텔(소켓1700) / 10nm(인텔7) / 8+16코어 /16+16쓰레드 / 기본 클럭:3.0GHz / 최대 클럭:5.8GHz',
      '인텔(소켓1700) / 10nm(인텔7) / 8+8코어 / 16+8쓰레드 / 기본 클럭:3.4GHz / 최대 클럭:5.4GHz ',
      '인텔(소켓1700) / 10nm(인텔7) / 8+8코어 / 16+8쓰레드 / 기본 클럭:3.2GHz / 최대 클럭:5.2GHz ',
      '인텔(소켓1700) / 10nm(인텔7) / 8+4코어 / 16+4쓰레드 / 기본 클럭:3.6GHz / 최대 클럭:5.0GHz ',
    ],
    mainProductPrice: [
      "783,700원",
      "567,100원",
      "701,700원",
      "456,900원",
    ]
  },
  {
    mainProductMade: 'AMD',
    mainProductName: [
      'amd ryzen9 5th 7900x',
      'amd ryzen9 5th 7950x',
      'amd ryzen9 5th 7700x',
      'amd ryzen9 5th 7600x',
    ],
    mainProdutImgSrc: [
      './images/amd_cpu/amd_ryzen9-5th.jpg',
      './images/amd_cpu/amd_ryzen9-5th.jpg',
      './images/amd_cpu/amd_ryzen9-5th.jpg',
      './images/amd_cpu/amd_ryzen9-5th.jpg',
    ],
    mainProductDetail: [
      'AMD(소켓AM5) / 5세대(Zen4) / 5nm / 16코어 / 32쓰레드 / 기본 클럭: 4.5GHz / 최대 클럭: 5.7GHz / L3 캐시: 64MB',
      'AMD(소켓AM5) / 5세대(Zen4) / 5nm / 12코어 / 24쓰레드 / 기본 클럭: 4.7GHz / 최대 클럭: 5.6GHz / L3 캐시: 64MB',
      'AMD(소켓AM5) / 5세대(Zen4) / 5nm / 8코어 / 16쓰레드 / 기본 클럭: 4.5GHz / 최대 클럭: 5.4GHz / L3 캐시: 32MB ',
      'AMD(소켓AM5) / 5세대(Zen4) / 5nm / 6코어 / 12쓰레드 / 기본 클럭: 4.7GHz / 최대 클럭: 5.3GHz / L3 캐시: 32MB ',
    ],
    mainProductPrice: [
      "745,400원",
      "618,300원",
      "469,100원",
      "352,600원",
    ]
  }
  ]

  let detailMenu = new Array(4);
  function makeProductList() {
    if (userSelctMainProduct == 'Intel') {
      for (let i = 0; i < selectProduct[0].mainProductDetail.length; i++) {
        detailMenu[i] =
          <a href="#">
            <div>
              <div className='prductList_imgBox'>
                <img src={selectProduct[0].mainProdutImgSrc[i]} alt="이미지들어감" />
                <div className='btnContainer'>
                  <button className='wishBoxBtn'
                    onClick={() => {
                      setmy_wish(my_wish + 1)
                    }}>
                  </button>
                  <a href="./Product_Details_Page/product_details_page_test.html">
                    <button className='buyBoxBtn'>
                    </button>
                  </a>
                </div>
              </div>
              <strong>{selectProduct[0].mainProductName[i]}</strong>
              <span>{selectProduct[0].mainProductDetail[i]}</span>
              <span>{selectProduct[0].mainProductPrice[i]}</span>
            </div>
          </a >
      }

      return (
        <>
          {detailMenu}
        </>
      )
    } else if (userSelctMainProduct == 'AMD') {
      for (let i = 0; i < selectProduct[0].mainProductDetail.length; i++) {
        detailMenu[i] =
          <a href="#">
            <div>
              <div className='prductList_imgBox'>
                <img src={selectProduct[1].mainProdutImgSrc[i]} alt="이미지들어감" />
                <div className='btnContainer'>
                  <button className='wishBoxBtn'
                    onClick={() => {
                      setmy_wish(my_wish + 1)
                    }}>
                  </button>
                  <button className='buyBoxBtn'>
                  </button>
                </div>
              </div>
              <strong>{selectProduct[1].mainProductName[i]}</strong>
              <span>{selectProduct[1].mainProductDetail[i]}</span>
              <span>{selectProduct[1].mainProductPrice[i]}</span>
            </div>
          </a>
      }

      return (
        <>
          {detailMenu}
        </>
      )
    }
  }

  /*================================================= */
  /*                      구분선                        */
  /*================================================= */

  // clickEvent와 main Nav생성
  let eventObj;
  function checkClick(e) {
    e.preventDefault();

  }

  // test중인 함수
  function subMenuSet() {
    for (let i = 0; i < itemList.length; i++) {
      if (userSelctName === itemList[i].prdocutName) {
        const mainNavCnt = new Array(itemList[i].kind.length);

        for (let j = 0; j < itemList[i].kind.length; j++) {
          mainNavCnt[j] =
            <li>
              <a href="#" onClick={() => {
                setuserSelctMainProduct(itemList[i].kind[j].subMenuName);
              }}>
                <div>{itemList[i].kind[j].subMenuName}</div>
                <img src={itemList[i].kind[j].subImgsrc} alt={itemList[i].kind[j].subMenuName} />
              </a>
            </li>
        }

        return (
          <>
            {mainNavCnt}
          </>
        )
      }
    }
  }

  /*================================================= */

  return (
    <>
      <main className="main_container">
        <aside className="wishList">
          <div>
            <span>{my_wish}</span>
          </div>
        </aside>

        <section>
          <div className='productListContainer'>
            <div className='productNav'>
              <ul onClick={checkClick}>
                {subMenuSet()}
              </ul>
            </div>
            <div className='productList'>
              {makeProductList()}
            </div>



          </div>
        </section>

        <aside className="sideNavContainer">
          <nav>
            <ul onClick={checkClick}>
              {
                itemList.map(item => {
                  return <li>
                    <a href="#" onClick={() => {
                      setuserSelctName(item.prdocutName);
                    }}>
                      <div>{item.prdocutName}</div>
                      <img src={item.Imgsrc} alt={item.prdocutName} />
                    </a>
                  </li>
                })
              }
            </ul>
          </nav>
        </aside>

      </main>
    </>
  );
}

export default App;
