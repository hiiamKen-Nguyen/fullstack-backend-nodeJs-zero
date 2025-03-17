// Import thư viện Express
const express = require('express');
const path = require('path');
require('dotenv').config();

// Khởi tạo ứng dụng Express
const app = express();

// Định nghĩa cổng
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// Cấu hình EJS làm template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Dòng này cho phép truy cập file tĩnh ở thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Tạo route mặc định
app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs');
});

// Lắng nghe trên cổng đã định nghĩa
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});












