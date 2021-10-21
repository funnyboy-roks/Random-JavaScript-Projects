class Optional {

    static empty = new Optional(null);

    constructor(value) {
        if (value === Optional.empty) {
            this.value = null;
            this.valueSet = false;
        } else {
            this.value = value;
            this.valueSet = true;
        }

    }

    isPresent() {
        return this.valueSet;
    }

    get() {
        if (!this.valueSet) {
            throw new Error('No value present');
        }
        return this.value;
    }

    orElse(other) {
        if (this.valueSet) {
            return this.value;
        }
        return other;
    }

    toString() {
        return this.value + '';
    }
}

Array.prototype.findOptional = function (predicate) {
    let index = this.findIndex(predicate);
    if (index === -1) {
        return new Optional(Optional.empty);
    }
    return new Optional(this[index]);
}

module.exports = Optional;