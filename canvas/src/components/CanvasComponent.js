import { useRef, useEffect } from "react";

const Canvas = props => {
  const ref = useRef();

  const draw = (ctx) => {
    ctx.fillStyle = 'grey';
    ctx.fillRect(10, 10, 100, 100);
  }

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    draw(ctx);

  }, []);



  return <canvas ref={ref} {...props} />
}


export default Canvas;