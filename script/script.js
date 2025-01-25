const type = document.getElementById("type");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const code = document.getElementById("code");
const list = document.getElementById("list");
const underline = document.getElementById("underline");
const squote = document.getElementById("squote");
const link = document.getElementById("link");

function typeText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const h2 = document.createElement("h2");

  range.surroundContents(h2);
  d;
  selection.removeAllRanges();
}

function boldText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const strong = document.createElement("strong");

  range.surroundContents(strong);
  selection.removeAllRanges();
}

function italicText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const italic = document.createElement("I");

  range.surroundContents(italic);
  selection.removeAllRanges();
}

function codeText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const code = document.createElement("code");

  range.surroundContents(code);
  selection.removeAllRanges();
}

function listText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const codeUl = document.createElement("ul");
  const codeLi = document.createElement("li");
  const list = codeUl.appendChild(codeLi);
  range.surroundContents(list);
  selection.removeAllRanges();
}

function underlineText() {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const underline = document.createElement("u");

  range.surroundContents(underline);
  selection.removeAllRanges();
}

function spanText() {
  const selection = window.getSelection("");
  const range = selection.getRangeAt(0);

  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }
  const span = document.createElement("href");
  span.className = "enfase";
  range.surroundContents(span);
  selection.removeAllRanges();
}

function LinkText() {
  const selection = window.getSelection("");
  const range = selection.getRangeAt(0);
  if (!range || range.collapsed) {
    alert("Por favor, selecione algum texto.");
    return;
  }

  const linkValor = prompt("Insira o link que deseja salvar");

  const a = document.createElement("a");
  a.href = linkValor;
  a.target = "_blank";
  range.surroundContents(a);
  selection.removeAllRanges();
}

type.addEventListener("click", typeText);
bold.addEventListener("click", boldText);
italic.addEventListener("click", italicText);
code.addEventListener("click", codeText);
list.addEventListener("click", listText);
underline.addEventListener("click", underlineText);
squote.addEventListener("click", spanText);

link.addEventListener("click", LinkText)
