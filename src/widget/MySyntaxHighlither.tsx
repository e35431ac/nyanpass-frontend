import { clone } from 'lodash-es';
import { PrismLight as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { myvar } from '../myvar';

SyntaxHighlighter.registerLanguage('json', json);

export default function MySyntaxHighlighter(props: SyntaxHighlighterProps): JSX.Element {
    const innerStr = String(props.children)
    if (innerStr.startsWith("<")) {
        // < 开头的当作 HTML 格式直接输出
        return <div dangerouslySetInnerHTML={{ __html: innerStr }}></div>
    }
    const p = clone(props)
    if (myvar.isDarkMode) {
        p.style = vscDarkPlus
    } else {
        p.style = vs
    }
    p.codeTagProps = {
        style: {
            fontSize: "large",
            lineHeight: "normal",
        }
    }
    const s = new SyntaxHighlighter(p)
    return s as any
}
