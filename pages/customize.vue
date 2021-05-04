<template>
    <div>
        <TemplateTweet :tweet-id="link" :key="link" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            link : this.$route.query.url
        }
    },
}
</script>