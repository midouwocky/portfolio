import emailjs from "@emailjs/browser";

const sendEmail = (formElement) => {
  return emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    formElement,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};

export default sendEmail;

