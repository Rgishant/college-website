/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const appointmentDate = e.record.get("date");
  const appointmentTime = e.record.get("time");
  const firstName = e.record.get("firstName");
  const lastName = e.record.get("lastName");
  const email = e.record.get("email");
  const status = e.record.get("status");
  
  if (status === "Confirmed" && appointmentDate && appointmentTime) {
    const apptDateTime = new Date(appointmentDate + "T" + appointmentTime);
    const now = new Date();
    const timeDiff = apptDateTime.getTime() - now.getTime();
    const hoursUntilAppt = timeDiff / (1000 * 60 * 60);
    
    if (hoursUntilAppt > 23 && hoursUntilAppt < 25) {
      const message = new MailerMessage({
        from: {
          address: $app.settings().meta.senderAddress,
          name: "Kaka Saheb Chavan College"
        },
        to: [{ address: email }],
        subject: "Appointment Reminder - Kaka Saheb Chavan College",
        html: "<h2>Appointment Reminder</h2>" +
              "<p>Dear " + firstName + " " + lastName + ",</p>" +
              "<p>This is a reminder about your upcoming appointment:</p>" +
              "<ul>" +
              "<li><strong>Date:</strong> " + appointmentDate + "</li>" +
              "<li><strong>Time:</strong> " + appointmentTime + "</li>" +
              "</ul>" +
              "<p>Please arrive 10 minutes early. If you need to reschedule, please contact us as soon as possible.</p>" +
              "<p>Contact: admissions@kakasahebchavan.edu</p>" +
              "<p>Best regards,<br>Kaka Saheb Chavan College</p>"
      });
      $app.newMailClient().send(message);
    }
  }
  e.next();
}, "appointments");
