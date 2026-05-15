import { User, UserService } from './../users/user.service';
import { Injectable } from '@nestjs/common';

type Tweet = {
    title: string;
    date: string;
    userId: number;
};

@Injectable()
export class TweetService {

    constructor(private readonly userService: UserService){

    }

    public tweets: Tweet[] = [
        {
            title: "Just started learning TypeScript 🚀",
            date: "2026-04-25",
            userId: 101,
        },
        {
            title: "Debugging code late at night 😴",
            date: "2026-04-26",
            userId: 101,
        },
        {
            title: "Finally deployed my app! 🎉",
            date: "2026-04-27",
            userId: 103,
        },
    ];

    getTweets(userId: number) {
        const user: User | string = this.userService.getUserById(userId)
        if(typeof user === 'string') return user;
        const tweets = this.tweets.filter((tweet: Tweet)=> tweet.userId === userId);
        const response = tweets.map((tweet)=>{
            return {
                tweet: tweet.title,
                date: tweet.date,
                name: user?.name
            }
        })
        return response;
    }

}
