/*
* @Author: slr
* @Date:   2016-03-20 09:08:00
* @Last Modified by:   slr
* @Last Modified time: 2016-03-23 17:32:39
*/

'use strict';

(function (global) {
    var list = [];
    global.triggerOnce = function (f, id) {
        if (list.indexOf(id) < 0) {
            f();
            list.push(id);
        }
    };
})(window);
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
}


$('#main').fullpage({
    menu: '#top-nav',
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['简介', '全国气温', '事件', '全球气候', '说明'],
    afterLoad: function(anchorLink, index){
        if (anchorLink === 'page-1') {
            triggerOnce(function () {
                showText('#section-1 .text-area .content', '寒潮是冬季的一种灾害性天气。作为局地短期的气象灾害现象，寒潮的破坏性极强。\n2016年2月中国气象局发布了1月全国天气气候特征报告，内容显示强寒潮于1月影响了全国大部分地区，其中21—25日是中国寒潮现象的高峰时间段。', 0, 100);
            }, 'page-1');
        } else if (anchorLink === 'page-2') {
            triggerOnce(renderChartOne, 'page-2');
        } else if (anchorLink === 'page-4') {
            triggerOnce(renderChartTwo, 'page-4');
        }
    }
});





