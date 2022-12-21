var a = {
  mobiles: {
    samsung: {
      a30: {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
      },
      note10: {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
      },
      s10: {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
      },
      y10: {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
      },
    },
    iphone: {
      iphone4: {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      iphone4s: {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
      },
      iphone5: {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
      },
      iphone6: {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
      },
    },
    xiomi: {
      redminote10: {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      redminote11: {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },
      redmi10: {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },

      redmi10pro: {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
      },

    },
  },
};

function abc() {
  let first = document.getElementById("first");
  let para = document.getElementById("para")
  let b = document.getElementById("fop");
  let op1 = document.getElementById("op1")
  first.style.display = "none"
  let y = Object.keys(a["mobiles"][b.value])
  console.log(b.value)
  console.log(y)

  op1.innerHTML = "";
  console.log(Object.keys(a["mobiles"][b.value]))
  for (i = 0; i < y.length; i++) {


    op1.innerHTML = `
  
    <option>${y[0]}</option>    
    <option>${y[1]}</option>    
    <option>${y[2]}</option>    
    <option>${y[3]}</option>

  `

  }

}

function rander() {

  let b = document.getElementById("fop")
  let op1 = document.getElementById("op1")
  let object = Object.entries(a["mobiles"][b.value][op1.value])
  console.log(object)
  alert(Object.entries(a["mobiles"][b.value][op1.value]))

}



