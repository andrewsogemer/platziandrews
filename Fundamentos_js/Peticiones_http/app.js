const url = "https://jsonplaceholder.typicode.com/posts/1"; // API de prueba

function mostrarResultado(data) {
  document.getElementById("resultado").textContent = JSON.stringify(data, null, 2);
}

function hacerGet() {
  fetch(url)
    .then(res => res.json())
    .then(data => mostrarResultado(data))
    .catch(err => mostrarResultado({ error: err.message }));
}

function hacerPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 })
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data))
    .catch(err => mostrarResultado({ error: err.message }));
}

function hacerPut() {
  fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: 1, title: "nuevo título", body: "nuevo cuerpo", userId: 1 })
  })
    .then(res => res.json())
    .then(data => mostrarResultado(data))
    .catch(err => mostrarResultado({ error: err.message }));
}

function hacerDelete() {
  fetch(url, { method: "DELETE" })
    .then(res => mostrarResultado({ status: res.status, message: "Eliminado (simulado)" }))
    .catch(err => mostrarResultado({ error: err.message }));
}

let arr = [1, 2, 3]; for (let item of arr) { console.log(item); }

let nume1 = 5;
let nume2 = "5"
let resul = nume1 + nume2;
console.log(resul);

