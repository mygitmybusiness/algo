class MyQueue {
    private q: number[]

    constructor() {
        this.q = [];
    }

    push(x: number): void {
        this.q.push(x);
    }

    pop(): number {
        return this.q.shift();
    }

    peek(): number {
        return this.q.at(0);
    }

    empty(): boolean {
        return !this.q.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
