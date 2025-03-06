let btn1=document.getElementById("left-btn");
        let btn2=document.getElementById("right-btn");
        let copydiv=document.getElementById("input");
        let rgb1="#abc324";
        let rgb2="#cda576"

        const getColor=()=>{
            let hexValues="0123456789abcdef";
            let rgb="#"
            for(let i=0;i<6;i++){
                rgb+=hexValues[Math.floor(Math.random()*16)];
            }
            return rgb;
        }

        const handleBtn1=()=>{
            rgb1=getColor();
            btn1.innerText=rgb1;
            document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
            copydiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
        }
        const handleBtn2=()=>{
         rgb2=getColor();
         btn2.innerText=rgb2;
         document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
         copydiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
        }

        btn1.addEventListener('click',handleBtn1);
        btn2.addEventListener('click',handleBtn2);
        copydiv.addEventListener("click",()=>{
            navigator.clipboard.writeText(copydiv.innerText);
            if(copydiv.innerText != ""){
                alert("Color code copied successfully");
            }
        })