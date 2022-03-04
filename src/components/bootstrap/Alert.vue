<template>
    <div :class="['alert ','alert-' + type, dismissible ? 'alert-dismissible fade show' : '']" role="alert">
        <slot name="text"></slot>
        
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
</template>



<script>

export default {
  name: 'Alert',
  inheritAttrs: false,

  props: {
    type: String,
    dismissible: Boolean
  },
}
</script>