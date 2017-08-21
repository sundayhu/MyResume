/**
 * Created by Administrator on 2017/8/3.
 */
/*         轮播图插件         */
function Slider(container,opts) {
    this.ct=document.getElementById(container);
    this.lt=document.getElementById(opts.list);
    this.pr=document.getElementById(opts.prev);
    this.ne=document.getElementById(opts.next);
    this.bts=document.getElementById(opts.buttons).getElementsByTagName('span');
    this.tm=opts.time;
    this.wd=opts.width;
    this.num=this.bts.length;
    this.index=1;
    this.timer=null;
    this.init();
}
var proto=Slider.prototype;
proto.init=function () {
    var self=this;
    self.pr.onclick=function () { self.prev(); };
    self.ne.onclick=function () { self.next(); };

    self.ct.onmouseover=function () {
        clearInterval(self.timer);
    };
    self.ct.onmouseout=function () {
        self.timer=setInterval(function () {
            self.ne.onclick()
        },self.tm)
    }

    for(var i=0;i<self.num;i++){
        (function (i) {
            self.bts[i].onclick=function () {
                var bts_self=this;
                var clickIndex = parseInt(bts_self.getAttribute('index'));
                var offset = self.wd * (self.index - clickIndex);
                self.animate(offset);
                self.index = clickIndex;
                self.buttonShow();
            }
        })(i)
    }
}
proto.animate=function (offset) {
    var self=this;
    var newLeft=parseInt(self.lt.style.left)+offset;
    self.lt.style.left=newLeft+'px';
    var a,b;
    a=self.wd;
    b=self.wd*self.num;
    if(newLeft>-a){
        self.lt.style.left=-b+'px';
    }
    if(newLeft<-b){
        self.lt.style.left=-a+'px';
    }
}
proto.buttonShow=function () {
    var self=this;
    for(var i=0;i<self.num;i++){
        if(self.bts[i].className=='on'){
            self.bts[i].className='';
        }
    }
    self.bts[self.index-1].className='on';
}
proto.prev=function () {
    var self=this;
    self.index-=1;
    if(self.index<1){
        self.index=self.num;
    }
    self.buttonShow();
    self.animate(self.wd);
}
proto.next=function () {
    var self=this;
    self.index+=1;
    if(self.index>self.num){
        self.index=1;
    }
    self.buttonShow();
    self.animate(-self.wd);
}
proto.play=function () {
    var self=this;
    self.timer=setInterval(function () {
        self.next();
    },self.tm)
}
proto.stop=function () {
    var self=this;
    clearInterval(self.timer);
}
// new Slider('container1',{
//     list:'list',
//     buttons:'buttons',
//     prev:'prev',
//     next:'next',
//     time:1500,
//     width:300
// });

