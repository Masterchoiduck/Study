// 숫자 갯수
// var $Number = prompt('숫자 갯수를 입력해주세요 (3이상)');

var $Number = '';
const dialog = document.querySelector("dialog")
const $ok = document.querySelector('.ok')
const $radio = document.querySelectorAll('.radio')
dialog.showModal()
let $Num = 0

let choi = 0

$ok.addEventListener('click', e => {
    $radio.forEach(item => {
        if (item.checked) {
            console.log(item.value);
            $Number = item.value
        }
    })


    


    NewNumber()
})





// console.log($Number);


// 숫자야구게임
let $true = true
var Pc = []
function NewNumber() {
    Pc = [];
    for(let i =0;i<$Number;i++){
        Pc.push('0')
    }

    for (var i = 0; i < Pc.length; i++) {
        Pc[i] = parseInt(Math.random() * 9) + 1 +'';
        for (var k = 0; k < i; k++) {
            if (Pc[i] === Pc[k]) {
                i--
                break;
            }
        }
    }
    // 컴퓨터숫자
    choi++
    console.log(Pc);
    console.log(choi);
    answer()
}



function answer(){

    const $answer = document.querySelector('.answer')
    var answer_item = ''
    for (let i = 1; i <= $Number; i++) {
        answer_item += `
        <div class="answer-item"></div>
        `
    }
    $answer.innerHTML = answer_item
    
    
    // 입력한 숫자 표시
    const $answerItem = document.querySelectorAll('.answer-item')
    
    let Arr = []
    
    // 비교하는 곳
    const $result = document.querySelector('.result')
    var result = ''
    function Fresult() {
        if(Arr+'' === Pc+''){
            alert(`승리!!! (${$Num}번째)`)
            return
        }
        // console.log(Arr.length);
        // console.log(Arr + '');
    
        // 입력한숫자 함수
        function Ffor() {
            retrunSpan = ''
            for (let i = 0; i < $Number; i++) {
                retrunSpan += `<span>${Arr[i]}</span>`
            }
            return retrunSpan
        }
    
        // 입력한 숫자 비교 함수
        console.log(Pc);
        console.log(Arr);
        function Ball(i) {
            if (Pc[i] === Arr[i]) {
                return 'S'
            }
            for (let k = 0; k < $Number; k++) {
                // console.log(Pc[k] === Arr[i]);
                if (Pc[k] === Arr[i]) {
                    return 'B'
                }
            }
            return 'OUT'
        }
    
        let test = ''
        function $Test() {
            for (let i = 0; i < $Number; i++) {
                test += `
                <span class="${Ball(i)}">${Ball(i)}</span>
                `
            }
            return test
        }
        result += `
            <div class="result-item">
                <div>
                    ${Ffor()}
                </div>
                <div>
                    ${$Test()} 
                </div>
            </div>
        `
        $result.innerHTML = result
        $Num++
    }
    
    
    // 버튼 0~9
    const $btnPrimary = document.querySelectorAll('.btn-primary')
    
    // 지우기 버튼
    const $btnBack = document.querySelector('.btn-back')
    
    
    // 입력값 리셋
    
    function reset() {
        $answerItem.forEach((item, inx) => {
            item.innerText = ''
        })
        Arr = []
    }
    
    $btnPrimary.forEach(item => {
        item.addEventListener('click', e => {
            if (Arr.length + '' === $Number) { reset() }
            Arr.push(item.textContent)
            // console.log(Arr);
            answer()
            // console.log(Arr);
        })
    })
    
    
    // 숫자 입력
    function answer() {
        $btnBack.addEventListener('click',e=>{
            reset()
        })
        console.log(Arr);
        $answerItem.forEach((item, inx) => {
            Arr.forEach((item2, inx2) => {
                if (inx === inx2) {
                    // console.log(item2);
                    item.innerText = item2
                }
            })
        })
        if (Arr.length + '' === $Number) { Fresult() }
    }
}



















