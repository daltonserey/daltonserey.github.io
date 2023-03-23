class: center, middle, nonum
# Python e Pip
(Roteiro de Laboratório)

<img style="width:20%; margin: 1em;" src="python-logo.svg">

### Programação I, Computação@UFCG
©2023 Dalton Serey, UFCG


---
### Exercício 1: `roteiro1/area1.py`

```python
raio = 12.5
pi = 3.14159265
area = pi * raio ** 2

print(area)                    # 490.8738515625
```

1. Crie um diretório chamado `roteiro1`
2. No diretório, crie um arquivo `area1.py` com o conteúdo acima
3. Execute o programa com o comando: `python3 area1.py`
4. Mude o programa para calcular a área de um círculo de raio `10.0`

---
### Exercício 2: `roteiro1/area2.py`

```python
import math

raio = float(input())
area = math.pi * raio ** 2

print(area)                    # A saída depende da entrada!
```

1. No mesmo diretório, crie `area2.py` com o conteúdo acima
2. Execute o programa com o comando: `python3 area2.py`
   - crie casos de teste e veja se o programa funciona bem
   - para criar os casos de teste, não use o programa!
   - anote os casos de teste no arquivo `testes-area2.txt`

---
### Exercício 3: `roteiro/perimetro.py`

1. Copie o programa `area2.py` para o arquivo `perimetro.py`
   - use o comando: `cp area2.py perimetro.py`
   - confira o comando, olhando a listagem do diretório com `ls`

2. Modifique `perimetro.py` para que calcule o perímetro do círculo
   - se não lembrar da fórmula, pesquise na web

3. Execute seu novo programa e confira que está funcionando bem
   - crie casos de teste e veja se o programa funciona bem
   - para criar os casos de teste, não use o programa!
   - anote os casos de teste no arquivo `testes-perimetro.txt`

---
class: blueback middle center
# pip: Package Installer for Python

---
# Package Manager

Um _package manager_ é um sistema que gerencia a instalação de
bibliotecas e ferramentas no ambiente de programação de alguma
LP.

O _package manager_ oficial de Python é chamado `pip`.

---
# Como executar `pip`?

Embora `pip` seja um comando que pode ser executado de forma
independente de Python, é conveniente executar o `pip` sempre
usando o comando que você usa para executar Python.

O motivo é simples: se você tem múltiplas versões de Python
instaladas, ao rodar apenas o comando `pip` há risco de que a
instalação seja feita em um Python diferente do esperado.

Para rodar o `pip` via Python, use comandos no seguinte formato
geral:

```bash
python3 -m pip <subcomando de pip>  <argumentos>...
```

Observe que o verdadeiro comando, do ponto de vista do shell, é
`python3` (ou a versão que você usar). Contudo, a opção `-m pip`
faz o `pip` correto ser executado, garantindo a instalação
esperada.

---
### Exercício 4: instale o `snakegame`

1. Usando o `pip`, instale o jogo `snakegame`
   - para isso, use o comando `python3 -m pip install snakegame`
   - aguarde os dados serem baixados da web
   - se ocorrer algum erro na instalação, peça ajuda

2. Verifique se o programa está acessível para executar
   - se tudo correu bem, o comando `snakegame` inicia um jogo
   - se o jogo não funcionou, peça ajuda

---
# Sugestões de pacotes Python

Pacotes feitos pela comunidade podem ser colocados à disposição
para qualquer usuário, através do: https://pypi.org/. Seguem
alguns pacotes apenas para você testar os comandos:

- [MediaKit](https://pypi.org/project/mediakit/) baixa
vídeos do YouTube da linha de comando. Foi
feita por um ex-aluno nosso. A primeira versão, como projeto da
disciplina.

- [Snake](https://pypi.org/project/pysnakepygame/) versão bem
  simples do classico jogo da cobrinha.

- [Interplanetary-Invaders](https://pypi.org/project/Interplanetary-Invaders/)
é um jogo mais sofisticado feito no PyGame.

- [Requests](https://pypi.org/project/requests/) permite acesso à
  web (lado cliente do protocolo HTTP) em Python. É
  a biblioteca mais usada e baixada de Python.

