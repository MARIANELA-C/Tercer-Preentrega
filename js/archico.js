
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
          "Has seleccionado Los Tipitos 17/07/2022 en el estadio Velez 20:30hs")
    }
  })
  let enJson2=JSON.stringify(agregar1)
  localStorage.setItem("boton1", agregar1)
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
              "Has seleccionado Airbag 23/07/2022 en el estadio Velez 20:30hs"
          )
        }
      })
    let enJson2=JSON.stringify(agregar2)
    localStorage.setItem("boton2", agregar2)
    }

  