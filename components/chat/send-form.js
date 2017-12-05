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
        this.elem.innerHTML = `
            <form class="send-form">
                <textarea class="send-form__message"></textarea>
                <input type="submit" class="send-form__send" value="Send">
            </form>
        `;
    }

    /**
     * Action on submit send form
     * @param {Object} event
     * @private
     */
    _onSubmit(event) {
        event.preventDefault();
        let textarea = event.target.querySelector('textarea');
        let message = textarea.value;
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
