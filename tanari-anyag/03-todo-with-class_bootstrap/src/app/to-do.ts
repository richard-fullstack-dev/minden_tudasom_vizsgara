export class ToDo {
    content: string = ""
    priority: boolean = false
    done: boolean = false
    timeStamp: Date = new Date()

    constructor(content: string = "", done: boolean = false) {
        this.content = content
        this.done = done
        // if (this.content.startsWith('!')) this.priority = true
    }
}