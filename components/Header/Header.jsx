import React, { useState } from "react";
import Logo from "../../src/assets/logo.png";
import "./Header.css";
import bars from "../../src/assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      {menu === false && mobile ? (
        <div>
          <img
            style={{ height: "1.5rem", width: "1.5rem" }}
            onClick={() => setMenu(true)}
            src={bars}
            alt=""
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              to="whyus"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Why us?
            </Link>{" "}
          </li>
          <li onClick={() => setMenu(false)}>
            {" "}
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Testimonials
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Plans
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenu(false)}
            >
              Programs
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
