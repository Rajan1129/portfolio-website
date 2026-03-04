import React, { useRef } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, Facebook, Youtube } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const Contact = () => {

const form = useRef();

const [status, setStatus] = useState("");

const [error, setError] = useState(false);

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(
"service_jo8ka0w",
"template_xen2yco",
form.current,
"0MaFcFBmOhwJo8vfK"
)
.then(
() => {
    
setStatus("Message sent successfully!");
setError(false);
},
(err) => {
    console.log(err);
setStatus("Failed to send message");
setError(true);
}
);

e.target.reset();
};

return (
<div className="pt-24 pb-12">
<div className="container mx-auto px-6">

<h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

{/* Contact Info */}
<div>

<h2 className="text-2xl font-bold mb-4">Contact Information</h2>

<div className="space-y-4">

<div className="flex items-center">
<Mail className="mr-3 text-blue-500" />
<span>shrmarajn70@gmail.com</span>
</div>

<div className="flex items-center">
<Phone className="mr-3 text-blue-500" />
<span>+91 9805720962</span>
</div>

</div>

<h2 className="text-2xl font-bold mt-8 mb-4">Social Media</h2>

<div className="flex flex-col gap-3">

<a href="https://www.linkedin.com/in/rajan-nautiyal-142397357" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
<Linkedin className="mr-2" /> LinkedIn
</a>

<a href="https://github.com/Rajan1129" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
<Github className="mr-2" /> GitHub
</a>

<a href="https://www.instagram.com/rajannautiyal1/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
<Instagram className="mr-2" /> Instagram
</a>

<a href="https://www.facebook.com/share/17tzzbXWGr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
<Facebook className="mr-2" /> Facebook
</a>

<a href="https://youtube.com/@rajannautiyal11" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
<Youtube className="mr-2" /> YouTube
</a>

</div>

</div>


{/* Contact Form */}
<div>

<h2 className="text-2xl font-bold mb-4">Send Message</h2>

<form ref={form} onSubmit={sendEmail} className="space-y-4">

<input
type="text"
name="name"
placeholder="Your Name"
className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="email"
name="email"
placeholder="Your Email"
className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<textarea
name="message"
placeholder="Your Message"
rows="5"
className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>

<button
type="submit"
className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
>
Send Message
</button>

</form>
{status && (
<p className={`mt-3 font-semibold ${error ? "text-red-600" : "text-green-600"}`}>
{status}
</p>
)}

</div>

</div>
</div>
</div>
);
};

export default Contact;