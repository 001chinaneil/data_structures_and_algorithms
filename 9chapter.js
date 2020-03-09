// 第九章 集合
// 使用Set类
function Set(){
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.contains = contains;
    this.union = union;// 并集
    this.intersect = intersect;// 交集
    this.subset = subset;
    this.difference = difference;// 求补集
    this.show = show;
}

function add(data){
    if( this.dataStore.indexOf(data) < 0 ){
        this.dataStore.push(data);
        return true;
    }else {
        return false;
    }
}

function remove(data){
    var pos = this.dataStore.indexOf(data);
    if( pos > -1 ){
        this.dataStore.splice(pos,1);
        return true;
    }else {
        return false;
    }
}

function show(){
    return this.dataStore;
}

function contains(data){
    if( this.dataStore.indexOf(data) > -1 ){
        return true;
    }else {
        return false;
    }
}

// 求并集，将两个集合合并成一个
function union(set){
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; ++i){
        tempSet.add(this.dataStore[i]);
    }
    for(var i = 0; i < set.dataStore.length; ++i){
        if( !tempSet.contains(set.dataStore[i]) ){
            tempSet.add(set.dataStore[i]);
        }
    }
    return tempSet;
}

// 求交集
function intersect(set){
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; ++i){
        if( set.contains(this.dataStore[i]) ){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function size(){
    return this.dataStore.length;
}

function subset(set){// 是否是子集
    if( this.size() > set.size() ){
        return false;
    }else {
        for(var i = 0; i < this.dataStore; ++i){
            if( !set.contains(this.dataStore[i]) ){
                return false;
            }
        }
    }
    return true;
}

function difference(set){
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; ++i){
        if( !set.contains(this.dataStore[i]) ){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}


console.log('=====测试 使用Set类====================');
// var names = new Set();
// names.add('David');
// names.add('Jennifer');
// names.add('Cynthia');
// names.add('Mike');
// names.add('Raymond');
// if( names.add('Mike') ){
//     console.log('Mike added');
// }else {
//     console.log("Can't add Mike, must already be in set");
// }
// console.log(names.show());
// var removed = 'Mike';
// if( names.remove(removed) ){
//     console.log(removed + ' removed');
// }else {
//     console.log(removed + ' not removed');
// }
// names.add('Clayton');
// console.log(names.show());
// removed = 'Alisa';
// if( names.remove(removed) ){
//     console.log(removed + ' removed');
// }else {
//     console.log(removed + ' not removed');
// }

console.log('=====求两个集合的并集========================================');
var cis = new Set();
cis.add('Mike');
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Raymond');
var dmp = new Set();
dmp.add('Raymond');
dmp.add('Cynthia');
var it = new Set();
it = cis.union(dmp);
console.log(it.show());

console.log('=====求两个集合的交集===================================================');
var inter = cis.intersect(dmp);
console.log(inter.show());

console.log('=====判断一个集合是否是另一个集合的子集=====================================================');
var it = new Set();
it.add('Cynthia');
it.add('Clayton');
it.add('Jennifer');
it.add('Danny');
it.add('Jonathan');
it.add('Terrill');
it.add('Raymond');
it.add('Mike');
var dmp = new Set();
dmp.add('Cynthia');
dmp.add('Raymond');
dmp.add('Jonathan');
if( dmp.subset(it) ){
    console.log('DMP is a subset of IT');
}else {
    console.log('DMP is not a subset of IT');
}

console.log('=====求两个集合的补集=======================================================');
var cis = new Set();
var it = new Set();
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Danny');
it.add('Bryan');
it.add('Clayton');
it.add('Jennifer');
var diff = new Set();
diff = cis.difference(it);
console.log('补集是：', diff.show());