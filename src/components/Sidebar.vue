<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeItem = ref('dashboard');
const isActive = path => route.path.startsWith(path);
</script>
<template>
    <aside class="sidebar">
        <ul class="menu">
            <li :class="['menu-item', isActive('/dashboard') && 'active']">
                <router-link to="/dashboard">Dashboard</router-link>
            </li>
            <li :class="['menu-item', isActive('/inbound') && 'active']">
                <router-link to="/inbound">Inbounds</router-link>
            </li>
            <li :class="['menu-item', isActive('outbound') && 'active']">
                <router-link to="#">Outbounds</router-link>
            </li>
            <li :class="['menu-item', isActive('/reports') && 'active']">
                <router-link to="#">Reports</router-link>
            </li>
        </ul>
    </aside>
</template>
<style scoped>
.menu-item {
    background-color: #01274d;
    color: antiquewhite;
    box-sizing: border-box;
    padding: 20px 40px;
    cursor: pointer;
}
.menu-item:hover {
    font-weight: bold;
    color: antiquewhite;
    background-color: #124f71;
}
.menu-item.active {
    background-color: #124f71;
    font-weight: bold;
}
.menu {
    height: 100vh;
}
</style>
