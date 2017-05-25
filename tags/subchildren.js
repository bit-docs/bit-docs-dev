/**
 * @constructor documentjs.tags.subchildren @author
 * @tag documentation
 * @parent documentjs.tags
 * 
 * @description 
 * 
 * Attaches children of children docObjects
 * 
 * @body
 * 
 * ### Example:
 * 
 * @codestart javascript
 * /*
 *  * @subchildren
 *  *|
 * @codeend
 */
module.exports = {
	add: function() {
		this.subchildren = true;
	}
};
