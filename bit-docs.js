/**
 * @module {function} bit-docs-dev
 * @parent plugins
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
