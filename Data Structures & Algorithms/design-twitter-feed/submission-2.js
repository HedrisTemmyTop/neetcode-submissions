class Twitter {
    constructor() {
        this.feeds = new Map()
        this.friends = new Map()
        this.count =0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let posts = []
        if(this.feeds.get(userId)) posts = this.feeds.get(userId)
        //{1: [10], 2: [20]}
        // {1: [2], 2: []}
        // 
        console.log(posts, "posts")
        posts.push([this.count, tweetId])
        this.feeds.set(userId, posts)
        this.friends.set(userId, (this.friends.get(userId) || new Set()))
        this.count++
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        if(!this.feeds.get(userId)) this.feeds.set(userId, []);
        let friendSet = this.friends.get(userId)
        let friends = [...friendSet]
        let feeds = new MaxPriorityQueue((post)=>post[0])
        this.feeds.get(userId).forEach((p) => feeds.enqueue(p))
    
        for(let i=0; i  <  friends.length; i++){
            let friendId = friends[i]
            let post = this.feeds.get(friendId)
            post.forEach((p)=> feeds.enqueue(p))
        }
        
        let twitterFeeds = []
        while(feeds.size() && twitterFeeds.length < 10){
            const t = feeds.dequeue()
            twitterFeeds.push(t[1])
        }
        return twitterFeeds
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(followerId === followeeId) return
        if(!this.friends.get(followerId)) this.friends.set(followerId, new Set())
        let friends = this.friends.get(followerId)
    
        friends.add(followeeId)
        this.friends.set(followerId, friends) 
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(!this.friends.get(followerId) || !this.friends.get(followeeId)) return;
        let friendSet = this.friends.get(followerId)
        friendSet.delete(followeeId)

        this.friends.set(followerId, friendSet)
        
    }
}
// 9:00