import Image from "next/image";

import styles from "styles/Header.module.css";

import headerImage from "../../public/images/image1.png";

const Header = () => {
  return (
    <div className={styles.hero}>
      <Image src={headerImage} alt="Background Image" />
    </div>
  );
};

export default Header;
