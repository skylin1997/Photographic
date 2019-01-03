import {HTTP} from '../utils/http.js'
export class ScheduleModel extends HTTP{
  getDateList(sCallBack, proStoId){
    return this.request({
      url: 'wechat/schedule.do?method=getDate',
      data: {
        proStoId: proStoId
      },
      success: (res) =>{
        sCallBack(res.detail.schedule)
      }
    });
  }
  getTimeList(sCallback, proStoId, schDate) {
    return this.request(
      {
        url: '/wechat/schedule.do?method=getTime&proStoId=' + proStoId + '&schDate=' + schDate,
        success: (res) => {
          sCallback(res.detail.schedule)
        }
      })
  }
}