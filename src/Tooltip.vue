<script>
// TODO: 确定是否写死触发方式
import Popper from 'popper.js'
import {prefixBem} from './bem.js'
export default {
    name: 'tooltip',
    prefix: '',
    props: {
        placement: {
            type: String,
            default: 'bottom'
        },
        delay: {
            type: Number,
            default:  200
        },
        content: {
            type: String,
            default: ''
        },
        manual: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: false,
            timeoutId: ''
        }
    },
    render(h) {
        return <span class={[...this.cn()]} onMouseenter={this.manual?this.fn:this.show} onMouseleave={this.manual?this.fn:this.hide}>
            { this.$slots.default }
            <transition name="fade">
                <div class={[...this.cn('content')]} ref="content" v-show={!this.disabled&&(this.manual?this.value:this.isShow)}>
                    { this.$slots.content || this.content }
                    <span class={[...this.cn('arrow')]} ref="arrow"></span>
                </div>
            </transition>

        </span>
    },
    mounted() {
        this.popper = new Popper(this.$el, this.$refs.content, {
            placement: this.placement,
            modifiers: {arrow: {
                element: this.$refs.arrow
            }}
        })
    },
    methods: {
        cn(module, state) {
            return prefixBem({
                prefix: this.$options.prefix,
                block: this.$options.name,
                module: module,
                state: state
            })
        },
        fn(){},
        show() {
            this.isShow = true;
            this.popper.update();
            clearTimeout(this.timeoutId);
        },
        hide() {
            this.timeoutId = setTimeout(()=>{
                this.isShow = false;
            },this.delay)
        }
    }
}
</script>
<style media="screen" lang="less">
    [x-placement^=left] {
        margin-right: 10px;
        .tooltip__arrow {
            right: -5px;
            border-right-width: 0;
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }
    [x-placement^=right] {
        margin-left: 10px;
        .tooltip__arrow {
            left: -5px;
            border-left-width: 0;
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }
    [x-placement^=top] {
        margin-bottom: 10px;
        .tooltip__arrow {
            bottom: -5px;
            border-bottom-width: 0;
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }
    [x-placement^=bottom] {
        margin-top: 10px;
        .tooltip__arrow {
            top: -5px;
            border-top-width: 0;
            border-left-color: transparent;
            border-right-color: transparent;
        }
    }
    .tooltip {
        &__content{
            background: #ccc;
            padding: 10px;
        }

        &__arrow {
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-color: #ccc;
            border-style: solid;
            border-width: 5px;
        }
    }
</style>
