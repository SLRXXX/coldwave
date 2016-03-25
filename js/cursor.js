/*
* @Author: slr
* @Date:   2016-03-24 17:49:51
* @Last Modified by:   slr
* @Last Modified time: 2016-03-25 15:34:54
*/

'use strict';
var cursorPos = 0;
var cursorGo = function (pos) {
    cursorPos = pos;
    $('.cursor-area .cursor').css({
        left: 20 * ((pos + 1) % 5) + 10 + '%'
    });
    var myChart = window.CHARTS.mapChart;
    var weatherData = window.DATA.weatherData;
    myChart.renderData(weatherData[pos].wdata);
}
$('.cursor-area .time').each(function (index, ele) {
    $(this).on('click', function () {
        cursorGo(index);
    });
});

var autoPlay = function () {
    $('.cursor-area .cursor').css({
        left: '30%'
    });
    setInterval(function () {
        var pos = cursorPos;
        pos = (pos + 1) % 5;
        cursorGo(pos);
    }, 2000);
}
