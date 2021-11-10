module.exports = (post) => `<!DOCTYPE html>
  <html>
  <head>
  <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap" rel="stylesheet">
    <title>GekoCoin</title>

    <script>
        const head = document.getElementsByTagName('HEAD')[0]
        const link = document.createElement('link')
        link.rel = 'stylesheet';
        link.type = 'text/css'
        link.href = '/style.css';
        head.appendChild(link)
    </script>
  </head>
  <body>
    <div class=“GekoCoin-list”>
      <header>GekoCoin</header>
        
       
     
        <div class=‘GekoCoin-item’>
            <p class=“coin-info”>
                <span class=“coin-number”>${post.id}.</span>
                <span class=“label”> Coin Name: <a href=“/posts/${post.id}“>${post.name}</a></span>
                <span>(unit in: ${post.unit})</span>
            </p>
           
            <div class=“coin-content”>
                <p class=“coin-info” >
                    <p><span class=“label”>Value: </span>${post.value}</p>
                    <p><span class=“label”>Highlight: </span>${post.type}</p>
                </p>
            </div>
           
        </div>
    </div>
  </body>
  </html>`;