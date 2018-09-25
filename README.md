# Run length encode and decoder

## Installation

```bash
npm install --save run-length
```

## Example

Works on arrays and is for repeated sequences.

```typescript
import { encode, decode } from 'run-length';

// generate array with repeated sequence as demo
const length = 30;
const arr = Array.from({ length }, (_, i) => (i < length / 2 ? 1 : 0));

console.log(arr);
// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
console.log(encode(arr));
// [ [ 15, 1 ], [ 15, 0 ] ]
console.log(decode(encode(arr)));
// [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
```

## Author

Dugagjin Lashi

## License

MIT
