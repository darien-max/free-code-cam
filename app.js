// Tasas de conversión (simuladas)
const rates = {
  USD: 1,
  EUR: 0.95,
  GBP: 0.82,
  JPY: 149.3,
  CNY: 7.1,
  CAD: 1.35,
  AUD: 1.45,
  CHF: 0.92,
  MXN: 18.5,
  BRL: 5.2,
  KRW: 1400,
  INR: 83.0,
  RUB: 98.2,
  ARS: 308.0,
  CLP: 820.0,
  COP: 4120,
  SEK: 11.2,
  NOK: 10.6,
  ZAR: 18.3,
  TRY: 36.0
};

// Banderas y nombres
const info = {
  USD: "🇺🇸 Dólar",
  EUR: "🇪🇺 Euro",
  GBP: "🇬🇧 Libra",
  JPY: "🇯🇵 Yen",
  CNY: "🇨🇳 Yuan",
  CAD: "🇨🇦 Dólar canadiense",
  AUD: "🇦🇺 Dólar australiano",
  CHF: "🇨🇭 Franco suizo",
  MXN: "🇲🇽 Peso mexicano",
  BRL: "🇧🇷 Real",
  KRW: "🇰🇷 Won",
  INR: "🇮🇳 Rupia",
  RUB: "🇷🇺 Rublo",
  ARS: "🇦🇷 Peso argentino",
  CLP: "🇨🇱 Peso chileno",
  COP: "🇨🇴 Peso colombiano",
  SEK: "🇸🇪 Corona sueca",
  NOK: "🇳🇴 Corona noruega",
  ZAR: "🇿🇦 Rand",
  TRY: "🇹🇷 Lira turca"
};

const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const btn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const year = document.getElementById("year");

// Rellenar opciones
for (let code in rates) {
  const option1 = document.createElement("option");
  option1.value = code;
  option1.textContent = `${info[code] || code}`;
  from.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = code;
  option2.textContent = `${info[code] || code}`;
  to.appendChild(option2);
}

// Valores por defecto
from.value = "USD";
to.value = "COP";

btn.addEventListener("click", () => {
  const val = parseFloat(amount.value);
  if (isNaN(val) || val <= 0) {
    resultDiv.textContent = "❌ Ingresa un monto válido.";
    return;
  }

  const rateFrom = rates[from.value];
  const rateTo = rates[to.value];
  const res = (val / rateFrom) * rateTo;

  resultDiv.textContent = `${val.toFixed(2)} ${from.value} = ${res.toFixed(
    2
  )} ${to.value}`;
});

swapBtn.addEventListener("click", () => {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
});

year.textContent = new Date().getFullYear();
