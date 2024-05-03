<template>
    <DashboardComponent>
        <template #slot-pages>
            <header class="title_pages">
                <p>Produtos</p>
            </header>

        </template>
    </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
    name: 'ProductsComponent',

    components: {
        DashboardComponent,
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />
