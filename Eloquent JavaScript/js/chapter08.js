// 使用 class 符号创建的构造器，如果在不使用 new 来调用，则始终会报错，即使
// 在非严格模式下也不会产生问题。

//习题一

class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    let count = 1;
    while (true) {
        try {
            return primitiveMultiply(a, b)
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log(count++);
            }else{
                console.log(e)
            }
        }
    }
}

// 习题二

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    try {
        box.content
    }catch(e){
        box.unlock()
    }
    body(box);
    box.lock();
}
