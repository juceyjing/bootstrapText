/**
 * Created by guxiaojing on 17/3/5.
 */
//当鼠标滑动到第二个标签时，让给第二个li 和div 加上SELECT标签
// 其他的清除
    //要操作谁先获取谁
    var oTab=document.getElementById("tab");
var oLis=oTab.getElementsByTagName("li");
var oDivs=oTab.getElementsByTagName("div");
//实现一个功能方法
function tabChange(nIndex) {
    for(var i=0;i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }
    oLis[nIndex].className="select";
    oDivs[nIndex].className="select";
}

//第四部：给我们 的li绑定鼠标移动事件
//
for(var i=0;i<oLis.length;i++){
    oLis[i].zhufeng=i;//难点：当做属性存储
    oLis[i].onmouseover=function(){
        // alert(1);
        tabChange(this.zhufeng);
    }
}
