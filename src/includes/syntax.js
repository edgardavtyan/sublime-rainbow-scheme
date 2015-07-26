module.exports.load = function(rules) {
  return [
    {
      settings: {
        caret: rules.editor_caret,
        foreground: rules.editor_foreground,
        background: rules.editor_background,
        selection: rules.editor_selection,
        lineHighlight: rules.editor_lineHighlight
      }
    },
    {
      name: 'Comments',
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: rules.base_comment
      }
    },
    {
      name: 'String',
      scope: 'string, punctuation.definition.string',
      settings: {
        foreground: rules.base_string
      }
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: rules.base_number
      }
    },
    {
      name: 'Punctuation',
      scope: 'meta.delimiter,' +
             'meta.brace,' +
             'meta.group.braces.round.function.arguments,' +
             'punctuation.definition.parameters,' +
             'punctuation.terminator,' +
             'punctuation.separator,' +
             'punctuation.section,' +
             'comment.punctuation.comma.sass,' +
             'source.sass,' +
             'source.scss',
      settings: {
        foreground: rules.base_punctuation
      }
    },
    {
      name: 'Constant',
      scope: 'variable.other.constant,' +
             'constant.other.java',
      settings: {
        foreground: rules.base_constant
      }
    },
    {
      name: 'Operator',
      scope: 'keyword.operator',
      settings: {
        foreground: rules.base_operator
      }
    },
    {
      name: 'Keyword',
      scope: 'storage.modifier,' +
             'storage.type.js,' +
             'storage.type.function.js,' +
             'constant.language,' +
             'keyword.control,' +
             'keyword.other,' +
             'variable.language.this,' +
             'variable.language.self',
      settings: {
        foreground: rules.base_keyword
      }
    },
    {
      name: 'Function',
      scope: 'support.function,' +
             'entity.name.function,' +
             'meta.function-call.method.with-arguments,' +
             'meta.function-call.method.without-arguments',
      settings: {
        foreground: rules.base_function
      }
    },
    {
      name: 'Property',
      scope: 'meta.property,' +
             'variable.language.prototype,' +
             'support.type.object.module',
      settings: {
        foreground: rules.base_property
      }
    },
    {
      name: 'Class',
      scope: 'support.class,' +
             'storage.modifier.import,' +
             'storage.modifier.package,' +
             'storage.type,' +
             'entity.name.type.class,' +
             'entity.other.inherited-class',
      settings: {
        foreground: rules.base_class
      }
    },
    {
      name: 'HTML Doctype',
      scope: 'meta.tag.sgml.doctype',
      settings: {
        foreground: rules.html_doctype
      }
    },
    {
      name: 'HTML Tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: rules.html_tag
      }
    },
    {
      name: 'HTML Tag Braces',
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: rules.html_tag
      }
    },
    {
      name: 'HTML Attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: rules.html_attr
      }
    },
    {
      name: 'HTML Character',
      scope: 'constant.character.entity',
      settings: {
        foreground: rules.html_char
      }
    },
    {
      name: 'CSS Unquoted String',
      scope: 'variable.parameter.misc.css',
      settings: {
        foreground: rules.css_string
      }
    },
    {
      name: 'CSS Pseudo Class',
      scope: 'entity.other.attribute-name.pseudo-class',
      settings: {
        foreground: rules.css_pseudo
      }
    },
    {
      name: 'CSS Class',
      scope: 'entity.other.attribute-name.class.css,' +
             'constant.class.tag',
      settings: {
        foreground: rules.css_class
      }
    },
    {
      name: 'CSS Tag',
      scope: 'entity.name.tag.css',
      settings: {
        foreground: rules.css_tag
      }
    },
    {
      name: 'CSS At-Rule',
      scope: 'keyword.control.at-keyword,' +
             'keyword.control.at-rule',
      settings: {
        foreground: rules.css_atRule
      }
    },
    {
      name: 'CSS Media Constant',
      scope: 'support.constant.media',
      settings: {
        foreground: rules.css_media_constant
      }
    },
    {
      name: 'CSS Property Name',
      scope: 'support.type.property-name',
      settings: {
        foreground: rules.css_property
      }
    },
    {
      name: 'CSS Meta Property Name',
      scope: 'meta.property-name',
      settings: {
        foreground: rules.css_meta_property
      }
    },
    {
      name: 'CSS Property Value',
      scope: 'support.constant.property-value,' +
             'constant.string,' +
             'constant.numeric.css,' +
             'constant.other.color.rgb-value,' +
             'meta.property-value',
      settings: {
        foreground: rules.css_value
      }
    },
    {
      name: 'CSS Unit',
      scope: 'keyword.other.unit',
      settings: {
        foreground: rules.css_unit
      }
    },
    {
      name: 'CSS Variable',
      scope: 'variable.other.value,' +
             'variable.other.root,' +
             'variable.other.sass,' +
             'sass-script-maps',
      settings: {
        foreground: rules.css_variable
      }
    },
    {
      name: 'CSS Mixin Function',
      scope: 'keyword.control.mixin-shorthand,' +
             'support.function.name.sass,' +
             'support.function.css,' +
             'entity.name.function.sass',
      settings: {
        foreground: rules.css_mixin
      }
    },
  ];
};