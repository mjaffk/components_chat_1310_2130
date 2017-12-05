import {SendForm} from './send-form.js';
import {History} from './history.js';

/**
 * Simple chat messenger
 */
export class Chat {
    /**
     * Init chat
     * @param {Element} elem
     * @param {Object} data
     */
    constructor({elem, data = {}}) {
        this.elem = elem;
        this.history = new History({
            elem: document.createElement('div'),
        });

        this.elem.classList.add('container');

        this.sendForm = new SendForm({
            elem: document.createElement('div'),
            onSubmit: this._onSubmitSendForm.bind(this),
        });

        this.elem.append(this.history.elem, this.sendForm.elem);

        this.history.setData([
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
            {
                sender: 'User1',
                message: 'Text1',
            },
            {
                sender: 'User2',
                message: 'Text2',
            },
        ]);

        this.render();
    }

    /**
     * Generate html
     */
    render() {
        this.history.render();
        this.sendForm.render();
    }

    /**
     * Pass message from send-form to history
     * @param {string} message
     * @private
     */
    _onSubmitSendForm({message}) {
        this.history.setData([
            {
                sender: 'Me',
                message,
            },
            ...this.history.data,
        ]);

        this.render();
    }
}

