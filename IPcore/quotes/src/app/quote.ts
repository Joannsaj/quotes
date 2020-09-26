export class Quote {
    showDetails: boolean
    constructor(public quote: string, public name: string) {
        this.showDetails = false;
    }
}
