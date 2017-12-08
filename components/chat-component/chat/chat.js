import {SendForm} from '/components/chat-component/send-form/send-form.js';
import {History} from '/components/chat-component/history/history.js';

const DEFAULT_AVA_LINK = '/lib/defaultAva.jpg';

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
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User1',
                message: 'Text1',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User1',
                message: 'Text1',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User1',
                message: 'Text1',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User1',
                message: 'Text1',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User1',
                message: 'Text1',
                picture: DEFAULT_AVA_LINK,
                time: '',
            },
            {
                sender: 'User2',
                message: 'Text2',
                picture: DEFAULT_AVA_LINK,
                time: '',
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

        let formatter = new Intl.DateTimeFormat('ru', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        this.history.setData([
            {
                sender: 'Me',
                message,
                picture: DEFAULT_AVA_LINK,
                time: formatter.format(Date.now()),
            },
            ...this.history.data,
        ]);

        this.render();
    }
}

