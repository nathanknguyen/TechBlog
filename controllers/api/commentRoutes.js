const router = require("express").Router();
const { eq } = require("sequelize/types/lib/operators");
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {id: req.params.id}
        })
        if (!commentData) {
            res.status(404).json({message: "No comment found with the id"});
            return;
        }
        res.status(200).json("");
    } catch (error) {res.status(500).json(error)}
})

module.exports = router;