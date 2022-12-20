(function(){
    $Frm=document.querySelector('#Frm')
    $table=document.querySelector('#table')
    $option=document.querySelector('#option')
    $TFrm=document.querySelector('#TFrm')


    $Frm.ok.addEventListener('click',e=>{
        $table.innerHTML=''
        $option.innerHTML=''
        if($Frm.game.value==='img') { //이미지
            const start=document.createElement('input')
            start.setAttribute('type',"button");
            start.setAttribute('name',"startButton")
            start.setAttribute('value',"시작")
            $option.append(start)
            for(i=1;i<=19;i++) {
                const tr=document.createElement('tr');
                tr.setAttribute('class',`tr${i}`);
                for(k=1;k<=19;k++){
                    const td=document.createElement('td');
                    td.setAttribute('class',`tr${i}_td${k}`)
                    tr.append(td)
                }
                $table.append(tr)
            }
        console.log($TFrm);
        
        let object =[]
        for(i=1;i<=19;i++){
            for(k=1;k<19;k++){
                object[`$tr${i}_td${k}`] = document.querySelector(`.tr${i}_td${k}`)
            }
        }
        var classI =0;
        $option.addEventListener('click', e=>{
            const interval = setInterval(function() {
                var r = parseInt(Math.random() * 255);
                var g = parseInt(Math.random() * 255);
                var b = parseInt(Math.random() * 255);
                //썜!
                // object.$tr2_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td17.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr2_td18.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr3_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td17.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr3_td18.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr4_td2.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr4_td17.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr5_td1.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr5_td17.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr6_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr6_td17.style.backgroundColor = `rgb(${r},${g},${b})`
                
                // object.$tr7_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr7_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr7_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr7_td16.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr9_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr9_td16.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr10_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr10_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr10_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr10_td16.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr11_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr11_td9.style.backgroundColor = `rgb(${r},${g},${b})`

                // object.$tr12_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                // object.$tr12_td9.style.backgroundColor = `rgb(${r},${g},${b})`



                //하트
                object.$tr3_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr3_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr3_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr3_td14.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr4_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr4_td15.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr5_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr5_td16.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr6_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr6_td17.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr7_td3.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td16.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr7_td17.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr8_td4.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td15.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr8_td16.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr9_td5.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td14.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr9_td15.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr10_td6.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td13.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr10_td14.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr11_td7.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td12.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr11_td13.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr12_td8.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr12_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr12_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr12_td11.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr12_td12.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr13_td9.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr13_td10.style.backgroundColor = `rgb(${r},${g},${b})`
                object.$tr13_td11.style.backgroundColor = `rgb(${r},${g},${b})`

                object.$tr14_td10.style.backgroundColor = `rgb(${r},${g},${b})`

                // clearInterval(interval)
            }, 1);
        })
            
        }

    })
})()
