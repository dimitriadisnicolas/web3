const router = require("express").Router();
const Children = require("../models/children");

// Find all
router.get("/", (req, res, next) => {
  Children.find({})
    .then((children) => res.json(children))
    .catch((err) => next(err));
});

// Find by ID
router.get("/:id", (req, res, next) => {
  Children.findById(req.params.id)
    .then((child) => {
      if (child) {
        res.json(child);
      } else {
        throw new NotFoundError();
      }
    })
    .catch((err) => next(err));
});

// Delete one
router.delete("/:id", (req, res, next) => {
  Children.findByIdAndRemove(req.params.id)
    .then((child) => {
      if (child) {
        res.json(child);
      } else {
        throw new NotFoundError();
      }
    })
    .catch((err) => next(err));
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body;
  // Check body
  const errorMessages = [];
  if (!body.name) errorMessages.push("name must be present");
  if (!body.name.length < 3)
    errorMessages.push("name must be minimum 3 characters");
  if (!body.birthDate) errorMessages.push("birthdate must be present");
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages });
    return;
  }
  // Check existing
  Children.find({ name: body.name })
    .then((child) => {
      if (child && child.length > 0) {
        errorMessages.push("name of the child must be unique");
        res.status(422).json({ errorMessages });
      } else {
        // Insert
        const child = new Children(body);
        child
          .save()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => next(err));
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
