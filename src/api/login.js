import ajax from "./ajax"


const Base_URL = "/api"

export const loginuser = (user_name, pass, captcha) => ajax(
    Base_URL + "/v1/users/login", { user_name, login_password: pass, captcha }, "post"
)