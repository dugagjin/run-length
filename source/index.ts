type T = number | string | boolean;

export function encode(input: T[]): [number, T][] {
    if (input.length === 0) {
        throw new Error(`array empty`);
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

export function decode(input: [number, T][]): T[] {
    if (input.length === 0 || input.some(e => !(e.length === 2))) {
        throw new Error(`input not valid.`);
    }
    return input
        .map(e => Array.from<number>({ length: e[0] }).map(() => e[1]))
        .reduce((p, v) => p.concat(v), []);
}
