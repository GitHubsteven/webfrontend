***说明***
这是一篇非常详细，从底层到整个webpack + express + vue
搭建的简单项目，虽然应用简单，但是非常详细，实现了从0->1
的说明，在这里，远离脚架，我们开始接触最基础的部分，在一
定程度上说是几乎理解了一个前端框架的流程，非常实用
链接： http://www.cnblogs.com/lhweb15/p/5660609.html

###### 问题
其实在一个完成自学，网络上一大堆教程，但是根本不知道如何做选择，即使从git上download下来一个个项目按照readme.md跑起来，但是
对于这种前端白痴的人来说，要独立的完成或者说理解一个SPA的创建整个过程是非常辛苦的，一直以来，有几个问题困扰着我。

1. express是如何webpack实现整合的？
    ```
    //调用webpack并且传递配置
    let compiler = webpack(config);
    //使用webpack-dev-middleware中间件
    var devMiddleware = require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true,
        chunks: false
      }
    });
    ```
    这里很好的解决了我的疑问，通过编辑器，同时加载配置
 2. 为什么要用babel？
    为了解决部分浏览器对ESCMA6的不支持，在这个过程中，也学了很多关于ESCMA6的新特性
 3. 为什么在最开始的时候，在index中只需要如下代码，再引入如下代码就可以直接限制app中的html文本了呢？
    ```
    <body>
    <!-- vue的组件以自定义标签的形式使用 -->
    <favlist></favlist>
    </body>
    ```
    这就和html有个非常简单的特性，自定义组件的定义和使用，vue--(webpack)-->bundle.js的过程中生成了<Favlist>自定义标签，
    所以只需要直接引用就可以了
4. 为什么html中可以不用直接引入bundle.js就可以了
    原来这是htmlWebpackPlugin的功劳
    ```
      new HtmlWebpackPlugin({
          filename: '../index.html',
          template: path.resolve(__dirname, '../app/index/index.html'),
          inject: true
        })
    ```

###### 改进
1. express的api定义
2. vue路由的交互
3. express的路由
4. MongoDB的数据交互

不过这已经写得非常棒了，学到了很多东西，虽然又有一些不懂的地方，如一些html的路径配置方面，不过瑕不掩瑜，收获良多！