import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function Footer() {
  return (
    <div id="footer" className="mt-12 bg-white">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="mx-auto max-w-7xl bg-white pt-[2rem] pb-[8rem] md:pb-[3rem]"
      >
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col items-center justify-center space-y-6 md:flex-row md:space-y-0">
            <p className="text-md mr-0 mt-1 font-ubuntu tracking-wider font-semibold text-black md:mr-3">
              Created with{' '}
            </p>
            <div className="flex space-x-4">
              <img
                src="/next-js.svg"
                className="h-8 w-8 rounded-full border border-black bg-white"
              />
              <img src="/tailwindcss.svg" className="h-8 w-8" />
            </div>
            <p className="text-md ml-0 mt-1 font-ubuntu font-semibold tracking-wider text-black md:ml-3">
              by{' '}
              <span className="font-bold italic text-blue-500">Neeraj</span>{' '}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer