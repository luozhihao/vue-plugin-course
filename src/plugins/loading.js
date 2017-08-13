import LoadingComponent from '../components/loading.vue'

let $vm

export default {
    install(Vue, options) {
        if (!$vm) {
            const LoadingPlugin = Vue.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

        let loading = {
            show() {
                $vm.show = true;

                setTimeout(() => {
                    $vm.show = false;
                }, 2000);
            },
            hide() {
                $vm.show = false;
            }
        }

        if (!Vue.$loading) {
            Vue.$loading = loading;
        }

        Vue.mixin({
            created() {
                this.$loading = Vue.$loading;
            }
        });
    }
}
