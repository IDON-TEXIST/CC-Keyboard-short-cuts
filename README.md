# Cookie-Clicker-Keyboard-shortcuts
This is an extension I totally stole from 2 different people for Cookie Clicker.   
"Well what purpose does this repo serve?" you ask. Well, the code for this only exists as source code and what I did is a took that and used Github's raw info page thingy so that this could be loaded and used as a userscript so you no longer have to enter anything into the console.
They're keyboard shortcuts. You can add them and they'll automatically apply whenever you open cookie clicker.   
It can do the following things:   
* M to open options
* S to open stats
* U to open info
* C to open Cookie Monster menu (different addon, [/Aktanusa/CookieMonster](https://github.com/Aktanusa/CookieMonster) DOES NOT WORK WITH LATEST VERSION)
* F to open Frozen Cookies menu (Also a different addon, [/Icehawk78/FrozenCookies/](https://github.com/Icehawk78/FrozenCookies/)). 
	+ Note: The original version of this add on isn't compatible with the newest version, however this fork is: [/Mtarnuhal/FrozenCookies](https://github.com/Mtarnuhal/FrozenCookies)  

Besides the 2 add-ons listed above and [/Icehawk78/CookieCrate](https://github.com/fmahnke/CookieCrate), (What a surprise... not compatible with the newest version) this add on *will* break when combining with other add-ons, and you can only have one at a time.  
Th- That's it, that's all it does.  
# Installation  
## Userscript (Recommended)  
0. Install a userscript manager for your browser.  I'd recommend [Tampermonkey](https://www.tampermonkey.net/), the store version of you can find [here](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) for chrome, and [here](https://www.microsoft.com/en-us/p/tampermonkey/9nblggh5162s) for Edge, and [here](https://addons.opera.com/en/extensions/details/tampermonkey-beta/) for Opera, and [here](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) for Firefox. (Alternatively, Firefox users can use [Greasymonkey](https://www.greasespot.net/), which can be officially installed [here.](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search))  
1. Add the userscript to your manager [here.](https://greasyfork.org/en/scripts/416344-cookie-clicker-keyboard-shortcuts)  
2. Bam! You're done. You'll never have to repeat this process, unlike the other 2 methods.
## Bookmarklet  
1. Create a bookmark, and set the link to the following code:  
```javascript
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
```
2. Now run this bookmark whenever you start the game.  
## Console
1. Copy the code above
2. Open your browser console in [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/) and hit Ctrl + Shift + I.
3. Navigate to the console tab.
4. Paste in the code, and hit enter.
5. Repeat every time you open the game.
# Credits 
[/Aktanusa/CookieMonster](https://github.com/Aktanusa/CookieMonster) For the code to load the mod in the [coolerindex.js](index.js)  
[Bloody Body](https://cookieclicker.fandom.com/wiki/User:Bloody_Body) The person who wrote, or at least added, the original code in the [index.js](index.js) at the [add-ons page](https://cookieclicker.fandom.com/wiki/Add-Ons) on the Cookie Clicker Fandom.  
Yup. I didn't actually do anything. I would like to say that again, that all I did is combine 2 templates. Don't come running at me with a pitchfork please.
# License
This is licensed under the [CC-BY-SA](https://creativecommons.org/licenses/by-sa/2.0/) license. I would do a more permissive one but the problem is the Fandom is licensed under CC-BY-SA, so I can't.
