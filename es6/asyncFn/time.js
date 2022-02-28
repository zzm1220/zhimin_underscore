/*
 * @Author: zhimin
 * @Date: 2022-02-17 10:36:02
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-17 10:43:02
 * @FilePath: \zhimin_underscore\es6\asyncFn\time.js
 */
function timeout (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  })
}
async function asyncPrint (value, ms) {
  await timeout(ms);
  console.log(value);
  return 'hello';
}

asyncPrint('world world', 500).then(data => {
  console.log(data);
})