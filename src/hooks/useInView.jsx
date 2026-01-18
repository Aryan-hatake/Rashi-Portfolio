import React from 'react'
import { useEffect, useRef , useState } from 'react'

const useInView = () => {
  
    const ref = useRef(null);
    const [visible, setVisible] = useState(false)
    
    useEffect(()=>{
       const observer = new IntersectionObserver(([entry])=>{
          if(entry.isIntersecting){
            setVisible(true);
            observer.disconnect();
          }
       })
       
       if(ref.current) observer.observe(ref.current);
       return () => observer.disconnect();


    },[]);

    return [ref,visible];
    
}

export default useInView
