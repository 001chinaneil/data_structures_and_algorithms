// 创建数组
let numbers = new Array(10);
console.log(numbers.length);
let numbers1 = new Array(1);
console.log(numbers1.length);
let numbers2 = new Array(1,2,3);
console.log(numbers2.length);

// 给数组头部添加元素
let newNums = 1;
let nums = [3,4,5];
nums.unshift(newNums,1,2);
console.log(nums);

console.log('-----用sort函数给数组内元素排序-------------------------------');
function compare(num1,num2){
	return num1 - num2;
}
let nums_sort = [3,1,100,39,76,56];
nums_sort.sort(compare);
console.log(nums_sort);
