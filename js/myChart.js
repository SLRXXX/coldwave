/*
* @Author: slr
* @Date:   2016-03-23 14:53:57
* @Last Modified by:   slr
* @Last Modified time: 2016-03-25 00:14:28
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
                color: ['#e89183', '#c0da70', '#318fd1'],
                //color: ['#d7eeff','#318fd1','#023960'],
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
                        areaColor: /*'#c4d5e4'*/ '#fff',
                        borderColor: backColor,
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: /*'#c0daea'*/ '#fff'
                    }
                }
            },
            series : [
                {
                    name: '平均气温',
                    type: 'scatter',
                    coordinateSystem: 'geo',
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
                            opacity: 1,
                            borderWidth: 1
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
        myChart.renderData(data);
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
            window.weatherData = weatherJson;
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
            initChart(data);
        });
    });

    myChart.convertData = function (data) {
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
    }
    myChart.renderData = function (data) {
        data = myChart.convertData(data);
        var option = myChart.getOption();
        option.series[0].data = data;
        myChart.setOption(option, true);
    };


    myChart.on('mouseover', function (param) {
        renderCityChart(param.name);
    });
    window.myChart = myChart;
    return myChart;
};


var renderChartTwo = function () {;};
var renderCityChart = function (city) {
    $('.city-chart-area').show();
    $('.city-info .city-name').text(city);

    var cityChart = echarts.init(document.getElementById('city-chart'));
    var mins = [];
    var maxs = [];
    var means = [];
    for (var i = 0; i < weatherData.length; i++) {
        var wd = weatherData[i].wdata;
        for (var j = 0, lj = wd.length; j < lj; j++) {
            var t = wd[j];
            if (t.name === city) {
                mins.push(t.min);
                maxs.push(t.max);
                means.push(t.mean);
                break;
            }
        }
    }
    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}日<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
            textStyle: {
                fontSize: 11
            }
        },
        xAxis:  {
            type: 'category',
            data: ['21','22','23','24','25'],
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            nameGap: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#89b4d5'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C',
                textStyle: {
                    color: '#fff',
                    fontSize: 11
                }
            },
            nameTextStyle: {
                color: '#fff'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#89b4d5'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#89b4d5'
                },
                show: false
            }
        },
        grid: {
            top: '8%',
            left: '2%',
            bottom: '2%',
            right: '8%',
            containLabel: true
        },
        backgroundColor: '#2462a2',
        series: [
            {
                name:'最高气温',
                type:'line',
                data: maxs,
                lineStyle: {
                    normal: {
                        lineColor: '#e89183'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#e89183'
                    }
                }
            },{
                name: '平均气温',
                type: 'line',
                data: means,
                lineStyle: {
                    normal: {
                        lineColor: '#c0da70'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c0da70'
                    }
                }
            },
            {
                name:'最低气温',
                type:'line',
                data: mins,
                lineStyle: {
                    normal: {
                        lineColor: '#318fd1'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#318fd1'
                    }
                }
            }
        ]
    };

    cityChart.setOption(option, true);
};