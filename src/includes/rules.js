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

	syntax.html_doctype = colors.orange;
	syntax.html_tag     = colors.blue;
	syntax.html_attr    = colors.orange;
	syntax.html_char    = colors.yellow;

	syntax.css_string    = syntax.base_string;
	syntax.css_class     = syntax.html_tag;
	syntax.css_tag       = syntax.html_tag;
	syntax.css_pseudo    = syntax.html_tag;
	syntax.css_atRule    = colors.yellow;
	syntax.css_property  = colors.purple;
	syntax.css_meta_property = syntax.css_property;
	syntax.css_value     = colors.orange;
	syntax.css_unit      = syntax.css_value;
	syntax.css_variable  = colors.teal;
	syntax.css_mixin     = colors.yellow_alt;
	syntax.css_media_constant = syntax.css_value

	return syntax;
};