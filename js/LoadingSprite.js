/*! <anderpang@foxmail.com> */
"use strict";!function(t,i){"undefined"!=typeof module&&"undefined"!=typeof exports?module.exports=i():t.LoadingSprite=i()}(this,function(){function t(t){Object.assign(this,{width:innerWidth,height:innerHeight,radius:50,radius2:5,fontSize:24,speed:.08,backgroundColor:"#000",coverColor:"rgb(0,0,0,.05)",color:"#FFF",text:"0%"},t),this.view?(this.width=this.view.width,this.height=this.view.height):(this.view=document.createElement("canvas"),this.view.width=this.width,this.view.height=this.height),this.ctx=this.view.getContext("2d"),this.cx=this.width/2,this.cy=this.height/2,this.PI2=2*Math.PI,this.r=-this.PI2/4,this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height)}return t.prototype={draw:function(){var t=this.ctx;return t.fillStyle=this.coverColor,t.fillRect(0,0,this.width,this.height),t.save(),t.fillStyle=this.backgroundColor,t.beginPath(),t.arc(this.cx,this.cy,this.radius-this.radius2-5,0,this.PI2),t.fill(),t.fillStyle=this.color,t.textAlign="right",t.font=this.fontSize+"px null",t.beginPath(),t.arc(this.x+this.cx,this.y+this.cy,this.radius2,0,this.PI2),t.fill(),t.fillText(this.text,this.cx+this.fontSize+3,this.cy+this.fontSize/2),t.restore(),this},update:function(){return this.r+=this.speed,this.x=Math.cos(this.r)*this.radius,this.y=Math.sin(this.r)*this.radius,this}},t});
