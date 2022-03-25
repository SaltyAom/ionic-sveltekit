<script lang="ts">
    import 'virtual:windi.css'
    import '$lib/styles/global.sass'
    import '@ionic/core/css/ionic.bundle.css'

    import { browser } from "$app/env"

    import { onMount } from 'svelte'

    import { initialize } from '@ionic/core/components'
    import { defineIonic } from '$lib/services/ionic'
    
    onMount(async () => {        
        if (!browser) return        
        
        initialize()
        defineIonic()
    })
</script>

<ion-app>
    <ion-router>
        <ion-route url="/" component="page-root"></ion-route>
        <ion-route url="/hi" component="page-hi"></ion-route>
    </ion-router>
    <slot></slot>    
</ion-app>
