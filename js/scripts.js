OpenMenu = () => {
 const newClass = document.querySelector('ul')
 const imgMenu = document.getElementById('menu-icon')

   if(newClass.classList == "menu"){
       newClass.classList.add('active')
       imgMenu.src = "assets/menu-buguer-close.svg"
    } else {
       newClass.classList.remove('active')
       imgMenu.src = "assets/menu-buguer-open.svg"
    }
}
const buttonOpen =  document.getElementById('menu-icon').addEventListener("click" , OpenMenu)

