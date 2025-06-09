const express = require('express');
const path = require('path'); // Добавляем модуль для работы с путями
const app = express();
const PORT = 3000;

// Указываем Express использовать папку public для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});