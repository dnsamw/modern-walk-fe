type Props = {
    text:string;
    bgColor?:string;
    txtColor?:string;
}

function Button({text, bgColor="#000", txtColor="#fff"}: Props) {
  return (
    <button className="px-10 py-3 text-2xl font-semibold rounded-2xl" style={{backgroundColor:bgColor,color:txtColor}}>
        {text}
    </button>
  )
}

export default Button