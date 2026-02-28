const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000;

// 미들웨어 - 모든 origin 허용
app.use(cors());
app.use(express.json());

// 라우트
app.use('/api', apiRoutes);

// 에러 핸들러
app.use(errorHandler);

// 서버 시작
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
