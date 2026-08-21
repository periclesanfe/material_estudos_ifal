import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, ConceptGrid, PanelList, TheoryBlock, ComparisonTable, ExampleBox } from '../../../components/sections';

export default function CasosUsoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Modelagem de Casos de Uso"
        subtitle="Atores, casos de uso e a especificação detalhada que vira contrato de implementação"
        colorClass="text-accent"
      />

      <TheoryBlock title="O Modelo de Casos de Uso (MCU)">
        <p>
          O MCU representa as <strong>funcionalidades externamente observáveis</strong> do sistema e
          os elementos externos que interagem com ele. Serve como <strong>comunicação</strong> entre
          clientes, usuários e desenvolvedores sobre a funcionalidade esperada — e como{' '}
          <strong>contrato de implementação</strong>. É composto de uma parte{' '}
          <strong>textual</strong> (as especificações) e uma <strong>gráfica</strong> (o diagrama de
          casos de uso, também chamado de diagrama de contexto).
        </p>
        <p>
          Cada papel usa o MCU de um jeito: <strong>clientes e usuários</strong> validam o que o
          sistema fará; <strong>desenvolvedores</strong> refinam os requisitos;{' '}
          <strong>projetistas</strong> encontram as classes; <strong>testadores</strong> definem os
          casos de teste. É por isso que o RUP se diz "guiado por casos de uso".
        </p>
      </TheoryBlock>

      <Subsection title="Ator: um papel, nunca uma pessoa" accentClass="text-accent2">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          <strong>Ator</strong> é o elemento <strong>externo</strong> que interage com o sistema
          trocando mensagens — normalmente iniciando a sequência. A regra de ouro: o ator representa
          um <strong>PAPEL</strong>, não um indivíduo. Nomeia-se "Fornecedor", não "João Fernandes":
          a mesma pessoa pode exercer vários papéis, e vários indivíduos exercem o mesmo papel.
        </p>
        <ConceptGrid
          columns="md:grid-cols-4"
          items={[
            { title: 'Cargos', description: 'Cliente, Gerente, Almoxarife, Vendedor, Empregado.', accent: 'accent' },
            { title: 'Organizações', description: 'Empresa fornecedora, agência de impostos, administradora de cartões.', accent: 'accent2' },
            { title: 'Outros sistemas', description: 'Sistema de cobrança, sistema de estoque, sistema legado de RH.', accent: 'accent3' },
            { title: 'Equipamentos', description: 'Leitor de código de barras, sensor, catraca.', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <Subsection title="As três dimensões de estilo da descrição" accentClass="text-accent3">
        <ComparisonTable
          criterionLabel="Dimensão"
          leftLabel="Um extremo"
          rightLabel="O outro extremo"
          rows={[
            { criterion: 'Grau de abstração', left: 'ESSENCIAL — só os passos essenciais, sem tecnologia ("o sistema identifica o cliente")', right: 'REAL — com detalhes de implementação ("o cliente passa o cartão na leitora")' },
            { criterion: 'Formato', left: 'CONTÍNUO (parágrafo corrido) ou NUMERADO (um passo por linha)', right: 'TABULAR — duas colunas, ator | sistema, alternando as interações' },
            { criterion: 'Grau de detalhamento', left: 'SUCINTA — poucos passos, visão geral', right: 'EXPANDIDA — com fluxos alternativos e de exceção' },
          ]}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O material usa o mesmo exemplo (Caixa Eletrônico) nos três formatos. Na prática: descrições
          <strong> essenciais e sucintas</strong> nas primeiras iterações, <strong>expandidas</strong>{' '}
          quando o caso de uso entra em desenvolvimento.
        </p>
      </Subsection>

      <Subsection title="A especificação detalhada: os nove elementos" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Nome', description: 'Verbo no infinitivo + objeto: "Realizar Matrícula", "Emitir Saldo".' },
            { title: 'Sumário', description: 'Descrição breve do objetivo do caso de uso.' },
            { title: 'Atores', description: 'O primário (quem inicia e recebe o valor) e os secundários (que participam).' },
            { title: 'Fluxo principal', description: 'O caminho feliz, em passos numerados alternando ator e sistema.' },
            { title: 'Fluxos alternativos', description: 'Outros caminhos VÁLIDOS que também atingem o objetivo (pagar em dinheiro em vez de cartão).' },
            { title: 'Fluxo de exceção', description: 'FALHAS que impedem a conclusão: violação de regra, dado inválido, sistema externo fora do ar.' },
            { title: 'Pré-condições', description: 'O que precisa ser verdade ANTES de o caso de uso começar (ex.: usuário autenticado).' },
            { title: 'Pós-condições', description: 'O que o sistema garante ao final (ex.: aluno inscrito ou na lista de espera).' },
            { title: 'Regras de negócio', description: 'Referência às RNs aplicáveis — a rastreabilidade entre política e comportamento.' },
          ]}
        />
      </Subsection>

      <Subsection title="Relacionamentos entre casos de uso" accentClass="text-accent4">
        <ConceptGrid
          columns="md:grid-cols-2"
          items={[
            { title: 'Comunicação (ator — caso de uso)', description: 'A associação simples que liga quem usa ao que é usado.', accent: 'accent' },
            { title: '«include»', description: 'O caso de uso SEMPRE invoca o outro. Usado para comportamento comum: "Validar Usuário" incluído por vários casos.', accent: 'accent2' },
            { title: '«extend»', description: 'O outro caso estende o comportamento CONDICIONALMENTE, num ponto de extensão — só ocorre em certas situações.', accent: 'accent3' },
            { title: 'Generalização', description: 'Hierarquia entre atores (Gerente é um Funcionário) ou entre casos de uso (Pagar com cartão especializa Pagar).', accent: 'accent4' },
          ]}
        />
      </Subsection>

      <ExampleBox title="Exercício da turma: o sistema de leilão">
        <p>
          O enunciado dá os requisitos e pede o modelo de casos de uso: diversos{' '}
          <strong>participantes</strong> por leilão, que devem <em>se logar</em> e, se não
          cadastrados, <em>se registrar</em>; um participante pode <em>dar quantos lances
          quiser</em>, mas não é obrigado — exigindo login e leilão em andamento; o{' '}
          <strong>leiloeiro</strong> <em>gerencia os leilões e os itens</em> e{' '}
          <em>inicia o leilão</em> no horário; durante o leilão, cada item é ofertado e o sistema{' '}
          <em>anuncia</em> cada lance que suplanta o anterior e <em>declara o vencedor</em> ao fim
          do tempo. Repare como os verbos do enunciado já entregam os casos de uso — e os
          substantivos, as classes que aparecem na próxima seção.
        </p>
      </ExampleBox>

      <HighlightBox title="Erros comuns na modelagem" accent="var(--color-accent4)">
        <p>
          Nomear atores com nomes de pessoas; criar casos de uso que são <em>passos</em> e não
          objetivos completos ("Digitar senha" não é caso de uso, é passo de "Efetuar Logon");
          descrever a interface em vez do comportamento essencial; e esquecer pré-condições,
          pós-condições e o fluxo de exceção — a parte que separa uma especificação decorativa de
          uma útil para implementar e testar.
        </p>
      </HighlightBox>
    </section>
  );
}
