$fore = '#444444'
$back = '#F6F6F6'
$back_highlight = '#DDDDDD'
$blue = '#0066FF'
$gray = '#888888'
$green = '#669900'
$orange = '#CC6600'
$purple = '#B8008A'
$red = '#E04644'
$teal = '#2AA198'
$yellow = '#B58900'
$yellow_dim = '#D6AD33'

$comment = $gray
$string = $green_strong
$number  = $green
$punctuation = $gray
$constant = $orange
$operator = $blue
$keyword = $blue
$function = $red
$property = $red
$class = $teal

$html_doctype = $orange
$html_tag = $blue
$html_attr = $purple
$html_char = $yellow

$css_class = $html_tag
$css_tag = $html_tag
$css_pseudo = $html_tag
$css_atRule = $yellow
$css_property = $purple
$css_value = $orange
$css_unit = $css_value
$css_variable = $teal
$css_mixin = $yellow_dim


module.exports =
    colorSpaceName: 'sRGB'
    gutterSettings:
        divider:             $back_highlight
        foreground:          $fore
        selectionForeground: $back_highlight

    name:          'Deep Blue See'
    semanticClass: 'theme.dark.deep_blue_see'
    settings: [
        settings:
            caret: $yellow
            foreground: $fore
            background: $back
            selection:  $back_highlight
            lineHighlight: $back_highlight
    ,

        name: 'Comments'
        scope: 'comment,
                punctuation.definition.comment'
        settings:
            foreground: $comment
    ,

        name: 'String'
        scope: 'string,
                punctuation.definition.string'
        settings:
            foreground: $string
    ,

        name: 'Number',
        scope: 'constant.numeric',
        settings:
            foreground: $number
    ,

        name: 'Punctuation',
        scope: 'meta.delimiter,
                meta.brace,
                meta.group.braces.round.function.arguments,
                punctuation.terminator,
                punctuation.definition,
                punctuation.separator,
                comment.punctuation.comma.sass,
                source.sass,
                source.scss',
        settings:
            foreground: $punctuation
    ,

        name: 'Constant',
        scope: 'variable.other.constant,
                constant.other.java',
        settings:
            foreground: $constant
    ,

        name: 'Operator',
        scope: 'keyword.operator',
        settings:
            foreground: $operator
    ,

        name: 'Keyword',
        scope: 'storage.modifier,
                storage.type.js,
                storage.type.function.js,
                constant.language,
                keyword.control,
                keyword.other,
                variable.language.this,
                variable.language.self',
        settings:
            foreground: $keyword
    ,

        name: 'Function'
        scope: 'support.function,
                entity.name.function.java,
                meta.function-call.method.with-arguments,
                meta.function-call.method.without-arguments'
        settings:
            foreground: $function
    ,

        name: 'Property',
        scope: 'meta.property,
                variable.language.prototype,
                support.type.object.module',
        settings:
            foreground: $property
    ,

        name: 'Class',
        scope: 'support.class,
                storage.modifier.import,
                storage.modifier.package,
                storage.type,
                entity.name.type.class,
                entity.other.inherited-class',
        settings:
            foreground: $class
    ,

        name: 'HTML Doctype'
        scope: 'meta.tag.sgml.doctype'
        settings:
            foreground: $html_doctype
    ,

        name: 'HTML Tag'
        scope: 'entity.name.tag'
        settings:
            foreground: $html_tag
    ,

        name: 'HTML Tag Braces'
        scope: 'punctuation.definition.tag'
        settings:
            foreground: $html_tag
    ,

        name: 'HTML Attribute'
        scope: 'entity.other.attribute-name.tag,
                entity.other.attribute-name.html'
        settings:
            foreground: $html_attr
    ,

        name: 'HTML Character'
        scope: 'constant.character.entity'
        settings:
            foreground: $html_char

    ,

        name: 'CSS Pseudo Class'
        scope: 'entity.other.attribute-name.pseudo-class'
        settings:
            foreground: $css_pseudo
    ,

        name: 'CSS Class'
        scope: 'entity.other.attribute-name.class.css,
                constant.class.tag'
        settings:
            foreground: $css_class
    ,

        name: 'CSS Tag'
        scope: 'entity.name.tag.css'
        settings:
            foreground: $css_tag
    ,

        name: 'CSS At-Rule'
        scope: 'keyword.control.at-keyword,
                keyword.control.at-rule'
        settings:
            foreground: $css_atRule
    ,

        name: 'CSS Property Name'
        scope: 'support.type.property-name'
        settings:
            foreground: $css_property
    ,

        name: 'CSS Property Value'
        scope: 'support.constant.property-value,
                constant.string,
                constant.numeric.css,
                constant.other.color.rgb-value'
        settings:
            foreground: $css_value
    ,

        name: 'CSS Unit'
        scope: 'keyword.other.unit'
        settings:
            foreground: $css_unit
    ,

        name: 'CSS Variable'
        scope: 'variable.other.value,
                variable.other.root,
                variable.other.sass,
                sass-script-maps'
        settings:
            foreground: $css_variable
    ,

        name: 'CSS Mixin Function'
        scope: 'keyword.control.mixin-shorthand,
                support.function.name.sass,
                support.function.css,
                entity.name.function.sass'
        settings:
            foreground: $css_mixin
    ]
