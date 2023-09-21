import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main-div">
      <span>Meta</span>
      <span>About</span>
      <span>Blog</span>
      <span>Jobs</span>
      <span>Help</span>
      <span>API</span>
      <span>Privacy</span>
      <span>Terms</span>
      <span>Location</span>
      <span>Instagram Lite</span>
      <span>Threads</span>
      <span>Contact Uploading & Non-Users</span>
      <span>Meta Verified</span>
      <select style={{ border: "none", outlineStyle: "none" }}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Telugu">Telugu</option>
      </select>
    </div>
  );
};
export default Footer;
