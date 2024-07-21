import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // Every time it comes into view, it should animate
    threshold: 0.1,  // Adjust according to when you want to trigger the animation
  });

  return (
    <div ref={ref} className='flex flex-wrap lg:text-4xl md:text-2xl text-xl'>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block `}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
AnimatedText.propTypes = {
    text: PropTypes.string
  };