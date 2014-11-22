var result = process.argv
    .slice(2)
    .reduce(function(acc, arg) {
      return acc + Number(arg);
    }, 0);

console.log(result);