import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Modal } from "@mui/material";
import { IoIosSend } from "react-icons/io";

const ModalContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.button
        className="bg-my-green rounded-full flex items-center gap-2 px-10 py-5"
        onClick={openModal}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
          ease: "easeInOut",
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.p
          className="text-2xl text-white"
          whileHover={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.3 },
          }}
        >
          Book a Demo
        </motion.p>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <Modal
            className="flex justify-center items-center"
            open={isOpen}
            onClose={openModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg max-h-screen mx-auto overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Content */}
              <div className="flex justify-between">
                <h2 className="text-xl font-bold mb-4">Schedule Your Demo</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={openModal}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <p className="mb-6 text-gray-700">
                Fill out the form below to book a demo with our team.
              </p>
              <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-1 md:grid-cols-2">
                  <div className="col-span-1">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Firstname"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Lastname"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone / Whatsapp
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Phone / Whatsapp"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Appointment Date"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write message here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-span-2">
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white bg-my-green w-full rounded-lg px-6 py-2.5"
                    type="submit"
                    >
                      <div className="flex flex-row gap-1 items-center justify-center">
                        <motion.p
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                          Send
                        </motion.p>

                        <motion.span
                        initial={{ x: 10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                          <IoIosSend />
                        </motion.span>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalContact;
