<template>
  <AppLink
    v-bind="$attrs"
    class="nav-link"
    active-class="active text-primary"
    inactive-class=""
  >
    <slot />
  </AppLink>
</template>