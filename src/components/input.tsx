import { defineComponent, ref } from "vue";
type Props = {
    color: {
        type: String,
        required: true
    }
}

export default defineComponent({
    props: {
        color: {
            type: String,
            required: true
        }
    },
    emits:['onChange','onCli'],
    setup(props, ctx) {
        console.log(props);
        const { slots, emit } = ctx;
        const inputVale = ref()
        return () => (
            <input type="text" value={inputVale.value} style={{ ...props }}
                onInput={event => inputVale.value = (event.currentTarget as HTMLInputElement).value}
                onChange={() => emit('onChange', inputVale.value)} />
        )
    },
})