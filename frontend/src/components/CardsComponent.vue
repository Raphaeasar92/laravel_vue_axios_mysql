<template>
    <div class="my_card">
        <div cllass="content top">
            <h3>{{ type }}</h3>
            <p class="percentage">
                <i class="fa fa-arrow-up"></i> {{ percentage }}
            </p>
        </div>

        <div class="content footer">
            <i :class="['fa ico', icon]"></i>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
    props: {
        type: String,
        percentage: String,
        icon: String,
        qtd: Number,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';


.my_card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $purple;
    padding: 15px;
    border-radius: 7px;
    margin-left: 15px;
    color: #fff;


    .content {
        display: flex;
        justify-content: space-between;
    }

    .top {

        .percentage {
            color: $green;
        }

    }

    .footer {

        .ico {
            font-size: 35px;
        }

        .qtd {

            font-size: 30px;
            margin: 0;
        }
    }
}
</style>