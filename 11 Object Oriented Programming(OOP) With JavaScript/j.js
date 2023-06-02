var addTwoNumbers = function (l1, l2) {
  let add = `${
    Number(l1.reverse().join().replaceAll(',', '')) +
    Number(l2.reverse().join().replaceAll(',', ''))
  }`;
  let rev = add
    .split('')
    .reverse()
    .map((n) => Number(n));
  return rev;
};
