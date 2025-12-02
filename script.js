const passBox = document.getElementById("pass-box");
const total = document.getElementById("total-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numric = document.getElementById("number");
const symbol = document.getElementById("symbol");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symb = "~!#$%^&*()-=/|";

const randomData = (data) => {
  return data[Math.floor(Math.random() * data.length)];
};

const generatePass = (password = "") => {
 

  if (uppercase.checked) {
    password += randomData(upper);
  }
  if (lowercase.checked) {
    password += randomData(lower);
  }
  if (numric.checked) {
    password += randomData(number);
  }
  if (symbol.checked) {
    password += randomData(symb);
  }
  if (password.length < total.value) {
    return generatePass(password);
  }

  passBox.value = password;
  console.log(password);
};

generatePass();
document.getElementById("btn").addEventListener("click", function () {
  generatePass();
});

function truncateString(str, num) {
  if (str.length > num) {
    return str.substring(0, num);
  } else {
    return str;
  }
}
