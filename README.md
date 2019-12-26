# webpack实践（五）- babel的基础配置和使用
webpack中使用babel编译包含ES6语法的js文件，需要依次安装babel-loader、babel-core、babel-preset-env    
高版本安装命令为npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env    
低版本安装命令为npm install babel-loader@7.1.4 babel-core babel-preset-env        

## 使用
git clone https://github.com/JEmbrace/webpack-practice.git    
git checkout fifth-bableLoader    
项目根目录下运行npm install    
浏览器打开dist/template/resultIndex.html可以看到打包后成功运行的结果；或者直接查看dist/index.bundle.js中已经打包后的结果代码    
（可以不执行npm install直接访问index.html，后续如果需要使用webpack进行测试打包，就需要执行npm install安装依赖包）    
## blog    
博客地址：https://www.cnblogs.com/HouJiao/p/12096555.html