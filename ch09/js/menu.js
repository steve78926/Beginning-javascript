/**
 * Created by Administrator on 2016/10/25.
 */

function makeMenu () {
    var h2s = document.getElementsByTagName("h2");  //获取所有H2标题元素
    var menu = document.createElement("div");       //为菜单创建一个新的页面元素
    var menuUl = document.createElement("ul");      //创建一个UL元素
    menu.appendChild(menuUl);                       //将menuUl元素添加到menu

    //遍历H2元素
    for (var i=0; i < h2s.length; i++) {
        var itemText = h2s[i].childNodes[0].nodeValue;      //获取H2元素的文本节点
        var menuLi = document.createElement("li");          //创建li列表项
        menuUl.appendChild(menuLi);                         //将新建的menuLi添加到menuUl
        var menuLiA = document.createElement("a");          //创建列表项的A链接元素
        menuLi.appendChild(menuLiA);                        //将新创建的A链接元素添加menuLi
        menuLiA.setAttribute("href","#item" + i);           //设置A链接的属性
        var menuText = document.createTextNode(itemText);   //创建链接的文本
        menuLiA.appendChild(menuText);                      //将文本添加到A链接
        var anc = document.createElement("a");              //创建H2标题元素的锚点
        anc.setAttribute("name","item" + i);                //设置锚点的属性name
        document.body.insertBefore(anc,h2s[i]);             //在每个H2标题元素的前面插入anc锚点，父容器是body
        document.body.insertBefore(menu,document.body.firstChild);      //将菜单添加到页面顶部
    }
}