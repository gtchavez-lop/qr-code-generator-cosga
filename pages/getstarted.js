import { _Page_Transition } from '../lib/_animations';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GetStarted = () => {
  const router = useRouter();

  useEffect(() => {
    const dataFromStorage = window.localStorage.getItem('data');

    if (dataFromStorage) {
      router.push({
        pathname: '/qr',
      });
    }
  }, []);

  const generateQr = (e) => {
    e.preventDefault();

    const elements = e.target.elements;

    // check if input fields are empty
    if (
      elements['name_family'].value === '' ||
      elements['name_given'].value === '' ||
      elements['name_middle'].value === ''
    ) {
      toast.error('Please fill in all the fields');
      return;
    }

    const data = {
      name_family: elements['name_family'].value,
      name_given: elements['name_given'].value,
      name_middle: elements['name_middle'].value,
      student_level: elements['student_level'].value,
      student_section: elements['student_section'].value,
      student_strand: elements['student_strand'].value,
      student_strand: elements['student_strand'].value,
      student_instructor: elements['student_instructor'].value,
    };

    // if all fields are filled, store to local storage
    localStorage.setItem('data', JSON.stringify(data));

    // router push to /qr
    router.push({
      pathname: '/qr',
    });
  };

  return (
    <>
      <motion.main
        variants={_Page_Transition}
        initial="initial"
        animate="animate"
        exit="exit"
        key={router.route}
      >
        <div className="my-32">
          <h1 className="text-4xl text-center">Get Started</h1>

          <form
            className="form-control mt-10 gap-10"
            id="getstarted-form"
            onSubmit={(e) => generateQr(e)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <label className="flex flex-col">
                <span>Family Name</span>
                <input
                  type="text"
                  name="name_family"
                  className="input input-primary"
                />
              </label>
              <label className="flex flex-col">
                <span>Given Name</span>
                <input
                  type="text"
                  name="name_given"
                  className="input input-primary"
                />
              </label>
              <label className="flex flex-col">
                <span>Middle Initial</span>
                <input
                  type="text"
                  name="name_middle"
                  className="input input-primary"
                  minLength={1}
                  maxLength={1}
                />
              </label>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <label className="flex flex-col">
                <span>Grade Level</span>
                <select className="select select-primary" name="student_level">
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span>Program Affiliated</span>
                <select className="select select-primary" name="student_strand">
                  <option>STEM</option>
                  <option>ICT</option>
                  <option>ABM</option>
                  <option>GAS</option>
                  <option>Home Economics</option>
                  <option>HUMSS</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span>Section</span>
                <select
                  className="select select-primary"
                  name="student_section"
                >
                  <option>Section A</option>
                  <option>Section B</option>
                  <option>Section C</option>
                  <option>Section D</option>
                </select>
              </label>
              <label className="flex flex-col">
                <span>Class Instructor</span>
                <select
                  className="select select-primary"
                  name="student_instructor"
                >
                  <option>Prof. Joemen Barrios MIT</option>
                  <option>Prof. Ryan Rei Alban</option>
                  <option>Prof. Michael Tan</option>
                </select>
              </label>
            </div>

            {/* generate qr button */}
            <button type={'submit'} className="btn btn-primary btn-block mt-10">
              Generate QR
            </button>
          </form>
        </div>
      </motion.main>
    </>
  );
};

export default GetStarted;
