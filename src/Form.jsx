import { useState } from "react";
import ld from "./img/icons/ld.svg";
import tw from "./img/icons/tw.svg";
import fb from "./img/icons/fb.svg";
import pin from "./img/icons/pin.svg";
import { useDispatch } from "react-redux";
import { sendFormData } from "./Redux/actions/sendFormData";
import {
  FormWrapper,
  Title,
  Input,
  Textarea,
  Button,
  SocialIcons,
  SocialLink,
  StyledElipse,
  StyledLink,
} from "./styles/styledComponents";
import elipse from "./img/elipse.png";

const API = "http://localhost:3000/users/";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTextChange = (e) => {
    setMessage(e.target.value);
  };

  async function sendingData(e) {
    e.preventDefault();

    dispatch(sendFormData(username, email, message));

    await fetch(API, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        user: { name: username, email: email, message: message },
      }),
    })
      .then((res) => {
        console.log("Message sent", res.status);
      })
      .catch(() => {
        alert("Sending error!");
      })
      .finally(() => {
        setUsername("");
        setEmail("");
        setMessage("");
      });
  }

  return (
    <>
      <StyledElipse top="21px" left="714px">
        <img src={elipse} alt="pinkFace" />
      </StyledElipse>
      <FormWrapper>
        <Title>Reach out to us!</Title>
        <form onSubmit={sendingData}>
          <div>
            <Input
              required
              type="text"
              placeholder="Your name*"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div>
            <Input
              required
              type="email"
              placeholder="Your e-mail*"
              onChange={handleEmailChange}
              value={email}
            />
          </div>

          <div>
            <Textarea
              as="textarea"
              required
              type="text"
              placeholder="Your message*"
              onChange={handleTextChange}
              value={message}
              height="189px"
            />
          </div>

          <Button>Send message</Button>
        </form>
      </FormWrapper>
      <footer>
        <SocialIcons>
          <StyledLink href="https://www.linkedin.com/company/zenbit-tech/">
            <SocialLink img={ld}></SocialLink>
          </StyledLink>
          <StyledLink href="https://twitter.com/zen_bit">
            <SocialLink img={tw}></SocialLink>
          </StyledLink>
          <StyledLink href="https://www.facebook.com/zenBitTech/?locale2=ru_RU&paipv=0&eav=AfZUrGiYNHDantIHOjRvjg2Qf9WNOXq7vuYJdhC-r8KndImTIcRiEu69izZxhpMp6rs&_rdr">
            <SocialLink img={fb}> </SocialLink>
          </StyledLink>
          <StyledLink href="https://ru.pinterest.com/login/">
            <SocialLink img={pin}> </SocialLink>
          </StyledLink>
        </SocialIcons>
      </footer>
    </>
  );
}

export default Form;
