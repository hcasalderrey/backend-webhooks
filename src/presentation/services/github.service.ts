import { GitHubIssuePayload, GitHubStarPayload } from "../../interfaces";

export class GitHubService {

    constructor(){}

    onStart (payload: GitHubStarPayload) : string {
        let message: string;    

        const {action, sender, repository, starred_at} = payload

        
        return  `User ${sender.login} ${action} star on ${repository.full_name}`
         
    }

    onIssue (payload: GitHubIssuePayload) : string {
         
        const {action, issue} = payload

        if(action === 'opened'){
            const message =   `An issue was opened with title ${issue.title}`
            console.log(message)
            return message
        }
 

        if(action === 'closed'){
            const message =   `An issue was closed by ${issue.user.login}`
            console.log(message)
            return message
        }
         
        
        
        if(action === 'reopened'){
            const message =   `An issue was reopened by ${issue.user.login}`
            console.log(message)
            return message
        }


        return  `Unhandled action for the issue event ${action}`
         
    }
}