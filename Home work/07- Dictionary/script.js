w = document.getElementById("word");
d = document.getElementById("definition");
wTr = document.getElementById("word-tr");
dTr = document.getElementById("definition-tr");
dictionary = {
  hello: "درود",
  goodbye: "بدرود",
  apple: "سیب",
  banana: "موز",
  درود: "hello",
  بدرود: "goodbye",
  سیب: "apple",
  موز: "banana",
};
function add() {
  if (w.value == "" || d.value == "") alert("no word detected!");
  else if (w.value !== "" && d.value !== "") {
    dictionary[w.value.replace(" ", "")] = d.value;
    dictionary[d.value.replace(" ", "")] = w.value;
    alert("Your Dictionary has been updated! ");
  }
}

wTr.addEventListener("input", (e) => {
  dTr.value = dictionary[wTr.value];
});
