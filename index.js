console.log("Hello world")

const openPopUp = document.querySelector('.button-login');
const closePopUp = document.querySelector('.sing_in');
const popUp = document.querySelector('.pop_up');

const openPopUpMob = document.querySelector('.account');
const closePopUpMob = document.querySelector('.sing_inm');
const popUpMob = document.querySelector('.sing_pop_up');


console.log(openPopUp, closePopUp, popUp)
console.log(popUpMob, closePopUpMob, openPopUpMob);


openPopUp.addEventListener('click', function (e) {
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
})


openPopUpMob.addEventListener('click', function (e) {
	e.preventDefault();
	popUpMob.classList.add('active');
})

closePopUpMob.addEventListener('click', () => {
	popUpMob.classList.remove('active');
})



