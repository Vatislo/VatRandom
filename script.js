const body = document.body

    function getCustomDate() {

        let month = new Date().getMonth() + 1

        if (month < 9) {
            month += 12
        }

        month -= 8

        return {
            month
        }
    }
    
    const customDate = getCustomDate()
    console.log(`Текущая мясяц от сентября: ${customDate.month}`)

let bodyBackImg

if(customDate.month === 1)  {
    bodyBackImg = "autumnSeptember"  
} else if(customDate.month === 2)  {
    bodyBackImg = "autumnOctober"  
} else if(customDate.month === 3)  {
    bodyBackImg = "autumnNovember"  
} else if(customDate.month === 4)  {
    bodyBackImg = "winterDecember"  
} else if(customDate.month === 5)  {
    bodyBackImg = "winterJanuary"  
} else if(customDate.month === 6)  {
    bodyBackImg = "winterFebruary"  
} else if(customDate.month === 7)  {
    bodyBackImg = "springMarch"  
} else if(customDate.month === 8)  {
    bodyBackImg = "springApril" 
} else if(customDate.month === 9)  {
    bodyBackImg = "springMay"  
} else if(customDate.month > 9)  {
    bodyBackImg = "summerWTF"  
}

body.style.backgroundImage = `url('./img/${bodyBackImg}.jpg')`;ы




// const logicalLaws = [
//     "Любое утверждение равно себе. То есть, если утверждение истинно, то оно всегда будет истинным, и если оно ложно, то оно всегда будет ложным; A ↔ A",
//     "Утверждение и его отрицание не могут быть истинными одновременно. Если утверждение истинно, то его отрицание ложно, и наоборот; ¬ ( A ∧ ¬ A )",
//     "Любое утверждение либо истинно, либо ложно. Нет промежуточного состояния между истинностью и ложностью; A ∨ ¬ A",
//     "Каждое истинное утверждение имеет достаточную причину для своей истинности. Другими словами, если что-то истинно, то должно быть объяснение, почему это так"
// ]
// logicalLawsRandom = Math.floor(Math.random() * logicalLaws.length);
// // console.log(logicalLawsRandom + 1)
// console.log(logicalLaws[logicalLawsRandom])



