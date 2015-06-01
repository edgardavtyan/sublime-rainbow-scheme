$BACK       = '#F6F6F6'
$BACK_DARK  = '#DDDDDD'
$FORE       = '#455A64'
$BLUE_LIGHT = '#4A9ED1'
$BLUE       = '#4C96CA'
$BROWN      = '#795548'
$GRAY       = '#888888'
$GREEN      = '#859900'
$ORANGE     = '#E6762B'
$INDIGO     = '#5C6BC0'
$PURPLE     = '#B8008A'
$RED        = '#DC322F'
$TEAL       = '#2AA198'
$YELLOW     = '#B58900'
$MAGENTA    = '#E62E8A'

module.exports =
    colorSpaceName: 'sRGB'
    gutterSettings:
        divider:             $GRAY
        foreground:          $FORE
        selectionForeground: $GRAY

    name:          'Deep Blue See'
    semanticClass: 'theme.dark.deep_blue_see'
    settings: [
        settings:
            foreground: $FORE
            background: $BACK
            selection:  $BACK_DARK
            lineHighlight: $BACK_DARK
    ,

        name: 'Comments'
        scope: 'comment,
                punctuation.definition.comment'
        settings:
            foreground: $GRAY
    ,

        name: 'String'
        scope: 'string,
                punctuation.definition.string'
        settings:
            foreground: $GREEN
    ,

        name: 'Number',
        scope: 'constant.numeric',
        settings:
            foreground: $YELLOW
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
            foreground: $GRAY
    ,

        name: 'Constant',
        scope: 'variable.other.constant',
        settings:
            foreground: $FORE
    ,

        name: 'Operator',
        scope: 'keyword.operator',
        settings:
            foreground: $PURPLE
    ,

        name: 'Keyword',
        scope: 'storage.type,
                constant.language,
                keyword.control,
                variable.language.this,
                variable.language.self',
        settings:
            foreground: $PURPLE
    ,

        name: 'Function'
        scope: 'entity.name.function,
                support.function,
                meta.function-call.with-arguments,
                meta.function-call.without-arguments'
        settings:
            foreground: $BLUE
    ,

        name: 'Property',
        scope: 'meta.property,
                variable.language.prototype,
                support.type.object.module',
        settings:
            foreground: $BLUE
    ,

        name: 'Class',
        scope: 'support.class',
        settings:
            foreground: $TEAL
    ,

        name: 'HTML Doctype'
        scope: 'meta.tag.sgml.doctype'
        settings:
            foreground: $GRAY
    ,

        name: 'HTML Tag'
        scope: 'entity.name.tag'
        settings:
            foreground: $INDIGO
    ,

        name: 'HTML Tag Braces'
        scope: 'punctuation.definition.tag'
        settings:
            foreground: $INDIGO
    ,

        name: 'HTML Attribute'
        scope: 'entity.other.attribute-name.tag,
                entity.other.attribute-name.html'
        settings:
            foreground: $YELLOW
    ,

        name: 'HTML Character'
        scope: 'constant.character.entity'
        settings:
            foreground: $TEAL

    ,

        name: 'CSS Pseudo Class'
        scope: 'entity.other.attribute-name.pseudo-class'
        settings:
            foreground: $BLUE_LIGHT
    ,

        name: 'CSS Class'
        scope: 'entity.other.attribute-name.class.css,
                constant.class.tag'
        settings:
            foreground: $INDIGO
    ,

        name: 'CSS At-Rule'
        scope: 'keyword.control.at-keyword,
                keyword.control.at-rule'
        settings:
            foreground: $PURPLE
    ,

        name: 'CSS Property Name'
        scope: 'support.type.property-name'
        settings:
            foreground: $RED
    ,

        name: 'CSS Property Value'
        scope: 'support.constant.property-value,
                constant.string,
                constant.numeric.css,
                constant.other.color.rgb-value'
        settings:
            foreground: $TEAL
    ,

        name: 'CSS Unit'
        scope: 'keyword.other.unit'
        settings:
            foreground: $TEAL
    ,

        name: 'CSS Variable'
        scope: 'variable.other.value,
                variable.other.root,
                variable.other.sass'
        settings:
            foreground: $YELLOW
    ,

        name: 'CSS Mixin Function'
        scope: 'keyword.control.mixin-shorthand,
                support.function.name.sass,
                support.function.css,
                entity.name.function.sass'
        settings:
            foreground: $BLUE
    ,

        name: 'CSS Control'
        scope: 'keyword.control.untitled'
        settings:
            foreground: $ORANGE
    ,

        name: 'CSS Symbol'
        scope: 'entity.name.tag.css.sass.symbol'
        settings:
            foreground: $INDIGO
    ,

        name: 'SQL Keyword'
        scope: 'keyword.other'
        settings:
            foreground: $BLUE
    ,

        name: 'SQL Storage Modifier'
        scope: 'storage.modifier'
        settings:
            foreground: $YELLOW
    ,

        name: 'INI KEYWORD'
        scope: 'keyword.name.ini'
        settings:
            foreground: $ORANGE
    ,

        name: 'INI VALUE'
        scope: 'string.name.value.ini'
        settings:
            foreground: $TEAL
    ,

        name: 'INI SECTION'
        scope: 'entity.section.ini'
        settings:
            foreground: $GREEN
    ]
