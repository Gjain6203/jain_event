
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactsPage() {
     const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

     const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

   emailjs.sendForm(
  "service_kwrtbij",   // ✅ Service ID
  "template_x0oh9ie",  // ✅ Template ID
  e.currentTarget,
  "ZzjQrhOkUKr90-tuQ"  // ✅ Public Key
)
      .then(() => {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        Have questions or want to book an event? Reach out to us!
      </p>
      <ul className="mb-2">
        <li>
          Email: {" "}
          <a
           
            className="text-blue-600 underline cursor-pointer"
          >
            laksjain3@gmail.com
          </a>
        </li>
        <li>
          Phone:{" "}
          <a   className="text-blue-600 underline cursor-pointer">
            +91 9462547938
          </a>
          <span className=" font-bold"> (Lakshit Jain)</span>
        </li>
        <li>Address: Jhotwara Jaipur 302012 , Rajasthan ,India</li>
      </ul>
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form name="contact_form" onSubmit={sendEmail} className="space-y-4 ">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full border p-2 rounded"
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full border p-2 rounded"
          name="message"
          placeholder="Your Message"
          required
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-4">❌ Failed to send. Try again later.</p>
      )}
    </div>
    </main>
  );
}
// service_9g5ljol- server id
// kxYdCDWsAJDpZ2oxB- punlic key
// template_y366xi5 -template id