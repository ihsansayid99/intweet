<template>
    <nav class="navbar">
        <div class="navbar-brand relative">
            <nuxt-link to="/"><Logo /></nuxt-link>
            <button v-on:click="isHamburger" class="hamburger-menu">
                <Humburger role="button"/>
            </button>
        </div>
        <div class="navs" :class="isMenuMobile === true ? 'h-32' : 'h-0'">
            <div class="nav-menu">
                <ul>
                    <li><nuxt-link to="/" class="nuxt-link">Cara Pakai</nuxt-link></li>
                    <li><nuxt-link to="/tentang" class="nuxt-link">Tentang</nuxt-link></li>
                </ul>
            </div>
            <div class="navs-utils">
                <button class="btn-outline mr-2">Buat Sekarang!</button>
                <button class="btn-outline border-b">Login</button>
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
    @apply bg-blue-600 fixed w-full top-0 px-8 md:px-24 py-5 md:flex items-center justify-between;
}
.navs{
    @apply flex items-center justify-between md:justify-between md:py-0 transition-all overflow-hidden md:overflow-visible ease-out duration-500 md:transition-none;
    width: 100%;
}
.navbar-brand{
    @apply md:pr-10 flex justify-between;
}
.nav-menu ul, .nav-menu>ul>li{
    @apply block md:flex mr-4 text-white font-bold mb-1 md:mb-0;
}

.btn-outline{
    @apply bg-transparent border border-indigo-200 rounded px-6 py-2 text-white font-bold;
    &:hover{
        @apply bg-white text-blue-500 transition-colors duration-200;
    }
}
.nav-menu>ul>li>.nuxt-link{
    margin:0;
    &:after{
        display: block;
        content: '';
        border-bottom: solid 2px #019fb6;  
        transform: scaleX(0);  
        transform-origin: 100% 50%;
        transition: transform 250ms ease-in-out;
    }
    &:hover:after{
        @apply border-b-2;
        transform: scaleX(1);
        transform-origin:  0% 50%;
        border-color: #019fb6;
    }
}
.hamburger-menu{
    @apply block md:hidden;
    &:focus{
        outline: none;
    }
}
</style>