var tags = {
    "author": require("./author"),
	demo: require("./demo"),
	deprecated: require("./deprecated"),
	download: require("./download"),
	"group": require("./group"),
	"iframe": require("./iframe"),
	inherits: require("./inherits"),
	page: require("./page"),
	plugin: require("./plugin"),
	"release" : require("./release")
};

for(var name in tags) {
	tags[name].name = name;
}

module.exports = tags;
