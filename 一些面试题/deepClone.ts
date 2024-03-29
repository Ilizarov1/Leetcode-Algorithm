function deepClone(obj: any, depth = Infinity, objstack: WeakSet<any>) {
    function getKeyVals(obj: any) {
        // 获取包括symbol在内的所以 k-v值
        return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].map((k) => [k, obj[k]]);
    }

    if (depth <= 0 || objstack.has(obj)) {
        // 防止循环引用
        return null;
    }

    if (obj instanceof Date) {
        // 处理时间
        return new Date(obj);
    }

    if (Array.isArray(obj)) {
        // 处理数组
        return obj.map((o) =>
            typeof o === 'object' ? deepClone(o, depth - 1, objstack.add(o)) : o
        );
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    // 快速浅拷贝
    const copy = Object.assign({}, obj);

    getKeyVals(copy).forEach(([key, val]) => {
        // 如果需要深拷贝
        if (typeof val === 'object' && val !== null) {
            copy[key] = deepClone(val, depth - 1, objstack.add(val));
        }
    });

    return copy;
}
