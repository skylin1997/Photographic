import { HTTP } from '../utils/http.js'
export class OrderModel extends HTTP {
  getOrderInfo(sCallback,schId){
    return this.request({
      url: 'wechat/order.do?method=schedulelistData&schId='+schId,
      success: (res) => {
        sCallback(res.detail.ScheduleListDetail)
      }
    })

  }
  createOrder(  name, sex, phone, add, schId, openId) {
    return this.request(
      {
        url: 'wechat/order.do?method=createOrder',
        data: {
          ordName: name,
          ordSex: sex,
          ordPhone: phone,
          ordState: 2,
          ordRemarks: add,
          schId: schId,
          userWechat: openId
        },
        success: (res) => {
         
        }
      })
  } 
  getOrderList(sCallback,openId) {
    return this.request(
      {
        url: 'wechat/order.do?method=orderlistData',
        data: {
          userWechat: openId,
        },
        success: (res) => {
          sCallback(res.detail.orderlistDetail)
          // console.log(res.detail.orderlistDetail)
        }
      })
  }
  getOrderDetail(sCallback,ordId) {
    return this.request(
      {
        url: 'wechat/order.do?method=moreorderData',
        data: {
          ordId: ordId,
        },
        success: (res) => {
          // console.log(res)
          sCallback(res.detail.moreorderDetail)
        }
      })
  }
  cancelOrder(sCallback,ordId,schId){
    return this.request(
      {
        url: 'wechat/order.do?method=cancleOrder',
        data: {
          ordId: ordId,
          schId:schId
        },
        success: (res) => {
          console.log(res)
          sCallback(res.ok)
        }
      })
  }
}