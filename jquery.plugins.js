/* jQuery plugins
 * by Ægir Þorsteinsson <aegir@thorsteinsson.is>
 *
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details. */
(function ($) {
	$.fn.plugins = function() {
		// Go through data attributes of all elements with "plugins" class
		this.find('.plugins').each(function() {
			var value,
				elem = $(this),
				plugins = elem.data();
			// Allow many plugins for one element
			for (name in plugins){
				// Check if plugin exists
				if (plugins.hasOwnProperty(name) && $.fn[name]) {
					// Get options and remove attribute
					value = elem.data(name);
					elem.removeData(name);
					// Call plugin on element
					$.fn[name].apply(elem, [value]);
				}
			}
		});
	};

	// Run custom code after calling jQuery methods
	var after = function(plugins, func) {
		$(plugins.split(',')).each(function(i, plugin) {
			// Save the original jQuery method
			var old = $.fn[plugin];
			// Replace with our own method
			$.fn[plugin] = function() {
				var res = old.apply(this, arguments);
				// Call our custom method
				func.apply(this);
				// Keep chaining working
				return res;
			};
		});
	};
	

	$(function() {
		// Load plugins
		$(document).plugins();

		// Load plugins when new content is inserted to the page
		after('append,prepend,html', function() {
			$(this).plugins();
		});
	});

})(jQuery);