// var level = '';
// var PClevel = prompt('컴퓨터 난이도를 입력하세요 \n 난이도 : 상(3)  중(2)  하(1) \n 취소 : 혼자플레이/PC없음');
// for (; ;) {
//     if (PClevel === '3') {
//         level = '상';
//         break;
//     } else if (PClevel === '2') {
//         level = '중';
//         break;
//     } else if (PClevel === '1') {
//         level = '하';
//         break;
//     } else if (PClevel === null) {
//         level = '혼자플레이/PC없음'
//         break;
//     }
//     var PClevel = prompt(`(오류)입력하신 난이도는 '${level}'입니다 \n 난이도 : 상(3)  중(2)  하(1) \n 취소 : 혼자플레이/PC없음`)
// }
// console.log(`컴퓨터 난이도 (${level})`)



// var PC = [0, 0, 0];
// for (var i = 0; i < PC.length; i++) {
//     PC[i] = parseInt(Math.random() * 9) + 1;
//     for (var k = 0; k < i; k++) {
//         if (PC[i] === PC[k]) {
//             i--
//             break;
//         }
//     }
// }
// console.log(PC + '')


// // var history = [0,0,0];
// var ben = 0
// for (; ;) {
//     ben++;
//     var Player = prompt('숫자 세개를 입력해 주세요.');
//     const PlayerArr = Player.split('');
//     const PlayerNumberArr = PlayerArr.map(Number);
//     // history = `${history+''}+${PlayerNumberArr+''}`
//     // console.log(history)
//     var S = 0
//     var B = 0
//     var O = 0
//     var talk = parseInt(Math.random() * 18);
//     if (talk === 0) { talk = '나는 더 나은 미래를 위해 싸운다' }
//     if (talk === 1) { talk = '해보고 후회하는것이 안해보고 후회하는것보다 훨씬낳아!(메이저 3기)' }
//     if (talk === 2) { talk = '시련은 기회가 될 수 있다. - 류중일' }
//     if (talk === 3) { talk = '이제부터 우리는 위대한 도전에 나섭니다. - 김인식' }
//     if (talk === 4) { talk = '시도도 하지 않고 포기하느니 시도하고 실패를 하는 게 낫다. 시도조차 하지 않으면 실패의 이유를 찾을 수 없기 때문이다. - 김시진' }
//     if (talk === 5) { talk = '하늘이 얼마나 높은지 잘 모르겠지만 이제 우리가 확인하러 가겠다. - 김시진' }
//     if (talk === 6) { talk = '두려워 하지 마라. - 제리 로이스터' }
//     if (talk === 7) { talk = '인생은 속도가 아니라 방향이다. - 임창용' }
//     if (talk === 8) { talk = '우린 더 강해진다. - 한대화' }
//     if (talk === 9) { talk = '지고 분할 줄 모르면 발전은 없다. - 박종훈' }
//     if (talk === 10) { talk = '욕심이 없는 선수는 프로의 자격이 없다. - 손아섭' }
//     if (talk === 11) { talk = '70퍼센트의 몸 컨디션으로도 100퍼센트의 모습을 보여줘야 한다. 그게 프로다. - 박경완' }
//     if (talk === 12) { talk = '피나는 노력에 대타란 없다. - 박병호' }
//     if (talk === 13) { talk = '기회는 자주 오는 게 아니다. 깰 수 있을 때 깨는 게 좋다. - 이승엽' }
//     if (talk === 14) { talk = '기록은 선수의 가치를 올려준다. 감독은 선수의 가치를 올려주는 사람이다. - 염경엽' }
//     if (talk === 15) { talk = '할 수 있을 때 하지 않으면 하고 싶을 때 하지 못한다. - 최만호' }
//     if (talk === 16) { talk = '포기하지 마라. 이 위기를 넘겨야 진짜 강해지는 것이다. 괴로워하지 말라. 나중에 그들이 무릎꿇게 만들면 된다. - 김성근' }
//     if (talk === 17) { talk = '나로 인해 뒤집어질 이 세상을 난 기대한다. - 김민우' }
//     if (talk === 18) { talk = '꼼수는 실력을 이길 수 없다. - 이현승' }
//     for (var i = 0; i < PC.length; i++) {
//         for (var k = 0; k < PlayerNumberArr.length; k++) {
//             if (PC[i] === PlayerNumberArr[k]) {
//                 if (i === k) {
//                     S++;
//                 } else {
//                     B++;
//                 }
//             }
//         }
//     }
//     O = (`${PlayerNumberArr.length - (S + B)}`)
//     // console.log(`★${talk}★`)
//     console.log(`내가 입력한 숫자 : ${PlayerNumberArr + ''}\n\n스트라이크 : ${S} / 볼 : ${B} / 아웃 : ${O}`)
//     var computer = [0, 0, 0]
//     var PCs = 0;
//     var PCb = 0;
//     var PCo = 0;
//     if (PClevel === '1') { //난이도 하 (올랜덤)
//         for (var i = 0; i < computer.length; i++) {
//             computer[i] = parseInt(Math.random() * 9) + 1;
//             for (var k = 0; k < i; k++) {
//                 if (computer[i] === computer[k]) {
//                     i--
//                     break;
//                 }
//             }
//         }
//         for (var i = 0; i < PC.length; i++) {
//             for (var k = 0; k < computer.length; k++) {
//                 if (PC[i] === computer[k]) {
//                     if (i === k) {
//                         PCs++;
//                     } else {
//                         PCb++;
//                     }
//                 }
//             }
//         }
//         PCo = (`${PlayerNumberArr.length - (S + B)}`)
//         console.log(`컴퓨터가 입력한 숫자 : ${computer + ''} \n\n스트라이크 : ${PCs} / 볼 : ${PCb} / 아웃 : ${PCo}`);
//     } else if (PClevel === '2') { // 난이도 중 (S제외 랜덤)
//         for (var i = 0; i < computer.length; i++) {
//             computer[i] = parseInt(Math.random() * 9) + 1;
//             for (var k = 0; k < i; k++) {
//                 if (computer[i] === computer[k]) {
//                     i--
//                     break;
//                 }
//             }
//         }
//         for (var i = 0; i < PC.length; i++) {
//             for (var k = 0; k < computer.length; k++) {
//                 if (PC[i] === computer[k]) {
//                     if (i === k) {
//                         PCs++;
//                     } else {
//                         PCb++;
//                     }
//                 }
//             }
//         }
//         for (var i = 0; i < Pc.length; i++) { }
//         PCo = (`${PlayerNumberArr.length - (S + B)}`)
//         console.log(`컴퓨터가 입력한 숫자 : ${computer + ''} \n\n스트라이크 : ${PCs} / 볼 : ${PCb} / 아웃 : ${PCo}`);


