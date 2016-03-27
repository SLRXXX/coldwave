/*
* @Author: slr
* @Date:   2016-03-24 17:49:51
* @Last Modified by:   slr
* @Last Modified time: 2016-03-27 11:45:24
*/

'use strict';

(function (window, $) {
    var cursorPos = 0;
    var cursorInterval;
    var cursorGo = function () {
        $('.cursor-area .cursor').css({
            left: 20 * cursorPos + 10 + '%'
        });
        var myChart = window.CHARTS.mapChart;
        var weatherData = window.DATA.weatherData;
        myChart.renderData(weatherData[cursorPos].wdata);
    }

    window.autoPlay = function () {
        clearInterval(cursorInterval);
        cursorInterval = setInterval(function () {
            cursorPos = (cursorPos + 1) % 5;
            cursorGo();
        }, 2000);
    }

    $('document').ready(function () {
        $('.cursor-area .time').each(function (index, ele) {
            $(this).on('click', function () {
                cursorPos = index;
                cursorGo();
                autoPlay();
            });
        });
    });
})(window, $);
