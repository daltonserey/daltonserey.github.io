Too many studies on software reuse. But I fail to understand such
an effort. In my opinion, the best and truly effective form of
software reuse is the language itself and libraries (frameworks
included). 

What do you do if you think part of your software can be reused?
You isolate it in a library. This makes it easy to reuse. So what
is the problem with this approach? Why so many different ideas
that we never see reach the state-of-the-practice?

A subject that deserves a word when we talk as libraries to reuse
software is version control. With respect to this subject, we
must mention that semantic version control is a great idea. It
gives me a clear way to understand on what we do depend. Combined
with proper automated testing it can give us the proper way to
upgrade dependencies. Suppose we depend on a certain version of
library. How do go to the net one? Well, if the new one only
changes by a patch, we are supposed to do it without fear. If it
changes the major number, it is clear it deserves full attention
and possibly a significant rewrite of the dependent code. If the
change is a minor, ... But, all of them will be more easy and
safe to perform if we do them based on lots of automated testing
of the relation of the dependen portion and the library that
provides the functionality.

- Take a look at conferences (Internation Conference on Software
  Reuse, 2017, na UFBA, for instance).
