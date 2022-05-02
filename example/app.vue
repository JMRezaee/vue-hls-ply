<template>
  <div class="app">
    <h2>Vue HLS</h2>
    <aplayer :playerOptions="aOption" @onplay="play" @onpause="pause" />
    <vplayer :playerOptions="vOption" @onplay="play" @onpause="pause" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      aOption: {
        type: "application/x-mpegURL",
        src: "http://ph1vqefl0.bkt.clouddn.com/hlsnature2",
        preload: true,
        autoplay: true,
        isLoop: false,
        poster: "https://oimdztrab.qnssl.com/Frp4SyVe5PosdkUKRaE-krjK7B5z",
        title: "Audio Player",
        description: "",
      },
      vOption: {
        type: "application/x-mpegURL",
        src: "http://obbfzjhuq.bkt.clouddn.com/WEw3RTROUVFFT0MxNTY4MTAzODQ5NTQ1",
        preload: true,
        autoplay: true,
        isLoop: false,
        poster: "https://oimdztrab.qnssl.com/FlRHT5-abdwNVXyBb-sYzUPIihoe",
        playsinline: true,
        title: "Video Player",
      },
    };
  },
  methods: {
    play(e) {
      alert("play now");
    },
    pause(e) {
      alert("pause now");
    },
  },
};
</script>
<style lang="scss">
.player {
  width: 400px;
  margin: 0 auto;
  min-height: 30px;
}
</style>
