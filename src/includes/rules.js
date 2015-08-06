module.exports.load = function(colors) {
	var syntax  = {};

	syntax.editor_caret      = colors.yellow;
	syntax.editor_foreground = colors.foreground;
	syntax.editor_background = colors.background;
	syntax.editor_selection  = colors.selection;
	syntax.editor_lineHighlight = colors.current_line;

	syntax.base_comment  = colors.gray;
	syntax.base_string   = colors.green;
	syntax.base_number   = colors.green;
	syntax.base_punctuation = colors.gray;
	syntax.base_constant = colors.red;
	syntax.base_operator = colors.blue;
	syntax.base_keyword  = colors.blue;
	syntax.base_function = colors.orange;
	syntax.base_property = colors.orange;
	syntax.base_class    = colors.teal;

	syntax.html_doctype  = colors.orange;
	syntax.html_template = colors.yellow;
	syntax.html_tag  = colors.blue;
	syntax.html_attr = colors.orange;
	syntax.html_char = colors.yellow;

	syntax.css_class    = syntax.html_tag;
	syntax.css_tag      = syntax.html_tag;
	syntax.css_pseudo   = syntax.html_tag;
	syntax.css_atRule   = colors.yellow;
	syntax.css_property = colors.green;
	syntax.css_meta_property = syntax.css_property;
	syntax.css_value    = colors.orange;
	syntax.css_string   = syntax.css_value;
	syntax.css_unit     = syntax.css_value;
	syntax.css_variable = colors.teal;
	syntax.css_mixin    = colors.purple;
	syntax.css_media_constant = syntax.css_value;

	syntax.md_italic = syntax.editor_foreground;
	syntax.md_bold = syntax.editor_foreground;

	return syntax;
};