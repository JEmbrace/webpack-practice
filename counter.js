/*
*	将两个数做对应的计算并返回结果
*	使用到的ES6的基本语法有：
*		函数扩展-为函数参数设置默认值
*		模块导出-export命令
*/
class Counter {
	constructor(x=0,y=0){
		this.x = x;
		this.y = y;
	}
	add(){
		return this.x+this.y;
	}
}

export { Counter };