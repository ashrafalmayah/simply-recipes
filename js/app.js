const getElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return element
  throw Error('There is no ${selector} element')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click' , () => {
  links.classList.toggle('show-links')
})
