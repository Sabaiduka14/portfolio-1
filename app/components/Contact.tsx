import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setMessage("");
    alert("Email sent")
  };

  return (
    <main className="w-full h-[400px] py-5 bg-gray-200 rounded-t-lg mt-12 px-8">
      <div>
        <h1 className="text-center mb-6 font-bold text-2xl">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <h1 className="mb-1">Email</h1>
          <Input
            type="email"
            placeholder="Type Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className="mt-4 mb-1">Message</h1>
          <Textarea
            placeholder="Type Your Message Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="my-4 w-full py-4" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </main>
  );
}
