import express from 'express'
import { envs } from './config';
import { GithubController } from './presentation/github/github.controller';
import { GitHubService } from './presentation/services/github.service';
import { DiscordService } from './presentation/services/discord.service';
import { GitHubSha256Middleware } from './presentation/middlewares/github-sha256.middleware';

(()  =>{
    main()
})();

function main() {
    const app = express();
    const service = new GitHubService()
    const discordservice = new DiscordService()

    const controller = new GithubController(service,discordservice)

    app.use(express.json())

    app.use(GitHubSha256Middleware.verifySignature)

    app.post('/api/github', controller.webhookHandler )

    app.listen(envs.PORT, () => console.log(`Listening on port ${envs.PORT}`))
}