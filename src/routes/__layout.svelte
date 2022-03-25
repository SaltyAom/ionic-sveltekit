<script lang="ts">
    import 'virtual:windi.css'
    import '$lib/styles/global.sass'
    import '@ionic/core/css/ionic.bundle.css'

    import { browser } from "$app/env"

    import { onMount } from 'svelte'

    import { initialize } from '@ionic/core/components'
    import { IonApp } from '@ionic/core/components/ion-app'
    import { IonButton } from '@ionic/core/components/ion-button'
    
    onMount(async () => {        
        if (!browser) return        
        
        initialize()

        const tryDefine = (tag: string, impl: CustomElementConstructor) => {
            try {
                customElements.define(tag, impl);
            } catch (error) {}
        }

        tryDefine("ion-app", IonApp)
        // tryDefine("ion-router-outlet", IonRouterOutlet)
        tryDefine("ion-button", IonButton)
    })
</script>

<ion-app>
    <slot />
</ion-app>
