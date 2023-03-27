let titulo = document.createElement("h1");
let subTitulo = document.createElement("h5");
let formInput = document.createElement("input");
let boton = document.createElement("button");

titulo.innerHTML = "Título de script";
subTitulo.innerHTML = "Subtítulo del script";
formInput.type = "text";
formInput.setAttribute("placeholder", "escriba algo");
boton.innerHTML = "Click";

boton.addEventListener("click", () => {
  let nuevoElemento = document.createElement("p");
  nuevoElemento.innerHTML = formInput.value;
  document.body.append(nuevoElemento);
});

document.body.append(titulo);
document.body.append(subTitulo);
document.body.append(formInput);
document.body.append(boton);
