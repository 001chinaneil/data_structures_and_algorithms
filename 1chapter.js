let a = 1;
let b = 2;
console.log(a + b);

// while循环
let number = 1;
let sum = 0;
while( number < 11 ){
	sum += number;
	++number;
}
console.log(sum);

// 递归调用
function factiral(num){
	if(num == 1){
		return num;
	}else{
		return num*factiral(num-1);
	}

}
console.log(factiral(5));

// 对象和面向对象编程
function checking(amount){
	this.balance = amount;
	this.deposit = deposit;
	console.log('this: ' + JSON.stringify(this));
}
function deposit(num){
	this.balance += num;
	console.log('balance: ' + this.balance);
}
let amount = new checking(500);
amount.deposit(1000);
