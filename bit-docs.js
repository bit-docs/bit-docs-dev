/**
 * @parent plugins
 * @module {function} bit-docs-dev
 * @group bit-docs-dev/tags tags
 *
 * @description General development tags.
 *
 * @body
 *
 * TBD
 */
var tags = require("./tags/tags");
module.exports = function(bitDocs){
    bitDocs.register("tags", tags);
};
