<template>
    <div class="accueil-container">
        <div class="accueil-overlay">
          
          <h1 class="accueil-titre">@lang('lang.welcome') @lang('lang.guest')</h1>
          <p class="accueil-paragraph">@lang('lang.introduction')</p>
          <button class="accueil-button">
            <RouterLink to="/login">    
              @lang('lang.login')     
            </RouterLink>
          </button>
        
        </div>
    </div>
</template>


