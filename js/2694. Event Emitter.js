class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!(eventName in this.events)) {
            this.events[eventName] = new Set([callback]);
        } else {
            this.events[eventName].add(callback);
        }

        return {
            unsubscribe: () => {
                this.events[eventName].delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!(eventName in this.events)) return [];

        var result = [];

        this.events[eventName].forEach((fn) => {
            result.push(fn(...args));
        })

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */