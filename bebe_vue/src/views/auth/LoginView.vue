<template>
    <main class="container-signup">

<div class="header-form">
    <h3>Welcome</h3>
</div>

<div class="container-form">

    <form action="" method="post">
        <!-- @csrf -->
        <p class="text-form">Connectez-vous à votre compte</p>

            <input type="email" placeholder="courriel" class="email" name="email" value="">
    
            <!-- @if($errors->has('email'))
            <div class="text-form">
                {{$errors->first('email')}}
            </div>
            @endif -->

            <input type="password" placeholder="mot de passe" class="password" name="password">

            <!-- @if($errors->has('password'))
            <div class="text-form">
                {{$errors->first('password')}}
            </div>
            @endif -->

            <input type="submit" value="submit" class="submit">

            <p class="text-form">Mot de passe oublié ? Cliquez <a class="text-login" href="">ici</a></p>
            <p class="text-form">Pas de compte ? Cliquez 
                <RouterLink to="/creer-compte">
                  isi
                </RouterLink>
                </p>
    </form>
</div>
</main>
</template>