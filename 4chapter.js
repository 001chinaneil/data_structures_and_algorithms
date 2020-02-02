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
s.push('Bryan');
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
