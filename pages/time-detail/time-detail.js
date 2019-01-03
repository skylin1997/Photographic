import { ScheduleModel} from '../../modules/schedule.js'
const timeModel = new ScheduleModel()
Page({
  data: {
    timeLists:[],
    stoName:'',
    schDate:'',
    proStoId:'',
    schId:''
  },
  onTime: function (e) {
    let schTime = this.data.timelists.schTime
    wx: wx.navigateTo({
      url: '' + schId,
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
       this.setData({
         timeLists:res
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