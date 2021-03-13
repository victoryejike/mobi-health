const router = require("express").Router();
const AppointmentCtrl = require("./../controllers/appointment.controller");

router.post("/", AppointmentCtrl.create);
router.get("/", AppointmentCtrl.getAll);
router.get("/:appointmentId" ,AppointmentCtrl.getOne);
router.put("/:appointmentId" ,AppointmentCtrl.update);
router.delete("/:appointmentId" ,AppointmentCtrl.delete);


module.exports = router