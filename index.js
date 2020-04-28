import Vue from 'vue'
export default function install() {
  Vue.prototype.test = () => {
    console.log('123');
  }
}