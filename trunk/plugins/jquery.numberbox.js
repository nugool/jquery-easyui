﻿/**
 * jQuery EasyUI 1.1
 * 
 * Licensed under the GPL:
 *   http://www.gnu.org/licenses/gpl.txt
 *
 * Copyright 2010 stworthy [ stworthy@gmail.com ] 
 * 
 */
(function($){
function _1(_2){
var _3=$.data(_2,"numberbox").options;
var _4=parseFloat($(_2).val()).toFixed(_3.precision);
if(isNaN(_4)){
$(_2).val("");
return;
}
if(_3.min!=null&&_3.min!=undefined&&_4<_3.min){
$(_2).val(_3.min.toFixed(_3.precision));
}else{
if(_3.max!=null&&_3.max!=undefined&&_4>_3.max){
$(_2).val(_3.max.toFixed(_3.precision));
}else{
$(_2).val(_4);
}
}
};
function _5(_6){
$(_6).unbind(".numberbox");
$(_6).bind("keypress.numberbox",function(e){
if(e.which==45){
return true;
}
if(e.which==46){
return true;
}else{
if((e.which>=48&&e.which<=57&&e.ctrlKey==false&&e.shiftKey==false)||e.which==0||e.which==8){
return true;
}else{
if(e.ctrlKey==true&&(e.which==99||e.which==118)){
return true;
}else{
return false;
}
}
}
}).bind("paste.numberbox",function(){
if(window.clipboardData){
var s=clipboardData.getData("text");
if(!/\D/.test(s)){
return true;
}else{
return false;
}
}else{
return false;
}
}).bind("dragenter.numberbox",function(){
return false;
}).bind("blur.numberbox",function(){
_1(_6);
});
};
function _7(_8){
if($.fn.validatebox){
var _9=$.data(_8,"numberbox").options;
$(_8).validatebox(_9);
}
};
$.fn.numberbox=function(_a){
_a=_a||{};
return this.each(function(){
var _b=$.data(this,"numberbox");
if(_b){
$.extend(_b.options,_a);
}else{
var t=$(this);
$.data(this,"numberbox",{options:$.extend({},$.fn.numberbox.defaults,{min:(t.attr("min")=="0"?0:parseFloat(t.attr("min"))||undefined),max:(t.attr("max")=="0"?0:parseFloat(t.attr("max"))||undefined),precision:(parseInt(t.attr("precision"))||undefined)},_a)});
$(this).css({imeMode:"disabled"});
}
_5(this);
_7(this);
});
};
$.fn.numberbox.defaults={min:null,max:null,precision:0};
})(jQuery);

