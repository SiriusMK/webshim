jQuery.webshims.ready("es5",function(b,v,z){var l=v.validityMessages,s=b.support,y=false,p=document;if(s.validity===true)y=!z.noHTMLExtFixes;b.extend(b.expr.filters,{valid:function(q){return(b.attr(q,"validity")||{valid:true}).valid},invalid:function(q){return!b.expr.filters.valid(q)},willValidate:function(q){return b.attr(q,"willValidate")}});v.triggerInlineForm=function(){var q=function(c){if(typeof c!="string"||c.indexOf("-")!==-1||c.indexOf(".")!==-1||c.indexOf('"')!==-1)return"";return"var "+
c+' = this.form["'+c+'"];'};return function(c,e){var d=c["on"+e]||c.getAttribute("on"+e)||"",i;e=b.Event({type:e,target:c[0],currentTarget:c[0]});if(d&&typeof d=="string"&&c.form&&c.form.elements){var n="";i=0;for(var o=c.form.elements,k=o.length;i<k;i++){var t=o[i].name,a=o[i].id;if(t)n+=q(t);if(a&&a!==t)n+=q(a)}i=function(){eval(n+d)}.call(c,e)}b(c).trigger(e);return i}}();v.validityAlert=function(){var q=!b.browser.msie||parseInt(b.browser.version,10)>7?"span":"label",c={hideDelay:5E3,showFor:function(k,
t,a){k=b(k);var h=(k.data("inputUIReplace")||{visual:k}).visual;o();c.clear();this.getMessage(k,t);this.position(h);this.show();if(this.hideDelay)d=setTimeout(i,this.hideDelay);if(!a){k=b("input, select, textarea, .ui-slider-handle",h).filter(":visible:first");k[0]||(k=h);e.attr("for",v.getID(k));k.focus();b(p).bind("focusout.validityalert",i)}},getMessage:function(k,t){b("> span",e).html(t||k.attr("validationMessage"))},position:function(k){var t=k.offset();t.top+=k.outerHeight();e.css(t)},show:function(){e.css("display")===
"none"?e.fadeIn():e.fadeTo(400,1)},hide:function(){c.clear();e.fadeOut()},clear:function(){clearTimeout(d);b(p).unbind("focusout.validityalert");e.stop().removeAttr("for")},alert:b("<"+q+' class="validity-alert" role="alert"><span class="va-box" /></'+q+">").css({position:"absolute",display:"none"})},e=c.alert,d=false,i=b.proxy(c,"hide"),n=false,o=function(){if(!n){n=true;b(function(){e.appendTo("body")})}};return c}();l.en=l.en||l["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};l["en-US"]=l["en-US"]||l.en;l[""]=l[""]||l.en;l.de=l.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",
rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var q,
c=[],e="value"in p.createElement("output")&&"list"in p.createElement("input"),d,i;if(y&&z.addEventListener){var n={timer:void 0,prevented:false};z.addEventListener("submit",function(k){!n.prevented&&k.target.checkValidity&&b.attr(k.target,"novalidate")==null&&b(k.target).checkValidity()},true);var o=function(k){if(b.attr(k.target,"formnovalidate")!=null){n.timer&&clearTimeout(n.timer);n.prevented=true;n.timer=setTimeout(function(){n.prevented=false},20)}};z.addEventListener("click",o,true);z.addEventListener("touchstart",
o,true);z.addEventListener("touchend",o,true)}b(p).bind("invalid",function(k){if(y&&b.attr(k.target,"validity").valid){k.stopImmediatePropagation();return false}if(!q){if((i=k.target.form)&&y){var t=b(i).bind("submit.preventInvalidSubmit",function(a){if(b.attr(i,"novalidate")==null){a.stopImmediatePropagation();return false}}).data("events").submit;t&&t.length>1&&t.unshift(t.pop())}q=b.Event("firstinvalid");b(k.target).trigger(q)}q&&q.isDefaultPrevented()&&k.preventDefault();if(s.validity!==true||
c.indexOf(k.target)==-1)c.push(k.target);else y&&k.stopImmediatePropagation();k.extraData="fix";clearTimeout(d);d=setTimeout(function(){var a={type:"lastinvalid",cancelable:false,invalidlist:b(c)};y&&!e&&p.activeElement&&q&&q.target!==p.activeElement&&!b.data(q.target,"maybePreventedinvalid")&&v.validityAlert.showFor(q.target);q=false;c=[];b(i).unbind("submit.preventInvalidSubmit");b(k.target).trigger(a,a)},9)})})();(function(){if(y){s.fieldsetValidation=s.fieldsetValidation||"shim";var q=function(c){var e=
(b.attr(c,"validity")||{valid:true}).valid;!e&&c.checkValidity()&&b(c).trigger("invalid");return e};v.addMethod("checkValidity",function(){if(this.elements||b.nodeName(this,"fieldset")){var c=true;b(this.elements||"input, textarea, select",this).each(function(){q(this)||(c=false)});return c}else if(this.checkValidity)return q(this)})}})();(function(){var q=s.validity===true&&v.overrideValidationMessages,c=true,e=true;if(s.validity===true){c=!!("required"in p.createElement("select")||z.noHTMLExtFixes);
e=!!(b('<input type="datetime-local" />')[0].type=="datetime-local"&&b('<input type="range" />')[0].type=="range")}var d=!c||!e||q,i=v.inputTypes,n={},o=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],k=b.attr,t=b.fn.val,a=q?{value:1,checked:1}:{value:1},h=q?["textarea"]:[],j={radio:1,checkbox:1},m=function(g,r){if(g.form){var f=(g.getAttribute&&g.getAttribute("type")||g.type||"").toLowerCase();if(!q)if(!(!c&&f=="select-one")&&
!i[f])return;q&&!r&&j[f]&&g.name?b(p.getElementsByName(g.name)).each(function(){b.attr(this,"validity")}):b.attr(g,"validity")}};if(!c||q){b.extend(a,{required:1,size:1,multiple:1,selectedIndex:1});h.push("select")}if(!e||q){b.extend(a,{min:1,max:1,step:1});h.push("input")}var w=l[""];b(p).bind("htmlExtLangChange",function(){v.activeLang(l,"validation-base",function(g){w=g})});v.createValidationMessage=function(g,r){var f=w[r];if(f&&typeof f!=="string")f=f[(g.getAttribute("type")||"").toLowerCase()]||
f.defaultMessage;f&&["value","min","max","title","maxlength","label"].forEach(function(u){if(f.indexOf("{%"+u)!==-1){var x=(u=="label"?b.trim(b("label[for="+g.id+"]",g.form).text()).replace(/\*$|:$/,""):b.attr(g,u))||"";f=f.replace("{%"+u+"}",x);if("value"==u)f=f.replace("{%valueLen}",x.length)}});return f||""};b.each(s.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(g,r){v.attr(r,{elementNames:["input","select","textarea"],getter:function(f){var u=
"";if(!b.attr(f,"willValidate"))return u;var x=b.attr(f,"validity")||{valid:1};if(x.valid)return u;if(x.customError||r==="validationMessage")if(u="validationMessage"in f?f.validationMessage:b.data(f,"customvalidationMessage"))return u;b.each(x,function(A,B){if(!(A=="valid"||!B))if(u=v.createValidationMessage(f,A))return false});return u||""}})});s.validationMessage=s.validationMessage||"shim";v.addMethod("setCustomValidity",function(g){g+="";if(this.setCustomValidity){this.setCustomValidity(g);if(d){b.data(this,
"hasCustomError",!!g);m(this)}}else b.data(this,"customvalidationMessage",""+g)});if(s.validity===true){v.addInputType=function(g,r){i[g]=r};v.addValidityRule=function(g,r){n[g]=r};v.addValidityRule("typeMismatch",function(g,r,f,u){if(r==="")return false;u=u.typeMismatch;if(!("type"in f))f.type=(g[0].getAttribute("type")||"").toLowerCase();if(i[f.type]&&i[f.type].mismatch)u=i[f.type].mismatch(r,g);return u})}if(!c){v.createBooleanAttrs("required",["select"]);v.addValidityRule("valueMissing",function(g,
r,f,u){if(f.nodeName=="select"&&!r&&g.attr("required")&&g[0].size<2){if(!f.type)f.type=g[0].type;if(f.type=="select-one"&&b("> option:first-child:not(:disabled)",g).attr("selected"))return true}return u.valueMissing})}if(d){v.attr("validity",{elementNames:h,getter:function(g){var r=g.validity;if(!r)return r;var f={};o.forEach(function(D){f[D]=r[D]});if(!b.attr(g,"willValidate"))return f;var u=b(g),x={type:(g.getAttribute&&g.getAttribute("type")||"").toLowerCase(),nodeName:(g.nodeName||"").toLowerCase()},
A=t.call(u),B=!!b.data(g,"hasCustomError"),C;f.customError=B;if(f.valid&&f.customError)f.valid=false;else if(!f.valid){var E=true;b.each(f,function(D,F){if(F)return E=false});if(E)f.valid=true}b.each(n,function(D,F){f[D]=F(u,A,x,f);if(f[D]&&(f.valid||!C&&q)){g.setCustomValidity(v.createValidationMessage(g,D));f.valid=false;C=true}});f.valid&&g.setCustomValidity("");return f}});b.fn.val=function(){var g=t.apply(this,arguments);this.each(function(){m(this)});return g};b.attr=function(g,r,f){var u=k.apply(this,
arguments);a[r]&&f!==void 0&&g.form&&m(g);return u};if(p.addEventListener){p.addEventListener("change",function(g){m(g.target)},true);e||p.addEventListener("input",function(g){m(g.target)},true)}v.addReady(function(g){g===p?b(h.join(",")).each(function(){m(this,true)}):b(h.join(","),g).each(function(){m(this,true)})})}})();v.createReadyEvent("validation-base")},true);
(function(b){var v,z=function(l,s,y){if(!v){v=true;var p=parseInt("NaN",10),q=document,c=s.inputTypes,e=function(a){return typeof a=="number"||a&&a==a*1},d=function(a){return l('<input type="'+a+'" />').attr("type")===a},i=function(a){return(a.getAttribute("type")||"").toLowerCase()},n=function(a,h){var j=l.attr(a,"step");if(j==="any")return j;h=h||i(a);if(!c[h]||!c[h].step)return j;j=c.number.asNumber(j);return(!isNaN(j)&&j>0?j:c[h].step)*c[h].stepScaleFactor},o=function(a,h,j){if(!(a+"AsNumber"in
j)){j[a+"AsNumber"]=c[j.type].asNumber(h.attr(a));if(isNaN(j[a+"AsNumber"])&&a+"Default"in c[j.type])j[a+"AsNumber"]=c[j.type][a+"Default"]}},k=function(a,h){a=""+a;h-=a.length;for(var j=0;j<h;j++)a="0"+a;return a};s.addValidityRule("stepMismatch",function(a,h,j){if(h==="")return false;if(!("type"in j))j.type=i(a[0]);if(j.type=="date")return false;var m=false;if(c[j.type]&&c[j.type].step){if(!("step"in j))j.step=n(a[0],j.type);if(j.step=="any")return false;if(!("valueAsNumber"in j))j.valueAsNumber=
c[j.type].asNumber(h);if(isNaN(j.valueAsNumber))return false;o("min",a,j);a=j.minAsNumber;if(isNaN(a))a=c[j.type].stepBase||0;m=Math.abs((j.valueAsNumber-a)%j.step);m=!(m<=1.0E-7||Math.abs(m-j.step)<=1.0E-7)}return m});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(a){s.addValidityRule(a.name,function(h,j,m){var w=false;if(j==="")return w;if(!("type"in m))m.type=i(h[0]);if(c[m.type]&&c[m.type].asNumber){if(!("valueAsNumber"in m))m.valueAsNumber=
c[m.type].asNumber(j);if(isNaN(m.valueAsNumber))return false;o(a.attr,h,m);if(isNaN(m[a.attr+"AsNumber"]))return w;w=m[a.attr+"AsNumber"]*a.factor<m.valueAsNumber*a.factor-1.0E-7}return w})});s.attr("valueAsNumber",{elementNames:["input"],getter:function(a){var h=i(a);return c[h]&&c[h].asNumber?c[h].asNumber(l.attr(a,"value")):p},setter:function(a,h,j){var m=i(a);if(c[m]&&c[m].numberToString)if(isNaN(h))l.attr(a,"value","");else{h=c[m].numberToString(h);if(h!==false)l.attr(a,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else j()}});s.attr("valueAsDate",{elementNames:["input"],getter:function(a){var h=i(a);return c[h]&&c[h].asDate&&!c[h].noAsDate?c[h].asDate(l.attr(a,"value")):null},setter:function(a,h,j){var m=i(a);if(c[m]&&c[m].dateToString){if(!y.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(h===null)l.attr(a,"value","");else{h=c[m].dateToString(h);if(h!==false)l.attr(a,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else j()}});var t={number:{mismatch:function(a){return!e(a)},
step:1,stepScaleFactor:1,asNumber:function(a){return e(a)?a*1:p},numberToString:function(a){return e(a)?a:false}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(a){if(!a||!a.split||!/\d$/.test(a))return true;var h=a.split(/\u002D/);if(h.length!==3)return true;var j=false;l.each(h,function(m,w){if(!(e(w)||w&&w=="0"+w*1)){j=true;return false}});if(j)return j;if(h[0].length!==4||h[1].length!=2||h[1]>12||h[2].length!=2||h[2]>33)j=true;return a!==this.dateToString(this.asDate(a,true))},step:1,
stepScaleFactor:864E5,asDate:function(a,h){if(!h&&this.mismatch(a))return null;return new Date(this.asNumber(a,true))},asNumber:function(a,h){var j=p;if(h||!this.mismatch(a)){a=a.split(/\u002D/);j=Date.UTC(a[0],a[1]-1,a[2])}return j},numberToString:function(a){return e(a)?this.dateToString(new Date(a*1)):false},dateToString:function(a){return a&&a.getFullYear?a.getUTCFullYear()+"-"+k(a.getUTCMonth()+1,2)+"-"+k(a.getUTCDate(),2):false}},time:{mismatch:function(a,h){if(!a||!a.split||!/\d$/.test(a))return true;
a=a.split(/\u003A/);if(a.length<2||a.length>3)return true;var j=false,m;if(a[2]){a[2]=a[2].split(/\u002E/);m=parseInt(a[2][1],10);a[2]=a[2][0]}l.each(a,function(w,g){if(!(e(g)||g&&g=="0"+g*1)||g.length!==2){j=true;return false}});if(j)return true;if(a[0]>23||a[0]<0||a[1]>59||a[1]<0)return true;if(a[2]&&(a[2]>59||a[2]<0))return true;if(m&&isNaN(m))return true;if(m)if(m<100)m*=100;else if(m<10)m*=10;return h===true?[a,m]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(a){a=new Date(this.asNumber(a));
return isNaN(a)?null:a},asNumber:function(a){var h=p;a=this.mismatch(a,true);if(a!==true){h=Date.UTC("1970",0,1,a[0][0],a[0][1],a[0][2]||0);if(a[1])h+=a[1]}return h},dateToString:function(a){if(a&&a.getUTCHours){var h=k(a.getUTCHours(),2)+":"+k(a.getUTCMinutes(),2),j=a.getSeconds();if(j!="0")h+=":"+k(j,2);j=a.getUTCMilliseconds();if(j!="0")h+="."+k(j,3);return h}else return false}},"datetime-local":{mismatch:function(a,h){if(!a||!a.split||(a+"special").split(/\u0054/).length!==2)return true;a=a.split(/\u0054/);
return c.date.mismatch(a[0])||c.time.mismatch(a[1],h)},noAsDate:true,asDate:function(a){a=new Date(this.asNumber(a));return isNaN(a)?null:a},asNumber:function(a){var h=p,j=this.mismatch(a,true);if(j!==true){a=a.split(/\u0054/)[0].split(/\u002D/);h=Date.UTC(a[0],a[1]-1,a[2],j[0][0],j[0][1],j[0][2]||0);if(j[1])h+=j[1]}return h},dateToString:function(a,h){return c.date.dateToString(a)+"T"+c.time.dateToString(a,h)}}};d("number")||s.addInputType("number",t.number);d("range")||s.addInputType("range",l.extend({},
t.number,t.range));d("date")||s.addInputType("date",t.date);d("time")||s.addInputType("time",l.extend({},t.date,t.time));d("datetime-local")||s.addInputType("datetime-local",l.extend({},t.date,t.time,t["datetime-local"]));(function(){var a=s.modules["number-date-type"].options,h=function(g,r,f){f=f||{};if(!("type"in f))f.type=i(g);if(!("step"in f))f.step=n(g,f.type);if(!("valueAsNumber"in f))f.valueAsNumber=c[f.type].asNumber(l.attr(g,"value"));var u=f.step=="any"?c[f.type].step*c[f.type].stepScaleFactor:
f.step;o("min",l(g),f);o("max",l(g),f);if(isNaN(f.valueAsNumber))f.valueAsNumber=c[f.type].stepBase||0;if(f.step!=="any")if((g=Math.round((f.valueAsNumber-(f.minAsnumber||0))%f.step*1E7)/1E7)&&Math.abs(g)!=f.step)f.valueAsNumber-=g;g=f.valueAsNumber+u*r;if(!isNaN(f.minAsNumber)&&g<f.minAsNumber)g=f.valueAsNumber*r<f.minAsNumber?f.minAsNumber:isNaN(f.maxAsNumber)?Number.MAX_VALUE:f.maxAsNumber;else if(!isNaN(f.maxAsNumber)&&g>f.maxAsNumber)g=f.valueAsNumber*r>f.maxAsNumber?f.maxAsNumber:isNaN(f.minAsNumber)?
Number.MIN_VALUE:f.minAsNumber;return Math.round(g*1E7)/1E7};s.modules["number-date-type"].getNextStep=h;var j=function(g,r,f){if(!(g.disabled||g.readOnly||l(f).hasClass("step-controls"))){l.attr(g,"value",c[r].numberToString(h(g,l(f).hasClass("step-up")?1:-1,{type:r})));l(g).unbind("blur.stepeventshim");s.triggerInlineForm(g,"input");if(q.activeElement){if(q.activeElement!==g)try{g.focus()}catch(u){}setTimeout(function(){if(q.activeElement!==g)try{g.focus()}catch(x){}l(g).one("blur.stepeventshim",
function(){l(g).trigger("change")})},0)}}};if(a.stepArrows){var m={elementNames:["input"],setter:function(g,r,f){f();if(r=l.data(g,"step-controls"))r[g.disabled||g.readonly?"addClass":"removeClass"]("disabled-step-control")}};s.attr("disabled",m);s.attr("readonly",m)}var w={38:1,40:-1};s.addReady(function(g){a.stepArrows&&l("input",g).each(function(){var r=i(this);if(!(!c[r]||!c[r].asNumber||!a.stepArrows||a.stepArrows!==true&&!a.stepArrows[r])){var f=this,u=l(this).css("direction")=="rtl"?{action:"insertBefore",
side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"Left"},x=l('<span class="step-controls" unselectable="on"><span class="step-up" /><span class="step-down" /></span>')[u.action](this).bind("selectstart dragstart",function(){return false}).bind("mousedown mousepress",function(E){j(f,r,E.target);return false});l(this).addClass("has-step-controls").data("step-controls",x).attr({readonly:this.readOnly,disabled:this.disabled}).bind("keypress",function(E){if(!(this.disabled||
this.readOnly||!w[E.keyCode])){l.attr(this,"value",c[r].numberToString(h(this,w[E.keyCode],{type:r})));s.triggerInlineForm(this,"input");return false}});if(a.calculateWidth){var A=l(this),B={w:A.getwidth()};if(B.w){var C={mL:parseInt(x.css("margin"+u.otherSide),10)||0,w:x.getouterWidth()};B.mR=parseInt(A.css("margin"+u.side),10)||0;B.mR&&A.css("margin"+u.side,0);if(C.mL<=C.w*-1){x.css("margin"+u.side,Math.abs(C.w+C.mL)+B.mR);A.css("padding"+u.side,(parseInt(l(this).css("padding"+u.side),10)||0)+Math.abs(C.mL));
A.css("width",B.w+C.mL)}else{x.css("margin"+u.side,B.mR);A.css("width",B.w-C.mL-C.w)}}}}})})})();s.attr("type",{elementNames:["input"],getter:function(a){var h=i(a);return s.inputTypes[h]?h:a.type||a.getAttribute("type")},setter:true});s.createReadyEvent("number-date-type")}};b.support.validity===true?b.webshims.ready("validation-base",z,true):b.webshims.ready("validity",z,true)})(jQuery);
jQuery.webshims.ready("number-date-type",function(b,v,z,l){b.support.inputUI="shim";var s=b.webshims.modules.inputUI.options,y,p=function(c){b("input",c).each(function(){var e=b.attr(this,"type");p[e]&&!b.data(this,"inputUIReplace")&&p[e](b(this))})};p.common=function(c,e,d){if(s.replaceNative)(function(){var o=[],k;c.bind("firstinvalid invalid",function(t){clearTimeout(k);o.push(t);k=setTimeout(function(){if(!b.data(t.target,"maybePreventedinvalid")&&(!o[0]||!o[0].isDefaultPrevented())&&(!o[1]||
!o[1].isDefaultPrevented())){var a=t.target,h=a.nodeName;if(a.id)h+="#"+a.id;if(a.name)h+="[name="+a.name+"]";if(a.className)h+="."+a.className.split(" ").join(".");throw h+" can not be focused. handle the invalid event.";}o=[]},30)})})();else b.support.validity===true&&c.bind("firstinvalid",function(o){clearTimeout(y);y=setTimeout(function(){!b.data(o.target,"maybePreventedinvalid")&&!o.isDefaultPrevented()&&v.validityAlert.showFor(o.target)},30)});var i=c.attr("id");i={css:{marginRight:c.css("marginRight"),
marginLeft:c.css("marginLeft")},outerWidth:c.getouterWidth(),label:i?b("label[for="+i+"]",c[0].form):b([])};var n=v.getID(i.label);e.addClass(c[0].className).data("html5element",c);c.after(e).data("inputUIReplace",{visual:e,methods:d}).hide();if(e.length==1&&!b("*",e)[0]){e.attr("aria-labeledby",n);i.label.bind("click",function(){e.focus();return false})}return i};p["datetime-local"]=function(c){if(b.fn.datepicker){var e=b('<span class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),
d=this.common(c,e,p["datetime-local"].attrs),i=b("input.input-datetime-local-date",e);b("input",e).data("html5element",b.data(e[0],"html5element"));i.attr("aria-labeledby",d.label.attr("id"));d.label.bind("click",function(){i.focus();return false});if(d.css){e.css(d.css);if(d.outerWidth){e.outerWidth(d.outerWidth);d=e.getwidth();i.css({marginLeft:0,marginRight:2}).outerWidth(Math.floor(d*0.61));b("input.input-datetime-local-time").css({marginLeft:2,marginRight:0}).outerWidth(Math.floor(d*0.37))}}v.triggerDomUpdate(e);
b("input.input-datetime-local-date",e).datepicker(b.extend({},s.datepicker)).bind("change",function(){var n,o=b("input.input-datetime-local-time",e).attr("value");try{n=(n=b.datepicker.parseDate(i.datepicker("option","dateFormat"),i.attr("value")))?b.datepicker.formatDate("yy-mm-dd",n):i.attr("value")}catch(k){n=i.attr("value")}if(!b("input.input-datetime-local-time",e).attr("value")){o="00:00";b("input.input-datetime-local-time",e).attr("value",o)}p["datetime-local"].blockAttr=true;c.attr("value",
n+"T"+o);p["datetime-local"].blockAttr=false;c.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");b("input.input-datetime-local-time",e).bind("input change",function(){var n=c.attr("value").split("T");if(n.length<2||!n[0])n[0]=b.datepicker.formatDate("yy-mm-dd",new Date);n[1]=b.attr(this,"value");p["datetime-local"].blockAttr=true;try{i.attr("value",b.datepicker.formatDate(i.datepicker("option","dateFormat"),b.datepicker.parseDate("yy-mm-dd",n[0])))}catch(o){}c.attr("value",
n.join("T"));p["datetime-local"].blockAttr=false;c.trigger("change")});b.each(["disabled","min","max","value","step"],function(n,o){c.attr(o,function(k,t){return t||""})})}};p["datetime-local"].attrs={disabled:function(c,e,d){b("input.input-datetime-local-date",e).datepicker("option","disabled",!!d);b("input.input-datetime-local-time",e).attr("disabled",!!d)},step:function(c,e,d){b("input.input-datetime-local-time",e).attr("step",d)},min:function(c,e,d){d=d.split?d.split("T"):[];try{d=b.datepicker.parseDate("yy-mm-dd",
d[0])}catch(i){d=false}d&&b("input.input-datetime-local-date",e).datepicker("option","minDate",d)},max:function(c,e,d){d=d.split?d.split("T"):[];try{d=b.datepicker.parseDate("yy-mm-dd",d[0])}catch(i){d=false}d&&b("input.input-datetime-local-date",e).datepicker("option","maxDate",d)},value:function(c,e,d){if(!p["datetime-local"].blockAttr){var i;d=d.split?d.split("T"):[];try{i=b.datepicker.parseDate("yy-mm-dd",d[0])}catch(n){i=false}if(i){b("input.input-datetime-local-date",e).datepicker("setDate",
i);b("input.input-datetime-local-time",e).attr("value",d[1]||"00:00")}else{b("input.input-datetime-local-date",e).attr("value",d[0]||"");b("input.input-datetime-local-time",e).attr("value",d[1]||"")}}}};p.date=function(c){if(b.fn.datepicker){var e=b('<input type="text" class="input-date" />'),d=this.common(c,e,p.date.attrs);if(d.css){e.css(d.css);d.outerWidth&&e.outerWidth(d.outerWidth)}e.datepicker(b.extend({},s.datepicker)).bind("change",function(){p.date.blockAttr=true;var i;try{i=(i=b.datepicker.parseDate(e.datepicker("option",
"dateFormat"),e.attr("value")))?b.datepicker.formatDate("yy-mm-dd",i):e.attr("value")}catch(n){i=e.attr("value")}c.attr("value",i);p.date.blockAttr=false;c.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");b.each(["disabled","min","max","value"],function(i,n){c.attr(n,function(o,k){return k||""})})}};p.date.attrs={disabled:function(c,e,d){e.datepicker("option","disabled",!!d)},min:function(c,e,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(i){d=false}d&&e.datepicker("option",
"minDate",d)},max:function(c,e,d){try{d=b.datepicker.parseDate("yy-mm-dd",d)}catch(i){d=false}d&&e.datepicker("option","maxDate",d)},value:function(c,e,d){if(!p.date.blockAttr){try{var i=b.datepicker.parseDate("yy-mm-dd",d)}catch(n){i=false}i?e.datepicker("setDate",i):e.attr("value",d)}}};p.range=function(c){if(b.fn.slider){var e=b('<span class="input-range"><span class="ui-slider-handle" role="slider" tabindex="0" /></span>'),d=this.common(c,e,p.range.attrs),i=function(n,o){if(n.originalEvent){p.range.blockAttr=
true;c.attr("value",o.value);p.range.blockAttr=false;n.type=="slidechange"?c.trigger("change"):v.triggerInlineForm(c[0],"input")}};b("span",e).attr("aria-labeledby",d.label.attr("id"));d.label.bind("click",function(){b("span",e).focus();return false});if(d.css){e.css(d.css);d.outerWidth&&e.outerWidth(d.outerWidth)}e.slider(b.extend(s.slider,{change:i,slide:i}));b.each(["disabled","min","max","value","step"],function(n,o){c.attr(o,function(k,t){return t||""})})}};p.range.attrs={disabled:function(c,
e,d){d=!!d;e.slider("option","disabled",d);b("span",e).attr({"aria-disabled":d+"",tabindex:d?"-1":"0"})},min:function(c,e,d){d=d?d*1||0:0;e.slider("option","min",d);b("span",e).attr({"aria-valuemin":d})},max:function(c,e,d){d=d||d===0?d*1||100:100;e.slider("option","max",d);b("span",e).attr({"aria-valuemax":d})},value:function(c,e,d){d=b(c).attr("valueAsNumber");if(isNaN(d)){d=(e.slider("option","max")-e.slider("option","min"))/2;c.value=d}p.range.blockAttr||e.slider("option","value",d);b("span",
e).attr({"aria-valuenow":d,"aria-valuetext":d})},step:function(c,e,d){d=d&&b.trim(d)?d*1||1:1;e.slider("option","step",d)}};b.each(["disabled","min","max","value","step"],function(c,e){v.attr(e,{elementNames:["input"],setter:function(d,i,n){var o=b.data(d,"inputUIReplace");n();o&&o.methods[e]&&o.methods[e](d,o.visual,i)},getter:true})});var q=function(c){if(c){c=b.extend({},c,s.date);b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",c).each(function(){var e=
b.data(this,"html5element");e&&b.each(["disabled","min","max","value"],function(d,i){e.attr(i,function(n,o){return o||""})})});b.datepicker.setDefaults(c)}};b(l).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){b.datepicker&&b(l).bind("htmlExtLangChange",function(){v.activeLang(b.datepicker.regional,"inputUI",q)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});v.addReady(function(c){b(l).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(b.datepicker||b.fn.slider)p(c);b.datepicker&&b.fn.slider&&b(l).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui");c===l&&v.createReadyEvent("inputUI")})})},true);
