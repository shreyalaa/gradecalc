const web = document.getElementById("web")
const ds = document.getElementById("ds")
const cn = document.getElementById("cn")
const dbms = document.getElementById("dbms")
const button = document.getElementById("btn")
const showScore = document.getElementById("show_score")

const getTheSum = () =>{
    console.log(+web.value+ +ds.value+ +cn.value+ +dbms.value)
    return +web.value+ +ds.value+ +cn.value+ +dbms.value
}

button.addEventListener("click" , ()=>{
    const sum = getTheSum()
    const percentage = (sum / 400)*100
    let grade = ""
    if(percentage > 80){
        grade = "A"
    }
    else if(percentage <80 && percentage >60){
        grade = "B"
    }
    showScore.innerHTML = `
    <h3>your percentage is ${percentage}
    and your grade is ${grade}
    </h3>`
    showScore.classList.remove("show_score")
})