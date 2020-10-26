import { MessageBox } from 'mint-ui';
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num = state.num + data
    },
    getCategoryDatas(state, data) {
        state.catetoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },

    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    addCart(state, index) {
        state.carts[index].value++
            localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    reduceCart(state, index) {
        if (state.carts[index].value <= 1) {
            state.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: '???  不买别瞎点ok？'
            })
        } else {
            state.carts[index].value--;
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }
    },
    changeCart(state, data) {
        if (data.val < 1) {
            data.val = 1
            MessageBox({
                title: '提示',
                message: '???  不买别瞎点ok？'
            })
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    dele(state, index) {
        MessageBox.confirm("敢不要？").then(() => {
            console.log("确定");
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {
            console.log("点击了取消");
        })
    },
    selectAllFn(state) {
        state.checkAll = !state.checkAll
        if (state.carts.length == 0) {
            state.checkAll = false
            localStorage.setItem("checkAll", state.checkAll)
        }
        state.carts.forEach((item) => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)
    },
    changeSelect(state, isSelect) {
        state.carts[isSelect.index] = isSelect.cart
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true

        })
        state.checkAll = isCheck;
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)

    }

}
export default mutations