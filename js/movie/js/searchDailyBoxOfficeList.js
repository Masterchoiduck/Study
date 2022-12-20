(function(){
    'use strict';

    const Key = '2b84a396a55455e333f4793d75202fd6'

    const $Frm = document.querySelector('#searchFrm')
    const $btn = document.querySelector('button')
    // const contentsElem=document.querySelector('#contents')
    const contentsElem=document.querySelector('#main_bady > .listing-card > ul.listing-card__list')
    const loadingElem = document.querySelector('#loading');
    
    // console.log($Frm.targetDt.value);
    window.addEventListener('load', e=>{
        const now = new Date();
        now.setDate(now.getDate()-1)
        // console.log(now.toISOString());
        const nowDate=now.toISOString().substring(0,10);
        $Frm.targetDt.value=nowDate
    })
    
    
    $btn.addEventListener('click', e=>{
        let isProc=false;
        if(isProc){
            return;
        }
        const now=new Date()
        const nowDate=now.toISOString().substring(0,10);
        console.log(parseInt(nowDate));
        isProc=true;
        contentsElem.innerHTML='';
        const val=$Frm.targetDt.value.replaceAll('-','');
        // console.log(val);
        const url=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${Key}&targetDt=${val}`
        // console.log(url);
        if(nowDate===$Frm.targetDt.value){
            alert('오늘날자')
            return;
        }else if(nowDate<$Frm.targetDt.value){
            alert('미래날자')
            return;
        };
        isProc=false;
        loadingElem.classList.remove('display_none')
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            loadingElem.classList.add('display_none');
            makeList(data)
        })
    })
    function makeList(data) {
        // console.log(data);
        // console.log(data.boxOfficeResult.dailyBoxOfficeList);
        data.boxOfficeResult.dailyBoxOfficeList.forEach(makeItem);
        if(!data.boxOfficeResult.dailyBoxOfficeList.length){
            alert('박스오피스 정보가 없습니다.')
            return;
        }
    }
    function makeItem(item) {
        const audiCnt = parseInt(item.audiCnt).toLocaleString('ko-KR');
        const li=document.createElement('li');
        li.className = 'listing-card__item'
        li.innerHTML = `
            <h1>${item.rank}</h1>  
            <strong class="listing-card__name">${item.movieNm}</strong>
            <p class="listing-card__date">${item.openDt}</p>
            <div class="listing-card__audiCnt">${audiCnt}명</div>
        `
        contentsElem.appendChild(li)
    }
})();
