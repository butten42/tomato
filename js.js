var start=false;
var tomato=document.getElementById('time');
var breakt=document.getElementById('break');

var btadd=document.getElementById('addtime');
var btdec=document.getElementById('dectime');
var bbadd=document.getElementById('addBtime');
var bbdec=document.getElementById('decBtime');
var fill=document.getElementById('fill');
var textarea=document.getElementById('yeah');
var mission=document.getElementById('mission');
var submit=document.getElementById('submit');
var time=25;
var btime=5;
btadd.onclick=function(){
    time++;
    tomato.innerHTML=time;
};
btdec.onclick=function(){
    time--;
    if (time<0) {
        time=0;
    }
    tomato.innerHTML=time;
};
bbadd.onclick=function(){
    btime++;
    breakt.innerHTML=btime;
};
bbdec.onclick=function(){
    btime--;
    if (btime<0) {
        btime=0;
    }
    breakt.innerHTML=btime;
};

var show=document.getElementById('show');
show.onclick=function(){
    showTime=tomato.innerHTML*60;
    breakTime=breakt.innerHTML*60;
    if(start==false){
         startdate=Date.now();
         date=new Date(startdate);
         minutes=date.getMinutes();
         if(minutes<10){minutes="0"+minutes}
         hours=date.getHours();
        if(hours<10){hours="0"+hours}
        startTomato();
        start=true;
    }
    else{
        enddate=Date.now();
        enddate=new Date(enddate);
         endminutes=enddate.getMinutes();
         if(endminutes<10){endminutes="0"+endminutes}
         endhours=enddate.getHours();
        if(endhours<10){endhours="0"+endhours}
        pause();
        //var consume=(enddate-startdate)/1000;
        title=mission.innerHTML;
        if(!title){
            title="未命名任务";
        }
        newItem=document.createElement("p");
        textnode=document.createTextNode("任务："+title+",开始于："+hours+":"+minutes+",定时："+tomato.innerHTML+"分钟,结束于:"+endhours+":"+endminutes+".")
        newItem.appendChild(textnode);
        adminboard.insertBefore(newItem,clear);
    }

}
    var startTomato=function(){
    if(showTime>0){
            showTime--;
            show.textContent=convent(showTime);
            var fillH=1-(showTime/(tomato.innerHTML*60));
            fill.style.height=fillH*200+'px';
            timer=setTimeout(startTomato,1000);
        }
        else{
            if(breakTime>0){
            breakTime--;
            show.innerHTML=convent(breakTime);
            bt=setTimeout(startTomato,1000);
            ogg.play()||mp3.play();
            fill.style.height=0;
            }
            else{
                showTime=tomato.innerHTML*60;
                breakTime=breakt.innerHTML*60;
                startTomato();
            }
        }
    }
    var pause=function(){
        clearTimeout(timer);
        clearTimeout(bt);
        start=false;
    }

    function convent(n){
    var m=Math.floor(n/60);
    var s=Math.floor(n%60);
    if(m<10) {m='0'+m;}
    if(s<10) {s="0"+s;}
    return m+":"+s;
}
    var o="amongthepoor.ogg";
    var q="amongthepoor.mp3";
    var ogg=new Audio(o);
    var mp3=new Audio(q);
    var timer ,bt;


submit.onclick=function(){
    var text=textarea.value;
    mission.innerHTML=text;
}
var admin=document.getElementById('admin');
var clear=document.getElementById('clear');
var adminboard=document.getElementById('adminboard')

function Handler(){
    if (adminboard.style.display==='none') {
        adminboard.style.display="block";
    }
    else{adminboard.style.display='none'}
};
admin.addEventListener('click',Handler);
clear.onclick=function(){
    var child=adminboard.getElementsByTagName('p');
    for(var i=0;i<child.length;i++){
        adminboard.removeChild(child[i]);
    }
}

