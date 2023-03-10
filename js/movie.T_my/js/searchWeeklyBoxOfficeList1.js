(function() {
    'use strict';

    const KEY = '2b84a396a55455e333f4793d75202fd6';

    const $Frm=document.querySelector('#searchFrm')
    const $bodyItem=document.querySelector('.main__body')
    const $listing=document.querySelector('.main__body > .listing-card > ul.listing-card__list')
    const $nowDate=new Date()
    const nowDate = $nowDate.toISOString().substring(0, 10)
    const img = document.querySelector('#loading')

    var week = $nowDate.getDay()
    if(week===0){week=7}

    const $YesDate = new Date()
    $YesDate.setDate($YesDate.getDate()-`${week}`)
    const YesDate = $YesDate.toISOString().substring(0, 10)
    $Frm.targetDt.value=YesDate
    

    $Frm.targetDt.setAttribute('max',YesDate)

    let clicks=false;
    $Frm.search.addEventListener('click', e=>{
        if(clicks){
            return;
        }
        // console.log($Frm.targetDt.value);
        const $var=$Frm.targetDt.value.replaceAll('-','')
        // console.log($var);
        $listing.innerHTML=''
        const url=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${KEY}&targetDt=${$var}&weekGb=2`
        
        // console.log(url);
        clicks=true;
        img.classList.remove('display_none')
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            img.classList.add('display_none');
            clicks=false
            makeList(data)
        })
    })
    function makeList(data){
        // console.log(data);
        data.boxOfficeResult.weeklyBoxOfficeList.forEach(makeItem);
    }
    function makeItem(item) {
        // console.log(item);
        const audiCnt = Number(item.audiCnt).toLocaleString(Number);
        const $bodyItem=document.createElement('li')
        $bodyItem.className = 'listing-card__item';
        $bodyItem.innerHTML=`
            <div class="listing-card__info">
                <h1>${item.rank}</h1>
                <strong class="listing-card__name">${item.movieNm}</strong>
                <p class="listing-card__date">${item.openDt}</p>
                <div class="listing-card__audiCnt">${audiCnt}???</div>
            </div>
        `
        $listing.append($bodyItem)
    }
})();

// (function() {
//     'use strict';

//     const KEY = 'cc1e6045dc81b1e1955cc52c3af43278';

//     const frmElem = document.querySelector('#searchFrm');
//     const dateElem = frmElem.targetDt;
//     const searchBtnElem = frmElem.search;    
//     const contentsElem = document.querySelector('.main__body > .listing-card > ul.listing-card__list');
//     const loadingElem = document.querySelector('#loading');

//     let isProc = false;
//     window.addEventListener('load', e => {        
//         const maxDate = moment().day(0).format('YYYY-MM-DD');
//         dateElem.value = maxDate;
//         dateElem.setAttribute('max', maxDate);
//     });
  
//     searchBtnElem.addEventListener('click', e => {        
//         if(isProc) { return; }
                
//         const nowDate = new Date(new Date().toDateString() + ' 00:00:00');
//         const nowDay = nowDate.getDay() === 0 ? 7 : nowDate.getDay();        
//         nowDate.setDate(nowDate.getDate() - nowDay + 1);
        
//         const targetDate = new Date(dateElem.value + ' 00:00:00');
//         const targetDay = targetDate.getDay() === 0 ? 7 : targetDate.getDay();        
//         targetDate.setDate(targetDate.getDate() - targetDay + 1);

//         if(nowDate.getTime() === targetDate.getTime()) {
//             return alert('???????????? ????????? ??? ????????????.');
//         } else if(targetDate.getTime() > nowDate.getTime()) {
//             return alert('???????????? ????????? ??? ????????????.');
//         }
//         isProc = true;
//         loadingElem.classList.remove('display_none');
        
//         contentsElem.innerHTML = null;
      
//         const val = dateElem.value.replaceAll('-', '');
//         console.log(val);

//         const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${KEY}&targetDt=${val}&weekGb=2`;
//         console.log(url);

//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             isProc = false;
//             loadingElem.classList.add('display_none');
//             makeList(data);
//         });
//     });

//     function makeList(data) {        
//         const arr = data.boxOfficeResult.weeklyBoxOfficeList;
//         if(arr.length === 0) {            
//             return alert('??????????????? ????????? ????????????.');
//         }
//         arr.forEach(makeItem);
//     }

//     function makeItem(item) {
//         const audiCnt = parseInt(item.audiCnt).toLocaleString('ko-KR');
//         const li = document.createElement('li');
//         li.className = 'listing-card__item';
//         li.innerHTML = `
//             <div class="listing-card__info">
//                 <h1>${item.rank}</h1>
//                 <strong class="listing-card__name">${item.movieNm}</strong>
//                 <p class="listing-card__date">${item.openDt}</p>
//                 <div class="listing-card__audiCnt">${audiCnt}???</div>
//             </div>
//         `;
//         contentsElem.appendChild(li);
//     }

// })();
