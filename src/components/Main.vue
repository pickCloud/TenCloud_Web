<template>
  <div class="main">
    <m-btn @click.native="sendSocket">send</m-btn>
  </div>
</template>

<script>
  const socket = new WebSocket('ws://192.168.1.116:8010/api/server/new')
  export default {
    name: 'Main',
    methods: {
      sendSocket () {
        socket.send('hello this is send')
      }
    },
    created () {
      socket.onopen = function (event) {
        socket.send('I am the client and I\'m listening!')
        socket.onmessage = function (event) {
          console.log('Client received a message', event)
        }
        socket.onclose = function (event) {
          console.log('Client notified socket has closed', event)
        }
      }
    }
  }
</script>
