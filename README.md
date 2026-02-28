# Todo List - Server

Express로 구현한 Todo List 백엔드 API 서버

## 기술 스택

- Node.js
- Express

## 실행 방법

```bash
npm install
npm start
```

http://localhost:4000 에서 실행

## API 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | /api/health | 서버 상태 확인 |
| GET | /api/todos | 할 일 목록 조회 |
| POST | /api/todos | 할 일 추가 |
| PUT | /api/todos/:id | 완료 상태 토글 |
| DELETE | /api/todos/:id | 할 일 삭제 |

## 버전 이력

### v1.1.0
- Todo API 추가 (CRUD)
- todoController.js 추가
- 프론트엔드 연동 완료

### v1.0.0
- 초기 버전
- Express 서버 설정
- CORS 설정 (localhost:3000 허용)
- Health check API
