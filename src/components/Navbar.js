import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header className="header">
      <nav
        className="navbar navbar-expand-lg fixed-top p-3"
        style={{
          background: `rgba(40, 40, 43, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="container">
          <a
            href="/"
            className="navbar-brand text-uppercase font-weight-bold text-white"
          >
            Queen River
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
          >
            <BiMenuAltRight color="#FFFFFF" size="1.5em" />
          </button>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link font-weight-light text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about-us"
                  className="nav-link font-weight-light text-white"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/our-products"
                  className="nav-link font-weight-light text-white"
                >
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/contact-us"
                  className="nav-link font-weight-light text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
