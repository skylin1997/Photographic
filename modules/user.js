import { HTTP } from '../utils/http.js'
// const my = require('../../pages/my/my.js'); 
export class UserModel extends HTTP {
  createUser(sCallBack, code) {
    return this.request(
      {
        url: 'wechat/user.do?method=createUser&code='+code,
        method: 'GET',
        success:(res)=>{
          sCallBack(res.detail.openId)
          wx.setStorageSync('openId', res.detail.openId)
        }
      })
  }
  getUserInfo(sCallBack,openid){
    return this.request(
      {
        url: '/wechat/user.do?method=userDetail&userWechat=' + openid,
        method: 'GET',
        success: (res) => {
          // console.log(res)
          sCallBack(res.detail)
        }
      })
  }
  updateUserInfo(openid,name,sex,phone) {
    return this.request(
      {
        url: 'wechat/user.do?method=updateUser',
        method:'POST',
        data:{
          userWechat: openid,
          userName:name,
          userSex:sex,
          userPhone:phone
        }
      })
  }
  getOpenId(){
     return wx.getStorageSync('openId')
  }
}