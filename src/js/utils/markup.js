
class MarkupGenerator {

  constructor(selector, template) {
    this.selector = selector;
    this.template = template;
  }

  createMarkup(data) {
    const markupString = this.template(data);
    this.renderMarkup(markupString);
  }

  renderMarkup (string) {
    this.selector.insertAdjacentHTML('beforeend', string);
  }

  resetMarkup() {
    this.selector.innerHTML = '';
  }
};

export default MarkupGenerator;
