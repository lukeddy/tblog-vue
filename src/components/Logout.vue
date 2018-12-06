<template>

</template>

<script>
    export default {
        name:"Logout",
        created() {
            this.$store.dispatch('logout')
                .then(response => {
                    this.$router.push({ path: '/login' })
                }).catch(error => {
                    this.$router.push({ path: '/login' })
                })
        }
    }
</script>

