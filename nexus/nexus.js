export default function (babel) {
  const t = babel.types
  return {
    name: 'transform-nexus-ui',
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name !== 'Text') return
        const tag = t.jSXIdentifier(path.node.arguments[0].value)
        const text = path.node.arguments[1].value

        let open = t.JSXOpeningElement(tag, [])
        open.selfClosing = text == null
        let close = text != null ? t.JSXClosingElement(tag) : null
        path.replaceWith(
          t.ExpressionStatement(t.jSXElement(open, close, [t.jSXText(text)]))
        )
      },
    },
  }
}

/* 
Text('Hey)
*/
