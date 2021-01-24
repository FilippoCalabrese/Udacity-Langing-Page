const sections = document.querySelectorAll('section');
const fragment = new DocumentFragment();
const headerNavList = document.querySelector('#main_menu');

//Main navigation generation
sections.forEach(function(element){
    const anchor = document.createElement('a');
    anchor.innerHTML = element.getAttribute('data-name');

    //this will be used later to find the active section
    anchor.setAttribute('data-section-id', element.getAttribute('id'));
    anchor.setAttribute('class', 'nav-link');

    const listItem = document.createElement('li');
    listItem.appendChild(anchor);
    fragment.appendChild(listItem);
});

const cloned = fragment.cloneNode();
headerNavList.appendChild(fragment);


// Scroll event handling. This section of code handles the current section selection
window.addEventListener("scroll", navMarcClosestSection);

function navMarcClosestSection() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;

    //-100 in the following line is the fixed navigation offset that needs to be adjusted
    const sectionTop = section.offsetTop - 100; 
    sectionId = section.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector("a[data-section-id*=" + sectionId + "]").classList.add("active");
    } else {
        document.querySelector("a[data-section-id*=" + sectionId + "]").classList.remove("active");
    }
  });
}

//this section handles the scrolling event on menu item click

function scrollToSection(){
  const targetSectionId = this.getAttribute('data-section-id');
  const targetSection = document.getElementById(targetSectionId);
  targetSection.scrollIntoView();
}
const navItems = document.getElementsByClassName('nav-link');
for(const element of navItems) {
  console.log(element);
  element.addEventListener('click', scrollToSection);
}