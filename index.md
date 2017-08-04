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
interests have shifted towards human and social aspects. Also,
because I am impatient I prefer research topics and projects that
have potential to be applied soon and as close to me as possible.

<ul>
  {% for post in site.posts %}
    <li>
      <small><span style="color: gray;">{{ post.date | date: '%m%d%Y' }}</span></small>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
