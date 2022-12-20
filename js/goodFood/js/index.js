(function(){
const $gu=document.querySelector('#gu');
const $btn=document.querySelector('#search');
const $contentsContainer=document.querySelector('.contents_container');
const $paging=document.querySelector('.paging')
let data=null;
let page =1;
const rowCnt =20;

let pas=false;

$btn.addEventListener('click',e=>{
    if(pas){return}
    // console.log($gu.value);
    
    const url =`https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${$gu.value}`;
    
    pas=true;
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        pas=false;
        makeList(makeDisplay);
    });
});

function makeDisplay(res){
    data=res.data;
    console.log(res);
    const itemLen=data.length;
    console.log(itemLen);
    const maxPage= Math.ceil(itemLen/rowCnt)
    makePaging(maxPage)
    makeList();
}
function makeList(){
    $paging.innerHTML=null;
    const sIdx = (page -1)*rowCnt;
    const eIdx = page*rowCnt;

    for(let i =sIdx; i<eIdx; i++){
        const item = data[i];
        makeItem(item)
    }

}

function makePaging(maxPage) {
    $paging.innerHTML=''
    for(i=1;i<=maxPage;i++){
        const span=document.createElement('span')
        span.className='page pointer'
        span.innerHTML=`
        ${i}
        `;
        $paging.append(span)
    }
}

function makeItem(item,b) {
    const li = document.createElement('li');
    li.className='pointer'
    // console.log(item);
    li.innerHTML=`
        <h3>${b+1}. 음식점명 : ${item.BZ_NM}</h3>
        <div>음식종류 : ${item.FD_CS}</div>
        <div>연락처 : ${item.TLNO}</div>
        <div>주소 : ${item.GNG_CS}</div>
        <div>영업시간 : ${item.MBZ_HR}</div>
        <div>메뉴 : ${item.MNU}</div>
        <div>설명 : ${item.SMPL_DESC}</div>
    `;
    $contentsContainer.appendChild(li);
    li.addEventListener('click', e=>{
        const json = JSON.stringify(item);
        localStorage.setItem('item',json)
        location.href=`detail.html`
    })
}

})();

// const val=$gu.value
// $gu.addEventListener('click', e=>{
//     var interval = setInterval(function() {
//             const val2=$gu.value
//             if(val===val2){return}
//             clearInterval(interval);
//             if(pas){return}
//             $contentsContainer.innerHTML=''
//             // console.log($gu.value);

//             const url =`https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${$gu.value}`;

//             pas=true;
//         fetch(url)
//         .then(res => res.json())
//         .then(data =>{
//             pas=false;
//             makeList(data);
//         });
//             }, 100);
//     })