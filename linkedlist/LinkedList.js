import { Node } from './Node'

// TODO:
// Implement all the methods given in this class so that all the tests pass.
// You can add private helper methods if you wish,
// but the public interface of the class should not be altered.
// Hint: a private #nodeAt() helper method will probably be useful (see bottom of this file).

// The tests use strings as input values.
// You don't need to add any type checks, just assume everything will be a string.

// You should use null as the designated value for an intended missing node or value,
// for example: the tail of an empty list should be null (and not undefined).

export class LinkedList { 
    #headNode
    
    // Uses rest parameter syntax (...) to allow for an indefinite number of parameters:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    constructor(...values) {
        this.#headNode = null

        for (const value of values) {
            this.append(value)
        }
    }

    /**
     * Returns the first value in the list.
     * @returns {any | null}
     */
    get head() {
        return this.#headNode;
    }

    /**
     * Returns the last value in the list.
     * @returns {any | null}
     */
    get tail() {
        if (this.#headNode === null) {
            return null;
        }
        else {
            let temp = this.#headNode;
            while (temp.nextNode !== null) {
                temp = temp.nextNode;
            }
            return temp;
        }
    }

    /**
     * Returns the number of values in the list.
     * @returns {number}
     */
    get size() {
        if (this.#headNode === null) {
            return 0;
        }
        else {
            let length = 0;
            while (this.#headNode.next !== null) {
                length++;
            }
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
        }
        else {
            let temp = this.#headNode.next;
            while (temp.nextNode !== null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }

    /**
     * Adds the given value to the start of the list.
     * @param {any} value 
     */
    prepend(value) {
        // TODO: implement
    }

    /**
     * Adds the given value at the given position.
     * @param {any} value 
     * @param {number} index 
     */
    insertAt(value, index) {
        // TODO: implement
    }

    /**
     * Returns the concatenation of this list with another list. 
     * Does not change the initial lists.
     * @param {LinkedList} other
     * @returns {LinkedList}
     */
    concat(other) {
        // TODO: implement
    }

    /**
     * Returns the value at the given index position.
     * @param {number} index 
     * @returns {any | null}
     */
    at(index) {
        // TODO: implement
    }

    /**
     * Removes the last value in the list.
     * @returns {any} the removed value.
     */
    pop() {
        // TODO: implement
    }

    /**
     * Removes the first value from the list.
     * @returns {any} the removed value.
     */
    shift() {
        // TODO: implement
    }

    /**
     * Removes the value at the given index.
     * @param {number} index
     * @returns {any} the removed value.
     */
    removeAt(index) {
        // TODO: implement
    }

    /**
     * Returns whether the list contains the given value.
     * @param {any} value 
     * @returns {boolean}
     */
    contains(value) {
        // TODO: implement
    }

    /**
     * Returns the index of the given value.
     * @param {any} value 
     * @returns {any | null}
     */
    find(value) {
        // TODO: implement
    }

    /**
     * Returns a string representation of the list.
     * @returns {string}
     */
    toString() {
        // TODO: implement
    }

    /**
     * Returns the contents of the list as an array.
     * @returns {any[]}
     */
    toArray() {
        // TODO: implement
    }

    /**
     * Returns the node at the given index position.
     * @param {number} index 
     * @returns {Node}
     */
    #nodeAt(index) {
        // You don't need to implement this if you don't need it. But it's probably a good idea.
    }
}