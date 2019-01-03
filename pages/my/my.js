//index.js
//获取应用实例
import { UserModel } from '../../modules/user.js'
const userModel = new UserModel();
const app = getApp();
const openid = wx.getStorageSync('openid');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    openid: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // openidModel.getList(openid);
    if (app.globalData.userInfo) {
      userModel.postOpenId(openid)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            namewechat: res.userInfo.nickName
          })
        }
      }),
      wx.request({
        url: 'http://172.21.6.118:8080//PhotographyApplet/wechat/user.do?method=updateUser',
        data: "'" + userInfo.nickName +"'",
        method: POST,
        success: res=>{
          console.log(res);
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(wx.getStorageSync('openid'))
    userModel.postOpenId(wx.getStorageSync('openid'));
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  updateUserInfo: function (){
    console.log(openid);
    wx.navigateTo({
      url: '../updateinfo/updateinfo?openid=' + openid,
    })
  },
  aboutUs: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  }
})
