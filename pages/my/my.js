//index.js
//获取应用实例
import { UserModel } from '../../modules/user.js'
const userModel = new UserModel();
const app = getApp();
Page({
  data: {
    openId:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      let openId= userModel.getOpenId()
      this.setData({
        openId: app.globalData.openId,
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        let openId = userModel.getOpenId()
        app.globalData.openId = openId
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          let openId = userModel.getOpenId()
          app.globalData.openId = openId
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            namewechat: res.userInfo.nickName
          })
        }
      })
    }
    console.log(app.globalData.userInfo, app.globalData.openId)
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  updateUserInfo: function (){
    wx.navigateTo({
      url: '../updateinfo/updateinfo?openId=' + app.globalData.openId,
    })
  },
  aboutUs: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  }
})
