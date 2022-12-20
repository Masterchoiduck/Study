(function() {
    'use strict';
    //공공데이터포털에서 받은 인증키
    const KEY = 'I8OEGleeOPaqJN3uweR%2Fkp23OeQUWCMn3VxsbWy4d116lVWFtlw%2FhqzKmb7nwFRKV8uv7uVuc%2FQkE8ykYJUR2w%3D%3D';
    const $Frm=document.querySelector('#Frm')

    /*
    //페이지번호
    const pageNo = 1
    //한 페이지 결과 수
    const numOfRows = 100
    //1: 남성 2: 여성
    const sexdstn = 1
    //Y: 사망 N: 생존
    const nk_prsn_death_at = N
    //시작 출생일자
    const bgng_ymd = 19300101
    //종료 출생일자
    const end_ymd = 20221109
    */
    $Frm.btn.addEventListener('click',e=>{
        const $pageNo=$Frm.pageNo.value;
        const $numOfRows=$Frm.numOfRows.value;
        const $sex=$Frm.sex.value;
        const $ymd=$Frm.ymd.value;
        const $start=$Frm.start.value.replaceAll('-','');
        const $end=$Frm.end.value.replaceAll('-','');;

        const url = `https://apis.data.go.kr/1250000/prsn/getPrsn?serviceKey=${KEY}&pageNo=${$pageNo}&numOfRows=${$numOfRows}&sexdstn=${$sex}&nk_prsn_death_at=${$ymd}&bgng_ymd=${$start}&end_ymd=${$end}`
        
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(data =>{
            makeList(data);
        })

    })
    
    function makeList(data){
        data.items.forEach(items);
    }
    function items(item){
        console.log(item);

    }
})();

/*
	nm	이름	3	1	리철만	이름
	korean_nm	한국식이름	3	1	이철만	한국식이름
	rspofc	직책	100	1	농업부 부장	직책
	sexdstn	성별	1	1	1	성별
	brth	생년월일	8	1	19680000	생년월일
	birthplace	출생지	10	1		출생지
	nk_prsn_death_at	북한인물사망여부	1	1	N	북한인물사망여부
	nk_prsn_death_de	북한인물사망일자	8	1	연도미상	북한인물사망일자

*/