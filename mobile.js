define([],function(){function d(e,t){document.getElementById("viewer").className="",setTimeout(function(){c.className="anm-swipe"},0),m=!0,document.ontouchstart=function(e){if("A"!=e.target.tagName)return!1}}function o(){document.getElementById("viewer-box").className="",m=!1,document.ontouchstart=function(){return!0}}var s,a,r,l,c,m=!1;return{init:function(){l=document.getElementsByClassName("slider-trigger")[0],document.body.scrollHeight/document.body.scrollWidth,document.body.scrollWidth,0,function(){var e=document.createElement("div");function t(e){return $("link.menu-list").attr(e)}e.id="viewer",e.className="hide",s=document.getElementById("js-tagcloud"),a=document.getElementById("js-aboutme"),r=document.getElementById("js-friends");var n=s?'<span class="viewer-title">'+t("tags")+'</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>':"",i=r?'<span class="viewer-title">'+t("friends")+'</span><div class="viewer-div friends" id="js-mobile-friends"></div>':"",d=a?'<span class="viewer-title">'+t("about")+'</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>':"";e.innerHTML='<div id="viewer-box">        <div class="viewer-box-l">            <div class="viewer-box-wrap">'+d+i+n+'</div>        </div>        <div class="viewer-box-r"></div>        </div>',document.getElementsByTagName("body")[0].appendChild(e);var o=document.getElementById("viewer-box");(c=o).style.height=document.body.scrollHeight+"px"}(),s&&(document.getElementById("js-mobile-tagcloud").innerHTML=s.innerHTML),a&&(document.getElementById("js-mobile-aboutme").innerHTML=a.innerHTML),r&&(document.getElementById("js-mobile-friends").innerHTML=r.innerHTML),function(){document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){0==m&&(document.getElementById("viewer").className="hide",m=!0)},!1),l.addEventListener("touchend",function(){d()},!1);var e,t=document.getElementsByClassName("viewer-box-r")[0];t.addEventListener("touchstart",function(){e=+new Date},!1),t.addEventListener("touchend",function(){+new Date-e<300&&o(),e=0},!1),$(".slider-trigger").click(function(){d()}),$(".viewer-box-r").click(function(){o()});var n=$("#mobile-nav .overlay"),i=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;69<=e?n.addClass("fixed"):n.removeClass("fixed"),160<=e?i.removeClass("hide").addClass("fixed"):i.addClass("hide").removeClass("fixed")},i[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},!1)}(),resetTags()}}});