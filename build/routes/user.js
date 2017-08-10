'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* 
    POST /api/user/setdata
*/
router.post('/setdata', function (req, res) {
    var result = {
        username: req.body.username,
        age: req.body.age
    };

    return res.json({ success: true, data: result });
});
/* 
	POST /api/user/collect
*/
router.post('/collect', function (req, res) {

    // CHECK CONTENTS VALID
    if (typeof req.body.username !== 'string') {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }

    var result = {
        username: req.body.username,
        age: req.body.age,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender
    };

    return res.json({ success: true, data: result });
});

exports.default = router;