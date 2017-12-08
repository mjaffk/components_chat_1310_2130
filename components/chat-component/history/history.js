'use strict';

/**
 * History of messages in chat
 */
export class History {
    /**
     * Init history
     * @param {Element} elem
     * @param {Object} data
     */
    constructor({elem}) {
        this.elem = elem;
        this.data = [];
    }

    /**
     * Set data
     * @param {Array} data
     */
    setData(data) {
        this.data = data;
    }

    /**
     * Generate html
     */
    render() {
        this.elem.innerHTML = historyTemplate({data: this.data});
    }
}
