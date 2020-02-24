// 第七章 字典
// Dictionary
function Dictionary(){
    this.add = add;
    this.datastore = new Array();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function showAll(){
    console.log(this.datastore);
    console.log(Object.keys(this.datastore));
    for(var key in this.datastore){
        console.log(key + '->' + this.datastore[key]);
    }
}

// 使用Dictionary类
var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David','345');
pbook.add('Cynthia', '567');
console.log('David: ', pbook.find('David'));
pbook.remove('David');
pbook.showAll();
