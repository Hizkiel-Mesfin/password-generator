// Selecting Elements
const password = document.querySelector(".password");
const length = document.querySelector(".length");
const check = document.querySelector(".check");
const btn = document.querySelector(".btn");

const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";

const paswordGenerator = (length, mixedCases) => {
  let password = "";

  for (let i = 1; i <= length; i++) {
    const rand = Math.floor(Math.random() * charset.length);

    if (mixedCases) {
      password +=
        i % 3 === 0 ? charset[rand].toUpperCase() : charset[rand].toLowerCase();
    } else {
      password += charset[rand];
    }
  }

  return password;
};

// When reload
window.addEventListener("load", () => {
  password.innerText = `${paswordGenerator(20, check.checked)}`;
});

// At the click of a button
btn.addEventListener("click", () => {
  password.innerText = `${paswordGenerator(length.value, check.checked)}`;
});
