import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  AOS.init();
  return (
    <div data-aos="fade-left" className="mx-4 lg:w-[1180px] lg:mx-auto mt-10">
      <footer className="footer p-10 text-white">
        <aside>
          <p className="text-2xl font-bold animate__animated animate__bounce">
            <span className="text-[#ffbe00]">Imperial</span> Estates
          </p>
          <p>Providing reliable housing since 1992</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr />
      <div className="p-6 text-center text-white">
        <p>
          © Copyright 2024{" "}
          <span className="text-[#ffbe00]">Imperial Estates</span> All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
