import { HTTP } from '../utils/http.js'
export class AddressModel extends HTTP{
   getList(sCallback){
    return this.request(
      {
        url: 'wechat/store.do?method=getStore',
        success: (res) => {
           sCallback(res.detail.store)
        }
      })
  }
}