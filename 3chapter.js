// 实现列表类
function List(){
    this.listSize = 0;// 代表的是List长度
    this.pos = 0;//代表的是位置
    this.dataStore = [];
    this.append = append;
}

function append(element){
    console.log('调用前', this);
    this.dataStore[++(this.listSize)] = element;
    console.log('调用后', this);
}

let newList = new List();
newList.append(2);
newList.append(3);
