const texts = {
  ru: {
    title: "Аниме маркетплейс",
    subtitle: "Покупай и продавай легко"
  },
  ua: {
    title: "Аніме маркетплейс",
    subtitle: "Купуй та продавай легко"
  },
  en: {
    title: "Anime Marketplace",
    subtitle: "Buy and sell easily"
  }
};

document.getElementById("lang")?.addEventListener("change", (e) => {
  const t = texts[e.target.value];
  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
});

function checkToken() {
  const token = document.getElementById("token").value;
  if (token === "Admin-gag-shop") {
    alert("Товар добавлен");
  } else {
    alert("Неверный токен");
  }
}
