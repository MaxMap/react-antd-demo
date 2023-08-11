/**
 * 扁平数组
 * @param root 数组
 * @returns 数组
 */
export const flattenTree = <T,>(root: T[]): T[] => {
    const result: T[] = [];
    const stack: T[] = root;

    while (stack.length > 0) {
        const node: any = stack.pop();
        result.push(node);
        const children = node.children;
        if (children && children.length > 0) {
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(children[i]);
            }
        }

    }

    return result;
}