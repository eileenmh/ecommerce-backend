const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({ include: Product })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, { include: [Product] })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/", (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      tag_name: "yellow",
    }
  */
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.status(200).json("Tag successfully updated!"))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then(() => res.send("Tag successfully deleted"))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
