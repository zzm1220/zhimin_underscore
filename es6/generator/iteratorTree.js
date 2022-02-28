/*
 * @Author: zhimin
 * @Date: 2022-02-14 16:30:44
 * @LastEditors: zhimin
 * @LastEditTime: 2022-02-14 16:34:10
 * @FilePath: \zhimin_underscore\es6\generator\iteratorTree.js
 */
function* iterTree (tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = ['a', ['b', ['c', 'd']], ['e', 'f']];
for (let x of iterTree(tree)) {
  console.log(x);
}