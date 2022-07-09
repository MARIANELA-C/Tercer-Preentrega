













let agregar1=document.getElementById("agregar1")
let agregar2=document.getElementById("agregar2")

agregar1.onclick=()=>{
    Swal.fire({
        input: "select",
        inputPlaceholder:"entradas",
        inputValue:"",
        inputOptions:{
            1:"1",
            2:"2",
            3:"3"
        } 
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              "Ya tienes tus entradas"
          )
        }
      })
}

agregar2.onclick=()=>{ 
    Swal.fire({
        input: "select",
        inputPlaceholder:"entradas",
        inputValue:"",
        inputOptions:{
            1:"1",
            2:"2",
            3:"3"
        } 
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              "Ya tienes tus entradas"
          )
        }
      })
    }

  