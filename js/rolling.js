var rollingParam = {};

function fading(id) {
	var defaults = {
		id : null,
		welDiv : null,
		motion : "start",
		delayTime : 5000,
		intervalTime : 5000,
		displayTimer : null,
		firstStartState : false,
		timer : null,
		timer2 : null,
		timer3 : null
	};
	
	if (!rollingParam[id]) {
		rollingParam[id] = defaults;
		rollingParam[id].id = id;
		rollingParam[id].welDiv = $("#" + id + " > div");
		
//		console.log(rollingParam[id].welDiv[0]);
	}
 	
	var obj = rollingParam[id];
	_startFading(obj);
}

function _startFading(obj) {
	console.log("before " + obj.displayTimer);
	
	clearInterval(obj.displayTimer);	
	obj.displayTimer = setInterval(function() {
		_fading(obj);
		obj.firstStartState = true;
	}, 5000);
	
	console.log("after " + obj.displayTimer);
}

function _fading (obj) {
	var currIdx = 0;
	var welDivLen = obj.welDiv.length;

	for (var i=0; i<welDivLen; i++) {
		console.log($(obj.welDiv.eq(i).html()));
		if ($(obj.welDiv.eq(i)).is(":visible")) {
			currIdx = i;
			break;
		}
	}
	
	$(obj.welDiv.eq(currIdx)).fadeOut("slow");
	$(obj.welDiv.eq(currIdx++)).fadeIn("slow");
}

/*
(function($) {
	var rollingParam = {};
	
	$.Fading = {
		defaults:{
			id : null,
			welDiv : null,
			motion : "start",
			delayTime : 3000,
			intervalTime : 1000,
			displayTimer : null,
			firstStartState : false,
			timer : null,
			timer2 : null,
			timer3 : null
		}
			
	};
	
	$.fn.extend({
		Fading:function (options) {
			var id = $(this).prop("id");
console.log(rollingParam[id]);
			if (rollingParam[id]) {
				rollingParam[id] = $.extend({}, $.Fading.defaults, options);	// 파라미터 값을 설정
				rollingParam[id].id = id;
				rollingParam[id].welDiv = $("#" + id + " div");
			}
			
			console.log(!rollingParam[id]);
			var obj = rollingPram[id];
			
			_startFading(obj);
			return this;
		}
	});
	
	function _setOption(param, options) {
		if (options.delayTime) {
			param.intervalTime = options.intervalTime;
		}
	}
	
	function _startFading(obj) {
		obj.displayTimer = setInterval(function() {
			_fading(obj);
			obj.firstStartState = true;
		}, obj.delayTime);
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
		
		$(obj.welDiv.eq(currIdx)).fadeOut("slow");
		$(obj.welDiv.eq(currIdx++)).fadeIn("slow");
	}
})(jQuery);
 */