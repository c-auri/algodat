import { Node } from "./Node"


export class LinkedList {
    #headNode

    constructor(...values) {
        this.#headNode = null;

        for (const value of values) {
            this.append(value);
        }
    }

    /**
     * Returns the first value in the list.
     * @returns {any | null}
     */
    get head() {
        return this.#headNode?.value ?? null;
    }

    /**
     * Returns the last value in the list.
     * @returns {any | null}
     */
    get tail() {
        if (this.#headNode === null) {
            return null;
        }

        return this.#nodeAt(this.size - 1).value;
    }

    /**
     * Returns the number of values in the list.
     * @returns {number}
     */
    get size() {
        if (this.#headNode === null) {
            return 0;
        }

        let length = 1;
        let current = this.#headNode;
        while (current.nextNode !== null) {
            length++;
            current = current.nextNode;
        }
        return length;
    }

    /**
     * Adds the given value to the end of the list.
     * @param {any} value
     */
    append(value) {
        if (this.#headNode === null) {
            this.#headNode = new Node(value);
        } else {
            this.#nodeAt(this.size - 1).nextNode = new Node(value);
        }
    }

    /**
     * Adds the given value to the start of the list.
     * @param {any} value
     */
    prepend(value) {
        this.#headNode = new Node(value, this.#headNode);
    }

    /**
     * Adds the given value at the given position.
     * @param {any} value
     * @param {number} index
     */
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of bounds.");
        }

        if (index === 0) {
            this.prepend(value);
        } else {
            const nodeBefore = this.#nodeAt(index - 1);
            const nodeAfter = this.#nodeAt(index);
            nodeBefore.nextNode = new Node(value, nodeAfter);
        }
    }

    /**
     * Returns the concatenation of this list with another list.
     * Does not change the initial lists.
     * @param {LinkedList} other
     * @returns {LinkedList}
     */
    concat(other) {
        return new LinkedList(...(this.toArray().concat(other.toArray())));
    }

    /**
     * Returns the value at the given index position.
     * @param {number} index
     * @returns {any | null}
     */
    at(index) {
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of bounds.");
        }

        return this.#nodeAt(index)?.value ?? null;
    }

    /**
     * Removes the last value in the list.
     * @returns {any} the removed value.
     */
    pop() {
        if (this.#headNode === null) {
            throw new Error("List is empty.");
        }

        const nodeBeforeLast = this.#nodeAt(this.size - 2);
        const result = nodeBeforeLast.nextNode.value;
        nodeBeforeLast.nextNode = null;
        return result;
    }

    /**
     * Removes the first value from the list.
     * @returns {any} the removed value.
     */
    shift() {
        if (this.#headNode === null) {
            throw new Error("List is empty.");
        }

        const result = this.#headNode.value;
        this.#headNode = this.#headNode.nextNode ?? null;
        return result;
    }

    /**
     * Removes the value at the given index.
     * @param {number} index
     * @returns {any} the removed value.
     */
    removeAt(index) {
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of bounds.");
        }

        if (this.#headNode === null) {
            throw new Error("Must not remove from empty list.");
        }

        if (index === 0) {
            return this.shift();
        }

        const nodeBefore = this.#nodeAt(index - 1);
        const nodeAfter = nodeBefore.nextNode.nextNode;
        const result = nodeBefore.nextNode.value;
        nodeBefore.nextNode = nodeAfter;
        return result;
    }

    /**
     * Returns whether the list contains the given value.
     * @param {any} value
     * @returns {boolean}
     */
    contains(value) {
        if (this.#headNode === null) {
            return false;
        }

        let current = this.#headNode;
        while (current.nextNode !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return (current.value === value);
    }

    /**
     * Returns the index of the given value.
     * @param {any} value
     * @returns {any | null}
     */
    find(value) {
        if (this.#headNode === null) {
            return null;
        }

        let current = this.#headNode;
        let i = 0;
        while (current !== null) {
            if (current.value === value) {
                return i;
            }
            current = current.nextNode;
            i++;
        }
        return null;
    }

    /**
     * Returns a string representation of the list.
     * @returns {string}
     */
    toString() {
        const result = [];
        let current = this.#headNode;
        while (current !== null) {
            result.push(current.value);
            current = current.nextNode;
        }
        return result.join(" > ");
    }

    /**
     * Returns the contents of the list as an array.
     * @returns {any[]}
     */
    toArray() {
        const array = [];
        let current = this.#headNode;
        while (current !== null) {
            array.push(current.value);
            current = current.nextNode;
        }
        return array;
    }

    /**
     * Returns the node at the given index position.
     * @param {number} index
     * @returns {Node}
     */
    #nodeAt(index) {
        if (index < 0) {
            throw new RangeError("Index must not be negative.");
        }

        let i = 0;
        let result = this.#headNode;
        while (i < index) {
            result = result.nextNode;
            i++;
        }
        return result;
    }
}