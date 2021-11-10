module.exports = (posts) => `<!DOCTYPE html>
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
        
     
       
      ${posts.map(post =>`
      <div class=‘GekoCoin-item>
      <ul class=“coin-list”>
      <span>
          <li class=“coin-number”>${post.id}.</li>
          <li class=“label”>Coin Name: <a href="/posts/${post.id}">${post.name}</a></li>
          <li>(unit in: ${post.unit})</li>
          </span>
      </ul>`).join('')}
     
     
  </div> 

      


     
       
      
    </div>
  </body>
  </html>`;