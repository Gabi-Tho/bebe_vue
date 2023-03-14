<script setup>
import IconContainer from '../components/IconContainer.vue'
import IconRecherchePetit from '../components/icons/IconRecherchePetit.vue' 
import IconCellier from '../components/icons/IconCellier.vue'
import IconInfoPersonnelle from '../components/icons/IconInfoPersonnelle.vue'
import IconCreerCellier from '../components/icons/IconCreerCellier.vue'
</script>

<template>
                     
    <nav>
      <div class="menu-cellier-container">
        <a href="{{ route('cellier.create') }}" class="flower-button">
          <IconContainer>
            <template #icon>
               <IconCreerCellier />
            </template>
          </IconContainer>
        </a>
        <a href="" class="cellier-button">
          <IconContainer>
            <template #icon>
               <IconCellier />
            </template>
          </IconContainer>
        </a>
        <a href="" class="search-button">
          <IconContainer>
            <template #icon>
               <IconRecherchePetit />
            </template>
          </IconContainer>
        </a>

        <a href="" class="profile-button">
          <IconContainer>
            <template #icon>
               <IconInfoPersonnelle />
            </template>
          </IconContainer>
        </a>
      </div>
    </nav> 
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
            <img src="../assets/images/vin2.png" alt="nom">
            <picture class="modal"><img src="../assets/images/vin2.png" alt="img"></picture>
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
            <img src="../assets/images/vin2.png" alt="nom">
            <picture class="modal"><img src="../assets/images/vin2.png" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
                    <h3 class="card-title">Riesling Pinot gris Mosel</h3>
                    <p class="card-subtitle">White wine 750 ml</p>
                    <p class="card-subtitle">France</p>
                </div>
                <div class="card-info-client">
                    <p class="card-count">28 $</p>
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
            <div class="liste-image"></div>
            <img class="img" src="../assets/images/vin2.png" alt="nom">
            <picture class="modal"><img src="../assets/images/vin2.png" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
                    <h3 class="card-title">Riesling Pinot gris Mosel</h3>
                    <p class="card-subtitle">White wine 750 ml</p>
                    <p class="card-subtitle">France</p>
                </div>
                <div class="card-info-client">
                    <p class="card-count">28 $</p>
                    <p class="card-rating">Note: &#9733;&#9733;&#9733;&#10025;</p>
                    <div class="card-footer">
                      <button  class="card-btn_add " value="">+</button>   
                      <button  class="card-btn_add deleteModalBtn" value="" data-id="{{ $bouteille->id}}" data-dialog-id="deleteModal_{{ $bouteille->id }}">-</button>   
                </div>
                </div>  
            </div> 
  
        </div>

    </div>

  
    
    
  </div>

</div>
</template>