var plist = require('plist');
var fs = require('fs');
var util = require('util');
var rulesLoader = require('./includes/rules')
var syntaxLoader = require('./includes/syntax')
var templateLoader = require('./includes/template');

module.exports = function compileJsToPlist(theme) {
	var colors = require('./themes/' + theme)
	var rules = rulesLoader.load(colors);
	var syntax = syntaxLoader.load(rules);
	var plistJs = templateLoader.load(syntax);
	var plistStr = plist.build(plistJs);

	fs.writeFileSync(theme + '.tmTheme', plistStr);
};