import '../styles/globals.css';

import { AnimatePresence, motion } from 'framer-motion';

import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <main className="flex justify-center px-10 lg:px-0">
        <motion.section className="w-full max-w-5xl">
          <AnimatePresence mode="sync" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </motion.section>
      </main>

      <Toaster
        toastOptions={{
          position: 'bottom-right',
        }}
      />
    </>
  );
}

export default MyApp;
