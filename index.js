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