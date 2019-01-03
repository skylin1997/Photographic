// components/wheel/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //轮播页数组
    imgUrls: ['images/images@one.png',
      'images/images@two.png',
      'images/images@three.png'
    ],
    chooses: true,
    //是否显示指适点
    indicatorDots: true,
    //是否轮播
    autoplay: true,
    circular:true,
    //
    interval: 5000,
    duration: 1000,
    inputShowed: false,
    inputVal: "",
    //轮播页当前index
    swiperCurrent: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function (e) {
      this.chooses=false;
      this.setData({
        swiperCurrent: e.detail.current,
      })
    },
    //轮播图点击事件
    swipclick: function (e) {
      console.log(this.data.swiperCurrent)
    },
  }
})
