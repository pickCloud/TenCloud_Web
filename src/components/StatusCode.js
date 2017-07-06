export default {
  business: {
    '0': ['运行中', 'primary_bg alpha-black_txt'],
    '1': ['已停止', 'pink_bg alpha-black_txt'],
    '2': ['启动中', 'primary_bg alpha-black_txt'],
    '3': ['停止中', 'pink_bg alpha-black_txt'],
    '4': ['满负载', 'pink_bg alpha-black_txt']
  },
  machine: {
    'Pending': ['准备中', 'primary_bg alpha-black_txt', 'run'],
    'Stopped': ['已停止', 'pink_bg alpha-black_txt', 'stop'],
    'Starting': ['启动中', 'primary_bg alpha-black_txt', 'run'],
    'Running': ['运行中', 'primary_bg alpha-black_txt', 'run'],
    'Stopping': ['停止中', 'pink_bg alpha-black_txt', 'stop'],
    'Deleted': ['已释放', 'pink_bg alpha-black_txt', 'stop']
  },
  server: {
    'server_start': [3, 'Starting', 'Running', '机器启动中，这个过程需要大约', '开机'],
    'server_stop': [30, 'Stopping', 'Stopped', '机器关机中，这个过程需要大约', '关机'],
    'server_reboot': [30, 'Stopping', 'Running', '机器重启中，这个过程需要大约', '重启机器']
  }
}
