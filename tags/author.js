/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs-js/tag} bit-docs-dev/tags/author @author
 * 
 * @description 
 * 
 * Describes the author of a [bit-docs/types/docObject].
 * 
 * @body
 * 
 * ### Example:
 * 
 * @codestart javascript
 * /*
 *  * @author Justin Meyer
 *  *|
 * @codeend
 */
module.exports = {
	add: function( line ) {
		var m = line.match(/^\s*@author\s*(.*)/);
		if ( m ) {
			this.author = m[1];
		}
	}
};
