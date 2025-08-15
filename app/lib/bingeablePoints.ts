type bingeablePointsText = {
    title : string,
    body : string
}

type bingeablePointsData = {
    image : string,
    content : bingeablePointsText
}

export const frontEndPoints : bingeablePointsData[] = [
    {
        image : '/custom-hook.png',
        content: {
                title : 'Custom Hooks',
                body : "In this snippet, I've created a custom hook that fetches a film/tv Review data. This encapsulates the fetch logic and all of its related code like refetch and fetchMore for cursor based fetching which separates concerns from the rest of the parent component."
            }
    },
    {
        image : '/infinite-scrolling-ui.png',
        content : {
            title : 'Infinite Scrolling',
            body : "Here's a simple use of a FlatList UI which supports infinite scrolling, when a user reaches the bottom if there is more data, it'll fetch more and append it to the FlatList."
        }
    },
    {
        image : '/comment-interaction.png',
        content : {
            title : 'Comment Interactions & Optimistic UI Updates',
            body : "Working on this was a bit of a headache with lots of states to keep track of, whether upvoting or replying to a comment. I'm also optimistically updating the UI so it provides a better UX, so once a user interacts (ex. upvotes a comment), the thumbsUp icon will be highlighted immediately, while updating this in my DB after. On a refresh, this data will be synced up."
        }
    },
    {
        image : '/context.png',
        content : {
            title : 'Global State Management with useContext',
            body : "I usually try to keep things as minimal as possible, and only reaching for tools or methods when I need to. In this example I needed to keep the state of the number of unread notifications so when a user reads it then goes back to the homepage, the UI updates correctly. However, when keeping track of the state inside the notification page and the user router.backs(), this data gets lost. This is a perfect scenario to use useContext to manage global state which can be accesse from any component. I'll look into Zustand or Redux for more complicated needs in the future."
        }
    }
]

export const backendData : bingeablePointsData[] = [
    {
        image : '/cursor-based-pagination.png',
        content : {
            title : 'Cursor Based Pagination for Infinite Scrolling',
            body : "Using Prisma ORM with PostgreSQL, I'm using cursor based pagination so I dont fetch repeated data for the infinite scrolling feature in the front end. This is accomplished by using the id of the final item fetched and using that as a cursor with skipping the first element to avoid repeats."
        }
    },
    {
        image : "/redis.png",
        content : {
            title : "In Memory Store Caching with Redis",
            body : "In this example, I'm using Redis to store in-memory some YouTube data. This data doesn't change too frequently so I store this with a TTL of 6 hours. Since the Redis is running on a separate EC2 instance, this will work fine with auto scaling my main server."
        }
    },
    {
        image : "/S3.png",
        content : {
            title : "AWS S3 to Store User Uploaded Media with a CDN",
            body : "When a user uploads any media (ex. a profile picture), this gets stored in a S3 bucket while using Cloudfront CDN to quickly deliver the asset when being used."
        }
    },
    {
        image : "/url-preview.png",
        content : {
            title : "Parsing Text to Extract a URL Preview Thumbnail",
            body : "Using Regex patterns, I've parsed the html of a URL to first try and get a Open Graph protocol if it exists, and if not I grab the first <img> tag and it's src URL "
        }
    },
]