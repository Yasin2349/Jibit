<template>
  <div ref="lottieContainer" :style="{ width, height }"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
import lottie from 'lottie-web'

export default {
  props: {
    animationPath: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '500px'
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
