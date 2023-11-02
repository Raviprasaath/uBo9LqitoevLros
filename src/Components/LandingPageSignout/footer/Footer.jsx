import "./Footer.css";
function Footer() {
  return (
    <>
    <div className="footer-items">

      <div className="prime-logo">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
          alt=""
        />
      </div>

      <div className="footer-text">
        <span>Terms and Privacy Notice</span>
        <span>Send us feedback</span>
        <span>Help</span>
      </div>
      <div className="license">
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
    </>
  );
}
export default Footer;
