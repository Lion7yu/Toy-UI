export default {
  mounted(el) {
    const imgWrapper = el
    const magWrapper = imgWrapper.querySelector('.mag-wrapper') 
    const magImg = magWrapper.querySelector('.mag-img')
    const imgWidth = getStyle(imgWrapper, 'width')
    const imgHeight = getStyle(imgWrapper, 'height')
    const magWidth = getStyle(magWrapper, 'width')
    const magHeight = getStyle(magWrapper, 'height')
    const imgX = imgWrapper.offsetParent.offsetLeft
    const imgY = imgWrapper.offsetParent.offsetTop

    const init = () =>{
      bindEvent()
    }

    function getStyle(el, prop){
      return parseInt(window.getComputedStyle(el,null)[prop])
    }

    function bindEvent(){
      imgWrapper.addEventListener('mouseover', function(e){
        //show 要加空格
        magWrapper.className += ' show'
        showMag(getXY(e).x, getXY(e).y)
        document.addEventListener('mousemove',handleMouseMove,false)
      },false)

      imgWrapper.addEventListener('mouseout',handleMouseOut,false)
    }

    function handleMouseMove(e){
      const {x, y, mouseX, mouseY} = getXY(e)
      showMag(x, y, mouseX, mouseY)
    }

    function handleMouseOut(){
      magWrapper.className = 'mag-wrapper'
      document.removeEventListener('mousemove',handleMouseMove,false)
    }

    function showMag(x, y, mouseX, mouseY){
      magWrapper.style.left = x + 'px'
      magWrapper.style.top = y + 'px'
      magImg.style.left = -x + 'px'
      magImg.style.top = -y + 'px'

      if(mouseX < 0 || mouseY < 0 || 
        mouseX > imgWidth || mouseY > imgHeight){
        magWrapper.className = 'mag-wrapper';
        document.removeEventListener('mousemove',handleMouseMove,false)
      }
    }

    function getXY(e){
      return{
        x: e.pageX - imgX - magWidth/2,
        y: e.pageY - imgY - magHeight/2,
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY
      }
    }

    init()
  },
}