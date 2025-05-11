import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c7f6253d-ec3d-48b1-a515-6a7e19127826");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(()=>{
        setResult("")
      },2000)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20 bg-background"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 20, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-3 text-lg font-Ovo text-muted-foreground"
      >
        Connect With me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo text-foreground">
        Get in touch
      </motion.h2>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="w-full p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            className="w-full p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <textarea
          className="w-full min-h-[150px] p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
          rows='6'
          placeholder="Enter Your message"
          name="message"
          required
        ></textarea>
        <div className="flex flex-col items-center gap-4 mt-8">
          <button
            className="py-3 px-8 flex items-center gap-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
          <p className="text-center text-sm font-medium text-primary">
            {result}
          </p>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
