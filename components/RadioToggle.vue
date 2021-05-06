<template>
    <div>
         <div class="blur-toggle mt-3 flex items-center">
            <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" v-model="toggle" @click="toggleTheme(toggle)" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all ease-out duration-500"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-all ease-out duration-500"></label>
            </div>
            <label for="toggle" class="text-lg text-gray-700">{{toggle ? 'blur' : 'light'}}</label>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            toggle: false
        }
    },
    methods:{
        toggleTheme : function(toggle){
            this.$emit('clicked-toggle-theme', toggle)
        }
    },
}
</script>

<style lang="postcss" scoped>
    .toggle-checkbox:checked {
    @apply: right-0 border-green-400;
    right: 0;
    border-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label {
    @apply: bg-green-400;
    background-color: #68D391;
    }
</style>