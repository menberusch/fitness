
function menuToggle(e){
	e.classList.toggle('active');
	e.closest('header').querySelector('nav').classList.toggle('active');
}