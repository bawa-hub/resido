$((function(){"use strict";var e,n,t,a,i,o=new LazyLoad,s="rtl"===$("body").prop("dir"),r=function(e){window.showAlert("alert-danger",e)},l=function(e){window.showAlert("alert-success",e)},c=function(e){void 0!==e.errors&&e.errors.length?d(e.errors):void 0!==e.responseJSON?void 0!==e.responseJSON.errors?422===e.status&&d(e.responseJSON.errors):void 0!==e.responseJSON.message?r(e.responseJSON.message):$.each(e.responseJSON,(function(e,n){$.each(n,(function(e,n){r(n)}))})):r(e.statusText)},d=function(e){var n="";$.each(e,(function(e,t){""!==n&&(n+="<br />"),n+=t})),r(n)};function u(){$('.property-search-type label.active input[type="radio"]').prop("checked",!0);var e=$(".property-search-type label.active").width(),n=$(".property-search-type label.active").position();$(".property-search-type-arrow").css("left",n+e/2),$(".property-search-type label").on("change",(function(){$('.property-search-type input[type="radio"]').parent("label").removeClass("active"),$('.property-search-type input[type="radio"]:checked').parent("label").addClass("active");var e=$(".property-search-type label.active").width(),n=$(".property-search-type label.active").position().left;$(".property-search-type-arrow").css({left:n+e/1.7,transition:"left 0.4s cubic-bezier(.95,-.41,.19,1.44)"})}))}window.showAlert=function(e,n){if(e&&""!==n){var t=Math.floor(1e3*Math.random()),a='<div class="alert '.concat(e,' alert-dismissible" id="').concat(t,'">\n                                <span class="close elegant-icon icon_close" data-dismiss="alert" aria-label="close"></span>\n                                <i class="fas fa-')+("alert-success"===e?"check":"times")+' message-icon"></i>\n                                '.concat(n,"\n                            </div>");$("#alert-container").append(a).ready((function(){window.setTimeout((function(){$("#alert-container #".concat(t)).remove()}),6e3)}))}},$.ajaxSetup({headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}),$(window).on("load",(function(){$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).css({overflow:"visible"}),o.update()})),$.fn.magnificPopup&&$("#popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,hiddenClass:"zxcv",overflowY:"hidden",iframe:{patterns:{youtube:{index:"youtube.com",id:function(e){var n=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return n&&11==n[7].length?n[7]:e},src:"//www.youtube.com/embed/%id%?autoplay=1"}}}}),$("#map").length&&function(){var e=$("#map"),n=0,t=1,a={type:e.data("type"),page:t},i=$("#map").data("center"),o=$("#properties-list .property-item[data-lat][data-long]").filter((function(){return $(this).data("lat")&&$(this).data("long")}));o&&o.length&&(i=[o.data("lat"),o.data("long")]),window.activeMap&&(window.activeMap.off(),window.activeMap.remove());var s=L.map("map",{zoomControl:!0,scrollWheelZoom:!0,dragging:!0,maxZoom:22}).setView(i,14);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(s);var r=new L.MarkerClusterGroup,l=[],c=$("#traffic-popup-map-template").html();!function i(){return(0==n||t<=n)&&(a.page=t,$.ajax({url:e.data("url"),type:"POST",data:a,success:function(e){e.data.length>0&&(e.data.forEach((function(e){if(e.latitude&&e.longitude){var n=L.divIcon({className:"boxmarker",iconSize:L.point(50,20),html:e.map_icon}),t=function(e,n){var t=Object.keys(e);for(var a in t)if(t.hasOwnProperty(a)){var i=t[a];n=n.replace(new RegExp("__"+i+"__","gi"),e[i]||"")}return n}(e,c),a=new L.Marker(new L.LatLng(e.latitude,e.longitude),{icon:n}).bindPopup(t).addTo(s);l.push(a),r.addLayer(a),s.flyToBounds(L.latLngBounds(l.map((function(e){return e.getLatLng()}))))}})),0==n&&(n=e.meta.last_page),t++,i())}})),!1}(),s.addLayer(r),window.activeMap=s}(),$('[data-popup-id="#traffic-popup-map-template"]').length&&function(n){e&&(e.off(),e.remove()),e=L.map(n.data("map-id"),{zoomControl:!1,scrollWheelZoom:!0,dragging:!0,maxZoom:22}).setView(n.data("center"),14);var t=L.divIcon({className:"boxmarker",iconSize:L.point(50,20),html:n.data("map-icon")});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(e),L.marker(n.data("center"),{icon:t}).addTo(e).bindPopup($(n.data("popup-id")).html()).openPopup()}($('[data-popup-id="#traffic-popup-map-template"]')),$(document).on("submit","#ajax-filters-form",(function(e){e.preventDefault();var n=$(e.currentTarget),t=n.serializeArray(),a=[],i=[];t.forEach((function(e){e.value&&(a.push(e),i.push(e.name+"="+e.value))}));var o=n.attr("action")+(i&&i.length?"?"+i.join("&"):"");n.find(".select-dropdown").map((function(){showTextForDropdownSelect($(this))})),a.push({name:"is_searching",value:1}),$.ajax({url:n.attr("action"),type:"GET",data:a,beforeSend:function(){$("#loading").show(),$("html, body").animate({scrollTop:$("#ajax-filters-form").offset().top-($(".main-header").height()+50)},500),n.find(".search-box").removeClass("active")},success:function(e){if(0==e.error){if(console.log(n.find(".data-listing")),n.find(".data-listing").html(e.data),window.wishlishInElement(n.find(".data-listing")),window.activeMap){var t=$("#properties-list .property-item[data-lat][data-long]").filter((function(){return $(this).data("lat")&&$(this).data("long")}));t.length&&window.activeMap.setView([t.data("lat"),t.data("long")],8)}o!=window.location.href&&window.history.pushState(a,e.message,o)}else window.showAlert("alert-error",e.message||"Opp!")},complete:function(){$("#loading").hide()}})})),$(document).on("click","#ajax-filters-form .pagination a",(function(e){e.preventDefault();var n=new URL($(e.currentTarget).attr("href")).searchParams.get("page");$("#ajax-filters-form input[name=page]").val(n),$("#ajax-filters-form").trigger("submit")})),$(document).on("change","#ajax-filters-form select, #ajax-filters-form .input-filter",(function(e){$("#ajax-filters-form").trigger("submit")})),window.addEventListener("popstate",(function(){var e=$("#ajax-filters-form"),n=window.location.origin+window.location.pathname;if(e.attr("action")==n){var t=function(){var e,n,t=window.location.search.substring(1).split("&"),a={};for(n in t)""!==t[n]&&(e=t[n].split("="),a[decodeURIComponent(e[0])]=decodeURIComponent(e[1]));return a}();e.find("input, select, textarea").each((function(e,n){var a=$(n),i=t[a.attr("name")]||"";a.val()!=i&&a.val(i).trigger("change")})),e.trigger("submit")}else history.back()}),!1),$("select.rating").length&&$(document).find("select.rating").each((function(){var e;e="true"===$(this).attr("data-read-only"),$(this).barrating({theme:"fontawesome-stars",readonly:e,initialRating:5,onSelect:function(e,n){var t,a;t=0,$(document).find("select.rating").each((function(){t+=parseFloat($(this).val())})),a=t/$(document).find("select.rating").length,$('input[name="star"]').val(a),$(".user_commnet_avg_rate").html(a)}})})),$(window).on("scroll",(function(){$(window).scrollTop()>100?$("#back2Top").fadeIn():$("#back2Top").fadeOut()})),$("#back2Top").on("click",(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},"slow"),!1})),n=jQuery,t=window,a=document,n.navigation=function(e,o){var s={responsive:!0,mobileBreakpoint:992,showDuration:300,hideDuration:300,showDelayDuration:0,hideDelayDuration:0,submenuTrigger:"hover",effect:"fade",submenuIndicator:!0,hideSubWhenGoOut:!0,visibleSubmenusOnMobile:!1,fixed:!1,overlay:!0,overlayColor:"rgba(0, 0, 0, 0.5)",hidden:!1,offCanvasSide:"left",onInit:function(){},onShowOffCanvas:function(){},onHideOffCanvas:function(){}},r=this,l=Number.MAX_VALUE,c=1,d="click.nav touchstart.nav",u="mouseenter.nav",p="mouseleave.nav";r.settings={},n(e),n(e=e).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"),n(e).find(".nav-search").length>0&&n(e).find(".nav-search").find("form").prepend("<span class='nav-search-close-button'>✕</span>"),r.init=function(){r.settings=n.extend({},s,o),"right"==r.settings.offCanvasSide&&n(e).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"),r.settings.hidden&&(n(e).addClass("navigation-hidden"),r.settings.mobileBreakpoint=99999),f(),r.settings.fixed&&n(e).addClass("navigation-fixed"),n(e).find(".nav-toggle").on("click touchstart",(function(e){e.stopPropagation(),e.preventDefault(),r.showOffcanvas(),o!==i&&r.callback("onShowOffCanvas")})),n(e).find(".nav-menus-wrapper-close-button").on("click touchstart",(function(){r.hideOffcanvas(),o!==i&&r.callback("onHideOffCanvas")})),n(e).find(".nav-search-button").on("click touchstart",(function(e){e.stopPropagation(),e.preventDefault(),r.toggleSearch()})),n(e).find(".nav-search-close-button").on("click touchstart",(function(){r.toggleSearch()})),n(e).find(".megamenu-tabs").length>0&&w(),n(t).resize((function(){m(),b()})),m(),o!==i&&r.callback("onInit")};var f=function(){n(e).find("li").each((function(){n(this).children(".nav-dropdown,.megamenu-panel").length>0&&(n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"),r.settings.submenuIndicator&&n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))}))};r.showSubmenu=function(t,a){g()>r.settings.mobileBreakpoint&&n(e).find(".nav-search").find("form").slideUp(),"fade"==a?n(t).children(".nav-submenu").stop(!0,!0).delay(r.settings.showDelayDuration).fadeIn(r.settings.showDuration):n(t).children(".nav-submenu").stop(!0,!0).delay(r.settings.showDelayDuration).slideDown(r.settings.showDuration),n(t).addClass("nav-submenu-open")},r.hideSubmenu=function(e,t){"fade"==t?n(e).find(".nav-submenu").stop(!0,!0).delay(r.settings.hideDelayDuration).fadeOut(r.settings.hideDuration):n(e).find(".nav-submenu").stop(!0,!0).delay(r.settings.hideDelayDuration).slideUp(r.settings.hideDuration),n(e).removeClass("nav-submenu-open").find(".nav-submenu-open").removeClass("nav-submenu-open")};var h=function(){n("body").removeClass("no-scroll"),r.settings.overlay&&n(e).find(".nav-overlay-panel").fadeOut(400,(function(){n(this).remove()}))};r.showOffcanvas=function(){n("body").addClass("no-scroll"),r.settings.overlay&&(n(e).append("<div class='nav-overlay-panel'></div>"),n(e).find(".nav-overlay-panel").css("background-color",r.settings.overlayColor).fadeIn(300).on("click touchstart",(function(e){r.hideOffcanvas()}))),"left"==r.settings.offCanvasSide?n(e).find(".nav-menus-wrapper").css("transition-property","left").addClass("nav-menus-wrapper-open"):n(e).find(".nav-menus-wrapper").css("transition-property","right").addClass("nav-menus-wrapper-open")},r.hideOffcanvas=function(){n(e).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd",(function(){n(e).find(".nav-menus-wrapper").css("transition-property","none").off()})),h()},r.toggleOffcanvas=function(){g()<=r.settings.mobileBreakpoint&&(n(e).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open")?(r.hideOffcanvas(),o!==i&&r.callback("onHideOffCanvas")):(r.showOffcanvas(),o!==i&&r.callback("onShowOffCanvas")))},r.toggleSearch=function(){"none"==n(e).find(".nav-search").find("form").css("display")?(n(e).find(".nav-search").find("form").slideDown(),n(e).find(".nav-submenu").fadeOut(200)):n(e).find(".nav-search").find("form").slideUp()};var m=function(){r.settings.responsive?(g()<=r.settings.mobileBreakpoint&&l>r.settings.mobileBreakpoint&&(n(e).addClass("navigation-portrait").removeClass("navigation-landscape"),y()),g()>r.settings.mobileBreakpoint&&c<=r.settings.mobileBreakpoint&&(n(e).addClass("navigation-landscape").removeClass("navigation-portrait"),$(),h(),r.hideOffcanvas()),l=g(),c=g()):$()},g=function(){return t.innerWidth||a.documentElement.clientWidth||a.body.clientWidth},v=function(){n(e).find(".nav-menu").find("li, a").off(d).off(u).off(p)},b=function(){if(g()>r.settings.mobileBreakpoint){var t=n(e).outerWidth(!0);n(e).find(".nav-menu").children("li").children(".nav-submenu").each((function(){n(this).parent().position().left+n(this).outerWidth()>t?n(this).css("right",0):n(this).css("right","auto")}))}},w=function(){function t(e){var t=n(e).children(".megamenu-tabs-nav").children("li"),a=n(e).children(".megamenu-tabs-pane");n(t).on("click.tabs touchstart.tabs",(function(e){e.stopPropagation(),e.preventDefault(),n(t).removeClass("active"),n(this).addClass("active"),n(a).hide(0).removeClass("active"),n(a[n(this).index()]).show(0).addClass("active")}))}if(n(e).find(".megamenu-tabs").length>0)for(var a=n(e).find(".megamenu-tabs"),i=0;i<a.length;i++)t(a[i])},$=function(){v(),n(e).find(".nav-submenu").hide(0),navigator.userAgent.match(/Mobi/i)||navigator.maxTouchPoints>0||"click"==r.settings.submenuTrigger?n(e).find(".nav-menu, .nav-dropdown").children("li").children("a").on(d,(function(e){if(r.hideSubmenu(n(this).parent("li").siblings("li"),r.settings.effect),n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(r.settings.hideDuration),n(this).siblings(".nav-submenu").length>0){if(e.stopPropagation(),e.preventDefault(),"none"==n(this).siblings(".nav-submenu").css("display"))return r.showSubmenu(n(this).parent("li"),r.settings.effect),b(),!1;if(r.hideSubmenu(n(this).parent("li"),r.settings.effect),"_blank"==n(this).attr("target")||"blank"==n(this).attr("target"))t.open(n(this).attr("href"));else{if("#"==n(this).attr("href")||""==n(this).attr("href"))return!1;t.location.href=n(this).attr("href")}}})):n(e).find(".nav-menu").find("li").on(u,(function(){r.showSubmenu(this,r.settings.effect),b()})).on(p,(function(){r.hideSubmenu(this,r.settings.effect)})),r.settings.hideSubWhenGoOut&&n("body").on("click.body touchstart.body",(function(t){0===n(t.target).closest(".navigation").length&&(n(e).find(".nav-submenu").fadeOut(),n(e).find(".nav-submenu-open").removeClass("nav-submenu-open"),n(e).find(".nav-search").find("form").slideUp())}))},y=function(){v(),n(e).find(".nav-submenu").hide(0),r.settings.visibleSubmenusOnMobile?n(e).find(".nav-submenu").show(0):(n(e).find(".nav-submenu").hide(0),n(e).find(".submenu-indicator").removeClass("submenu-indicator-up"),r.settings.submenuIndicator?n(e).find(".submenu-indicator").on(d,(function(e){return e.stopPropagation(),e.preventDefault(),r.hideSubmenu(n(this).parent("a").parent("li").siblings("li"),"slide"),r.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"),"slide"),"none"==n(this).parent("a").siblings(".nav-submenu").css("display")?(n(this).addClass("submenu-indicator-up"),n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"),r.showSubmenu(n(this).parent("a").parent("li"),"slide"),!1):(n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),void r.hideSubmenu(n(this).parent("a").parent("li"),"slide"))})):$())};r.callback=function(n){o[n]!==i&&o[n].call(e)},r.init()},n.fn.navigation=function(e){return this.each((function(){if(i===n(this).data("navigation")){var t=new n.navigation(this,e);n(this).data("navigation",t)}}))},$(document).ready((function(){$("#navigation").navigation()})),$(window).scroll((function(){$(window).scrollTop()>=50?$(".header").addClass("header-fixed"):$(".header").removeClass("header-fixed")})),$(".csm-trigger").on("click",(function(){$(".compare-slide-menu").toggleClass("active")})),$(".compare-button").on("click",(function(){$(".compare-slide-menu").addClass("active")})),$(".property-slide").slick({slidesToShow:3,arrows:!1,rtl:s,dots:!0,autoplay:!0,responsive:[{breakpoint:1024,settings:{arrows:!1,slidesToShow:2}},{breakpoint:600,settings:{arrows:!1,slidesToShow:1}}]}),$(".location-slide").slick({slidesToShow:4,dots:!0,rtl:s,arrows:!1,autoplay:!0,responsive:[{breakpoint:1024,settings:{arrows:!1,slidesToShow:3}},{breakpoint:600,settings:{arrows:!1,slidesToShow:1}}]}),$(".team-slide").slick({slidesToShow:4,arrows:!1,rtl:s,autoplay:!0,dots:!0,responsive:[{breakpoint:1023,settings:{arrows:!1,dots:!0,slidesToShow:3}},{breakpoint:768,settings:{arrows:!1,slidesToShow:2}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]}),$(".js-range-slider").length&&$(".js-range-slider").ionRangeSlider({type:"double",min:0,max:1e3,from:200,to:500,grid:!0}),$("#select-bedroom").length&&$("#select-bedroom").select2({allowClear:!0}),$("#select-bathroom").length&&$("#select-bathroom").select2({allowClear:!0}),$("#ptypes").length&&$("#ptypes").select2({allowClear:!0}),$("#select-type").length&&$("#select-type").select2({allowClear:!0}),$("#sort_by").length&&($("#sort_by").select2({allowClear:!0}),$("body").on("change","#sort_by",(function(){$("#filter_sort_by").val($(this).val()),$("form#filters-form").submit()}))),$("#minprice").length&&$("#minprice").select2({allowClear:!0}),$("#maxprice").length&&$("#maxprice").select2({allowClear:!0}),$("#city_id").length&&$("#city_id").select2({allowClear:!0,ajax:{url:$("#city_id").data("url"),dataType:"json",processResults:function(e){return{results:e.data.map((function(e){return{id:e.id,text:e.name+", "+e.state_name}}))}}}}),$("#rooms").length&&$("#rooms").select2({placeholder:"Choose Rooms",allowClear:!0}),$("#garage").length&&$("#garage").select2({placeholder:"Choose Rooms",allowClear:!0}),$("#bage").length&&$("#bage").select2({placeholder:"Select An Option",allowClear:!0}),$(".home-slider").length&&$(".home-slider").slick({centerMode:!1,slidesToShow:1,rtl:s,responsive:[{breakpoint:768,settings:{arrows:!0,slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,slidesToShow:1}}]}),$(".click").length&&!$(".click").hasClass("not-slider")&&$(".click").slick({slidesToShow:1,slidesToScroll:1,rtl:s,autoplay:!1,autoplaySpeed:2e3}),$(".featured_slick_gallery-slide").slick({centerMode:!0,infinite:!0,rtl:s,centerPadding:"80px",slidesToShow:2,responsive:[{breakpoint:768,settings:{arrows:!0,centerMode:!0,centerPadding:"60px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerMode:!0,centerPadding:"20px",slidesToShow:1}}]}).magnificPopup({type:"image",delegate:"a.mfp-gallery",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,preloader:!0,removalDelay:0,mainClass:"mfp-fade",gallery:{enabled:!0}}),$(".list-gallery-inline").magnificPopup({type:"image",delegate:"a.mfp-gallery",fixedContentPos:!0,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,preloader:!0,removalDelay:0,mainClass:"mfp-fade",gallery:{enabled:!0}}),$(".home-slider .item").each((function(){var e=$(this).attr("data-background-image"),n=$(this).attr("data-background-color");void 0!==e&&$(this).css("background-image","url("+e+")"),void 0!==n&&$(this).css("background",""+n)})),$(".hero-banner").length&&(u(),$(window).on("load resize",(function(){u()}))),$(document).on("click",".contact-form button[type=submit]",(function(e){e.preventDefault(),e.stopPropagation();var n=$(this);n.addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:n.closest("form").prop("action"),data:new FormData(n.closest("form")[0]),contentType:!1,processData:!1,success:function(e){if(n.removeClass("button-loading"),"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),e.error)return r(e.message),!1;n.closest("form").find("input[type=email]").val(""),l(e.message)},error:function(e){"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),n.removeClass("button-loading"),c(e)}})})),$(document).on("change",".js_payment_method",(function(e){$(".payment_collapse_wrap").removeClass("collapse").removeClass("show").removeClass("active"),$(this).closest(".list-group-item").find(".payment_collapse_wrap").addClass("collapse show")})),$(document).on("click",".filter_search_opt",(function(e){$("#filter_search").hasClass("filter_search_open")?$("#filter_search").removeClass("filter_search_open").animate({left:-310}):$("#filter_search").addClass("filter_search_open").animate({left:-0})})),$(document).on("click",(function(e){0==$(e.target).closest(".filter_search_opt").length&&0==$(e.target).closest("#filter_search").length&&$("#filter_search").removeClass("filter_search_open").animate({left:-310}),$(e.target).closest(".close_search_menu").length&&$("#filter_search").removeClass("filter_search_open").animate({left:-310})})),$(document).on("click",".newsletter-form button[type=submit]",(function(e){e.preventDefault(),e.stopPropagation();var n=$(this);n.addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:n.closest("form").prop("action"),data:new FormData(n.closest("form")[0]),contentType:!1,processData:!1,success:function(e){if(n.removeClass("button-loading"),"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),e.error)return r(e.message),!1;n.closest("form").find("input[type=email]").val(""),l(e.message)},error:function(e){"undefined"!=typeof refreshRecaptcha&&refreshRecaptcha(),n.removeClass("button-loading"),c(e)}})}))}));
