import "./footer.scss";
function Footer() {
  return (
    <span className="footer">
      <ul>
        <li>
          {" "}
          <a>3 icones aqui </a>
        </li>
      </ul>
      <ul className="linksList">
        <li>
          <a href="#">CONTACT US |</a>{" "}
        </li>
        <li>
          <a href="#">ABOUT US |</a>{" "}
        </li>
        <li>
          <a href="#">FAQ |</a>
        </li>
        <li>
          <a href="#">PAYMENT METHODS</a>{" "}
        </li>
      </ul>
      <p>
        {" "}
        LOCATED ON THE NANAN STREET, TELEPHONE: 999999, EMAIL: NONO@NONONO{" "}
      </p>
    </span>
  );
}

export default Footer;
