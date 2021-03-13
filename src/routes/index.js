const router = require("express").Router();

router.use("/auth", require("./auth.route"));
router.use("/users", require("./user.route"));
router.use("/appointment", require("./appointment.route"));
module.exports = router