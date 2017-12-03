/* By Ekaterina Khorina */

'use strict';

let isActive = null;

/**
 * Construct object Clock
 */
export class Clock {
    /**
     * init clock
     * @param {Element} elem
     * @param {Object} data
     */
    constructor(elem = document.body.appendChild(
        document.createElement('div')), data = {}) {
        this.elem = elem;
        this.data = Object.assign({
            name: 'GMT',
            timezone: 'Etc/GMT',
            hh: '00',
            mm: '00',
            ss: '00',
            isActive: false,
        }, data);

        this.render();
        this._findElements();
        this._configureButton();

        isActive = this.data.isActive;
        if (isActive) this.start();
    }

    /**
     * Render clock
     */
    render() {
        this.elem.innerHTML += `
                 <div>
                    <form>
                        <div class="clock">
                            <span class="clock__name">${this.data.name}</span> :
                            <span class="clock__hour">${this.data.hh}</span> :
                            <span class="clock__min">${this.data.mm}</span> :
                            <span class="clock__sec">${this.data.ss}</span>
                        </div>
                        <button class="clock__switcher" >
                            ${(isActive) ? 'Stop' : 'Start'}
                        </button>
                    </form>
                </div>
                `;
    }

    /**
     * Start clock
     */
    start() {
        const SECOND = 1000;
        this._updateTime();
        this.idInterval = setInterval(this._updateTime.bind(this), SECOND);
        this.button.innerHTML = 'Stop';
        isActive = true;
    }

    /**
     * Stop clock
     */
    stop() {
        clearInterval(this.idInterval);
        this.button.innerHTML = 'Start';
        isActive = false;
    }

    /**
     * Update time in clock
     * @private
     */
    _updateTime() {
        let date = this._getTimeZoneDateNow();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        this.hour.innerHTML = Clock._format(hours);
        this.min.innerHTML = Clock._format(minutes);
        this.sec.innerHTML = Clock._format(seconds);
    }

    /**
     * Return current time with Timezone
     * @return {number}
     * @private
     */
    _getTimeZoneDateNow() {
        let date = Date.now();
        if (this.data.timezone) {
            return date;
        }
        return moment.tz(date, this.data.timezone);
    }

    /**
     * format number to string min of 2 characters
     * @param {number} num
     * @return {string}
     * @private
     */
    static _format(num) {
        return (num < 10) ? '0' + num : num.toString();
    }

    /**
     * Find elements for hours, minutes, seconds
     * @private
     */
    _findElements() {
        this.hour = this.elem.querySelector('.clock__hour');
        this.min = this.elem.querySelector('.clock__min');
        this.sec = this.elem.querySelector('.clock__sec');
        this.button = this.elem.querySelector('.clock__switcher');
    }

    /**
     * Configure event for button
     */
    _configureButton() {
        this.button.addEventListener('submit',
            this._switchClock.bind(this));
    }

    /**
     * Switch on/off clock
     * @private
     */
    _switchClock() {
        if (isActive) {
            this.stop();
        } else {
            this.start();
        }
    }
}
