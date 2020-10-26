import axios from "axios";



export default function ajax(url = "", params = {}, type = "get") {
    //定义一个promise对象
    let promise
    return new Promise((resolve, reject) => {
        if ("get" === type) {
            let paramsStr = ""
            Object.keys(params).forEach((item) => {
                console.log(item);
                paramsStr += item + "=" + params[item] + "&";

            })
            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf("&"))
            }
            url += "?" + paramsStr
            promise = axios.get(url)
        } else if ("post" === type) {
            promise = axios.post(url, params)
        }

        //返回请求结果
        promise.then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}