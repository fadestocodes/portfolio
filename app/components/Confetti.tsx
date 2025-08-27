'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Physics2DPlugin } from 'gsap/Physics2DPlugin';

gsap.registerPlugin(Physics2DPlugin);

const ConfettiBurst = ( { shouldFire }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;

    const render = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      requestAnimationFrame(render);
    };

    render();

    if (shouldFire){
        fireConfetti()
      }
  }, [shouldFire]);

  const fireConfetti = () => {
    const numParticles = 100;
    const canvas = canvasRef.current!;
    const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];

    for (let i = 0; i < numParticles; i++) {
      const p = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
      };

      particles.current.push(p);

      gsap.to(p, {
        duration: 3,
        physics2D: {
          angle: Math.random() * 360,
          velocity: Math.random() * 500 + 200,
          gravity: 800,
        },
        rotation: `+=${Math.random() * 720}`,
        onComplete: () => {
          particles.current = particles.current.filter(item => item !== p);
        },
      });
    }
  };

 

  return (
    <div className='absolute top-0 left-0 w-dvw h-dvh'>
      <canvas
        ref={canvasRef}
        className='  '
        style={{ position: 'fixed',  top: 0, left: 0, pointerEvents: 'none', zIndex: 999 }}
      />
      
    </div>
  );
};

export default ConfettiBurst;
