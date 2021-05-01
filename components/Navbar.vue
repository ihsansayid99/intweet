<template>
    <nav class="navbar z-10">
        <div class="navbar-brand relative">
            <nuxt-link to="/"><Logo /></nuxt-link>
            <button v-on:click="isHamburger" class="hamburger-menu">
                <Humburger :isOpen="isMenuMobile === true ? 'open' : ''" />
            </button>
        </div>
        <div class="navs" :class="isMenuMobile === true ? 'h-32 pt-4' : 'h-0'">
            <div class="nav-menu">
                <ul>
                    <li><nuxt-link to="/" class="nuxt-link">Cara Pakai</nuxt-link></li>
                    <li><nuxt-link to="/tentang" class="nuxt-link">Tentang</nuxt-link></li>
                </ul>
            </div>
            <div class="navs-utils">
                <nuxt-link class="btn-primary-indigo mr-2" to="/membuat">Buat Sekarang!</nuxt-link>
                <button class="btn-outline">Login</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isMenuMobile: false
        }
    },
    methods:{
        isHamburger: function(){
            this.isMenuMobile = !this.isMenuMobile
        }
    }
}
</script>

<style lang="postcss" scoped>
.navbar{
    @apply bg-blue fixed w-full top-0 px-8 lg:px-24 py-5 lg:flex items-center justify-between;
}
.navs{
    @apply flex flex-col lg:flex lg:flex-row lg:items-center justify-between lg:justify-between lg:py-0 transition-all overflow-hidden lg:overflow-visible ease-out duration-500 lg:transition-none;
    width: 100%;
}
.navbar-brand{
    @apply lg:pr-10 flex justify-between;
}
.nav-menu ul, .nav-menu>ul>li{
    @apply block lg:flex mr-4 text-white font-bold mb-1 lg:mb-0;
}

.btn-outline{
    @apply bg-transparent border border-indigo rounded px-6 py-2 text-white font-bold;
    &:hover{
        @apply bg-indigo transition-colors duration-200;
    }
}
.btn-primary-indigo{
    @apply bg-indigo  rounded px-6 py-2 text-white font-bold;
    &:hover{
        @apply bg-indigo-light transition-colors duration-200;
    }
}
.nav-menu>ul>li>.nuxt-link{
    margin:0;
    &:after{
        display: block;
        content: '';
        border-bottom: solid 2px #ddaf06;  
        transform: scaleX(0);  
        transform-origin: 100% 50%;
        transition: transform 250ms ease-in-out;
    }
    &:hover:after{
        @apply border-b-2;
        transform: scaleX(1);
        transform-origin:  0% 50%;
        border-color: #ddaf06;
    }
}
.hamburger-menu{
    @apply block lg:hidden;
    &:focus{
        outline: none;
    }
}
</style>