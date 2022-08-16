import { Link } from "react-router-dom";
import "./Contact.scss";
import emailjs from "emailjs-com";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Contact() {
  // https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application

  function sendEmail(e: any) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    // tech debt: secrets are still being stored in React, which is not safe.
    // need to spin up a node server to make secrets more secure
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID || ""
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Container>
      <div className="contact-wrapper">
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={sendEmail}
          className="form"
        >
          <Stack spacing={2}>
            <TextField
              type="text"
              name="name"
              label="Name"
              variant="standard"
            />
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
            />
            <TextField
              type="text"
              name="phone"
              label="Phone"
              variant="standard"
            />
            <TextField
              type="text"
              name="subject"
              label="Subject"
              variant="standard"
            />
            <TextField
              type="text"
              name="message"
              label="Message"
              variant="standard"
            />

            <Button type="submit" variant="outlined">
              Send
            </Button>
          </Stack>
        </Box>
      </div>
    </Container>
  );
}

export default Contact;
