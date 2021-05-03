<template>
    <div>
        <TemplateTweet :url="link" />
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