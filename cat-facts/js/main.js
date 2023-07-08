const { createApp } = Vue

createApp({
  data() {
    return {
      fact: '',
      fontsClass:["oriental", "cattieReg", "cuteMeow", "kittyCat", "meows", "simple"],
      selectedFont: ""
    }
  },
  created(){
    this.getRandomClass()
    this.getRandomFact()
  },
  methods:{
    getRandomClass(){
      const randomIndex = Math.floor(Math.random() *  this.fontsClass.length);
      this.selectedFont = this.fontsClass[randomIndex]
    },
    getRandomFact(){
      axios.get("https://catfact.ninja/fact").then((response)=>{
      const res = response.data.fact
      this.fact = res
    });
    }
    
  }
}).mount('#app')