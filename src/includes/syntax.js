module.exports.load = function(rules) {
	return [
		{
			settings: {
				caret: rules.editor_caret,
				foreground: rules.editor_foreground,
				background: rules.editor_background,
				selection: rules.editor_selection,
				lineHighlight: rules.editor_lineHighlight,
			},
		},

		/******************
		 ****** Base ******
		 ******************/
		{
			name: 'Comments',
			scope: 'comment, punctuation.definition.comment',
			settings: {
				foreground: rules.base_comment,
			},
		},
		{
			name: 'String',
			scope: 'string.quoted'
			   + ', string.interpolated'
			   + ', punctuation.definition.string'
			   + ', keyword.other.template'
			   ,
			settings: {
				foreground: rules.base_string,
			},
		},
		{
			name: 'Object key',
			scope: 'constant.other.object.key'
			   ,
			settings: {
				foreground: rules.base_key,
			},
		},
		{
			name: 'Number',
			scope: 'constant.numeric'
			   ,
			settings: {
				foreground: rules.base_number,
			},
		},
		{
			name: 'Punctuation',
			scope: 'meta.delimiter'
			   + ', meta.brace'
			   + ', meta.group.braces.round.function.arguments'
			   + ', punctuation.definition.parameters'
			   + ', punctuation.terminator'
			   + ', punctuation.separator'
			   + ', punctuation.section'
			   + ', comment.punctuation.comma.sass'
			   + ', source.sass'
			   + ', source.scss'
			   ,
			settings: {
				foreground: rules.base_punctuation,
			},
		},
		{
			name: 'Constant',
			scope: 'variable.other.constant,'
			   + ', constant.other.java,'
			   + ', constant.language'
			   ,
			settings: {
				foreground: rules.base_constant,
			},
		},
		{
			name: 'Operator',
			scope: 'keyword.operator'
			   ,
			settings: {
				foreground: rules.base_operator,
			},
		},
		{
			name: 'Keyword',
			scope: 'storage.modifier'
			   + ', storage.type.js'
			   + ', storage.type.function.js'
			   + ', storage.type.function.arrow.js'
			   + ', keyword.control'
			   + ', keyword.other'
			   + ', variable.language.this'
			   + ', variable.language.self'
			   ,
			settings: {
				foreground: rules.base_keyword,
			},
		},
		{
			name: 'Function',
			scope: 'support.function'
			   + ', entity.name.function'
			   + ', meta.function-call.method.with-arguments'
			   + ', meta.function-call.method.without-arguments'
			   ,
			settings: {
				foreground: rules.base_function,
			},
		},
		{
			name: 'Property',
			scope: 'meta.property'
			   + ', variable.language.prototype'
			   + ', support.type.object.module'
			   ,
			settings: {
				foreground: rules.base_property,
			},
		},
		{
			name: 'Class',
			scope: 'support.class'
			   + ', storage.modifier.import'
			   + ', storage.modifier.package'
			   + ', storage.type'
			   + ', entity.name.type.class'
			   + ', entity.other.inherited-class'
			   + ', variable.other.class'
			   ,
			settings: {
				foreground: rules.base_class,
			},
		},

		/******************
		 ****** HTML ******
		 ******************/
		{
			name: 'HTML Doctype',
			scope: 'meta.tag.sgml.doctype'
			   ,
			settings: {
				foreground: rules.html_doctype,
			},
		},
		{
			name: 'HTML Tag',
			scope: 'entity.name.tag'
			   ,
			settings: {
				foreground: rules.html_tag,
			},
		},
		{
			name: 'HTML Tag Braces',
			scope: 'punctuation.definition.tag'
			   ,
			settings: {
				foreground: rules.html_tag,
			},
		},
		{
			name: 'HTML Attribute',
			scope: 'entity.other.attribute-name'
			   ,
			settings: {
				foreground: rules.html_attr,
			},
		},
		{
			name: 'HTML Character',
			scope: 'constant.character.entity'
			   ,
			settings: {
				foreground: rules.html_char,
			},
		},

		/**********************/
		/****** JSX HTML ******/
		/**********************/
		{
			name: 'JSX HTML Tag',
			scope: 'entity.name.tag.jsx',
			settings: {
				foreground: rules.jsx_tag,
			},
		},
		{
			name: 'JSX HTML Tag Braces',
			scope: 'punctuation.definition.tag.begin.jsx'
			   + ', punctuation.definition.tag.end.jsx'
			   ,
			settings: {
				foreground: rules.jsx_tag,
			},
		},
		{
			name: 'JSX HTML Attribute',
			scope: 'entity.other.attribute-name.jsx'
			   ,
			settings: {
				foreground: rules.jsx_attr,
			},
		},
		{
			name: 'JSX HTML Character',
			scope: 'constant.character.entity.jsx'
			   ,
			settings: {
				foreground: rules.jsx_char,
			},
		},
		{
			name: 'JSX HTML Keyword',
			scope: 'keyword.operator.assignment.jsx',
			settings: {
				foreground: rules.jsx_keyword,
			},
		},

		/*****************
		 ****** CSS ******
		 *****************/
		{
			name: 'CSS Unquoted String',
			scope: 'variable.parameter.misc.css'
			   ,
			settings: {
				foreground: rules.css_string,
			},
		},
		{
			name: 'CSS Pseudo Class',
			scope: 'entity.other.attribute-name.pseudo-class',
			settings: {
				foreground: rules.css_pseudo,
			},
		},
		{
			name: 'CSS Class',
			scope: 'entity.other.attribute-name.class.css'
			   + ', constant.class.tag',
			settings: {
				foreground: rules.css_class,
			},
		},
		{
			name: 'CSS Tag',
			scope: 'entity.name.tag.css'
			   ,
			settings: {
				foreground: rules.css_tag,
			},
		},
		{
			name: 'CSS At-Rule',
			scope: 'keyword.control.at-keyword'
			   + ', keyword.control.at-rule'
			   ,
			settings: {
				foreground: rules.css_atRule,
			},
		},
		{
			name: 'CSS Media Constant',
			scope: 'support.constant.media',
			settings: {
				foreground: rules.css_media_constant,
			},
		},
		{
			name: 'CSS Property Name',
			scope: 'support.type.property-name'
			   ,
			settings: {
				foreground: rules.css_property,
			},
		},
		{
			name: 'CSS Meta Property Name',
			scope: 'meta.property-name'
			   ,
			settings: {
				foreground: rules.css_meta_property,
			},
		},
		{
			name: 'CSS Property Value',
			scope: 'support.constant.property-value'
			   + ', constant.string'
			   + ', constant.numeric.css'
			   + ', constant.other.color.rgb-value'
			   + ', meta.property-value'
			   ,
			settings: {
				foreground: rules.css_value,
			},
		},
		{
			name: 'CSS Unit',
			scope: 'keyword.other.unit'
			   ,
			settings: {
				foreground: rules.css_unit,
			},
		},
		{
			name: 'CSS Variable',
			scope: 'variable.other.value'
			   + ', variable.other.root'
			   + ', variable.other.sass'
			   + ', sass-script-maps'
			   ,
			settings: {
				foreground: rules.css_variable,
			},
		},
		{
			name: 'CSS Mixin Function',
			scope: 'keyword.control.mixin-shorthand'
			   + ', support.function.name.sass'
			   + ', support.function.css'
			   + ', entity.name.function.sass'
			   ,
			settings: {
				foreground: rules.css_mixin,
			},
		},

		/**********************
		 ****** Markdown ******
		 **********************/
		{
			name: 'Markdown Italic',
			scope: 'markup.italic.markdown'
			   ,
			settings: {
				foreground: rules.md_italic,
				fontStyle: 'italic',
			},
		},
		{
			name: 'Markdown Italic',
			scope: 'markup.bold.markdown'
			   ,
			settings: {
				foreground: rules.md_italic,
				fontStyle: 'bold',
			},
		},

		/******************
		 ****** Diff ******
		 ******************/
		{
			name: 'Diff Inserted',
			scope: 'markup.inserted'
			   ,
			settings: {
				foreground: rules.diff_inserted,
				fontStyle: 'italic',
			},
		},
		{
			name: 'Diff Changed',
			scope: 'markup.changed'
			   ,
			settings: {
				foreground: rules.diff_changed,
				fontStyle: 'italic'
			}
		},
		{
			name: 'Diff Deleted',
			scope: 'markup.deleted'
			   ,
			settings: {
				foreground: rules.diff_deleted,
				fontStyle: 'italic',
			},
		},

		/******************
		 ****** Jade ******
		 ******************/
		{
			name: 'Jade class',
			scope: 'constant.class.jade'
			   ,
			settings: {
				foreground: rules.jade_class,
			},
		},

		/*
		 * TeX, LaTeX
		 */
		{
			name: 'LaTeX function punctuation',
			scope: 'text.tex meta.function punctuation.definition'
			   + ', text.tex punctuation.definition.brackets'
			   + ', text.tex punctuation.definition.group.brace'
			   + ', text.tex punctuation.definition.group.bracket'
			   ,
			settings: {
				foreground: rules.tex_function_punctuation,
			},
		},
		{
			name: 'LaTeX function',
			scope: 'text.tex support.function'
			    + ', text.tex punctuation.section'
			    ,
			settings: {
				foreground: rules.tex_function,
			},
		},
		{
			name: 'LaTeX function',
			scope: 'text.tex variable.parameter'
			    + ', text.tex constant.other.reference'
			    ,
			settings: {
				foreground: rules.tex_parameter,
			},
		},
		{
			name: 'LaTeX italic text',
			scope: 'text.tex markup.italic'
			   ,
			settings: {
				fontStyle: 'italic',
			},
		},
		{
			name: 'LaTeX section',
			scope: 'text.tex entity.name.section'
			   ,
			settings: {
				fontStyle: 'bold',
			},
		},
		{
			name: 'LaTeX keyword',
			scope: 'text.tex keyword.control'
			   + ', text.tex keyword.control punctuation'
			   + ', text.tex meta.definition.label'
			   + ', text.tex meta.definition.label punctuation.definition'
			   + ', text.tex meta.definition.label punctuation.definition.arguments.begin'
			   + ', text.tex meta.definition.label punctuation.definition.arguments.end'
			   + ', text.tex meta.reference.label punctuation'
			   + ', text.tex meta.reference.label punctuation.definition.arguments.begin'
			   + ', text.tex meta.reference.label punctuation.definition.arguments.end'
			   + ', text.tex meta.reference.label punctuation.definition.keyword'
			   + ', text.tex meta.function.input punctuation.definition.backslash'
			   + ', text.tex meta.function.include punctuation.definition.backslash'
			   ,
			settings: {
				foreground: rules.tex_label,
			},
		},
	];
};