import React, { useContext, useState, useEffect } from "react";
import { requestStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import emailjs from "@emailjs/browser";

function Request() {
  const { localization } = useContext(LanguageContext);

  // ✅ states for controlled inputs
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // success / error message
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim())
      newErrors.name = localization.form.nameRequired || "Name is required";
    if (!mail.trim()) {
      newErrors.email = localization.form.emailRequired || "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      newErrors.email =
        localization.form.emailInvalid || "Invalid email format";
    }
    if (!message.trim())
      newErrors.message =
        localization.form.messageRequired || "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handless = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);
    const serviceid = "service_8wl4q4r";
    const templetid = "template_ygzj7e4";
    const publickey = "Yv7Nu1gSPS6o2mjuS";

    const templetprams = {
      from_name: name,
      email_id: mail,
      message: message,
    };

    emailjs
      .send(serviceid, templetid, templetprams, publickey)
      .then(() => {
        setStatus("success");
        setName("");
        setMail("");
        setMessage("");
        setErrors({});
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  // ✅ clear status message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <form className={requestStyles.form} onSubmit={handless}>
      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="name">
          {localization.form.name}
        </label>
        <input
          type="text"
          className={requestStyles.input}
          id="name"
          name="name"
          placeholder={localization.form.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="email">
          {localization.form.email}
        </label>
        <input
          type="email"
          className={requestStyles.input}
          id="email"
          name="email"
          placeholder={localization.form.emailPlaceholder}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className={requestStyles.divWrapper}>
        <label className={requestStyles.label} htmlFor="message">
          {localization.form.message}
        </label>
        <textarea
          className={requestStyles.textarea}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={requestStyles.button}
        disabled={isSending} // ✅ prevent multiple clicks
      >
        {isSending
          ? localization.form.sending || "Sending..."
          : localization.form.send}
      </button>

      {status === "success" && (
        <p className="text-green-500 mt-2">
          {localization.form.success || "Message sent successfully!"}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-2">
          {localization.form.failed || "Failed to send message. Try again."}
        </p>
      )}
    </form>
  );
}

export default Request;
