// Trechos de código Python usados nas seções de Estrutura de Dados.
// Todos foram verificados executando em Python 3.
// Fonte: material do Prof. MSc. Ricardo Nunes (assina "Prof. Ricardo Rubens" nas listas
// de exercícios; mesmo e-mail institucional) · ESTD · BSI/IFAL · 2023.1

export const codeFloodFill = `\
from collections import deque

def colorir_regiao(regiao, ponto, nova_cor):
    """Pinta de nova_cor a região conectada que contém 'ponto'."""
    matriz = [[c for c in linha] for linha in regiao]   # não altera a original
    lin, col = ponto
    cor_original = matriz[lin][col]
    if cor_original == nova_cor:
        return matriz

    fila = deque([ponto])
    while fila:                                 # enquanto a fila não esvaziar
        i, j = fila.popleft()                   # remove um ponto P da fila
        if matriz[i][j] != cor_original:
            continue                            # já foi pintado por outro caminho
        matriz[i][j] = nova_cor                 # altera a cor de P para C1
        for vi, vj in ((i+1, j), (i-1, j), (i, j+1), (i, j-1)):   # 4 vizinhos
            if 0 <= vi < len(matriz) and 0 <= vj < len(matriz[0]):
                if matriz[vi][vj] == cor_original:
                    fila.append((vi, vj))       # insere os conectados de cor C0
    return matriz

# Teste 1 do professor
regiao1 = [[1,0,0,2,2], [0,2,2,1,2], [2,1,1,1,2], [2,1,2,1,2], [2,2,1,2,2]]
esperado1 = [[1,0,0,2,2], [0,2,2,2,2], [2,2,2,2,2], [2,2,2,2,2], [2,2,1,2,2]]
print(colorir_regiao(regiao1, [2,2], 2) == esperado1)   # True

# Teste 2 do professor
regiao2 = [[1,1,1,2,2,1], [1,2,2,1,2,1], [1,1,1,1,2,1], [1,1,2,1,1,1], [1,2,1,2,2,1]]
esperado2 = [[0,0,0,2,2,0], [0,2,2,0,2,0], [0,0,0,0,2,0], [0,0,2,0,0,0], [0,2,1,2,2,0]]
print(colorir_regiao(regiao2, [0,0], 0) == esperado2)   # True`;

export const codeRepresentacoes = `\
# ── Representação 1: lista de listas ────────────────
# [raiz, subárvore_esquerda, subárvore_direita]
def BinaryTree(r):
    return [r, [], []]

def insertLeft(root, newBranch):
    t = root.pop(1)                          # tira a subárvore atual
    if len(t) > 1:
        root.insert(1, [newBranch, t, []])   # a antiga desce um nível
    else:
        root.insert(1, [newBranch, [], []])
    return root

r = BinaryTree(3)
insertLeft(r, 4)
insertLeft(r, 5)        # o 4 desce: vira filho esquerdo do 5
print(r)                # [3, [5, [4, [], []], []], []]

# ── Representação 2: nós e referências ──────────────
class ArvoreBinaria:
    def __init__(self, raiz):
        self.key = raiz
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self, novo):
        if self.leftChild is None:
            self.leftChild = ArvoreBinaria(novo)
        else:
            t = ArvoreBinaria(novo)
            t.leftChild = self.leftChild   # o filho antigo desce
            self.leftChild = t

    def getRootVal(self):
        return self.key

    def getLeftChild(self):
        return self.leftChild

    def getRightChild(self):
        return self.rightChild`;

