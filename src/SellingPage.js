import React from 'react'
import Combined from "./Combined.css"
import Footer from './Footer'
import Navbar from './Navbar';

function SellingPage() {
    return (<div>
        <Navbar />
        <div id = "sellTextImage">
            <div id = "sellText">
            Want to share your belongings? 

            Post an add Now.....

            </div>
            <div id = "sellImage">
            <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Famazing-photography-photos&psig=AOvVaw1ZpGafvaaIWsUH1yYW6Wiw&ust=1626362581389000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCIiatvLu4vECFQAAAAAdAAAAABAD" alt = "sellHeadImage"></img>
            </div>

        </div>
        <div>
            <Footer />
        </div>
    </div>
    )
}

export default SellingPage
