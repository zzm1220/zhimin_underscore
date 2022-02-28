#!C:\Progra~1\nodejs\node.exe
const process = require('process');
const lib = require('iptv-lib');
const argv = process.argv;
// 注册一个命令 iptv init
const command = argv[2];
const options = argv.slice(3);
if (options.length > 1) {
  // 实现参数解析 --version 和 init --name
  let [option, param] = options;
  option = option.replace('--', '');
  lib[command] && lib[command]({ option, param });
}
if (command.startsWith('--') || command.startsWith('-')) {
  const globalCommand = command.replace(/--|-/g, '');
  if (globalCommand === 'version' || globalCommand === 'V') {
    console.log('v1.0.0');
  }
}
