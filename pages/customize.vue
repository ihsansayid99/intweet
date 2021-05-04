<template>
    <div>
        <!-- <TemplateTweet :tweet-id="link" :key="link" /> -->
        <Tweet :id="link" :key="link"></Tweet>
    </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
    components:{
        Tweet
    },
    data(){
        return {
            link : this.$route.query.url
        }
    },
}
</script>