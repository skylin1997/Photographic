import { config } from '../config.js'
export class HTTP {
  request(params) {
    // url,data,method
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
      },
      success: (res) => {
        let code = res.statusCode.toString()
        params.success && params.success(res.data)
      },
      fail: (err) => {
        
      }

    })
  }
}