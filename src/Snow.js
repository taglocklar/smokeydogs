import React from "react";

const Snow = () => {
  const snowflakes = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    opacity: Math.random(),
    size: `${Math.random() * 3 + 2}px`,
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
      }}
    >
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          style={{
            position: "absolute",
            left: snowflake.left,
            top: "-10px",
            width: snowflake.size,
            height: snowflake.size,
            background: "white",
            borderRadius: "50%",
            opacity: snowflake.opacity,
            animation: `fall ${snowflake.animationDuration} linear infinite`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Snow;
