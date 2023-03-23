class: center, middle, nonum
# Python em 60 minutos
(Introdução, claro!)

<img style="width:20%; margin: 1em;" src="python-logo.svg">

### Programação I, Computação@UFCG
©2023 Dalton Serey, UFCG

---
## O que é Python?

Python é uma linguagem de programação.

---
## E o que é uma linguagem de programação?

Uma linguagem de programação é uma linguagem artificial
projetada especificamente para expressar programas.

> O termo .bblue[linguagem artificial] é usado em oposição ao
> termo _linguagem natural_ que se refere às linguagens humanas,
> tais como o português, o espanhol, o inglês, etc.


---
## E o que são programas?

Um programa é um texto (escrito em uma linguagem de programação)
que expressa processos que queremos que o computador execute
automaticamente, com um propósito qualquer. 

> Tipicamente, queremos que ele _compute_ (ou calcule) alguma
> coisa.  Nos tempos atuais, contudo, esse _computar_ pode não
> ser algo de natureza numérica. A computação moderna é muito
> mais focada em processamento simbólico, textual e conceitual
> do que numérico.

---
class: blueback nonum center middle
# Exemplos de programas

---
class: bluebar
#### Exemplo 1

Um exemplo simples, escrito em Bash

```bash
mkdir disciplinas
cd disciplinas
mkdir fmcc ic lpt p1
cd fmcc
mkdir arquivos exercicios
cd ../ic
mkdir arquivos exercicios provas
cd exercicios
mkdir ex1 ex2 ex3
```

O texto acima é o conteúdo do arquivo `p1.sh`. A
extensão `sh` é usada para arquivos cujo conteúdo sejam
programas (ou _scripts_) shell.

Cada linha do programa é um comando (ou instrução). Como são
parte do mesmo programa, podemos pedir a Bash que as execute
de uma única vez.

---
class: bluebar
#### Exemplo 2

```python
import os

os.mkdir("disciplinas")
os.chdir("disciplinas")
os.mkdir("fmcc")
os.mkdir("ic")
os.mkdir("lpt")
os.mkdir("p1")
os.chdir("fmcc")
os.mkdir("arquivos")
os.mkdir("exercicios")
os.chdir("../ic")
os.mkdir("arquivos")
os.mkdir("exercicios")
os.mkdir("provas")
os.chdir("exercicios")
os.mkdir("ex1")
os.mkdir("ex2")
os.mkdir("ex3")
```

Este programa faz o mesmo, mas está escrito em Python.

---
class: bluebar
#### Exemplo 3

```python
import os

os.mkdir("disciplinas")
os.chdir("disciplinas")

for d in [ "fmcc", "ic", "lpt", "p1"]:
    os.mkdir(d)

for d in ["fmcc", "ic"]:
    os.chdir(d)
    os.mkdir("arquivos")
    os.mkdir("exercicios")
    if d == "ic":
        os.mkdir("provas")
    os.chdir("..")

for ex in ["ex1", "ex2", "ex3"]:
    os.mkdir(f"ic/exercicios/{ex}")
```

Outra versão em Python, com código mais estruturado. Melhor? Pior?

---
class: bluebar
#### Exemplo 4

```python
def media(numeros):
    soma = 0
    for n in numeros:
        soma += n
    return soma / len(numeros)


def main():
    nums = []
    while True:
        linha = input()
        if linha == "": break
        nums.append(int(linha))

    print(media(nums))


if __name__ == "__main__":
    main()
```

---
class: bluebar
#### Exemplo 5

```python
def so_pares(numeros):
    pares = []
    for n in numeros:
        if n % 2 == 0:
            pares.append(n)

    return pares


def main():
    nums = []
    while True:
        linha = input()
        if linha == "": break
        nums.append(int(linha))

    for n in so_pares(nums):
        print(n)


if __name__ == "__main__":
    main()
```

---
class: center middle blueback
# Não tô entendendo nada!

Confessem. Alguns de vocês já devem ter pensado em sair direto
pra coordenação, pra trancar o curso. Não é o caso!


Vamos recomeçar do básico.

---
class: greenback middle center
# Como estudar uma LP?

???

