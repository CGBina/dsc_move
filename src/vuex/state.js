const state = {
    num: 1,
    catetoryDatas: [],
    swipeDatas: [], //首页轮播图数据
    userInfo: {}, //用户信息
    goodsLists: [], //产品列表
    goodsDetails: [], //产品详情
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false
}

export default state