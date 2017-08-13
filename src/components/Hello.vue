<template>
    <div>
        <input type="text" name="" v-model="txt" v-focus="txt">
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            txt: ''
        }
    },
    mounted() {
        console.log(this.greeting);

        this.showMyName('luozhihao');

        this.$loading.show();
    },
    methods: {

    },
}
</script>

<style scoped>

</style>
