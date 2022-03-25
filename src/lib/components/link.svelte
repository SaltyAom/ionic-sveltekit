<script lang="ts">
    export let href: string    

    const navigate = () => {
        // goto(href)
    }
</script>

<ion-router-link {href}>
    <slot />
</ion-router-link>
