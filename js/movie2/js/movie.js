(function(){
    'use strict';
    const Key='2b84a396a55455e333f4793d75202fd6'

    const $Frm=document.querySelector('#searchFrm')
    $Frm.search.addEventListener('click',e=>{
        console.log($Frm.targetDt.value);
        const DT=$Frm.targetDt.value.replaceAll('-','')
        console.log(DT);
        
        const url=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${Key}&movieCd=${DT}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(date)
        
    })
    function date(date){
        console.log(date);
    }

})()