export const codeTravessias = `\
# As três travessias são recursivas e diferem apenas na
# POSIÇÃO em que a raiz é visitada.

def preorder(tree):          # raiz → esq → dir
    if tree:
        print(tree.getRootVal())
        preorder(tree.getLeftChild())
        preorder(tree.getRightChild())

def inorder(tree):           # esq → raiz → dir
    if tree is not None:
        inorder(tree.getLeftChild())
        print(tree.getRootVal())
        inorder(tree.getRightChild())

def postorder(tree):         # esq → dir → raiz
    if tree is not None:
        postorder(tree.getLeftChild())
        postorder(tree.getRightChild())
        print(tree.getRootVal())

# ── Pós-ordem avaliando uma expressão ───────────────
import operator

def postordereval(tree):
    opers = {'+': operator.add, '-': operator.sub,
             '*': operator.mul, '/': operator.truediv}
    if tree is None:
        return None
    esq = postordereval(tree.getLeftChild())
    dir_ = postordereval(tree.getRightChild())
    if esq is not None and dir_ is not None:
        return opers[tree.getRootVal()](esq, dir_)   # nó interno
    return tree.getRootVal()                         # folha`;

export const codeBst = `\
class NoArvore:
    def __init__(self, chave, valor, esq=None, dir=None, pai=None):
        self.chave = chave
        self.payload = valor
        self.esq = esq
        self.dir = dir
        self.pai = pai          # a referência ao pai facilita a remoção

    def eh_folha(self):
        return not (self.esq or self.dir)

    def tem_dois_filhos(self):
        return self.esq and self.dir

class ArvoreBinariaBusca:
    """BST usada como TAD Map: put, get, in, len e del."""

    def __init__(self):
        self.raiz = None
        self.tamanho = 0

    def put(self, chave, valor):
        if self.raiz:
            if self._put(chave, valor, self.raiz):   # False = só substituiu
                self.tamanho += 1
        else:
            self.raiz = NoArvore(chave, valor)
            self.tamanho += 1

    def _put(self, chave, valor, atual):
        """Devolve True quando um nó NOVO foi criado."""
        # Chave duplicada: a versão da aula manda a chave igual para a direita
        # e incrementa o tamanho sempre. O nó novo nunca seria encontrado numa
        # pesquisa (o _get para no primeiro) e o len() ficaria errado.
        # A saída indicada no material é substituir o valor antigo:
        if chave == atual.chave:
            atual.payload = valor
            return False
        if chave < atual.chave:                      # menor → esquerda
            if atual.esq:
                return self._put(chave, valor, atual.esq)
            atual.esq = NoArvore(chave, valor, pai=atual)
            return True
        else:                                        # maior → direita
            if atual.dir:
                return self._put(chave, valor, atual.dir)
            atual.dir = NoArvore(chave, valor, pai=atual)
            return True

    def _get(self, chave, atual):
        if not atual:
            return None
        if atual.chave == chave:
            return atual
        if chave < atual.chave:
            return self._get(chave, atual.esq)
        return self._get(chave, atual.dir)

    def get(self, chave):
        no = self._get(chave, self.raiz) if self.raiz else None
        return no.payload if no else None

    # Métodos especiais: dão à árvore a sintaxe de dicionário
    def __setitem__(self, chave, valor):
        self.put(chave, valor)

    def __getitem__(self, chave):
        return self.get(chave)

    def __contains__(self, chave):
        return bool(self._get(chave, self.raiz))

    def __len__(self):
        return self.tamanho

arvore = ArvoreBinariaBusca()
for chave in [70, 31, 93, 94, 14, 23, 73]:
    arvore[chave] = f'valor de {chave}'

print(arvore[31])        # valor de 31
print(70 in arvore)      # True
print(len(arvore))       # 7

# Chave repetida substitui o valor, sem criar nó novo:
arvore[31] = 'outro valor'
print(arvore[31])        # outro valor
print(len(arvore))       # 7`;

export const codeSucessor = `\
# Caso 3 da remoção: o nó tem DOIS filhos.
# Nenhum dos filhos pode simplesmente subir, então procura-se
# o sucessor — o nó com a próxima maior chave da árvore.

def encontra_min(no):
    """O menor da subárvore é o nó mais à esquerda."""
    atual = no
    while atual.esq:
        atual = atual.esq
    return atual

def encontra_sucessor(no):
    if no.dir:                       # tem filho direito:
        return encontra_min(no.dir)  # menor chave da subárvore direita
    if no.pai:                       # não tem filho direito:
        if no.pai.esq is no:         # se é filho esquerdo, o pai é o sucessor
            return no.pai
        return encontra_sucessor(no.pai)
    return None

# O sucessor tem a garantia de NÃO ter mais de um filho —
# por isso ele pode ser retirado com segurança (spliceOut)
# e colocado no lugar do nó removido.`;

