jQuery plugins
==============
Load your plugins without writing javascript. Add the "plugin" class to your element and add an attribute with the plugin name prefixed with data-. The value of the data-pluginName attribute will be passed to the jQuery plugin, it can be a text or json.

Usage:

	<div class="plugin" data-plugin-name="options"></div>
	
	
Or pass options using separate data attribute:

	<div class="plugin" data-plugin-name data-plugin-name-option="value"></div>
	
In this case the plugin is called with the js object { option: "value" }. You can also use json here.