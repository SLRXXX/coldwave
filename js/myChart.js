/*
* @Author: slr
* @Date:   2016-03-23 14:53:57
* @Last Modified by:   slr
* @Last Modified time: 2016-03-24 17:02:00
*/

'use strict';

var backColor = $('body').css('background-color');

var renderChartOne = function () {
    var myChart = echarts.init(document.getElementById('map-area'));

    var initChart = function (data) {

        var option = {
            backgroundColor: backColor,
            textStyle: {
                fontSize: 14
            },
            title: {
                text: '',
                subtext: '',
                sublink: '',
                left: 'center',
                textStyle: {
                    color: '#318fd1'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            dataRange: {
                min: -30,
                max: 30,
                calculable: true,
                color: ['#d7eeff','#318fd1','#023960'],
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'right',
                data:['平均温度'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam: false,    // 不允许放缩
                itemStyle: {
                    normal: {
                        areaColor: '#c4d5e4',
                        borderColor: backColor,
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#c0daea'
                    }
                }
            },
            series : [
                {
                    name: '平均气温',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: data,
                    symbolSize: 14,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.9
                        },
                        emphasis: {
                            // color: '#6aa9c8',
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    zlevel: 1
                }
            ]
        };
        myChart.setOption(option, true);
    };



    myChart.showLoading('default', {
        text: '加载中...',
        color: '#fff',
        textColor: '#fff',
        maskColor: backColor,
        zlevel: 0
    });

    $.get('data/china.json').then(function (chinaJson) {
        $.get('data/weather.json').then(function (weatherJson) {
            myChart.hideLoading();
            var data = weatherJson[0].wdata;
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].mean)
                        });
                    }
                }
                return res;
            };
            echarts.registerMap('china', chinaJson);
            myChart.setOption({
                series: [{
                    type: 'map',
                    map: 'china'
                }]
            });
            initChart(convertData(data));
        });
    });


    myChart.on('click', function (params) {
        console.log(params);
    });
    return myChart;
};