export const codeHeap = `\
class BinHeap:
    """Heap mínimo em uma única lista. A posição 0 é um sentinela,
    de modo que os filhos de i ficam em 2i e 2i+1, e o pai em i//2."""

    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0

    def percUp(self, i):
        while i // 2 > 0:
            if self.heapList[i] < self.heapList[i // 2]:      # menor que o pai
                self.heapList[i], self.heapList[i // 2] = (
                    self.heapList[i // 2], self.heapList[i])  # troca
            i = i // 2

    def insert(self, k):
        self.heapList.append(k)          # mantém a estrutura
        self.currentSize += 1
        self.percUp(self.currentSize)    # restaura a ordem

    def minChild(self, i):
        if i * 2 + 1 > self.currentSize:
            return i * 2                 # só existe filho esquerdo
        if self.heapList[i * 2] < self.heapList[i * 2 + 1]:
            return i * 2
        return i * 2 + 1

    def percDown(self, i):
        while i * 2 <= self.currentSize:
            mc = self.minChild(i)
            if self.heapList[i] > self.heapList[mc]:
                self.heapList[i], self.heapList[mc] = (
                    self.heapList[mc], self.heapList[i])
            i = mc

    def delMin(self):
        menor = self.heapList[1]                          # a raiz é o mínimo
        self.heapList[1] = self.heapList[self.currentSize]  # último vai à raiz
        self.currentSize -= 1
        self.heapList.pop()
        self.percDown(1)
        return menor

    def buildHeap(self, alist):
        i = len(alist) // 2
        self.currentSize = len(alist)
        self.heapList = [0] + alist[:]
        while i > 0:
            self.percDown(i)
            i -= 1

bh = BinHeap()
for k in [5, 7, 3, 11]:
    bh.insert(k)
print(bh.delMin(), bh.delMin())   # 3 5 — sempre o menor primeiro`;

export const codeBubble = `\
# Bubble Sort - O(n²) médio/pior, O(n) melhor com flag
def bubble_sort(lista):
    n = len(lista)
    for i in range(n - 1):
        trocou = False
        for j in range(n - 1 - i):
            if lista[j] > lista[j + 1]:
                lista[j], lista[j + 1] = lista[j + 1], lista[j]
                trocou = True
        if not trocou:       # já ordenada: para cedo → O(n)
            break

# Selection Sort - O(n²) SEMPRE (uma única troca por varredura).
# Versão da aula: procura o MAIOR e o leva para o fim da parte
# ainda não ordenada. Procurar o menor e levá-lo ao início é
# equivalente — muda a direção, não a complexidade.
def selection_sort(lista):
    for posicao_final in range(len(lista) - 1, 0, -1):
        posicao_maior = 0
        for posicao in range(1, posicao_final + 1):
            if lista[posicao] > lista[posicao_maior]:
                posicao_maior = posicao
        lista[posicao_final], lista[posicao_maior] = (
            lista[posicao_maior], lista[posicao_final])`;

export const codeShell = `\
# Shell Sort - generaliza o insertion sort usando um "gap".
# As sublistas NÃO são de elementos contíguos: são intercaladas
# a cada 'gap' posições. O gap vai diminuindo até chegar a 1,
# quando o algoritmo vira um insertion sort tradicional — só que
# sobre uma lista já quase ordenada, logo com poucas trocas.

def insertion_sort_com_gap(lista, inicio, gap):
    for i in range(inicio + gap, len(lista), gap):
        valor_atual = lista[i]
        posicao = i
        while posicao >= gap and lista[posicao - gap] > valor_atual:
            lista[posicao] = lista[posicao - gap]
            posicao = posicao - gap
        lista[posicao] = valor_atual

def shell_sort(lista):
    gap = len(lista) // 2
    while gap > 0:
        for posicao_inicial in range(gap):
            insertion_sort_com_gap(lista, posicao_inicial, gap)
        gap = gap // 2

# Desempenho: fica entre O(n) e O(n²).
# Com incrementos [4, 2, 1]           → O(n²)
# Com incrementos 2^k - 1 (1,3,7,15…) → O(n^(3/2))`;

