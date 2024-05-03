<template>
    <div class="main">
        <div class="sidebar">
            <SideBarComponent />
        </div>

        <div class="content-right">

            <div class="navbar">
                <NavBarComponent />
            </div>

            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import SideBarComponent from './components/SideBarComponent.vue'; // Adicionei a extensão .vue
import NavBarComponent from './components/NavBarComponent.vue'; // Adicionei a extensão .vue

export default {
    name: 'DashboardComponent',
    components: {
        SideBarComponent,
        NavBarComponent
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />