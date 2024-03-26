// 아이디 중복체크 여부
let idCheckComplete = false;
// 이메일 중복체크 여부
let emailCheckComplete = false;
// 닉네임 중복체크 여부
let nicknameCheckComplete = false;

// 아이디 중복 체크 (임시로 모양만 보여주는 상태)
function fnCheckId () {
    let checkId = document.getElementById('userId');

    // 임시 유저 아이디 목록
    const alreadyUsedId = ['aaa', 'bbb', 'ccc'];

    if (checkId.value === '') {
        alert('아이디를 반드시 입력해주세요.');
        checkId.focus();
        idCheckComplete = false;
        return false;
    } else {
        for (let i = 0; i < alreadyUsedId.length; i++) {
            // 중복된 아이디 있을 때
            if (alreadyUsedId[i] === checkId.value) {
                document.getElementsByClassName('ipt_box')[0].classList.remove('pass');
                document.getElementsByClassName('ipt_box')[0].classList.add('nonepass');
                document.getElementsByClassName('forUserId')[0].style.display = 'none';
                document.getElementsByClassName('forUserId')[1].style.display = 'block';
                checkId.focus();
                let idCheckComplete = false;
                return false;
            // 중복된 아이디 없을 때
            } else {
                document.getElementsByClassName('ipt_box')[0].classList.add('pass');
                document.getElementsByClassName('ipt_box')[0].classList.remove('nonepass');
                document.getElementsByClassName('forUserId')[0].style.display = 'block';
                document.getElementsByClassName('forUserId')[1].style.display = 'none';
                idCheckComplete = true;
            }
        }
    }
    return true;
}

// 이메일 중복 체크 (임시로 모양만 보여주는 상태)
function fnCheckEmail (e) {
    let checkEmail = document.getElementById('email');

    // 임시 유저 이메일 목록
    const alreadyUsedEmail = ['aaa@naver.com', 'bbb@naver.com', 'ccc@naver.com'];

    // 이메일 형식 체크
    function emailCheck(email_address){     
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if(!email_regex.test(email_address)){ 
            return false; 
        } else {
            return true;
        }
    }

    // 이메일 입력 여부 체크
    if (checkEmail.value === '') {
        // 입력되지 않았을 때
        alert('이메일을 반드시 입력해주세요.');
        checkEmail.focus();
        return false;
    } else {
        if(!emailCheck(checkEmail.value)){
            // 입력되었지만 유효하지 않은 형식일 때
            alert('유효하지 않은 이메일 주소');
            let emailCheckComplete = false;
            return false;
        } else {
            // 입력도 되었고 유효한 형식일 때, 중복 체크
            for (let i = 0; i < alreadyUsedEmail.length; i++) {
                // 중복된 이메일 있을 때
                if (alreadyUsedEmail[i] === checkEmail.value) {
                    document.getElementsByClassName('ipt_box')[4].classList.remove('pass');
                    document.getElementsByClassName('ipt_box')[4].classList.add('nonepass');
                    document.getElementsByClassName('forEmail')[0].style.display = 'none';
                    document.getElementsByClassName('forEmail')[1].style.display = 'block';
                    checkEmail.focus();
                    emailCheckComplete = false;
                    return false;
                // 중복된 이메일 없을 때
                } else {
                    document.getElementsByClassName('ipt_box')[4].classList.add('pass');
                    document.getElementsByClassName('ipt_box')[4].classList.remove('nonepass');
                    document.getElementsByClassName('forEmail')[0].style.display = 'block';
                    document.getElementsByClassName('forEmail')[1].style.display = 'none';
                    emailCheckComplete = true;
                }
            }
        }
            
    }
    return true;
}

// 닉네임 중복 체크 (임시로 모양만 보여주는 상태)
function fnCheckNickname () {
    let checkNickname = document.getElementById('nickname');

    // 임시 유저 닉네임 목록
    const alreadyUsedNickname = ['name1', 'name2', 'name3'];

    if (checkNickname.value === '') {
        alert('닉네임을 반드시 입력해주세요.');
        checkNickname.focus();
        nicknameCheckComplete = false;
        return false;
    } else {
        for (let i = 0; i < alreadyUsedNickname.length; i++) {
            // 중복된 아이디 있을 때
            if (alreadyUsedNickname[i] === checkNickname.value) {
                document.getElementsByClassName('ipt_box')[5].classList.remove('pass');
                document.getElementsByClassName('ipt_box')[5].classList.add('nonepass');
                document.getElementsByClassName('forNickname')[0].style.display = 'none';
                document.getElementsByClassName('forNickname')[1].style.display = 'block';
                checkNickname.focus();
                nicknameCheckComplete = false;
                return false;
            // 중복된 아이디 없을 때
            } else {
                document.getElementsByClassName('ipt_box')[5].classList.add('pass');
                document.getElementsByClassName('ipt_box')[5].classList.remove('nonepass');
                document.getElementsByClassName('forNickname')[0].style.display = 'block';
                document.getElementsByClassName('forNickname')[1].style.display = 'none';
                nicknameCheckComplete = true;
            }
        }
    }
    return true;
}

