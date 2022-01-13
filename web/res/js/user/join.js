{
    let idChkState = 2; // 0: 아이디 사용 불가능, 1: 아이디 사용가능, 2: 체크안함
    const joinFrmElem = document.querySelector('#join-frm');
    const idRegex = /^([a-zA-Z0-9]{4,15})$/; //대소문자+숫자 조합으로 4~15글자인 경우만 ok
    const pwRegex = /^([a-zA-Z0-9!@_]{4,20})$/; //대소문자+숫자+!@_ 조합으로 4~20글자인 경우만 ok
    const nmRegex = /^([가-힣]{2,5})$/
    const msg1 ='아이디는 대소문자, 숫자조합으로 4~15글자가 되어야합니다.';

    const setIdChkMsg = (data) => {
        idChkState = data.result;

        const idChkMsgElem = joinFrmElem.querySelector('#id-Chk-Msg');
        switch(data.result){
            case 0:
                idChkMsgElem.innerText = '이미 사용중인 아이디 입니다.';
                break;
            case 1:
                idChkMsgElem.innerText = '사용 가능한 아이디 입니다.';
                break;

        }
    }
    if(joinFrmElem){
        joinFrmElem.addEventListener('submit', (e) => {
            const uid = joinFrmElem.uid.value;
            const upw = joinFrmElem.upw.value;
            const upwChk = joinFrmElem.querySelector('#upw-chk').value;
            const nm = joinFrmElem.nm.value;
            if (!idRegex.test(uid)) {
                alert(msg1);
                e.preventDefault();
            } else if (!pwRegex.test(upw)) {
                alert('비밀번호는 대소문자, 숫자, !, @, _ 조합으로 4~20글자가 되어야합니다.');
                e.preventDefault();
            } else if(upw !== upwChk){
                alert('비밀번호와 체크 비밀번호를 확인해 주세요.');
                e.preventDefault();
            } else if (!nmRegex.test(nm)){
                alert('이름은 한글로 2~5글자가 되어야 합니다.');
                e.preventDefault();
            }
            if(idChkState !== 1){
                switch (idChkState){
                    case 0:
                        alert('다른 아이디를 사용해 주세요!');
                        break;
                    case 2:
                        alert('아이디 중복 체크를 해주세요.');
                        break;
                }
                e.preventDefault();
            }
        });

        joinFrmElem.uid.addEventListener('keyup', () => {
            const idChkMsgElem = joinFrmElem.querySelector('#id-Chk-Msg');
            idChkMsgElem.innerText = '';
            idChkState = 2;
        });
        //아이디 중복  체크 버튼
        const idBtnChkElem = joinFrmElem.querySelector('#id-btn-chk');
        idBtnChkElem.addEventListener('click', () => {
            const idVal = joinFrmElem.uid.value;
            if(idVal.length < 4){
                alert('아이디는 4자 이상 작성해 주세요.');
                return;
            }
            if(!idRegex.test(idVal)){
                alert(msg1);
                return;
            }
            fetch(`/user/idChk/${idVal}`)
                .then(res => res.json())
                .then((data) => {
                    setIdChkMsg(data);
            }).catch((e) => {
                console.log(e);
            });
        });
    }
}