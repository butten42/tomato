var start=false;
var tomato=document.getElementById('time');
var breakt=document.getElementById('break');

var btadd=document.getElementById('addtime');
var btdec=document.getElementById('dectime');
var bbadd=document.getElementById('addBtime');
var bbdec=document.getElementById('decBtime');
var fill=document.getElementById('fill');

var time=25;
var btime=1;
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
        startTomato();
        start=true;
    }
    else{
        pause();
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


