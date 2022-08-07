import Image from "next/image";
import "styles/scss/Footer.module.scss";

import Logo from "../../public/images/logo.png"

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-end pb-2">
              <Image src={Logo} alt="Company Logo" width={70} height={70} />
              <h3 className="text-dark pl-2">Queen River</h3>
            </div>
            <p className="small text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <a className="text-primary" href="#">
                Queenriver.com
              </a>
            </p>
          </div>
          <div className="col-lg-4 col-md-3">
            <h5 className="text-dark mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-3">
            <h5 className="text-dark mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
