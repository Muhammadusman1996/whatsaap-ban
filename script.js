// WhatsApp Complaint Portal

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("complaintForm");
    const message = document.getElementById("message");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const phone = document.getElementById("phone").value.trim();
        const reason = document.getElementById("reason").value;
        const details = document.getElementById("details").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!phone || !reason || !details || !email) {
            message.textContent = "تمام خانے پُر کریں۔";
            return;
        }

        const complaint = {
            phone: phone,
            reason: reason,
            details: details,
            email: email,
            status: "Pending Admin Review",
            date: new Date().toISOString()
        };

        console.log("Complaint:", complaint);

        message.textContent =
            "آپ کی درخواست ڈیمو کے طور پر تیار ہوگئی ہے۔";

        form.reset();
    });

});
