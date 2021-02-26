const Mock = require('mockjs')
var Random = Mock.Random;

const data = Mock.mock({
  'items|10': [{
    'sid|+1': 1,
    code: '@guid',
    'status|1': [0,1,2,3],  //['uncreated', 'created', 'process','finish']
    author: 'name',
    'needNum|0-100':2,
    waitNum:0,
    haveNum:0,
    finishNum:0,
    display_time: '@datetime'
    
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/project/list',
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