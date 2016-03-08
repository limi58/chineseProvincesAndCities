const sites = [{
     name: "北京",
     cities: ["东城区","西城区","崇文区","宣武区","朝阳区","海淀区","丰台区","石景山区","通州区","平谷区","顺义区","怀柔区","昌平区","门头沟区","房山区","大兴区","密云县","延庆县"]
}, {
     name: "天津",
     cities: ["和平区","河西区","河东区","红桥区","南开区","河北区","西青区","津南区","北辰区","东丽区","汉沽县","宝坻县","静海县","宁河县","武清县"]
}, {
     name: "河北",
     cities: ["张家口","承德","保定","沧州","衡水","石家庄","邢台","邯郸","唐山","廊坊","秦皇岛"]
}, {
     name: "山西",
     cities: ["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"]
}, {
     name: "内蒙古",
     cities: ["呼和浩特","呼伦贝尔","兴安","通辽","赤峰","锡林郭勒","乌兰察布","包头","鄂尔多斯","巴彦淖尔","乌海","阿拉善"]
}, {
     name: "辽宁",
     cities: ["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]
}, {
     name: "吉林",
     cities: ["长春","吉林","四平","通化","白山","辽源","白城","松原","延边朝鲜族自治州"]
}, {
     name: "黑龙江",
     cities: ["哈尔滨","齐齐哈尔","牡丹江","佳木斯","大庆","鸡西","双鸭山","伊春","七台河","鹤岗","黑河","绥化","大兴安岭地区"]
}, {
     name: "上海",
     cities: ["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","奉贤区","崇明县"]
}, {
     name: "江苏",
     cities: ["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"]
}, {
     name: "浙江",
     cities: ["杭州","湖州","绍兴","温州","嘉兴","宁波","金华","衢州","舟山","台州","丽水"]
}, {
     name: "安徽",
     cities: ["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","阜阳","宿州","滁州","六安","宣城","池州","亳州"]
}, {
     name: "福建",
     cities: ["福州","泉州","三明","南平","龙岩","漳州","宁德","莆田","厦门"]
}, {
     name: "江西",
     cities: ["南昌","九江","吉安","赣州","萍乡","新余","宜春","景德镇","上饶","鹰潭","抚州"]
}, {
     name: "山东",
     cities: ["济南","泰安","潍坊","德州","滨州","莱芜","青岛","烟台","日照","东营","济宁","荷泽","聊城","临沂","枣庄","淄博","威海"]
}, {
     name: "河南",
     cities: ["郑州","开封","洛阳","南阳","漯河","许昌","三门峡","平顶山","周口","驻马店","新乡","鹤壁","焦作","濮阳","安阳","商丘","信阳","济源"]
}, {
     name: "湖北",
     cities: ["武汉","十堰","襄樊","随州","荆门","孝感","宜昌","黄冈","鄂州","荆州","黄石","咸宁"]
}, {
     name: "湖南",
     cities: ["长沙","株洲","湘潭","衡阳","邵阳","岳阳","张家界","益阳","常德","娄底","郴州","永州","怀化","湘西土家族苗族自治州"]
}, {
     name: "广东",
     cities: ["广州","深圳","珠海","东莞","佛山","中山","惠州","汕头","江门","茂名","肇庆","湛江","梅州","汕尾","河源","清远","韶关","揭阳","阳江","潮州","云浮"]
}, {
     name: "广西",
     cities: ["南宁","桂林","柳州","梧州","钦州","北海","玉林","贵港","防城港","百色","崇左","来宾","贺州","河池"]
}, {
     name: "海南",
     cities: ["海口","三亚","琼海","儋州"]
}, {
     name: "重庆",
     cities: ["万州区","涪陵区","渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥区","渝北区","巴南区","黔江区","长寿区","江津市","合川市","永川市","南川市"]
}, {
     name: "四川",
     cities: ["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","资阳","乐山","眉山","南充","宜宾","广安","达州","巴中","雅安","甘孜藏族自治州","阿坝藏族羌族自治州","凉山彝族自治州"]
}, {
     name: "贵州",
     cities: ["贵阳","遵义","安顺","六盘水","都匀","凯里","铜仁","毕节","兴义","赤水","仁怀","清镇","福泉"]
}, {
     name: "云南",
     cities: ["昆明","玉溪","曲靖","普洱","保山","丽江","临沧","昭通"]
}, {
     name: "西藏",
     cities: ["拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"]
}, {
     name: "陕西",
     cities: ["西安","宝鸡","咸阳","渭南","铜川","延安","榆林","汉中","安康","商洛"]
}, {
     name: "甘肃",
     cities: ["兰州","嘉峪关","金昌","武威","酒泉","张掖","白银","平凉","庆阳","天水","陇南","定西","临夏自治州","甘南自治州"]
}, {
     name: "青海",
     cities: ["西宁","海东地区","海西蒙古族藏族自治州","海南藏族自治州","海北藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州"]
}, {
     name: "宁夏",
     cities: ["银川","石嘴山","吴忠","中卫","固原"]
}, {
     name: "新疆",
     cities: ["乌鲁木齐","克拉玛依","昌吉","吐鲁番","哈密","库尔勒","阿克苏","阿图什","喀什","和田","伊宁","奎屯","塔城","乌苏","阿勒泰","石河子"]
}, {
     name: "香港",
     cities: ["中西区", "湾仔区", "东区", "南区", "九龙-油尖旺区", "九龙-深水埗区", "九龙-九龙城区", "九龙-黄大仙区", "九龙-观塘区", "新界-北区", "新界-大埔区", "新界-沙田区", "新界-西贡区", "新界-荃湾区", "新界-屯门区", "新界-元朗区", "新界-葵青区", "新界-离岛区"]
}, {
     name: "澳门",
     cities: ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路氹城"]
}]

module.exports = sites
