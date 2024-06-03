import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username) {
      setErrMsg("Username is required!");
    } else if (!phoneNumber) {
      setErrMsg("Phone number is required!");
    } else if (!email) {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (!subject) {
      setErrMsg("Please give your Subject!");
    } else if (!message) {
      setErrMsg("Message is required!");
    } else {
      try {
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccessMsg(
            `Thank you dear ${username}, Your Messages has been sent Successfully!`
          );
          setErrMsg("");
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setErrMsg("Error sending message.");
        }
      } catch (error) {
        setErrMsg("Error sending message.");
      }
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleSend}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={`${
                      errMsg === "Username is required!" && "outline-purple-500"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-white uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-purple-500"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${
                    errMsg === "Please give your Email!" && "outline-purple-500"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">
                  Subject
                </p>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${
                    errMsg === "Please give your Subject!" &&
                    "outline-purple-500"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${
                    errMsg === "Message is required!" && "outline-purple-500"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-white tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-purple-500 border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
