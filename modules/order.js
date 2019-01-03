import { HTTP } from '../utils/http.js'
export class OrderModel extends HTTP {
  insertOrder(sCallback) {
    return this.request(
      {
        url: 'wechat/order.do?method=method=createOrder',
        success: (res) => {
        }
      })
  }
  getOrderList(sCallback) {
    return this.request(
      {
        url: 'wechat/order.do?method=orderlistData',
        date: {
          userId: '123456',
        },

        success: (res) => {
          sCallback(res.detail.orderlistDetail)
        }
      })
  }
  getOrderDetail(sCallback) {
    return this.request(
      {
        url: 'wechat/order.do?method=moreorderData',

        success: (res) => {
          sCallback(res.detail.moreorderDetail)
        }
      })
  }
}