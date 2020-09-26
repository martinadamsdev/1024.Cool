// const data = {
//   "en": "xya",
//   "cn": "中文1",
//   "extra": [
//     {
//       "en": "xya",
//       "cn": "中文1",
//       "extra": [
//         {
//           "en": "di_yi_jie",
//           "cn": "第一节",
//           "extra": []
//         }
//       ]
//     },
//     {
//       "en": "xya",
//       "cn": "中文1",
//       "extra": []
//     }
//   ]
// }

// const getCNTitle = (data, enTitle) => {
//   const dataString = JSON.stringify(data)
//   return dataString.slice(dataString.search(enTitle) + enTitle.length).split('"')[4]
// }

// const getCNTitle = (data, enTitle) => {
//   const dataString = JSON.stringify(data)
//   let startNum = dataString.search(enTitle)
//   let tempString = dataString.slice(startNum + enTitle.length)
//   // console.log(tempString)
//   const arr = tempString.split('"')
//   return arr[4]
//   //  return tempString.slice(1, tempString.search(',') - 1)
// }
// console.log(getCNTitle(data, 'Chaper 2'))
// console.log(getCNTitle(data, 'haray'))


//
// getCNTitle(data, 'di_yi_jie')

const data = ['# a', '## b', '## c', '### d', '# e']

const format = (data) => {
  let hn = 1, show = ''
  console.log(data.toString());
  console.log(data.map(x => {
    console.log(x.replace(' ', ''))
    return {'hn': show, title: x.replace(/#/g, '').trim()}
    }
  ))
}

format(data)

const arr = [1, [2, [3, [4, 5]]], 6];

const res1 = JSON.parse('[' + arr.toString() + ']')

console.log(res1);
