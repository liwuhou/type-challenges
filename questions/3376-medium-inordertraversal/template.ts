interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> =
  T extends TreeNode
    ? T['val'] extends null
      ? [...InorderTraversal<T['left']>, ...InorderTraversal<T['right']>]
      : [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
    : []
