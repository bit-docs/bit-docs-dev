/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs/types/tag} bit-docs-dev/tags/author @author
 * 
 * @description Describes the author of a [bit-docs/types/docObject].
 * 
 * @signature `@author NAME`
 * 
 * @codestart javascript
 * /*
 *  * @author Justin Meyer
 *  *|
 * @codeend
 * 
 * @param {String} NAME The of a person or company.
 * 
 * @body
 */
module.exports = {
	add: function( line ) {
		var m = line.match(/^\s*@author\s*(.*)/);
		if ( m ) {
			this.author = m[1];
		}
	}
};
