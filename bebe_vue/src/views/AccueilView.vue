<template>
    <div class="accueil-container">
        <div class="accueil-overlay">
          
          <h1 class="accueil-titre">@lang('lang.welcome') @lang('lang.guest')</h1>
          <p class="accueil-paragraph">@lang('lang.introduction')</p>
          <button class="accueil-button"><a  href="{{ route('user.auth')}}">@lang('lang.login')</a></button>
        
        </div>
    </div>
</template>


