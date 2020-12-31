import "../assets/index.css";
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const { router } = this.props;

  return (

    <Layout>
  <AnimatePresence exitBeforeEnter>
  <Component {...pageProps} key={router.route}/>;
  </AnimatePresence>
  </Layout>
  )
}

export default MyApp;