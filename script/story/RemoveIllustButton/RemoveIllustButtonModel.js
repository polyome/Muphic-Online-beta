tm.define("RemoveIllustButtonModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.setIsAvailable(false);
	},

	getIsAvailable : function() { return this.isAvailable; },							
	setIsAvailable : function(isAvailable) { this.isAvailable = isAvailable; },			//なにこのパラメータ
})