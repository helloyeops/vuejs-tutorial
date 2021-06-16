var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    // list: ['사과', '바나나', '딸기'],
    list: [
      {id: 1, name: '슬라임', hp: 100},
      {id: 2, name: '고블린', hp: 200},
      {id: 3, name: '드래곤', hp: 500}
    ],
    ok: false
  },
  methods: {
    handleClick: function(e) {
      alert('Click!!!')
    }
  }
})