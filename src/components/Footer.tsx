import "./Footer.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Footer() {
  const links = [
    <Link key="one" href="#">
      Link one
    </Link>,
    <Link key="two" href="#">
      Link two
    </Link>,
    <Link key="three" href="#">
      Link three
    </Link>,
  ];

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <div className="footer-wrapper">
      <Box
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        {links}
      </Box>
    </div>
  );
}

export default Footer;
