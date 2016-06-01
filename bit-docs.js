var tags = require("./tags/tags");
module.exports = function(bitDocs){
    bitDocs.register("tags", tags);
};
