/**
 * @parent plugins
 * @module {function} bit-docs-dev
 * @group bit-docs-dev/tags tags
 *
 * @description General development tags.
 *
 * @body
 *
 * This plugin registers onto the `tags` hook to add tags useful to developers
 * for writing documentation:
 *   - [bit-docs-dev/tags/author @author]
 *   - [bit-docs-dev/tags/deprecated @deprecated]
 *   - [bit-docs-dev/tags/group @group]
 *   - [bit-docs-dev/tags/iframe @iframe]
 *   - [bit-docs-dev/tags/inherits @inherits]
 *   - [bit-docs-dev/tags/page @page]
 *   - [bit-docs-dev/tags/release @release]
 */
var tags = require("./tags/tags");
module.exports = function(bitDocs){
    bitDocs.register("tags", tags);
};
