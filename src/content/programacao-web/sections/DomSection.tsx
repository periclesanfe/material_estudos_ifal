import HighlightBox from '../../../components/ui/HighlightBox';
import CodeBlock from '../../../components/ui/CodeBlock';
import { SectionHeader, Subsection, ConceptGrid, ColoredPanelList, TheoryBlock } from '../../../components/sections';

export default function DomSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="A API DOM"
        subtitle="O documento como árvore — e como mexer nela em tempo real"
        colorClass="text-accent5"
        badge="Fundamentos"
      />

      <TheoryBlock title="O que é o DOM">
        <p>
          O <strong>DOM</strong> (Document Object Model) é uma interface de programação para documentos
          HTML e XML. Cada parte do documento — elementos, atributos, texto — é representada como um{' '}
          <strong>nó em uma estrutura de árvore</strong>.
        </p>
        <p>
          É essa representação que permite manipular a estrutura e o conteúdo da página{' '}
          <strong>em tempo real</strong>, depois que ela já foi carregada.
        </p>
      </TheoryBlock>

      <HighlightBox title="DOM não é JavaScript" accent="var(--color-accent3)">
        <p>
          O material faz uma distinção que costuma passar batida: a API do DOM fornece um conjunto de
          objetos e métodos para acessar e manipular o conteúdo da página, e{' '}
          <strong>existem implementações dessa API para várias linguagens</strong>.
        </p>
        <p>
          Nos navegadores, o JavaScript é a linguagem usada para acessar o DOM — mas o DOM é uma
          especificação independente, não parte da linguagem. Daí ser possível manipular HTML com Python
          ou Java em ferramentas de scraping e teste.
        </p>
      </HighlightBox>

      <Subsection title="Os quatro tipos de nó" accentClass="text-accent">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            {
              title: 'Nós de ELEMENTO',
              description: 'Representam as tags HTML, como <div> e <p>. São os nós que formam a estrutura.',
              accent: 'accent',
            },
            {
              title: 'Nós de ATRIBUTO',
              description: 'Representam os atributos de um elemento, como id e class.',
              accent: 'accent2',
            },
            {
              title: 'Nós de TEXTO',
              description: 'Representam o conteúdo textual dentro de um elemento.',
              accent: 'accent3',
            },
            {
              title: 'Nós de COMENTÁRIO',
              description: 'Representam os comentários do código HTML — que também fazem parte da árvore.',
              accent: 'accent4',
            },
          ]}
        />
        <CodeBlock
          language="javascript"
          code={`let elementNode = document.getElementById('myElement');
let attributeNode = elementNode.getAttributeNode('class');
let textNode = elementNode.firstChild;`}
        />
      </Subsection>

      <Subsection title="Selecionar elementos" accentClass="text-accent2">
        <ColoredPanelList
          items={[
            { title: 'getElementById', description: 'Seleciona um elemento pelo seu ID — o mais direto quando o id é conhecido.' },
            {
              title: 'querySelector',
              description: 'Seleciona o PRIMEIRO elemento que corresponde a um seletor CSS qualquer.',
            },
            {
              title: 'querySelectorAll',
              description: 'Seleciona TODOS os elementos que correspondem ao seletor CSS.',
            },
          ]}
        />
        <CodeBlock
          language="javascript"
          code={`let element = document.getElementById('header');
let elements = document.querySelectorAll('.item');`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          Os dois <code>querySelector</code> aceitam <strong>qualquer seletor CSS</strong>, não só id e
          classe — o que os torna bem mais flexíveis que os métodos específicos.
        </p>
      </Subsection>

      <Subsection title="Modificar conteúdo e estilo" accentClass="text-accent3">
        <ColoredPanelList
          items={[
            {
              title: 'innerHTML e textContent',
              description:
                'Alteram o conteúdo do elemento. O innerHTML interpreta tags; o textContent trata tudo como texto puro.',
            },
            { title: 'style', description: 'Modifica o estilo diretamente no elemento.' },
            { title: 'classList', description: 'Adiciona ou remove classes CSS — em geral preferível a mexer no style.' },
          ]}
        />
        <CodeBlock
          language="javascript"
          code={`let element = document.getElementById('header');
element.textContent = 'Novo Título';
element.style.color = 'blue';`}
        />
      </Subsection>

      <Subsection title="Criar e remover elementos" accentClass="text-accent4">
        <CodeBlock
          language="javascript"
          code={`let newElement = document.createElement('p');
newElement.textContent = 'Novo Parágrafo';
document.body.appendChild(newElement);`}
        />
        <HighlightBox title="Criar não é inserir" accent="var(--color-accent4)">
          <p>
            O <code>createElement</code> cria o elemento <strong>em memória</strong> — ele ainda não está
            na página. Só o <code>appendChild</code> o insere na árvore e o torna visível.
          </p>
          <p>
            Esquecer o segundo passo é o erro clássico de quem está começando: o código roda sem erro
            algum, e nada aparece na tela.
          </p>
        </HighlightBox>
      </Subsection>

      <Subsection title="Eventos e ações do usuário" accentClass="text-accent">
        <p className="text-text-muted leading-relaxed mb-3">
          Eventos comuns incluem <strong>click</strong>, <strong>mouseover</strong> e{' '}
          <strong>keyup</strong>. Os manipuladores de evento permitem modificar o DOM em resposta às
          ações do usuário — é o que transforma uma página estática em interface.
        </p>
        <CodeBlock
          language="javascript"
          code={`document.getElementById('btn')
  .addEventListener('click', function() {
    alert('Botão clicado!');
  });`}
        />
      </Subsection>
    </section>
  );
}
