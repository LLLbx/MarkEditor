import {defineProps,FunctionalComponent, render} from 'vue'
type Props = {
  name:string,
  age:number
}

const Index:FunctionalComponent<Props> = (props: Props) => {
  console.log(props);

  return(
    <button>{props.name}</button>
  )
}

export default Index