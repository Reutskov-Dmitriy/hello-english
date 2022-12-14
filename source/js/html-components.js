//HTML HEADER
class ComponentHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header">
		<nav class="header-menu">
			<div class="header-menu__logo logo">
				<h1 class="logo__title logo__title--position logo__title--size"><a href="/hello-english/index.html#home">Hello English</a>
				</h1>
			</div>
			<input type="checkbox" id="checkbox" class="header-menu__checkbox" hidden>
			<label for="checkbox" class="header-menu__btn">
				<div class="header-menu__icon">
					<span></span>
				</div>
			</label>
			<div class="header-menu__container">
				<ul class="header-menu__items">
					<li class="header-menu__item"><a href="/hello-english/index.html#home" class="header-menu__link"> Home</a></li>
					<li class="header-menu__item"><a href="/hello-english/index.html#section-levels" class="header-menu__link">Study With Us</a>
					</li>
					<li class="header-menu__item"><a href="/hello-english/source/pages/contacts.html" class="header-menu__link">Contact
							Us</a></li>
				</ul>
			</div>
		</nav>
	</header>`
	}
}

customElements.define('component-header', ComponentHeader);

//HTML CONTAINER AMOUNT
class ComponentAmount extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="amount amount--hide">
		<span class="amount__mark">Score: 0</span>
		<span class="amount__mistakes">Mistakes: 0</span>
	</div>
`
	}
}
customElements.define('component-amount', ComponentAmount);

//HTML FOOTER
class ComponentFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer class="footer">
				<div class="footer__column">
					<div class="footer__logo logo">
						<h1 class="logo__title logo__title--size"><a href="/hello-english/index.html#home">Hello English</a> </h1>
					</div>
					<div class="footer__row">
						<div class="footer__copyright">Copyrights © 2022 HelloEnglish</div>
						<ul class="footer__social social">
							<li class="social__icon "><a class="_icon-facebook" href="https://www.facebook.com/"></a></li>
							<li class="social__icon "><a class="_icon-twitter" href="https://twitter.com/"></a></li>
							<li class="social__icon "><a class="_icon-instagram" href="https://www.instagram.com/"></a></li>
						</ul>
					</div>

				</div>
			</footer> `
	}
}

customElements.define('component-footer', ComponentFooter);