export const codeMerge = `\
# Merge Sort - O(n log n) SEMPRE - divide e conquista
def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    meio = len(lista) // 2
    esq = merge_sort(lista[:meio])   # divide
    dir = merge_sort(lista[meio:])   # divide
    return merge(esq, dir)           # conquista

def merge(esq, dir):
    resultado = []
    i = j = 0
    while i < len(esq) and j < len(dir):
        if esq[i] <= dir[j]:
            resultado.append(esq[i])
            i += 1
        else:
            resultado.append(dir[j])
            j += 1
    return resultado + esq[i:] + dir[j:]`;

export const codeQuick = `\
# Quick Sort - divide e conquista SEM memória adicional.
# O pivô é o 1º elemento; leftmark e rightmark convergem
# até cruzarem, e a posição de encontro é o split point.

def quick_sort(lista):
    _quick_sort(lista, 0, len(lista) - 1)

def _quick_sort(lista, inicio, fim):
    if inicio < fim:
        split = particiona(lista, inicio, fim)
        _quick_sort(lista, inicio, split - 1)   # metade menor
        _quick_sort(lista, split + 1, fim)      # metade maior

def particiona(lista, inicio, fim):
    pivo = lista[inicio]
    leftmark = inicio + 1
    rightmark = fim

    while True:
        # avança enquanto os valores são menores que o pivô
        while leftmark <= rightmark and lista[leftmark] <= pivo:
            leftmark += 1
        # recua enquanto os valores são maiores que o pivô
        while rightmark >= leftmark and lista[rightmark] >= pivo:
            rightmark -= 1
        if rightmark < leftmark:
            break                                # as marcas cruzaram
        lista[leftmark], lista[rightmark] = lista[rightmark], lista[leftmark]

    # o pivô troca com o split point e fica no lugar definitivo
    lista[inicio], lista[rightmark] = lista[rightmark], lista[inicio]
    return rightmark

nums = [54, 26, 93, 17, 77, 31, 44, 55, 20]
quick_sort(nums)
print(nums)   # [17, 20, 26, 31, 44, 54, 55, 77, 93]`;

export const codeBigOClasses = `\
# ── O(1): o custo não depende do tamanho da entrada ──
def topo(pilha):
    return pilha[-1]          # 1 acesso, sempre

# ── O(n): percorre a entrada uma vez ─────────────────
def busca_sequencial(lista, alvo):
    for item in lista:        # até n comparações
        if item == alvo:
            return True
    return False

# ── O(log n): descarta metade a cada passo ───────────
def busca_binaria(lista, alvo):   # lista ORDENADA
    inicio, fim = 0, len(lista) - 1
    while inicio <= fim:
        meio = (inicio + fim) // 2
        if lista[meio] == alvo:
            return True
        elif alvo < lista[meio]:
            fim = meio - 1        # descarta metade
        else:
            inicio = meio + 1     # descarta metade
    return False

# ── O(n²): laço dentro de laço ───────────────────────
def tem_duplicata(lista):
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):   # n * n / 2
            if lista[i] == lista[j]:
                return True
    return False`;

export const codeDeque = `\
from collections import deque

# Operações nas duas extremidades - todas O(1)
d = deque()
d.append(10)         # add_last  → deque([10])
d.appendleft(5)      # add_first → deque([5, 10])
d.append(20)         # add_last  → deque([5, 10, 20])

print(d.pop())       # delete_last  → 20
print(d.popleft())   # delete_first → 5
print(d)             # deque([10])

# rotate(k): desloca k posições para a direita
d2 = deque([1, 2, 3, 4, 5])
d2.rotate(2)
print(d2)            # deque([4, 5, 1, 2, 3])

# Aplicação: verificar palíndromo
def eh_palindromo(palavra):
    letras = deque(palavra)
    while len(letras) > 1:
        if letras.popleft() != letras.pop():
            return False
    return True

print(eh_palindromo("arara"))    # True
print(eh_palindromo("python"))   # False`;

