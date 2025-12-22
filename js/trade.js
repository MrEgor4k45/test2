const form = document.getElementById("tradeForm");
const orders = document.getElementById("orders");

let data = JSON.parse(localStorage.getItem("tradeOrders")) || [];

render();

form.onsubmit = (e) => {
  e.preventDefault();

  data.push({
    nick: nick.value,
    offer: offer.value,
    want: want.value
  });

  localStorage.setItem("tradeOrders", JSON.stringify(data));
  form.reset();
  render();
};

function render() {
  orders.innerHTML = "";
  data.forEach(o => {
    orders.innerHTML += `<p><b>${o.nick}</b>: ${o.offer} ↔ ${o.want}</p>`;
  });
}
