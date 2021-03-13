const AppointmentServ = require("./../services/appointment.service");
 
const response = require("./../utils/response");

class AppointmentContoller {

  async create(req, res) {
    console.log("About to create");
    const result = await AppointmentServ.create(req.body);
    res.status(201).send(response("appointment created", result));
  } 

  async getAll(req, res) {
    const result = await AppointmentServ.getAll();
    res.status(200).send(response("All appointment", result));
  }

  async getOne(req, res) {
    const result = await AppointmentServ.getOne(req.params.appointmentId);
    res.status(200).send(response("appointment data", result));
  }

  async update(req, res) {
    const result = await AppointmentServ.update(req.params.appointmentId, req.body);
    res.status(200).send(response("appointment updated", result));
  }
  
  async delete(req, res) {
    const result = await AppointmentServ.delete(req.params.appointmentId);
    res.status(200).send(response("appointment deleted", result));
  }

}

module.exports = new AppointmentContoller();
