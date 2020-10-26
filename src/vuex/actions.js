import { getHomeSwipe } from "@/api/index"
import { getGoodsList, getGoodsDetail } from "../api/list"

const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actAddNumX(context, data) {
        context.commit("addNumX", data)
    },
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async actGetSwipeDatas(context) {
        const result = await getHomeSwipe()
        console.log(result.data);
        context.commit("getSwipeDatas", result.data)
    },
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(result);
        context.commit("getGoodsList", result.data)
    },

    async getGoodsDetails(context, params) {
        const result = await getGoodsDetail(params)
        console.log(result);
        context.commit("getGoodsDetails", result.data[0])
    }
}

export default actions