O estudo de uma LP requer certa postura mental sobre o conteúdo a
ser absorvido. Ao invés de encarar a LP como mera ferramenta para
instruir um computador a fazer certas tarefas, é conveniente
pensar na linguagem como um arcabouço para expressar e organizar
nossas ideias a respeito de _processos_.

Assim, ao encararmos o estudo de uma LP, vale a pena prestar
atenção aos mecanismos proporcionados pela linguagem para
construir ideias complexas a partir de ideias e conceitos mais
simples e primitivos.

---
## Perspectiva linguística

É conveniente apoiar o estudo de LPs na terminologia e
conceitos da linguística. De fato, parte significativa da teoria
de LPs foi desenvolvida por Noam Chomsky, um renomado
_linguista_. Quatro conceitos são particularmente importantes:
- .bblue[léxico]: o vocabulário ou conjunto de palavras de uma
  linguagem; aqui, incluiremos as regras que nos permitem
  formar novas palavras;
- .bblue[sintaxe]: regras que determinam quais frases
  são consideradas _bem formadas_ (estruturalmente válidas) na linguagem;
- .bblue[semântica]: regras que determinam o significado _das
  frases válidas_ na linguagem e como serão interpretadas;

???

Encarar a LP por uma perspectiva linguística é conveniente porque
uma LP é em última instância uma linguagem também. Claro que não
precisaremos desenvolver habilidades de _listening_ ou _speaking_
para estas linguagens, mas certamente precisaremos desenvolver
habilidades de _reading_ e de _writing_.

Questionar cada novo elemento ou cada nova experiência no
aprendizado de uma LP estudado da perspectiva da linguística
ajuda a elevar o aprendizado do nível da mera praticidade e
técnica ao nível da compreensão das partes que formam a linguagem
e de suas relações com outras linguagens. É por isso que defendo
que o aprendizado de uma LP deve se dar em contato e comparação
com outras LPs aprendidas em paralelo, ainda que com menor
profundidade. O objetivo é poder comparar léxico, sintaxe,
semântica e pragmática.

Pragmática: estudo da intenção e efetividade do uso da
  linguagem, considerando o contexto e agentes envolvidos.

---
## Perspectiva prática

Outra forma de encarar o estudo de LPs é de uma perspectiva em
que são vistas como ferramentas para _pensar_ e _organizar_
ideias sobre _processos_. E prestar atenção aos mecanismos
proporcionados para combinar ideias simples para formar ideias
complexas. Toda LP proporciona 3 tipos de facilidades para isso:

1. .bblue[expressões primitivas] que permitem expressar as
   entidades mais simples com as quais a linguagem pode
   trabalhar;
2. .bblue[mecanismos de combinação] que permitem criar elementos
   compostos a partir de elementos mais simples; e
3. .bblue[mecanismos de abstração] que permitem nomear e
   manipular elementos compostos como unidades e como se fossem
   primitivos.

???


Uma segunda perspectiva é proposta por Abelson, Sussman e Sussman
no clássico _Structure and Interpretation of Computer Programs_.
Nela, a ideia é encarar LPs não como uma meras ferramentas para
instruir o computador a exibir certos comportamentos. Mas vê-las
como ferramentas para pensar e organizar ideias sobre
processos.

Ao aprender uma LP, ajuda tentar enquadrar
cada elemento ou experiência na linguagem nessas categorias. Isso nos obriga
a perguntar: _Pra quê serve isto? Qual seu propósito na
linguagem? Como isso me ajuda a expressar ideias complexas
evitando complexidade desnecessária?_

Vou colocar aqui o texto original
dos autores a respeito do tema:

Seção 1.1 The Elements of Programming (do SICP)

A powerful programming language is more than just a means for in-
structing a computer to perform tasks. e language also serves as
a framework within which we organize our ideas about processes.
us, when we describe a language, we should pay particular
aention to the means that the language provides for combining
simple ideas to form more complex ideas. Every powerful language


has three mechanisms for accomplishing this:

- primitive expressions, which represent the simplest entities
  the language is concerned with,
- means of combination, by which compound elements are built from
  simpler ones, and
- means of abstraction, by which compound elements can be named
  and manipulated as units.

