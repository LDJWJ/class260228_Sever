const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000;

// 허용할 origin 목록
const allowedOrigins = [
  'http://localhost:3000',
  'https://todoappdj-26.netlify.app'
];

// 미들웨어
app.use(cors({
  origin: allowedOrigins
}));
app.use(express.json());

// 라우트
app.use('/api', apiRoutes);

// 에러 핸들러
app.use(errorHandler);

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
