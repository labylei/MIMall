<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/Order-Header.vue';
import NavFooter from '../components/NavFooter.vue';
export default {
    name:'car',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>