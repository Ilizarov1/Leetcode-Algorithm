# https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        pre = None
        cur = head
        while cur:
            tmp = cur
            cur = cur.next
            tmp.next = pre
            pre = tmp
        return pre
