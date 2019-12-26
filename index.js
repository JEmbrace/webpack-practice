/*
*	引用counter.js模块中的函数，传入参数，打印相加结果
*	使用到的ES6的基本语法有：
*       模块导入-import命令
*		变量声明命令-let
*/
import { Counter } from './counter.js'
let a = 100;
let b = 200;
let counter = new Counter(a,b);
let result = counter.add();
console.log("add: a + b = " + result);