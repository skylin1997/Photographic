import {AddressModel} from '../../modules/address.js'
import {ProductModel} from '../../modules/product.js'
const addressModel = new AddressModel()
const productModel = new ProductModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses:[],
    products:[]
  },
onMore:function(event){
  wx:wx.navigateTo({
    url: '../products/products',
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    addressModel.getList((res) => {
      this.setData({
        addresses: res,
      });
    }),
    productModel.getList((res) => {
        this.setData({
          products: res,
        });
      })
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