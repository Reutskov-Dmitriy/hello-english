//HTML HEADER
class ComponentHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header class="header">
		<nav class="header-menu">
			<div class="header-menu__logo logo">
				<h1 class="logo__title logo__title--position logo__title--size"><a href="../../../index.html#home">Hello English</a>
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
					<li class="header-menu__item"><a href="../../../index.html#home" class="header-menu__link"> Home</a></li>
					<li class="header-menu__item"><a href="../../../index.html#section-levels" class="header-menu__link">Study With Us</a>
					</li>
					<li class="header-menu__item"><a href="../../../source/pages/contacts.html" class="header-menu__link">Contact
							Us</a></li>
				</ul>
			</div>
		</nav>
	</header>`
	}
}

customElements.define('component-header', ComponentHeader);

//HTML FOOTER
class ComponentFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer class="footer">
				<div class="footer__column">
					<div class="footer__logo logo">
						<h1 class="logo__title logo__title--size"><a href="#home">Hello English</a> </h1>
					</div>
					<div class="footer__row">
						<div class="footer__copyright">Copyrights © 2022 HelloEnglish</div>
						<ul class="footer__social social">
							<li class="social__icon _icon-facebook"><a href="#"></a></li>
							<li class="_icon-twitter"><a href="#"></a></li>
							<li class="_icon-instagram"><a href="#"></a></li>
						</ul>
					</div>

				</div>
			</footer> `
	}
}

customElements.define('component-footer', ComponentFooter);