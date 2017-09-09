var app = new Vue({
  el: '#app',
  data: {
    taskes: [],//data
    toggle: [],//checkbox
    formTask: '',//masukin inputan
    checkboxTask:[]
  },
  mounted() {
    var dataTask = this;
    console.log(dataTask);
    axios.get('http://localhost:3000/tasks/read', {
      headers:{
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log("--->", response);
        dataTask.taskes = response.data
      })
  },
  methods: {
    addtask(data) {
      var self = this
      console.log(data);
      axios.post(`http://localhost:3000/tasks/create`, {
          taskName: data,
          status: 'Pending'
        },{
          headers:{
            token: localStorage.getItem('token')
          }
        })
        .then((response) => {
            self.taskes.push(response.data)
          console.log(response);
        })
    },
    ubahStatus(data,index){
      console.log("ubahStatus",data);

      var status = ''
      if(this.taskes[index].status == "Done"){
        status = 'Pending'
      }
      else {
        status = 'Done'
      }

      var self = this
      axios.put(`http://localhost:3000/tasks/update/${data._id}`,{
        taskName: data.taskName,
        status: status
      },{
        headers:{
          token: localStorage.getItem('token')
        }
      })
      .then((response)=>{
        console.log("respon UBAHSTATUS ",response);

        self.taskes[index].status = status
      })
    },
    deleteTask(data,index){
      console.log(data);
      var self = this
      axios.delete(`http://localhost:3000/tasks/delete/${data}`, {
        headers:{
          token: localStorage.getItem('token')
        }
      })
      .then((response)=>{
        self.taskes.splice(index,1)
        console.log(response);
      })
    }
  }
})
