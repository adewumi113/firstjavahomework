const bachelorettes = document.querySelectorAll('.contestant')

Array.from(bachelorettes).forEach(element => element.addEventListener('click', winner))

function winner(pick){
	if (pick.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert('Wrong!');
	}

}