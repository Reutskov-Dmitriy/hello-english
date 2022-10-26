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