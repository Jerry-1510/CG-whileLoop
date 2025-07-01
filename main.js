let num = +prompt("Enter a number: ");
let total = 0;
while (num != -1) {
  total += num;
  num = +prompt("Enter a number: ");
}
alert(total);
