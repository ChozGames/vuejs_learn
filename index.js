var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// On change le contenu de la variable message
app.message = "";

var app2 = new Vue({
  el: '#app2',
  data: {
    seen: false
  }
})

app2.seen = false;

var app3 = new Vue({
  el: '#app3',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});

app3.todos.push( { text : "Un nouveau texte" })


var app4 = new Vue({
  el: '#app4',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})