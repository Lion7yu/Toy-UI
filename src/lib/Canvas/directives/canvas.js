export default {
  mounted(el) {
    const canvasWrapper = el;
    const canvas = canvasWrapper.querySelector("#t-canvas");
    const canvasWidth = getStyle(canvasWrapper, "width");
    const canvasHeight = getStyle(canvasWrapper, "height");
    const resetButton = canvasWrapper.querySelector(".reset");
    console.log(resetButton);
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black"; //填充颜色
    ctx.strokeStyle = "black"; //边框颜色
    ctx.lineWidth = 8; //线的宽度
    ctx.lineCap = "round"; //线的类型是圆

    let painting = false;
    let last;

    resetButton.addEventListener("click", function (e) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    const isTouchDevice = "ontouchstart" in document.documentElement;
    if (isTouchDevice) {
      canvas.ontouchstart = (f) => {
        let x = f.touches[0].clientX;
        let y = f.touches[0].clientY;
        last = [x, y];
      };
      canvas.ontouchmove = (f) => {
        let x = f.touches[0].clientX;
        let y = f.touches[0].clientY;
        drawLine(last[0], last[1], x, y); //画线
        last = [x, y];
      };
    } else {
      //鼠标事件
      canvas.onmousedown = (e) => {
        painting = true;
        last = [e.layerX, e.layerY];
        console.log(e);
      };

      canvas.onmousemove = (e) => {
        if (painting === true) {
          drawLine(last[0], last[1], e.layerX, e.layerY);
          last = [e.layerX, e.layerY];
        }
      };

      canvas.onmouseup = () => {
        painting = false;
      };
    }
    function drawLine(x1, y1, x2, y2) {
      ctx.beginPath(); //开启一个新的路径
      ctx.moveTo(x1, y1); //移动点（起点）
      ctx.lineTo(x2, y2); //连接两个点，并不会真正的画线
      ctx.closePath(); //关闭路径
      ctx.stroke(); //画线
    }

    function getStyle(el, prop) {
      return parseInt(window.getComputedStyle(el, null)[prop]);
    }
  },
};
