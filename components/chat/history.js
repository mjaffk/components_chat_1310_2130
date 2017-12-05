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
        this.elem.innerHTML = this.data.map(
            ({sender, message, time = '', picture = '../../defaultAva.jpg'}) => {
                return `
                <div class="history__message-box">
                    <div class="history_picture">
                        <img src="${picture}" title="user pic"/>
                        <span class="history__time">${time}</span>
                    </div>
                    <div class="history__message">
                        <span class="history__sender">
                            ${sender}
                        </span>
                        <p class="history__text">
                            ${message}
                        </p> 
                    </div>
                </div>
            `;
            }).join('\n');
        this.elem.classList.add('history');
    }
}
