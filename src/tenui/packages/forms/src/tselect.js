class Tselect {
  constructor (vm) {
    this.vm = vm
    this.setDefault()
  }
  setDefault () {
    let i = -1
    while (++i < this.vm.data.length) {
      let v = this.vm.data[i]
      if (v.active) {
        this.setActive(i, this.vm.$el.querySelectorAll('.select-opation_item')[i])
        break
      }
    }
  }
  itemSelect (key, e) {
    if (e.target.className.split(' ').indexOf('disabled') !== -1) return
    if (e.target.className.split(' ').indexOf('active') === -1) {
      this.vm.$el.querySelector('.select-opation').style.top = this.vm.$el.querySelector('.select-label').clientHeight + 'px'
      this.setActive(key, e.target)
    }
    this.vm.hide()
  }
  setActive (key, e) {
    let tempac = this.vm.$el.querySelector('.select-opation').querySelectorAll('.active')
    let i = -1
    while (++i < tempac.length) {
      tempac[i].className = tempac[i].className.replace(' active', '')
    }
    e.className += ' active'
    this.vm.value = e.getAttribute('value')
    this.vm.$el.querySelector('.select-label_label').innerHTML = e.innerHTML
    this.vm.label = e.innerHTML
    this.vm.key = key
    this.vm.$emit('change', this.vm.label, this.vm.value, this.vm.key)
  }
}

export default function (vm) {
  return new Tselect(vm)
}
