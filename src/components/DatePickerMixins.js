import datepicker from 'vue-datepicker'

const WEEK = ['周一', '周二', '周三', '周四', '周五', '周六', '周天']
const MONTH = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

export default {
  data: () => ({
    date: {
      time: '' // string
    },
    dateop: {
      type: 'day',
      week: WEEK,
      month: MONTH,
      format: 'YYYY-MM-DD',
      placeholder: '请选择生日',
      inputStyle: {},
      color: {
        header: '#48bbc0',
        headerText: '#fff'
      },
      buttons: {
        ok: '确定',
        cancel: '取消'
      },
      overlayOpacity: 0.5, // 0.5 as default
      dismissible: true // as true as default
    },
    limit: [
      {
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }
    ]
  }),
  components: {
    'datepicker': datepicker
  }
}
