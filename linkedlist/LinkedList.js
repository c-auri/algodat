import { Node } from './Node'

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

        let temp = this.#headNode;
        while (temp.nextNode !== null) {
            temp = temp.nextNode;
        }
        return temp.value;
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
        let temp = this.#headNode;
        while (temp.nextNode !== null) {
            length++;
            temp = temp.nextNode;
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
            let temp = this.#headNode;
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
        if (this.#headNode === null) {
            this.#headNode = new Node(value);
        } else {
            this.#headNode = new Node(value, this.#headNode);
        }
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
            let nodeBefore = this.#nodeAt(index - 1);
            let nodeAfter = this.#nodeAt(index);
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
        if (this.#headNode === null) {
            this.#headNode = other.#headNode;
        } else {
            this.#lastNode.nextNode = other.#headNode;
        }
        return this;
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

        let node = this.#nodeAt(index);
        return (node === null) ? null : node.value; 
    }

    /**
     * Removes the last value in the list.
     * @returns {any} the removed value.
     */
    pop() {
        if (this.#headNode === null) {
            throw new Error("List is empty.");
        }

        let nodeBeforeLast = this.#nodeAt(this.size-2);
        let temp = nodeBeforeLast.nextNode.value;
        nodeBeforeLast.nextNode = null;
        return temp;
    }

    /**
     * Removes the first value from the list.
     * @returns {any} the removed value.
     */
    shift() {
        if (this.#headNode === null) {
            throw new Error("List is empty.");
        }

        let temp = this.#headNode.value;
        if (this.#headNode.nextNode === null) {
            this.#headNode = null;
        } else {
            this.#headNode = this.#headNode.nextNode;
        }
        return temp;
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
            throw new Error("Must not remove from empty list.")
        }
        let temp = this.#headNode.value;
        if (index === 0) {
            this.#headNode = this.#headNode.nextNode;
            return temp;
        }
        let nodeBefore = this.#nodeAt(index-1);
        let nodeAfter = nodeBefore.nextNode.nextNode;
        temp = nodeBefore.nextNode.value;
        nodeBefore.nextNode = nodeAfter;
        return temp;
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

        let temp = this.#headNode;
        while (temp.nextNode !== null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode;
        }
        return (temp.value === value);
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

        let temp = this.#headNode;
        let i = 0;
        while (temp.nextNode !== null) {
            if (temp.value === value) {
                return i;
            }
            temp = temp.nextNode;
            i++;
        }
        if (temp.value === value) {
            return i;
        };
        return null;
    }

    /**
     * Returns a string representation of the list.
     * @returns {string}
     */
    toString() {
        if (this.#headNode === null) {
            return [];
        }
        let array = [];
        let temp = this.#headNode;
        while (temp.nextNode !== null) {
            array.push(temp.value.toString());
            temp = temp.nextNode;
        }
        array.push(temp.value.toString());
        return array;
    }

    /**
     * Returns the contents of the list as an array.
     * @returns {any[]}
     */
    toArray() {
        if (this.#headNode === null) {
            return [];
        }
        let array = [];
        let temp = this.#headNode;
        while (temp.nextNode !== null) {
            array.push(temp.value);
            temp = temp.nextNode;
        }
        array.push(temp.value);
        return array;
    }

    /**
     * Returns the node at the given index position.
     * @param {number} index 
     * @returns {Node}
     */
    #nodeAt(index) {
        if (index < 0 ) {
            throw new RangeError("Index must not be negative.");
        }

        let i = 0;
        let temp = this.#headNode;
        while (i<index) {
            temp = temp.nextNode;
            i++;
        }
        return temp;
    }
    /**
     * Returns the last node.
     * @returns {Node}
     */
    #lastNode() {
        if (this.#headNode === null) {
            return null;
        }

        let node = this.#headNode;
        while (node.nextNode !== null) {
            node = node.nextNode;
        }
        return node;
    }
}