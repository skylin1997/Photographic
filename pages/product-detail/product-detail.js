// pages/product-detail/product-detail.js
import { AddressModel } from '../../modules/address.js'
import { ProductModel } from '../../modules/product.js'
const addressModel = new AddressModel()
const productModel = new ProductModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productDetail:[],
    storeList:[],
    isNull:true,
    stoId:0,
    stoName:'集美店',
    proStoId:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const pid = options.pid;
    productModel.getDetailList((res) => {
      let flag=true;
      flag = res.store.length==0?false:true;
      this.setData({
        productDetail: res.proDetail,
        storeList:res.store,
        isNull:flag
      });
    },pid)
    
  },
onStore(e){
  let index = e.currentTarget.dataset.index
  console.log(index)
  let list=this.data.storeList
  this.setData({
    stoId: index,
    stoName:list[index].stoName,
    proStoId: list[index].proStoId
  })
},
onOrder(e){
  wx:wx.navigateTo({
    url: '../date-detail/date-detail?stoName=' + this.data.stoName + '&proStoId='+this.data.proStoId,
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