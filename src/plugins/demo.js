export default {
    install(Vue, options) {

        // 注册全局属性
        Vue.$myName = 'luozhihao';

        // 注册全局指令
        Vue.directive('focus', {
            bind: function() {},

            // 当绑定元素插入到 DOM 中。
            inserted: function(el, binding, vnode, oldVnode) {

                // 聚焦元素
                el.focus();

                console.log(el);
                console.log(binding);
                console.log(vnode);
                console.log(oldVnode);
            },

            update: function() {
                console.log(111)
            },
            componentUpdated: function() {},
            unbind: function() {}
        });

        // 注入组件(混合)
        Vue.mixin({
            mounted() {
                this.greeting = 'hello world';
            },
            methods: {
                greetingFn() {
                    console.log('greeting');
                }
            }
        });

        // 添加实例方法
        Vue.prototype.$myName = 'luozhihao';
        Vue.prototype.showMyName = value => {
            console.log(value);
        };
    },
}
