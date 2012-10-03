// numeral.js
// version : 1.0.1
// author : Adam Draper
// license : MIT
// http://adamwdraper.github.com/Numeral-js/
(function(){function s(e){this._n=e}function o(e,t){var n=Math.pow(10,t);return(Math.round(e*n)/n).toFixed(t)}function u(e,t){var n;return t.indexOf("$")>-1?n=f(e,t):t.indexOf("%")>-1?n=l(e,t):t.indexOf(":")>-1?n=c(e,t):n=p(e,t),n}function a(e,t){return t.indexOf(":")>-1?e._n=h(t):e._n=(t.indexOf("k")>-1?1e3:1)*(t.indexOf("m")>-1?1e6:1)*(t.indexOf("%")>-1?.01:1)*Number((t.indexOf("(")>-1?"-":"")+t.replace(/\$|,|%|k|m|\(|\)*/ig,"")),e._n}function f(e,t){t=t.replace("$","");var n=u(e,t);return n.indexOf("(")>-1||n.indexOf("-")>-1?(n=n.split(""),n.splice(1,0,"$"),n=n.join("")):n="$"+n,n}function l(e,t){t=t.replace("%",""),e._n=e._n*100;var n=u(e,t);return n.indexOf(")")>-1?(n=n.split(""),n.splice(-1,0,"%"),n=n.join("")):n+="%",n}function c(e,t){var n=Math.floor(e._n/60/60),r=Math.floor((e._n-n*60*60)/60),i=Math.round(e._n-n*60*60-r*60);return n+":"+(r<10?"0"+r:r)+":"+(i<10?"0"+i:i)}function h(e){var t=e.split(":"),n=0;return t.length===3?(n+=Number(t[0])*60*60,n+=Number(t[1])*60,n+=Number(t[2])):t.lenght===2&&(n+=Number(t[0])*60,n+=Number(t[1])),Number(n)}function p(e,t){var n=!1,r=!1;t.indexOf("(")>-1&&(n=!0,t=t.slice(1,-1)),t.indexOf("a")>-1&&(t=t.replace("a",""),e._n>1e6?(r="m",e._n=e._n/1e6):(r="k",e._n=e._n/1e3));var i=e._n.toString().split(".")[0],s=t.split(".")[1],u=t.indexOf(","),a="",f=!1;return e._n<0&&(i=i.slice(1),f=!0),u>-1&&(i=i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),t.indexOf(".")===0&&(i=""),s&&(a="."+o(e._n,s.length).split(".")[1]),r,(n?"(":"")+(!n&&f?"-":"")+i+a+(r?r:"")+(n?")":"")}var e,t="1.0.0",n=Math.round,r,i=typeof module!="undefined"&&module.exports;e=function(e){return Number(e)||(e=0),new s(Number(e))},e.version=t,e.isNumeral=function(e){return e instanceof s},e.fn=s.prototype={clone:function(){return e(this)},format:function(t){return u(this,t?t:e.defaultFormat)},unformat:function(t){return a(this,t?t:e.defaultFormat)},value:function(){return this._n},set:function(e){return this._n=Number(e),this},add:function(e){return this._n=this._n+Number(e),this},subtract:function(e){return this._n=this._n-Number(e),this},multiply:function(e){return this._n=this._n*Number(e),this},divide:function(e){return this._n=this._n/Number(e),this},difference:function(e){return this._n-Number(e)}},i&&(module.exports=e),typeof ender=="undefined"&&(this.numeral=e),typeof define=="function"&&define.amd&&define([],function(){return e})}).call(this);