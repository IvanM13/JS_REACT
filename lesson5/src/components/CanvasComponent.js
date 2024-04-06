import React, { useState, useRef, useFrame } from "react";

const CanvasComponent = () => {
  const canvasRef = useRef();
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const handleMouseMove = e => {
    const { clientX: x, clientY: y } = e;
    setState({ x, y });
  };

  const draw = () => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.clearRect(0, 0, 200, 200);

    ctx.beginPath();
    ctx.arc(state.x, state.y, 50, 0, Math.PI * 2);
    ctx.fill();
  };

  useFrame(draw);

  return (
    <div onMouseMove={handleMouseMove}>
<canvas
ref={canvasRef}
width={200}
height={200}
/>
</div>
);
};

export default CanvasComponent;