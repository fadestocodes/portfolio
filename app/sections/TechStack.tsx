
// import React, { useEffect, useRef } from 'react';
// import Matter from 'matter-js';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const techStack = [
//   { name: 'React', color: '#61DBFB' },
//   { name: 'Node.js', color: '#8CC84B' },
//   { name: 'TypeScript', color: '#3178C6' },
//   { name: 'GSAP', color: '#88CE02' },
//   { name: 'React Native', color: '#E44D26' },
//   { name: 'Python', color: '#264DE4' },
//   { name: 'AWS', color: '#264DE4' },
//   { name: 'PostgreSQL', color: '#264DE4' },
// ];

// const TechStack = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const engineRef = useRef<Matter.Engine | null>(null);
//   const renderRef = useRef<number | null>(null);
//   const bodiesRef = useRef<{ body: Matter.Body; el: HTMLDivElement }[]>([]);

//   useEffect(() => {
//       let hasStarted = false;
      
//       const cleanupPhysics = () => {
//           if (engineRef.current) {
//             Matter.World.clear(engineRef.current.world, false);
//             Matter.Engine.clear(engineRef.current);
//             engineRef.current = null;
//           }
//           if (renderRef.current) {
//             cancelAnimationFrame(renderRef.current);
//             renderRef.current = null;
//           }
//           bodiesRef.current = [];
//           if (containerRef.current) {
//             containerRef.current.innerHTML = '';
//           }
//           hasStarted = false; // Allow restarting
//         };

//     const startPhysics = () => {
//       if (hasStarted) return;
//       hasStarted = true;

//       const container = containerRef.current;
//       if (!container) return;

//       const engine = Matter.Engine.create();
//       const world = engine.world;
//       engineRef.current = engine;

//       const { width, height } = container.getBoundingClientRect();
//       const wallThickness = 100;

//       // Create walls
//       const walls = [
//         Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }), // Top
//         Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // Bottom
//         Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Left
//         Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Right
//       ];
//       Matter.World.add(world, walls);

//       // Create plates
//       const plateHeight = 50;
//       const plateWidth = 300;
//       const spacing = 10;

//       const bodies = techStack.map((item, i) => {
//         const el = document.createElement('div');
//         el.className = 'tech-plate';
//         el.innerText = item.name;
//         el.style.cssText = `
//           width: ${plateWidth}px;
//           height: ${plateHeight}px;
//             border-color: #c4b9a5;
//             border-width: 2px;
//           color: #c4b9a5;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 20px;
//           position: absolute;
//           top: 0;
//           left: 0;
//           font-weight: bold;
//           user-select: none;
//           pointer-events: none;
//         `;
//         container.appendChild(el);

//         const body = Matter.Bodies.rectangle(
//           width / 2,
//           100 + i * (plateHeight + spacing),
//           plateWidth,
//           plateHeight,
//           {
//             restitution: 0.5,
//             friction: 0.2,
//             density: 0.002,
//           }
//         );

//         Matter.World.add(world, body);

//         return { body, el };
//       });

//       bodiesRef.current = bodies;

//       const render = () => {
//         Matter.Engine.update(engine);
//         bodies.forEach(({ body, el }) => {
//           el.style.transform = `translate(${body.position.x - plateWidth / 2}px, ${body.position.y - plateHeight / 2}px) rotate(${body.angle}rad)`;
//         });
//         renderRef.current = requestAnimationFrame(render);
//       };
//       render();
//     };

//     ScrollTrigger.create({
//       trigger: containerRef.current,
//       start: 'top center',
//       once: true,
//       onEnter: () => startPhysics(),
//     onEnterBack: () => startPhysics(),
//     onLeave: () => cleanupPhysics(),
//     onLeaveBack: () => cleanupPhysics(),
//     });

//     return () => {
//       const engine = engineRef.current;
//       if (engine) {
//         Matter.World.clear(engine.world, false);
//         Matter.Engine.clear(engine);
//       }
//       if (renderRef.current) {
//         cancelAnimationFrame(renderRef.current);
//       }
//       if (containerRef.current) {
//         containerRef.current.innerHTML = '';
//       }
//     };
//   }, []);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const container = containerRef.current;
//     if (!container) return;

