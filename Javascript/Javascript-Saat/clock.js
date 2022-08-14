

let name = prompt("Lütfen adınızı girin..");

let myName = document.querySelector("#myName");

if(name){
    myName.innerHTML = name;
}else{
    alert("Adınız boş olamaz!");
    location.reload();
}

let days = ["Pazar", "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
function showTime(){
    let date = new Date();
    let info = document.querySelector("#myClock");
    info.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+ days[date.getDay()];
    console.log(info.innerHTML)

}
setInterval(showTime, 1000);    
