export let a = 10;
export let array = [1, 2, 3];
function product() {
  for (let i = 0; i < array.length; i++) {
    array[i] *= a;
  }
  return array;
}
// Alternatively .. you can type :
export { product as myFunction };
export default (name) => `Hello ${name}`;
