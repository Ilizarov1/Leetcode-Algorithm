var findRepeatNumber = function (nums) {
    var cnt = new Array(nums.length);
    for (var i = 0; i < nums.length; i++) {
        cnt[i] = 0;
    }
    nums.forEach(function (item, index, array) {
        cnt[item]++;
    })
    for (var i = 0; i < nums.length; i++) {
        if (cnt[i] > 1) return i;
    }
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 剑指 Offer 04. 二维数组中的查找
 */
function findNumberIn2DArray(matrix, target) {
    for (var i = 0; i < matrix.length; i++) {
        if (target < matrix[i][0]) {
            i--;
            break;
        }
    }
    if (i == matrix.length) i = matrix.length - 1;
    for (var j = i; j >= 0; j--) {
        var low = 0, high = matrix[j].length - 1;
        var mid = parseInt((low + high) / 2);
        while (high >= low) {
            if (matrix[j][mid] == target) return true;
            else if (matrix[j][mid] > target) high = mid - 1;
            else low = mid + 1;

            mid = parseInt((low + high) / 2);
        }
    }
    return false;
};
/**
 * @param {string} s
 * @return {string}
 * 剑指 Offer 05. 替换空格
 */

function replaceSpace(s) {
    s = s.replace(/\s/g, "%20");
    return s;
}



function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
function reversePrint(head) {
    var arr = [];
    while (head != null) {
        arr[arr.length] = head.val;
        head = head.next;
    }
    return arr.reverse();
};



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 剑指 Offer 07. 重建二叉树
 */
function buildTree(preorder, inorder) {
    var tnode = null;
    if (preorder.length != 0) {
        tnode = new TreeNode(preorder[0]);
        var i = inorder.indexOf(preorder[0]);
        if (inorder.length > 1) {//存在子树
            if (i == 0) {
                //仅存在右子树
                var rightpre = preorder.slice(1);
                var rightin = inorder.slice(1);
                tnode.right = buildTree(rightpre, rightin);
            }
            else if (i == inorder.length - 1) {
                //仅存在左子树
                var leftpre = preorder.slice(1);
                var leftin = inorder.slice(0, i);
                tnode.left = buildTree(leftpre, leftin);
            } else {
                //均存在
                var leftin = inorder.slice(0, i);
                var rightin = inorder.slice(i + 1);
                var leftInLen = leftin.length;
                var leftpre = preorder.slice(1, 1 + leftInLen);
                var rightpre = preorder.slice(1 + leftInLen);
                tnode.left = buildTree(leftpre, leftin);
                tnode.right = buildTree(rightpre, rightin);
            }
        }

    }
    return tnode;
};

function buildTree2(preorder, inorder) {
    var tnode = null;
    if (preorder.length != 0) {
        tnode = build(0, preorder.length - 1, 0, inorder.length - 1);
    }
    function build(low1, high1,low2,high2) {
        var node = null;
        if (high1>=low1&& high2>=low2 && high2 < inorder.length) {
            node = new TreeNode(preorder[low1]);
            var index = inorder.indexOf(preorder[low1]);
            var leftlength = index - low2;//左子树结点数
            var rightlength = high2 - index;//右子树节点数
            node.left = build(low1 + 1, low1 + leftlength, low2, index - 1);
            node.right = build(low1 + leftlength + 1, high1, index + 1, high2);
        }
        return node;
    }
    return tnode;
}
console.log(buildTree2([1, 2], [1, 2]));