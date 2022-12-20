(function(){
    'use strict'

    const $swiperWrapper=document.querySelector('.swiper-wrapper')

    function getData() {
        const url ='https://picsum.photos/v2/list?limit=10'
        fetch (url)
        .then(res => res.json())
        .then(data => MakeList(data))

        function MakeList(data){
            data.forEach(item);
        }

        function item(data){
            const div = document.createElement('div');
            div.className='swiper-slide'
            const width= parseInt(data.width * 0.1);
            const height= parseInt(data.height * 0.1);
            const imgSrc=`https://picsum.photos/id/${data.id}/${width}/${height}`
            div.innerHTML=`
            <div>${data.id}</div>
            <img src="${imgSrc}" alt="">
            `;
            $swiperWrapper.append(div)
        }
    }
    getData()
})()
