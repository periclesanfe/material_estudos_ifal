import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, ComparisonTable } from '../../../components/sections';
import { codeHashTable } from './snippets';
import { hashConcepts, hashFunctions, collisionMethods } from './blocks';

export default function HashingSection() {

  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Hashing e Tabelas Hash"
        subtitle="Busca em O(1): função hash, colisão e resolução"
        colorClass="text-accent"
      />

      <Subsection title="Conceitos fundamentais" accentClass="text-accent2">
        <ConceptGrid items={hashConcepts} />
      </Subsection>

      <Subsection title="Funções hash" accentClass="text-accent3">
        <PanelList items={hashFunctions} />
      </Subsection>

      <Subsection title="Implementação e TAD Map" accentClass="text-accent4">
        <CodeBlock code={codeHashTable} language="python" />
      </Subsection>

      <Subsection title="Métodos de resolução de colisão" accentClass="text-accent5">
        <ComparisonTable rows={collisionMethods} leftLabel="Como funciona" rightLabel="Problema/característica" />
      </Subsection>

      <HighlightBox title="TAD Map (dicionário)">
        <p>
          Operações: <code>put(key, val)</code>, <code>get(key)</code>, <code>del key</code>, <code>len()</code>,{' '}
          <code>in</code>. Na aula, a classe <code>HashTable</code> nasce com <code>_tamanho = 11</code> e mantém duas
          listas paralelas, <code>_slots</code> (chaves) e <code>_valores</code>. Se <code>put</code> encontra a mesma
          chave já ocupando o slot, ele substitui o valor em vez de inserir de novo.
        </p>
      </HighlightBox>

      <HighlightBox title="Hash de strings e anagramas" accent="var(--color-accent3)">
        <p>
          Somar apenas os <code>ord()</code> dos caracteres faz anagramas colidirem sempre: "cat" e "tac" dão 312, logo o
          mesmo slot. Ponderando cada caractere pela posição (99·1 + 97·2 + 116·3 = 641), "cat" e "tac" passam a cair em
          slots diferentes.
        </p>
      </HighlightBox>

      <HighlightBox title="Quando redimensionar" accent="var(--color-accent5)">
        <p>
          No miniprojeto do gerenciador de eventos, o professor pede o redimensionamento quando o fator de carga fica
          <strong> entre 0,7 e 0,8</strong>: aumenta-se a tabela para um número primo próximo ao dobro do tamanho atual e
          todos os elementos precisam passar por rehashing para entrar na nova tabela.
        </p>
      </HighlightBox>
    </section>
  );
}