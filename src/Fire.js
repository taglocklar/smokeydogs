import React from "react";

const Fire = () => {
  const fireEmojis = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 4 + 3}s`,
    opacity: Math.random() * 0.8 + 0.2,
    size: `${Math.random() * 20 + 20}px`,
    animationDelay: `${Math.random() * -7}s`, // Negative delay for smooth start
  }));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {fireEmojis.map((fire) => (
        <div
          key={fire.id}
          style={{
            position: "absolute",
            left: fire.left,
            top: "-30px",
            fontSize: fire.size,
            opacity: fire.opacity,
            animation: `firefall ${fire.animationDuration} linear infinite`,
            animationDelay: fire.animationDelay,
          }}
        >
          🔥
        </div>
      ))}
      <style>
        {`
          @keyframes firefall {
            0% {
              transform: translateY(-30px) rotate(0deg);
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Fire;
