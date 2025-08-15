import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CountUp = ({ end = 100, duration = 2 }) => {
  const [value, setValue] = useState(0);
  const counter = useRef({ val: 0 });

  useEffect(() => {
    gsap.to(counter.current, {
      val: end,
      duration: duration,
      ease: 'power1.out',
      onUpdate: () => {
        setValue(Math.floor(counter.current.val));
      },
    });
  }, [end, duration]);

  return <span>{value}</span>;
};

export default CountUp;
