import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService) {
    }

    @Get(':userId')
    getTweets(@Param('userId', ParseIntPipe) userId: number) {
        return this.tweetService.getTweets(userId);
    }

    @Post()
    postTweet() {
        return 'Post Tweet'
    }
}
