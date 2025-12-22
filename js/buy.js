const form = document.getElementById("buyForm");
const orders = document.getElementById("orders");

let data = JSON.parse(localStorage.getItem("buyOrders")) || [];

render();

form.onsubmit = (e) => {
  e.preventDefault();

  data.push({
    nick: nick.value,
    item: item.value
  });

  localStorage.setItem("buyOrders", JSON.stringify(data));
  form.reset();
  render();
};

function render() {
  orders.innerHTML = "";
  data.forEach(o => {
    orders.innerHTML += `<p><b>${o.nick}</b> хочет купить ${o.item}</p>`;
  });
}
