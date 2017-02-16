/**
 * Created by Administrator on 2017/2/16.
 */
function sayHello() {
    var message = document.createTextNode("hello World!");
    var out = document.createElement("div");
    out.appendChild(message);
    document.body.appendChild(out);
}
window.onload = sayHello;