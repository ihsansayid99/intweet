<template>
    <div>
        <TemplateTweet :url="$route.query.url" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            link : this.$route.query.url
        }
    },
    
    async asyncData({$axios}) {
        console.log('wkwkwk')
    },
}
</script>