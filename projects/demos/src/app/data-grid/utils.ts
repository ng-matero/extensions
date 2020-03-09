export function serialize(obj = {}) {
    const arr = [];
    for (const k of Object.keys(obj)) {
        arr.push(
            `${k}=${encodeURIComponent(
                typeof obj[k] === 'string'
                    ? String.prototype.trim.call(obj[k])
                    : obj[k] === null
                        ? ''
                        : obj[k]
            )}`
        );
    }
    return arr.join('&');
}
