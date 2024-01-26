
function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let am_pm = "AM"

    if(hours>12){
        hours = hours -12
        am_pm = "PM"
    }

    else if(hours == 0){
        hours = 12
        am_pm = "AM"
    }


    hours = hours < 10?"0" + hours :hours
    minutes = minutes <10?"0" + minutes:minutes
    seconds = seconds < 10?"0" + seconds:seconds


    let finalTime = hours + ":" + minutes+ ":" +seconds + " " +am_pm

    document.getElementById("show-time").innerText = finalTime

}

setInterval(showTime,1000)







const quotesArray = [
  "I'm not a one in a million kind of person. I'm a once in a lifetime kind of badass.",
  "Fear is the cage; badass is the key.",
  "Don't be a woman that needs a man. Be a woman a man needs.",
  "I'm not here to be average, I'm here to be awesome.",
  "Don't mistake my kindness for weakness.",
  "Be the kind of person your dog thinks you are.",
  "I don't need luck, I have badassery.",
  "Be a voice, not an echo.",
  "Life is tough, but so are you.",
  "I am not a product of my circumstances. I am a product of my decisions.",
  "If you want something you never had, you have to do something you've never done.",
  "Your vibe attracts your tribe.",
  "If you're too comfortable, it's time to move on. Terrify yourself.",
  "Do epic shit.",
  "She turned her can'ts into cans and her dreams into plans.",
  "I'd rather be hated for who I am than loved for who I am not.",
  "It's not the load that breaks you; it's the way you carry it.",
  "Success is not for the lazy.",
  "Do it with passion or not at all.",
  "Hustle until your haters ask if you're hiring.",
  "Dream big, work hard, stay focused.",
  "If it doesn't challenge you, it won't change you.",
  "Be so good they can't ignore you.",
  "Do what you love, love what you do.",
  "Life is short. Do stuff that matters.",
  "Be a warrior, not a worrier.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your only limit is you.",
  "Be the energy you want to attract.",
  "Be the girl who decided to go for it.",
  "Be yourself; everyone else is already taken.",
  "Make it happen. Shock everyone.",
  "Confidence level: Selfie with no filter.",
  "When nothing goes right, go left.",
  "The only way to do great work is to love what you do.",
  "Champions train; losers complain.",
  "Be a voice, not an echo.",
  "You are what you do, not what you say you'll do.",
  "I didn't come this far to only come this far.",
  "Work until your idols become your rivals.",
  "You don't have to be rich to sparkle.",
  "Sometimes you gotta be a beauty and a beast.",
  "Sweat, smile, and repeat.",
  "Make today so awesome that yesterday gets jealous.",
  "Live more, worry less.",
  "Stay humble, hustle hard.",
  "Stars can't shine without darkness.",
  "Be a diamond. Rare, and hard to find.",
  "Be a warrior, not a worrier.",
  "The best revenge is massive success.",
  "F.E.A.R. has two meanings: Forget Everything And Run or Face Everything And Rise.",
  "Be the kind of person your dog thinks you are.",
  "The only person you should try to be better than is the person you were yesterday.",
  "Your attitude determines your direction.",
  "It's not about the size of the dog in the fight, it's about the size of the fight in the dog.",
  "Work hard in silence, let success make the noise.",
  "Don't be the same, be better.",
  "A lion doesn't lose sleep over the opinion of sheep.",
  "I'm not a player; I'm the game.",
  "Wake up with determination, go to bed with satisfaction.",
  "You can't spell awesome without ME.",
  "Believe you can and you're halfway there.",
  "Your vibe attracts your tribe.",
  "If you want to fly, you have to give up the things that weigh you down.",
  "Be stubborn about your goals and flexible about your methods.",
  "Stay positive, work hard, make it happen.",
  "Do something today that your future self will thank you for.",
  "The comeback is always stronger than the setback.",
  "If you're going through hell, keep going.",
  "Be a flamingo in a flock of pigeons.",
  "Keep your head high, keep your chin up, and most importantly, keep smiling because life's a beautiful thing and there's so much to smile about.",
  "You're never too old to set another goal or to dream a new dream.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Your time is limited, don't waste it living someone else's life.",
  "Your life does not get better by chance, it gets better by change.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Don't count the days, make the days count.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Don't stop when you're tired. Stop when you're done.",
  "The best way to predict the future is to create it.",
  "Sometimes later becomes never. Do it now.",
  "Push yourself because no one else is going to do it for you.",
  "The only person you are destined to become is the person you decide to be.",
  "You are never too old to set another goal or to dream a new dream.",
  "Success usually comes to those who are too busy to be looking for it.",
  "The only way to do great work is to love what you do.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "It's not whether you get knocked down, it's whether you get up.",
  "If you want to achieve greatness stop asking for permission.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Believe you can and you're halfway there.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "The only place where success comes before work is in the dictionary.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "You miss 100% of the shots you don't take.",
  "Don't be afraid to give up the good to go for the great.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
]



const showQuote = () =>{
    let randomNumber = Math.floor((Math.random())*quotesArray.length)
    let randomQuotes = quotesArray[randomNumber]
    document.getElementById("quote").innerText = randomQuotes
}

setInterval(showQuote,50000)
