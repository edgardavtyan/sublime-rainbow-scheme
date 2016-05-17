var tinycolor = require('tinycolor2');

module.exports.load = function(colors) {
	var syntax  = {};

	syntax.editor_caret      = colors.yellow;
	syntax.editor_foreground = colors.foreground;
	syntax.editor_background = colors.background;
	syntax.editor_selection  = colors.selection;
	syntax.editor_lineHighlight = colors.current_line;

	syntax.base_comment  = colors.gray;
	syntax.base_string   = colors.green;
	syntax.base_key      = colors.foreground;
	syntax.base_number   = colors.green;
	syntax.base_punctuation = colors.gray;
	syntax.base_constant = colors.teal;
	syntax.base_operator = colors.blue;
	syntax.base_keyword  = colors.blue;
	syntax.base_function = colors.foreground;
	syntax.base_property = colors.foreground;
	syntax.base_class    = colors.purple;

	syntax.html_doctype  = colors.orange;
	syntax.html_template = colors.yellow;
	syntax.html_tag  = colors.blue;
	syntax.html_attr = colors.orange;
	syntax.html_char = colors.yellow;

	syntax.jsx_tag  = colors.red;
	syntax.jsx_attr = colors.orange;
	syntax.jsx_char = colors.yellow;
	syntax.jsx_keyword = colors.orange;

	syntax.css_class    = syntax.html_tag;
	syntax.css_tag      = syntax.html_tag;
	syntax.css_pseudo   = syntax.html_tag;
	syntax.css_atRule   = colors.yellow;
	syntax.css_property = colors.red;
	syntax.css_meta_property = syntax.css_property;
	syntax.css_value    = colors.green;
	syntax.css_string   = syntax.css_value;
	syntax.css_unit     = syntax.css_value;
	syntax.css_variable = colors.teal;
	syntax.css_mixin    = colors.purple;
	syntax.css_media_constant = syntax.css_value;

	syntax.md_italic = syntax.editor_foreground;
	syntax.md_bold = syntax.editor_foreground;

	syntax.diff_inserted = colors.green;
	syntax.diff_changed = colors.yellow;
	syntax.diff_deleted = colors.red;

	syntax.jade_class = colors.teal;

	syntax.tex_function = colors.blue;
	syntax.tex_function_punctuation = colors.blue;
	syntax.tex_parameter = colors.orange;
	syntax.tex_label = colors.pink;

	return syntax;
};