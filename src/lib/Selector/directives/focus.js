export default {
  mounted(el){
    const selectorInput = el.querySelector('.selector-input')
    const selectorMenu = el.querySelector('.selector-menu')
    const input = selectorInput.querySelector('input')
    const placeHolder = selectorInput.querySelector('label')
    const icon = selectorInput.querySelector('span')
  
    input.addEventListener('focus',function(){
      placeHolder.style.display = 'none'
      icon.className = 'iconfont i-search'
      setTimeout(()=>{
        selectorMenu.style.display = 'block';
      },200)
    },false)

    input.addEventListener('blur',function(){
      icon.className = 'iconfont i-down'
      setTimeout(()=>{
        selectorMenu.style.display = 'none'
        if(this.value.length === 0){
          placeHolder.style.display = "block"
        }
      },200)
    },false)

  }
}