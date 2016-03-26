/*
* @Author: slr
* @Date:   2016-03-24 17:49:51
* @Last Modified by:   slr
* @Last Modified time: 2016-03-26 09:32:38
*/

'use strict';
var cursorPos = 0;
var cursorGo = function () {
    var pos = window.cursorPos;
    $('.cursor-area .cursor').css({
        left: 20 * pos + 10 + '%'
    });
    var myChart = window.CHARTS.mapChart;
    var weatherData = window.DATA.weatherData;
    myChart.renderData(weatherData[pos].wdata);
}
$('.cursor-area .time').each(function (index, ele) {
    $(this).on('click', function () {
        window.cursorPos = index;
        cursorGo(index);
        autoPlay();
    });
});

var autoPlay = function () {
    clearInterval(window.cursorInterval);
    window.cursorInterval = setInterval(function () {
        var pos = window.cursorPos;
        window.cursorPos = (pos + 1) % 5;
        cursorGo();
    }, 2000);
}
