function messageByPercentHit(percent) {
    console.log('variable', percent)
    switch (true) {
        case percent < 25:
            return 'Study with focus and dedication to reach the top 😕';    
        case percent < 50:
            return 'It still needs improvement, but soon you get there 🙂';     
        case percent < 75:
            return 'Okay, a little more to rock 😉';   
        case percent < 99:
            return 'Sent too well!!! 😁';     
        case percent <= 100:
            return 'Perfect, you rocked. 🥳';    
        default:
            return ''
    }
  }
  
  export default messageByPercentHit;
  