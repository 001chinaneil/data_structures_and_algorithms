// 第十章 二叉树和二叉查找树
// BST类 和 Node类
function Node(data,left,right){
    this.data = data;// 节点数据
    this.left = left;
    this.right = right;
    this.show = show;
}

function show(){
    return this.data;
}

function BST(){
    this.root = null;
    this.insert = insert;// 插入节点
    this.inOrder = inOrder;// 中序排列：以升序访问所有节点
    this.preOrder = preOrder;
    this.postOrder = postOrder;
}

function insert(data){
    var n = new Node(data,null,null);
    if( this.root == null ){// 如果没有根节点，则把插入数据赋值给根节点
        this.root = n;
    }else {
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if( data < current.data ){// 在左子树里面进行遍历
                current = current.left;
                if( current == null ){// 如果左子树空着的话，把插入数据赋值给左子树节点
                    parent.left = n;
                    break;// 跳出去
                }
            }else {
                current = current.right;
                if( current == null ){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序遍历：以升序访问所有节点
function inOrder(node){
    if( !(node == null) ){
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}

// 先序遍历：先访问根节点，然后以同样的方式访问左子树和右子树
function preOrder(node){
    if( !(node == null) ){
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后序遍历：先访问叶子节点，从左子树到右子树，再到根节点
function postOrder(node){
    if( !(node == null) ){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}

console.log('=====测试中序遍历============================');
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('Inorder traversal: ');
inOrder(nums.root);

console.log('=====测试先序遍历=====================');
console.log('Preorder traversal: ');
preOrder(nums.root);

console.log('=====测试后序遍历================================');
console.log('Postorder traversal');
postOrder(nums.root);