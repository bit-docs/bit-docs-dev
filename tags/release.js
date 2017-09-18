/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs-process-tags/types/tag} bit-docs-dev/tags/release @release
 * @release 3.3
 *
 * Specifies the release of a [bit-docs-js/tags/param @param],
 * [bit-docs-js/tags/signature @signature],
 * [bit-docs-js/tags/function @function] or
 * [bit-docs-js/tags/property @property].
 *
 * @signature `@release RELEASE`
 *
 * @codestart javascript
 * /**
 *  * Retrieves a list of orders.
 *  * @@release 3.2
 *  *|
 *  find: function( params, success ) {
 * @codeend
 *
 * @param {String} RELEASE A release number like: `1.2.3`.
 * 
 * @body
 *
 * ## Release for a param
 *
 * Put `@release` after `@param` to tag the param with a release number:
 *
 * @codestart
 * /**
 *  * Retrieves a list of orders.
 *  * @@param {{}} params Parameters to filter orders.
 *  * @@release 3.2.1
 *  *|
 *  find: function( params, success ) {
 * @codeend
 *
 * ## Release for a signature
 *
 * Put `@release` after `@signature` to tag the param with a release number:
 *
 * @codestart
 * /**
 *  * Retrieves a list of orders.
 *  * @@signature `Order.find(params, success)`
 *  * @@release 3.2
 *  * @@param {{}} params Parameters to filter orders.
 *  *|
 *  find: function( params, success ) {
 * @codeend
 */
module.exports = {
	add: function( line ) {
		var m = line.match(/^\s*@release\s+(\S*)\s*$/);
		if ( m ) {
			// the current param
			if(this._curParam) {
				this._curParam.release = m[1];
			} else if(this.signatures){
				this.signatures[this.signatures.length-1].release = m[1];
			} else {
				this.release = m[1];
			}

		}
	}
};
