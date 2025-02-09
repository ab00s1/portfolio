import React from "react";

function Contact() {
  const contacts = [
    {
      icon: "/assets/envelope-solid.svg",
      alt: "Email icon",
      link: "mailto:abhi.singh6701@gmail.com",
      text: "Email",
    },
    {
      icon: "/assets/linkedin-brands-solid.svg",
      alt: "LinkedIn icon",
      link: "https://www.linkedin.com/in/abhinav-singh-961aa720a/",
      text: "LinkedIn",
    },
    {
      icon: "/assets/phone-solid.svg",
      alt: "Telephone icon",
      link: "tel:+918604776701",
      text: "Phone",
    },
  ];

  return (
    <section id="contact" className="relative h-auto px-6 py-12 md:py-16 lg:py-20">
      <p className="text-center text-lg md:text-xl">Get in Touch</p>
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-8">Contact Me</h1>

      {/* Contact Info Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-full max-w-sm transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Contact Icon */}
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={contact.icon}
                  alt={contact.alt}
                  className="w-12 h-12 transition-transform duration-300 hover:scale-110"
                />
              </a>
              {/* Contact Text */}
              <p className="text-lg">
                <a href={contact.link} target="_blank" className="text-blue-600 hover:underline">
                  {contact.text}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
