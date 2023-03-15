<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconContainer from './components/IconContainer.vue'
import IconLogo from './components/icons/IconLogo.vue'
import IconProfil from './components/icons/IconProfil.vue'
import IconMenu from './components/icons/IconMenu.vue'
import IconRecherche from './components/icons/IconRecherche.vue'
</script>

<style>
  @import './assets/css/style.css';
</style>

<template>
  <header>
      <nav  class="container-header">

          <div class="site-header">
            <!---------------- header et icons -------------->
            <div class="site-header-container">
              
              <RouterLink to="/accueil">
                <IconContainer>
                  <template #icon>
                    <IconLogo />
                  </template>
                </IconContainer>
              </RouterLink>


              <div class="header-icon-container">

                <RouterLink to="/login">
                  <IconContainer>
                      <template #icon>
                         <IconProfil />
                      </template>
                  </IconContainer>
                </RouterLink>

                <label for="menu-toggle">
                  <div class="container-icon-menu ">
                    <IconContainer>
                      <template #icon>
                         <IconMenu />
                      </template>
                    </IconContainer>
                  </div>
                </label>
              </div>

            </div>

            <!--------------- barre de recherche ------------->
            <form class="search" action="{{ route('catalogue.search') }}" method="GET" >
              <input  placeholder="@lang('lang.recherche_un_vin')" type="search" name="query">
              <button type="submit" class="search-button">
                    <IconContainer>
                      <template #icon>
                         <IconRecherche />
                      </template>
                    </IconContainer>
              </button>
            </form>

          </div>
          
          <!-------------- items menu-deroulant -------------->
          <input type="checkbox" id="menu-toggle"/>
          <ul id="menu">
            <li class="list-item">
              <RouterLink to="/liste">
                  Mon Cellier
              </RouterLink>  
            </li>  
            <li class="list-item">
              <RouterLink to="/creer-cellier">
                  Create Cellier
              </RouterLink>  
            </li>   
            @guest
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.settings')</a> </li>
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.privacy_policy')</a> </li>
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.terms&conditions')</a></li>
            @else
            <li class="list-item"><a href="{{ route('logout')}}"> @lang('lang.logout')</a></li>
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.settings')</a></li>
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.privacy_policy')</a></li>
            <li class="list-item"><a href="{{ route('welcome')}}">@lang('lang.terms&conditions')</a></li>
            @endguest
            <li class="list-item"><a href="{{route('lang', 'en')}}">English</a></li>
            <li class="list-item"><a href="{{route('lang', 'fr')}}">Francais</a></li>
            <li class="list-item"><a href="{{route('lang', 'es')}}">Español</a></li>
            <li class="list-item"><a href="{{route('lang', 'ru')}}">Русский</a></li>
          </ul>

    </nav>

  </header>

  <RouterView />
</template>
