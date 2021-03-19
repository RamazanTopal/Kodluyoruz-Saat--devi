let name=document.querySelector("#myName");
let clock=document.querySelector("#myClock");
let date=new Date().getDay();
    switch (date) {
        case 0:
          day = "Pazar";
          break;
        case 1:
          day = "Pazartesi";
          break;
        case 2:
           day = "Salı";
          break;
        case 3:
          day = "Çarşamba";
          break;
        case 4:
          day = "Perşembe";
          break;
        case 5:
          day = "Cuma";
          break;
        case 6:
          day = "Cumartesi";
      }




let prompname=prompt("İsminizi giriniz lütfen?");
name.innerHTML =prompname;

setInterval(function(){
    
    let [hour, minute, second] = new Date().toLocaleTimeString("tr-TR").split(/:| /)
    clock.innerHTML =hour+":"+minute+":"+second+"  "+day;
},1000);
