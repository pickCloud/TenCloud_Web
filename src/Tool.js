export default {
  filesize (d) {
    let result = d
    let suffix = 'B'
    if (result > 1000000000) {
      result = result / 1024 / 1024 / 1024
      suffix = 'G'
    } else if (result > 1000000) {
      result = result / 1024 / 102
      suffix = 'M'
    } else if (result > 1000) {
      result = result / 1024
      suffix = 'KB'
    }
    return Math.ceil(result * 100) / 100 + suffix
  }
}
