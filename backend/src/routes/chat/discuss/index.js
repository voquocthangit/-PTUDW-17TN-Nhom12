const express = require('express');
const router = express.Router();
router.get("/:id", (req, res) => {
    res.render("chat/chat.ejs");
})
module.exports = router;