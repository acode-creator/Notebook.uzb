const laptops = [
  {
    model: "ASUS TUF Gaming F15",
    matrix: "IPS 15.6 FHD",
    gpu: "Nvidia GTX1650",
    cpu: "Intel Core i3/i5",
    storage: "512 ГБ SSD",
    value: "9 000 000 - 11 000 000 UZS",
  },
  {
    model: "HP 255 G8/G9",
    matrix: "TN 15.6 FHD",
    gpu: "AMD Radeon 3/5",
    cpu: "AMD Ryzen 3/5",
    storage: "512 ГБ SSD",
    value: "6 000 000 - 7 500 000 UZS",
  },
  {
    model: "Acer Aspire 3",
    matrix: "IPS 15.6 FHD",
    gpu: "Intel",
    cpu: "Intel Core i3/i5",
    storage: "512 ГБ SSD",
    value: "4 000 000 - 6 000 000 UZS",
  }
];

// Подсветка выбранных кнопок
document.querySelectorAll('.option').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.group;
    if (group) {
      // убираем старый выбор из этой группы
      document.querySelectorAll(`.option[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    }
  });
});

// Функция при нажатии "Готово"
function showLaptop() {
  const selected = {};
  document.querySelectorAll('.option.selected').forEach(btn => {
    const group = btn.dataset.group;
    const value = btn.dataset.value;
    if (group) {
      selected[group] = value;
    }
  });

  // Поиск ноутбука, который соответствует всем выбранным критериям
  const found = laptops.find(laptop =>
    laptop.matrix === selected.matrix &&
    laptop.gpu === selected.gpu &&
    laptop.cpu === selected.cpu &&
    laptop.storage === selected.storage
  );

  const resultDiv = document.getElementById('result');
  if (found) {
    resultDiv.innerHTML = `
      ✅ Подходящий ноутбук:<br><br>
      <strong>${found.model}</strong><br>
      Матрица: ${found.matrix}<br>
      GPU: ${found.gpu}<br>
      CPU: ${found.cpu}<br>
      SSD: ${found.storage}<br>
      💰 Цена: <strong>${found.value}</strong><br><br>

      <a href="Collector.html">
        <button class="option">Купить</button>
      </a>
    `;
  } else {
    resultDiv.innerHTML = "❌ Нет подходящего ноутбука.";
  }

  resultDiv.style.display = "block";
                                             }