//     } else if (PClevel === '3') { //난이도 상 (S제외 같은거빼고 랜덤)
//         for (var i = 0; i < computer.length; i++) {
//             computer[i] = parseInt(Math.random() * 9) + 1;
//             for (var k = 0; k < i; k++) {
//                 if (computer[i] === computer[k]) {
//                     i--
//                     break;
//                 }
//             }
//         }
//         for (var i = 0; i < PC.length; i++) {
//             for (var k = 0; k < computer.length; k++) {
//                 if (PC[i] === computer[k]) {
//                     if (i === k) {
//                         PCs++;
//                     } else {
//                         PCb++;
//                     }
//                 }
//             }
//         }
//         PCo = (`${PlayerNumberArr.length - (S + B)}`)
//         console.log(`컴퓨터가 입력한 숫자 : ${computer + ''} \n\n스트라이크 : ${PCs} / 볼 : ${PCb} / 아웃 : ${PCo}`);
//     } else { console.log('PC없음'); }


//     if (S === PlayerNumberArr.length && S !== 0 && S !== 1 && S !== 2) {
//         console.log(`${ben}번째\n승리!! / 고생하셨습니다`);
//         break;
//     } else if (PCs === computer.length) {
//         console.log(`${ben}번째\n패배!! / 고생하셨습니다`)
//         break;
//     }
//     console.log(`${ben}번째\n--------------------다음턴--------------------`)
// }












































        // var PC2 = [0,0,0];
        // var PC2_map = PC2.map(function(PC2){
            //     var resut = parseInt(Math.random()*9)+1;
            //     for(i=0;i<PC2.length;i++){
                //         for(k=0;k<i;k++) {
                    //             if (PC2_map[i]===PC2_map[k]) {
        //                 i--
        //                 break;
        //             }
        //         }
        //     }
        //     console.log('끝');
        //     return resut;
        // })
        // console.log(PC2_map+'')
        // console.log(PC2_map[2]);