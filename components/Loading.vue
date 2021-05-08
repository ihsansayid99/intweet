<template>
    <div class="loading-page">
        <div class="loading">
            <div class="dotcolor"></div>
            <div class="dotcolor"></div>
            <div class="dotcolor"></div>
        </div>  
    </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start () {
        this.loading = true
      },
      finish () {
        this.loading = false
      }
    }
  }
  </script>
<style lang="postcss">
.loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 350px;
    font-size: 30px;
    font-family: sans-serif;
  }
.loading {
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
}


.dotcolor {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  margin: 0px 10px;
  animation: colors 1.3s ease-in-out infinite;
}

@keyframes colors {
  0%,
  100% {
    background-color: rgb(31, 221, 189);
    transform: initial;
  }

  50% {
    transform: translateY(-20px);
    background-color: rgb(55, 141, 255);
  }
}

.dotcolor:nth-child(2) {
  animation-delay: -1.1s;
}

.dotcolor:nth-child(3) {
  animation-delay: -0.9s;
}
</style>