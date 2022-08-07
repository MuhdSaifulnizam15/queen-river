// import 'styles/scss/Navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <div className="container">
        <a className="navbar-brand" href="/">QUEEN RIVER
          {/* <Image
            src={Logo}
            alt="Company Logo"
            width={40}
            height={40}
          /> */}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
		        <ul className="navbar-nav ml-auto">
		        	<li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
		        	<li className="nav-item"><a href="/about-us" className="nav-link">About</a></li>
		        	<li className="nav-item"><a href="/our-products" className="nav-link">Our Product</a></li>
		        	<li className="nav-item"><a href="/contact-us" className="nav-link">Contact</a></li>
		        </ul>
		      </div>
      </div>
    </nav>
  )
}

export default Navbar;