// 전화번호 숫자만 입력됐는지 체크
/* function checkNumber(event) {
    if(event.key === '.' 
        || event.key === '-'
        || event.key >= 0 && event.key <= 9) {
        return true;
    }
    return false;
} */

// 최종 가입 버튼
function fnCheckRegister(){
    // 비밀번호 확인 체크
    let getPassword = document.getElementById('password');
    let getPasswordCheck = document.getElementById('passwordCheck');
    
    if(!getPassword.value){
        // 비밀번호 입력 안했을 때
        getPassword.focus();
        document.getElementsByClassName('ipt_box')[1].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[1].classList.add('nonepass');
        document.getElementsByClassName('forPassword')[0].style.display = 'block';
        return false;
    } else {
        // 비밀번호 입력했을 때
        document.getElementsByClassName('ipt_box')[1].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[1].classList.remove('nonepass');
        document.getElementsByClassName('forPassword')[0].style.display = 'none';
    }
    // 비밀번호 일치하지 않을 때
    if(getPassword.value !== getPasswordCheck.value){
        getPasswordCheck.focus();
        document.getElementsByClassName('ipt_box')[2].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[2].classList.add('nonepass');
        document.getElementsByClassName('forPasswordCheck')[0].style.display = 'block';
        return false;
    } else {
        document.getElementsByClassName('ipt_box')[2].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[2].classList.remove('nonepass');
        document.getElementsByClassName('forPasswordCheck')[0].style.display = 'none';
    }

    // 이름 입력 체크
    let getUserName = document.getElementById('userName');
    if(!getUserName.value) {
        //alert('이름을 입력해주세요');
        getUserName.focus();
        document.getElementsByClassName('ipt_box')[3].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[3].classList.add('nonepass');
        document.getElementsByClassName('forUserName')[0].style.display = 'block';
        return false;
    } else {
        document.getElementsByClassName('ipt_box')[3].classList.add('pass');
        document.getElementsByClassName('ipt_box')[3].classList.remove('nonepass');
        document.getElementsByClassName('forUserName')[0].style.display = 'none';
    }

    // 전화번호 입력 체크
    let getUserTel = document.getElementById('userTel');
    if(!getUserTel.value) {
        //alert('이름을 입력해주세요');
        getUserTel.focus();
        document.getElementsByClassName('ipt_box')[6].classList.remove('pass');
        document.getElementsByClassName('ipt_box')[6].classList.add('nonepass');
        document.getElementsByClassName('forUserTel')[0].style.display = 'block';
        return false;
    } else {
        document.getElementsByClassName('ipt_box')[6].classList.add('pass');
        document.getElementsByClassName('ipt_box')[6].classList.remove('nonepass');
        document.getElementsByClassName('forUserTel')[0].style.display = 'none';
    }

    // 회원가입 약관 동의 여부
    let privacyIsChecked = document.getElementById('privacy_chk');

    // 모든 중복 확인 완료 & 약관 동의 되었는지 체크
    //let isAllCheckComplete = false;
    if(!idCheckComplete){
        alert('아이디 중복 체크를 완료해주세요.');
        document.getElementById('userId').focus();
        return false;
    } else if(!emailCheckComplete){
        alert('이메일 중복 체크를 완료해주세요.');
        document.getElementById('email').focus();
        return false;
    } else if(!nicknameCheckComplete){
        alert('닉네임 중복 체크를 완료해주세요.');
        document.getElementById('nickname').focus();
        return false;
    } else if(!privacyIsChecked.checked){
        alert('회원가입 약관에 동의해주세요.');
        privacyIsChecked.focus();
        return false;
    } else {
        //let isAllCheckComplete = true;
        let sureConfirm = window.confirm('회원가입 하시겠습니까?');
        if(!sureConfirm) {
            return false;
        } else {
            window.location.href = 'register_detail.html';
        }
    }
    
}