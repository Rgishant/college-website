/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  if (e.record.get("status") === "Confirmed") {
    const appointmentDate = e.record.get("date");
    const appointmentTime = e.record.get("time");
    const firstName = e.record.get("firstName");
    const lastName = e.record.get("lastName");
    const email = e.record.get("email");
    
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress,
        name: "Kaka Saheb Chavan College"
      },
      to: [{ address: email }],
      subject: "Appointment Confirmation - Kaka Saheb Chavan College",
      html: "<h2>Appointment Confirmation</h2>" +
            "<p>Dear " + firstName + " " + lastName + ",</p>" +
            "<p>Your appointment has been confirmed with the following details:</p>" +
            "<ul>" +
            "<li><strong>Date:</strong> " + appointmentDate + "</li>" +
            "<li><strong>Time:</strong> " + appointmentTime + "</li>" +
            "</ul>" +
            "<p><strong>College Contact Details:</strong></p>" +
            "<p>Kaka Saheb Chavan College<br>" +
            "Phone: +91-XXXXXXXXXX<br>" +
            "Email: admissions@kakasahebchavan.edu</p>" +
            "<p>If you need to reschedule or cancel, please contact us at least 24 hours in advance.</p>" +
            "<p>Best regards,<br>Kaka Saheb Chavan College</p>"
    });
    $app.newMailClient().send(message);
  }
  e.next();
}, "appointments");
