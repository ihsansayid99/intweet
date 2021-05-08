<template>
    <div class="px-4 lg:px-20 py-20 xl:px-24">
        <h2 class="text-3xl text-center text-blue font-semibold">Cara Pakai</h2>
        <hr class="w-16 border-b-4 rounded-xl border-indigo mx-auto mt-2">
        <div class="mt-20 px-2">
            <h2 class="text-2xl font-bold text-blue">1. Copy Link URL Tweet</h2>
            <div class="flex mt-10 flex-col lg:flex-row items-center">
                <div class="w-full lg:w-2/6 text-justify">
                <p>Untuk memulai di Web Aplikasi ini, kalian harus Copy link URL Tweet yang akan di jadikan template. Tahapan nya klik icon <b>Share</b> -> <b>Copy link to Tweet</b> atau bisa dilihat (Gambar)</p>
                </div>
                <div class="w-full lg:w-4/6">
                    <img src="~assets/images/carapakai-1.png" alt="" class="mx-auto mt-4 w-full lg:w-9/12">
                </div>
            </div>
        </div>
        <div class="mt-20 px-2">
            <h2 class="text-2xl font-bold text-blue">2. Buka Halaman Pembuatan & Paste URL</h2>
            <div class="flex mt-10 flex-col lg:flex-row items-center">
                <div class="w-full lg:w-2/6 text-justify">
                <p>Tahap selanjutnya, buka halaman <nuxt-link to="membuat" class="font-bold text-blue hover:border-b-2">Pembuatan</nuxt-link> lalu Paste URL yang sudah di copy tadi di kolom Inputan. Click Mulai Proses untuk melakukan Templating. Tunggu beberapa detik untuk Memulai.</p>
                </div>
                <div class="w-full lg:w-4/6">
                    <img src="~assets/images/carapakai-2.jpg" alt="" class="mx-auto mt-4 w-full lg:w-9/12">
                </div>
            </div>
        </div>
        <div class="mt-20 px-2">
            <h2 class="text-2xl font-bold text-blue">3. Customize Template & Download</h2>
            <div class="flex mt-10 flex-col lg:flex-row items-center">
                <div class="w-full lg:w-2/6 text-justify">
                <p>Ditahap terakhir ini template bawaan sudah tampil di layar kamu, sekarang kamu tinggal Customize Designnya dan Download dengan Bahagia.</p>
                </div>
                <div class="w-full lg:w-4/6">
                    <img src="~assets/images/carapakai-3.jpg" alt="" class="mx-auto mt-4 w-full lg:w-9/12">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head(){
        return{
            title: 'Cara Pakai - Intweet',
            meta: [
                {
                    hid: 'cara pakai',
                    name: 'cara pakai',
                    content: 'Intweet Cara Pakai'
                }
            ]
        }
    }
}
</script>