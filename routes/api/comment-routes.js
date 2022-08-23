const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');

// prettier-ignore
router.route('/:pizzaId')
  .post(addComment)

// prettier-ignore
router.route('/:pizzaId/:commentId')
  .delete(removeComment)

module.exports = router;
