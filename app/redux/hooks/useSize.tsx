import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '../../redux/store';
import { updateValue } from '../../redux/slice/sizeManager';



function useSize():any {
    const [isClick,setIsClick] = useState <boolean>(false)
    const [width,setWidth] = useState<number>(0)
    const size:number = useSelector((state:RootState) =>state.size.value)
    const dispatch = useDispatch()


    useEffect(() => {

        function handleResize() {
          setWidth(size)
          if(size > 800 || size < 500){
            setIsClick(false)
          } 
        }

        dispatch(updateValue(window.innerWidth))
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      });
      return [size,isClick ,setIsClick]
 
}

export default useSize
