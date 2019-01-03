// components/detailtime/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    schedule: Object,
    proStoId: String,
    stoName: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    dateArr:[]
  },
  attached(){
    this.dataInit();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    dataInit: function(){
      let proDate = this.properties.schedule;
      let str = proDate.schDate;
      let arr = str.split("-");
      this.setData({
        dateArr: arr
      });
    },
    onDateTap: function(){
      let that = this;
      let id = this.properties.proDate;
      wx:wx.navigateTo({
        url: "/pages/time-detail/time-detail?stoName=" + this.properties.stoName + '&schDate=' + this.properties.schedule.schDate + '&poStoId=' + this.properties.proStoId,
        success:function(res){},
        fail:function(res){},
        complete(res){}
      });
    }
  }
})
