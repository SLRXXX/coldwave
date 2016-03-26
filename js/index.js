/*
* @Author: slr
* @Date:   2016-03-20 09:08:00
* @Last Modified by:   slr
* @Last Modified time: 2016-03-26 09:16:56
*/

'use strict';



var initPageOne = function () {
    var $area = $('#section-1 .text-area .content');
    if ($area.text().replace(/\s*/g, '').length > 0) {
        return;
    }

    var showArrow = function () {
        var $arrow = $('#arrow-down');
        setInterval(function() {
            $arrow.css({
                opacity: 1 - $arrow.css('opacity')
            });
        }, 500);
    };

    var showText = function ($target, message, index, interval, callback) {
        if (index < message.length) {
            $target.append(message[index++]);
            setTimeout(function () { showText($target, message, index, interval, callback); }, interval);
        } else {
            callback && callback();
        }
    }

    $area.html('<strong>寒</strong>');
    setTimeout(function() {
        $area.html('<strong>寒潮</strong>');
    },100);
    setTimeout(function () {
        showText($area, '是冬季的一种灾害性天气。作为局地短期的气象灾害现象，寒潮的破坏性极强。\n2016年2月中国气象局发布了1月全国天气气候特征报告，内容显示强寒潮于1月影响了全国大部分地区，其中21—25日是中国寒潮现象的高峰时间段。', 0, 100, showArrow);
    }, 200);

};
var initPageTwo = function () {
    initMapChart(function () {
        $('#section-1').show();
        autoPlay();
    });
};
var initPageThree = function () {
    initEffectChart(function () {
        $('#section-3 .legend-area').slideDown();
        $('#section-3 .right-button').on('click', function () {
            $(this).toggleClass('rotate');
            $('#section-3 .legend-area .content').slideToggle();
        });
        $('#section-3 .city-detail-area .icon-close').on('click', function () {
            $('#section-3 .city-detail-area').slideUp();
        });
    });
};
var initPageFour = function () {
    $('#section-4').find('.tab-index .list-item').each(function (index) {
        $(this).on('click', function () {
            if (index === 0) {
                initIceChart();
            } else if (index === 1) {
                initAirChart();
            }
        });
    });
    initIceChart();
}

var init = function () {
    // fullpage
    $('#main').fullpage({
        menu: '#top-nav',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['简介', '全国气温', '事件', '全球气候', '说明'],
        scrollOverflow: true,
        afterLoad: function(anchorLink, index){
            switch(anchorLink) {
                case 'page-1': initPageOne();break;
                case 'page-2': initPageTwo();break;
                case 'page-3': initPageThree();break;
                case 'page-4': initPageFour();break;
            }
        }
    });

    // 标签页
    $('.tab-area').each(function () {
        var $indexes = $(this).find('.tab-index .list-item');
        var $contents = $(this).find('.tab-content .list-item');
        $indexes.each(function (index) {
            $(this).on('click', function () {
                $indexes.removeClass('active').eq(index).addClass('active');
                $contents.removeClass('active').eq(index).addClass('active');
            });
        });
        $indexes.eq(0).trigger('click');
    });


    $('#main').show();

}

init();















