


import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';
import Confetti from './Confetti';
import ConfettiBurst from './Confetti';

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
  { name: 'Redis' },
  { name: 'Prisma ORM' },
  { name: 'Next.js' },
  { name: 'Tailwind' },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<number | null>(null);
  const bodiesRef = useRef<{ body: Matter.Body; el: HTMLDivElement }[]>([]);
  const hasStarted = useRef(false);
  const footerStarted = useRef(false);
  const horizontalSpread = useRef(0);

  const [ contactStep, setContactStep ] = useState<  'message' | 'email' | 'subject' >('message')
  const [ hideForm, setHideForm ] = useState(true)
  const [ input, setInput ] = useState({
    message : '',
    email: '',
    subject : ''
  })
  const [shouldFireConfetti, setShouldFireConfetti] = useState(false)

  // let footerShown = false;


  useEffect(() => {
    const startPhysics = () => {
    
      if (hasStarted.current) return;
      hasStarted.current = true;

      console.log('FROM START PHYISCS')

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
          border-radius: 30px;
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
        console.log("HELLO FROM RENDER")
        Matter.Engine.update(engine);
        bodies.forEach(({ body, el }) => {
          el.style.transform = `translate(${body.position.x - plateWidth / 2}px, ${body.position.y - plateHeight / 2}px) rotate(${body.angle}rad)`;
        });
        renderRef.current = requestAnimationFrame(render);


        const firstBody = bodies[0].body;
        const lastBody = bodies[bodies.length - 1].body;
        horizontalSpread.current = Math.abs(firstBody.position.x - lastBody.position.x);
      
        if (horizontalSpread.current > 200 && !footerStarted.current) {
          footerStarted.current = true;

          const footerTL = gsap.timeline({
          })

          footerTL.to('.footer-text-1', {
            opacity: 1,
            delay:1,
            y: 0,
            duration: 3,
            ease: 'power3.out',
          })
          .to('.footer-text-2', {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: 'power3.out',
          }, '-=0.5')
          .to('.footer-text-3', {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: 'power3.out',
          }, '-=1.2')
          .to('.footer-cta', {
            opacity: 1,
            y: 0,
            duration: 3,
            ease: 'power3.out',
          }, '-=1.5')
        }
      };
      render();

     


    };

    const cleanupPhysics = () => {
      console.log("CLEAN UP PHYSICS")
      footerStarted.current = false
      horizontalSpread.current = 0

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

  const handleNext = () => {
    if (contactStep === 'message'){
      setContactStep('email')
    } else if (contactStep === 'email'){
      setContactStep('subject')
    } else if (contactStep === 'subject'){
      setShouldFireConfetti(true)
      setHideForm(true)
      setContactStep('message')
      // setShouldFireConfetti(false)
    }
  }

  const handleBack = () => {
    if (contactStep === 'message'){
      setHideForm(true)
    } else if (contactStep === 'email'){
      setContactStep('message')
    } else if (contactStep === 'subject'){
      setContactStep('email')
    }
  }

  const handleFormSubmit = async () => {

  }


  return (
    <div className='footer-wrapper'>

      <ConfettiBurst shouldFire={shouldFireConfetti}  />

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{
          width: '100vw',
          justifyContent:'center',
          backgroundColor:'#2e54d1',
          alignItems:'center',
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

      </div>
      <div className='footer-content'>
        <div className='footer-text '>
            <h2 className='footer-text-1 text-white  font-heading text-5xl font-semibold text-center opacity-0' >Looks like you overflowed my tech stack...</h2>
            <h2 className='footer-text-2 text-white  font-heading text-5xl font-semibold text-center opacity-0' >Get it?</h2>
            <h2 className=' footer-text-3 text-white  font-heading text-5xl font-semibold text-center pt-8 opacity-0' >Yeah, that was lame, but at least say hi.</h2>
        </div>
        <div className='footer-cta'>
          <div className='cta-left'>
            <div className='headshot w-[120px] h-[120px] overflow-hidden rounded-full'>
              <Image
                src='/headshot.jpg'
                alt='profile-pic'
                height={300}
                width={300}
                className='w-full h-full object-cover scale-125'
              />
            </div>
            <div className='cta-ui'>
                <div className='buttons'>
                  <div onClick={()=> setHideForm(false)} className='send-button'>
                    <Send size={26} color='#2e54d1' />
                    <p className='font-heading text-customBlue font-bold text-lg  '>Message</p>
                  </div>
                  <div className='gh-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e54d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    <p className='font-heading text-customBlue font-bold text-lg  '>Github</p>
                  </div>
              </div>
            </div>
          </div>

          { !hideForm && (
            <div className={`cta-right ` }>
              <form onSubmit={handleFormSubmit} className='contact-form'>

                { contactStep === 'message' ? (
                  <>
                    <label htmlFor="message" className='form-label'>Message</label>
                    <textarea   name='message' className='message-input'  maxLength={500} placeholder='Say hello and whatever is on your mind'/>
                  </>

                ) : contactStep === 'email' ? (
                  <>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" name='email' className='email-input'  placeholder='johndoe@gmail.com' />
                  </>

                ) : contactStep === 'subject' && (
                  <>
                    <label htmlFor="subject" className='form-label'>Subject</label>
                    <input type="text" name='subject' className='subject-input'  placeholder='This email is about...' />
                  </>
                )}
                <div className='form-buttons'>
                  <div onClick={handleBack} className='back-button'>Back</div>
                  <div onClick={handleNext} className='form-send-button' >Next</div>
                </div>
              </form>
            </div>
          ) }
          {/* <div className=' confetti '> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
