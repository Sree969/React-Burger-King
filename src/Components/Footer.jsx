import React from "react";
export default class Footer extends React.Component{
    render(){
        return(
            
            <footer>
                <ul type="none">
                    <li><i class="fa-solid null  fa-house"></i><p class="pp">Home</p></li>
                    <li><i class="fa-solid null  fa-bars"></i><p class="pp">Menu</p></li>
                    <li><i class="fa-solid null fa-tag"></i><p class="pp">Offers</p></li>
                    <li><i class="fa-solid null  fa-crown"></i><p class="pp">Rewards</p></li>
                </ul>
            </footer>
            
        )
    }
}