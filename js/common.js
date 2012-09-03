typeof ditto == "undefined" && (ditto = {}),
ditto.widgets = {},
ditto.widgets.topMenu = function () {
	var a = function (a, b) {
    	this.$el = a, this.$current = $(), this.inactive = !0, this.onClick = b;
   	 	var c = this;
    	a.find(".menu .item").mouseover(function () {
        		c.inactive && c.showArrow($(this))
    		}).mouseout(function () {
        			c.inactive && c.hideArrow()
    		}).click(function () {
       			 c.onClickListener($(this))
    		}).find(".arrow").css({ top: -16 })
		}, b = a.prototype;
	
	return b.showArrow = function (a) {
    		this.$current = a, this.$current.addClass("active").find(".arrow").stop().animate({ top: 0 }, "fast")
	}, b.hideArrow = function () {
    		this.$current.removeClass("active").find(".arrow").stop().animate({top: -16 })
	}, b.onClickListener = function (a) {
    		this.inactive ? (this.inactive = !1, this.showArrow(a)) : (this.hideArrow(), a.is(this.$current) ? this.inactive = !0 : this.showArrow(a)), this.onClick(a, this.inactive)
	}, a
}();
