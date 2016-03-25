/*
* @Author: slr
* @Date:   2016-03-23 14:53:57
* @Last Modified by:   slr
* @Last Modified time: 2016-03-25 20:24:15
*/

'use strict';

// 定义颜色，同css
var COLORS = {
    bc : '#042d57',
    fc : '#fff',
    mc : '#add8ed',
    dc : '#1e5793'
};

var OPTIONS = {};
OPTIONS.loading = {
    text: '加载中...',
    color: '#fff',
    textColor: '#fff',
    maskColor: COLORS.bc,
    zlevel: 0
};

var CHARTS = {};


var initMap = function (callback) {
    if (window.DATA.chinaJson) {
        callback(window.DATA.chinaJson);
    } else {
        $.get('data/china.json').then(function (chinaJson) {
           window.DATA.chinaJson = chinaJson;
           echarts.registerMap('china', chinaJson);
           callback(chinaJson);
       });
    }
};


var initMapChart = function (callback) {
    if ($('#map-chart').find('canvas').length > 0) return;
    var myChart = echarts.init(document.getElementById('map-chart'));

    var initChart = function (data) {
        var option = {
            backgroundColor: COLORS.bc,
            textStyle: {
                fontSize: 14
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' <br/> ' + '平均气温:' +  params.value[2];
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
                        borderColor: COLORS.bc,
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
        myChart.setOption(option);
        myChart.renderData(data);
        callback && callback();
    };

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
        myChart.setOption(option);
    };


    myChart.on('mouseover', function (param) {
        renderCityChart(param.name);
    });

    myChart.showLoading('default', OPTIONS.loading);
    initMap(function (chinaJson) {
        myChart.hideLoading();
        var weatherJson = window.DATA.weatherData;
        window.DATA.weatherData = weatherJson;
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
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'china'
            }]
        });
        initChart(data);
    });

    window.CHARTS.mapChart = myChart;
    return myChart;
};


var renderCityChart = function (city) {
    $('.city-chart-area').show();
    $('.city-info .city-name').text(city);

    var weatherData = window.DATA.weatherData;

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
            },
            axisPointer: {
                lineStyle: {
                    color: '#89b4d5'
                }
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

    cityChart.setOption(option);
};

var initEffectChart = function (callback) {
    if ($('#effect-chart').find('canvas').length > 0) {
        return;
    }
    var myChart = echarts.init($('#effect-chart')[0]);

    var initChart = function (data) {
        var option = {
            backgroundColor: COLORS.bc,
            textStyle: {
                fontSize: 14
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
                roam: false

            },
            visualMap: {
                min: 8,
                max: 16,
                realtime: false,
                calculable: false,
                color: ['#d92c25','#fe9900', '#fffe02','#3464fe'],
                show: false
            },
            series: [{
                type: 'map',
                map: 'china',
                itemStyle: {
                    normal: {
                        areaColor: '#c4d5e4',
                        borderColor: COLORS.bc,
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: ''
                    }
                },
                data:[
                    {name: '北京', value: 10},
                    {name: '上海', value: 8},
                    {name: '浙江', value: 8},
                    {name: '湖南', value: 8},
                    {name: '广西', value: 8},
                    {name: '云南', value: 12},
                    {name: '广东', value: 12}
                ]
            }]
        };
        myChart.setOption(option, true);

        var showEffect = function (cityname) {
            var data = window.DATA.effectData;
            if (data[cityname]) {
                data = data[cityname];
                $('.city-detail-area').slideDown();
                $('.city-detail-area .city-name').text(cityname);
                $('.city-detail-area .content .text-head').text(data.head);
                $('.city-detail-area .content .text-content').html(data.content.replace('\n', '<br/>'));

            }
        };
        myChart.on('mouseover', function (param) {
            if (param.data && param.data.name) {
                showEffect(param.data.name);
            }
        });
    };


    initMap(function () {
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'china'
            }]
        });
        initChart();
        callback && callback();
    });
};

var initIceChart = function () {
    if ($('#ice-chart').find('canvas').length > 0) {
        return;
    }
    var renderData = function (data) {
        var res = {
            years: [],
            values: [],
            anoms: []
        };
        for (var year in data) {
            var yd = data[year];
            res.years.push(year);
            res.values.push(yd.value);
            res.anoms.push(yd.anom);
        }
        return res;
    }
    var myChart = echarts.init($('#ice-chart')[0]);
    myChart.showLoading('default', OPTIONS.loading);
    $.get('data/ice.json').then(function (iceJson) {
        myChart.hideLoading();
        var data = renderData(iceJson.data);
        var option = {
            type: 'line',
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 11
                },
                formatter: '{b}年<br/>{a}: {c}',
                axisPointer: {
                    lineStyle: {
                        color: '#89b4d5'
                    }
                }
            },
            xAxis:  {
                type: 'category',
                data: data.years,
                name: '年份',
                nameLocatoin: 'end',
                nameGap: 8,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
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
                name: '　　　　　冰层面积(百万平方米)',
                nameLocatoin: 'end',
                nameGap: 10,
                scale: true,
                min: 'dataMin',
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff',
                        fontSize: 11
                    }
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
                top: '15%',
                left: '2%',
                bottom: '8%',
                right: '8%',
                containLabel: true
            },
            backgroundColor: '#2462a2',
            series: [
                {
                    name:'冰层面积',
                    type:'line',
                    data: data.values,
                    lineStyle: {
                        normal: {
                            lineColor: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: '#fff'
                       }
                   },
                }
            ]
        };
        myChart.setOption(option);
    });
};

var initAirChart = function () {
    if ($('#air-chart').find('canvas').length > 0) {
        return;
    }
    var renderData = function (data) {
        var res = {
            years: [],
            values: []
        };
        for (var year in data) {
            res.years.push(year);
            res.values.push(data[year]);
        }
        return res;
    };
    var myChart = echarts.init($('#air-chart')[0]);
    myChart.showLoading('default', OPTIONS.loading);
    $.get('data/air.json').then(function (airJson) {
        myChart.hideLoading();
        var data = renderData(airJson.data);
        var option = {
            type: 'line',
            tooltip: {
                trigger: 'axis',
                textStyle: {
                    fontSize: 11
                },
                formatter: '{b}年1月<br/>{a}: {c}°C',
                axisPointer: {
                    lineStyle: {
                        color: '#89b4d5'
                    }
                }
            },
            xAxis:  {
                type: 'category',
                data: data.years,
                name: '年份',
                nameLocatoin: 'end',
                nameGap: 8,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
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
                name: '气温(°C)',
                nameLocatoin: 'end',
                nameGap: 10,
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff',
                        fontSize: 11
                    }
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
                top: '15%',
                left: '2%',
                bottom: '8%',
                right: '8%',
                containLabel: true
            },
            backgroundColor: '#2462a2',
            series: [
                {
                    name:'气温',
                    type:'line',
                    data: data.values,
                    lineStyle: {
                        normal: {
                            lineColor: '#fff'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            opacity: 0
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                   //  areaStyle: {
                   //      normal: {
                   //          color: '#fff'
                   //     }
                   // },
                }
            ]
        };
        myChart.setOption(option);
    });

};