//     const bounds = container.getBoundingClientRect();
//     const mouseX = e.clientX - bounds.left;
//     const mouseY = e.clientY - bounds.top;

//     const maxDist = 300;
//     const forceMultiplier = 10;

//     bodiesRef.current.forEach(({ body }) => {
//       const dx = body.position.x - mouseX;
//       const dy = body.position.y - mouseY;
//       const dist = Math.sqrt(dx * dx + dy * dy);

//       if (dist < maxDist) {
//         const force = (1 - dist / maxDist) * forceMultiplier;
//         const fx = (dx / dist) * force;
//         const fy = (dy / dist) * force;

//         Matter.Body.applyForce(body, body.position, { x: fx, y: fy });
//       }
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       style={{
//         width: '100vw',
//         height: '100vh',
//         margin: '50px auto',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     />
//   );
// };

// export default TechStack;


import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: 'React', color: '#61DBFB' },
  { name: 'Node.js', color: '#8CC84B' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'GSAP', color: '#88CE02' },
  { name: 'React Native', color: '#E44D26' },
  { name: 'Python', color: '#264DE4' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'PostgreSQL', color: '#336791' },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<number | null>(null);
  const bodiesRef = useRef<{ body: Matter.Body; el: HTMLDivElement }[]>([]);
  const hasStarted = useRef(false);

  useEffect(() => {
    const startPhysics = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      const container = containerRef.current;
      if (!container) return;

      const engine = Matter.Engine.create();
      const world = engine.world;
      engineRef.current = engine;

      const { width, height } = container.getBoundingClientRect();
      const wallThickness = 100;

      // Create walls
      const walls = [
        Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }), // Top
        Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }), // Bottom
        Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Left
        Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }), // Right
      ];
      Matter.World.add(world, walls);

      // Create plates
      const plateHeight = 50;
      const plateWidth = 300;
      const spacing = 10;

      const bodies = techStack.map((item, i) => {
        const el = document.createElement('div');
        el.className = 'tech-plate';
        el.innerText = item.name;
        el.style.cssText = `
          width: ${plateWidth}px;
          height: ${plateHeight}px;
          border-color: #c4b9a5;
          border-width: 2px;
          color: #c4b9a5;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          position: absolute;
          top: 0;
          left: 0;
          font-weight: bold;
          user-select: none;
          pointer-events: none;
          font-family: sans-serif;
        `;
        container.appendChild(el);

        const body = Matter.Bodies.rectangle(
          width / 2,
          100 + i * (plateHeight + spacing),
          plateWidth,
          plateHeight,
          {
            restitution: 0.5,
            friction: 0.2,
            density: 0.002,
          }
        );

        Matter.World.add(world, body);
        return { body, el };
      });

      bodiesRef.current = bodies;

      const render = () => {
        Matter.Engine.update(engine);
        bodies.forEach(({ body, el }) => {
          el.style.transform = `translate(${body.position.x - plateWidth / 2}px, ${body.position.y - plateHeight / 2}px) rotate(${body.angle}rad)`;
        });
        renderRef.current = requestAnimationFrame(render);
      };
      render();
    };

    const cleanupPhysics = () => {
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
        engineRef.current = null;
      }
      if (renderRef.current) {
        cancelAnimationFrame(renderRef.current);
        renderRef.current = null;
      }
      bodiesRef.current = [];
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      hasStarted.current = false;
    };

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom top',
      onEnter: () => startPhysics(),
      onEnterBack: () => startPhysics(),
      onLeave: () => cleanupPhysics(),
      onLeaveBack: () => cleanupPhysics(),
    });

    // Optional: update ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      cleanupPhysics();
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;

    const maxDist = 300;
    const forceMultiplier = 10;

    bodiesRef.current.forEach(({ body }) => {
      const dx = body.position.x - mouseX;
      const dy = body.position.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * forceMultiplier;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        Matter.Body.applyForce(body, body.position, { x: fx, y: fy });
      }
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        width: '100vw',
        height: '100vh',
        margin: '50px auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    />
  );
};

export default TechStack;
