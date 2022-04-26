import React from 'react'
import { useSelector } from 'react-redux'
import { PuffLoader } from 'react-spinners'


const style = {
    position: "fixed",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#817e8152",
    top: 0
}
const style2 = {
    position: "relative",
    // zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    // height: "100%",
    // backgroundColor: "#817e8152",
    // top: 10
}

const Loader = (props) => {
    const {size, pageLoader} = props;
    const isLoading = useSelector(state=>state.loadingReducer.loading);
    
    if (isLoading){
        return (
            <div style={pageLoader === true ? style : style2}>
                <PuffLoader
                    loading={isLoading}
                    color="blue"
                    size={size === 'sm' ? 50 : 100}
                />
            </div>
        )
    } else {
        return null
    }
}

export default Loader