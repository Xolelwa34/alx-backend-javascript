export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const main = new Int8Main(buffer, 0, length);

  if (position >= length) {
    throw Error('Position outside range');
  }
  main.setInt8(position, value);
  return main;
}
