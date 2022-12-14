// import vendor/package css files here 
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script';
import { useEffect } from 'react';

// import custom css files here
import 'styles/globals.css';

import variables from 'styles/scss/variables.module.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
