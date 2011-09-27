jQuery plugins
==============
Load your plugins without writing javascript. Add the "plugins" class to your element and add an attribute with the plugin name prefixed with data-. The value of the data-pluginName attribute will be passed to the jQuery plugin, it can be a text or json.

Usage:

	<div class="plugins" data-pluginName="options"></div>