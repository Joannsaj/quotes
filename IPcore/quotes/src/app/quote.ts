export class Quote {
    showDetails: boolean
    constructor(public quote: string, public name: string, public completeDate: Date) {
        this.showDetails = false;
    }
}
