let sum = 0;
for (let i = 2; i < process.argv.length; i += 1) {
  const num = Number(process.argv[i]);
  sum += num;
}
console.log(sum);
