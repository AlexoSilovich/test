async function getResponse() {
  const requestURL = 'https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json'
  
  let response = await fetch(requestURL)
  let {stock, nav} = await response.json()

  const navBar = document.querySelector('.navbar')
  const allRes = document.querySelector('.all_nav')
  const cards = document.querySelector('.cards')

  for (let key in stock) {
    if (key > 0) {
      cards.innerHTML += `
      <li class="card d-flex flex-row mb-3">
        <div class="card_img">
          <img src="https://github.com/alexnaidovich/frontend_test_task/blob/master/src/img/${key}.jpg?raw=true" alt="img">
        </div>
        <div class="card_descr">
          <h5 class="card_title">${stock[key].title}</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptas laborum officiis eum cupiditate, quas sit animi iusto. Ipsum hic labore porro et a numquam veritatis cumque quia at exercitationem.</p>
          <span class="year">${stock[key].year}</span>
          <span class="mileage">${stock[key].mileage}</span>
          <span>${stock[key].axle_configuration}</span>
        </div>
        <div class="card_price">
          ${stock[key].price} $
        </div>
      </li>
  `
    }
    
  }

  for (let key in nav) {
    navBar.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">${nav[key].text}</a>
      </li>
    `
  }
  
  allRes.innerHTML += `
    ${stock.length} result found
  `
}

getResponse()


