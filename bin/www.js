let app = require('../app');

let port = process.env.PORT || 3001;

app.listen(port,() => {
  console.log(`${port} 로 express 실행`);
})