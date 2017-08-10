import express from 'express';

const router = express.Router();

/* 
    POST /api/user/setdata
*/
router.post('/setdata', (req, res) => {
    const result = {
        username: req.body.username,
        age: req.body.age
    };

    return res.json({ success: true, data: result });
});
/* 
	POST /api/user/collect
*/
router.post('/collect', (req, res) => {
	
	 // CHECK CONTENTS VALID
    if(typeof req.body.username !== 'string') {
        return res.status(400).json({
            error: "EMPTY CONTENTS",
            code: 2
        });
    }

    const result = {
        username: req.body.username,
        age: req.body.age,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender
    };

    return res.json({ success: true, data: result });
});

export default router;