var tnd = require("bit-docs-type-annotate").typeNameDescription;

/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs-process-tags/types/tag} bit-docs-dev/tags/deprecated @deprecated
 *
 * @description
 *
 * Marks a comment as deprecated.
 *
 * @signature `@deprecated {VERSION} DESCRIPTION`
 *
 * Specifies a deprecation warning for a particular version. Multiple
 * `@deprecated` tags can be used on a single comment.
 *
 * This warning adds to the deprecated tag on [bit-docs/types/docObject]s.
 *
 * @param {STRING} VERSION The version the deprecation occurred within.
 *
 * @param {STRING} DESCRIPTION Text describing the deprecation.
 *
 * @body
 *
 * ## Use
 *
 * @codestart javascript
 * /**
 *  * @function
 *  * @deprecated {1.0} This method has been replaced
 *  * by [can.Model.parseModel].
 *  *
 *  * @param {String} name
 *  *|
 * @codeend
 */
module.exports = {
	add: function(line, curData, scope, docMap){

		var noNameData = tnd(line, true);
		if(!noNameData || !noNameData.types || !noNameData.types[0] || !noNameData.types[0].type) {
			console.log("WARNING!!\n>"+line+"\nShould look like:\n`@deprecated {VERSION} DESCRIPTION`");
		} else {
			if(!this.deprecated){
				this.deprecated = [];
			}
			var deprecate = {
				version: noNameData.types[0].type,
				description: noNameData.description
			};
			this.deprecated.push(deprecate);
			return deprecate;
		}


	},
	addMore: function( line, last ) {
		if ( last ) last.description += "\n" + line;
	}
};
