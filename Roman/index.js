


var intToRoman = function(num) {
    if(num===0){
        return ''
    }
    let ref= {
        1:"I",5:"V",10:"X",50:"L",100:"C",500:"D",1000:"M",5000:"-M"
    }

    let n = num

    switch(true){
        case (n>=1 && n<5):
            if(n===4){
                return ref[1]+ref[5]

            }
            return ref[1] + intToRoman(n-1)
           
        case (n>=5 && n<10):
            if(n===9){
                return ref[1]+ref[10]

            }
             return ref[5]+intToRoman(n-5)
            
        case (n>=10 && n<50):
            if(n>=40){
                return ref[10]+ref[50] + intToRoman(n-40)

            }
           return ref[10] + intToRoman(n-10)
          
         
        case (n>=50 && n<100):
            if(n>=90){
                return ref[10]+ref[100] + intToRoman(n-90)

            }
            return ref[50] + intToRoman(n-50)
        
        case (n>=100 && n<500):
            if(n>=400){
                return ref[100]+ref[500] + intToRoman(n-400)

            }
            return ref[100] + intToRoman(n-100)
        case (n>=500 && n<1000):
            if(n>=900){
                return ref[100]+ref[1000] + intToRoman(n-900)

            }
                return ref[500] + intToRoman(n-500)
        case (n>=1000 && n<=3999):
         
            return ref[1000] + intToRoman(n-1000)  
        default:
            return "Enter number in range..."
    }

    
};




let ele = document.querySelector(".form-field")

document.querySelector(".inside").addEventListener("click",(e)=>{
    e.preventDefault()
  
    let res = intToRoman(ele.value)
    let ansDiv = document.querySelector(".ans");
    ansDiv.textContent =ele.value + " : " + res; 
    ansDiv.style.display = "block";
    ansDiv.style.backgroundColor = "lightblue"; 
    ansDiv.style.padding = "10px"; 
    ansDiv.style.borderRadius = "5px"; 
    ansDiv.style.fontsize =  "30px";
    ele.value = ''
    
})
console.log(ele)

