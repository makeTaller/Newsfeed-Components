/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

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

const header = document.querySelector('.header');

function menuCreator(menuItems) {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const ul = document.createElement('ul');
  const menuBtn = document.querySelector('.menu-button');

  // function to create the list items
  function itemCreator(text) {
    const li = document.createElement('li');
    li.textContent = text;

    return li
  }

  // iterating over each item in the menuItems array to get the text for each list item
  menuItems.forEach((item) => {
    let newListItem = itemCreator(item);
    ul.appendChild(newListItem);
  });
  menu.appendChild(ul);

  // event listener to add the class of menu--open to the menu div
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });


  return menu;
}

// adding the menu component to the dom
header.appendChild(menuCreator(menuItems));