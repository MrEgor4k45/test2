const translations = {
  ru: {
    title: "Аниме маркетплейс",
    subtitle: "Покупай и продавай легко",
    buy: "КУПИТЬ",
    sell: "ПРОДАТЬ"
  },
  ua: {
    title: "Аніме маркетплейс",
    subtitle: "Купуй та продавай легко",
    buy: "КУПИТИ",
    sell: "ПРОДАТИ"
  },
  en: {
    title: "Anime Marketplace",
    subtitle: "Buy and sell easily",
    buy: "BUY",
    sell: "SELL"
  }
};

document.getElementById("lang")?.addEventListener("change", e => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
});

function checkToken() {
  const token = document.getElementById("token").value;
  if (token === "Admin-gag-shop") {
    alert("Товар добавлен");
  } else {
    alert("Неверный токен");
  }
}
