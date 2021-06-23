require('./style.css');
require('./iconfont.css');
require('./lessstyle.less');
require('./sytlesass.scss');

const { demo } = require('./print');

demo();

function add(x, y) {
  const a = 10;
  return a + x + y;
}

const sum = add(5, 6);
console.log(sum);
// 下一行eslint所有规则无效
// eslint-disable-next-line
console.log('这是入口文件');

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log("print.js这个文件类容有改变");
    demo();
  })
}
