// import _ from 'lodash';

const express = require('express');
const path = require('path');

const staticPath = path.join(process.cwd(), '/');
// console.log("staticPath:", staticPath)

const app = express();
const port = process.env.PORT || 8080;

app.use('/images', express.static(staticPath + 'src/public/images/'));
app.use('/css', express.static(staticPath + 'src/public/css/'));
app.use('/scss', express.static(staticPath + 'src/public/scss/'));
app.use('/plugins', express.static(staticPath + 'src/public/plugins/'));
app.use('/js', express.static(staticPath + 'src/public/js/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/:pageCalled', function(req, res) {
    // console.log('retrieving page: ' + req.params.pageCalled);
    res.sendFile(path.join(__dirname, `/public/${req.params.pageCalled}`));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);