"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
    try {
        const name = formData.get("cfName");
        const email = formData.get("cfEmail");
        const phone = formData.get("cfPhone");
        const subject = formData.get("cfSubject");
        const message = formData.get("cfMessage");

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Computyne" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `New Contact Form - ${name}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p>${message}</p>
            `,
        });

        return { success: true };
    } catch (error) {
        return { success: false, error: "Failed to send message" };
    }
}