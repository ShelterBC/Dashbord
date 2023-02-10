$("#openList").click(function() {
    var menuListHeight = $('.sideMenu').css('height');

    if(menuListHeight == "30px") {
        menuListHeight = window.innerHeight + "px";
        $('.sideMenu').css('height', menuListHeight);
        $('body').css('overflow', 'hidden');
    } else  {
        $('.sideMenu').css('height', '30px');
        $('body').css('overflow', 'scroll');
    }
})



$('.listElement').click( function () {
    let activeEl = findActiveListElement();
    if(activeEl == -1) console.log('Error...Active element not found');
    else if(activeEl == $(this)) return;
    else {
        activeEl.removeClass('activeElement');
        $(this).addClass('activeElement');
        imgChange($(this));
        imgChange(activeEl);
    }
});


function imgChange(obj) {
    let newsrc;
    let oldsrc;
    if(obj.children().length == 3) {
        newsrc = obj.children().last().attr('altArrow');
        oldsrc = obj.children().last().attr('src');
        obj.children().last().attr('src', newsrc)
        obj.children().last().attr('altArrow', oldsrc)
    }
    newsrc = obj.children().first().attr('nextPhoto');
    console.log(newsrc);
    oldsrc = obj.children().first().attr('src');
    obj.children().first().attr('src', newsrc)
    obj.children().first().attr('nextPhoto', oldsrc)
}

function findActiveListElement() {
    let element = $('.menuList').children().first();
    
    while(element.length != 0) {
        if(element.hasClass('activeElement')) return element;
        element = element.next();
    }

    return -1;
}