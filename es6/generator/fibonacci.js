/*
 * @Author: zhimin
 * @Date: 2022-02-16 09:59:01
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-16 10:26:09
 * @FilePath: \zhimin_underscore\es6\generator\test.js
 */
function* fibonacci () {
  let [prev, curr] = [0, 1];
  for (; ;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}
for (let n of fibonacci()) {
  if (n > 30) break;
  console.log(n);
}