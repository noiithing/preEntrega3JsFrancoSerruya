const items= document.getElementById('items')
const templateCard= document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})
6
const fechData = async () => {
  try{
    const res=await fetch ('api.json')
    const data=  await res.json()
    mostrarCars(data)
    }
    catch(error){
      console.log(error)
    }
  }

  const mostrarCars = data => {
    data.forEach(producto=> {
      templeateCard.querySelector('h5').textContent = producto.title
      
      const clone = templateCard.cloneMode(true)
      fragment.appendChild(clone)

    })
    items.appendChild(fragment)
  }


