"use strict";(globalThis["webpackChunkcovid_tracker"]=globalThis["webpackChunkcovid_tracker"]||[]).push([[550],{3731:(e,a,o)=>{o.d(a,{Z:()=>n});var t=o(4136);class c{getAll(){return t.api.get("all")}getSpecificCountry(e){return t.api.get(`countries/${e}`)}getSpecificState(e){return t.api.get(`states/${e}`)}getAllCountries(){return t.api.get("countries")}getAllStates(){return t.api.get("states")}getCountryVaccineInfo(e,a){return t.api.get(`vaccine/coverage/countries/${e}?lastdays=${a}&fullData=true`)}getStateVaccineInfo(e,a){return t.api.get(`vaccine/coverage/states/${e}?lastdays=${a}&fullData=true`)}}const n=new c},550:(e,a,o)=>{o.r(a),o.d(a,{default:()=>Be});var t=o(9835),c=o(6970);const n={key:0,class:"row wrap justify-around items-center content-center"},d={key:1,class:"fit row reverse wrap justify-around items-center content-center q-my-md"},i={key:0,class:"fit row wrap justify-between items-center content-center"},s={class:"col-3"},r={class:"col"},l={class:"col"},m={class:"col"},u={key:1,class:"fit row wrap justify-around items-center"};function C(e,a,o,C,h,g){const S=(0,t.up)("q-skeleton"),p=(0,t.up)("q-card-section"),y=(0,t.up)("covidCases"),b=(0,t.up)("optionBar"),M=(0,t.up)("areaCovidCases"),v=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(v,null,{default:(0,t.w5)((()=>[e.covidCasesWorldPendingFlag?((0,t.wg)(),(0,t.iD)("div",n,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(4,(e=>(0,t.Wm)(p,{class:"col-sm-3",key:e},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{type:"text",class:"q-pa-md"}),(0,t.Wm)(S,{type:"rect",class:"q-pa-md"}),(0,t.Wm)(S,{type:"text",class:"q-pa-md"})])),_:2},1024))),64))])):((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(y,{statistic:e.covidCasesWorld.active,statisticName:e.$t("covidCases.activeCases"),bgMode:"simple",icon:"sick"},null,8,["statistic","statisticName"]),(0,t.Wm)(y,{statistic:e.covidCasesWorld.todayCases,statisticName:e.$t("covidCases.todayCases"),bgMode:"simple",icon:"masks"},null,8,["statistic","statisticName"]),(0,t.Wm)(y,{statistic:e.covidCasesWorld.recovered,statisticName:e.$t("covidCases.recoveredCases"),bgMode:"linear",icon:"health_and_safety"},null,8,["statistic","statisticName"]),(0,t.Wm)(y,{statistic:e.covidCasesWorld.cases,statisticName:e.$t("covidCases.cases"),bgMode:"linear",icon:"coronavirus"},null,8,["statistic","statisticName"])])),(0,t._)("div",{class:(0,c.C_)(["q-my-md rounded-borders",e.isDarkMode()?"bg-dark":"bg-grey-3"])},[(0,t.Wm)(b,{optionBarItems:e.optionBarItems,onFilledCountryOrStateInfo:e.getFinallySelectedList},null,8,["optionBarItems","onFilledCountryOrStateInfo"]),e.countryOrStateCovidCasesPendingFlag?((0,t.wg)(),(0,t.iD)("div",i,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(3,(a=>(0,t._)("div",{key:a,class:(0,c.C_)(["col-sm-3 custom-shadow-box rounded-borders q-pa-md q-my-md",e.isDarkMode()?"bg-dark":"bg-white"])},[(0,t.Wm)(p,{class:"row wrap justify-start q-pa-none"},{default:(0,t.w5)((()=>[(0,t._)("div",s,[(0,t.Wm)(S,{type:"QToggle"})]),(0,t._)("div",r,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(3,(e=>(0,t.Wm)(S,{key:e,type:"text"}))),64))])])),_:2},1024),(0,t.Wm)(p,{class:"row wrap justify-start q-pa-none"},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(4,(e=>(0,t._)("div",{key:e,class:"col-6"},[(0,t.Wm)(p,{class:"row wrap justify-start q-pa-sm"},{default:(0,t.w5)((()=>[(0,t._)("div",l,[(0,t.Wm)(S,{type:"circle"})]),(0,t._)("div",m,[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(2,(e=>(0,t.Wm)(S,{key:e,type:"text"}))),64))])])),_:2},1024)]))),64))])),_:2},1024),(0,t._)("div",null,[(0,t.Wm)(S,{type:"text"})])],2))),64))])):((0,t.wg)(),(0,t.iD)("div",u,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.countryOrStateCovidCases,((e,a)=>((0,t.wg)(),(0,t.j4)(M,{key:a,countryOrStateName:e.country?e.country:e.state,countryIso2:e.countryInfo&&e.countryInfo.iso2?e.countryInfo.iso2:"us",cases:e.cases,activeCases:e.active,recoveredCases:e.recovered,deathsCases:e.deaths,todayCases:e.todayCases},null,8,["countryOrStateName","countryIso2","cases","activeCases","recoveredCases","deathsCases","todayCases"])))),128))]))],2)])),_:1})}var h=o(3731);const g={class:"col-auto"},S={class:"statistics-box-header flex justify-between items-center"},p={class:"statistics-box-content"},y={class:"statistics-box-date"};function b(e,a,o,n,d,i){const s=(0,t.up)("q-icon");return(0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",{class:(0,c.C_)(["simple"!=e.bgMode||e.isDarkMode()?"simple"==e.bgMode&&e.isDarkMode()?"bg-dark custom-shadow-box":"bg-linear":"bg-white custom-shadow-box","statistics-box q-pa-md column rounded-borders"])},[(0,t._)("div",S,[(0,t._)("h6",{class:(0,c.C_)(["simple"==e.bgMode?"linear-text bg-linear":"text-white","q-ma-none text-weight-bold text-capitalize"])},(0,c.zw)(e.statisticName),3),(0,t.Wm)(s,{name:e.icon,class:(0,c.C_)("simple"==e.bgMode?"linear-text bg-linear":"text-white"),size:"32px"},null,8,["name","class"])]),(0,t._)("div",p,[(0,t._)("h3",{class:(0,c.C_)(["simple"==e.bgMode?"linear-text bg-linear":"text-white","q-ma-none text-weight-bold text-left"])},(0,c.zw)(e.seperateNumber(e.statistic)),3)]),(0,t._)("div",y,[(0,t._)("span",{class:(0,c.C_)(["simple"==e.bgMode?"linear-text bg-linear":"text-white","text-weight-bold"])},(0,c.zw)(e.$t("general.lastUpdated"))+": "+(0,c.zw)(e.getLocaleDate(e.subtractMinute(10))),3)])],2)])}const M=(0,t.aZ)({name:"covidCases",props:{statistic:{required:!0,type:Number,default:0},statisticName:{required:!0,type:String},bgMode:{required:!0,type:String,validator:e=>"simple"==e||"linear"==e},icon:{required:!0,type:String}}});var v=o(1639),w=o(2857),I=o(9984),N=o.n(I);const A=(0,v.Z)(M,[["render",b],["__scopeId","data-v-169137f6"]]),f=A;N()(M,"components",{QIcon:w.Z});const x={class:"flex justify-start items-start case-header"},L={class:"country-flag shadow-10"},B={class:"country-total-cases-statistic"},G={class:"country-name linear-text bg-linear text-weight-bold text-capitalize q-ma-none"},R={class:"linear-text bg-linear text-weight-bold text-capitalize q-ma-none"},T={class:"flex justify-start items-center country-total-cases"},O={class:"text-weight-bold linear-text bg-linear q-ma-none"},_={class:"column items-start justify-around content-between country wrap-statistic"},W={class:"flex justify-between items-center"},P={class:"flex justify-between items-center statistic-box"},D={class:"column"},k={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},F={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},U={class:"flex justify-between items-center statistic-box"},E={class:"column"},K={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},q={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},Z={class:"flex justify-between items-center"},z={class:"flex justify-between items-center statistic-box"},H={class:"column"},V={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},Y={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},Q={class:"flex justify-between items-center statistic-box"},j={class:"column"},J={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},$={class:"q-ma-none text-weight-bold text-capitalize linear-text bg-linear"},X={class:"statistics-box-date"},ee={class:"text-weight-bold linear-text bg-linear"};function ae(e,a,o,n,d,i){const s=(0,t.up)("q-img"),r=(0,t.up)("q-icon"),l=(0,t.up)("router-link");return(0,t.wg)(),(0,t.j4)(l,{to:e.countryIso2&&"us"!=e.countryIso2?`country-covid-info/${e.countryIso2}`:`state-covid-info/${e.countryOrStateName}`,class:(0,c.C_)(["col-auto custom-shadow-box rounded-borders q-pa-md q-my-md",e.isDarkMode()?"bg-dark":"bg-white"])},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t._)("div",L,[(0,t.Wm)(s,{src:`https://countryflagsapi.com/svg/${e.countryIso2?e.countryIso2:"us"}`,ratio:16/9,class:"rounded-borders"},null,8,["src"])]),(0,t._)("div",B,[(0,t._)("h6",G,(0,c.zw)(e.countryOrStateName),1),(0,t._)("h6",R,(0,c.zw)(e.$t("covidCases.totalCases")),1),(0,t._)("div",T,[(0,t.Wm)(r,{name:"coronavirus",class:"linear-text bg-linear text-h4"}),(0,t._)("h6",O,(0,c.zw)(e.seperateNumber(e.cases)),1)])])]),(0,t._)("div",_,[(0,t._)("div",W,[(0,t._)("div",P,[(0,t.Wm)(r,{name:"sick",class:"linear-text bg-linear",size:"32px"}),(0,t._)("div",D,[(0,t._)("h6",k,(0,c.zw)(e.$t("covidCases.activeCases")),1),(0,t._)("h6",F,(0,c.zw)(e.seperateNumber(e.activeCases)),1)])]),(0,t._)("div",U,[(0,t.Wm)(r,{name:"health_and_safety",class:"linear-text bg-linear",size:"32px"}),(0,t._)("div",E,[(0,t._)("h6",K,(0,c.zw)(e.$t("covidCases.recoveredCases")),1),(0,t._)("h6",q,(0,c.zw)(e.seperateNumber(e.recoveredCases)),1)])])]),(0,t._)("div",Z,[(0,t._)("div",z,[(0,t.Wm)(r,{name:"mdi-coffin",class:"linear-text bg-linear",size:"32px"}),(0,t._)("div",H,[(0,t._)("h6",V,(0,c.zw)(e.$t("covidCases.deathsCases")),1),(0,t._)("h6",Y,(0,c.zw)(e.seperateNumber(e.deathsCases)),1)])]),(0,t._)("div",Q,[(0,t.Wm)(r,{name:"masks",class:"linear-text bg-linear",size:"32px"}),(0,t._)("div",j,[(0,t._)("h6",J,(0,c.zw)(e.$t("covidCases.todayCases")),1),(0,t._)("h6",$,(0,c.zw)(e.seperateNumber(e.todayCases)),1)])])])]),(0,t._)("div",X,[(0,t._)("span",ee,(0,c.zw)(e.$t("general.lastUpdated"))+": "+(0,c.zw)(e.getLocaleDate(e.subtractMinute(10))),1)])])),_:1},8,["to","class"])}const oe=(0,t.aZ)({name:"areaCovidCases",props:{countryOrStateName:{type:String,required:!0},countryIso2:{type:String,required:!0},cases:{type:Number,required:!0},activeCases:{type:Number,required:!0},recoveredCases:{type:Number,required:!0},deathsCases:{type:Number,required:!0},todayCases:{type:Number,required:!0}}});var te=o(335);const ce=(0,v.Z)(oe,[["render",ae],["__scopeId","data-v-79cbcd46"]]),ne=ce;N()(oe,"components",{QImg:te.Z,QIcon:w.Z});var de=o(1957);const ie={class:"bg-linear border-radius-inherit q-pa-sm"},se=(0,t.Uk)(" No results ");function re(e,a,o,n,d,i){const s=(0,t.up)("q-btn"),r=(0,t.up)("q-item-section"),l=(0,t.up)("q-item"),m=(0,t.up)("q-img"),u=(0,t.up)("q-item-label"),C=(0,t.up)("q-chip"),h=(0,t.up)("q-select"),g=(0,t.up)("q-checkbox"),S=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",ie,[(0,t.Wm)(S,{onSubmit:(0,de.iM)(e.sendCountriesOrStates,["prevent"]),class:"flex items-center justify-evenly items-center q-w-100"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{flat:"",color:"white",type:"submit",size:"lg",icon:"arrow_back",label:"go",class:"text-white text-capitalize"}),(0,t.Wm)(h,{standout:"bg-white","label-color":"dark",multiple:"",clearable:"",modelValue:e.finalySelectedList,"onUpdate:modelValue":a[0]||(a[0]=a=>e.finalySelectedList=a),"use-input":"","input-debounce":"0",label:e.onCountryMode?"select country":"select state",options:e.selectedListOption,onFilter:e.filterFn,behavior:"dialog",class:"select-country-box text-capitalize"},{"no-option":(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"text-dark"},{default:(0,t.w5)((()=>[se])),_:1})])),_:1})])),option:(0,t.w5)((a=>[(0,t.Wm)(l,(0,c.vs)((0,t.F4)(a.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(r,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{src:`https://countryflagsapi.com/svg/${e.onCountryMode?a.opt.code:"US"}`,ratio:16/9,class:"rounded-borders"},null,8,["src"])])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.onCountryMode?a.opt.name:a.opt),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),"selected-item":(0,t.w5)((a=>[(0,t.Wm)(C,{removable:"",dense:"",onRemove:e=>a.removeAtIndex(a.index),tabindex:a.tabindex,color:"white","text-color":"secondary",class:"q-ma-xs"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,c.zw)(e.onCountryMode?a.opt.name:a.opt),1)])),_:2},1032,["onRemove","tabindex"])])),_:1},8,["modelValue","label","options","onFilter"]),(0,t.Wm)(g,{modelValue:e.onCountryMode,"onUpdate:modelValue":a[1]||(a[1]=a=>e.onCountryMode=a),label:e.onCountryMode?"country":"state",onClick:e.changeListItem,"checked-icon":"flag",size:"lg","unchecked-icon":"south_america",color:"white","keep-color":"",class:"text-white text-capitalize"},null,8,["modelValue","label","onClick"])])),_:1},8,["onSubmit"])])}var le=o(2502);const me=(0,le.Q_)("covidTracker",{state:()=>({countryListAllIsoData:[{code:"AF",code3:"AFG",name:"Afghanistan"},{code:"AL",code3:"ALB",name:"Albania"},{code:"DZ",code3:"DZA",name:"Algeria"},{code:"AS",code3:"ASM",name:"American Samoa"},{code:"AD",code3:"AND",name:"Andorra"},{code:"AO",code3:"AGO",name:"Angola"},{code:"AI",code3:"AIA",name:"Anguilla"},{code:"AQ",code3:"ATA",name:"Antarctica"},{code:"AG",code3:"ATG",name:"Antigua and Barbuda"},{code:"AR",code3:"ARG",name:"Argentina"},{code:"AM",code3:"ARM",name:"Armenia"},{code:"AW",code3:"ABW",name:"Aruba"},{code:"AU",code3:"AUS",name:"Australia"},{code:"AT",code3:"AUT",name:"Austria"},{code:"AZ",code3:"AZE",name:"Azerbaijan"},{code:"BS",code3:"BHS",name:"Bahamas (the)"},{code:"BH",code3:"BHR",name:"Bahrain"},{code:"BD",code3:"BGD",name:"Bangladesh"},{code:"BB",code3:"BRB",name:"Barbados"},{code:"BY",code3:"BLR",name:"Belarus"},{code:"BE",code3:"BEL",name:"Belgium"},{code:"BZ",code3:"BLZ",name:"Belize"},{code:"BJ",code3:"BEN",name:"Benin"},{code:"BM",code3:"BMU",name:"Bermuda"},{code:"BT",code3:"BTN",name:"Bhutan"},{code:"BO",code3:"BOL",name:"Bolivia (Plurinational State of)"},{code:"BQ",code3:"BES",name:"Bonaire, Sint Eustatius and Saba"},{code:"BA",code3:"BIH",name:"Bosnia and Herzegovina"},{code:"BW",code3:"BWA",name:"Botswana"},{code:"BV",code3:"BVT",name:"Bouvet Island"},{code:"BR",code3:"BRA",name:"Brazil"},{code:"IO",code3:"IOT",name:"British Indian Ocean Territory (the)"},{code:"BN",code3:"BRN",name:"Brunei Darussalam"},{code:"BG",code3:"BGR",name:"Bulgaria"},{code:"BF",code3:"BFA",name:"Burkina Faso"},{code:"BI",code3:"BDI",name:"Burundi"},{code:"CV",code3:"CPV",name:"Cabo Verde"},{code:"KH",code3:"KHM",name:"Cambodia"},{code:"CM",code3:"CMR",name:"Cameroon"},{code:"CA",code3:"CAN",name:"Canada"},{code:"KY",code3:"CYM",name:"Cayman Islands (the)"},{code:"CF",code3:"CAF",name:"Central African Republic (the)"},{code:"TD",code3:"TCD",name:"Chad"},{code:"CL",code3:"CHL",name:"Chile"},{code:"CN",code3:"CHN",name:"China"},{code:"CX",code3:"CXR",name:"Christmas Island"},{code:"CC",code3:"CCK",name:"Cocos (Keeling) Islands (the)"},{code:"CO",code3:"COL",name:"Colombia"},{code:"KM",code3:"COM",name:"Comoros (the)"},{code:"CD",code3:"COD",name:"Congo (the Democratic Republic of the)"},{code:"CG",code3:"COG",name:"Congo (the)"},{code:"CK",code3:"COK",name:"Cook Islands (the)"},{code:"CR",code3:"CRI",name:"Costa Rica"},{code:"HR",code3:"HRV",name:"Croatia"},{code:"CU",code3:"CUB",name:"Cuba"},{code:"CW",code3:"CUW",name:"Curaçao"},{code:"CY",code3:"CYP",name:"Cyprus"},{code:"CZ",code3:"CZE",name:"Czechia"},{code:"CI",code3:"CIV",name:"Côte d'Ivoire"},{code:"DK",code3:"DNK",name:"Denmark"},{code:"DJ",code3:"DJI",name:"Djibouti"},{code:"DM",code3:"DMA",name:"Dominica"},{code:"DO",code3:"DOM",name:"Dominican Republic (the)"},{code:"EC",code3:"ECU",name:"Ecuador"},{code:"EG",code3:"EGY",name:"Egypt"},{code:"SV",code3:"SLV",name:"El Salvador"},{code:"GQ",code3:"GNQ",name:"Equatorial Guinea"},{code:"ER",code3:"ERI",name:"Eritrea"},{code:"EE",code3:"EST",name:"Estonia"},{code:"SZ",code3:"SWZ",name:"Eswatini"},{code:"ET",code3:"ETH",name:"Ethiopia"},{code:"FK",code3:"FLK",name:"Falkland Islands (the) [Malvinas]"},{code:"FO",code3:"FRO",name:"Faroe Islands (the)"},{code:"FJ",code3:"FJI",name:"Fiji"},{code:"FI",code3:"FIN",name:"Finland"},{code:"FR",code3:"FRA",name:"France"},{code:"GF",code3:"GUF",name:"French Guiana"},{code:"PF",code3:"PYF",name:"French Polynesia"},{code:"TF",code3:"ATF",name:"French Southern Territories (the)"},{code:"GA",code3:"GAB",name:"Gabon"},{code:"GM",code3:"GMB",name:"Gambia (the)"},{code:"GE",code3:"GEO",name:"Georgia"},{code:"DE",code3:"DEU",name:"Germany"},{code:"GH",code3:"GHA",name:"Ghana"},{code:"GI",code3:"GIB",name:"Gibraltar"},{code:"GR",code3:"GRC",name:"Greece"},{code:"GL",code3:"GRL",name:"Greenland"},{code:"GD",code3:"GRD",name:"Grenada"},{code:"GP",code3:"GLP",name:"Guadeloupe"},{code:"GU",code3:"GUM",name:"Guam"},{code:"GT",code3:"GTM",name:"Guatemala"},{code:"GG",code3:"GGY",name:"Guernsey"},{code:"GN",code3:"GIN",name:"Guinea"},{code:"GW",code3:"GNB",name:"Guinea-Bissau"},{code:"GY",code3:"GUY",name:"Guyana"},{code:"HT",code3:"HTI",name:"Haiti"},{code:"HM",code3:"HMD",name:"Heard Island and McDonald Islands"},{code:"VA",code3:"VAT",name:"Holy See (the)"},{code:"HN",code3:"HND",name:"Honduras"},{code:"HK",code3:"HKG",name:"Hong Kong"},{code:"HU",code3:"HUN",name:"Hungary"},{code:"IS",code3:"ISL",name:"Iceland"},{code:"IN",code3:"IND",name:"India"},{code:"ID",code3:"IDN",name:"Indonesia"},{code:"IR",code3:"IRN",name:"Iran (Islamic Republic of)"},{code:"IQ",code3:"IRQ",name:"Iraq"},{code:"IE",code3:"IRL",name:"Ireland"},{code:"IM",code3:"IMN",name:"Isle of Man"},{code:"IL",code3:"ISR",name:"Israel"},{code:"IT",code3:"ITA",name:"Italy"},{code:"JM",code3:"JAM",name:"Jamaica"},{code:"JP",code3:"JPN",name:"Japan"},{code:"JE",code3:"JEY",name:"Jersey"},{code:"JO",code3:"JOR",name:"Jordan"},{code:"KZ",code3:"KAZ",name:"Kazakhstan"},{code:"KE",code3:"KEN",name:"Kenya"},{code:"KI",code3:"KIR",name:"Kiribati"},{code:"KP",code3:"PRK",name:"Korea (the Democratic People's Republic of)"},{code:"KR",code3:"KOR",name:"Korea (the Republic of)"},{code:"KW",code3:"KWT",name:"Kuwait"},{code:"KG",code3:"KGZ",name:"Kyrgyzstan"},{code:"LA",code3:"LAO",name:"Lao People's Democratic Republic (the)"},{code:"LV",code3:"LVA",name:"Latvia"},{code:"LB",code3:"LBN",name:"Lebanon"},{code:"LS",code3:"LSO",name:"Lesotho"},{code:"LR",code3:"LBR",name:"Liberia"},{code:"LY",code3:"LBY",name:"Libya"},{code:"LI",code3:"LIE",name:"Liechtenstein"},{code:"LT",code3:"LTU",name:"Lithuania"},{code:"LU",code3:"LUX",name:"Luxembourg"},{code:"MO",code3:"MAC",name:"Macao"},{code:"MG",code3:"MDG",name:"Madagascar"},{code:"MW",code3:"MWI",name:"Malawi"},{code:"MY",code3:"MYS",name:"Malaysia"},{code:"MV",code3:"MDV",name:"Maldives"},{code:"ML",code3:"MLI",name:"Mali"},{code:"MT",code3:"MLT",name:"Malta"},{code:"MH",code3:"MHL",name:"Marshall Islands (the)"},{code:"MQ",code3:"MTQ",name:"Martinique"},{code:"MR",code3:"MRT",name:"Mauritania"},{code:"MU",code3:"MUS",name:"Mauritius"},{code:"YT",code3:"MYT",name:"Mayotte"},{code:"MX",code3:"MEX",name:"Mexico"},{code:"FM",code3:"FSM",name:"Micronesia (Federated States of)"},{code:"MD",code3:"MDA",name:"Moldova (the Republic of)"},{code:"MC",code3:"MCO",name:"Monaco"},{code:"MN",code3:"MNG",name:"Mongolia"},{code:"ME",code3:"MNE",name:"Montenegro"},{code:"MS",code3:"MSR",name:"Montserrat"},{code:"MA",code3:"MAR",name:"Morocco"},{code:"MZ",code3:"MOZ",name:"Mozambique"},{code:"MM",code3:"MMR",name:"Myanmar"},{code:"NA",code3:"NAM",name:"Namibia"},{code:"NR",code3:"NRU",name:"Nauru"},{code:"NP",code3:"NPL",name:"Nepal"},{code:"NL",code3:"NLD",name:"Netherlands (the)"},{code:"NC",code3:"NCL",name:"New Caledonia"},{code:"NZ",code3:"NZL",name:"New Zealand"},{code:"NI",code3:"NIC",name:"Nicaragua"},{code:"NE",code3:"NER",name:"Niger (the)"},{code:"NG",code3:"NGA",name:"Nigeria"},{code:"NU",code3:"NIU",name:"Niue"},{code:"NF",code3:"NFK",name:"Norfolk Island"},{code:"MP",code3:"MNP",name:"Northern Mariana Islands (the)"},{code:"NO",code3:"NOR",name:"Norway"},{code:"OM",code3:"OMN",name:"Oman"},{code:"PK",code3:"PAK",name:"Pakistan"},{code:"PW",code3:"PLW",name:"Palau"},{code:"PS",code3:"PSE",name:"Palestine, State of"},{code:"PA",code3:"PAN",name:"Panama"},{code:"PG",code3:"PNG",name:"Papua New Guinea"},{code:"PY",code3:"PRY",name:"Paraguay"},{code:"PE",code3:"PER",name:"Peru"},{code:"PH",code3:"PHL",name:"Philippines (the)"},{code:"PN",code3:"PCN",name:"Pitcairn"},{code:"PL",code3:"POL",name:"Poland"},{code:"PT",code3:"PRT",name:"Portugal"},{code:"PR",code3:"PRI",name:"Puerto Rico"},{code:"QA",code3:"QAT",name:"Qatar"},{code:"MK",code3:"MKD",name:"Republic of North Macedonia"},{code:"RO",code3:"ROU",name:"Romania"},{code:"RU",code3:"RUS",name:"Russian Federation (the)"},{code:"RW",code3:"RWA",name:"Rwanda"},{code:"RE",code3:"REU",name:"Réunion"},{code:"BL",code3:"BLM",name:"Saint Barthélemy"},{code:"SH",code3:"SHN",name:"Saint Helena, Ascension and Tristan da Cunha"},{code:"KN",code3:"KNA",name:"Saint Kitts and Nevis"},{code:"LC",code3:"LCA",name:"Saint Lucia"},{code:"MF",code3:"MAF",name:"Saint Martin (French part)"},{code:"PM",code3:"SPM",name:"Saint Pierre and Miquelon"},{code:"VC",code3:"VCT",name:"Saint Vincent and the Grenadines"},{code:"WS",code3:"WSM",name:"Samoa"},{code:"SM",code3:"SMR",name:"San Marino"},{code:"ST",code3:"STP",name:"Sao Tome and Principe"},{code:"SA",code3:"SAU",name:"Saudi Arabia"},{code:"SN",code3:"SEN",name:"Senegal"},{code:"RS",code3:"SRB",name:"Serbia"},{code:"SC",code3:"SYC",name:"Seychelles"},{code:"SL",code3:"SLE",name:"Sierra Leone"},{code:"SG",code3:"SGP",name:"Singapore"},{code:"SX",code3:"SXM",name:"Sint Maarten (Dutch part)"},{code:"SK",code3:"SVK",name:"Slovakia"},{code:"SI",code3:"SVN",name:"Slovenia"},{code:"SB",code3:"SLB",name:"Solomon Islands"},{code:"SO",code3:"SOM",name:"Somalia"},{code:"ZA",code3:"ZAF",name:"South Africa"},{code:"GS",code3:"SGS",name:"South Georgia and the South Sandwich Islands"},{code:"SS",code3:"SSD",name:"South Sudan"},{code:"ES",code3:"ESP",name:"Spain"},{code:"LK",code3:"LKA",name:"Sri Lanka"},{code:"SD",code3:"SDN",name:"Sudan (the)"},{code:"SR",code3:"SUR",name:"Suriname"},{code:"SJ",code3:"SJM",name:"Svalbard and Jan Mayen"},{code:"SE",code3:"SWE",name:"Sweden"},{code:"CH",code3:"CHE",name:"Switzerland"},{code:"SY",code3:"SYR",name:"Syrian Arab Republic"},{code:"TW",code3:"TWN",name:"Taiwan"},{code:"TJ",code3:"TJK",name:"Tajikistan"},{code:"TZ",code3:"TZA",name:"Tanzania, United Republic of"},{code:"TH",code3:"THA",name:"Thailand"},{code:"TL",code3:"TLS",name:"Timor-Leste"},{code:"TG",code3:"TGO",name:"Togo"},{code:"TK",code3:"TKL",name:"Tokelau"},{code:"TO",code3:"TON",name:"Tonga"},{code:"TT",code3:"TTO",name:"Trinidad and Tobago"},{code:"TN",code3:"TUN",name:"Tunisia"},{code:"TR",code3:"TUR",name:"Turkey"},{code:"TM",code3:"TKM",name:"Turkmenistan"},{code:"TC",code3:"TCA",name:"Turks and Caicos Islands (the)"},{code:"TV",code3:"TUV",name:"Tuvalu"},{code:"UG",code3:"UGA",name:"Uganda"},{code:"UA",code3:"UKR",name:"Ukraine"},{code:"AE",code3:"ARE",name:"United Arab Emirates (the)"},{code:"GB",code3:"GBR",name:"United Kingdom of Great Britain and Northern Ireland (the)"},{code:"UM",code3:"UMI",name:"United States Minor Outlying Islands (the)"},{code:"US",code3:"USA",name:"United States of America (the)"},{code:"UY",code3:"URY",name:"Uruguay"},{code:"UZ",code3:"UZB",name:"Uzbekistan"},{code:"VU",code3:"VUT",name:"Vanuatu"},{code:"VE",code3:"VEN",name:"Venezuela (Bolivarian Republic of)"},{code:"VN",code3:"VNM",name:"Viet Nam"},{code:"VG",code3:"VGB",name:"Virgin Islands (British)"},{code:"VI",code3:"VIR",name:"Virgin Islands (U.S.)"},{code:"WF",code3:"WLF",name:"Wallis and Futuna"},{code:"EH",code3:"ESH",name:"Western Sahara"},{code:"YE",code3:"YEM",name:"Yemen"},{code:"ZM",code3:"ZMB",name:"Zambia"},{code:"ZW",code3:"ZWE",name:"Zimbabwe"},{code:"AX",code3:"ALA",name:"Åland Islands"}],allState:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]})}),ue=(0,t.aZ)({name:"optionBar",emits:["filledCountryOrStateInfo"],data(){return{onCountryMode:!0,finalySelectedList:null,countryOrStateList:[],selectedListOption:[]}},computed:Object.assign({},(0,le.rn)(me,["countryListAllIsoData","allState"])),methods:{filterFn(e,a){a(""!==e?()=>{const a=e.toLowerCase();this.selectedListOption=this.countryOrStateList.filter((e=>this.onCountryMode?e.name.toLowerCase().indexOf(a)>-1:e.toLowerCase().indexOf(a)>-1))}:()=>{this.selectedListOption=this.countryOrStateList})},sendCountriesOrStates(){this.$emit("filledCountryOrStateInfo",this.finalySelectedList,this.onCountryMode)},changeListItem(){this.finalySelectedList=null,this.onCountryMode?this.countryOrStateList=this.countryListAllIsoData:this.countryOrStateList=this.allState}},mounted(){this.countryOrStateList=this.countryListAllIsoData,this.sendCountriesOrStates()}});var Ce=o(8326),he=o(4455),ge=o(4123),Se=o(490),pe=o(1233),ye=o(3115),be=o(7691),Me=o(1006),ve=o(8149);const we=(0,v.Z)(ue,[["render",re],["__scopeId","data-v-0a909007"]]),Ie=we;N()(ue,"components",{QForm:Ce.Z,QBtn:he.Z,QSelect:ge.Z,QItem:Se.Z,QItemSection:pe.Z,QImg:te.Z,QItemLabel:ye.Z,QChip:be.Z,QCheckbox:Me.Z,QField:ve.Z});const Ne=(0,t.aZ)({name:"indexPage",components:{covidCases:f,optionBar:Ie,areaCovidCases:ne},data(){return{countryOrStateCovidCases:[],covidCasesWorld:{},covidCasesWorldPendingFlag:!0,countryOrStateCovidCasesPendingFlag:!0}},methods:{retrieveCovidCasesWorld(){h.Z.getAll().then((e=>{this.covidCasesWorld=e.data,this.covidCasesWorldPendingFlag=!1})).catch((e=>{console.log(e)}))},getAllCountries(){h.Z.getAllCountries().then((e=>{this.countryOrStateCovidCases=e.data,this.countryOrStateCovidCasesPendingFlag=!1})).catch((e=>{console.log(e)}))},getAllStates(){h.Z.getAllStates().then((e=>{this.countryOrStateCovidCases=e.data,this.countryOrStateCovidCasesPendingFlag=!1})).catch((e=>{console.log(e)}))},getSpecificCountry(e){h.Z.getSpecificCountry(e).then((e=>{this.countryOrStateCovidCases=e.data,this.countryOrStateCovidCasesPendingFlag=!1})).catch((e=>{console.log(e)}))},getSpecificState(e){h.Z.getSpecificState(e).then((e=>{this.countryOrStateCovidCases=e.data,this.countryOrStateCovidCasesPendingFlag=!1})).catch((e=>{console.log(e)}))},getFinallySelectedList(e,a){if(a&&null===e)this.getAllCountries();else if(a||null!==e)if(a&&null!==e){let a=[];e.forEach((e=>{a.push(null===e||void 0===e?void 0:e.code)})),this.getSpecificCountry(a.toString())}else a||null===e||this.getSpecificState(e.toString());else this.getAllStates()}},mounted(){this.retrieveCovidCasesWorld()}});var Ae=o(9885),fe=o(3190),xe=o(7133);const Le=(0,v.Z)(Ne,[["render",C]]),Be=Le;N()(Ne,"components",{QPage:Ae.Z,QCardSection:fe.Z,QSkeleton:xe.ZP})}}]);