const g = -9.81; 

// Vo = Initial velocity
// t = Instant
// Xo = Initial Position in x axis; 
// Yo = Initial Position in y axis; 
const Rt = (Vo, angle, t, Xo, Yo) => {
    let theta = (angle/180)*Math.PI; 
    let Vx = Vo*Math.cos(theta); 
    let Vy = Vo*Math.sin(theta); 
    let x = Vx*t + Xo; 
    let y = Vy*t + (g*(t**2))/2 + Yo;

    x = x>100 ? 100:x;
    y = y>100 ? 100:y;  

    
    x = x<0 ? 0:x;
    return {x,y}; 
}





export default function framesParticle (Particle, Vo, Angle, Time, Xo, Yo){
    let frames = []; 

    for(let i = 0; i < Time; i++){
        let {x,y} = Rt(Vo,Angle,i, Xo, Yo);
        let pos = {bottom: `${y}vh `, left: `${x}vw`}; 
        frames.push(pos); 
    }
    const animation = Particle.animate(
        //keyframes
        frames
       ,{
        //options, ease ta piola o ease-out es mas realista XD
        easing: "ease-out", 
        iterations: 1,
        duration: 2000
    })
    return animation.finished; 
}
