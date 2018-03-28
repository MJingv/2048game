const HomePage = `
<!DOCTYPE html>
<html>
<head>
	<title>线上部署静态页面</title>
	<meta charset="utf-8">
</head>
<body >
 <h1>hello wrold form jehol</h1>
</body>
</html>
`;


const http = require('http');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(HomePage);
}).listen(3000, () => {
    console.log(`Server running at 3000/`);
})
;