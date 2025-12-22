const ADMIN = "Admin-gag-shop";
const form = document.getElementById("tradeForm");
const ordersDiv = document.getElementById("orders");
const adminInput = document.getElementById("adminToken");

let orders = JSON.parse(localStorage.getItem("trade")) || [];

function save() {
  localStorage.setItem("trade", JSON.stringify(orders));
}

function render() {
  ordersDiv.innerHTML = "";
  orders.forEach((o, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<b>${o.nick}</b><br>${o.offer} ➜ ${o.want}`;

    if (adminInput.value === ADMIN) {
      const del = document.createElement("button");
      del.textContent = "❌ Удалить";
      del.style.background = "#dc2626";
      del.onclick = () => {
        orders.splice(i, 1);
        save();
        render();
      };
      card.appendChild(del);
    }

    ordersDiv.appendChild(card);
  });
}

form.onsubmit = e => {
  e.preventDefault();
  orders.push({
    nick: nick.value,
    offer: offer.value,
    want: want.value
  });
  save();
  render();
  form.reset();
};

adminInput.oninput = render;
render();
