# vue-hls-ply

vue hls ply,audio,video

## Install

```
npm install vue-hls-ply
```

## Supported Events

- onplay: start playing.
- onplaying: Play has started.
- onpause: Paused by user or program.
- onabort: exit.
- onended: playback ends
- onerror: When an error occurs during loading.
- onprogress: Script to run when the browser is fetching media data
- ondurationchange: Script to run when the media length changes.
- onseeking: Script to run when the seeking property is set to true (indicating that seeking is active).
- onseeked: Script to run when the seeking property is set to false (indicating that a seek has ended).
- ontimeupdate: A script that runs when the playback position changes (such as when the user fast-forwards to a different position in the media).
- onvolumechange: Script that runs whenever the volume changes (including muting the volume). (video only)

## Global use

```
//入口index.js
import player from 'vue-hls-ply'
Vue.use(player)

//test.vue
<vplayer :playerOptions = "vOption" @onplay="play" />

vOption:{
    type: "application/x-mpegURL",
    src: 'http://ph1vqefl0.bkt.clouddn.com/hlsnature2',
    preload: true,
    autoplay: true,
    isLoop: false,
    playsinline: false,
    poster: 'https://oimdztrab.qnssl.com/Frp4SyVe5PosdkUKRaE-krjK7B5z',
    crossOrigin: false
}

methods:{
    play(e){
        console.log(e)
    }
}
```

## Use audio

```
import { aplayer } from 'vue-hls-ply'
components: { aplayer }

<aplayer :playerOptions = "aOption" @onpause="pause" />

aOption:{
    type: "application/x-mpegURL",
    src: 'http://ph1vqefl0.bkt.clouddn.com/hlsnature2',
    preload: true,
    autoplay: true,
    isLoop: false
}
methods:{
    pause(e){
        console.log(e)
    }
}
```

## Use video

```
import { vplayer } from 'vue-hls-ply'
components: { vplayer }

<vplayer :playerOptions = "vOption" @onpause="pause" />

vOption:{
    type: "application/x-mpegURL",
    src: 'http://ph1vqefl0.bkt.clouddn.com/hlsnature2',
    preload: true,
    autoplay: true,
    isLoop: false,
    poster: 'https://oimdztrab.qnssl.com/Frp4SyVe5PosdkUKRaE-krjK7B5z',
    crossOrigin: false
}

methods:{
    pause(e){
        console.log(e)
    }
}
```
