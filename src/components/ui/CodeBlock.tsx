import type { CSSProperties } from 'react';

type TokenType = 'keyword' | 'string' | 'comment' | 'number' | 'builtin' | 'function' | 'default';

export type Language =
  | 'python'
  | 'javascript'
  | 'typescript'
  | 'java'
  | 'c'
  | 'cpp'
  | 'go'
  | 'rust';

interface LangConfig {
  label: string;
  keywords: Set<string>;
  builtins: Set<string>;
  lineComment: string;
  hasBlockComment: boolean;
  hasTemplateLiteral: boolean;
}

const LANG_CONFIGS: Record<Language, LangConfig> = {
  python: {
    label: 'Python',
    keywords: new Set([
      'def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return',
      'import', 'from', 'in', 'not', 'and', 'or', 'True', 'False', 'None',
      'pass', 'break', 'continue', 'lambda', 'with', 'as', 'try', 'except',
      'finally', 'raise', 'yield', 'global', 'nonlocal', 'del', 'assert', 'is',
    ]),
    builtins: new Set([
      'self', 'print', 'input', 'len', 'range', 'type', 'int', 'float', 'str',
      'bool', 'list', 'dict', 'tuple', 'set', 'abs', 'sum', 'min', 'max',
      'round', 'enumerate', 'zip', 'map', 'filter', 'sorted', 'reversed',
      'isinstance', 'super', 'open', 'ord', 'chr',
    ]),
    lineComment: '#',
    hasBlockComment: false,
    hasTemplateLiteral: false,
  },
  javascript: {
    label: 'JavaScript',
    keywords: new Set([
      'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for',
      'while', 'class', 'import', 'export', 'from', 'new', 'this', 'typeof',
      'instanceof', 'try', 'catch', 'finally', 'throw', 'async', 'await',
      'of', 'in', 'true', 'false', 'null', 'undefined', 'switch', 'case',
      'break', 'continue', 'do', 'delete', 'void', 'yield', 'default',
      'extends', 'super', 'static', 'get', 'set',
    ]),
    builtins: new Set([
      'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number',
      'Boolean', 'Promise', 'Error', 'Map', 'Set', 'Date', 'RegExp',
      'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'setTimeout',
      'clearTimeout', 'setInterval', 'clearInterval', 'fetch',
      'document', 'window', 'process', 'require', 'module', 'exports',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: true,
  },
  typescript: {
    label: 'TypeScript',
    keywords: new Set([
      'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for',
      'while', 'class', 'import', 'export', 'from', 'new', 'this', 'typeof',
      'instanceof', 'try', 'catch', 'finally', 'throw', 'async', 'await',
      'of', 'in', 'true', 'false', 'null', 'undefined', 'switch', 'case',
      'break', 'continue', 'do', 'delete', 'void', 'yield', 'default',
      'extends', 'super', 'static', 'get', 'set', 'type', 'interface',
      'enum', 'namespace', 'declare', 'abstract', 'readonly', 'as',
      'keyof', 'infer', 'never', 'unknown', 'any',
    ]),
    builtins: new Set([
      'console', 'Math', 'JSON', 'Object', 'Array', 'String', 'Number',
      'Boolean', 'Promise', 'Error', 'Map', 'Set', 'Date', 'RegExp',
      'parseInt', 'parseFloat', 'isNaN', 'isFinite', 'setTimeout',
      'clearTimeout', 'setInterval', 'clearInterval', 'fetch',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: true,
  },
  java: {
    label: 'Java',
    keywords: new Set([
      'public', 'private', 'protected', 'static', 'void', 'class', 'interface',
      'extends', 'implements', 'new', 'return', 'if', 'else', 'for', 'while',
      'try', 'catch', 'finally', 'throw', 'throws', 'import', 'package',
      'this', 'super', 'final', 'abstract', 'synchronized', 'transient',
      'volatile', 'native', 'enum', 'instanceof', 'true', 'false', 'null',
      'switch', 'case', 'break', 'continue', 'do', 'default',
      'int', 'long', 'double', 'float', 'char', 'boolean', 'byte', 'short',
    ]),
    builtins: new Set([
      'System', 'String', 'Integer', 'Long', 'Double', 'Float', 'Boolean',
      'Object', 'Math', 'ArrayList', 'HashMap', 'List', 'Map', 'Set',
      'StringBuilder', 'Exception', 'RuntimeException', 'Thread', 'Runnable',
      'out', 'err', 'println', 'print', 'printf',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  c: {
    label: 'C',
    keywords: new Set([
      'int', 'char', 'float', 'double', 'void', 'if', 'else', 'for', 'while',
      'return', 'struct', 'union', 'enum', 'typedef', 'const', 'static',
      'auto', 'register', 'extern', 'break', 'continue', 'switch', 'case',
      'default', 'do', 'goto', 'sizeof', 'unsigned', 'signed', 'long', 'short',
    ]),
    builtins: new Set([
      'printf', 'scanf', 'malloc', 'free', 'calloc', 'realloc', 'strlen',
      'strcpy', 'strcat', 'strcmp', 'memcpy', 'memset', 'fopen', 'fclose',
      'fprintf', 'fscanf', 'NULL', 'EOF', 'stdin', 'stdout', 'stderr',
      'include', 'define', 'ifdef', 'ifndef', 'endif', 'pragma',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  cpp: {
    label: 'C++',
    keywords: new Set([
      'int', 'char', 'float', 'double', 'void', 'if', 'else', 'for', 'while',
      'return', 'struct', 'class', 'union', 'enum', 'typedef', 'const', 'static',
      'auto', 'register', 'extern', 'break', 'continue', 'switch', 'case',
      'default', 'do', 'goto', 'sizeof', 'unsigned', 'signed', 'long', 'short',
      'public', 'private', 'protected', 'virtual', 'override', 'final',
      'namespace', 'using', 'template', 'typename', 'new', 'delete',
      'try', 'catch', 'throw', 'nullptr', 'true', 'false', 'this',
      'inline', 'explicit', 'friend', 'operator', 'mutable', 'constexpr',
    ]),
    builtins: new Set([
      'cout', 'cin', 'cerr', 'endl', 'string', 'vector', 'map', 'set',
      'pair', 'tuple', 'array', 'list', 'queue', 'stack', 'priority_queue',
      'sort', 'find', 'begin', 'end', 'make_pair', 'make_tuple',
      'printf', 'scanf', 'malloc', 'free', 'NULL',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  go: {
    label: 'Go',
    keywords: new Set([
      'func', 'package', 'import', 'var', 'const', 'type', 'struct',
      'interface', 'map', 'chan', 'go', 'defer', 'select', 'range',
      'for', 'if', 'else', 'return', 'switch', 'case', 'break',
      'continue', 'fallthrough', 'goto', 'true', 'false', 'nil',
    ]),
    builtins: new Set([
      'make', 'new', 'len', 'cap', 'append', 'copy', 'delete', 'close',
      'panic', 'recover', 'print', 'println', 'error', 'string', 'int',
      'int8', 'int16', 'int32', 'int64', 'uint', 'uint8', 'uint16',
      'uint32', 'uint64', 'float32', 'float64', 'bool', 'byte', 'rune',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  rust: {
    label: 'Rust',
    keywords: new Set([
      'fn', 'let', 'mut', 'const', 'static', 'struct', 'enum', 'impl',
      'trait', 'use', 'mod', 'pub', 'crate', 'super', 'self', 'Self',
      'if', 'else', 'loop', 'while', 'for', 'in', 'return', 'break',
      'continue', 'match', 'where', 'type', 'true', 'false', 'move',
      'ref', 'as', 'unsafe', 'extern', 'dyn', 'async', 'await', 'box',
    ]),
    builtins: new Set([
      'println', 'print', 'eprintln', 'eprint', 'vec', 'Some', 'None',
      'Ok', 'Err', 'String', 'Vec', 'Box', 'Rc', 'Arc', 'Option',
      'Result', 'panic', 'assert', 'assert_eq', 'assert_ne', 'todo',
      'unimplemented', 'unreachable', 'dbg', 'format',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
};

function tokenize(code: string, lang: LangConfig) {
  const tokens: Array<{ type: TokenType; text: string }> = [];
  let i = 0;

  while (i < code.length) {
    const ch = code[i];

    if (lang.hasBlockComment && ch === '/' && code[i + 1] === '*') {
      const end = code.indexOf('*/', i + 2);
      const text = end === -1 ? code.slice(i) : code.slice(i, end + 2);
      tokens.push({ type: 'comment', text });
      i += text.length;
      continue;
    }

    if (code.slice(i, i + lang.lineComment.length) === lang.lineComment) {
      const end = code.indexOf('\n', i);
      const text = end === -1 ? code.slice(i) : code.slice(i, end);
      tokens.push({ type: 'comment', text });
      i += text.length;
      continue;
    }

    if (lang.hasTemplateLiteral && ch === '`') {
      let j = i + 1;
      while (j < code.length && code[j] !== '`') {
        if (code[j] === '\\') j++;
        j++;
      }
      if (j < code.length) j++;
      tokens.push({ type: 'string', text: code.slice(i, j) });
      i = j;
      continue;
    }

    if (ch === '"' || ch === "'") {
      const q = ch;
      let j = i + 1;
      if (code.slice(i, i + 3) === q.repeat(3)) {
        j = i + 3;
        while (j < code.length && code.slice(j, j + 3) !== q.repeat(3)) j++;
        j = Math.min(j + 3, code.length);
      } else {
        while (j < code.length && code[j] !== q && code[j] !== '\n') {
          if (code[j] === '\\') j++;
          j++;
        }
        if (j < code.length && code[j] === q) j++;
      }
      tokens.push({ type: 'string', text: code.slice(i, j) });
      i = j;
      continue;
    }

    if (/[0-9]/.test(ch)) {
      let j = i;
      if (code[i] === '0' && (code[i + 1] === 'x' || code[i + 1] === 'X')) {
        j += 2;
        while (j < code.length && /[0-9a-fA-F]/.test(code[j])) j++;
      } else {
        while (j < code.length && /[0-9]/.test(code[j])) j++;
        if (code[j] === '.' && /[0-9]/.test(code[j + 1] ?? '')) {
          j++;
          while (j < code.length && /[0-9]/.test(code[j])) j++;
        }
        if (code[j] === 'e' || code[j] === 'E') {
          j++;
          if (code[j] === '+' || code[j] === '-') j++;
          while (j < code.length && /[0-9]/.test(code[j])) j++;
        }
      }
      tokens.push({ type: 'number', text: code.slice(i, j) });
      i = j;
      continue;
    }

    if (/[a-zA-Z_$]/.test(ch)) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      let type: TokenType;
      if (lang.keywords.has(word)) {
        type = 'keyword';
      } else if (lang.builtins.has(word)) {
        type = 'builtin';
      } else if (code[j] === '(') {
        type = 'function';
      } else {
        type = 'default';
      }
      tokens.push({ type, text: word });
      i = j;
      continue;
    }

    tokens.push({ type: 'default', text: ch });
    i++;
  }

  return tokens;
}

const TOKEN_STYLES: Record<TokenType, CSSProperties> = {
  keyword:  { color: 'var(--color-accent)' },
  string:   { color: 'var(--color-accent5)' },
  comment:  { color: 'var(--color-text-muted)', fontStyle: 'italic' },
  number:   { color: 'var(--color-accent4)' },
  builtin:  { color: 'var(--color-accent3)' },
  function: { color: 'var(--color-accent2)' },
  default:  {},
};

interface CodeBlockProps {
  code: string;
  language: Language;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const lang = LANG_CONFIGS[language];
  const tokens = tokenize(code.trim(), lang);

  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-card border-b border-border">
        {title && <span className="text-text-muted text-xs">{title}</span>}
        <span className={`${title ? 'ml-auto' : ''} text-[10px] font-bold text-accent3 uppercase tracking-widest`}>
          {lang.label}
        </span>
      </div>
      <pre
        className="p-4 overflow-x-auto text-xs md:text-sm leading-relaxed"
        style={{
          background: 'var(--color-bg)',
          fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, 'Courier New', monospace",
        }}
      >
        {tokens.map((token, i) => (
          <span key={i} style={TOKEN_STYLES[token.type]}>{token.text}</span>
        ))}
      </pre>
    </div>
  );
}
