const Appointment = require("./../models/appointment.model");
const CustomError = require("./../utils/custom-error");

class AppointmentService {

  async create(data) {
    return await new Appointment(data).save();
  }

  async getAll() {
    return await Appointment.find({});
  }

  async getOne(appointmentId) {
    const appointment = await Appointment.findOne({ _id: appointmentId });
    if (!appointment) throw new CustomError("Appointment does not exists");

    return appointment
  }

  async update(appointmentId, data) {
    const appointment = await Appointment.findByIdAndUpdate(
    { _id: appointmentId },
    { $set: data },
    { new: true }
    );

    if (!appointment) throw new CustomError("Appointment dosen't exist", 404);

    return appointment;
  }

  async delete(appointmentId) {
    const appointment = await Appointment.findOne({ _id: appointmentId });
    appointment.remove()
    return appointment
  }

}

module.exports = new AppointmentService();