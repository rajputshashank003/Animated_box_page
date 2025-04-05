import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); 

const Component1 = () => {
    const duration = 2;
    const delay = 0.4;
    useGSAP(() => {
        gsap.from(".comp1 .box1", {
            duration ,
            scale : 0,
            transformOrigin : "bottom left",
            ease : "power4.out",
            delay 
        })
        gsap.timeline().from(".comp1 .box2", {
            duration ,
            scale : 0,
            transformOrigin : "top right",
            ease : "power4.out",
            delay 
        }).from(".comp1 .box2 .b1", {
            duration ,
            scale : 0,
            transformOrigin : "center",
            ease : "power4.out",
        },"sath")

        gsap.timeline().from(".comp1 .box3", {
            duration ,
            scaleX : 0,
            transformOrigin : "left",
            ease : "power4.out",
            delay 
        }).from(".comp1 .box3 .b2", {
            duration ,
            opacity : 0,
            translateX : 500,
            transformOrigin : "left",
            ease : "power4.out",
        }, "sath").from(".comp1 .box3 .b1", {
            duration ,
            scale : 0,
            transformOrigin : "center",
            ease : "power4.out",
        },"sath")
    })
    return (
        <div className="grid grid-cols-4 gap-4 comp1 overflow-hidden">
            <div className="col-span-1 overflow-hidden box1 bg-neutral-700 rounded-xl bg-cover">
                <img 
                    className='h-full w-full object-cover'
                    src='https://images.unsplash.com/photo-1591602671941-b5d9f9efde79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                />
            </div>
            <div className="col-span-1 box2 bg-neutral-400 rounded-xl flex justify-center items-center">
                <div className="h-[80%] w-4 bg-black b1 rounded-xl"></div>
            </div>
            <div className="col-span-2 box3 bg-neutral-500 rounded-xl flex flex-row items-center gap-10">
                <div className="text-[4rem] b1 font-bold font-sans tracking-[-5px] leading-[3rem] uppercase flex flex-col pl-8 justify-center ">
                    ORDER <br />
                    <span className='tracking-[5px]'>
                        now!
                    </span>
                </div>
                <img src='/img1.png'
                    style={{ filter: 'drop-shadow(0 0 0 white) drop-shadow(-20px 20px 15px rgb(63 63 70))' }}
                    className="h-full b2 w-[90%] rounded-xl">
                </img>
            </div>
        </div>
    )
}

export default Component1