export const codeHashTable = `\
# ── Funções hash ──────────────────────────────────
def hash_modulo(item, tamanho):
    return item % tamanho          # simples e eficiente

def hash_string(s, tamanho):
    total = 0
    for i, c in enumerate(s):
        total += ord(c) * (i + 1)  # pondera pela posição
    return total % tamanho

tabela = [None] * 11
slot = hash_modulo(44, 11)   # 44 % 11 = 0
tabela[slot] = 44

# ── Colisão: linear probing ───────────────────────
# rehash(pos) = (pos + 1) % tamanho_da_tabela
def rehash(pos, tamanho):
    return (pos + 1) % tamanho

def inserir(tabela, item):
    slot = item % len(tabela)
    while tabela[slot] is not None:
        slot = rehash(slot, len(tabela))   # tenta o próximo
    tabela[slot] = item

# Exemplo da aula: h(item) = item % 11
# itens 54, 26, 93, 17, 77 e 31 ocupam 6 dos 11 slots
#  slot: 0    1     2     3     4   5   6   7     8     9   10
#        77  None  None  None   26  93  17  None  None  31  54
# FC = 6 / 11 ≈ 0,55

# ── Python dict é uma tabela hash otimizada ───────
dicionario = {}
dicionario['nome'] = 'Ana'   # put(key, val) → O(1)
print(dicionario['nome'])    # get(key)       → O(1)
print('nome' in dicionario)  # in             → O(1)
del dicionario['nome']       # del key        → O(1)`;

export const codeFilaArray = `\
class FilaArray:
    def __init__(self, capacidade=10):
        self._dados = [None] * capacidade
        self._ini = 0      # ponteiro do início
        self._fim = 0      # ponteiro do fim
        self._tam = 0
        self._N = capacidade

    def enqueue(self, e):
        if self._tam == self._N:
            raise IndexError("fila cheia")
        self._dados[self._fim] = e
        self._fim = (self._fim + 1) % self._N   # avança circular
        self._tam += 1

    def dequeue(self):      # O(1) - sem deslocar elementos!
        if self.is_empty():
            raise IndexError("fila vazia")
        val = self._dados[self._ini]
        self._dados[self._ini] = None
        self._ini = (self._ini + 1) % self._N   # avança circular
        self._tam -= 1
        return val

    def first(self):        # O(1)
        if self.is_empty():
            raise IndexError("fila vazia")
        return self._dados[self._ini]

    def is_empty(self):
        return self._tam == 0

# sem array circular: dequeue precisaria deslocar n elementos → O(n)
# com array circular: ini avança com % N → O(1)`;

export const codeListaEncadeada = `\
class No:
    def __init__(self, dado):
        self._dados = dado
        self._proximo = None   # aponta para o próximo nó

class ListaNaoOrdenada:
    def __init__(self):
        self._head = None      # lista vazia

    def add(self, e):          # O(1) - insere na cabeça
        novo = No(e)
        novo._proximo = self._head
        self._head = novo

    def is_empty(self):        # O(1)
        return self._head is None

    def size(self):            # O(n) - percorre tudo
        contador = 0
        atual = self._head
        while atual is not None:
            contador += 1
            atual = atual._proximo
        return contador

    def search(self, e):       # O(n)
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                return True
            atual = atual._proximo
        return False

    def remove(self, e):       # O(n)
        anterior = None
        atual = self._head
        while atual is not None:
            if atual._dados == e:
                if anterior is None:         # removendo head
                    self._head = atual._proximo
                else:
                    anterior._proximo = atual._proximo
                return
            anterior = atual
            atual = atual._proximo`;

