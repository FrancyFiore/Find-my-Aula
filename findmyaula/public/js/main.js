/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// helper functions
	// from https://davidwalsh.name/vendor-prefix
	var prefix = (function () {
		var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		
		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
	})();
	
	// vars & stuff
	var support = {transitions : Modernizr.csstransitions},
		transEndEventNames = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd', 'msTransition': 'MSTransitionEnd', 'transition': 'transitionend'},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		onEndTransition = function(el, callback, propTest) {
			var onEndCallbackFn = function( ev ) {
				if( support.transitions ) {
					if( ev.target != this || propTest && ev.propertyName !== propTest && ev.propertyName !== prefix.css + propTest ) return;
					this.removeEventListener( transEndEventName, onEndCallbackFn );
				}
				if( callback && typeof callback === 'function' ) { callback.call(this); }
			};
			if( support.transitions ) {
				el.addEventListener( transEndEventName, onEndCallbackFn );
			}
			else {
				onEndCallbackFn();
			}
		},
		// the mall element
        mall = document.querySelector('.mall'),
		// mall´s levels wrapper
		mallLevelsEl = mall.querySelector('.levels'),
		// mall´s levels
		mallLevels = [].slice.call(mallLevelsEl.querySelectorAll('.level')),
		// total levels
		mallLevelsTotal = mallLevels.length,
		// surroundings elems
		mallSurroundings = [].slice.call(mall.querySelectorAll('.surroundings')),
		// selected level position
		selectedLevel,
		// navigation element wrapper
		mallNav = document.querySelector('.mallnav'),
		// show all mall´s levels ctrl
		allLevelsCtrl = mallNav.querySelector('.mallnav__button--all-levels'),
		// levels navigation up/down ctrls
		levelUpCtrl = mallNav.querySelector('.mallnav__button--up'),
		levelDownCtrl = mallNav.querySelector('.mallnav__button--down'),
		// pins
		pins = [].slice.call(mallLevelsEl.querySelectorAll('.pin')),
		// content element
		contentEl = document.querySelector('.content'),
		// content close ctrl
		contentCloseCtrl = contentEl.querySelector('button.content__button'),
		// check if a content item is opened
		isOpenContentArea,
		// check if currently animating/navigating
		isNavigating,
		// check if all levels are shown or if one level is shown (expanded)
		isExpanded,
		// spaces list element
		spacesListEl = document.getElementById('spaces-list'),
		// spaces list ul
		spacesEl = spacesListEl.querySelector('ul.list'),
		// all the spaces listed
		spaces = [].slice.call(spacesEl.querySelectorAll('.list__item > a.list__link')),
		// reference to the current shows space (name set in the data-name attr of both the listed spaces and the pins on the map)
		spaceref,
		// sort by ctrls
		sortByNameCtrl = document.querySelector('#sort-by-name'),
		// listjs initiliazation (all mall´s spaces)
		spacesList = new List('spaces-list', { valueNames: ['list__link', { data: ['level'] }, { data: ['category'] } ]} ),

		// smaller screens:
		// open search ctrl
		openSearchCtrl = document.querySelector('button.open-search'),
		// main container
		containerEl = document.querySelector('.container'),
		// close search ctrl
		closeSearchCtrl = spacesListEl.querySelector('button.close-search');
    
        //Varibile aule
        var Libere = new Array(2);
        for (var i = 0; i < 2; i++) {
            Libere[i] = new Array(8);
        }
        for (var j = 0; j < 8; j++){ /* da A101 a A108 */
            Libere[0][j] = Math.floor(Math.random() * 3)
        }
        for (var k = 0; k < 24; k++){ /* da A201 a A224 */
            Libere[1][k] = Math.floor(Math.random() * 3)
        }
        
    
        /* Array per orari */
        var PrimoPianoOrario = new Array(9) /* A101 - A108 */
        for(var i=0; i<9; i++){
            PrimoPianoOrario[i] = new Array(24); /* 0-23 ore */
        }
    
        var SecondoPianoOrario = new Array(25) /* A201 - A224 + lab */
        for(var i=0; i<25; i++){
            SecondoPianoOrario[i] = new Array(24); /* 0-23 ore */
        }
    
      /*  var PoloBOrario = new Array(8) /* B101 - B107 */
    /*    for(var i=0; i<24; i++){
      /*      PoloBOrario[i] = new Array(24); /* 0-23 ore */
    /*    }
    */
        /* LETTURA DEL FILE */
        
        var file1 = new XMLHttpRequest();
        var file2 = new XMLHttpRequest();
        var file3 = new XMLHttpRequest();

        file1.open('GET', '../file/PoloAPrimoPiano.txt', false);
        file1.send(null);

        file2.open('GET', '../file/PoloASecondoPiano.txt', false);
        file2.send(null);
    /*
        file3.open('GET', '../file/PoloB.txt', false);
        file3.send(null);
    */
        var PrimoPiano = file1.responseText.split('\n');
        var SecondoPiano = file2.responseText.split('\n');
       /* var PoloB = file3.responseText.split('\n'); */
    
        /* POLO A PRIMO PIANO */
        for(var aula=1; aula<9; aula++){
            for(var ora=7; ora<21; ora++){
                /*var element = document.getElementById("A10" + aula + ora);*/
                for(var c=0; c<(PrimoPiano.length-1); c++){
                    var fields = PrimoPiano[c].split('?');
                    if(fields[1] == aula){
                        if(fields[2] == ora){
                            for(var durata=ora; durata<fields[3]; durata++){
                                PrimoPianoOrario[aula-1][ora] = 2;
                                if(PrimoPianoOrario[aula-1][ora-1] != 2){
                                    PrimoPianoOrario[aula-1][ora-1] = 1;
                                }
                                var element = document.getElementById("A10" + aula + durata);
                                var Materia = fields[4].split('-');
                                if(fields[0] == 8){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                                }
                                if(fields[0] == 5){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                                }
                            }
                        }
                    }
                }    
            }
        }    
    
        /* POLO A SECONDO PIANO A201 - A209 */
        for(var aula=1; aula<10; aula++){
            for(var ora=7; ora<21; ora++){
                for(var c=0; c<(SecondoPiano.length-1); c++){
                    var fields = SecondoPiano[c].split('?');
                    if(fields[1] == aula){
                        if(fields[2] == ora){
                            for(var durata=ora; durata<fields[3]; durata++){
                                SecondoPianoOrario[aula-1][ora] = 2;
                                if(SecondoPianoOrario[aula-1][ora-1] != 2){
                                    SecondoPianoOrario[aula-1][ora-1] = 1;
                                }
                                var element = document.getElementById("A20" + aula + durata);
                                var Materia = fields[4].split('-');
                                if(fields[0] == 8){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                                }
                                if(fields[0] == 5){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                                }
                            }
                        }
                    }
                }    
            }
        }
        /* POLO A SECONDO PIANO A210 - A224 */
        for(var aula=10; aula<25; aula++){
            for(var ora=7; ora<21; ora++){
                for(var c=0; c<(SecondoPiano.length-1); c++){
                    var fields = SecondoPiano[c].split('?');
                    if(fields[1] == aula){
                        if(fields[2] == ora){
                            for(var durata=ora; durata<fields[3]; durata++){
                                SecondoPianoOrario[aula-1][ora] = 2;
                                if(SecondoPianoOrario[aula-1][ora-1] != 2){
                                    SecondoPianoOrario[aula-1][ora-1] = 1;
                                }
                                var element = document.getElementById("A2" + aula + durata);
                                var Materia = fields[4].split('-');
                                if(fields[0] == 8){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                                }
                                if(fields[0] == 5){
                                    element.innerHTML = "<strong>" + Materia[0] + "</strong>";
                                }
                            }
                        }
                    }
                }    
            }
        }
        /* LABORATORIO SECONDO PIANO */
        for(var ora=7; ora<21; ora++){
            for(var c=0; c<(SecondoPiano.length-1); c++){
                var fields = SecondoPiano[c].split('?');
                if(fields[1] == 25){
                    if(fields[2] == ora){
                        for(var durata=ora; durata<fields[3]; durata++){
                            SecondoPianoOrario[24][ora] = 2;
                            if(SecondoPianoOrario[24][ora-1] != 2){
                                SecondoPianoOrario[24][ora-1] = 1;
                            }
                            var element = document.getElementById("A225" + durata);
                            if(fields[0] == 8){
                                element.innerHTML = "<strong>" + fields[4] + "</strong>" + "<br />" + fields[6] + " " + fields[7] + "<br />" + fields[8];
                            }
                            if(fields[0] == 5){
                                element.innerHTML = "<strong>" + fields[4] + "</strong>";
                            }
                        }
                    }
                }
            }    
        }    
    
        /* METTO A 0 DOVE NON SOLO LIBERE LE AULE */
        for(var a=0; a<9; a++){
            for(var b=0; b<24; b++){
                if(PrimoPianoOrario[a][b] != 2 && PrimoPianoOrario[a][b] != 1){
                    PrimoPianoOrario[a][b] = 0;
                }
            }
        }
    
        for(a=0; a<25; a++){
            for(b=0; b<24; b++){
                if(SecondoPianoOrario[a][b] != 2 && SecondoPianoOrario[a][b] != 1){
                    SecondoPianoOrario[a][b] = 0;
                }
            }
        }
    
        /* FINE LETTURA DEL FILE */

    
	function init() {
		// init/bind events
		initEvents();
	}

	/**
	 * Initialize/Bind events fn.
	 */
	function initEvents() {
		// click on a Mall´s level
		mallLevels.forEach(function(level, pos) {
			level.addEventListener('click', function() {
				// shows this level
				showLevel(pos+1);
			});
		});

		// click on the show mall´s levels ctrl
		allLevelsCtrl.addEventListener('click', function() {
			// shows all levels
			showAllLevels();
		});

		// navigating through the levels
		levelUpCtrl.addEventListener('click', function() { navigate('Down'); });
		levelDownCtrl.addEventListener('click', function() { navigate('Up'); });

		// sort by name ctrl - add/remove category name (css pseudo element) from list and sorts the spaces by name 
		sortByNameCtrl.addEventListener('click', function() {
			if( this.checked ) {
				classie.remove(spacesEl, 'grouped-by-category');
				spacesList.sort('list__link');
			}
			else {
				classie.add(spacesEl, 'grouped-by-category'); 
				spacesList.sort('category');
			}
		});

		// hovering a pin / clicking a pin
		pins.forEach(function(pin) {
			var contentItem = contentEl.querySelector('.content__item[data-space="' + pin.getAttribute('data-space') + '"]');

			pin.addEventListener('mouseenter', function() {
				if( !isOpenContentArea ) {
					classie.add(contentItem, 'content__item--hover');
				}
			});
			pin.addEventListener('mouseleave', function() {
				if( !isOpenContentArea ) {
					classie.remove(contentItem, 'content__item--hover');
				}
			});
			pin.addEventListener('click', function(ev) {
				ev.preventDefault();
				// open content for this pin
				openContent(pin.getAttribute('data-space'));
				// remove hover class (showing the title)
				classie.remove(contentItem, 'content__item--hover');
			});
		});

		// closing the content area
		contentCloseCtrl.addEventListener('click', function() {
			closeContentArea();
		});

		// clicking on a listed space: open level - shows space
		spaces.forEach(function(space) {
			var spaceItem = space.parentNode,
				level = spaceItem.getAttribute('data-level'),
				spacerefval = spaceItem.getAttribute('data-space');

			space.addEventListener('click', function(ev) {
				ev.preventDefault();
				// for smaller screens: close search bar
				closeSearch();
				// open level
				showLevel(level);
				// open content for this space
				openContent(spacerefval);
			});
		});

		// smaller screens: open the search bar
		openSearchCtrl.addEventListener('click', function() {
			openSearch();
		});

		// smaller screens: close the search bar
		closeSearchCtrl.addEventListener('click', function() {
			closeSearch();
		});
	}

	/**
	 * Opens a level. The current level moves to the center while the other ones move away.
	 */
	function showLevel(level) {
		if( isExpanded ) {
			return false;
		}
		
		// update selected level val
		selectedLevel = level;

		// control navigation controls state
		setNavigationState();

		classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);
		
		// the level element
		var levelEl = mallLevels[selectedLevel - 1];
		classie.add(levelEl, 'level--current');

		onEndTransition(levelEl, function() {
			classie.add(mallLevelsEl, 'levels--open');

			// show level pins
			showPins();

			isExpanded = true;
		}, 'transform');
		
		// hide surroundings element
		hideSurroundings();
		
		// show mall nav ctrls
		showMallNav();

		// filter the spaces for this level
		showLevelSpaces();
	}

	/**
	 * Shows all Mall´s levels
	 */
	function showAllLevels() {
		if( isNavigating || !isExpanded ) {
			return false;
		}
		isExpanded = false;

		classie.remove(mallLevels[selectedLevel - 1], 'level--current');
		classie.remove(mallLevelsEl, 'levels--selected-' + selectedLevel);
		classie.remove(mallLevelsEl, 'levels--open');

		// hide level pins
		removePins();

		// shows surrounding element
		showSurroundings();
		
		// hide mall nav ctrls
		hideMallNav();

		// show back the complete list of spaces
		spacesList.filter();

		// close content area if it is open
		if( isOpenContentArea ) {
			closeContentArea();
		}
	}

	/**
	 * Shows all spaces for current level
	 */
	function showLevelSpaces() {
		spacesList.filter(function(item) { 
			return item.values().level === selectedLevel.toString(); 
		});
	}

	/**
	 * Shows the level´s pins
	 */
	function showPins(levelEl) {
		var levelEl = levelEl || mallLevels[selectedLevel - 1];
		classie.add(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}

	/**
	 * Removes the level´s pins
	 */
	function removePins(levelEl) {
		var levelEl = levelEl || mallLevels[selectedLevel - 1];
		classie.remove(levelEl.querySelector('.level__pins'), 'level__pins--active');
	}

	/**
	 * Show the navigation ctrls
	 */
	function showMallNav() {
		classie.remove(mallNav, 'mallnav--hidden');
	}

	/**
	 * Hide the navigation ctrls
	 */
	function hideMallNav() {
		classie.add(mallNav, 'mallnav--hidden');
	}

	/**
	 * Show the surroundings level
	 */
	function showSurroundings() {
		mallSurroundings.forEach(function(el) {
			classie.remove(el, 'surroundings--hidden');
		});
	}

	/**
	 * Hide the surroundings level
	 */
	function hideSurroundings() {
		mallSurroundings.forEach(function(el) {
			classie.add(el, 'surroundings--hidden');
		});
	}

	/**
	 * Navigate through the mall´s levels
	 */
	function navigate(direction) {
		if( isNavigating || !isExpanded || isOpenContentArea ) {
			return false;
		}
		isNavigating = true;

		var prevSelectedLevel = selectedLevel;

		// current level
		var currentLevel = mallLevels[prevSelectedLevel-1];

		if( direction === 'Up' && prevSelectedLevel > 1 ) {
			--selectedLevel;
		}
		else if( direction === 'Down' && prevSelectedLevel < mallLevelsTotal ) {
			++selectedLevel;
		}
		else {
			isNavigating = false;	
			return false;
		}

		// control navigation controls state (enabled/disabled)
		setNavigationState();
		// transition direction class
		classie.add(currentLevel, 'level--moveOut' + direction);
		// next level element
		var nextLevel = mallLevels[selectedLevel-1]
		// ..becomes the current one
		classie.add(nextLevel, 'level--current');

		// when the transition ends..
		onEndTransition(currentLevel, function() {
			classie.remove(currentLevel, 'level--moveOut' + direction);
			// solves rendering bug for the SVG opacity-fill property
			setTimeout(function() {classie.remove(currentLevel, 'level--current');}, 60);

			classie.remove(mallLevelsEl, 'levels--selected-' + prevSelectedLevel);
			classie.add(mallLevelsEl, 'levels--selected-' + selectedLevel);

			// show the current level´s pins
			showPins();

			isNavigating = false;
		});

		// filter the spaces for this level
		showLevelSpaces();

		// hide the previous level´s pins
		removePins(currentLevel);
	}

	/**
	 * Control navigation ctrls state. Add disable class to the respective ctrl when the current level is either the first or the last.
	 */
	function setNavigationState() {
		if( selectedLevel == 1 ) {
			classie.add(levelDownCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelDownCtrl, 'boxbutton--disabled');
		}

		if( selectedLevel == mallLevelsTotal ) {
			classie.add(levelUpCtrl, 'boxbutton--disabled');
		}
		else {
			classie.remove(levelUpCtrl, 'boxbutton--disabled');
		}
	}

	/**
	 * Opens/Reveals a content item.
	 */
	function openContent(spacerefval) {
		// if one already shown:
		if( isOpenContentArea ) {
			hideSpace();
			spaceref = spacerefval;
			showSpace();
		}
		else {
			spaceref = spacerefval;
			openContentArea();
		}
		
		// remove class active (if any) from current list item
		var activeItem = spacesEl.querySelector('li.list__item--active');
		if( activeItem ) {
			classie.remove(activeItem, 'list__item--active');
		}
		// list item gets class active
		classie.add(spacesEl.querySelector('li[data-space="' + spacerefval + '"]'), 'list__item--active');

		// remove class selected (if any) from current space
		var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
		// svg area gets selected
		classie.add(mallLevels[selectedLevel - 1].querySelector('svg > .map__space[data-space="' + spaceref + '"]'), 'map__space--selected');
	}

	/**
	 * Opens the content area.
	 */
	function openContentArea() {
		isOpenContentArea = true;
		// shows space
		showSpace(true);
		// show close ctrl
		classie.remove(contentCloseCtrl, 'content__button--hidden');
		// resize mall area
		classie.add(mall, 'mall--content-open');
		// disable mall nav ctrls
		classie.add(levelDownCtrl, 'boxbutton--disabled');
		classie.add(levelUpCtrl, 'boxbutton--disabled');
	}

	/**
	 * Shows a space.
	 */
	function showSpace(sliding) {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// show content
		classie.add(contentItem, 'content__item--current');
		if( sliding ) {
			onEndTransition(contentItem, function() {
				classie.add(contentEl, 'content--open');
			});
		}
		// map pin gets selected
		classie.add(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
	}

	/**
	 * Closes the content area.
	 */
	function closeContentArea() {
		classie.remove(contentEl, 'content--open');
		// close current space
		hideSpace();
		// hide close ctrl
		classie.add(contentCloseCtrl, 'content__button--hidden');
		// resize mall area
		classie.remove(mall, 'mall--content-open');
		// enable mall nav ctrls
		if( isExpanded ) {
			setNavigationState();
		}
		isOpenContentArea = false;
	}

	/**
	 * Hides a space.
	 */
	function hideSpace() {
		// the content item
		var contentItem = contentEl.querySelector('.content__item[data-space="' + spaceref + '"]');
		// hide content
		classie.remove(contentItem, 'content__item--current');
		// map pin gets unselected
		classie.remove(mallLevelsEl.querySelector('.pin[data-space="' + spaceref + '"]'), 'pin--active');
		// remove class active (if any) from current list item
		var activeItem = spacesEl.querySelector('li.list__item--active');
		if( activeItem ) {
			classie.remove(activeItem, 'list__item--active');
		}
		// remove class selected (if any) from current space
		var activeSpaceArea = mallLevels[selectedLevel - 1].querySelector('svg > .map__space--selected');
		if( activeSpaceArea ) {
			classie.remove(activeSpaceArea, 'map__space--selected');
		}
	}

	/**
	 * for smaller screens: open search bar
	 */
	function openSearch() {
		// shows all levels - we want to show all the spaces for smaller screens 
		showAllLevels();

		classie.add(spacesListEl, 'spaces-list--open');
		classie.add(containerEl, 'container--overflow');
	}

	/**
	 * for smaller screens: close search bar
	 */
	function closeSearch() {
		classie.remove(spacesListEl, 'spaces-list--open');
		classie.remove(containerEl, 'container--overflow');
	}
    
    
    /* Inserito da me */
    
    
var check = document.getElementById('AuleLibere');
    check.onchange = function(val){
        if (check.checked) { /* MOSTRO I COLORI IN CASO DI CHECKED DEL BOX */
            /*alert('Le Aule libere per più ore sono verdi.\nLe Aule libere per un ora sono gialle.\nLe Aule con lezioni sono rosse.')*/
            document.getElementById('Info').style.display = "block";
            
            var today = new Date();
            var ora = today.getHours();
            /* var ora = 13; */
            console.log(ora);
            
            /* A101 - A108 */
            for(var aula=1; aula<9; aula++){
                for(var c=0; c<(PrimoPiano.length-1); c++){
                    var fields = PrimoPiano[c].split('?');
                    var fields2 = PrimoPiano[c+1].split('?');
                    if(fields[1] == aula){
                        if(ora >= fields[2] && ora < fields[3]){
                            classie.add(mallLevels[0].querySelector('svg > .map__space[data-space="1.0' + aula + '"]'), 'map__space--occupata');
                        }
                        else if((ora+1) == fields[2] || (ora+1) == fields2[2]){
                            classie.add(mallLevels[0].querySelector('svg > .map__space[data-space="1.0' + aula + '"]'), 'map__space--liberapoco');
                        }
                        else {
                            classie.add(mallLevels[0].querySelector('svg > .map__space[data-space="1.0' + aula + '"]'), 'map__space--libera');  
                        }
                    }
                }    
            }
            /* A201 - A209 */
            for(var aula=1; aula<10; aula++){
                for(var c=0; c<(SecondoPiano.length-1); c++){
                    var fields = SecondoPiano[c].split('?');
                    var fields2 = SecondoPiano[c+1].split('?');
                    if(fields[1] == aula){
                        if(ora >= fields[2] && ora < fields[3]){
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.0' + aula + '"]'), 'map__space--occupata');
                        }
                        else if((ora+1) == fields[2] || (ora+1) == fields2[2]){
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.0' + aula + '"]'), 'map__space--liberapoco');
                        }
                        else {
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.0' + aula + '"]'), 'map__space--libera');  
                        }
                    }
                }    
            }
            /* A210 - A224 - LD Meccanica */
            for(var aula=10; aula<26; aula++){
                for(var c=0; c<(SecondoPiano.length-1); c++){
                    var fields = SecondoPiano[c].split('?');
                    var fields2 = SecondoPiano[c+1].split('?');
                    if(fields[1] == aula){
                        if(ora >= fields[2] && ora < fields[3]){
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.' + aula + '"]'), 'map__space--occupata');
                        }
                        else if((ora+1) == fields[2] || (ora+1) == fields2[2]){
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.' + aula + '"]'), 'map__space--liberapoco');
                        }
                        else {
                            classie.add(mallLevels[1].querySelector('svg > .map__space[data-space="2.' + aula + '"]'), 'map__space--libera');  
                        }
                    }
                }    
            }  
        }
        else{ /* ELIMINAZIONE DEI COLORI IN CASO DI DECHECKED DEL BOX */
            document.getElementById('Info').style.display = "none";
            for(var j=0; j<8; j++){
                var activeSpaceArea = mallLevels[0].querySelector('svg > .map__space--libera');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--libera');
                }
                var activeSpaceArea = mallLevels[0].querySelector('svg > .map__space--liberapoco');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--liberapoco');
                }
                var activeSpaceArea = mallLevels[0].querySelector('svg > .map__space--occupata');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--occupata');
                }
            }

            for(var j=0; j<24; j++){
                var activeSpaceArea = mallLevels[1].querySelector('svg > .map__space--libera');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--libera');
                }
                var activeSpaceArea = mallLevels[1].querySelector('svg > .map__space--liberapoco');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--liberapoco');
                }
                var activeSpaceArea = mallLevels[1].querySelector('svg > .map__space--occupata');
                if( activeSpaceArea ) {
                    classie.remove(activeSpaceArea, 'map__space--occupata');
                }
            }
        }
    }
    	
	init();

})(window);