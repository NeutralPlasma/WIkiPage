<script setup>
</script>


<template>
    <nav aria-label="sidebar" role="navigation" class="header-navbar navbar-expand-sm navbar navbar-with-menu navbar-hide-on-scroll navbar-dark bg-darker navbar-shadow navbar-border w-100">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
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




