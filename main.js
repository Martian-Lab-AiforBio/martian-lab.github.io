var hamburger = document.querySelector('.hamburger');
if(hamburger){
  hamburger.addEventListener('click', function(){
    document.querySelector('.nav-links').classList.toggle('open');
  });
}
document.querySelectorAll('.nav-links a').forEach(function(link){
  link.addEventListener('click', function(){ document.querySelector('.nav-links').classList.remove('open'); });
});