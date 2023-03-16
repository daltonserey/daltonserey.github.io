build-p1:
	pandoc \
	--standalone \
	--data-dir ~/curso-clojure/licoes/etc/pandoc/ \
	--from markdown+definition_lists+fenced_divs \
	--css ../css/texto.css \
	--variable title="" \
	p1/index.md \
	> docs/p1/index.html
    
