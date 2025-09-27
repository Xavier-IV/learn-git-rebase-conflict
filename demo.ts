function greet(): string {
  const branch = "updated master";
  return `Hello from ${branch} branch!`;
}

console.log(greet());