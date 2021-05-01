<template>
  <div>
    <section id="hero">
      <div class="h-4/5 relative">
        <div class="absolute w-full" style="z-index: -1;">
            <svg class="absolute bottom-0 top-64 lg:top-96 -left-3.5 lg:left-16 " width="68" height="225" viewBox="0 0 68 225" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="13.5" cy="12.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="12.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="13.5" cy="52.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="52.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="13.5" cy="92.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="92.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="13.5" cy="132.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="132.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="13.5" cy="172.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="172.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="13.5" cy="212.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
              <ellipse cx="54.5" cy="212.5" rx="13.5" ry="12.5" fill="#EBEBEB"/>
            </svg>
            <svg class="absolute right-0 bottom-0 top-5 lg:top-11" width="159" height="104" viewBox="0 0 159 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M202 104H107C107 104 128.212 73 144.891 73C161.571 73 166.647 93.6059 166.647 93.6059C166.647 93.6059 178.431 83.9412 189.309 85.7647C200.368 87.4059 202 104 202 104Z" fill="#EBEBEB"/>
              <path d="M185 60H0C0 60 25.3673 3.8058 52.3653 0.203608C79.5446 -3.39858 92.4094 41.989 92.4094 41.989C92.4094 41.989 109.985 26.1394 123.756 26.1394C137.527 26.1394 148.036 47.2122 148.036 47.2122C148.036 47.2122 175.578 32.8035 185 60Z" fill="#EBEBEB"/>
            </svg>
        </div>
        <div class="header-information flex flex-col lg:flex-row flex-col-reverse px-10 xl:px-24">
          <div class="w-full lg:w-1/2 pt-10 lg:pt-60 lg:pb-8 xl:px-32">
            <h1 class="text-3xl lg:text-5xl font-bold text-blue">Buat Design dari Tweet Yang Kamu Inginkan</h1>
            <p class="text-sm mt-4 text-gray-500">Dengan mudah, kamu bisa cari tweet yang menurut kamu unik, buat design dan share ke social media punya kamu.</p>
              <nuxt-link to="/membuat"><button class="px-10 py-2 bg-indigo rounded mt-4 mr-0 font-bold text-white hover:bg-indigo-light hover:transition-colors duration-300">Mulai</button></nuxt-link>
          </div>
          <div class="w-full lg:w-1/2 pt-10">
            <div class="">
              <img src="~assets/images/flat-hero-1.png" alt="Designed by stories / Freepik" draggable="false">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="cara-bermain">
      <div class="my-24">
        <h2 class="text-3xl text-center text-blue font-semibold">Dapatkan Ini!</h2>
        <hr class="w-16 border-b-4 rounded-xl border-indigo mx-auto mt-2">
        <div class="flex flex-col pt-10 lg:flex-row px-10 xl:px-24">
          <div class="w-full lg:w-1/2 mb-5 lg:mb-0 xl:pl-56 lg:pt-20 xl:pt-40">
            <p class="parag-info text-blue text-justify md:mx-auto lg:mx-0 lg:text-justify text-lg">Mulai sekarang kamu bisa membuat Design dari <b>Tweets</b> yang kamu mau. Lalu apa yang membuat kita menawarkan ini kepada kalian ? Design yang ingin kalian sesuai kan dengan <b>mudah</b> didapatkan di <b>InTweet</b>. Lihat Gambar di samping/dibawah untuk antusiasnya!</p>
          </div>
          <div class="w-full lg:w-1/2">
            <div class="w-full lg:w-8/12">
              <img src="~assets/images/Section-2.png" alt="Intweet hasilnya">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="simpan-waktu-kamu" class="relative">
      <div class="my-24">
        <h2 class="text-3xl text-center text-blue font-semibold">Simpan Waktu Kamu!</h2>
        <hr class="w-16 border-b-4 rounded-xl border-indigo mx-auto mt-2">
        <div class="absolute w-6/12 lg:w-1/4 -left-10 top-3/4 xl:top-40" style="z-index: -1;">
          <img src="~assets/images/Tweet.png" alt="InTweet Twitter Image">
        </div>
        <div class="w-full px-10 pt-10 xl:px-96 xl:pt-20 z-30">
          <p class="mx-auto text-center text-lg text-blue">
            Sekarang jangan sampai membuang waktu kamu yang berharga itu untuk Mengedit Tweets untuk dishare ke akun Social Media lainnya. Sudah saatnya kamu menggunakan <b>InTweet</b>. Jika kamu masih Awam Untuk memakai nya, Disarankan Untuk membaca <nuxt-link to="/cara-bermain" class="border-b-2 font-bold border-indigo hover:border-indigo-light">Cara Bermain</nuxt-link> terlebih dahulu Agar bisa merasakan Antusiasnya.
          </p>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script>
  import HeroImg1 from "~/assets/images/hero-flat.svg?inline";
export default {
  components:{
    'HeroImages': HeroImg1
  }

}
</script>

<style lang="postcss" scoped>
.parag-info{
  max-width: 450px;
}
</style>