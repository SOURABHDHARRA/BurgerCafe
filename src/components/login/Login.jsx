import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    // Reset form fields after submission
    setFullName("");
    setEmail("");
    setContactNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="login" style={{ textAlign: "center" }}>
      <motion.form
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onSubmit={handleSubmit}
        style={{ marginTop: "50px" }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleFullNameChange}
          style={{
            padding: "10px",
            margin: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={{
            padding: "10px",
            margin: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={handleContactNumberChange}
          style={{
            padding: "10px",
            margin: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{
            padding: "10px",
            margin: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{
            padding: "10px",
            margin: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#F6A028",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#F6CC28",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Already have an account? Log in
        </button>
      </motion.form>
    </section>
  );
};

export default Login;
