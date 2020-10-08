const bodyStyles = document.body.style;
const turnBlueBtn = document.getElementById('turnBlue');
const cancelBlueBtn = document.getElementById('cancelBlue');
var timeoutRef; // !??!

const changeBgColor = (color) => {
  bodyStyles.backgroundColor = color;
};

// * your callback can be an arrow function
setTimeout(() => {
  bodyStyles.backgroundColor = 'red';
}, 1000);

// *  your callback can be regular function
setTimeout(function () {
  bodyStyles.backgroundColor = 'yellow';
}, 2000);

// * or your callback can be a reference to an existing function
// additional arguments after the first two are threaded through to the callback
setTimeout(changeBgColor, 3000, 'green');

// * let's ponder the two blocks of code below...
turnBlueBtn.addEventListener('click', () => {
  timeoutRef = setTimeout(() => {
    bodyStyles.backgroundColor = 'blue';
  }, 3000);
});

cancelBlueBtn.addEventListener('click', () => {
  clearTimeout(timeoutRef);
});

// * because setTimeouts are asychronous, this means that code below/after them will not be blocked
document.body.firstElementChild.children[0].textContent = 'H1 After';
