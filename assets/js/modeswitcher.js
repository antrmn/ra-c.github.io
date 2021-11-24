/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/
let themes = ['light', 'dusk', 'dark'];
const defaultTheme = 'dark';

let currentTheme;
if (localStorage.getItem('theme') != null && themes.includes(localStorage.getItem('theme'))){
	currentTheme = localStorage.gettItem('theme');
} else if (window.matchMedia) {
	currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
} else {
	currentTheme = defaultTheme;	
}


function changeIconImgSrc(src) {
	document.getElementById("theme-toggle-img").src = src;
	document.getElementById("theme-toggle-img--mobile").src = src;
}

function modeSwitcher(desiredTheme = null) {
	if (desiredTheme == null || !themes.includes(desiredTheme)){
		desiredThemeIndex = (themes.indexOf(currentTheme)+1) % themes.length;
		desiredTheme = themes[desiredThemeIndex];
	}
	
	switch(desiredTheme){
		case 'light':
			document.documentElement.setAttribute('data-theme', 'light');
			sessionStorage.setItem('theme', 'light');
			changeIconImgSrc("../assets/img/dusk.svg");
			break;
		case 'dusk':
			document.documentElement.setAttribute('data-theme', 'dusk');
			sessionStorage.setItem('theme', 'dusk');
			changeIconImgSrc("../assets/img/moon.svg");
			break;
		case 'dark':
			document.documentElement.setAttribute('data-theme', 'dark');
			sessionStorage.setItem('theme', 'dark');
			changeIconImgSrc("../assets/img/sun.svg");
			break;
	}
	localStorage.setItem('theme', desiredTheme);
}

modeSwitcher();