export const codeBusca = `\
# ── Busca Sequencial - O(n) ──────────────────────
def busca_sequencial(lista, alvo):
    for i in range(len(lista)):
        if lista[i] == alvo:
            return i       # encontrou na posição i
    return -1              # não encontrou

# ── Busca Binária - O(log n) ─────────────────────
# PRÉ-REQUISITO: lista deve estar ORDENADA!
def busca_binaria(lista, alvo):
    low = 0
    high = len(lista) - 1

    while low <= high:
        mid = (low + high) // 2      # meio do intervalo

        if lista[mid] == alvo:
            return mid               # encontrou!
        elif lista[mid] < alvo:
            low = mid + 1            # descarta metade esquerda
        else:
            high = mid - 1           # descarta metade direita

    return -1                        # não encontrou

nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
print(busca_sequencial(nums, 23))   # 5
print(busca_binaria(nums, 23))      # 5
print(busca_binaria(nums, 10))      # -1

# Para n=1.000.000: sequencial pode fazer 1.000.000 comparações
# Binária faz no máximo log2(1.000.000) ≈ 20 comparações!`;

export const codeListaSequencial = `\
# A list do Python já é um array dinâmico (TAD Lista)

lista = []

# adicionar(e)      → O(1) amortizado
lista.append(10)
lista.append(20)
lista.append(30)

# adicionar_em(pos, e) → O(n) - desloca elementos
lista.insert(0, 5)    # [5, 10, 20, 30]

# recuperar(pos)    → O(1) - acesso direto por índice
print(lista[2])       # 20

# remover(pos)      → O(n) - desloca elementos
lista.pop(0)          # remove o 5

# pertence(e)       → O(n) - busca sequencial
print(10 in lista)    # True

# tamanho()         → O(1) se guardado como atributo
print(len(lista))     # 3

# O array dobra de tamanho quando necessário (crescimento exponencial)
# Isso garante que append() seja O(1) AMORTIZADO`;

export const codePilhaArray = `\
class PilhaArray:
    def __init__(self):
        self._dados = []

    def push(self, e):        # O(1)*
        self._dados.append(e)

    def pop(self):            # O(1)
        return self._dados.pop()

    def top(self):            # O(1) - só consulta, não remove
        return self._dados[-1]

    def is_empty(self):
        return len(self._dados) == 0


# Aplicação: verificar parênteses balanceados
def is_matched(expr):
    pares = {')': '(', ']': '[', '}': '{'}
    pilha = PilhaArray()
    for c in expr:
        if c in '([{':
            pilha.push(c)        # abre → empilha
        elif c in ')]}':
            if pilha.is_empty() or pilha.top() != pares[c]:
                return False     # fecha sem par → inválido
            pilha.pop()
    return pilha.is_empty()      # deve estar vazia no fim

print(is_matched("(a + [b * c])"))   # True
print(is_matched("(a + [b * c)"))    # False - par errado
print(is_matched("((a + b)"))        # False - falta fechar`;

