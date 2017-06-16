/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs-js/tag} bit-docs-dev/tags/inherits @inherits
 * 
 * Indicates that the current [bit-docs/types/docObject docObject] inherits
 * from another [bit-docs/types/docObject docObject].
 * 
 * @signature `@inherits NAME`
 * 
 * @codestart
 * /*
 *  * @constructor Client
 *  * @inherits Person
 *  * ...
 *  *|
 *  var Client = Person.extend({})
 * @codeend
 * 
 * @param {String} NAME The name of docObject the current DocObject inherits from.
 */
module.exports = {
	add: function( line ) {
		var m = line.match(/^\s*@\w+ ([\w\.\$]+)/)
		if ( m ) {
			this.inherits = m[1];
		}
	}
};
