const ADMIN = "Admin-gag-shop";
const form = document.getElementById("sellForm");
const ordersDiv = document.getElementById("orders");
const adminInput = document.getElementById("adminToken");

let orders = JSON.parse(localStorage.getItem("sell")) || [];

function save() {
  localStorage.setItem("sell", JSON.stringify(orders));
}

function render() {
  ordersDiv.innerHTML = "";
  orders.forEach((o, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<b>${o.nick}</b><br>Продаёт: ${o.item}`;

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
    item: item.value
  });
  save();
  render();
  form.reset();
};

adminInput.oninput = render;
render();
