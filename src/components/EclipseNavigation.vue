<template>

    <nav class="navbar">
        <ul class="navbar-list">

            <EclipseNav v-for="(item, index) in navItems" :key="index" :name="item.name" :link="item.link"
                :isActive="item.isActive" />

        </ul>
    </nav>

</template>

<script setup>
import EclipseNav from './EclipseNavItem.vue';

const navItems = [
    {
        name: 'AboutUs',
        link: '/',
        isActive: true
    },
    {
        name: 'Services',
        link: '/services',
        isActive: true
    },
    {
        name: 'Projects',
        link: '/projects',
        isActive: false
    },
    {
        name: 'Contact',
        link: '/contact',
        isActive: false
    },
]


</script>


<style></style>