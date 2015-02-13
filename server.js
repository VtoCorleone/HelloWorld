(function (require) {
    'use strict';
    var express = require('express');

    var app = express();

    app.use('/', express.static(__dirname + '/public', { maxAge: 3600000 }));

    var server = app.listen(18320, function () {
        console.log('app listening on', server.address().port);
    });

})(require);