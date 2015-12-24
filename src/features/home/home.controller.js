'use strict';

export default class HomeController {
    constructor() {
        this.str = 'hello, world.';
    }

    sayHello() {
        alert(this.str);
    }
}
