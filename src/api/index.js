import ajax from "./ajax"

//定义一个全局路径
const Base_URL = "/api"



//首页轮播图
export const getHomeSwipe = () => ajax(Base_URL + "/v1/index/Swipe")