import { HTTP } from '../utils/http.js'
export class ProductModel extends HTTP {
  getList(sCallback) {
    return this.request(
      {
        url: 'wechat/product.do?method=proData',
        success: (res) => {
          console.log(res)
          sCallback(res.detail.proList)
        }
      })
  }
  getDetailList(sCallback,pid) {
    return this.request(
      {
        url: '/wechat/product.do?method=getProDetail&proId='+pid,
        success: (res) => {
          console.log(res)
          sCallback(res.detail)
        }
      })
  }
} 