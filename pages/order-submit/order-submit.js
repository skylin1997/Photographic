// pages/order/order.js
import {
  OrderModel
} from '../../modules/order.js'
const orderModel = new OrderModel()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schId: '',
    orderInfo: [],
    name: '',
    phone: '',
    sex: '',
    add: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const schId = options.schId
    orderModel.getOrderInfo((res) => {
      this.setData({
        orderInfo: res[0],
        schId: schId
      })
    }, schId)
  },
  onSubmitOrder: function(event) {
    let flage = false
    const myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.name == "") {
      wx.showToast({
        title: '姓名不能为空',
        icon: 'none',
        duration: 1000
      })
      flage = false
    }
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      flage = false
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      flage = false
    } else {
      flage = true
    }
    if (flage) {
      wx.showModal({
        title: '微信支付 ',
        content: '微信支付',
        showCancel: true,
        cancelText: '失败',
        cancelColor: '#52A9FF',
        confirmText: '成功',
        confirmColor: '#52A9FF',
        success(res) {
          if (res.confirm) {
            wx: wx.navigateTo({
              url: '../order-success/order-success',
              success: function(res) {
                orderModel.createOrder(this.data.name, this.data.sex, this.data.phone, this.data.add, this.data.schId, app.globalData.openId)
              },
              fail: function(res) {},
              complete: function(res) {},
            })
          }
          else if (res.cancel) {
            wx: wx.navigateTo({
              url: '../order-fail/order-fail',
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {},
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '提交失败，请重新提交',
        icon: 'none',
        duration: 1000
      })
    }
  },
  getNameValue: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getSexValue: function(e) {
    this.setData({
      sex: e.detail.value
    })
  },
  getPhoneValue: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getAddValue: function(e) {
    this.setData({
      add: e.detail.value
    })
  },
  regInfo: function() {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})