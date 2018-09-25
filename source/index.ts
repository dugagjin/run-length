const throwTypes = ['object', 'undefined', 'function', 'symbol'];

export function encode<T>(input: T[]): [number, T][] {
    // check if array empty and if element is comparable
    const isInputInvalid =
        input.length === 0 || input.some(e => throwTypes.includes(typeof e));
    if (isInputInvalid) {
        throw new Error(`Input not valid`);
    }
    const encoding: [number, T][] = [];
    let prev = input[0];
    let count = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i] !== prev) {
            encoding.push([count, prev]);
            count = 1;
            prev = input[i];
        } else {
            count++;
        }
    }
    encoding.push([count, prev]);
    return encoding;
}

export function decode<T>(input: [number, T][]): T[] {
    // check if array is empty, sub arrays are length 2
    // and if second element comparable
    const isInputInvalid =
        input.length === 0 ||
        input.some(e => !(e.length === 2) && throwTypes.includes(typeof e[1]));
    if (isInputInvalid) {
        throw new Error(`Input not valid.`);
    }
    return input
        .map(e => Array.from<number>({ length: e[0] }).map(() => e[1]))
        .reduce((p, v) => p.concat(v), []);
}
