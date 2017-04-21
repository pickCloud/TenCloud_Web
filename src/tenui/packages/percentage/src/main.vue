<template>
  <div class="percentage">
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: 'Percentage',
  props: {
    used: {
      required: true,
      type: Number
    },
    free: {
      required: true,
      type: Number
    },
    usedColor: {
      type: String,
      default: '#45c8dc'
    },
    freeColor: {
      type: String,
      default: '#988fd8'
    },
    lineWidth: {
      required: true,
      type: Number,
      default: 3
    },
    height: {
      required: true,
      type: Number,
      default: 300
    },
    width: {
      required: true,
      type: Number,
      default: 300
    }
  },
  mounted () {
    var total = this.used + this.free
    var percentage = this.used / total
    var fontSize = this.width / 10
    // get canvas tag and use
    let canvas = this.$el.childNodes[0]
    let context = canvas.getContext('2d')
    canvas.width = this.width
    canvas.height = this.height
    // draw outer circle (full circle with the color of 'free')
    context.clearRect(0, 0, this.width, this.height)
    context.beginPath()
    context.moveTo(this.width / 2, this.height / 2)
    context.arc(this.width / 2, this.height / 2,
      this.height / 2, 0, Math.PI * 2, false)
    context.closePath()
    context.fillStyle = this.freeColor
    context.fill()
    // setup 'used' part
    context.beginPath()
    context.lineCap = 'round'
    context.lineWidth = this.lineWidth
    context.strokeStyle = this.usedColor
    context.closePath()
    context.fill()
    // draw inner blank circle
    context.beginPath()
    context.moveTo(this.width / 2, this.height / 2)
    context.arc(this.width / 2, this.height / 2,
      this.height / 2 - this.lineWidth, 0, Math.PI * 2, false)
    context.closePath()
    context.fillStyle = '#fff'
    context.fill()
    // setup the style of words inside
    context.font = 'bold ' + (fontSize + '') + 'pt Arial'
    context.fillStyle = this.usedColor
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    /*
     *  使用setInterval()，每个间隔在canvas上画一小段，累积起来最终到所需要的位置
     *  数字增长：使用setInterval()时，每增加1%，则清除中央部分的数字，加上新的数字
     *  （可以按需更改精确度），最终显示实际的百分比（精确到小数点后3位，可自定）
     */
     // drawing the bar per interval
    function drawUsedPerInterval (width, height, lineWidth, per) {
      context.beginPath()
      context.arc(width / 2, height / 2, height / 2 - lineWidth / 2,
        -(Math.PI / 2), ((Math.PI * 2 * per) - (Math.PI / 2)), false)
      context.stroke()
    }
    // Interval
    var timer = null
    var accumulation = 0  // 累积步长
    // Generally, the stepLength should be less than 0.01, otherwise the
    // animation will not be visable.
    let stepLength = 0.01   // 步长
    var times = 0       // setInterval()重复画的次数
    var currentPercentage = 0   // 当前百分比
    var stepsPer1 = parseInt(0.01 / stepLength) // The steps needed for drawing 1%
    function animation (width, height, lineWidth, percentage) {
      timer = setInterval(function () {
        if (accumulation > percentage) {
          clearInterval(timer)
        } else {
          drawUsedPerInterval(width, height, lineWidth, accumulation)
          // for every stepsPer1, clear the number and add a new number
          if ((times % stepsPer1 === 0) && (currentPercentage / 100 < percentage)) {
            context.clearRect(width / 2 - 2 * fontSize, height / 2 - 2 * fontSize,
              4 * fontSize, 4 * fontSize)           // 清除的部分根据字体大小大小自适应
            context.moveTo(width / 2, height / 2)
            context.fillText(currentPercentage + '' + '%', width / 2, height / 2)
            currentPercentage += 1
          }
          // At the end, show the actual percentage
          if (currentPercentage / 100 >= percentage) {
            context.clearRect(width / 2 - 2 * fontSize, height / 2 - 2 * fontSize,
              4 * fontSize, 4 * fontSize)
            context.moveTo(width / 2, height / 2)
            context.fillText((percentage * 100 + '').slice(0, 4) + '%',
              width / 2, height / 2)
          }
          times += 1
          accumulation += stepLength
        }
      }, 15)
    }
    animation(this.width, this.height, this.lineWidth, percentage)
  }
}
</script>
