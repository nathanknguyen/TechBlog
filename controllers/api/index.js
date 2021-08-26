const router = require('express').Router();
const commentRoutes = require('../api/commentRoutes');
const userRoutes = require('../api/userRoutes');
const postRoutes = require('../api/postRoutes');


router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;