<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/Order-Header.vue';
import NavFooter from '../components/NavFooter.vue';
export default {
    name:'order',
    components:{ 
        OrderHeader,
        NavFooter
    }
}
</script>