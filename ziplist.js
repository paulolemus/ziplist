const list1 = [0, 2, 4, 6, 8];
const list2 = [1, 3, 5, 7, 9];

function zipList(left, right) {
  let newlist = [];

  for(let i = 0; i < left.length; ++i) {
    newlist.push(left[i]);
    newlist.push(right[i]);
  }
  return newlist;
}

function zipListTheSimpleWay(left, right) {
  return _.flatten(_.zip(left, right));
}

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
