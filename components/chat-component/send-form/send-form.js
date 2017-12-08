/**
 * Form for sending messages in chat
 */
export class SendForm {
    /**
     * Init SendForm
     * @param {Element} elem
     * @param {Function} onSubmit
     * @param {Object} data
     */
    constructor({elem, onSubmit}) {
        this.elem = elem;
        this.elem.addEventListener('submit', this._onSubmit.bind(this));
        this.onSubmit = onSubmit;
    }

    /**
     * Generate html
     */
    render() {
        this.elem.innerHTML = sendFormTemplate();
    }

    /**
     * Action on submit send form
     * @param {Object} event
     * @private
     */
    _onSubmit(event) {
        event.preventDefault();
        let text = event.target.querySelector('.send-form__message');
        let message = text.value;
        if (this._verifyMessage(message)) return;
        this.onSubmit({
            message,
        });
    }

    /**
     * Verify message (is it empty)
     * @param {string} message
     * @return {boolean}
     * @private
     */
    _verifyMessage(message) {
        return (message === '');
    }
}
