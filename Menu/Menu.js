/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 const createMenu = (array)=>{
   const menuButton = document.querySelector('.header');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menuButton.appendChild(menu);
    const ul = document.createElement('ul');
    menu.appendChild(ul);
    const li1 = document.createElement('li');
    li1.textContent = array[0];
    const li2 = document.createElement('li');
    li2.textContent = array[1];
    const li3 = document.createElement('li');
    li3.textContent = array[2];
    const li4 = document.createElement('li');
    li4.textContent = array[3];
    const li5 = document.createElement('li');
    li5.textContent = array[4];
    const li6 = document.createElement('li');
    li6.textContent = array[5];
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    menuButton.addEventListener('click', ()=>{
      menu.classList.toggle('menu--open');
      console.log(menuButton);
    })

    return menu;
 }
 createMenu(menuItems);
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
