<template>
    <div class="liste-container">
  
  <!-- search bar -->
  <form class="search  liste-search ">
    <input placeholder="recherche dans cellier" type="search">
    <button type="submit" class="search-button" value="Submit">Search</button>
  </form>

  <!-- wine list -->
  <div class="container">

    <div class="card">
        <div class="card-body">
            <img src="" alt="nom">
            <picture class="modal"><img src="" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
                    <h3 class="card-title">Nom</h3>
                    <p class="card-subtitle">Format</p>
                    <p class="card-subtitle">Pays</p>
                </div>
                <div class="card-info-client">
                    <p class="card-count">Prix  $</p>
                    <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                    <div class="card-footer">
                      <button  class="card-btn_add " value="">+</button>   
                      <button  class="card-btn_add deleteModalBtn" value="" data-id="{{ $bouteille->id}}" data-dialog-id="deleteModal_{{ $bouteille->id }}">-</button>   
                </div>
                </div>  
            </div> 
  
        </div>

    </div>

  <div class="card">
        <div class="card-body">

            <img src="{{ asset('img/vin2.png')}}" alt="Product Image">
            <picture class="modal"><img src="{{ asset('img/vin2.png')}}" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
  
                    <h3 class="card-title">Riesling Pinot gris Mosel</h3>
                    <p class="card-subtitle">White wine 750 ml</p>
                </div>
                <div class="card-info-client">
                    
                    <div>
                    <p class="card-count">Quantite: 10 <button  class="card-btn_add" value="">&#8679;</button></p>
                    </div>
                    
                    <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                </div>
          
            </div>
        </div>
        <div class="card-footer">

            <button  class="card-btn" value="">Drink</button>
            
        </div>
    </div>
    <div class="card">
        <div class="card-body">

            <img src="{{ asset('img/vin2.png')}}" alt="Product Image">
            <picture class="modal"><img src="{{ asset('img/vin2.png')}}" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
  
                    <h3 class="card-title">Riesling Pinot gris Mosel</h3>
                    <p class="card-subtitle">White wine 750 ml</p>
                </div>
                <div class="card-info-client">
  
                    <p class="card-count">Quantite: 10 </p>
                    <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                </div>
          
            </div>
        </div>
        <div class="card-footer">

            <button  class="card-btn" value="">Drink</button>
            <button  class="card-btn" value="">Add</button>
        </div>
    </div>
    <div class="card">
        <div class="card-body">

            <img src="{{ asset('img/vin2.png')}}" alt="Product Image">
            <picture class="modal"><img src="{{ asset('img/vin2.png')}}" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
  
                    <h3 class="card-title">Riesling Pinot gris Mosel</h3>
                    <p class="card-subtitle">White wine 750 ml</p>
                </div>
                <div class="card-info-client">
  
                    <p class="card-count">Quantite: 10 </p>
                    <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                </div>
          
            </div>
        </div>
        <div class="card-footer">

            <button  class="card-btn" value="">Drink</button>
            <button  class="card-btn" value="">Add</button>
        </div>
    </div>
    
  </div>

</div>
</template>