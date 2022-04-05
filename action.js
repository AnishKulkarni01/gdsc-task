document.onscroll = function() {
  const specs = document.querySelector('#specs');
  const nav = document.querySelector('nav');
  
  if(specs.getBoundingClientRect().top <=0) { // if the distance of the 'specs' section to the browser top is smaller than 0
    nav.classList.add('newnav1'); // add dark font color
    nav.classList.remove('newnav');
  } else {
    nav.classList.remove('newnav1'); // remove dark  font color
  }
}
