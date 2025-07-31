<script setup></script>
<template>
    <aside class="sidebar">
        <ul class="menu">
            <li class="menu-item"><a href="#">Dashboard</a></li>
            <li class="menu-item active"><a href="/inbound">Inbounds</a></li>
            <li class="menu-item"><a href="#">Outbounds</a></li>
            <li class="menu-item"><a href="#">Reports</a></li>
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
