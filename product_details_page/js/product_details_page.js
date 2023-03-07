'use strict';

const maincontent = document.getElementById(`main`);
const goodsname = maincontent.querySelector(`.goods_name`);
const goodsExplainImgbox = maincontent.querySelector(`.goods_explain_imgbox`);
const optionnumbers = maincontent.querySelector(`.option_numbers`)
const btn_minus = maincontent.querySelector(`.numbers_minus`);
const btn_plus = maincontent.querySelector(`.numbers_plus`);
const totalprice = maincontent.querySelector(`.sumTotalPrice`);
const detailPrice = maincontent.querySelector(`.detailPrice`);
const madeBy = maincontent.querySelector(`.madeBy`);
const detailBtn = maincontent.querySelector(`#detail_btn`);
const informationImg = maincontent.querySelector(`.informatin_imgbox`);
const detailImg = maincontent.querySelector(`.goods_detail_explain`);

const cpu_Intel = [
    // ['제품명', '상세설명', '가격', '제조사' ]
    ['intel 13th I9 13900k', `인텔(소켓1700) / 10nm(인텔7) / 8+16코어 /16+16쓰레드 / 기본 클럭:3.0GHz / 최대 클럭:5.8GHz / L3 캐시:36MB / PBP/MTP:125~253W / PCIe5.0, 4.0/ 메모리 규격:DDR5, DDR4 / 5600, 3200MHz / 내장그래픽:탑재 / 인텔 UHD 770 / 기술지원:하이퍼스레딩 / 쿨러:미포함`, `783700`, 'intel'],
    ['intel 13th I7 13700k', `인텔(소켓1700) / 10nm(인텔7) / 8+8코어 / 16+8쓰레드 / 기본 클럭:3.4GHz / 최대 클럭:5.4GHz / L3 캐시:30MB / PBP/MTP:125~253W / PCIe5.0, 4.0 / 메모리 규격:DDR5, DDR4 / 5600, 3200MHz / 내장그래픽:탑재 / 인텔 UHD 770 / 기술 지원:하이퍼스레딩 / 쿨러:미포함`, `567100`, 'intel'],
    ['intel 12th I9 12900k', `인텔(소켓1700) / 10nm(인텔7) / 8+8코어 / 16+8쓰레드 / 기본 클럭:3.2GHz / 최대 클럭:5.2GHz / L3 캐시:30MB / TDP:125~241W / PCIe5.0, 4.0 / 메모리 규격: DDR5, DDR4 / 4800, 3200MHz / 내장그래픽:탑재 / 인텔 UHD 770 / 기술 지원:하이퍼스레딩,옵테인 / 쿨러:미포함`, `701700`, 'intel'],
    ['intel 12th I7 12700kf', `인텔(소켓1700) / 10nm(인텔7) / 8+4코어 / 16+4쓰레드 / 기본 클럭:3.6GHz / 최대 클럭:5.0GHz / L3 캐시:25MB / TDP:125~190W / PCIe5.0, 4.0 / 메모리 규격:DDR5, DDR4 / 4800, 3200MHz / 내장그래픽:탑재 / 인텔 UHD 770 / 기술 지원:하이퍼스레딩,옵테인 / 쿨러:미포함`, `456900`, 'intel'],
];

const cpu_amd = [
    ['amd ryzen9 5th 7950x', `AMD(소켓AM5) / 5세대(Zen4) / 5nm / 16코어 / 32쓰레드 / 기본 클럭: 4.5GHz / 최대 클럭: 5.7GHz / L3 캐시: 64MB / TDP: 170W / PCIe5.0 / 메모리 규격: DDR5 / 5200MHz /내장그래픽: 탑재 / AMD 라데온 그래픽 / 쿨러: 미포함`, '745400', 'AMD'],
    ['amd ryzen9 5th 7900x', `AMD(소켓AM5) / 5세대(Zen4) / 5nm / 12코어 / 24쓰레드 / 기본 클럭: 4.7GHz / 최대 클럭: 5.6GHz / L3 캐시: 64MB / TDP: 170W / PCIe5.0 / 메모리 규격: DDR5 / 5200MHz / 내장그래픽: 탑재 / AMD 라데온 그래픽 / 쿨러: 미포함`, '618300', 'AMD'],
    ['amd ryzen9 5th 7700x', `AMD(소켓AM5) / 5세대(Zen4) / 5nm / 8코어 / 16쓰레드 / 기본 클럭: 4.5GHz / 최대 클럭: 5.4GHz / L3 캐시: 32MB / TDP: 105W / PCIe5.0 / 메모리 규격: DDR5 / 5200MHz / 내장그래픽: 탑재 / AMD 라데온 그래픽 / 쿨러: 미포함`, '469100', 'AMD'],
    ['amd ryzen9 5th 7600x', `AMD(소켓AM5) / 5세대(Zen4) / 5nm / 6코어 / 12쓰레드 / 기본 클럭: 4.7GHz / 최대 클럭: 5.3GHz / L3 캐시: 32MB / TDP: 105W / PCIe5.0 / 메모리 규격: DDR5 / 5200MHz / 내장그래픽: 탑재 / AMD 라데온 그래픽 / 쿨러: 미포함`, '352600', 'AMD'],
];

