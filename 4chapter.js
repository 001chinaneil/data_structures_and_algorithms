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
	return this.dataStore[--this.top];// 前--，赋值前，top值减1
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

console.log('-----判断给定字符串是否是回文-----------------------------');
function isPalindrome(word){
	let s = new Stack();
	for(let i = 0; i < word.length; ++i){
		s.push(word[i]);
	}
	let rword = '';
	while (s.length() > 0) {
		rword += s.pop();
	}
	if( word == rword ){
		return true;
	}
	else {
		return false;
	}
}

let word = 'hello';
if(isPalindrome(word)){
	console.log(word + '是回文！');
}else {
	console.log(word + '不是回文~~');
}

word = 'racecar';
if( isPalindrome(word) ){
	console.log(word + '是回文！');
}else {
	onsole.log(word + '不是回文~~');
}

console.log('-----使用栈模拟递归过程---------------');
function fact(n){ 
	let s = new Stack();
	while (n > 1){
		s.push(n--);
	}
	let product = 1;
	while (s.length() > 0){
		product *= s.pop(); 
	}
	return product;
}

console.log(fact(5));

console.log('-----练习1：使用栈来判断一个算数表达式中的括号是否匹配------------------------');
function check(exe){
	let s = new Stack();
	for(let i = 0; i < exe.length; i++){
		if(exe[i] == '('){
			s.push(i);
		}else if(exe[i] == ')'){
			if(s.length() > 0){
				s.pop();
			}else{
				console.log('位置'+ i +': 缺失(');
			}
		}
	}	
	return console.log(s.length() <= 0 ? '不缺失括号' : `第${ s.peek() }个字符是不匹配的括号`);
}
check('2.3 + 23/12 + (3.14159 x 0.24');

console.log('-----练习2：后缀表达式 暂无解法------------------------------');

console.log('-----练习3: 佩兹糖果盒 将黄色糖果移除--------------------------------------');
// 全称使用了4个栈
let peizi = new Stack();
peizi.push('red');
peizi.push('yellow');
peizi.push('white');
peizi.push('red');
peizi.push('yellow');
peizi.push('white');

function tangguo(source){
	let temp = new Stack();// 存储除黄色以外的糖果
	let yellowBox = new Stack();// 储存黄色的糖果

	while(source.length() > 0) {
		if(source.peek() == 'yellow'){
			yellowBox.push(source.pop());
		}else {
			temp.push(source.pop());
		}
	}

	let resultBox = new Stack();
	while(temp.length() > 0){
		resultBox.push(temp.pop());
	}

	return resultBox;
}
console.log('筛选后：', tangguo(peizi));