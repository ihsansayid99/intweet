<template>
    <div class="px-4 lg:px-20 py-20 xl:px-24">
        <p class="text-base lg:text-xl w-full lg:w-1/2 mx-auto text-justify leading-relaxed lg:leading-relaxed"><nuxt-link to="/tentang" class="text-blue font-bold">Intweet.id</nuxt-link> 
             dibangun untuk memenuhi hasrat terpendam sang Developer Poser ini. Mulai bermain Twitter sejak 2010 sampai sekarang, membuat adrenalin untuk membangun sebuah platform/webApp apapun istilahnya itu semakin membara atas munculnya insta stories dengan berbagai variasi. mulai dari share music dari Spotify/Apple Music/Soundcloud dll.
            Sekarang saatnya membuat Template Design dari Tweet User Twitter dengan berbagai variatif warna background untuk dibuat seperti Share Music/Film di Instagram. itu kenapa website ini bernama <nuxt-link to="/tentang" class="text-blue font-bold">Intweet.id</nuxt-link>  
        </p>
        <p class="mt-4 text-base lg:text-xl w-full lg:w-1/2 mx-auto text-justify leading-relaxed lg:leading-relaxed">
            Ini belum maksimal tentunya dalam segi fitur, tetapi cukup untuk memenuhi requirement dari alasan diatas. dengan bertambahknya waktu, Platform akan terus diperbaharui agar tidak ketinggalan Fitur Technology aja si, realistis :))
        </p>
        <p class="mt-20 lg:mt-44 text-base lg:text-xl w-full lg:w-1/2 mx-auto text-right leading-relaxed lg:leading-relaxed" >Regards, Intweet.id</p>
    </div>
</template>
<script>
export default {
    head(){
        return{
            title: 'Tentang - Intweet',
            meta: [
                {
                    hid: 'Tentang',
                    name: 'Tentang',
                    content: 'Intweet Tentang'
                }
            ]
        }
    }
}
</script>