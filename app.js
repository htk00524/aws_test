const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일(css 등) 서빙
app.use(express.static(path.join(__dirname, 'public')));

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 백업 페이지
app.get('/backup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'backup.html'));
});

// 복구 페이지
app.get('/restore', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'restore.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
