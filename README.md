# avalon-server-render-example
avalon2+koa2的后端渲染例子

npm install

npm start


------------
后端渲染的流程

1.  引入最新版 [avalon](https://github.com/RubyLouvre/avalon/tree/master/dist) 这里用avalon.modern体积少些
2.  引入avalon仓库下的serve下的文件[serveRender.js](https://github.com/RubyLouvre/avalon/tree/master/src/server)
3.  引入你定义VM的文件 (所有DOM操作要在回调里进行,不要出现 window, document, 方便能在nodejs环境中运行)
对你的VM使用webpack进行打包 (目的是处理module.exports, require)
4.  引入你该页面的模板
5.  将VM与模板放进serveRender方法,得到一个对象,里面包含渲染好的HTML(**A**) 及 一个包括所有模板的对象(**B**)
6.  创建一个script标签, 里面定义一个`avalon.serverTemplates`对象, 将**B**对象赋给它
7.  将上面的标签与A页面,  赋给ctx.body发往前端 


------

```javascript
//1. 引入avalon
var vm = require('./src/avalon')
//2. 引入avalon的后端渲染器
var serveRender = require('./dist/serverRender')
//3. 当前页面VM
var vm = require('./src/vm')
//4. 当前页面模板
var test = fs.readFileSync('./src/aaa.html', 'utf-8');

//5. 
var obj = serveRender(vm, test)

//6. 
var files = JSON.stringify(obj.templates)
var script = '<script src="./avalon.js"><\/script>' +
        '<script> avalon.serverTemplates= ' + files + '<\/script>' +
        '<script src="./test.js"><\/script>'
//7. render
app.use(async function(ctx){
     await (ctx.body = script + obj.html)
})



```

