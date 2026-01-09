import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function SmokyCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Add trail
      setTrails(prev => [
        ...prev.slice(-15), // Keep last 15 trails
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random()
        }
      ]);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isMoving ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <div className="w-full h-full rounded-full bg-white border-2 border-white" />
      </motion.div>

      {/* Smoke trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{
            x: trail.x,
            y: trail.y,
            scale: 1,
            opacity: 0.6
          }}
          animate={{
            scale: 0,
            opacity: 0,
            x: trail.x + (Math.random() - 0.5) * 20,
            y: trail.y + (Math.random() - 0.5) * 20
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-8 h-8 rounded-full blur-md"
            style={{
              background: `radial-gradient(circle, 
                rgba(59, 130, 246, ${0.4 - index * 0.02}) 0%, 
                rgba(168, 85, 247, ${0.3 - index * 0.02}) 50%, 
                transparent 70%)`
            }}
          />
        </motion.div>
      ))}

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9997] mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isMoving ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.8
        }}
      >
        <div className="w-full h-full rounded-full border border-white opacity-50" />
      </motion.div>
    </>
  );
}
