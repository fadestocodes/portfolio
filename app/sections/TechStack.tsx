import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';


const techStackItems = [
  { name: 'React', color: '#61DBFB' },
  { name: 'Node.js', color: '#8CC84B' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'GSAP', color: '#88CE02' },
  { name: 'HTML5', color: '#E44D26' },
  { name: 'CSS3', color: '#264DE4' },
];

export default function TechStack() {
//   const containerRef = useRef(null);

  useEffect(() => {
    // Stack the plates when component mounts
    gsap.set('.plate', {
      y: (i) => i * -10,
      x: 0,
      zIndex: (i) => techStackItems.length - i,
    });
  }, []);

  const handleHover = () => {
    gsap.utils.toArray('.plate').forEach((plate) => {
      gsap.to(plate, {
        duration: 1.5,
        physics2D: {
          velocity: gsap.utils.random(300, 1000),
          angle: gsap.utils.random(-180, 180),
          gravity: 400,
        //   friction:0.2
        },
      });
    });
  };

  return (
    <div
    //   ref={containerRef}
      onMouseEnter={handleHover}
      className='w-dvw h-dvh '
      style={{
        position: 'relative',
        margin: '50px auto',
        perspective: '1000px',
        cursor: 'pointer',
      }}
    >
      {techStackItems.map((tech, index) => (
        <div
          key={tech.name}
          className="plate"
          style={{
            position: 'absolute',
            width: '200px',
            height: '60px',
            background: tech.color,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {tech.name}
        </div>
      ))}
    </div>
  );
}
