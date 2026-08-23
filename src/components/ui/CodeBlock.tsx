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
  | 'rust'
  | 'php'
  | 'sql'
  | 'mips'
  | 'dax'
  | 'mdx'
  | 'html'
  | 'css';

/** Token type produced by a tokenizer, paired with its raw text. */
type Token = { type: TokenType; text: string };

interface LangConfig {
  label: string;
  keywords: Set<string>;
  builtins: Set<string>;
  lineComment: string;
  hasBlockComment: boolean;
  hasTemplateLiteral: boolean;
}

/** Linguagens cujo destaque vem do tokenizador genérico de palavras. */
type WordLanguage = Exclude<Language, 'html' | 'css'>;

const LANG_CONFIGS: Record<WordLanguage, LangConfig> = {
  mips: {
    label: 'MIPS Assembly',
    keywords: new Set([
      // instruções aritméticas e lógicas
      'add', 'addi', 'addu', 'addiu', 'sub', 'subu', 'mul', 'mult', 'div',
      'and', 'andi', 'or', 'ori', 'xor', 'xori', 'nor', 'not', 'neg',
      'sll', 'srl', 'sra', 'sllv', 'srlv',
      // memória e movimentação
      'lw', 'lh', 'lb', 'lhu', 'lbu', 'sw', 'sh', 'sb', 'li', 'la', 'lui', 'move',
      // comparação e desvio
      'slt', 'slti', 'sltu', 'sltiu', 'beq', 'bne', 'bgt', 'blt', 'bge', 'ble',
      'beqz', 'bnez', 'j', 'jal', 'jr', 'jalr',
      // ponto flutuante
      'l.s', 'mov.s', 'mul.s', 'div.s', 'add.s', 'sub.s',
      // sistema
      'syscall', 'nop',
    ]),
    builtins: new Set([
      // registradores
      '$zero', '$at', '$v0', '$v1', '$a0', '$a1', '$a2', '$a3',
      '$t0', '$t1', '$t2', '$t3', '$t4', '$t5', '$t6', '$t7', '$t8', '$t9',
      '$s0', '$s1', '$s2', '$s3', '$s4', '$s5', '$s6', '$s7',
      '$k0', '$k1', '$gp', '$sp', '$fp', '$ra',
      '$f0', '$f1', '$f2', '$f3', '$f12', '$f31',
      // diretivas (sem o ponto: o tokenizador quebra a palavra no '.')
      'data', 'text', 'globl', 'word', 'half', 'byte', 'float', 'double',
      'ascii', 'asciiz', 'space', 'align',
    ]),
    lineComment: '#',
    hasBlockComment: false,
    hasTemplateLiteral: false,
  },
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
  // SQL, DAX e MDX não têm palavras reservadas sensíveis a maiúsculas, mas o
  // tokenizador compara o texto exato — por isso os conjuntos abaixo usam
  // MAIÚSCULAS, que é a convenção do material da disciplina (e do DWAULA.ddl).
  sql: {
    label: 'SQL',
    keywords: new Set([
      'SELECT', 'FROM', 'WHERE', 'GROUP', 'BY', 'ORDER', 'HAVING', 'JOIN',
      'INNER', 'LEFT', 'RIGHT', 'FULL', 'OUTER', 'ON', 'AS', 'AND', 'OR',
      'NOT', 'IN', 'IS', 'NULL', 'LIKE', 'BETWEEN', 'EXISTS', 'UNION', 'ALL',
      'DISTINCT', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
      'CREATE', 'ALTER', 'DROP', 'TABLE', 'VIEW', 'INDEX', 'SEQUENCE',
      'MATERIALIZED', 'PRIMARY', 'FOREIGN', 'KEY', 'REFERENCES', 'CONSTRAINT',
      'UNIQUE', 'CHECK', 'DEFAULT', 'ADD', 'COLUMN', 'PARTITION', 'RANGE',
      'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'WITH', 'ASC', 'DESC',
      'TABLESPACE', 'START', 'INCREMENT', 'NOCACHE', 'REFRESH', 'ENABLE',
      'QUERY', 'REWRITE', 'BUILD', 'IMMEDIATE', 'LESS', 'THAN', 'VALUE',
    ]),
    builtins: new Set([
      'SUM', 'COUNT', 'AVG', 'MIN', 'MAX', 'COALESCE', 'NVL', 'ROUND',
      'TRUNC', 'TO_DATE', 'TO_CHAR', 'SYSDATE', 'CAST', 'NUMBER', 'VARCHAR2',
      'DATE', 'CHAR', 'INTEGER', 'DECIMAL',
    ]),
    lineComment: '--',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  dax: {
    label: 'DAX',
    keywords: new Set([
      'VAR', 'RETURN', 'EVALUATE', 'DEFINE', 'MEASURE', 'ORDER', 'BY',
      'IN', 'NOT', 'TRUE', 'FALSE', 'BLANK',
    ]),
    builtins: new Set([
      'CALCULATE', 'CALCULATETABLE', 'FILTER', 'ALL', 'ALLEXCEPT',
      'ALLSELECTED', 'VALUES', 'DISTINCT', 'RELATED', 'RELATEDTABLE',
      'SUM', 'SUMX', 'AVERAGE', 'AVERAGEX', 'COUNT', 'COUNTROWS',
      'DISTINCTCOUNT', 'DIVIDE', 'MIN', 'MAX', 'MINX', 'MAXX', 'MEDIAN',
      'PERCENTILE', 'IF', 'SWITCH', 'SELECTEDVALUE', 'HASONEVALUE',
      'DATEADD', 'DATESYTD', 'TOTALYTD', 'SAMEPERIODLASTYEAR', 'FORMAT',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
  mdx: {
    label: 'MDX',
    keywords: new Set([
      'SELECT', 'FROM', 'WHERE', 'ON', 'COLUMNS', 'ROWS', 'PAGES',
      'WITH', 'MEMBER', 'SET', 'AS', 'NON', 'EMPTY', 'AND', 'OR', 'NOT',
    ]),
    builtins: new Set([
      'Measures', 'CROSSJOIN', 'FILTER', 'ORDER', 'TOPCOUNT', 'BOTTOMCOUNT',
      'DESCENDANTS', 'CHILDREN', 'MEMBERS', 'PARENT', 'CURRENTMEMBER',
      'PREVMEMBER', 'SUM', 'AVG', 'COUNT', 'AGGREGATE', 'HEAD', 'TAIL',
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
  php: {
    label: 'PHP',
    keywords: new Set([
      'function', 'class', 'interface', 'trait', 'extends', 'implements',
      'public', 'private', 'protected', 'static', 'abstract', 'final',
      'const', 'var', 'if', 'else', 'elseif', 'for', 'foreach', 'while',
      'do', 'switch', 'case', 'default', 'break', 'continue', 'return',
      'new', 'clone', 'try', 'catch', 'finally', 'throw', 'echo', 'print',
      'namespace', 'use', 'as', 'instanceof', 'global', 'and', 'or', 'not',
      'true', 'false', 'null', 'this', 'self', 'parent', 'fn', 'match',
      'require', 'require_once', 'include', 'include_once',
    ]),
    builtins: new Set([
      'array', 'count', 'strlen', 'str_replace', 'strtoupper', 'strtolower',
      'implode', 'explode', 'in_array', 'array_push', 'array_map', 'sort',
      'isset', 'empty', 'unset', 'var_dump', 'printf', 'sprintf', 'gettype',
      'intval', 'floatval', 'strval', 'is_int', 'is_string', 'is_array',
      'range', 'abs', 'sqrt', 'pow', 'rand', 'number_format',
    ]),
    lineComment: '//',
    hasBlockComment: true,
    hasTemplateLiteral: false,
  },
};

/**
 * HTML e CSS não têm sintaxe baseada em palavras reservadas como as demais
 * linguagens: o que importa é a estrutura (tag/atributo/valor, seletor/
 * propriedade/valor). Por isso cada um tem seu próprio tokenizador em vez de
 * uma entrada em LANG_CONFIGS.
 */

/** Rótulo exibido no cabeçalho das linguagens de marcação/estilo. */
const MARKUP_LABELS: Record<'html' | 'css', string> = { html: 'HTML', css: 'CSS' };

/**
 * Tags cujo conteúdo é outra linguagem. Usado por `tokenizeHtml` para delegar
 * o miolo ao tokenizador certo em vez de deixá-lo sem destaque.
 */
const EMBEDDED_LANGS: Record<string, (code: string) => Token[]> = {
  script: (code) => tokenize(code, LANG_CONFIGS.javascript),
  style: (code) => tokenizeCss(code),
};

/**
 * Tokeniza HTML destacando comentários, doctype, nomes de tag, nomes de
 * atributo e valores entre aspas. O miolo de <script>/<style> é delegado ao
 * tokenizador da linguagem correspondente; o resto do texto fica sem destaque.
 */
function tokenizeHtml(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // Comentário <!-- ... -->
    if (code.startsWith('<!--', i)) {
      const end = code.indexOf('-->', i + 4);
      const text = end === -1 ? code.slice(i) : code.slice(i, end + 3);
      tokens.push({ type: 'comment', text });
      i += text.length;
      continue;
    }

    // Doctype <!DOCTYPE html>
    if (/^<!/.test(code.slice(i))) {
      const end = code.indexOf('>', i);
      const text = end === -1 ? code.slice(i) : code.slice(i, end + 1);
      tokens.push({ type: 'keyword', text });
      i += text.length;
      continue;
    }

    // Abertura de tag: <nome  ou  </nome
    const openTag = /^<\/?([a-zA-Z][a-zA-Z0-9-]*)/.exec(code.slice(i));
    if (openTag) {
      const punct = openTag[0].slice(0, openTag[0].length - openTag[1].length);
      tokens.push({ type: 'default', text: punct });
      tokens.push({ type: 'function', text: openTag[1] });
      i += openTag[0].length;

      // Atributos até fechar a tag
      while (i < code.length && code[i] !== '>') {
        const attr = /^\s*([a-zA-Z_:][a-zA-Z0-9_.:-]*)/.exec(code.slice(i));
        if (attr) {
          tokens.push({ type: 'default', text: attr[0].slice(0, attr[0].length - attr[1].length) });
          tokens.push({ type: 'builtin', text: attr[1] });
          i += attr[0].length;
          continue;
        }
        if (code[i] === '"' || code[i] === "'") {
          const quote = code[i];
          let j = i + 1;
          while (j < code.length && code[j] !== quote) j++;
          if (j < code.length) j++;
          tokens.push({ type: 'string', text: code.slice(i, j) });
          i = j;
          continue;
        }
        tokens.push({ type: 'default', text: code[i] });
        i++;
      }

      // O miolo de <script>/<style> é outra linguagem: delega ao tokenizador
      // dela para o exemplo de DOM não ficar sem cor nenhuma no meio de blocos
      // coloridos. `>` é consumido aqui porque o corpo começa logo depois.
      const embedded = EMBEDDED_LANGS[openTag[1].toLowerCase()];
      if (embedded && code[i] === '>' && openTag[0][1] !== '/') {
        tokens.push({ type: 'default', text: '>' });
        i++;
        const closing = new RegExp(`</${openTag[1]}\\s*>`, 'i').exec(code.slice(i));
        const bodyEnd = closing ? i + closing.index : code.length;
        const body = code.slice(i, bodyEnd);
        if (body) tokens.push(...embedded(body));
        i = bodyEnd;
      }
      continue;
    }

    // Texto entre tags: consome tudo até o próximo '<' de uma vez. Um token por
    // caractere renderizaria um <span> por letra — DOM desperdiçado e, pior,
    // seleção e cópia do código ficam frágeis, e é código feito para copiar.
    const nextTag = code.indexOf('<', i + 1);
    const end = nextTag === -1 ? code.length : nextTag;
    tokens.push({ type: 'default', text: code.slice(i, end) });
    i = end;
  }

  return tokens;
}

/**
 * Tokeniza CSS destacando comentários, seletores, nomes de propriedade,
 * valores em string, números com unidade e at-rules (@media, @keyframes).
 */
function tokenizeCss(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  // Pilha de blocos abertos. Um booleano não basta: at-rules como @media
  // aninham um nível, e o `}` da regra interna não nos tira do @media. Cada
  // item diz se aquele bloco contém declarações (`prop: valor`) ou outras
  // regras — o corpo de um @media contém seletores, o de uma regra normal
  // contém propriedades.
  const blocks: Array<'declarations' | 'rules'> = [];
  // Uma at-rule condicional (@media, @supports) foi vista e o `{` dela ainda
  // não chegou; o bloco que abrir a seguir contém regras, não declarações.
  let pendingAtRuleBlock = false;
  let afterColon = false;

  const inDeclaration = () => blocks[blocks.length - 1] === 'declarations';

  while (i < code.length) {
    if (code.startsWith('/*', i)) {
      const end = code.indexOf('*/', i + 2);
      const text = end === -1 ? code.slice(i) : code.slice(i, end + 2);
      tokens.push({ type: 'comment', text });
      i += text.length;
      continue;
    }

    const ch = code[i];

    if (ch === '{') {
      blocks.push(pendingAtRuleBlock ? 'rules' : 'declarations');
      pendingAtRuleBlock = false;
      afterColon = false;
      tokens.push({ type: 'default', text: ch });
      i++;
      continue;
    }
    if (ch === '}') {
      // `pop()` em pilha vazia é no-op: CSS malformado (ou recortado no meio)
      // não deve travar o tokenizador num estado impossível.
      blocks.pop();
      afterColon = false;
      tokens.push({ type: 'default', text: ch });
      i++;
      continue;
    }
    if (ch === ':' && inDeclaration()) {
      afterColon = true;
      tokens.push({ type: 'default', text: ch });
      i++;
      continue;
    }
    if (ch === ';') {
      afterColon = false;
      tokens.push({ type: 'default', text: ch });
      i++;
      continue;
    }

    if (ch === '"' || ch === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== ch) j++;
      if (j < code.length) j++;
      tokens.push({ type: 'string', text: code.slice(i, j) });
      i = j;
      continue;
    }

    // At-rule: @media, @keyframes, @font-face…
    const atRule = /^@[a-zA-Z-]+/.exec(code.slice(i));
    if (atRule) {
      // @media/@supports/@keyframes envolvem outras regras; @font-face e afins
      // levam declarações direto no corpo.
      pendingAtRuleBlock = /^@(media|supports|keyframes|layer|container|scope)$/i.test(atRule[0]);
      tokens.push({ type: 'keyword', text: atRule[0] });
      i += atRule[0].length;
      continue;
    }

    // Cor hexadecimal: #fff, #6c63ff, #aabbccdd. Precisa vir antes da regra de
    // número, senão `#6c63ff` se parte em `#` + `6` + `c63ff` (três tokens de
    // três cores diferentes).
    const hex = /^#[0-9a-fA-F]{3,8}\b/.exec(code.slice(i));
    if (hex && [4, 5, 7, 9].includes(hex[0].length)) {
      tokens.push({ type: 'number', text: hex[0] });
      i += hex[0].length;
      continue;
    }

    // Número com unidade opcional: 1.5rem, 100%, 12px, 0
    const num = /^-?\d*\.?\d+(px|rem|em|%|vh|vw|s|ms|deg|fr|ch)?/.exec(code.slice(i));
    if (num && /\d/.test(num[0])) {
      tokens.push({ type: 'number', text: num[0] });
      i += num[0].length;
      continue;
    }

    const word = /^[a-zA-Z_-][a-zA-Z0-9_-]*/.exec(code.slice(i));
    if (word) {
      let type: TokenType;
      if (!inDeclaration()) {
        type = 'function'; // seletor (inclusive dentro de @media)
      } else if (afterColon) {
        type = 'string'; // valor
      } else {
        type = 'builtin'; // propriedade
      }
      tokens.push({ type, text: word[0] });
      i += word[0].length;
      continue;
    }

    tokens.push({ type: 'default', text: ch });
    i++;
  }

  return tokens;
}

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

/** Escolhe o tokenizador certo: markup tem regras próprias, o resto usa LANG_CONFIGS. */
function tokenizeFor(code: string, language: Language): { tokens: Token[]; label: string } {
  if (language === 'html') return { tokens: tokenizeHtml(code), label: MARKUP_LABELS.html };
  if (language === 'css') return { tokens: tokenizeCss(code), label: MARKUP_LABELS.css };
  const lang = LANG_CONFIGS[language];
  return { tokens: tokenize(code, lang), label: lang.label };
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const { tokens, label } = tokenizeFor(code.trim(), language);

  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <div className="flex items-center gap-3 px-4 py-2.5 bg-card border-b border-border">
        {title && <span className="text-text-muted text-xs">{title}</span>}
        <span className={`${title ? 'ml-auto' : ''} text-[10px] font-bold text-accent3 uppercase tracking-widest`}>
          {label}
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
