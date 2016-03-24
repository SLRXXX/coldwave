/*
* @Author: slr
* @Date:   2016-03-24 17:49:51
* @Last Modified by:   slr
* @Last Modified time: 2016-03-24 18:08:11
*/

'use strict';
var cursorPos = 0;
var cursorGo = function (pos) {
    cursorPos = pos;
    $('.cursor-area .cursor').css({
        left: 20 * pos + 10 + '%'
    });
    myChart.renderData(weatherData[pos].wdata);
}
$('.cursor-area .time').each(function (index, ele) {
    $(this).on('click', function () {
        cursorGo(index);
    });
});

var autoPlay = function () {
    setInterval(function () {
        var pos = cursorPos;
        pos = (pos + 1) % 5;
        cursorGo(pos);
    }, 2000);
}
