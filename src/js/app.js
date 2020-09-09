import BarcodeGenerator from './BarcodeGenerator';

const bcg = new BarcodeGenerator({
    containerElement: document.querySelector('.app'),
    barcodeIdPrefix: 'WLM-',
    barcodesPerPage: 24,
    pagesNumber: 10
});

bcg.generate();