// our website has two states, darkmode state and a lightmode state

// starts at darkmode state, but saves the state in local storage,	so it can be restored later 

let body = document.querySelector('body');
let darkModeButton = document.querySelector('.dark-mode');

darkModeButton.addEventListener('click', () => {
					if(darkModeButton.innerText === "Dark"){
						darkModeButton.innerText = "Light";
				}else{
						darkModeButton.innerText= "Dark";
				}
				body.classList.toggle('light')
});