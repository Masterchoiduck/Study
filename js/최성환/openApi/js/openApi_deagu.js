(function(){
    const $Frm=document.querySelector('#daegu')
    
    $Frm.btn.addEventListener('click',e=>{
        const arr=[]
        if($Frm.a.checked){ //중구
            const $a_value='%EC%A4%91%EA%B5%AC'
            arr.push($a_value)
        }
        if($Frm.b.checked){ //동구
            const $b_value='%EB%8F%99%EA%B5%AC'
            arr.push($b_value)
        }
        if($Frm.c.checked){ //서구
            const $c_value='%EC%84%9C%EA%B5%AC'
            arr.push($c_value)
        }
        if($Frm.d.checked){ //남구
            const $d_value='%EB%82%A8%EA%B5%AC'
            arr.push($d_value)
        }
        if($Frm.e.checked){ //북구
            const $e_value='%EB%B6%81%EA%B5%AC'
            arr.push($e_value)
        }
        if($Frm.f.checked){ //수성구
            const $f_value='%EC%88%98%EC%84%B1%EA%B5%AC'
            arr.push($f_value)
        }
        if($Frm.g.checked){ //달서구
            const $g_value='%EB%8B%AC%EC%84%9C%EA%B5%AC'
            arr.push($g_value)
        }
        if($Frm.h.checked){ //달성군
            const $h_value='%EB%8B%AC%EC%84%B1%EA%B5%B0'
            arr.push($h_value)
        }
        console.log(arr+'');
        // for(let i=0;i<arr.length;i++) {
            const url = `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${arr}`
            // const url =`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=cc1e6045dc81b1e1955cc52c3af43278&targetDt=20221108`
            console.log(url);

            fetch(url)
            .then(res => res.json())
            .then(data =>{
                makeList(data)
            })

        // }
    })
    function makeList(data){
        console.log(data);
    }

})()