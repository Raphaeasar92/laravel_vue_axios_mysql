<template>
    <DashboardComponent>
        <template #slot-pages>
            <header class="title_pages">
                <p> Início</p>
            </header>

            <div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :percentage="'8%'" :icon="'fa-users'" :qtd="'7590'" />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :percentage="'12%'" :icon="'fa-box'" :qtd="'350'" />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Serviços'" :percentage="'3%'" :icon="'fa-store'" :qtd="'270'" />
                    </div>

                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Relatórios'" :percentage="'28%'" :icon="'fa-chart-bar'" :qtd="'30'" />
                    </div>

                </div>

                <div class="mt-5">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <ListsComponent :data="users" description="Clientes"
                                :columns="['Nome', 'E-mail', 'Telefone']" />
                        </div>

                        <div class="col-12 col-md-6">
                            <ListsComponent :data="users" description="Produtos"
                                :columns="['Nome', 'E-mail', 'Telefone']" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </DashboardComponent>
</template>

<script>
/* eslint-disable */
import DashboardComponent from '../Dashboard/DashboardComponent';
import CardsComponent from '../../components/CardsComponent';
import ListsComponent from '../../components/ListsComponent';
const axios = require('axios');


export default {
    name: 'HomeComponent',
    data() {
        return {
            users: []
        }
    },

    mounted() {
        this.getUsers();
    },

    methods: {
        async getUsers() {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if (response.status = 200) {
                this.users = response.data;
            } else {
                console.error("Ocorreu um erro na API.");
            }

            response = await axios.get('http://localhost:8000/api/');
            if (response.status = 200) {
                console.log(response.data);
            } else {
                console.error("Ocorreu um erro na API.");
            }
        }

    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent,
    }
}

</script>

<style lang="scss" src="./style.scss" scoped />
