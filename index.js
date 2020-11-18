 javascript:( function () {
 	window.one = 0;
 	window.two = 0;
 	window.three = 0;
 	function Sorry() {
 		Game.Notify("You can't enable another add-on (except of Cookie Crate). Sorry.");
 	}
 	function Press(e) {
 		var l = String.fromCharCode(e.which).toLowerCase();
 		if (l == 'm' || l == 'ь')
 			Game.ShowMenu('prefs');
 		else if (l == 's' || l == 'ы')
 			Game.ShowMenu('stats');
 		else if (l == 'u' || l == 'г')
 			Game.ShowMenu('log');
 		else if (l == 'f' || l == 'а') {
 			if (window.one == 0) {
 				var js = document.createElement('script');
 				js.setAttribute('type', 'text/javascript');
 				js.setAttribute('id', 'frozenCookieScript');
 				js.setAttribute('src', 'http://icehawk78.github.io/FrozenCookies/frozen_cookies.js<nowiki/>');
 				document.head.appendChild(js);
 				window.one = 'f';
 			}
 			else if (window.one != 'f')
 				Sorry();
 			else
 				Game.ShowMenu('fc_menu');
 		}
 		else if (l == 'c' || l == 'с') {
 			if (window.one == 0) {
 				Game.LoadMod('http://aktanusa.github.io/CookieMonster/CookieMonster.js<nowiki/>');
 				window.one = 'c';
 			}
 			else if (window.one != 'c')
 				Sorry();
 		}
 	}
 	document.onkeypress = Press;
 	Game.Notify('Shortcuts enabled');
 }());
