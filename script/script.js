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

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'H2') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const H2 = document.createElement("H2");
        range.surroundContents(H2);
        selection.removeAllRanges();
      }
    }
  }
}

function boldText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'STRONG') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const strong = document.createElement("strong");
        range.surroundContents(strong);
        selection.removeAllRanges();
      }
    }
  }
}

function italicText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'I') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const italic = document.createElement("i");
        range.surroundContents(italic);
        selection.removeAllRanges();
      }
    }
  }
}

function codeText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'CODE') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const code = document.createElement("code");
        range.surroundContents(code);
        selection.removeAllRanges();
      }
    }
  }
}




function listText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'LI') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const list = document.createElement("li");
        range.surroundContents(list);
        selection.removeAllRanges();
      }
    }
  }
}


function underlineText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'U') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const range = selection.getRangeAt(0);

        const underline = document.createElement("u");
        range.surroundContents(underline);
        selection.removeAllRanges();
      }
    }
  }
}



function spanText() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selectedNode = range.startContainer;

    if (selectedNode.nodeType === Node.TEXT_NODE) {
      const parentSpan = selectedNode.parentNode;

      if (
        parentSpan &&
        parentSpan.tagName === "SPAN" &&
        parentSpan.classList.contains("enfase")
      ) {
        const grandParent = parentSpan.parentNode;

        while (parentSpan.firstChild) {
          grandParent.insertBefore(parentSpan.firstChild, parentSpan);
        }
        grandParent.removeChild(parentSpan);
        selection.removeAllRanges();
      } else {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        const span = document.createElement("span");
        span.className = "enfase";

        range.surroundContents(span);
        selection.removeAllRanges();
      }
    }
  }
}

function LinkText() {
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
      // Obtém o primeiro range da seleção
      const range = selection.getRangeAt(0);
      const selectedNode = range.startContainer;

      // Verifica se o nó selecionado está dentro de uma tag <span>
      if (selectedNode.nodeType === Node.TEXT_NODE) {
          const parentSpan = selectedNode.parentNode;

          // Verifica se o elemento pai é uma tag <span>
          if (parentSpan && parentSpan.tagName === 'A') {
              const grandParent = parentSpan.parentNode;

              // Move os filhos da <span> para o pai da <span> e remove a <span>
              while (parentSpan.firstChild) {
                  grandParent.insertBefore(parentSpan.firstChild, parentSpan);
              }
              grandParent.removeChild(parentSpan);
      } else {
        const linkValor = prompt("Insira o link que deseja salvar");

        const a = document.createElement("a");
        a.href = linkValor;
        a.target = "_blank";
        range.surroundContents(a);
        selection.removeAllRanges();
      }
      
      }
    }
  }


type.addEventListener("click", typeText);
bold.addEventListener("click", boldText);
italic.addEventListener("click", italicText);
code.addEventListener("click", codeText);
list.addEventListener("click", listText);
underline.addEventListener("click", underlineText);
squote.addEventListener("click", spanText);
link.addEventListener("click", LinkText)