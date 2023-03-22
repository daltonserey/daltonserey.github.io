class: center, middle, nonum disabled
# Por que Clojure?
.center[![Right-aligned image](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Clojure_logo.svg/256px-Clojure_logo.svg.png?20161016020557)]
### Introdução a Clojure, Projeto UFCG/Nubank<br>
©2023 Dalton Serey, UFCG


---
class: bluebar
# Faz sentido estudarmos Clojure?!

A pergunta é válida, afinal Clojure…
- não é das linguagens mais “populares” da atualidade
  - nem está no _top 50_ do ranking da Tiobe
  - (bom, pelo menos está no _top 100_)
- tem uma sintaxe estranha, antiga
  - é baseada Lisp, uma linguagem criada em 1958!
- ninguém mais por aqui por perto, pelo menos na UFCG, a usa
- e, nunca deixemos de lembrar, a gente tem Python…
  - quem tem Python precisa de algo mais?

---
class: bluebar
# Poder estudar Lisp é um bom motivo

Pessoalmente, acho que aprender um pouco de Lisp ainda na graduação já
é motivo suficiente para estudar Clojure e até para participar de
qualquer projeto.

- Lisp (1958) é uma das 4 LPs antigas mais influentes **da história**
  - as outras são: Fortran (1957), Algol (1958) e Cobol (1959)
  - dessas, só Lisp e Fortran continuam em uso efetivo até hoje
  - só isto já é motivo suficiente (afinal, por que isto?)
- criada por John McCarthy (1958) como linguagem matemática
  - o objetivo era provar teoremas sobre computação
  - nasceu minimalista e só depois se percebeu que era apropriada
    para programar de forma elegante e clara

---
class: bluebar
# Ideias de LPs iniciadas por Lisp
- _condicionais_ em 1958 (Algol em 60, Fortran em 62)
- definição de _funções_ em 1958 (Fortran, só em 61)
- _recursividade_ em 1958 (Algol em 60 e Fortran em 77)
Fortran tinha um `if..goto` que comparava
números com zero, sem condições explícitas ou
operadores lógicos)
- _garbage collection_ em 59 (Algol, a segunda, só em 68!)
- suporte a estruturas de dados dinâmicas (listas e árvores)
- funções como entidades de primeira classe (prog funcional)
- código tratado como dado, prog. e expressões simbólicas
- outros: interpretação de código e interatividade (_repl_);
  tipos dinâmicos e variáveis sem tipo; suporte à metaprogramação (macros); otimização
  de _tail call_; escopo léxico e _closures_

???
> Há quem diga que Python, Ruby, Lua, JavaScript são, de certa
> forma, Lisp sob uma nova roupagem sintática


---
class: greenbar
# O que grandes mentes dizem sobre Lisp?

> "Lisp is a programmable programming language. Not only can you
> program in Lisp (that makes it a programming language) but you
> can program the language itself."

.sign[John Foderaro]

---
class: greenbar middle
> "Lisp isn't a language, it's a building material."

<span></span>

> "If you want to make a really good language, you have to invent Lisp." 

<span></span>

> "The greatest single programming language ever designed." 

.sign[Alan Kay (criador da OO)]

---
class: greenbar middle

> "Lisp is worth learning for the profound enlightenment
> experience you will have when you finally get it; that
> experience will make you a better programmer for the rest of
> your days, even if you never actually use Lisp itself a lot."

.sign[Eric Raymond]

---
class: greenbar middle

> "Although my own previous enthusiasm has been for syntactically
> rich languages, like the Algol family, I now see clearly and
> concretely the force of Minsky's 1970 Turing Lecture, in which
> he argued that Lisp's uniformity of structure and power of self
> reference gave the programmer capabilities whose content was
> well worth the sacrifice of visual form."

.sign[Robert Floyd<br><small>Na palestra de recepção do Turing Award</small>]

---
class: redbar middle

> "A LISP programmer knows the value of everything, but the cost
> of nothing."

.sign[Alan Perlis]

???

.bred[Ops!] Mas nem tudo são flores…

---
class: bluebar
# Outros motivos para estudar Clojure

Há motivos além da relação com Lisp. Clojure tem características
próprias que a fazem melhor escolha que outros dialetos Lisp.

- Clojure é uma linguagem moderna e dinâmica que é
  - eficiente tanto interpretada quanto compilada
- é _hospedada_ na JVM e interopera com objetos/bibliotecas Java
- tem excelente suporte p/ concorrência e paralelismo
  - _threads_, _s/w transactional memory_, _futures_, agentes, etc
  - estruturas de dados imutáveis/persistentes
- tem excelente suporte para desenvolvimento web
- tem bom suporte da comunidade (incluindo a indústria)
  - dispõe de bastantes bibliotecas e ferramentas
  - e é fácil achar excelente documentação e ajuda na web 

---
class: bluebar
# E, por fim, há empregos!

- Amazon, Walmart, Cisco, Netflix, CircleCI, ThoughtWorks,
  Atlassian, Globo (e várias de suas subsidiárias: G1, GShow,
  Cartola, etc), QuintoAndar,
  FlowFinance e Nubank são algumas das empresas que contratam
  devs Clojure

---
class: bluebar, middle, center
## E aí? Convenci você de que<br>vale a pena estudar Clojure?
