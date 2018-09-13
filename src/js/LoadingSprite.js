/*! <anderpang@foxmail.com> */

"use strict";
(function(global,factory){
    typeof module!=="undefined" && typeof exports!=="undefined"?
        module.exports=factory():
        global.LoadingSprite=factory();    
})(this,function(){
    function LoadingSprite(options){
        Object.assign(this,{
            width:innerWidth,
            height:innerHeight,
            radius:50,
            radius2:5,
            fontSize:24,
            speed:0.08,
            backgroundColor:"#000",
            coverColor:"rgb(0,0,0,.05)",
            color:"#FFF",
            text:"0%"
        },options);

        if(this.view){
            this.width=this.view.width;
            this.height=this.view.height;
        }
        else{
           this.view=document.createElement("canvas");
           this.view.width=this.width;
           this.view.height=this.height;
        }
        this.ctx=this.view.getContext("2d");
        this.cx=this.width/2;
        this.cy=this.height/2;

        this.PI2=Math.PI*2;
        this.r=-this.PI2/4;

        this.ctx.fillStyle=this.backgroundColor;
        this.ctx.fillRect(0,0,this.width,this.height);            
    }
    LoadingSprite.prototype={
        draw:function(){
            var ctx=this.ctx;

            ctx.fillStyle=this.coverColor;
            ctx.fillRect(0,0,this.width,this.height);

            ctx.save();
            
            ctx.fillStyle=this.backgroundColor;
            ctx.beginPath();
            ctx.arc(this.cx,this.cy,this.radius-this.radius2-5,0,this.PI2);
            ctx.fill();

            ctx.fillStyle=this.color;
            ctx.textAlign="right";
            ctx.font=this.fontSize+"px null";  //sans-serif               
            ctx.beginPath();
            ctx.arc(this.x+this.cx,this.y+this.cy,this.radius2,0,this.PI2);
            ctx.fill();
            ctx.fillText(this.text,this.cx+this.fontSize+3,this.cy+this.fontSize/2);
            ctx.restore();
            return this;
        },
        update:function(){
           this.r+=this.speed;
           this.x=Math.cos(this.r)*this.radius;
           this.y=Math.sin(this.r)*this.radius;
           
           return this;
        }
    };

    return LoadingSprite;
});
