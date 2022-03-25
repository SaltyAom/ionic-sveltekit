<script lang="ts">
    import 'virtual:windi.css'
    import '$lib/styles/global.sass'

    import { onMount } from 'svelte'

    import { initialize } from "@ionic/core/components";
    import { IonApp } from "@ionic/core/components/ion-app";
    import { IonRouterOutlet } from "@ionic/core/components/ion-router-outlet";
    import { IonButton } from "@ionic/core/components/ion-button";

    onMount(() => {
        initialize();
        
        const tryDefine = (tag: string, impl: CustomElementConstructor) => {
            try {
                customElements.define(tag, impl);
            } catch (error) {}
        }

        tryDefine("ion-app", IonApp)
        tryDefine("ion-router-outlet", IonRouterOutlet)
        tryDefine("ion-button", IonButton)
    })
</script>

<ion-app>
    <slot />
</ion-app>
