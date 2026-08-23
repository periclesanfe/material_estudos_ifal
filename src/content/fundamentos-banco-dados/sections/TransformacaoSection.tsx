import DatabaseSchema from '../../../components/ui/DatabaseSchema';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, PanelList, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function TransformacaoSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Do Conceitual ao Relacional"
        subtitle="Os 9 passos de transformação, o gabarito oficial do banco e o caminho de volta (engenharia reversa)"
        colorClass="text-accent"
      />

      <TheoryBlock title="A ponte entre os modelos">
        <p>
          O diagrama ER/EER é semântico; o SGBD só entende tabelas. A <strong>transformação</strong> (mapeamento)
          converte um no outro seguindo nove passos determinísticos — o resultado é um modelo relacional{' '}
          <em>inicial</em>, refinável depois por desempenho. A convenção de notação da disciplina:{' '}
          <strong>sublinhado = chave primária</strong>, <strong>(f.k) = chave estrangeira</strong>.
        </p>
      </TheoryBlock>

      <Subsection title="Os 9 passos" accentClass="text-accent2">
        <PanelList
          columns=""
          items={[
            { title: '1 · Entidade regular', description: 'Vira tabela com os atributos simples (compostos entram pelos componentes); o identificador vira PK.' },
            { title: '2 · Atributo multivalorado', description: 'Vira TABELA PRÓPRIA com o atributo + a PK da dona como FK; a PK da nova tabela é a COMBINAÇÃO (atributo + FK). Ex.: DEPARTAMENTO_LOCALIZAÇÃO(numero fk + localização).' },
            { title: '3 · Entidade fraca', description: 'Vira tabela com FK da entidade identificadora; PK composta = PK da identificadora + chave parcial. Ex.: DEPENDENTE(ssn + nome).' },
            { title: '4 · Relacionamento 1:1', description: 'FK em UMA das tabelas — a regra de ouro: no lado de participação TOTAL (todo departamento tem gerente → SSN_GERENTE em DEPARTAMENTO). Atributos do relacionamento (data_início) vão junto.' },
            { title: '5 · Relacionamento 1:N', description: 'FK no lado N, sempre. EMPREGADO carrega NUM_DEP; PROJETO carrega NUM_DEP. Auto-relacionamento 1:N: FK para a própria tabela (SSN_SUPERVISOR em EMPREGADO).' },
            { title: '6 · Relacionamento N:M', description: 'TABELA NOVA com as duas FKs; PK = combinação delas; atributos do relacionamento entram nela. TRABALHA_EM(ssn + num_proj, horas).' },
            { title: '7 · Ternário / n-ário', description: 'Tabela nova com as FKs de TODAS as participantes; PK = todas as FKs. FORNECE(cod_forn + id_peça + num_proj, data).' },
            { title: '8 · Especialização / generalização', description: 'Tabela por subclasse recebendo a PK da superclasse como FK — e essa FK É a PK da subclasse. SECRETARIA(cpf, veloc_digitação) com cpf = PK = FK.' },
            { title: '9 · Agregação (entidade associativa)', description: 'O relacionamento agregado vira tabela (como no passo 6); o relacionamento da agregação com a terceira entidade segue a cardinalidade — MAQUINA referencia a PK composta de TRABALHA.' },
          ]}
        />
      </Subsection>

      <Subsection title="Exemplo resolvido oficial: o modelo bancário (gabarito da professora)" accentClass="text-accent3">
        <DatabaseSchema
          title="Resolução do EER 2 — modelo bancário, do conceitual ao físico"
          defaultView="relacional"
          caption="O mesmo gabarito nas três leituras: alterne as abas para ver o conceitual (ER), o lógico (tabelas com PK/FK) e o SQL que cria tudo. Repare em AGENCIA (fraca, PK composta), nas duas subclasses com PK = FK e em TEM, tracejada, que resolve o M:N cliente–conta. O recorte mostra 7 das 11 tabelas do gabarito; transação, empréstimo, pagamentos e FAZ seguem exatamente os mesmos padrões — fraca, fraca, fraca e associativa."
          ddl={`CREATE TABLE banco (
  codigo        INTEGER      PRIMARY KEY,
  nome          VARCHAR(80)  NOT NULL,
  endereco      VARCHAR(120)
);

CREATE TABLE agencia (                                  -- entidade FRACA
  codigo        INTEGER      REFERENCES banco(codigo),
  num_agencia   INTEGER,
  endereco      VARCHAR(120),
  PRIMARY KEY (codigo, num_agencia)
);

CREATE TABLE contas (
  num_conta     INTEGER      PRIMARY KEY,
  saldo         NUMERIC(12,2) NOT NULL,
  codigo        INTEGER,
  num_agencia   INTEGER,
  FOREIGN KEY (codigo, num_agencia) REFERENCES agencia(codigo, num_agencia)
);

CREATE TABLE conta_corrente (                           -- especialização T,O
  num_conta     INTEGER      PRIMARY KEY REFERENCES contas(num_conta),
  taxa_mensal   NUMERIC(6,2)
);

CREATE TABLE conta_poupanca (
  num_conta     INTEGER      PRIMARY KEY REFERENCES contas(num_conta),
  valor_juros   NUMERIC(10,2),
  percentual    NUMERIC(5,2)
);

CREATE TABLE cliente (
  cpf           CHAR(11)     PRIMARY KEY,
  nome          VARCHAR(80)  NOT NULL,
  telefone      VARCHAR(20),
  endereco      VARCHAR(120)
);

CREATE TABLE tem (                                      -- M:N cliente–conta
  cpf           CHAR(11)     REFERENCES cliente(cpf),
  num_conta     INTEGER      REFERENCES contas(num_conta),
  PRIMARY KEY (cpf, num_conta)
);`}
        />
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          O exemplo condensa quase tudo: <strong>três entidades fracas</strong> (agência, transação, pagamento) com
          PK composta; <strong>especialização T,O</strong> com PK = FK nas subclasses; e <strong>dois M:N</strong>{' '}
          virando as tabelas TEM e FAZ. Outro gabarito da turma (plataforma de jogos educacionais) confirma o
          padrão: 3 relacionamentos N:N viraram 3 tabelas de ligação e 3 relacionamentos 1:N viraram FK no lado N —
          9 tabelas ao todo.
        </p>
      </Subsection>

      <Subsection title="Herança: as 4 alternativas de Navathe" accentClass="text-accent5">
        <PanelList
          columns="md:grid-cols-2"
          items={[
            { title: '1 · Superclasse + uma tabela por subclasse', description: 'A opção do passo 8. Funciona para QUALQUER combinação (total/parcial × disjunta/sobreposta). É a usada nos gabaritos da turma.' },
            { title: '2 · Só as subclasses (some a superclasse)', description: 'Cada subclasse repete os atributos herdados. Exige especialização TOTAL e DISJUNTA — senão perde instâncias ou duplica dados.' },
            { title: '3 · Tabela única + atributo tipo', description: 'Um discriminador diz a subclasse. Para DISJUNTAS; se parcial, sobram nulos nas colunas específicas.' },
            { title: '4 · Tabela única + flags booleanos', description: 'Um flag de pertinência por subclasse — a saída para SOBREPOSTAS, também ao custo de nulos.' },
          ]}
        />
      </Subsection>

      <Subsection title="Engenharia reversa: o caminho de volta" accentClass="text-accent4">
        <ExampleBox title="4 passos, decididos pela estrutura da chave primária">
          <p>
            Quando o banco existe mas o modelo conceitual se perdeu, faz-se a <strong>abstração inversa</strong>:{' '}
            <strong>(1)</strong> identifique a construção de cada tabela pela PK — PK formada por{' '}
            <strong>duas FKs</strong> → relacionamento N:M; <strong>mais de duas FKs</strong> → n-ário; a PK{' '}
            <strong>inteira é uma única FK</strong> → especialização; <strong>parte da PK é FK</strong> → entidade
            fraca; nenhum desses → entidade regular (multivalorados aparecem como fracas).{' '}
            <strong>(2)</strong> Cada FK <em>fora</em> da PK indica relacionamento 1:1 ou 1:N — a cardinalidade se
            decide olhando o conteúdo do banco. <strong>(3)</strong> Colunas não-FK viram atributos.{' '}
            <strong>(4)</strong> Colunas da PK que não são FK viram identificadores.
          </p>
        </ExampleBox>
      </Subsection>

      <HighlightBox title="Exercício-desafio (sem gabarito da turma)" accent="var(--color-accent3)">
        <p>
          A atividade dos <strong>múltiplos bancos</strong> integra tudo: AGENCIA fraca de BANCO, CONTA
          especializada em corrente/poupança, EMPRESTIMO especializado em carro/casa, TRANSACAO e PAGAMENTO fracas,
          CLIENTE com M:N para contas (conta conjunta!) e empréstimos. Aplique os passos 1, 3, 4/5, 6 e 8 — e
          confira sua resposta contra o gabarito do modelo bancário acima, que é o mesmo domínio em versão menor.
        </p>
      </HighlightBox>
    </section>
  );
}
