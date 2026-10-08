// 低代码实践 · 练习一：HelloWorld 网站（Node.js，无数据库）
// 使用 Node.js 内置 http 模块，无需安装任何第三方依赖
const http = require('http');

// Vercel 部署时会注入 PORT 环境变量；本地运行时默认 3000
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // 获取当前服务器时间（北京时间），每次刷新页面都会更新
  const now = new Date();
  const serverTime = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    body {
      font-family: 'Microsoft YaHei', 'PingFang SC', Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #f0f4f8, #e3ecf7);
    }
    .card {
      text-align: center;
      background: #ffffff;
      padding: 48px 60px;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(31, 111, 235, 0.12);
    }
    h1 {
      color: #1f6feb;
      margin: 0 0 12px 0;
      font-size: 28px;
    }
    p {
      color: #555555;
      font-size: 16px;
      line-height: 1.8;
      margin: 6px 0;
    }
    .time {
      margin-top: 16px;
      color: #1f6feb;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！我是【你的名字】</h1>
    <p>我的第一个AI开发的网站</p>
    <p class="time">当前服务器时间：${serverTime}</p>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log('服务器已启动，浏览器访问：http://localhost:' + PORT);
});
