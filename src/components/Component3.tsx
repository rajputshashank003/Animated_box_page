import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { useRef } from 'react';

gsap.registerPlugin(useGSAP); 

const Component3 = () => {
    const duration = 2;
    const delay = 0.4;
    useGSAP(() => {
        gsap.timeline().from(".comp3 .box1", {
            duration ,
            width : 0,
            transformOrigin : "left",
            ease : "power4.out",
            delay 
        });

        gsap.timeline().from(".comp3 .box2", {
            duration ,
            scaleX : 0,
            transformOrigin : "right",
            ease : "power4.out",
            delay 
        }).from(".comp3 .box2 .b1", {
            duration ,
            scale : 0,
            transformOrigin : "center",
            ease : "power4.out",
        })
    })
    return (
        <div className="overflow-hidden rounded-xl grid comp3 grid-cols-2 gap-4">
            <div className="col-span-1 box1 overflow-hidden bg-neutral-700 rounded-xl">
                <img 
                    className='w-[70vw] b1 h-[40vh] object-cover'
                    src="https://images.unsplash.com/photo-1699481752713-274a158e7fb8?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </div>
            <div className="col-span-1 right-0 box2 flex justify-center items-center bg-neutral-700 rounded-xl">
                <img 
                    style={{transformOrigin : "right"}}
                    className='h-[18vh] b1 w-[18vh] rounded-xl object-cover shadow-lg shadow-zinc-900'
                    src="https://images.unsplash.com/photo-1710135828494-57c83794d5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                />
            </div>
        </div>
    )
}

export default Component3