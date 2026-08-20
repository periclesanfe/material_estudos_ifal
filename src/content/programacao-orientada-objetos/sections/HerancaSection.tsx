import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox, PanelList } from '../../../components/sections';

export default function HerancaSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Herança e Reescrita de Métodos"
        subtitle="extends, a relação 'é um', @Override, super e a tabela de visibilidade completa"
        colorClass="text-accent"
      />

      <TheoryBlock title="O problema: Gerente copiado de Funcionario">
        <p>
          A aula parte de uma classe <code>Funcionario</code> (nome, cpf, salário; salário = horas × 40) e da
          necessidade de um <code>Gerente</code> quase igual, mas com salário horas × 80 e um código de
          departamento. A primeira "solução" — copiar a classe inteira e alterar duas linhas — é mostrada de
          propósito: <strong>código duplicado</strong> significa manutenção dupla e bugs em dobro.
        </p>
        <p>
          <strong>Herança</strong> é o remédio: uma classe nova (<strong>filha</strong>/subclasse) criada a partir
          de uma existente (<strong>pai</strong>/superclasse), herdando características e podendo aprimorá-las. A
          modelagem vai do genérico para o específico, e a relação resultante é <strong>"é um"</strong>: todo
          Gerente <em>é um</em> Funcionario. A herança é <strong>transitiva</strong> — se C estende B e B estende A,
          C herda de ambos.
        </p>
      </TheoryBlock>

      <Subsection title="extends e o que se herda" accentClass="text-accent2">
        <CodeBlock
          language="java"
          title="Gerente herda tudo — inclusive o que não pode tocar"
          code={`class Gerente extends Funcionario {
    int numeroDepartamentoGerencia;   // só o que é NOVO
}

// no main:
Gerente gerente = new Gerente();
gerente.setCpf("123");                 // OK — método público herdado
System.out.println(gerente.getCpf()); // "123"

gerente.cpf = "10";
// ERRO: cpf has private access in Funcionario`}
        />
        <ExampleBox title="A pegadinha central da aula">
          <p>
            A filha herda <strong>TODOS</strong> os atributos e métodos — <strong>inclusive os private</strong>. O
            objeto Gerente <em>tem</em> um cpf. O que ela não tem é <strong>acesso direto</strong>: membro private
            continua visível só dentro da classe que o declarou. O caminho é o método público herdado
            (getter/setter). Dizer que "private não é herdado" é o erro conceitual clássico.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Sobrescrita, @Override e super" accentClass="text-accent3">
        <CodeBlock
          language="java"
          title="Mesmo nome, MESMA assinatura, implementação diferente"
          code={`class Funcionario {
    protected double salario;   // protected: a filha pode acessar

    public void calcularSalario(double horasTrabalhadas) {
        this.salario = horasTrabalhadas * 40;
    }
}

class Gerente extends Funcionario {
    @Override
    public void calcularSalario(double horasTrabalhadas) {
        if (horasTrabalhadas < 160) {
            super.calcularSalario(horasTrabalhadas);  // reusa a versão do PAI (×40)
        } else {
            salario = horasTrabalhadas * 80;          // regra própria do gerente
        }
    }
}`}
        />
        <PanelList
          columns="md:grid-cols-3"
          items={[
            { title: 'Sobrescrita (override)', description: 'A filha redefine um método do pai com mesmo nome e MESMA assinatura, trocando a implementação. Assinatura diferente seria sobrecarga — outro conceito.' },
            { title: '@Override', description: 'Anotação que declara a intenção de sobrescrever. Se a assinatura não bater com nada do pai, o compilador avisa — proteção gratuita contra typos.' },
            { title: 'super.metodo()', description: 'Dentro da versão reescrita, invoca a versão do pai — reuso sem duplicação. (super() sozinho, na 1ª linha de construtor, chama o construtor do pai.)' },
          ]}
        />
      </Subsection>

      <Subsection title="protected e a tabela de visibilidade" accentClass="text-accent5">
        <p className="text-text-muted text-sm leading-relaxed mb-3">
          Para a filha acessar <code>salario</code> diretamente, <code>private</code> não serve — a solução da aula
          foi <code>protected</code>: visível na própria classe, no mesmo pacote e nas{' '}
          <strong>subclasses de qualquer pacote</strong>. A tabela completa (slide 40) é presença certa em prova:
        </p>
        <div className="overflow-x-auto study-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">Quem enxerga</th>
                <th className="text-center py-3 px-4 font-semibold text-accent uppercase tracking-wider text-xs">public</th>
                <th className="text-center py-3 px-4 font-semibold text-accent3 uppercase tracking-wider text-xs">protected</th>
                <th className="text-center py-3 px-4 font-semibold text-accent4 uppercase tracking-wider text-xs">default</th>
                <th className="text-center py-3 px-4 font-semibold text-accent5 uppercase tracking-wider text-xs">private</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Própria classe', '✓', '✓', '✓', '✓'],
                ['Mesmo pacote', '✓', '✓', '✓', '—'],
                ['Subclasse de OUTRO pacote', '✓', '✓', '—', '—'],
                ['Qualquer classe', '✓', '—', '—', '—'],
              ].map(([label, ...cells]) => (
                <tr key={label} className="border-b border-border/50 last:border-0">
                  <td className="py-3 px-4 font-semibold text-text text-xs">{label}</td>
                  {cells.map((cell, i) => (
                    <td key={i} className={`py-3 px-4 text-center text-xs ${cell === '✓' ? 'text-accent3 font-bold' : 'text-text-muted'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-text-muted text-sm leading-relaxed mt-3">
          A linha que separa <code>protected</code> de <code>default</code> (sem modificador) é a{' '}
          <strong>subclasse de outro pacote</strong>: protected alcança, default não. Os exemplos ClasseA–E da
          turma exercitam exatamente isso entre dois pacotes.
        </p>
      </Subsection>

      <Subsection title="As três regras da Parte II" accentClass="text-accent4">
        <PanelList
          columns=""
          items={[
            {
              title: '1 · Construtores NÃO são herdados',
              description:
                'Atributos e métodos sim; construtores não. E a primeira instrução implícita de todo construtor de filha é chamar o construtor do pai — para inicializar as variáveis herdadas. Se o pai declara construtor explicitamente (ex.: só Pai(String nome)), a filha DEVE chamá-lo: super(nome); omitir é erro de compilação.',
            },
            {
              title: '2 · Sobrescrita não pode RESTRINGIR a visibilidade',
              description:
                'Método public no pai não vira protected/private na filha — erro de compilação. O motivo é a relação "é um": quem trata um Cachorro como Animal precisa poder chamar o que era público no Animal. Ampliar a visibilidade pode.',
            },
            {
              title: '3 · Java não tem herança múltipla de classes',
              description:
                'class X extends A, B é ilegal — extends aceita UMA classe. A "herança múltipla" possível em Java é de TIPO, via interfaces (próximas seções): uma classe implementa quantas interfaces quiser.',
            },
          ]}
        />
      </Subsection>

      <HighlightBox title="Antes de herdar, pergunte" accent="var(--color-accent3)">
        <p>
          A herança só cabe quando a relação "é um" é genuína e estável — Gerente é um Funcionario, ContaPoupanca é
          uma Conta. Herdar apenas para reaproveitar meia dúzia de métodos acopla as classes para sempre. No projeto
          final, o critério avalia o uso <em>adequado</em>: hierarquia com sentido de domínio, não hierarquia por
          conveniência.
        </p>
      </HighlightBox>
    </section>
  );
}
