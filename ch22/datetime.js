/**
 * Created by Administrator on 2017/2/16.
 */
function telltime() {
    var out = " ";
    var now= new Date();
    out += "<br /> Date: " + now.getDate();
    out += "<br /> Month: " + (now.getMonth() + 1) ;
    out += "<br /> Year: " + now.getYear();
    out += "<br /> Hourse: " + now.getHours();
    out += "<br /> Minutes: " + now.getMinutes();
    out += "<br />Seconds: " + now.getSeconds();
    document.getElementById("div1").innerHTML = out;
}

window.onload = function () {
    document.getElementById("btn1").onclick = function () { location.reload();}
    telltime();
}