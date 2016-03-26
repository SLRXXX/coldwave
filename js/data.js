/*
* @Author: slr
* @Date:   2016-03-25 19:21:01
* @Last Modified by:   slr
* @Last Modified time: 2016-03-25 19:21:53
*/

'use strict';


var DATA = {};

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


DATA.weatherData = [{"date":21,"wdata":[{"name":"哈尔滨","min":-33,"max":-20,"mean":-26.5,"weather":["晴"]},{"name":"齐齐哈尔","min":-31,"max":-20,"mean":-25.5,"weather":["多云","晴"]},{"name":"吉林","min":-26,"max":-17,"mean":-21.5,"weather":["晴 "]},{"name":"长春","min":-27,"max":-15,"mean":-21,"weather":["晴"]},{"name":"大同","min":-24,"max":-8,"mean":-16,"weather":["多云"]},{"name":"包头","min":-22,"max":-9,"mean":-15.5,"weather":["阴","晴"]},{"name":"呼和浩特","min":-21,"max":-9,"mean":-15,"weather":["晴","多云"]},{"name":"酒泉","min":-19,"max":-9,"mean":-14,"weather":["中雪","小到中雪"]},{"name":"乌鲁木齐","min":-19,"max":-9,"mean":-14,"weather":["多云","晴"]},{"name":"银川","min":-16,"max":-5,"mean":-10.5,"weather":["小雪"]},{"name":"西宁","min":-19,"max":-2,"mean":-10.5,"weather":["晴","阴"]},{"name":"大连","min":-13,"max":-6,"mean":-9.5,"weather":["晴","多云"]},{"name":"兰州","min":-12,"max":0,"mean":-6,"weather":["晴","小雪"]},{"name":"北京","min":-9,"max":-2,"mean":-5.5,"weather":["小雪","阴"]},{"name":"保定","min":-10,"max":-1,"mean":-5.5,"weather":["小雪"]},{"name":"太原","min":-10,"max":0,"mean":-5,"weather":["多云","小雪"]},{"name":"喀什","min":-7,"max":-2,"mean":-4.5,"weather":["多云","小雪"]},{"name":"石家庄","min":-6,"max":-1,"mean":-3.5,"weather":["霾","小雪"]},{"name":"连云港","min":-7,"max":0,"mean":-3.5,"weather":["晴 "]},{"name":"天津","min":-6,"max":-1,"mean":-3.5,"weather":["小雪","中雪"]},{"name":"青岛","min":-5,"max":0,"mean":-2.5,"weather":["多云","晴"]},{"name":"郑州","min":-4,"max":3,"mean":-0.5,"weather":["阴"]},{"name":"济南","min":-4,"max":3,"mean":-0.5,"weather":["阴","小雪"]},{"name":"开封","min":-3,"max":3,"mean":0,"weather":["多云","阵雪"]},{"name":"西安","min":-3,"max":3,"mean":0,"weather":["阴"]},{"name":"拉萨","min":-7,"max":7,"mean":0,"weather":["多云"]},{"name":"武汉","min":-2,"max":3,"mean":0.5,"weather":["小雪","中雪"]},{"name":"南京","min":-1,"max":2,"mean":0.5,"weather":["阴","小雪"]},{"name":"贵阳","min":-1,"max":3,"mean":1,"weather":["小雨","雨夹雪"]},{"name":"合肥","min":-1,"max":3,"mean":1,"weather":["小雪"]},{"name":"黄冈","min":-2,"max":4,"mean":1,"weather":["小雪","中雪"]},{"name":"长沙","min":0,"max":2,"mean":1,"weather":["雨夹雪","暴雪"]},{"name":"南昌","min":0,"max":2,"mean":1,"weather":["雨夹雪","大雪"]},{"name":"杭州","min":1,"max":1,"mean":1,"weather":["中雪","大雪"]},{"name":"丽江","min":1,"max":3,"mean":2,"weather":["阵雨"]},{"name":"汉中","min":-1,"max":6,"mean":2.5,"weather":["阴","多云"]},{"name":"上海","min":2,"max":4,"mean":3,"weather":["雨夹雪","小雨"]},{"name":"温州","min":3,"max":6,"mean":4.5,"weather":["小雨","中雨"]},{"name":"桂林","min":4,"max":7,"mean":5.5,"weather":["小雨"]},{"name":"成都","min":3,"max":8,"mean":5.5,"weather":["小雨"]},{"name":"重庆","min":6,"max":8,"mean":7,"weather":["小雨"]},{"name":"台北","min":0,"max":15,"mean":7.5,"weather":["小雨"]},{"name":"南宁","min":9,"max":12,"mean":10.5,"weather":["小雨"]},{"name":"昆明","min":6,"max":16,"mean":11,"weather":["晴","多云"]},{"name":"佛山","min":11,"max":13,"mean":12,"weather":["小雨"]},{"name":"广州","min":10,"max":14,"mean":12,"weather":["小到中雨"]},{"name":"厦门","min":11,"max":14,"mean":12.5,"weather":["阵雨"]},{"name":"澳门","min":13,"max":17,"mean":15,"weather":["小雨"]},{"name":"香港","min":14,"max":17,"mean":15.5,"weather":["小雨","多云"]},{"name":"高雄","min":19,"max":21,"mean":20,"weather":["小雨"]},{"name":"海口","min":19,"max":26,"mean":22.5,"weather":["多云"]}]},{"date":22,"wdata":[{"name":"齐齐哈尔","min":-31,"max":-20,"mean":-25.5,"weather":["晴","多云"]},{"name":"哈尔滨","min":-30,"max":-19,"mean":-24.5,"weather":["晴","多云"]},{"name":"长春","min":-28,"max":-17,"mean":-22.5,"weather":["晴","多云"]},{"name":"吉林","min":-27,"max":-17,"mean":-22,"weather":["晴 "]},{"name":"大同","min":-27,"max":-16,"mean":-21.5,"weather":["多云","晴"]},{"name":"呼和浩特","min":-26,"max":-15,"mean":-20.5,"weather":["晴","多云"]},{"name":"包头","min":-25,"max":-14,"mean":-19.5,"weather":["多云 "]},{"name":"乌鲁木齐","min":-20,"max":-13,"mean":-16.5,"weather":["雾","晴"]},{"name":"西宁","min":-23,"max":-6,"mean":-14.5,"weather":["多云","晴"]},{"name":"酒泉","min":-19,"max":-8,"mean":-13.5,"weather":["小雪","多云"]},{"name":"银川","min":-17,"max":-10,"mean":-13.5,"weather":["多云","晴"]},{"name":"大连","min":-16,"max":-9,"mean":-12.5,"weather":["多云","小雪"]},{"name":"北京","min":-16,"max":-7,"mean":-11.5,"weather":["多云","晴"]},{"name":"太原","min":-16,"max":-6,"mean":-11,"weather":["多云","晴"]},{"name":"天津","min":-14,"max":-7,"mean":-10.5,"weather":["阴","晴"]},{"name":"保定","min":-18,"max":-2,"mean":-10,"weather":["多云","晴"]},{"name":"兰州","min":-15,"max":-5,"mean":-10,"weather":["小雪","多云"]},{"name":"济南","min":-15,"max":-4,"mean":-9.5,"weather":["中雪","多云"]},{"name":"石家庄","min":-11,"max":-3,"mean":-7,"weather":["小雪","多云"]},{"name":"喀什","min":-7,"max":-4,"mean":-5.5,"weather":["大暴雨","多云"]},{"name":"青岛","min":-9,"max":-1,"mean":-5,"weather":["小雪"]},{"name":"郑州","min":-7,"max":0,"mean":-3.5,"weather":["阵雪","阴"]},{"name":"连云港","min":-7,"max":0,"mean":-3.5,"weather":["晴 "]},{"name":"开封","min":-7,"max":1,"mean":-3,"weather":["小雪","多云"]},{"name":"西安","min":-7,"max":2,"mean":-2.5,"weather":["阴","多云"]},{"name":"贵阳","min":-4,"max":1,"mean":-1.5,"weather":["小雪","中雪"]},{"name":"南京","min":-5,"max":2,"mean":-1.5,"weather":["小到中雪","小雪"]},{"name":"合肥","min":-4,"max":2,"mean":-1,"weather":["小雪"]},{"name":"杭州","min":-3,"max":1,"mean":-1,"weather":["大雪","中雪"]},{"name":"武汉","min":-3,"max":2,"mean":-0.5,"weather":["小雨","小雪"]},{"name":"拉萨","min":-9,"max":8,"mean":-0.5,"weather":["晴"]},{"name":"长沙","min":-1,"max":1,"mean":0,"weather":["小雪"]},{"name":"汉中","min":-4,"max":4,"mean":0,"weather":["阴","多云"]},{"name":"黄冈","min":-1,"max":2,"mean":0.5,"weather":["小雨","雨夹雪"]},{"name":"南昌","min":-1,"max":2,"mean":0.5,"weather":["中雪","小雪"]},{"name":"成都","min":-1,"max":5,"mean":2,"weather":["小雨","雨夹雪"]},{"name":"上海","min":0,"max":5,"mean":2.5,"weather":["雨夹雪","小雪"]},{"name":"温州","min":2,"max":4,"mean":3,"weather":["雨夹雪"]},{"name":"桂林","min":2,"max":5,"mean":3.5,"weather":["小雨","雨夹雪"]},{"name":"重庆","min":2,"max":7,"mean":4.5,"weather":["小雨","雨夹雪"]},{"name":"台北","min":0,"max":11,"mean":5.5,"weather":["暴雨"]},{"name":"佛山","min":5,"max":8,"mean":6.5,"weather":["小到中雨","小雨"]},{"name":"广州","min":4,"max":9,"mean":6.5,"weather":["小到中雨","小雨"]},{"name":"南宁","min":5,"max":9,"mean":7,"weather":["小雨"]},{"name":"丽江","min":4,"max":13,"mean":8.5,"weather":["阵雨"]},{"name":"澳门","min":9,"max":12,"mean":10.5,"weather":["小雨","中雨"]},{"name":"厦门","min":8,"max":13,"mean":10.5,"weather":["阵雨","中雨"]},{"name":"昆明","min":5,"max":16,"mean":10.5,"weather":["多云","小雨"]},{"name":"香港","min":11,"max":16,"mean":13.5,"weather":["小雨","多云"]},{"name":"海口","min":13,"max":21,"mean":17,"weather":["阵雨"]},{"name":"高雄","min":15,"max":22,"mean":18.5,"weather":["小雨"]}]},{"date":23,"wdata":[{"name":"哈尔滨","min":-29,"max":-20,"mean":-24.5,"weather":["晴"]},{"name":"大同","min":-27,"max":-20,"mean":-23.5,"weather":["晴"]},{"name":"齐齐哈尔","min":-29,"max":-16,"mean":-22.5,"weather":["多云","晴"]},{"name":"长春","min":-25,"max":-20,"mean":-22.5,"weather":["多云","阵雪"]},{"name":"吉林","min":-25,"max":-19,"mean":-22,"weather":["多云"]},{"name":"包头","min":-26,"max":-17,"mean":-21.5,"weather":["多云","晴"]},{"name":"呼和浩特","min":-24,"max":-17,"mean":-20.5,"weather":["晴"]},{"name":"银川","min":-22,"max":-14,"mean":-18,"weather":["多云","晴"]},{"name":"大连","min":-19,"max":-15,"mean":-17,"weather":["多云 "]},{"name":"乌鲁木齐","min":-20,"max":-12,"mean":-16,"weather":["晴"]},{"name":"太原","min":-21,"max":-10,"mean":-15.5,"weather":["多云","晴"]},{"name":"西宁","min":-22,"max":-7,"mean":-14.5,"weather":["晴"]},{"name":"酒泉","min":-21,"max":-7,"mean":-14,"weather":["多云"]},{"name":"济南","min":-17,"max":-9,"mean":-13,"weather":["多云","晴"]},{"name":"北京","min":-14,"max":-11,"mean":-12.5,"weather":["晴"]},{"name":"保定","min":-18,"max":-7,"mean":-12.5,"weather":["晴"]},{"name":"天津","min":-14,"max":-10,"mean":-12,"weather":["晴"]},{"name":"兰州","min":-16,"max":-7,"mean":-11.5,"weather":["晴"]},{"name":"青岛","min":-14,"max":-8,"mean":-11,"weather":["阵雪"]},{"name":"石家庄","min":-14,"max":-6,"mean":-10,"weather":["多云","晴"]},{"name":"喀什","min":-9,"max":-5,"mean":-7,"weather":["多云","阴"]},{"name":"合肥","min":-10,"max":-2,"mean":-6,"weather":["多云","晴"]},{"name":"郑州","min":-10,"max":-2,"mean":-6,"weather":["晴"]},{"name":"开封","min":-11,"max":0,"mean":-5.5,"weather":["晴"]},{"name":"南京","min":-9,"max":-2,"mean":-5.5,"weather":["多云"]},{"name":"西安","min":-12,"max":1,"mean":-5.5,"weather":["晴"]},{"name":"贵阳","min":-6,"max":-2,"mean":-4,"weather":["小雪"]},{"name":"上海","min":-7,"max":-1,"mean":-4,"weather":["小雪","晴"]},{"name":"杭州","min":-8,"max":0,"mean":-4,"weather":["小雪","多云"]},{"name":"连云港","min":-7,"max":0,"mean":-3.5,"weather":["晴 "]},{"name":"武汉","min":-8,"max":3,"mean":-2.5,"weather":["晴 "]},{"name":"南昌","min":-5,"max":2,"mean":-1.5,"weather":["阴","多云"]},{"name":"汉中","min":-9,"max":6,"mean":-1.5,"weather":["晴"]},{"name":"拉萨","min":-9,"max":6,"mean":-1.5,"weather":["晴"]},{"name":"黄冈","min":-4,"max":2,"mean":-1,"weather":["晴"]},{"name":"长沙","min":-2,"max":2,"mean":0,"weather":["多云","晴"]},{"name":"成都","min":-3,"max":3,"mean":0,"weather":["阴"]},{"name":"重庆","min":0,"max":2,"mean":1,"weather":["小雪","阴"]},{"name":"温州","min":-1,"max":4,"mean":1.5,"weather":["阴～多云"]},{"name":"台北","min":0,"max":4,"mean":2,"weather":["中雨"]},{"name":"昆明","min":0,"max":4,"mean":2,"weather":["雨夹雪"]},{"name":"桂林","min":0,"max":5,"mean":2.5,"weather":["多云"]},{"name":"南宁","min":2,"max":5,"mean":3.5,"weather":["小雨","阴"]},{"name":"佛山","min":3,"max":5,"mean":4,"weather":["小雨"]},{"name":"广州","min":2,"max":6,"mean":4,"weather":["阴"]},{"name":"丽江","min":0,"max":12,"mean":6,"weather":["多云","雨夹雪"]},{"name":"澳门","min":4,"max":9,"mean":6.5,"weather":["阴"]},{"name":"厦门","min":4,"max":9,"mean":6.5,"weather":["小雨","阵雨"]},{"name":"香港","min":8,"max":10,"mean":9,"weather":["小雨"]},{"name":"海口","min":9,"max":11,"mean":10,"weather":["小雨","多云"]},{"name":"高雄","min":10,"max":20,"mean":15,"weather":["小雨"]}]},{"date":24,"wdata":[{"name":"哈尔滨","min":-24,"max":-16,"mean":-20,"weather":["晴"]},{"name":"长春","min":-25,"max":-15,"mean":-20,"weather":["晴"]},{"name":"大同","min":-27,"max":-12,"mean":-19.5,"weather":["晴"]},{"name":"吉林","min":-21,"max":-16,"mean":-18.5,"weather":["晴 "]},{"name":"呼和浩特","min":-23,"max":-14,"mean":-18.5,"weather":["晴"]},{"name":"包头","min":-23,"max":-13,"mean":-18,"weather":["晴"]},{"name":"酒泉","min":-24,"max":-9,"mean":-16.5,"weather":["多云"]},{"name":"齐齐哈尔","min":-22,"max":-11,"mean":-16.5,"weather":["晴"]},{"name":"银川","min":-20,"max":-10,"mean":-15,"weather":["晴"]},{"name":"西宁","min":-23,"max":-7,"mean":-15,"weather":["晴"]},{"name":"乌鲁木齐","min":-19,"max":-11,"mean":-15,"weather":["晴"]},{"name":"大连","min":-16,"max":-9,"mean":-12.5,"weather":["多云","晴"]},{"name":"太原","min":-19,"max":-6,"mean":-12.5,"weather":["晴"]},{"name":"兰州","min":-17,"max":-5,"mean":-11,"weather":["晴"]},{"name":"青岛","min":-14,"max":-7,"mean":-10.5,"weather":["晴"]},{"name":"喀什","min":-16,"max":-5,"mean":-10.5,"weather":["多云"]},{"name":"保定","min":-13,"max":-2,"mean":-7.5,"weather":["晴"]},{"name":"北京","min":-11,"max":-3,"mean":-7,"weather":["晴"]},{"name":"南京","min":-9,"max":-5,"mean":-7,"weather":["晴 "]},{"name":"济南","min":-9,"max":-5,"mean":-7,"weather":["晴"]},{"name":"西安","min":-12,"max":-2,"mean":-7,"weather":["晴"]},{"name":"天津","min":-9,"max":-5,"mean":-7,"weather":["晴"]},{"name":"合肥","min":-9,"max":-4,"mean":-6.5,"weather":["晴"]},{"name":"杭州","min":-9,"max":-3,"mean":-6,"weather":["晴"]},{"name":"上海","min":-7,"max":-4,"mean":-5.5,"weather":["晴"]},{"name":"郑州","min":-9,"max":-1,"mean":-5,"weather":["晴"]},{"name":"开封","min":-8,"max":-1,"mean":-4.5,"weather":["晴"]},{"name":"石家庄","min":-8,"max":0,"mean":-4,"weather":["晴"]},{"name":"连云港","min":-7,"max":0,"mean":-3.5,"weather":["晴 "]},{"name":"黄冈","min":-7,"max":1,"mean":-3,"weather":["晴"]},{"name":"武汉","min":-8,"max":2,"mean":-3,"weather":["晴 "]},{"name":"贵阳","min":-4,"max":0,"mean":-2,"weather":["小雪","多云"]},{"name":"南昌","min":-5,"max":2,"mean":-1.5,"weather":["晴"]},{"name":"拉萨","min":-9,"max":6,"mean":-1.5,"weather":["晴"]},{"name":"昆明","min":-3,"max":1,"mean":-1.5,"weather":["小雪"]},{"name":"温州","min":-5,"max":2,"mean":-1.5,"weather":["晴"]},{"name":"长沙","min":-5,"max":3,"mean":-1,"weather":["晴"]},{"name":"汉中","min":-6,"max":5,"mean":-0.5,"weather":["晴"]},{"name":"成都","min":-5,"max":4,"mean":-0.5,"weather":["多云","晴"]},{"name":"佛山","min":-1,"max":5,"mean":2,"weather":["小雨","多云"]},{"name":"桂林","min":-1,"max":5,"mean":2,"weather":["多云"]},{"name":"重庆","min":0,"max":5,"mean":2.5,"weather":["多云"]},{"name":"南宁","min":1,"max":4,"mean":2.5,"weather":["雨夹雪","阴"]},{"name":"广州","min":0,"max":6,"mean":3,"weather":["小雨","多云"]},{"name":"台北","min":0,"max":6,"mean":3,"weather":["小雨"]},{"name":"澳门","min":2,"max":5,"mean":3.5,"weather":["小雨","多云"]},{"name":"丽江","min":-3,"max":10,"mean":3.5,"weather":["阵雨","阴"]},{"name":"厦门","min":1,"max":7,"mean":4,"weather":["多云","晴"]},{"name":"香港","min":3,"max":7,"mean":5,"weather":["小雨","多云"]},{"name":"海口","min":6,"max":9,"mean":7.5,"weather":["小雨","多云"]},{"name":"高雄","min":9,"max":14,"mean":11.5,"weather":["小雨"]}]},{"date":25,"wdata":[{"name":"呼和浩特","min":-22,"max":-11,"mean":-16.5,"weather":["晴","多云"]},{"name":"酒泉","min":-24,"max":-7,"mean":-15.5,"weather":["晴"]},{"name":"哈尔滨","min":-21,"max":-10,"mean":-15.5,"weather":["晴"]},{"name":"包头","min":-22,"max":-9,"mean":-15.5,"weather":["晴"]},{"name":"齐齐哈尔","min":-22,"max":-8,"mean":-15,"weather":["多云","晴"]},{"name":"大同","min":-23,"max":-7,"mean":-15,"weather":["晴"]},{"name":"乌鲁木齐","min":-19,"max":-11,"mean":-15,"weather":["晴"]},{"name":"吉林","min":-19,"max":-10,"mean":-14.5,"weather":["晴","多云"]},{"name":"长春","min":-18,"max":-9,"mean":-13.5,"weather":["晴"]},{"name":"银川","min":-20,"max":-7,"mean":-13.5,"weather":["晴"]},{"name":"西宁","min":-21,"max":-3,"mean":-12,"weather":["晴"]},{"name":"太原","min":-18,"max":-2,"mean":-10,"weather":["晴"]},{"name":"兰州","min":-15,"max":-2,"mean":-8.5,"weather":["晴"]},{"name":"喀什","min":-11,"max":-4,"mean":-7.5,"weather":["多云"]},{"name":"保定","min":-13,"max":3,"mean":-5,"weather":["晴"]},{"name":"大连","min":-8,"max":-1,"mean":-4.5,"weather":["晴"]},{"name":"西安","min":-10,"max":1,"mean":-4.5,"weather":["晴"]},{"name":"连云港","min":-7,"max":0,"mean":-3.5,"weather":["晴 "]},{"name":"济南","min":-8,"max":2,"mean":-3,"weather":["晴"]},{"name":"杭州","min":-8,"max":2,"mean":-3,"weather":["晴"]},{"name":"北京","min":-8,"max":3,"mean":-2.5,"weather":["晴"]},{"name":"武汉","min":-8,"max":3,"mean":-2.5,"weather":["晴 "]},{"name":"青岛","min":-5,"max":0,"mean":-2.5,"weather":["晴","多云"]},{"name":"拉萨","min":-9,"max":4,"mean":-2.5,"weather":["多云"]},{"name":"合肥","min":-6,"max":2,"mean":-2,"weather":["晴"]},{"name":"黄冈","min":-7,"max":3,"mean":-2,"weather":["晴"]},{"name":"南京","min":-7,"max":3,"mean":-2,"weather":["晴 "]},{"name":"汉中","min":-7,"max":3,"mean":-2,"weather":["晴","多云"]},{"name":"上海","min":-5,"max":2,"mean":-1.5,"weather":["晴"]},{"name":"天津","min":-6,"max":3,"mean":-1.5,"weather":["晴"]},{"name":"昆明","min":-3,"max":0,"mean":-1.5,"weather":["阴","小雨"]},{"name":"郑州","min":-5,"max":4,"mean":-0.5,"weather":["晴"]},{"name":"贵阳","min":-3,"max":3,"mean":0,"weather":["多云"]},{"name":"石家庄","min":-5,"max":5,"mean":0,"weather":["晴"]},{"name":"开封","min":-4,"max":4,"mean":0,"weather":["晴"]},{"name":"长沙","min":-4,"max":5,"mean":0.5,"weather":["晴"]},{"name":"南昌","min":-2,"max":4,"mean":1,"weather":["晴"]},{"name":"成都","min":-4,"max":6,"mean":1,"weather":["多云"]},{"name":"台北","min":0,"max":4,"mean":2,"weather":["晴"]},{"name":"温州","min":-1,"max":6,"mean":2.5,"weather":["晴"]},{"name":"丽江","min":-2,"max":9,"mean":3.5,"weather":["雨夹雪","小雨"]},{"name":"重庆","min":2,"max":7,"mean":4.5,"weather":["多云","阴"]},{"name":"桂林","min":1,"max":8,"mean":4.5,"weather":["多云","阴"]},{"name":"厦门","min":1,"max":8,"mean":4.5,"weather":["晴"]},{"name":"佛山","min":3,"max":8,"mean":5.5,"weather":["晴","多云"]},{"name":"广州","min":2,"max":9,"mean":5.5,"weather":["多云"]},{"name":"香港","min":3,"max":9,"mean":6,"weather":["多云"]},{"name":"南宁","min":3,"max":10,"mean":6.5,"weather":["多云"]},{"name":"澳门","min":6,"max":9,"mean":7.5,"weather":["多云"]},{"name":"海口","min":7,"max":10,"mean":8.5,"weather":["多云"]},{"name":"高雄","min":12,"max":16,"mean":14,"weather":["小雨"]}]}];