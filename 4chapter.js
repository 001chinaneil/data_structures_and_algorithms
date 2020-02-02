// 栈的实现
// Stack类
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push(element){
	this.dataStore[this.top++] = element;// 后++,赋值完之后，top值加1
}
function peek(){
	return this.dataStore[this.top-1];// 预览栈顶元素
}
function pop(){
	return this.dataStore[--this.top];
}
function clear(){
	this.top = 0;
}
function length(){
	return this.top;
}
// 测试Stack类的实现
let s = new Stack();
s.push('David');
s.push('Raymond');
s.push(':wqBryan');
console.log('length: ' + s.length());
console.log(s.peek());
let popped = s.pop();
console.log('popped is: ' + popped);
console.log(s.peek());
s.push('Cynthia');
console.log(s.peek());
s.clear();
console.log('length: ' + s.length());
console.log(s.peek());
s.push('Clayton');
console.log(s.peek());

// 数制间的相互转换
function mulBase(num, base){
	let s = new Stack();
	do {
		s.push(num % base);
		console.log('插入值：', num % base);
		num = Math.floor(num /= base);
	}while (num > 0);
	var converted = '';
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}
let num = 10;let base = 2;
let newNum = mulBase(10,2);
console.log(newNum);
