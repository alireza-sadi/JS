function changeColor(a) {
  r = document.getElementById("red-light");
  y = document.getElementById("yellow-light");
  g = document.getElementById("green-light");
  
  if (a.classList.contains("red")) {
    a.classList.toggle("red-bright");
    if (
      y.classList.contains("yellow-bright") ||
      g.classList.contains("green-bright")
    ) {
      y.classList.remove("yellow-bright");
      g.classList.remove("green-bright");
    }
  } else if (a.classList.contains("yellow")) {
    a.classList.toggle("yellow-bright");
    if (
      r.classList.contains("red-bright") ||
      g.classList.contains("green-bright")
    ) {
      r.classList.remove("red-bright");
      g.classList.remove("green-bright");
    }
  } else if (a.classList.contains("green")) {
    a.classList.toggle("green-bright");
    if (
      r.classList.contains("red-bright") ||
      y.classList.contains("yellow-bright")
    ) {
      r.classList.remove("red-bright");
      y.classList.remove("yellow-bright");
    }
  }
}

function changeAll() {
  if (
    r.classList.contains("red-bright") ||
    y.classList.contains("yellow-bright") ||
    g.classList.contains("green-bright")
  ) {
    r.classList.remove("red-bright");
    y.classList.remove("yellow-bright");
    g.classList.remove("green-bright");
  } else {
    r.classList.add("red-bright");
    y.classList.add("yellow-bright");
    g.classList.add("green-bright");
  }
}
