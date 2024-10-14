import Herostyle from "./herosection.module.css"

const Herosection = () => {
  return (
    <div className={Herostyle.container}>
        <h1 className={Herostyle.heading}>THIS IS OUR HEROSECTION COMPONENT</h1>
        <h2 className={Herostyle.headings}>DAILY GOODS</h2>
        <h3>WE HAVE ALL IMPORTANT ITEMS FOR DAILY USE,BUY THESE ITEMS IN REESONABLE PRICE BY OUR WEBSITE .ALL 
            DAILY ROUTINE USEFUL ITEMS IS PRESENT IN OUR WEBSITE.<b>SAVE YOUR TIME,SAVE YOUR ENERGY</b>
            FIRST 50 CUSTOMERS GET 1 PRODUCT FREE. </h3>
    <ul className={Herostyle.rabia}>
        <li><b>CLOTHES</b></li>
        <li><b>PLASTIC BAGS</b></li>
        <li><b>TOYS</b></li>
        <li><b>GROCERY ITEMS</b></li>
        <li><b>APPLIANCES</b></li>
        <li><b>SHOES</b></li>
    </ul>
    </div>
  )
}

export default Herosection