// pages/moreorder/moreorder.js
import { OrderModel } from '../../modules/order.js'
const orderModel = new OrderModel()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    moreorders:[],
    ordId:'',
    schId:'',
    forbid:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ordId: options.ordId,
      schId : options.schId,
      forbid : options.ordState==2?false:true
    })
    // console.log(options.ordId, options.schId, options.ordState)
    orderModel.getOrderDetail((res) => {
      this.setData({
        moreorders: res,
      });
    }, options.ordId)
  },
  onCancel(){
    orderModel.cancelOrder((res)=>{
      if(res==true){
        wx.showToast({
          title: '取消预约成功',
          icon: 'none',
          duration: 5000      
        })
        wx.switchTab({
          url: '/pages/order/order',
          success: function (e) {
            var page = getCurrentPages().pop();
            if (page == undefined || page == null) return;
            page.onLoad();
          } 
        })
      }
      else{
        wx.showToast({
          title: '取消预约失败，请重试！',
          icon: 'none',
          duration: 1000
        })
      }
    },this.data.ordId,this.data.schId)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})