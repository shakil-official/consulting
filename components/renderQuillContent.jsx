import parse, { domToReact } from "html-react-parser"

export function renderQuillContent(html) {
    // Recursive replace function
    const replaceDomNode = (domNode) => {
        if (!domNode?.name) return

        const children = domToReact(domNode.children || [], { replace: replaceDomNode })

        switch (domNode.name) {
            case "ul":
            case "ol":
                return <div className="space-y-1 mb-2">{children}</div>
            case "li":
                return (
                    <div className="flex items-start text-xs text-gray-600">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        <span>{children}</span>
                    </div>
                )
            case "p":
                return <p className="text-xs text-gray-600 mb-1">{children}</p>
            case "strong":
                return <strong>{children}</strong>
            case "em":
                return <em>{children}</em>
            case "br":
                return <br />
            case "a":
                return (
                    <a
                        href={domNode.attribs?.href}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                )
            default:
                return children
        }
    }

    return parse(html, { replace: replaceDomNode })
}
