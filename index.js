const express = require('express')
const app = express()
var server = app.listen(3000, function() { console.log(new Date().toISOString() + ': server listening on port 3000');
});
app.use(express.static('public'))