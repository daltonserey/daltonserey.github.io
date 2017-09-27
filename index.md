---
---
# Dalton Serey, UFCG

I am a professor in the [Computer Science
Department](http://www.computacao.ufcg.edu.br) at the
[Universidade Federal de Campina Grande](http://www.ufcg.edu.br),
Brazil. I am also the director and one the the researchers of the
[Software Practices
Laboratory](http://splab.computacao.ufcg.edu.br/).

My academic interests are in computer programming, software
engineering and, more recently, computers and education. Since I
added computers and education to the list the focus of my
interests have shifted towards human and social aspects (or it
was the other way around?). Because I am impatient I prefer
research topics and projects that can be applied as soon and as
close to me as possible.

* [Students](/students)
* [Programação 3 (2017.2)](/prog3-20172)

<ul>
  {% for post in site.posts %}
    <li>
      <small><span style="color: gray;">{{ post.date | date: '%d/%m/%Y' }}</span></small>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
