function removerElemento(el: HTMLElement): void {
  if (el.classList) {
    return;
  }
  el.remove();
}

removerElemento(document.getElementById("teste"));
