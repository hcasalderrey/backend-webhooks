import express from 'express'
import { envs } from './config';
import { GithubController } from './presentation/github/github.controller';
import { GitHubService } from './presentation/services/github.service';
import { DiscordService } from './presentation/services/discord.service';

(()  =>{
    main()
})();

function main() {
    const app = express();
    const service = new GitHubService()
    const discordservice = new DiscordService()

    const controller = new GithubController(service,discordservice)

    app.use(express.json())

    app.post('/api/github', controller.webhookHandler )

    app.listen(envs.PORT, () => console.log(`Listening on port ${envs.PORT}`))
}