import { motion } from "framer-motion";

import { styles } from "../styles";
import { SceneCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-white' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Olá, eu sou<span className='text gradient-text sombra-texto flex'>&nbsp;ANTONIO</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Exploro o mundo digital com paixão, traduzindo ideias em soluções tecnológicas e  <br className='sm:block hidden' />
          criativas. Bem-vindo à inovação em T.I!
          </p>
        </div>
      </div>

      <SceneCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;