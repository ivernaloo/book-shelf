var rd = require('./lib');

rd.read('.', function(err, files){
    if (err) throw err;
    // console.log("1 : ", files.length)
})

var files = rd.readSync(".");
// console.log("2 : ", files.length)

// 异步遍历目录下的所有文件
rd.each('.', function (f, s, next) {
    // 每找到一个文件都会调用一次此函数
    // 参数s是通过 fs.stat() 获取到的文件属性值
    // console.log('file: %s', f, s);


    // 必须调用next()才能继续
    next();
}, function (err) {
    if (err) throw err;
    // 完成
});

// 同步遍历目录下的所有文件
rd.eachSync('.', function (f, s) {
    // 每找到一个文件都会调用一次此函数
    // 参数s是通过 fs.stat() 获取到的文件属性值
    // console.log('file: %s', f);
});

// 同步遍历目录下的所有js文件
rd.eachFileFilterSync('D:/MyDocument/MyBank/sync/book', /\.pdf$/, function (f, s) {
    console.log(f);
});