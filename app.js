const app =Vue.createApp({
  // dat, function
  //goes into dom
  data() {
    return {
      showTasks:true,
      todoList:[
        {header:"algo", text:"alguien", done:true},
        {header:"algo1", text:"alguien1",done:false},
        {header:"algo2", text:"alguien2",doen:true}
      ],
      x:0,
      y:0,
      currentTask:{
        header:"",
        text:"", 
        isFav:false,
      }
    }
  },methods:{
    toogleTasks() {
      this.showTasks = !this.showTasks
    },

    toogleFav (todo){
      todo.done = !todo.done
    },
    addTask(e){
      this.todoList.push({header:this.currentTask.header,text:this.currentTask.text})
      this.currentTask.header = ''
      this.currentTask.text = ''
     
    },
    removeTask(todo){
      let indexOfTodo = this.todoList.indexOf(todo)
      this.todoList.splice(indexOfTodo,1)
    }
  },
  computed:{
    filteredBooks () {
      return this.books.filter(book =>book.isFav)
    }
  }

})

app.mount('#app')
