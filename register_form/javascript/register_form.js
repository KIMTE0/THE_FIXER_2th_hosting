'use strict';

const register_form = document.querySelector(`.register_form`),
    member_form = register_form.querySelector(`.member_form`),
    checkBtn = member_form.querySelectorAll(`.btnMedium`),
    id_input = member_form.querySelector(`.id_input`),
    pw_input = member_form.querySelector(`.pw_input`),
    pwchk_input = member_form.querySelector(`.pwchk_input`),
    completBtn = document.querySelector(`.btnXLarge`);

// const agreeBox = document.querySelector('.agreeBox'),
//     agree_Wrap = agreeBox.querySelector('.agree_Wrap'),
//     ckeck = agree_Wrap.getElementsByClassName('ckeck'),
//     ckeck_input = agree_Wrap.getElementsByTagName('input');

const saveID = ["kimmins0427", "kimteo"],
    saveEmail = ["kimins0427@gmail.com"];


const spCh = ('@$!%*#?&');

const idChk = VerEx()
    .startOfLine()
    .range('a', 'z', '0', '9')
    .repeatPrevious(5, 12)
    .endOfLine();
// console.log(idChk);
// console.log(idChk.test('kimmins0427'));
// /^[a-z0-9]{5,12}$/gm

const pwChk = VerEx()
    .startOfLine()
    // .range('A','Z', 'a', 'z', '0', '9')
    // .add(`(?=.*[${spCh}]).`)
    .add(`(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$~!@$!%*#^?&-_]).`)
    .repeatPrevious(5,20)
    .removeModifier('m')
    .endOfLine();
// ?=.* 0~1회 동안 []문자열이 반복됬는가?
// console.log(pwChk);
// console.log(pwChk.test('Aad#@3'));

const phoneNumChk = VerEx()
    .startOfLine()
    .range('0', '9')
    .repeatPrevious(3)
    .maybe('-')
    .range('0', '9')
    .repeatPrevious(3, 4)
    .maybe('-')
    .range('0', '9')
    .repeatPrevious(4)
    .endOfLine();
// console.log(phoneNumChk.test('010414678dd'));
// console.log(phoneNumChk.test('01041467825'));
// console.log(phoneNumChk);
// /^[0-9]{3}(?:-)?[0-9]{3,4}(?:-)?[0-9]{4}$/gm

let userId;
id_input.addEventListener('change', () => {
    userId = id_input.value;
});

function check_id() {
    let checkValue;
    checkValue = saveID.indexOf(userId);

    if (userId === undefined) {
        alert('아이디를 입력하세요.');
        id_input.focus();
    } else if (!idChk.test(userId)) {
        alert(`아이디는 영문자/숫자 조합 5자리 이상 12자리 이하로 사용해야합니다.`);
        id_input.focus();
        // id_input.value = "";
    } else if (checkValue === 0 || checkValue === 1 && checkValue !== -1) {
        alert(`         요청하신 아이디
        "${userId}" 은(는)
        사용하실 수 없는 아이디 입니다.`);
        // id_input.value = "";
    } else if (checkValue == -1) {
        alert(`         요청하신 아이디
        "${userId}" 은(는)
        사용가능한 아이디 입니다.`);
    }
}

checkBtn[0].addEventListener('click', () => {
    check_id();
});

function registerChk() {
    if (pw_input.value == "") {
        alert(`비밀번호를 입력하세요.`);
        pw_input.focus();
        return false;
    }

    if (!pwChk.test(pw_input.value)) {
        alert(`비밀번호는 영어 대,소문자/숫자/특수문자를 각 1개 이상씩 조합하여 5자리 이상 사용해야합니다.`);
        pw_input.focus();
        return false;
    }

    if (pwchk_input.value !== pw_input.value) {
        alert(`비밀번호가 일치하지 않습니다. 다시 확인해주세요.`);
        pwchk_input.focus();
        return false;
    }

    alert('회원가입이 완료되었습니다.');
    return true;
}

completBtn.addEventListener('click', () => {
    if (registerChk()) {
        location.href = '../member_join_success/member_join_success.html';
    }
});