const form = document.getElementById("sellForm");
const orders = document.getElementById("orders");

let data = JSON.parse(localStorage.getItem("sellOrders")) || [];

render();

form.onsubmit = (e) => {
  e.preventDefault();

  data.push({
    nick: nick.value,
    item: item.value
  });

  localStorage.setItem("sellOrders", JSON.stringify(data));
  form.reset();
  render();
};

function render() {
  orders.innerHTML = "";
  data.forEach(o => {
    orders.innerHTML += `<p><b>${o.nick}</b> продаёт ${o.item}</p>`;
  });
}
