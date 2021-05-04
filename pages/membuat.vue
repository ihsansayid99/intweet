<template>
    <div>
        <div class="px-4 lg:px-20 xl:px-24 pt-40 py-60">
            <h1 class="text-3xl lg:text-5xl text-center leading-normal lg:leading-relaxed font-bold text-blue max-w-3xl mx-auto">Upload Link Tweet atau cari Akun Yang akan di Proses</h1>
            <div class="text-center mt-10">
                <input type="text" v-model="linkTweet" class="border-2 rounded-md border-indigo md:w-1/2 w-full px-2 py-2 focus:outline-none focus:border-indigo-light mb-6">
                <nuxt-link :to="{ path: 'customize', query: { url: tweetId }}" class="px-6 py-2 font-bold bg-indigo border-2 rounded-md border-indigo text-white">Up</nuxt-link>
            </div>
            <h2 class="text-center text-lg text-indigo mt-4" v-if="responseLink === false">Masukan Link yang benar yaa!</h2>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            linkTweet: '',
            responseLink: '',
            tweetId: ''
        }
    },
    watch: {
        linkTweet: function(newLink, oldLink){
            if(this.linkTweet.includes('/status/')){
                this.responseLink = true
                const url = this.linkTweet.split('?');
                url.splice(1);
                const fixUrl = url[0].split('/')
                this.tweetId = fixUrl[5]
            }else if(this.linkTweet === ''){
                this.responseLink = false
            }else{
                this.responseLink = false
            }
        }
    }
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