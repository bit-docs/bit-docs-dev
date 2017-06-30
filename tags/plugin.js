/**
 * @hide
 * @parent bit-docs-dev/tags
 * @module {bit-docs-js/tag} bit-docs-dev/tags/plugin @plugin
 * 
 * Specifies the parent [bit-docs/types/docObject]'s name. The current
 * docObject will be displayed under the the parent in the navigation.
 * 
 * @signature `@plugin NAME`
 * 
 * @codestart
 * /**
 *  * @@page can.Construct.super
 *  * @@parent can.Construct.plugins
 *  * @@plugin can/construct/super
 *  * @@test can/construct/super/qunit.html
 *  *|
 * @codeend
 * 
 * @param {String} NAME The name of the plugin.
 */
module.exports = {
	add: function( line ) {
		this.plugin = line.match(/@plugin ([^ ]+)/)[1];
	}
}
