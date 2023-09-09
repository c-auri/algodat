export class Node { 
    value
    nextNode

    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
    }

    get hasNext() {
        return this.nextNode !== null
    }
}