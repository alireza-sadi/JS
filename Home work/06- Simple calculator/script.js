flag = false;

function add(el) {
  if (
    flag &&
    el.innerText != "+" &&
    el.innerText != "*" &&
    el.innerText != "-" &&
    el.innerText != "/" &&
    el.innerText != "."
  ) {
 document.getElementById("monitor").innerText =""
  }
  if (flag) {
    flag = false;
  }
  document.getElementById("monitor").innerText =
    document.getElementById("monitor").innerText + el.innerText;
}
function sum() {
  document.getElementById("monitor").innerText = eval(
    document.getElementById("monitor").innerText
  );
  flag = true;
}

function clearall() {
  document.getElementById("monitor").innerText = "";
}
function backspace() {
  document.getElementById("monitor").innerText = document
    .getElementById("monitor")
    .innerText.substring(
      0,
      document.getElementById("monitor").innerText.length - 1
    );
}
