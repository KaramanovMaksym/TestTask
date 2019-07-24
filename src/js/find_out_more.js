onClickFindOutMore = event => {
  let str = "https://jsonplaceholder.typicode.com/photos"
  let connection = new XMLHttpRequest()
  connection.open("GET", str, false)
  connection.send()
  let response = connection.responseText
  response = JSON.parse(response)

  // let y = document.getElementById('test')

  // y.innerHTML = response[Math.round(0 + Math.random()*response.length)].title

  let z = document.getElementsByClassName('feature_item')
  
  let rand = []
  let imgHMLCollection, h3HTMLCollection
  createRandom(rand, z.length, response.length)
  
  for(let i=0; i < z.length; i++){
    
    imgHMLCollection = z[i].getElementsByClassName('logo_feature')
    imgHMLCollection[0].setAttribute('src', response[rand[i]].thumbnailUrl)

    h3HTMLCollection = z[i].getElementsByTagName('h3')
    h3HTMLCollection[0].innerHTML = response[rand[i]].title
    
  }
}

createRandom = (arr, lengthArr, lengthRand) =>{
  let rand;
  for(let i = 0; i < lengthArr; i++){
    do {
      rand = Math.round(0 + Math.random()*lengthRand)
    }while(rand === -1)
    arr[i] = rand
  }
}