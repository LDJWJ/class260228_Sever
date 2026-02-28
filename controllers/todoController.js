let todos = [];
let nextId = 1;

// 전체 조회
exports.getAll = (req, res) => {
  res.json(todos);
};

// 추가
exports.create = (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: '할 일을 입력하세요' });
  }
  const todo = { id: nextId++, text, done: false };
  todos.push(todo);
  res.status(201).json(todo);
};

// 수정 (완료 토글)
exports.update = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: '찾을 수 없습니다' });
  }
  todo.done = !todo.done;
  res.json(todo);
};

// 삭제
exports.remove = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: '찾을 수 없습니다' });
  }
  todos.splice(index, 1);
  res.status(204).send();
};
