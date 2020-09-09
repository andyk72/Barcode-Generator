import Page from './Page';

export default class BarcodeGenerator {

    constructor(options) {
        this.containerElement = options.containerElement; 
        this.barcodeIdPrefix = options.barcodeIdPrefix;
        this.barcodesPerPage = options.barcodesPerPage;
        this.pagesNumber = options.pagesNumber;
    }

    generate() {
        for (let n = 1; n <= this.pagesNumber; n++) {
            this.generatePage(n);
        }
    }

    generatePage(pageNum) {
        const page = Page.addPage(this.containerElement, {pageNum: pageNum});
        page.addBarCodes({
            idPrefix: this.barcodeIdPrefix,
            barcodesNum: this.barcodesPerPage,
            barcodesOffset: (pageNum - 1) * this.barcodesPerPage
        });
    }
}