/*  숫자3개마다 콤마찍기 */
function calcNumber(n){
    let s1 = n.toString();
    let d = s1.indexOf('.');
    let s2 = d === -1 ? s1 : s1.slice(0, d);

    for (let i = s2.length - 3; i > 0; i -= 3)
        s2 = s2.slice(0, i) + ',' + s2.slice(i);

    if (d !== -1)
        s2 += s1.slice(d);

    return s2;
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let savenum;
let randNum1 = rand(0,1);
let randNum2 = rand(0,3);

if(randNum1 === 0){
    /*  상품명 + 상품상세정보   */
    goodsname.innerHTML = `<strong>${cpu_Intel[randNum2][0]}</strong>
    <span class="Pre_R">${cpu_Intel[randNum2][1]}</span>`;
    /*  상품 이미지 */
    goodsExplainImgbox.innerHTML =
        `<img src="./image/cpu/${cpu_Intel[randNum2][0]}.jpg" alt=""></img>`;
    /* 상품 가격 */
    detailPrice.innerHTML = `${calcNumber(cpu_Intel[randNum2][2])}원`
    totalprice.innerHTML = `${calcNumber(cpu_Intel[randNum2][2])}원`
    /* 제조사 */
    madeBy.innerHTML = `${cpu_Intel[randNum2][3]}`
    /* 상품 상세정보 */
    detailImg.innerHTML =
        `<img src="./image/cpu/detail_${cpu_Intel[randNum2][0]}.jpg" alt="detailImg" class="detail_img blind">`
    
    /* 상품정보 */
    informationImg.innerHTML = 
        `<img src="./image/cpu/sumdetail_${cpu_Intel[randNum2][0]}.jpg" alt="informationImg">`;
    
    savenum = randNum2;
}else if(randNum1 === 1){
    /*  상품명 + 상품상세정보   */
    goodsname.innerHTML = `<strong>${cpu_amd[randNum2][0]}</strong>
    <span class="Pre_R">${cpu_amd[randNum2][1]}</span>`;
    /*  상품 이미지 */
    goodsExplainImgbox.innerHTML =
        `<img src="./image/cpu/amd_ryzen9-5th.jpg" alt=""></img>`;
    /* 상품 가격 */
    detailPrice.innerHTML = `${calcNumber(cpu_amd[randNum2][2])}원`
    totalprice.innerHTML = `${calcNumber(cpu_amd[randNum2][2]) }원`
    /* 제조사 */
    madeBy.innerHTML = `${cpu_amd[randNum2][3]}`
    /* 상품 상세정보 */
    detailImg.innerHTML =
        `<img src="./image/cpu/detail_${cpu_amd[randNum2][0]}.jpg" alt="detailImg" class="detail_img blind">`
    
    /* 상품정보 */
    informationImg.innerHTML = 
        `<img src="./image/cpu/sumdetail_${cpu_amd[randNum2][0]}.jpg" alt="informationImg">`;
    
    savenum = randNum2;
}

/* 주문수량 */
let numbervalue = 1;

function price(numbervalue){
    optionnumbers.value = numbervalue;
    if(randNum1 === 0){
        totalprice.innerHTML = `${calcNumber(cpu_Intel[randNum2][2] * numbervalue)}원`;
    }else{
        totalprice.innerHTML = `${calcNumber(cpu_amd[randNum2][2] * numbervalue)}원`;
    }
    numbervalue = +optionnumbers.value;
}

btn_plus.addEventListener(`click`, () => {
    price(++numbervalue);
});

btn_minus.addEventListener(`click`, () => {
    if (numbervalue > 1) {
        price(--numbervalue);
    }
});

optionnumbers.addEventListener(`keyup`, () => {
    numbervalue = +optionnumbers.value;
    price(numbervalue);
});

let flag = true;
detailBtn.addEventListener(`click`, function(){
    let detailImg = maincontent.querySelector(`.detail_img`)
    if(flag){
        this.innerHTML = '상세 정보 접기';
        detailImg.classList.remove(`blind`);
    }else{
        this.innerHTML = '상품 상세 정보';
        detailImg.classList.add(`blind`);
    }
    flag = !flag;
})