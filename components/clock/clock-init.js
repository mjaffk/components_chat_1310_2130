/* By Ekaterina Khorina */
import {Clock} from './clock.js';

'use strict';

let elem = document.querySelector('.js-app');

let dataList = [
    {
        elem: elem.appendChild(document.createElement('dir')),
        data: {
            name: 'Your time',
            timezone: null,
            isActive: false,
        },
    }, {
        elem: elem.appendChild(document.createElement('dir')),
        data: {
            name: 'New York',
            timezone: 'America/New_York',
            isActive: true,
        },
    }, {
        elem: elem.appendChild(document.createElement('dir')),
        data: {
            name: 'London',
            timezone: 'Europe/London',
            isActive: false,
        },
    }, {
        elem: elem.appendChild(document.createElement('dir')),
        data: {
            name: 'Moscow',
            timezone: 'Europe/Moscow',
            isActive: true,
        },
    }];
dataList.forEach(({elem, data}) => {
    new Clock(elem, data);
});
