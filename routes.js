const http = require('http');
const fs = require('fs');
const readWriteFile = (req, res)=> {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Title by my own created node server</title></head');
    res.write('<body>');
    res.write('<h1>Hello from my own node.js server !</h1>')
    res.write('<form action="/message" method="POST"><input type="text" name="messege"><button type="submit">Click Me!</button></form>')
    // res.write('<button type="submit">Click Me!</button>')
    res.write('</body')
    res.write('</html>');
    return res.end();
    }
    if(url==='/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk)=> {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const massage = parseBody.split('=')[1];
            console.log(massage);
            fs.writeFileSync('massage.txt', massage);
            // console.log(parseBody);

        })
        // fs.writeFileSync('massage.txt', 'Hello this is the file sending via node.js server !');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

exports.fileIOc = readWriteFile;