<template>
  <div ref="lottieContainer" class="lottie-background"></div>
</template>


<script>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'

export default {
  props: {
    animationPath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const lottieContainer = ref(null)

    onMounted(() => {
      lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: props.animationPath,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
      })
    })

    return {
      lottieContainer
    }
  }
}
</script>

<style scoped>
.lottie-background {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: rgba(0,0,0,0.1); /* برای تست اندازه */
  
}
</style>
