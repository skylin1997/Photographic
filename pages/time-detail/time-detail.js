import { ScheduleModel} from '../../modules/schedule.js'
const timeModel = new ScheduleModel()
Page({
  data: {
    time:'',
    timeLists:[],
    stoName:'',
    schDate:'',
    proStoId:'',
    schId:0
  },
  onTime: function (e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      schId: this.data.timeLists[index].schId
    })
    wx: wx.navigateTo({
      url: '../order-submit/order-submit?schId=' +this.data.schId ,
       success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let proStoId = options.poStoId
    let schDate = options.schDate
    let stoName=options.stoName
    this.setData({
      proStoId: proStoId,
      schDate: schDate,
      stoName: stoName
    })
    timeModel.getTimeList((res)=>{
      let time=res;
      time.forEach((item) => {
        item.schTime = item.schTime.substring(0, 5); 
      })
       this.setData({
         timeLists:time
       })
     }, proStoId, schDate)
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