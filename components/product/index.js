// components/product/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      product:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onProduct:function(e){
      let pid=this.properties.product.proId
      wx:wx.navigateTo({
        url: '/pages/product-detail/product-detail?pid='+pid,        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
       })
    }
  }
})
