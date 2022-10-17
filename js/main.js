document.querySelector('button').addEventListener('click', searched)


function searched(){
  const search = document.querySelector('input').value
  console.log(search)

  const url = `https://api.artic.edu/api/v1/artworks/search?params=%7B%22q%22%3A%22${search}%22%2C%22query%22%3A%7B%22term%22%3A%7B%22is_public_domain%22%3Atrue%7D%7D%7D`

  fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)

          document.querySelector('.width').innerText = `Width: ${data.data[0].thumbnail.width}`
          document.querySelector('.height').innerText = `Height: ${data.data[0].thumbnail.height}`
          document.querySelector('h2').innerText = `The artwork is titled '${data.data[0].title}'.`
          document.querySelector('h3').innerText = data.data[0].thumbnail.alt_text
          document.querySelector('h5').innerText = data.data[0].id
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }


