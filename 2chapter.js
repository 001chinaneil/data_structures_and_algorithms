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

console.log('-----用map函数给数组重新生成新数组---------------------------------------------------');
function first(word){
	return word[0];
}
let array1 = ['for','me','information'];
let array1_new = array1.map(first);
console.log('新数组',array1_new);
let array1_join = array1_new.join('');
console.log('join之后的',array1_join);
