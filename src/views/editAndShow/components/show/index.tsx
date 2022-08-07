import { defineComponent, ref } from "vue";

export default defineComponent({
    // props: {
    //     color: {
    //         type: String,
    //         required: true
    //     }
    // },
    emits:['onChange','onCli'],
    setup(props, ctx) {
        return () => (
            <div></div>
        )
    },
})