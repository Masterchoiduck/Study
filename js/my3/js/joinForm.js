const $frm = document.querySelector('#frm');

$frm.addEventListener('submit', chk)

function emptyValchk(ele,name) {
    if(!ele.value) {
        alert(`${name}을(를) 입력해주세요.`);
        ele.focus();
        return true;
    }
    return false;
}



function chk(e){
    if( 
        emptyValchk($frm.uid,'아이디')      ||
        emptyValchk($frm.upw,'비밀번호')    ||
        emptyValchk($frm.email,'이메일')    ||
        emptyValchk($frm.state_msg,'상태메시지') 
        ){
            return false;
        }
        if($frm.upw.value!==$frm.re_upw.value) {
            alert('비밀번호를 확인해주세요')
            return false;
        }
        
        const pwReg = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
        if((!pwReg.test($frm.upw.value))) {
            alert('비밀번호는 문자,숫자,특수문자 포함한 8자리 이상이어야 합니다')
            return false;
        }
            
        const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            if((!regex.test($frm.email.value))) {
                alert('이메일을 다시확인해주세요')
                return false
            }

        return true;
    }

    





/*
function chk() {
    if(!$frm.uid.value) {
        alert('uid값을 입력해주세요.')
        return false;
    }
    if(!$frm.upw.value) {
        alert('upw값을 입력해주세요.')
        return false;
    }
    if($frm.upw.value!==$frm.re_upw.value) {
        alert('비밀번호를 확인해주세요')
        return false;
    }
    if(!frameElement.email.value) {
        alert('이메일을 확인해주세요')
        return false;
    }
    return true;
}
*/
