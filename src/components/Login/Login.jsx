import loginsidebar from "../../assets/images/loginsidebar.jpg"
import Button from "../Button"
import Input from "../Input"


export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen md:h-screen sm:h-auto bg-[#5c9dd2] ">
      
        <div className="flex w-[65vw] flex-wrap " style={{boxshadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            {/* login image section */}
             <div className="h-[70vh] md:w-1/2 sm:w-1/2 rounded-[5px] overflow-hidden relative">
               <div className="h-full w-full bg-cover " style={{backgroundImage:`url(${loginsidebar})`,}}>
                <h2 className="text-stone-200">
                  LET'S EXPLORE                </h2>
               </div>
                {/* <img src={loginsidebar} 
                alt="carosilimage"
                className="md:h-full object-cover" /> */}
            </div>


            {/* login form section */}
            <div className="h-[70vh] md:w-1/2 sm:w-1/2 bg-gradient-to-tl from-[#1878CE] flex flex-col items-center rounded-[5px] ">
              <div 
              className="lg:my-14 w-[70%] md:my-7 "
              >
              <h2 className="my-5 font-bold text-center text-stone-200 
              lg:text-xl text-sm
              "
              >Sign in to the site</h2>
              <div className="flex flex-col gap-5 ">
              <Input type="text" placeholder="Email Address" className={""} />
              <Input type="password" placeholder="Password" className={""}/>
              </div>
              <div className="flex flex-col mt-10 md:mt-5 ">
              <Button value="LOGIN" className={"text-md border-2 rounded-2xl font-bold bg-stone-100 hover:bg-stone-200"}/>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}
