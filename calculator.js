let display = document.querySelector('.display');
document.querySelector('.clear').addEventListener('click', () => {
  display.value = "";
});
document.querySelector('.delete').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});
document.querySelector('.equal').addEventListener('click', () => {
  display.value = eval(display.value);
});