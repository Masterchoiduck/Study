

// 도시 선택
const $selectCity = document.querySelector('#select-city')

// 국가 선택
const $selectCountry=document.querySelector('#select-country')

// 국가 위치
const $selectcountry_lc=document.querySelector('#select-country_lc')

// 사용 언어
const $selectlang_nm=document.querySelector('#select-lang_nm')

// 데이터 저장 장소
let DataSave = []

// 도시 저장 
let CitySave = []
let CitySave1 = []

// 통신

fetch('https://apis.data.go.kr/1262000/CountryGnrlInfoService2/getCountryGnrlInfoList2?serviceKey=E7MaC1p4uA03ltQz%2FZnydea8k7mmaGBjvEaGZVyZwGdENgfwoGJXeY4Prd6yIvalFxAGkNFfYnES855ZJ6abeg%3D%3D&returnType=JSON&numOfRows=250&pageNo=1')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        makeList(data);
    })

function makeList(data){
    console.log(data);
    data.data.forEach(item=>{
        DataSave.push(item)
        list(item)
    })
    // 데이터 저장
    // console.log(DataSave);
    dataList(DataSave)
}

function list(data){
    
}


// fetch이후 저장된 함수 실행
function dataList(data){
    // 위치
    Fcountry_lc(data)
    // 언어
    Flang_nm(data)
    // 국가
    FCountry(data)
    // 도시
    // Fmain_city(data)
}





// 위치
function Fcountry_lc(data){
    // console.log(data);
    let country_lc = '<option value="">-- 위치 선택 --</option>'
    data.forEach((item,index)=>{
        if(!item.country_lc){return}
        country_lc+=`
        <option value="${item.country_iso_alp2}" selected="selected">${item.country_lc}</option>
        `
    })
    // console.log(country_lc);
    $selectcountry_lc.innerHTML=country_lc
}

// 언어
function Flang_nm(data){
    // console.log(data);
    let select_lang_nm = '<option value="">-- 언어 선택 --</option>'
    data.forEach((item,index)=>{
        if(!item.lang_nm){return}
        select_lang_nm+=`
        <option value="${item.country_iso_alp2}" selected="selected">${item.lang_nm}</option>
        `
    })
    // console.log(select_lang_nm);
    $selectlang_nm.innerHTML=select_lang_nm
}

// 국가
function FCountry(data){
    // console.log(data);
    let selectCountry = '<option value="">-- 언어 선택 --</option>'
    data.forEach((item,index)=>{
        if(!item.country_nm){return}
        selectCountry+=`
        <option value="${item.country_iso_alp2}" selected="selected">${item.country_nm}</option>
        `
        Fmain_city(item)
    })
    // console.log(selectCountry);
    $selectCountry.innerHTML=selectCountry
}


// 도시 main_city_cn
function Fmain_city(item){

    let test = ''
    let test2 = ''

    test+=item.country_cptl_nm

    CitySave = test.split('(',1)
    CitySave[0] += '(수도)'

    test2+=item.main_city_cn

    CitySave1 = test2.split(',')
    CitySave.push(...CitySave1)
    
    console.log(CitySave);
    // CitySave=[]
    // CitySave.push(item.country_cptl_nm)
    // CitySave.push(item.main_city_cn)
    let main_city_cn = '<option value="" selected="selected">-- 도시 선택 --</option>'
    CitySave.forEach(item=>{
        main_city_cn+=`
        <option>${item}</option>
        `
    })

    $selectCity.innerHTML=main_city_cn

}