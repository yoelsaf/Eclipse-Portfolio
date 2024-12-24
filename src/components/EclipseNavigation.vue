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
        name: 'Resume',
        link: '/resume',
        isActive: false
    },
    {
        name: 'Resume-N',
        link: '/resume-n',
        isActive: false
    },
    {
        name: 'Resume-M',
        link: '/resume-m',
        isActive: false
    },
        {
        name: 'Resume-A',
        link: '/resume-a',
        isActive: false
    },
    {
        name: 'Portfolio',
        link: '/portfolio',
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