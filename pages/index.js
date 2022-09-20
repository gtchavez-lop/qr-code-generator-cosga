import Link from 'next/link';
import { _Page_Transition } from '../lib/_animations';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const dataFromStorage = window.localStorage.getItem('data');

    if (dataFromStorage) {
      router.push({
        pathname: '/qr',
      });
    }
  }, []);

  return (
    <motion.main
      variants={_Page_Transition}
      initial="initial"
      animate="animate"
      exit="exit"
      key={router.route}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <p className="text-4xl">Untitled Project</p>
      <p className="">A web companion for the health robotics project</p>

      <Link href="/getstarted">
        <button className="btn btn-block max-w-md mt-16">
          Get Started Now!
        </button>
      </Link>
    </motion.main>
  );
};

export default Home;
