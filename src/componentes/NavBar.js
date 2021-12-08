const Encabezado = () => {
return (
    
    <header>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src={ './bootstrap-icons/icons/house-door.svg' }/>
      
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PRODUCTOS</a>
          </li>
 
        </ul>
      </div>
    </div>
  </nav></header> 
    )

}

export default Encabezado

