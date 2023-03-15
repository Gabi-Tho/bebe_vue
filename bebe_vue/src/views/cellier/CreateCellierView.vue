<template>
    <main class="container-signup">
        <div class="header-form">
            <h3>Create Cellier</h3>
        </div>
        <div class="container-form">

            <form action="{{ route('cellier.store') }}" method="POST">
            <!-- @csrf -->
                <div class="">
                    <label for="nom">Cellar Name:</label>
                    <input type="text" name="nom" id="nom" class="form-control" placeholder="Nom de cellier" required>
                </div>
                <div >
                    <label for="description">Cellier Description:</label>
                    <textarea name="description" id="description" class="form-control" required></textarea>
                </div>
                <div>
                    <button class="submit" type="submit" >Create Cellier</button>
                </div>
            </form>
        </div>
    </main>
</template>