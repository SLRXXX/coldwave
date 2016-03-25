/*
* @Author: slr
* @Date:   2016-03-23 14:53:57
* @Last Modified by:   slr
* @Last Modified time: 2016-03-25 18:00:14
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

var DATA = {};
var CHARTS = {};

DATA.effectData = {
    '北京': {
        head: '21日发布寒潮黄色预警信号',
        content: '北京市政市容委统计，受本次持续低温影响，北京用气用电量双双破历史纪录，天然气用量达到1.06亿立方米，电力最大负荷超过1695万千瓦。',
        color: '#ffff01'
    },
    '上海': {
        head: '寒潮蓝色预警',
        content: '1月24日，本市的低温极值，已经达到了零下7.2度的低温，创36年之最。突如其来的寒潮，导致上海多家小区水管被冻，引发大面积停水。\n上海供水热线1月24日全天的来电量创历史新高，反映水管冻结的来电超过10000通；物业服务热线共接到市民来电26000多个，反映水管冻结等问题的5300余起。',
        color: '#3465ff'
    },
    '浙江': {
        head: '寒潮蓝色预警',
        content: '截至24日14时，浙江受灾人口56.2万人；因灾造成直接经济损失3.8亿元人民币；倒塌房屋28间、严重损坏房屋58间。',
        color: '#3465ff'
    },
    '湖南': {
        head: '',
        content: '1月21至24日，连日的严寒冰冻加上暴雪，引发湖南全省大面积停电，通信光缆受损就达29.5皮长公里，造成移动通信基站停电近4000站次，基站累计退服达1622站次，影响移动通信用户25万户。\n截至1月27日，全省农作物受灾67万亩，其中成灾25万亩，绝收近2万亩',
        color: '#3465ff'
    },
    '广西': {
        head: '启动重大气象灾害(雨雪、冰冻、寒潮)Ⅲ级应急',
        content: '1月23日以来，受强降温及降雪影响，桂林市资源，南宁市青秀、邕宁、江南、武鸣，贵港市覃塘、港南、桂平，崇左市宁明、凭祥、龙州、大新，百色市那坡、乐业、右江、田东、德保等地出现雪灾或低温冷冻灾害。截至26日17时30分统计，灾害共造成17.98万人受灾;农作物受灾面积13.55千公顷，一般损坏农房14户26间。\n寒潮带来的冰冻天气已导致位于北部湾沿海的广西钦州市10多万斤罗非鱼死亡。来自钦州市水产畜牧兽医局的统计显示，截至25日18时，寒潮导致全市水产畜牧业造成的直接经济损失估算为118.02万元，其中罗非鱼损失10.72万斤。',
        color: '#3465ff'
    },
    '广东': {
        head: '23日 寒潮橙色预警',
        content: '1月22日以来的历史罕见寒潮对广东全省渔业造成了巨大影响。截止1月26日，全省渔业受灾面积11.7万亩，鱼苗损失8865万尾，虾苗损失50万尾，渔业总经济损失9.9亿元。\n2016年1月25日下午5时—26日下午4时，受灾人口41.39万人，新增农作物受灾面积45.03千公顷。截至26日下午4时，韶关、河源、梅州、惠州、汕尾、中山、江门、阳江、茂名、清远、揭阳、云浮12市31个县（市、区）、255个乡镇（街道）不同程度受灾，累计受灾人口47.36万人，累计农作物受灾面积50.52千公顷、绝收面积1.25千公顷，直接经济损失6.37亿元；',
        color: '#fd9801'
    },
    '云南': {
        head: '寒潮橙色预警',
        content: '24日，受降雪、低温和道路结冰的影响，昭待高速、昆嵩高速、普宣高速、曲胜高速、昆石高速、西石高速、水麻高速、昭会高速、砚平高速、平锁高速因路面结冰严重，不具备正常通行条件全线封闭。\n由于强寒潮天气影响，导致大面积航班延误，从24日11时39分许，昆明机场大面积航班延误应急处置由III级调整为II级响应。昨日上午，昆明机场依然持续着小雪天气，主导能见度7000米，风速9米/秒，出港航班排队除冰，一些旅客的航班由于冰雪天气延误或取消。',
        color: '#fd9801'
    }
};

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


var initMapChart = function () {
    if ($('#map-chart').find('canvas').length > 0) {
        return;
    }
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
        autoPlay();
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
        $.get('data/weather.json').then(function (weatherJson) {
            myChart.hideLoading();
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

var initEffectChart = function () {
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
                $('.city-detail-area').show();
                $('.city-detail-area .city-name').text(cityname);
                $('.city-detail-area .content .text-head').text(data.head);
                $('.city-detail-area .content .text-content').html(data.content.replace('\n', '<br/>'));

            }
        };

        myChart.on('mouseover', function (param) {
            console.log(param);
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