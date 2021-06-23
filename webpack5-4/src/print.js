function demo() {
  console.log('这个print.js中的demo被调用了');
}

module.exports = {
    demo
}

console.log("print.js文件被加载了")