<script setup>

import Alert from '@/components/bootstrap/Alert.vue'

</script>

<template>

<div class="container position-relative" id="content">
  <Alert type="danger" dismissible>
    <template #text>
      <strong>This wiki is not completed, and it still in early beta version!</strong>
    </template>
  </Alert>
  

  <div class="row h-100 mt-5">

    <div class="col-sm-2 border-end me-0 pe-0" >
      <div class="mt-5 mb-3 sticky-top" id="side">
          <ul class="nav flex-md-column flex-row justify-content-between" id="sidenav">
              <li class="nav-item"><a href="#plugin" class="nav-link active pl-0">Plugin</a></li>
              <li class="nav-item"><a href="#placeholder" class="nav-link pl-0">Choosing Placeholder</a></li>
              <li class="nav-item"><a href="#leaderboard" class="nav-link pl-0">Creating leaderboard</a></li>
          </ul>
      </div>
    </div>


    <div class="col py-5">
        <div data-bs-spy="scroll" data-bs-target="#sidebar" data-bs-offset="0" tabindex="0">
          <div class="holoextension">
            <h2 class="mb-3">HoloExtension</h2>
            <p class="text-primary">It is a free simple plugin for creating leaderboards on your server.</p>


            <h4 id="plugin"> Setting plugin up </h4>
            <p>Simple steps on how to setup new or existing leaderboards, you can also contact me on discord server.
              Make sure you have the required permissions to use the plugin.</p>
              

            <h5 id="placeholder">1. Figuring out which placeholder to use for leaderboard</h5>
            <p>HoloExtension tracks data from players by parsing what player sees from specific placeholder. Beacuse of that some placeholders
              might not work correctly or at all. But at the same it support large amount of plugins, doesnt need any extra plugins to work, is
              fast and efficient.</p>

            <p>List of all the placeholders can be found on offical PlaceholderAPI github page <a href="" class="text-primary">(here)</a>.</p>

            <p> Placeholder you use must only return normal number for example (1 or 10.0) and cannot return any text or be formatted example (1mil, 10k...).</p>

            <p>Some examples of usuable placeholders: <span class="badge bg-secondary">%statistic_mob_kills%</span>, <span class="badge bg-secondary">%statistic_player_kills%</span>,
              <span class="badge bg-secondary">%statistic_craft_item%</span></p>

            <Alert type="warning">
              <template #text>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <strong>Make sure you do not use placeholder that is already part of leaderboard, those are ususally easily recognized by containing keyword like leaderboard.</strong>
              </template>
            </Alert>


            <h4 id="leaderboard">2. Creating the leaderboard </h4>
            <p>After you have selected which placeholder you want to use, you can start by typing the next command ingame <span class="text-primary">/he</span>, this command is going to
              open a menu for you. </p>



            
          </div>
        </div>
      </div>
    </div>
</div>

</template>




