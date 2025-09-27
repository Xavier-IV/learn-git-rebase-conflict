function greet(): string {
  const branch = "master";
  return `Hello from ${branch} branch!`;
}

console.log(greet());