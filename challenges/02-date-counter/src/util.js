const weekEnglishNames = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
const monthEnglishNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];


export function giveTimeString(count){
     const date = new Date()
     date.setDate(date.getDate() + count)
     const dateString = ` ${weekEnglishNames[date.getDay()]} ${monthEnglishNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
     
     if(count === 0){
        return `Today is ${dateString}`
     }else if(count > 0){
        return `${Math.abs(count)} days from today is  ${dateString}`
     }else{
        return `${Math.abs(count)} ago was  ${dateString}`
     }
}