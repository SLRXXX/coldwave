/*
* @Author: slr
* @Date:   2016-03-23 14:53:57
* @Last Modified by:   slr
* @Last Modified time: 2016-03-24 16:26:05
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
            console.log('hideLoading');

            var data = $.parseJSON(weatherJson)[0].wdata;
            console.log(data);
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

var renderChartTwo = function () {
    var myChart = echarts.init(document.getElementById('chart-area'));
    // function randomData() {
    //     now = new Date(+now + oneDay);
    //     value = value + Math.random() * 21 - 10;
    //     return {
    //         name: now.toString(),
    //         value: [
    //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
    //             Math.round(value)
    //         ]
    //     }
    // }

    // var data = [];
    // var now = +new Date(1997, 9, 3);
    // var oneDay = 24 * 3600 * 1000;
    // var value = Math.random() * 1000;
    // for (var i = 0; i < 1000; i++) {
    //     data.push(randomData());
    // }

    // var option = {
    //     title: {
    //         text: '动态数据 + 时间坐标轴'
    //     },
    //     tooltip: {
    //         trigger: 'axis',
    //         formatter: function (params) {
    //             params = params[0];
    //             var date = new Date(params.name);
    //             return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
    //         },
    //         axisPointer: {
    //             animation: false
    //         }
    //     },
    //     xAxis: {
    //         type: 'time',
    //         splitLine: {
    //             show: false
    //         }
    //     },
    //     yAxis: {
    //         type: 'value',
    //         boundaryGap: [0, '100%'],
    //         splitLine: {
    //             show: false
    //         }
    //     },
    //     series: [{
    //         name: '模拟数据',
    //         type: 'line',
    //         showSymbol: false,
    //         hoverAnimation: false,
    //         data: data
    //     }]
    // };



    // myChart.setOption({
    //     series: [{
    //         data: data
    //     }]
    // });


};
