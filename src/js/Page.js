import Barcode from './Barcode';

const DEFAULT_PAGE_NUM = 1;
const DEFAULT_PAGE_SIZE = 'A4';

export default class Page {

    constructor(options = {}) {
        this.pageNum = options.pageNum || DEFAULT_PAGE_NUM;
        this.pageSize = options.pageSize || DEFAULT_PAGE_SIZE;
        this.htmlPage = null;
        this.htmlLabels = null;
    }

    static addPage(parentElement, options) {
        const page = new Page(options);
        parentElement.appendChild(page.htmlGetPage());
        return page;
    }

    htmlGetPage() {
        this.htmlPage = document.createElement('div');
        this.htmlPage.setAttribute('class', `page page-${ this.pageNum }`);
        this.htmlPage.setAttribute('size', this.pageSize);
        this.htmlPage.appendChild(this.htmlGetLabels());
        return this.htmlPage;
    }

    htmlGetLabels() {
        this.htmlLabels = document.createElement('div');
        this.htmlLabels.setAttribute('class', `labels`);
        return this.htmlLabels;
    }

    addBarCodes(options) {
        const barcode = new Barcode();
        options = {
            ...options,
            parentElement: this.htmlLabels
        }
        barcode.htmlBarcodes(options);
    }

}