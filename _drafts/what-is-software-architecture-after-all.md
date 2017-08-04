The academy has been working with the concept of software
architecture for a long time now. However, we still fail to give
a clear definition that persists in the head of our students and,
as a consequence, in the heads of professionals we help graduate.

Why is that? Why we fail at that? Before that, do we really fail
or is this a personal perception of it? What about Izabella's
findings in her master thesis? What about the so many different
definitions of software architecture? Many of us in academy say
they are all equivalent, after all, but are they really? How do
our students interpret architecture? How do professionals
interpret it? Do they use the expression at all? In what
contexts? Does it mean the same that it means for us in academy?
If they don't use the expression, is it usefull at all? Are
professionals lacking somenthing we are failing to communicate
in a more appropriate way? Should we use a different word/term?
Shouln't we express ourselves more clearly? Or isn't it a purely
academic concern after all?

In my personal definition (it is really personal, but it is
supported by some authors, like Taylor, Medvidovic and Dashofy in
_Software Architecture: Foundations, Theory and Practice_, Wiley,
2009) I consider that architecture is merely a team's selection
of the most important (design) decisions (in fact, I even define
design as the set of all decisions involved in the construction
of a software system, even those that weren't conciously taken).
Thus, a subset of the decisions is considered architectural,
because one wouldn't want them to change without serious
consideration and calculation of the impacts. Furthermore,
because they were considered architectural, they can be relied
upon to take further decisions and that makes communication
easier among team members. So that would be easier to teach to
students: whatever you decide wrt hwo you're gonna develop the
software, that is design. Whatever subset of decisions you want
to make public to all developers to rely upon in the long term to
take minor decisions, that is the architecture.

Well, then we come the the documentation and language aspect.
What language should we use to document design and architectures?
Well, we use english (portuguese in my personal case) for most of
them. And which tools? We use text, emails, shared documents,
wikis, slack, whatsapp, and whatever is at hand. We even use
spoken words at meetings... if that works, we go ahead. Of
course, that doesn't mean that is the best approach. However,
there is no best approach for all... no one size fits all. Small
projects may benefit from simple meetings and sentences and
diagrams drawn in a whiteboard and a picture of them. As long as
everybody understands the decisions, that may welll work pretty
well. And that will be the best way to do it. Of course, given
enough time, the decisions might be forgotten or the rationale
for them might be obscured... that may well stimulate developers
to intentionally ignore or even forget them. And that may become
a problem... or not. It may simply be the case that the
architecture will evolve organically without any specific control
and that might work for some projects (some would call that
architectural drift). However, it is not difficult to imagine
that many projects can be taken to very risky low level design
decisions during changes or evolution if that happens. And that
is the reason why we want to control software architecture...
(keep in mind, software architecture === major design decisions).
In essence, we want them to be controlled, so we can derive
certain properties of the system from them (either internal or
external properties). So lets come back to language... what
language should we use? Well, it depends on the level of
assurance you want wrt to the compliance of the software to the
idealized architecture. In my opinion, there is a continuum of
alternatives from a set of completely formal languages and tools,
perhaps including software synthesis to avoid verification, to a
completely organic, emergent architecture in which no a priori
decision is taken, verified or even maintained between versions
of the software. Within this spectrum, we have all sorts of
possibilities, ranging from plain english and enforcement based
on code review, passing by partially automated tools that enforce
certain aspects or types of decisions and simply ignore others,
until dedicated ADL (architecture description langugaes) which
are specific to write architectural decisions. In fact, I lied.
This is not something to be seen as a linear space among which we
can select one point. It is more like a multidimensional space.
Several different dimensions would allow us to choose among
different aspects to formalize and some to keep as informally
specified. 

Well, after all, which language should we teach our students to
use? I think we should definetely teach our students to use
english (portuguese) to specify and reason about architectural
(as well as design) decisions. It is english they are going to
use in all contexts. From the most informal one, to the most
formal one, natural language is something they will not be able
to scape from. They need to be good at communicate their
decisions and relate them to existing ones. They should be able
to tell them to youger, novice developers so they don't break the
code. They must be able to tell them to more formal oriented
developers so they can formalize their decisions somehow, either
using set theory or some sort of ADL. But no one of them will be
free from using natural language to specify architectural
decisions. That is the reason why I think this is the most
important of all languages.

Should we teach some other language as well? Yes and no. I think
we should teach students to use set theory as a complement to
specifiy their design and architectures. Yes, pure and no
particular syntax, but pure set theory, logic (predicate calculus
or first order logic) and basic mathematics to complement natural
language and make it unumbiguous only when necessary. This last
sentence, however, cannot be overemphasized: to make it
unumbiguous only when necessary. Why? Because math oriented
computer scientists (which you can find very easily in any
computer science department) are very attracted to this aspect of
the architecture specification. The set theory, math and logic
(in particular, syntax issues) should not be the major concern.
They should only complement certain parts of a specification to
make it precise, if necessary. See, most times, it is simply not
necessary. In these cases, pure natural language should be
enough. A second element that should be used in any training for
architectural decisions should be diagrams. Can/should we use
UML? Yes, of course. However, the same sort of observations I did
before to set theory, first order logic and math is valid with
UML and whatever langugage is used. The language here is the less
important aspect to convey. What really matters is make the
student aware that in most projects, some decisions might be more
important than others and that it might be a good idea to keep
them very clear to all developers even those who will enter the
project in the future. Thus, it might also be a good idea to
write those decisions in a clear and unumbiguous way.

And what about keeping several volumes (one for each arhitectural
view) of documentation? Well, I think the same is valid here.
Some projects might benefit from having none. Some might benefit
from haven all of them. However, in any case, one must always
keep in mind that the larger the documentation the less likely it
will be read. And, thus, the less likely the architecture will
survive intact to long periods of evolution. In any case, I would
try to keep the volumes or all the documentation in the smaller
space possible. This would make it very easy to communicate and
remember. Whenever I see a very long architetural documentation I
think it keeps together both low level and high level decisions.
In my opinion, to maximize our chances of success, we should try
to keep all architectural decisions in every developer's head.

What about automated verification? Well, unfortunately not every
kind of decision is easy to automatically verify. For those
decisions that can be automatically verified at a low cost, I
would certainly go for it. Particularly, I think design tests are
a very good approach for that (take a look at my page on design
tests).

Finally, I think we should teach software architecture as
a standalone discipline. However, elements of it could be better
suited at othe disciplinas, such as programming ones (project
courses, software engineering, etc). A separate discipline could
be interesting, however, I think we should cover specially the
kind of decisions that are typically taken, how can we
communicate and express them precisely, how we can organize a
system in large parts and separate responsibilities, etc. We
should also see several failedd projects that failed at
communication the design decisions.

We should also consider Brooks definition of architecture (see
Mythical Man-Month). There he considers (as far a I remember)
architecture as the user interface (or API) of a system. We
should reread it.

Can we recover architecture automatically? Well, according to the
definition I gave, the short answer is no. Why not? Because
architecture is a set of selected design decisions. Those
decisions that are considered

--

Read

* 4 + 1 architectural view: https://en.wikipedia.org/wiki/4%2B1_architectural_view_model

* A unified framework for studying architectural decay of
software systems, tese de doutorado de 2014 de Joshua Garcia da
University of Southern California
(http://digitallibrary.usc.edu/cdm/ref/collection/p15799coll3/id/463954)
Citada por Crescêncio em sua qualificação de doutorado. Foi aluno
de Nenad Medvidovic.

* A comparative analysis of software architecture recovery
techniques. J. Garcia, 2013. Int. Workshop of Program
Comprehension.