export const codeRecursividade = `\
# ── Dois ingredientes obrigatórios ───────────────
# 1. Caso base (condição de parada)
# 2. Redução ao caso base (problema fica menor)

def contagem(n):
    if n == 0:           # caso base
        return
    print(n)
    contagem(n - 1)      # redução: n → n-1

# contagem(3) imprime: 3  2  1

def soma_ateh(n):
    if n == 0:           # caso base
        return 0
    return n + soma_ateh(n - 1)   # redução

print(soma_ateh(5))   # 15
# Pilha de chamadas:
# soma_ateh(5) → 5 + soma_ateh(4)
#   soma_ateh(4) → 4 + soma_ateh(3)
#     soma_ateh(3) → 3 + soma_ateh(2)
#       soma_ateh(2) → 2 + soma_ateh(1)
#         soma_ateh(1) → 1 + soma_ateh(0)
#           soma_ateh(0) → 0  ← caso base!
# ← desempilha retornando: 1, 3, 6, 10, 15

def fib(n):
    if n <= 1:           # caso base duplo
        return n
    return fib(n - 1) + fib(n - 2)   # O(2^n) sem memo!

# ── Exercícios da lista de recursividade do professor ────
def inverte(s):
    if len(s) <= 1:      # caso base: 0 ou 1 caractere
        return s
    return inverte(s[1:]) + s[0]     # tira a 1ª letra e a joga para o fim

print(inverte("Python"))   # nohtyP

def eh_palindromo(s):
    if len(s) <= 1:      # DOIS casos base: vazia (par) e 1 letra (ímpar)
        return True
    if s[0] != s[-1]:    # pontas diferentes → nem precisa recorrer
        return False
    return eh_palindromo(s[1:-1])    # redução: remove as duas pontas

print(eh_palindromo("arara"))   # True

def mdc(a, b):
    """Algoritmo de Euclides: a versão com while vira uma linha."""
    if b == 0:           # caso base
        return a
    return mdc(b, a % b)             # redução: o resto sempre diminui

print(mdc(48, 18))   # 6

def conta_letra(letra, palavra):
    if not palavra:      # caso base: palavra vazia
        return 0
    achou = 1 if palavra[0] == letra else 0
    return achou + conta_letra(letra, palavra[1:])

print(conta_letra("u", "estrutura"))   # 2`;

export const codePythonBasico = `\
# Tipos primitivos e tipagem dinâmica
idade = 25           # int
altura = 1.75        # float
ativo = True         # bool
nome = "Ana"         # str

# Operadores especiais
print(7 // 2)        # 3   - divisão inteira
print(7 % 2)         # 1   - resto
print(2 ** 10)       # 1024 - potência

# Estruturas de controle
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "é par")
    else:
        print(i, "é ímpar")

# Funções - input() SEMPRE retorna str!
def dobrar(n):
    return n * 2

x = int(input("Digite um número: "))
print(dobrar(x))`;

export const codeStringsListas = `\
# ── Strings: IMUTÁVEIS ──────────────────────────
s = "python"
print(s[0])          # 'p'   - índice 0
print(s[-1])         # 'n'   - último
print(s[1:4])        # 'yth' - slice
print(s.upper())     # 'PYTHON'
print(s.split('t'))  # ['py', 'hon']
# s[0] = 'P'        # TypeError! strings não mudam

# ── Listas: MUTÁVEIS ─────────────────────────────
lista = [10, 20, 30]
lista.append(40)     # [10, 20, 30, 40]
lista.insert(0, 5)   # [5, 10, 20, 30, 40]
lista.pop(0)         # remove o 5 → [10, 20, 30, 40]
lista[0] = 99        # [99, 20, 30, 40]

# ── Aliasing vs Clonar ───────────────────────────
a = [1, 2, 3]
b = a          # aliasing: b e a são o MESMO objeto
c = a[:]       # clone:    c é uma cópia independente

b.append(4)
print(a)       # [1, 2, 3, 4] - afetado pelo alias!
print(b)       # [1, 2, 3, 4]
print(c)       # [1, 2, 3]    - clone não foi afetado
print(a is b)  # True  - mesmo objeto
print(a is c)  # False - objetos diferentes`;

export const codeTad = `\
# TAD define O QUÊ - a interface abstrata
# Implementação define COMO - a classe concreta

class Data:
    """TAD Data: operações dia(), mes(), ano(), eh_valido()"""
    def __init__(self, d, m, a):
        self._dia = d    # dados privados (implementação)
        self._mes = m
        self._ano = a

    # Interface pública (O QUÊ o usuário pode fazer)
    def dia(self):
        return self._dia

    def mes(self):
        return self._mes

    def ano(self):
        return self._ano

    def eh_valido(self):
        return 1 <= self._mes <= 12 and 1 <= self._dia <= 31

# Quem usa o TAD não precisa saber COMO está implementado
d = Data(15, 6, 2025)
print(d.dia())        # 15
print(d.eh_valido())  # True
# d._dia = 99  ← possível, mas viola o contrato do TAD`;
