<template>
    <div>
        <div class="px-4 lg:px-20 xl:px-24 pt-40 py-60 lg:py-64" v-if="showCustomize === false">
            <h1 class="text-3xl lg:text-5xl text-center leading-normal lg:leading-relaxed font-bold text-blue max-w-3xl mx-auto">Upload Link Tweet untuk memulai Membuat Template</h1>
            <div class="text-center mt-10">
                <input type="text" placeholder="https://twitter.com/jack/status/20" v-model="linkTweet" class="border-2 rounded-md border-indigo md:w-1/2 w-full px-2 py-2 focus:outline-none focus:border-indigo-light mb-6" :class="errors.length ? 'border-red-600' : ''">
                <button class="px-6 py-2 font-bold bg-indigo border-2 rounded-md border-indigo text-white" @click="submitLink">Mulai Proses</button>
            </div>
            <Loading v-if="loadTweetImage === false"/>
        </div>
        <div v-if="showCustomize">
          <CustomizeTweet :imgTweet="tweetImage.result" :tweetId="tweetId" />
        </div>
    </div>
</template>

<script>
export default {
  head(){
        return{
            title: 'Membuat Template - Intweet',
            meta: [
                {
                    hid: 'Membuat Template Tweet Design',
                    name: 'Membuat Template Tweet Design',
                    content: 'Intweet Membuat Template Tweet Design'
                }
            ]
        }
    },
    data: function(){
        return {
            linkTweet: '',
            responseLink: '',
            tweetId: '',
            tweetImage: '',
            loadTweetImage: null,
            showCustomize: false,
            errors: [],
        }
    },
    methods:{
      async submitLink() {
        const splitTweetUrl = this.linkTweet.split('/')
        const lastItem = splitTweetUrl[splitTweetUrl.length - 1]
        const splitLastItem = lastItem.split('?')
        const checkTweetsValid = this.linkTweet.includes('/status/')
        const checkTweetsValid2 = this.linkTweet.includes('https://twitter.com/')
        this.tweetId = splitLastItem[0]
        this.errors = [];
        if(this.linkTweet && checkTweetsValid && checkTweetsValid2){
          this.loadTweetImage = false
          this.$nuxt.$loading.start()
          this.tweetImage = await this.$axios.$post('https://intweet-backend.herokuapp.com/api/screenshot', {
            url: this.linkTweet
          })
          this.$nuxt.$loading.finish()
          this.loadTweetImage = true
          this.showCustomize = true
        }else{
          this.errors.push('Isi Link Tweet nya terlebih dahulu!')
        }
    },
  },
  mounted() {
    this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
  },
}
</script>

<style lang="postcss" scoped>
.box-tweet{
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.credit-intweet-in-box{
    margin: 0;
    position: absolute;
    bottom: 5%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}

.iphone-x {
  position: relative;
  margin: 40px auto;
  width: 360px;
  height: 780px;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
  
  &:before,
  &:after{
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  &:after {
    bottom: 7px;
    width: 140px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }
  
  &:before {
    top: 0px;
    width: 56%;
    height: 30px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }
  
  i,
  b,
    {
        position: absolute;
        display: block;
        color: transparent;
    }
  
  i {
    top: 0px;
    left: 50%;
    transform: translate(-50%, 6px);
    height: 8px;
    width: 15%;
    background-color: #101010;
    border-radius: 8px;
    box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
  }
  
  b {
    left: 10%;
    top: 0px;
    transform: translate(180px, 4px);
    width: 12px;
    height: 12px;
    background-color: #101010;
    border-radius: 12px;
    box-shadow: inset 0px -3px 2px 0px rgba(256, 256, 256, 0.2);
    
    &:after {
      content: '';
      position: absolute;
      background-color: #2d4d76;
      width: 6px;
      height: 6px;
      top: 2px;
      left: 2px;
      top: 3px;
      left: 3px;
      display: block;
      border-radius: 4px;
      box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>