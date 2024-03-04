import { envs } from "../../config";

export class DiscordService {
    
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL
    
    constructor(){}

    async notify(message: string)
    {
        const body = {
            content: message,
            //embeds: [
            //    {
            //        image: { url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnh3d3N0YjQ1cTd5Nmdvb2tzZm83YXJvdjlucGVyY2IzNmc5NXg1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif'}
            //    }
            //]
        }

        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'

            }
        })

        if(!resp.ok){
            console.log(`Discord webhook error: ${resp.statusText}`)
            return false;
        }

        return true
    }

}