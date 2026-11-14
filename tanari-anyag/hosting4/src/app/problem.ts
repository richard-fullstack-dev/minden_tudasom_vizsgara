import { User } from "./user"

export class Problem {
	urgent: boolean = false
	title: string = ""
	description: string = ""
	author: User = new User()
	upVote: number = 0
	downVote: number = 0
	voters: User[] = []
	solved: boolean = false
}