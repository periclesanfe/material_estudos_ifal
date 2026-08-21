import CodeBlock from '../../../components/ui/CodeBlock';
import HighlightBox from '../../../components/ui/HighlightBox';
import { SectionHeader, Subsection, TheoryBlock, ExampleBox } from '../../../components/sections';

export default function PandasSection() {
  return (
    <section className="animate-fade-in space-y-6">
      <SectionHeader
        title="Pandas na Prática"
        subtitle="O ETL de verdade: ler, explorar, limpar e agregar — com a base real da COVID em Alagoas"
        colorClass="text-accent"
      />

      <TheoryBlock title="Series, DataFrame e o fluxo de trabalho">
        <p>
          O <strong>pandas</strong> é a biblioteca Python para trabalhar com conjuntos de dados:
          lê CSV e JSON, limpa e analisa estatisticamente. Duas estruturas: a{' '}
          <strong>Series</strong> (uma coluna, unidimensional) e o <strong>DataFrame</strong> (a
          tabela, bidimensional). Na disciplina, tudo roda no Google Colab.
        </p>
      </TheoryBlock>

      <Subsection title="Ler e explorar" accentClass="text-accent2">
        <CodeBlock
          language="python"
          title="As primeiras linhas de qualquer análise"
          code={`import pandas as pd

# leitura (encoding importa quando há acentuação!)
df = pd.read_csv("covid.csv", encoding='utf-8', sep=',')
df = pd.read_excel("mall-customers.xlsx")

df.head()        # 5 primeiras linhas (head(10) para dez)
df.tail(10)      # últimas linhas
df.columns       # nomes das colunas
df.info()        # colunas, contagem de não-nulos e tipos
df.describe()    # estatísticas das colunas numéricas`}
        />
      </Subsection>

      <Subsection title="Acessar e filtrar" accentClass="text-accent3">
        <CodeBlock
          language="python"
          title="loc e query"
          code={`df.loc[[1, 2, 3]]                    # linhas específicas
df.loc[10:20]                        # intervalo de linhas
df.loc[[1, 2], ['Nome', 'Sexo']]     # linhas e colunas escolhidas

# query aceita operadores lógicos & (e) e | (ou)
df.query('Idade > 20')
df.query('Idade > 50 & Sexo == "F"')   # mulheres com mais de 50 anos

# o mesmo filtro na notação de máscara booleana
df[(df['Idade'] > 50) & (df['Sexo'] == 'F')]`}
        />
      </Subsection>

      <Subsection title="Limpar — a parte que consome o tempo" accentClass="text-accent5">
        <CodeBlock
          language="python"
          title="Da base bruta à base confiável"
          code={`# 1. renomear colunas (inplace=True altera o DataFrame ORIGINAL)
df.rename(columns={
    "MUNICÍPIO DE RESIDÊNCIA": "Município",
    "Data do Óbito (Caso haja)": "Óbito",
    "IDADE": "Idade",
}, inplace=True)

# 2. quantos nulos por coluna?
df.isnull().sum()

# 3. preencher nulos: moda (categóricas), mediana ou média (numéricas)
df.fillna({'Idade': df.Idade.median(), 'Município': 'NÃO INFORMADO'}, inplace=True)

# 4. duplicatas
df.duplicated().sum()
df.drop_duplicates(inplace=True)

# 5. padronizar texto — o caso real: 'F', 'f' e 'F ' na mesma coluna
df['Sexo'] = df['Sexo'].str.strip().str.upper()

# 6. remover colunas inúteis
df.drop(columns=["Column1", "Unnamed: 15"], inplace=True)

# 7. valores impossíveis (o exercício pede idade > 120 ou negativa)
df = df[(df['Idade'] >= 0) & (df['Idade'] <= 120)]

# 8. datas e categorias derivadas
df['Confirmação'] = pd.to_datetime(df['Confirmação'])
df['category'] = df['Idade'].apply(lambda x: 'Adulto' if x >= 18 else 'Criança')`}
        />
        <ExampleBox title="Por que inplace=True">
          <p>
            Sem <code>inplace=True</code>, os métodos do pandas devolvem um{' '}
            <strong>novo DataFrame</strong> e o original fica intacto — o erro clássico é chamar{' '}
            <code>df.rename(...)</code> sozinho e estranhar que nada mudou. Com{' '}
            <code>inplace=True</code>, o DataFrame original é modificado. A alternativa explícita
            é reatribuir: <code>df = df.rename(...)</code>.
          </p>
        </ExampleBox>
      </Subsection>

      <Subsection title="Agregar e carregar" accentClass="text-accent4">
        <CodeBlock
          language="python"
          title="groupby e a etapa L do ETL"
          code={`# contagem por município, ordenada
df.groupby(['Município'])['Município'].count().sort_values(ascending=False).head(30)

# casos por sexo e por situação
df.groupby(['Sexo'])['Sexo'].count()
df.groupby(['Situação'])['Situação'].count()

# CARGA: os dados limpos saem para o próximo estágio
df.to_csv("covid_tratado.csv", index=False)
df.to_excel("covid_tratado.xlsx", index=False)`}
        />
      </Subsection>

      <HighlightBox title="Extraindo tabelas de um PDF" accent="var(--color-accent3)">
        <p>
          Um dos exercícios pede o ETL a partir de um <strong>PDF</strong> — situação comum com
          dados públicos. A ferramenta é a biblioteca <strong>Tabula</strong>:
        </p>
        <CodeBlock
          language="python"
          title="tabula-py"
          code={`!pip install -q tabula-py
import tabula

lista_tabelas = tabula.read_pdf("/content/tabela.pdf", pages="all")
print(len(lista_tabelas))          # quantas tabelas foram encontradas
tabula.convert_into("/content/tabela.pdf", "saida.csv", output_format="csv")`}
        />
      </HighlightBox>
    </section>
  );
}
