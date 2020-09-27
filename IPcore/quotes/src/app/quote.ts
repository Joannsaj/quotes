export class Quote {
    public showDetails: boolean
    public upVote: number
    public downVote: number
    constructor(public quote: string, public name: string, public completeDate: Date) {
        this.showDetails = false;
        this.downVote = 0
        this.upVote = 0
    }
}
