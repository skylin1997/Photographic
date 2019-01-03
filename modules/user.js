import { HTTP } from '../utils/http.js'
// const my = require('../../pages/my/my.js'); 
export class UserModel extends HTTP {
  getList(openid,name,sex,phone) {
    console.log(openid,name,sex,phone);
    return this.request(
      {
        url: 'wechat/user.do?method=updateUser',
        method:'GET',
        // method:'POST',
        header:
        {
          // 'content-type': 'application/x-www-form-urlencoded',
          'content-type': 'application/json'
        },
        data:{
          userWechat: openid,
          userName:name,
          userSex:sex,
          userPhone:phone
        },
        success: (res) => {
          console.log(res)
        }
      })
  }
  postOpenId(openid) {
    console.log('openid:', openid);
    return this.request(
      {
        url: 'wechat/user.do?method=createUser',
        method: 'GET',
        // method:'POST',
        data: {
          userWechat: openid,
        },
        header:
        {
          // 'content-type': 'application/x-www-form-urlencoded',
          'content-type': 'application/json'
        },
        // dataType: 'json', // 添加这个配置
        success: (res) => {
          console.log(res)
          // sCallback(res.detail.user)
        }
      })
  }
} 