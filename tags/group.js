var getParent = require("bit-docs-process-tags/get-parent");
var tnd = require("bit-docs-type-annotate").typeNameDescription;

/**
 * @parent bit-docs-dev/tags
 * @module {bit-docs-process-tags/types/tag} bit-docs-dev/tags/group @group
 *
 * @description
 * 
 * Creates a [bit-docs/types/docObject] without a generated page that can be
 * linked to and with `parent` inherently set to the current
 * [bit-docs/types/docObject].
 * 
 * Set the `parent` of other [bit-docs/types/docObject]s to the group `NAME`
 * for better hierarchical organization in places like navigation menus.
 *
 * @signature `@group NAME [ORDER] TITLE`
 *
 * @param {String} NAME Unique name of this group [bit-docs/types/docObject].
 * 
 * @param {Number} [ORDER] Used to order this [bit-docs/types/docObject] in
 * relation to other [bit-docs/types/docObject]s sharing the same `parent`.
 * 
 * @param {String} TITLE Used for display purposes, such as links and headers.
 *
 * @body
 *
 * ## Use
 * 
 * The `@group` tag below would create a new [bit-docs/types/docObject] with
 * `parent` inherently set to the `my-module` [bit-docs/types/docObject]:
 * 
 * ```js
 * @@parent api
 * @@module {{}} my-module
 * @@group my-module/components components
 * ```
 * 
 * The group [bit-docs/types/docObject] would have `"type": "group"` and
 * `"parent": "my-module"`:
 * 
 * ```js
 * "my-module/components": {
 *   "name": "my-module/components",
 *   "title": "components",
 *   "type": "group",
 *   "parent": "my-module",
 *   "description": "",
 *   "order": 0
 * }
 * ```
 * 
 * Other [bit-docs/types/docObject]s can set their `parent` to the group
 * [bit-docs/types/docObject] using [bit-docs-process-tags/tags/parent]:
 * 
 * ```js
 * @@parent my-module/components
 * @@module {function} my-component
 * ```
 */
module.exports = {
	add: function (line, curData, scope, docMap) {
		var m = line.match(/@group[\s+](.*?)([\s+]([\d]+))?[\s+](.*)/),
			currentName = this.name;

		if (m) {
			var name = m[1],
				title = m[4] || m[1],
				order = parseInt(m[3],10) || 0,
				docObject = docMap[name] ?
					docMap[name] :
					docMap[name] = {
						name: name,
						title: title || name,
						type: "group",
						parent: currentName,
						description: '',
						order: order
					};

			return ["scope", docObject]
		} else {
			console.warn("WARN!: did not match @group for ",line);
		}
	}
};