---
class: greenbar
#### Exemplo 6

```python
raio = 12.5
pi = 3.14159265
area = pi * raio ** 2

print(area)                    # 490.8738515625
```

O que há aqui pra aprender de Python?

--

- sobre expressões primitivas:
  - como os números são expressos nos programas?
  - como operações matemáticas primitivas são expressas?
- vemos ainda uma _atribuição_ (um "tipo de frase" de Python)
  - atribuição é mecanismo mais básico de _abstração_
  - permite dar um nome a um dado na memória
  - e com o nome, podemos escrever outras expressões
- por fim, vemos uma _expressão de invocação de função_: `print`

---
class: greenbar
#### Exemplo 7

```python
import math

raio = float(input())
area = math.pi * raio ** 2

print(area)                    # A saída depende da entrada!
```

E aqui?

- o comando `import` diz a Python que usaremos objetos da
  biblioteca de matemática (`math`); no caso, usaremos `math.pi`
- vemos ainda duas novas funções:
  - `input`: faz o processo ler um texto da .bred[entrada]
  - `float`: produz um objeto do tipo float a partir de um texto

---
# O que devo aprender de Python?

Os exemplos vistos dão uma minúscula mostra do que podem ser
programas escritos em Python. Contudo, acredito que os elementos
de linguagem que os exemplos exibem devem cobrir algo próximo de
90% de tudo que veremos no curso.

Lembre, esta é apenas a primeira aula de Python, propriamente
dita. Logo, não há motivo pra alarde. Se você conseguiu entender
de modo bem geral do que trata cada programa, é sinal de que tudo
vai se encaixar em breve na sua cabeça.

---
## Palavras reservadas de Python

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
</pre>

Em Python há apenas 35 _palavras reservadas_ (também chamadas de
_palavras-chave_ ou _keywords_):

---
## Palavras reservadas usadas em p1

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
False                 else       import         
None       break                 in              
True                             is         return
and        continue   for                   
           def        from                  while
assert     del                   not            
           elif       if         or              
</pre>

Das 35, apenas 21 são **efetivamente** usadas.


---
## Unidades 1 e 2

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
                                 import          
                                 
                                            return
                                                 
           def                                   
                                                
                                                 
</pre>

Nas unidades 1 e 2, só apresentamos três palavras reservadas da
linguagem. Nesta unidade, vemos ainda o comando de atribuição
(que, em Python, não tem palavra reservada associada) e funções
de leitura e manipulação de entrada e saída (`input`, `print`,
`int`, `float` e f-strings).


---
## Unidade 3

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
False                 else       import     
                                   
True                                        return
and                                             
           def                                   
assert                           not            
           elif       if         or                
</pre>

A unidade 3 é, provavelmente, a que mais introduz palavras-chave
(nove no total). Mesmo assim, é muito mais por conta do uso do
tipo lógico (`bool`) que requer seis palavras-chave: `True`,
`False`, `and`, `or`, `not`  e `assert`. Condicionais
requer outras três: `if`, `elif`, `else`.

---
## Unidades 4 e 5

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
False                 else       import
           break                 in                   
True                                        return
and        continue   for                      
           def                              while
assert                           not            
           elif       if         or                
</pre>

As unidades 4 e 5 introduzem outras oito palavras-chave. Quatro
relacionadas a sequências e laços: `in`, `for`, `while`, `break`
e `continue`. Como apresentamos arquivos, também vemos,
bem superficialmente, as quatro palavras reservadas para tratamento
de exceções: `try`, `except`, `finally` e `raise`. Mas nem as
usamos mais adiante.

---
## Unidades 6, 7, 8 e 9

<pre style="background: #225; color: white; padding: 0.5em; border-radius: 10px;">
False                 else       import
           break                 in                   
True                                        return
and        continue   for                      
           def                              while
assert                           not            
           elif       if         or                
</pre>

Curiosamente, nenhuma nova palavra reservada da linguagem é
introduzida nas unidades a partir da 6.

> Reveja os exemplos e perceba que eles cobrem todos os temas e
> que quase todas as palavras-chaves foram usadas (exceto,
> algumas, mas mesmo assim há alguma dos mesmos conjuntos).
