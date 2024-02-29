import Vue from "vue";

const mapBreakpoints = {
  xs: 0,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1200,
}

// Возвращает бутстраповскую строку текущего брейкпоинта - 'xs' | 'sm' | 'md' | 'lg' | 'xl'
const currentBreakpoint = () => {
  let screenWidth
  Object.keys(mapBreakpoints).forEach((el) => {
    if (window.innerWidth >= mapBreakpoints[el]) {
      screenWidth = el
    }
  })
  return screenWidth
}

// Краткая проверка на запуск приложения со смартфона - true | false
const isMobile = () => {
  return window.innerWidth <= 743
}

// Краткая проверка на запуск приложения с планшета - true | false
const isTablet = () => {
  return window.innerWidth >= 743 && window.innerWidth <= 1200
}

const isTouchDevice = () => {
  return window.innerWidth <= 1200
}

// Объект, содержащий сведения о текущем брейкпоинте и устройстве
const mapAdaptive = {
  breakpoint: currentBreakpoint(),
  isMobile: isMobile(),
  isTablet: isTablet(),
  isTouchDevice: isTouchDevice(),
}

const adaptive = Vue.observable(mapAdaptive)
// Обновление объекта со сведениями при изменении ширины экрана
window.addEventListener('resize', () => {
  adaptive.isMobile = isMobile()
  adaptive.isTablet = isTablet()
  adaptive.isTouchDevice = isTouchDevice()
  adaptive.breakpoint = currentBreakpoint()
})

export default adaptive
