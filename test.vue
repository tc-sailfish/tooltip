<template lang="html">
    <div>
        <br/><br/>
        <br/><br/><br/><br/>
        sdfsdf阿斯顿发顺丰
        <Tooltip content="abcdfd" manual ref="tt" :value="value">
            <button @click="value=!value" >{{'sss'}}</button>
        </Tooltip>
        <Tooltip content="abcdfd" placement="top">
            <button >{{'sss'}}</button>
        </Tooltip>
        <Tooltip content="abcdfd" placement="bottom">
            <button >{{'sss'}}</button>
        </Tooltip>
        <Tooltip content="abcdfd" placement="left">
            <button >{{'sss'}}</button>
        </Tooltip>
        <Tooltip content="abcdfd" placement="right">
            <button >{{'sss'}}</button>
        </Tooltip>
        <Tooltip content="abcdfd" placement="top" :delay="2000" >
            <button >{{'sss'}}</button>
        </Tooltip>

        <!-- <Tooltip content="abcdfd" placement="left" manual ref="tt">
            <button @click="$refs.tt.show()" >{{'sss'}}</button>
        </Tooltip> -->

        <br/><br/>
        <br/><br/>
        <br/><br/>

        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
        <p>sadfasdf</p>
    </div>
</template>

<script>
import Tooltip from './src/Tooltip.vue'
export default {
    data() {
        return {
            value: false
        }
    },
    components: {
        Tooltip
    }
}
</script>
