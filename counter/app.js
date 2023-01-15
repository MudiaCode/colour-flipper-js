count = 0;

document.getElementById("increase").onclick = () => {
  count += 1;
  document.getElementById("number").innerHTML = count;
};
document.getElementById("reset").onclick = () => {
  count = 0;
  document.getElementById("number").innerHTML = count;
};
document.getElementById("decrease").onclick = () => {
  count -= 1;
  document.getElementById("number").innerHTML = count;
};
