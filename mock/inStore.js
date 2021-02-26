const Mock = require('mockjs')
var Random = Mock.Random;

const data = Mock.mock({
  'items|10': [{
    'sid|+1': 1,
    code: '@guid',
    'status|1': [0,1,2],  //['等待审核', '完成审核', '审核失败']
    author: 'name',
    'needNum|50-100':2,
    'finishNum|50-100':2,
    display_time: '@datetime'
    
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/inStore/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]