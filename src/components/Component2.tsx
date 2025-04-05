import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP); 

const Component2 = () => {
    const duration = 2;
    const delay = 0.4;
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const img = useRef(null);

    useGSAP(() => {
        gsap.timeline().from(box1.current, {
            duration ,
            scale : 0,
            transformOrigin : "bottom left",
            ease : "power4.out",
            delay 
        }).from(".comp2 .box1 .b1", {
            duration ,
            opacity : 0,
            y : -40,
            transformOrigin : "top",
            ease : "power4.out",
        }, "sath").from(".comp2 .box1 .b2", {
            duration ,
            opacity : 0,
            y : 40,
            transformOrigin : "top",
            ease : "power4.out",
        }, "sath")

        gsap.timeline().from(box2.current, {
            duration ,
            scale : 0,
            transformOrigin : "center",
            ease : "power4.out",
            delay 
        }).to(img.current, {
            duration ,
            scale : 1.2,
            y : -70,
            transformOrigin : "center",
            ease : "power4.out",
        })
        
        gsap.timeline().from(box3.current, {
            duration ,
            scale : 0,
            transformOrigin : "bottom right",
            ease : "power4.out",
            delay 
        }).from(".comp2 .box3 .b1", {
            duration ,
            opacity : 0,
            y : 200,
            transformOrigin : "top",
            ease : "power4.out",
        })
    })
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 h-full comp2 w-full">
        <div ref={box1} className="col-span-1 box1 overflow-hidden bg-neutral-800 rounded-xl bg-cover flex flex-col justify-center items-center">
            <div className="b1 uppercase text-[3rem] md:text-[6rem] leading-[6rem] h-fit font-bold text-gray-400">
                AA.
            </div>
            <div className="b2 text-[2rem] pr-4 font-semibold text-gray-500">
                hello
            </div>
        </div>
        <div ref={box2} className="col-span-1 overflow-hidden bg-neutral-400 rounded-xl">
            <img 
                ref={img}
                className='w-[70vw] h-[40vh] object-cover'
                src='https://images.unsplash.com/photo-1690306734146-1a985c655e90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            />
        </div>
        <div ref={box3} className="col-span-1 max-md:hidden box3 relative overflow-hidden bg-neutral-500 rounded-xl">
            <img 
                className="w-[20vw] h-[60vh] object-cover -top-36 right-0 absolute b1"
                style={{ filter: 'drop-shadow(0 0 0 white) drop-shadow(-20px 10px 10px rgb(63 63 70))' }}
                src="/img2.png"
            />
        </div>
    </div>
  )
}

export default Component2