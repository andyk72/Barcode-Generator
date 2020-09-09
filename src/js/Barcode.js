import DomUtils from './DomUtils';

class Barcode {

    constructor(options) {}

    htmlBarcodes(options) {
        for (let c = 1; c <= options.barcodesNum; c++) {
            let barcodeId = this.getBarcodeId({
                prefix: options.idPrefix,
                count: options.barcodesOffset ? options.barcodesOffset + c : c
            });
            let label = this.htmlGetLabel(c);
            let htmlBarcode = this.htmlGetBarcodeElement(barcodeId);
            DomUtils.htmlInto(label, options.parentElement);
            DomUtils.htmlInto(htmlBarcode, label);
            JsBarcode(htmlBarcode, barcodeId);
        }
    }

    htmlGetLabel(labelNum) {
        const element = document.createElement('div');
        element.setAttribute('class', `label label-${ labelNum }`);
        return element;
    }

    htmlGetBarcodeElement(id) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('id', id);
        svg.setAttribute('class', 'barcode');
        return svg;
    }

    getBarcodeId(options) {
        return options.prefix + options.count;
    }

}

export default Barcode;