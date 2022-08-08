import {
  defineProps,
  FunctionalComponent,
  renderSlot,
  defineComponent,
} from "vue";
import type { SetupContext } from "vue";
type Props = {
  name: string;
  age: number;
};

// const Index:FunctionalComponent<Props> = (props: Props,{slots}:SetupContext) => {
//   console.log(props);

//   return(
//     <button>
//       {{
//         renderSlot(slots)
//       }}
//     </button>
//   )
// }

export default defineComponent({
  setup(props: Readonly<any>, { slots }: SetupContext) {
    return () => (
      <div>
        <button>{renderSlot(slots, "default")}</button>
        {slots?.two? <button>{slots.two?.()}</button> : null}
      </div>
    );
  },
});
