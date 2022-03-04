<script setup>
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
                VirtusDevelops
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

                <NavLink to="/">Home</NavLInk>
                <NavLink to="/about">About</NavLInk>
                <NavLink to="/holoextension">HoloExtension</NavLInk>
                <NavLink to="/simplecrops">SimpleCrops</NavLInk>
                <NavLink to="/simplepvp">SimplePvP</NavLInk>
                <NavLink to="/lootboxes">LootBoxes</NavLInk>

            </div>
            </div>
        </div>
    </nav>
</template>

