const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
const config = require('./vercel.json');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.mp4':'video/mp4','.webm':'video/webm','.txt':'text/plain'};
http.createServer((req,res) => {
 const url = new URL(req.url,'http://localhost');
 const pathname = decodeURIComponent(url.pathname);
 let file = path.resolve(root, '.' + pathname);
 if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403); return res.end(); }
 if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file,'index.html');
 if (!path.extname(file) && fs.existsSync(file + '.html')) file += '.html';
 if (!fs.existsSync(file)) {
  const rule = config.rewrites?.find(r => new RegExp('^' + r.source.replace(':id','[^/]+') + '/?$').test(pathname));
  if (rule) file = path.join(root,rule.destination);
 }
 fs.readFile(file,(err,data) => {
  if(err) { res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}); return res.end('<h1>Página não encontrada</h1><a href="/">Voltar à Karrun</a>'); }
  res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'}); res.end(data);
 });
}).listen(4173,'127.0.0.1',()=>console.log('http://127.0.0.1:4173/lset'));
