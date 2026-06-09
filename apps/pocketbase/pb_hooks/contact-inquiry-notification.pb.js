/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const email = e.record.get("email");
  const phone = e.record.get("phone");
  const subject = e.record.get("subject");
  const message_text = e.record.get("message");
  const recordId = e.record.id;
  
  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: "Contact Form Notification"
    },
    to: [{ address: "admin@kakasahebchavan.edu" }],
    subject: "New Contact Inquiry: " + (subject || "No Subject"),
    html: "<h2>New Contact Inquiry</h2>" +
          "<p><strong>From:</strong> " + name + "</p>" +
          "<p><strong>Email:</strong> " + email + "</p>" +
          "<p><strong>Phone:</strong> " + (phone || "Not provided") + "</p>" +
          "<p><strong>Subject:</strong> " + (subject || "No Subject") + "</p>" +
          "<p><strong>Message:</strong></p>" +
          "<p>" + message_text + "</p>" +
          "<p><strong>Record ID:</strong> " + recordId + "</p>" +
          "<p>Please respond to this inquiry at your earliest convenience.</p>"
  });
  $app.newMailClient().send(message);
  e.next();
}, "contact_inquiries");
