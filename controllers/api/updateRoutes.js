const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["comment_body", "comment_date", "post_id", "user_id"],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
        {
          model: User,
          attributes: ["id", "name"],
        },
      ],
    });

    const posts = postData.get({ plain: true });

    res.render("update", { posts, logged_in: req.session.logged_in });
    console.log(res);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete posts by post id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post matching this id was found" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        post_title: req.body.post_title,
        post_body: req.body.post_body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;