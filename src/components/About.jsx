import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn , textVariant} from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
               return(
                              <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

}
const About = () => {
  return (
               <>
               <motion.div 
               variants={textVariant()}
               className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
               >
                              <p className={styles.sectionSubText}
                              ><br></br>Introduction</p>
               
                              <h2 className={styles.sectionHeadText}>Overview</h2>
               
               </motion.div>
                              <motion.p variants={fadeIn("", "", 0.1,1)}>
                              <br></br>Hello! Thank You for visiting my profile.

<p>My Name is Sharva save currently pursuing Post Graduate degree and seeking an entry-level position in the IT field. Proficient in programming languages such as python and java. Experience working on projects in a team environment during Projects. Passionate about learning new technologies and staying up-to-date with industry trends. Looking for opportunities to apply my skills and knowledge in a challenging and dynamic work environment. Apart from this, My interest is in playing cricket and some other sports to. Let's connect and explore how I can add value to your organization.</p>
                              </motion.p>

                              <div className="mt-20 flex flex-wrap gap-10">
               {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
               ))}
</div>




</> 
)
}

export default SectionWrapper(About, "about");