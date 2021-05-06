<template>
    <div>
        <div class="mt-12 px-2 py-3 rounded-md">
            <h2 class="text-2xl text-center text-blue">Sesuaikan Design Kamu</h2>
            <hr class="w-16 border-b-4 rounded-xl border-indigo mx-auto mt-2">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/3 my-6 h-4/5 relative">
                    <div class="iphone-x transition-all duration-300" :class="activeBgColor">
                        <i>Speaker</i>
                        <b>Camera</b>
                        <!-- <div class="box-tweet bg-gray-100 shadow-lg w-4/5 mx-auto px-4 py-3 rounded-md">
                            <div class="tweet flex text-gray-600">
                                <div class="w-2/12 mr-2">
                                    <img src="https://pbs.twimg.com/profile_images/1298946580251152384/XM26cVA6_400x400.jpg" alt="" width="50" height="50" class="rounded-full">
                                </div>
                                <div class="w-10/12">
                                    <div class="inline-flex items-center -mt-4">
                                        <p class="font-bold">Happy May</p>
                                        <span class="font-light ml-1 text-xs">@lastformat</span>
                                    </div>
                                    <div class="text-tweet text-sm leading-relaxed mt-1">
                                        <p>Kalian semua ngen!</p>
                                    </div>
                                    <div class="text-xs mt-4">
                                        <p>Apr 29, 2021 &middot; Twitter for iPhone</p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="box-tweet w-4/5">
                            <Tweet :id="link" :key="link" :options="{cards: 'hidden', width: '1080'}"></Tweet>
                        </div>
                        <div class="credit-intweet-in-box w-full text-center">
                            <p class="text-gray-200 text-sm">Made with &#9825; by InTweet.id</p>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-2/3 px-10 py-5 mx-0 lg:mx-4 my-6">
                    <h4 class="text-2xl text-gray-700">Solid Color</h4>
                    <hr class="w-16 border-b-4 rounded-xl border-indigo mt-2">
                    <div class="my-6 h-36 w-full lg:w-4/5 grid grid-cols-5 lg:grid-cols-10 grid-flow-row">
                        <div class="relative" v-for="sc in solidColors" v-bind:class="sc">
                            <button class="absolute inset-0 w-full text-gray-600 text-xs opacity-0 hover:opacity-100 hover:transition-opacity focus:outline-none" v-on:click="addSolidColor(sc)">
                                {{ sc.substr(6).split("-")[0] }}
                            </button>
                        </div>
                    </div>
                    <h4 class="text-2xl text-gray-700">Gradient Color</h4>
                    <hr class="w-16 border-b-4 rounded-xl border-indigo mt-2">
                    <div class="my-6 h-36 w-full lg:w-4/5 grid grid-cols-5 lg:grid-cols-10 grid-flow-row">
                        <div class="relative" v-for="gc in gradColors" v-bind:class="gc">
                            <button class="absolute inset-0 w-full text-gray-600 text-xs opacity-0 hover:opacity-100 hover:transition-opacity focus:outline-none" v-on:click="addGradientColor(gc)">
                                {{ gc.substr(10).split("-")[0] }}
                            </button>
                        </div>
                    </div>
                    <div class="tweet-proses mt-4">
                        <button class="px-7 py-3 bg-indigo rounded text-white font-bold hover:bg-indigo-light" @click="downloadVisualReport">Download Template</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div :class="activeBgColor" ref="test" style="height: 1920px; width: 1080px;position:relative;">
            <div class="box-tweet w-4/5 text-center" id="boxtweet-download">
                <Tweet :id="link" :key="link" :options="{cards: 'hidden'}"></Tweet>
            </div>
            <div class="credit-intweet-in-box w-full text-center">
                <p class="text-gray-200" style="font-size: 24px;">Made with &#9825; by InTweet.id</p>
            </div>
        </div> -->
    </div>
</template>

<script>
import { Tweet } from 'vue-tweet-embed'
export default {
    components:{
        Tweet
    },
    head(){
        return{
            title: 'Customize - Intweet',
        }
    },
    data(){
        return {
            link : this.$route.query.url,
            solidColors: ['color-brown-warm', 'color-orange-warm', 'color-purple-warm', 'color-green-vintage', 'color-blue-vintage', 'color-yellow-warm', 'color-blue-retro', 'color-gray-retro', 'color-pink-retro',
            'color-darkgreen-retro', 'color-green-bright', 'color-greenlight-bright', 'color-pinklight-bright', 'color-pink-bright', 'color-gray-turquoise', 'color-orange-turquoise', 'color-green-turquoise', 'color-blue-turquoise',
            'color-yellow-neon', 'color-darkbrown-neon'],
            gradColors: ['colorgrad-scooter','colorgrad-autumn', 'colorgrad-coolblues', 'colorgrad-alive', 'colorgrad-relay', 'colorgrad-meridian', 'colorgrad-cryclear', 'colorgrad-chitty', 'colorgrad-sunkies', 'colorgrad-orca', 'colorgrad-feeltonight', 'colorgrad-roseanna',
            'colorgrad-roselens', 'colorgrad-dawn', 'colorgrad-80spurple', 'colorgrad-edsunset', 'colorgrad-lovecouple', 'colorgrad-royal', 'colorgrad-orangejuice', 'colorgrad-harmonic'],
            activeBgColor: 'color-yellow-warm',
            output: null
        }
    },
    methods:{
        addSolidColor : function(val){
            this.activeBgColor = val
        },
        addGradientColor : function(val){
            this.activeBgColor = val
        },
        showCaptureRef() {
            let vc = this;
            return vc.$refs.test;
        },
        downloadVisualReport () {
            // console.log(this.showCaptureRef())
            // await this.$html2canvas(this.showCaptureRef(), {
            //     useCORS: true,
            //     scrollX: 0,
            //     scrollY: -window.scrollY,
            //     letterRendering: 1,
            //     allowTaint : false
            // }).then(canvas => {
            // // this.saveImage(canvas.toDataURL("image/jpeg"), "Canvas.png")
            //     console.log(canvas.toDataURL("image/jpeg"))
            //     document.body.appendChild(canvas)

            // }).catch((error) => {
            //     console.log("Erorr descargando reporte visual", error)
            // });
        },
        saveImage(uri, filename){
            const link = document.createElement('a');
            if(typeof link.download === 'string'){
                link.href = uri
                link.download = filename

                document.body.appendChild(link)

                link.click()

                document.body.removeChild(link)
            }else{
                window.open(uri)
            }
        },
        
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