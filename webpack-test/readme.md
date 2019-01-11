#### 介绍
这是一篇关于webpack的尝试项目，关于webpack的一些基本概念的笔记和尝试，
推荐博客：https://www.jianshu.com/p/42e11515c10f

##### 什么是webpack？
前端项目管理工具，WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，
找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），
并将其转换和打包为合适的格式供浏览器使用。

1. js->module.js（浏览器可识别）
2. png/less/scss ->module （浏览器可识别）

##### Webpack的工作方式
你的项目当做一个整体，通过一个给定的主文件（如：index.js），
Webpack将从这个文件开始找到你的项目的所有依赖文件，
使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

##### 安装webpack
```
// 安装Webpack
npm install -g webpack
```
方式一：

在根目录下建立webpack.config.js webpack打包配置文件
```
// “__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname +"/public",
    filename: "bundle.js"
  },
  mode:'development'
}
```
然后直接在终端运行webpack就好了.

方式二：

在node的package.json中配置，在script的脚本中的start项中增加"webpack"
```
  "scripts": {
    "test": "test",
    "start":"webpack"
  },
```
注：package.json中的script会安装一定顺序寻找命令对应位置，
本地的node_modules/.bin路径就在这个寻找清单中，
所以无论是全局还是局部安装的Webpack，
你都不需要写前面那指明详细的路径了。
执行如下代码
```
npm start
```
npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，
如果对应的此脚本名称不是start，想要在命令行中运行时，
需要这样用npm run {script name}如npm run build，我们在命令行中输入npm start

配置sourceMap（更容易调试）
<table>
<thead>
<tr>
<th>devtool选项</th>
<th>配置结果</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>source-map</code></td>
<td>在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的<code>source map</code>，但是它会减慢打包速度；</td>
</tr>
<tr>
<td><code>cheap-module-source-map</code></td>
<td>在一个单独的文件中生成一个不带列映射的<code>map</code>，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；</td>
</tr>
<tr>
<td><code>eval-source-map</code></td>
<td>使用<code>eval</code>打包源文件模块，在同一个文件中生成干净的完整的<code>source map</code>。这个选项可以在不影响构建速度的前提下生成完整的<code>sourcemap</code>，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；</td>
</tr>
<tr>
<td><code>cheap-module-eval-source-map</code></td>
<td>这是在打包文件时最快的生成<code>source map</code>的方法，生成的<code>Source Map</code> 会和打包后的<code>JavaScript</code>文件同行显示，没有列映射，和<code>eval-source-map</code>选项具有相似的缺点；</td>
</tr>
</tbody>
</table>
正如上表所述，上述选项由上到下打包速度越来越快，不过同时也具有越来越多的负面作用，较快的打包速度的后果就是对打包后的文件的的执行有一定影响。
```
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
```

##### 使用webpack构建本地服务器
执行命令：
```
npm install --save-dev webpack-dev-server
```
有如下配置
<table>
<thead>
<tr>
<th>devserver的配置选项</th>
<th>功能描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>contentBase</td>
<td>默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）</td>
</tr>
<tr>
<td>port</td>
<td>设置默认监听端口，如果省略，默认为”8080“</td>
</tr>
<tr>
<td>inline</td>
<td>设置为<code>true</code>，当源文件改变时会自动刷新页面</td>
</tr>
<tr>
<td>historyApiFallback</td>
<td>在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为<code>true</code>，所有的跳转将指向index.html</td>
</tr>
</tbody>
</table>
配置文件(webpack.config.js)
```
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:8200
  }
```

在npm package.json中的脚本中增加
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack",
    "server": "webpack-dev-server --open"
  },

```
在终端中输入npm run server即可在本地的8080端口查看结果

