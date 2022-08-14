

let name = prompt("Lütfen adınızı girin..");

let myName = document.querySelector("#myName");
myName.innerHTML = name



function showTime(){
    let date = new Date();
    let info = document.querySelector("#myClock");
    info.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    console.log(info.innerHTML)

}
setInterval(showTime, 1000);    
