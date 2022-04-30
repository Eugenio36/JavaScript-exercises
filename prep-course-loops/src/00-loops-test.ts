export {};

function count(str: string) {
  let obj = {};

  str
  .split(" ").forEach(function(element, index) {
    obj[element] = obj[element] ? ++obj[element] : 1;
  });
  
  return obj;
}

console.log(count("olly olly in come free"))
