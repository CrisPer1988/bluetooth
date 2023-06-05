import React, { useState } from 'react'

 const Bluetooth = () => {
    const [deviceConnect, setDeviceConnect] = useState()
    const [level, setLevel] = useState()

    const connect = () => {
      navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ["battery_service"]
      })
        .then(device => {
          setDeviceConnect(device)
          return device.gatt.connect();
          
        })
        // .then(server => {
         
        //   return server.getPrimaryService('battery_service');
        // })
        // .then(service => {
        //   return service.getCharacteristic('battery_level');
        // })
        // .then(characteristic => {
        //   return characteristic.readValue();
        // })
        // .then(value => {
        //   console.log(`Battery percentage is ${value.getUint8(0)}`);
        // })
        .catch(error => {
          console.error(error);
        });
    };
    
         console.log(deviceConnect);
        console.log(level);
   
  return (
    <div>
        <button onClick={connect}>Connect</button>
       
        {
            deviceConnect ? <div>
              <p>Name: {deviceConnect.name} <br /> ID: {deviceConnect.id}</p> 
              <h2>connection: true</h2>             
              </div>
              : ""
        }
        
    </div>
  )
}

export default Bluetooth
