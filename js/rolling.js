var rollingParam = {};

function fading(id) {
	var defaults = {
		id : null,
		welDiv : null,
		motion : "start",
		delayTime : 5000,
		intervalTime : 5000,
		displayTimer : null,
		firstStartState : false
	};
	
	if (!rollingParam[id]) {
		rollingParam[id] = defaults;
		rollingParam[id].id = id;
		rollingParam[id].welDiv = $("#" + id + " > div");
	}
 	
	var obj = rollingParam[id];
	_startFading(obj);
}

function _startFading(obj) {
	clearInterval(obj.displayTimer);	

	obj.displayTimer = setInterval(function() {
		_fading(obj);
		obj.firstStartState = true;
	}, 5000);
}

function _fading (obj) {
	var currIdx = 0;
	var welDivLen = obj.welDiv.length;

	for (var i=0; i<welDivLen; i++) {

		if ($(obj.welDiv.eq(i)).is(":visible")) {
			currIdx = i;
			break;
		}
	}

	obj.welDiv.eq(currIdx++).fadeOut();
	obj.welDiv.eq(currIdx).fadeIn();
}