<template>
    <div>
        <header>
            <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <!-- filter -->

        <ul class="filter-list">
            <li v-for="category in categories" :key="category" class="filter-item"
                :class="{ active: selectedCategory === category }">
                <button @click="(e) => filterItems(e, category)">{{ category }}</button>
            </li>
        </ul>

        <!-- mobile filter -->

        <div class="filter-select-box">
            <button @click="() => isSelectBoxOpen = !isSelectBoxOpen" :class="isSelectBoxOpen ? 'active' : ''"
                class="filter-select" data-select>
                <div class="select-value" data-selecct-value>
                    <p>{{ selectedCategory }}</p>
                </div>

                <div class="select-icon">
                    <ion-icon name="chevron-down"></ion-icon>
                </div>
            </button>

            <ul class="select-list">
                <li v-for="category in categories" :key="category" class="select-item"
                    :class="{ active: selectedCategory === category }">
                    <button @click="(e) => filterItems(e, category)">{{ category }}</button>
                </li>
            </ul>
        </div>


        <!-- project list -->

        <ul class="project-list">
            <EclipseProjects v-for="item in filterdItems" :key="item.id" :name="item.name" :category="item.category"
                :image="item.img" :link="item.path" />
        </ul>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import EclipseProjects from '../components/EclipseProjects.vue';


const items = [
    {
        id: 1,
        name: "Kabbee +",
        category: "App Development",
        path: "https://play.google.com/store/apps/details?id=org.kabbee.kabbeeplus",
        img: "/src/assets/images/img4.png",
    },
    {

        id: 2,
        name: "Quiz App",
        category: "App Development",
        path: "https://play.google.com/store/apps/details?id=org.kabbee.kabbeeplus",
        img: "/src/assets/images/img6.png",
    },
    {
        id: 3,
        name: "Quiz Website",
        category: "Web Development",
        path: "https://ela-quiz-app.netlify.app/",
        img: "/src/assets/images/img1.png",
    },
    {
        id: 4,
        name: "Recipe App",
        category: "Web Design",
        path: "https://miki-recipe.netlify.app",
        img: "/src/assets/images/img2.png",
    },
    {
        id: 5,
        name: "Bible Website",
        category: "Web Development",
        path: "https://vue-bible.vercel.app/",
        img: "/src/assets/images/img5.png",
    },
    {
        id: 6,
        name: "E-commerce Website",
        category: "Web Development",
        path: "https://miki-recipe.netlify.app",
        img: "/src/assets/images/img3.png",
    },
    {
        id: 7,
        name: "Recipe App",
        category: "Web Development",
        path: "https://miki-recipe.netlify.app",
        img: "/src/assets/images/img2.png",
    },
    {
        id: 8,
        name: "Restaurant Reservation",
        category: "UI/UX Design",
        path: "https://miki-recipe.netlify.app",
        img: "/src/assets/images/figma.png",
    },
    {

        id: 9,
        name: "Shopping App",
        category: "App Development",
        path: "https://ecommerce-app-scratch.web.app/",
        img: "/src/assets/images/ecommerce.png",
    },
    {

        id: 10,
        name: "Africa Earth Keepers",
        category: "Web Development",
        path: "https://africaearthkeepers.com/",
        img: "/src/assets/images/aek.png",
    },

];

const categories = ["All", "UI/UX Design", "Web Development", "App Development",]

const selectedCategory = ref('All')
const filterdItems = ref(items)
const isSelectBoxOpen = ref(false)


const filterItems = (e, category) => {
    selectedCategory.value = category
    isSelectBoxOpen.value = !isSelectBoxOpen.value

    e.target.parentElement.classList.remove('active')
    categories.map((i) => {
        if (i === e.target.innerText) {
            // console.log('check');
            // e.target.parentElement.classList.add('active')
            console.log(e.target.parentElement);
        }
        else {
            // console.log('nope');
            e.target.parentElement.classList.remove('active')
        }
    })


    if (selectedCategory.value === 'All') {
        filterdItems.value = items;


    }
    else if (selectedCategory.value) {
        filterdItems.value = items.filter(
            (item) => item.category === selectedCategory.value
        );

        console.log('categoryValue', selectedCategory.value);

    }
    else {
        filterdItems.value = items;
    }
}


</script>