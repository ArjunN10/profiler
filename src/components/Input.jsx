
export default function Input({type,placeholder,className}) {
  return (
    <>
        <input 
         type={type} 
         placeholder={placeholder} 
         className={`py-1 px-3  rounded-2xl outline-none bg-transparent border-2
          border-stone-200 text-stone-300 placeholder:text-stone-200 
         ${className}`} 
         />
    </>
  )
}
