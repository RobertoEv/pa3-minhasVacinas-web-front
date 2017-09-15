import {browserHistory} from 'react-router';

export function correctHeight() {

    var pageWrapper = $('#page-wrapper');
    var navbarHeight = $('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();

    if (navbarHeight > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }

    if (navbarHeight <= wrapperHeigh) {
        if (navbarHeight < $(window).height()) {
            pageWrapper.css("min-height", $(window).height() + "px");
        } else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }

    if ($('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeight + "px");
        } else {
            pageWrapper.css("min-height", $(window).height() - 60 + "px");
        }
    }
}

export function detectBody() {
    if ($(document).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
}

export function smoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

export function logout(){
  //TODO codigo para realizar o logout
  browserHistory.push('/login');
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export function requestInfoObjPost(body){
    let dados = "";
    $.each(body, function(key,value){
      dados += key+"="+value+"&";
    })
    dados = dados.substring(0,(dados.length - 1));
    const requestInfo = {
        method: 'POST',
        body: dados,
        headers: new Headers({
           'Accept': 'application/json',
           'Content-Type': 'application/x-www-form-urlencoded'
        })
    }

    return requestInfo;
}
