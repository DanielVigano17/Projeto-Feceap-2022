let dias_calendar = document.querySelector('.dias')
let datas = document.querySelector('.datas')
let mes_calendar = document.querySelector('.mes')
let mes=0;
let dia_semana=0;
let alea=0
let alea2=0
const list= document.querySelectorAll('.list')
const btn_seguinte= document.querySelector('.m-posterior')
const menu_tarefa= document.querySelector('.tarefa-menu')
const body_calendar= document.querySelector('.body-calendar')
const btn_cancel= document.querySelector('.cancel')
const error_data= document.querySelector('.error-data')
const add_event= document.querySelector('.add-tarefa')
const remove_event = document.querySelector('.remove-tarefa')
const concluir_tarefa= document.querySelector('.concluir')
const btn_anterior= document.querySelector('.m-anterior')
const date= new Date('Janeiro 1, 2022 23:15:30')
const m_dias= [31,28,31,30,31,30,31,31,30,31,30,31]
const nome_mes=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']



altera_mes(0)
ad_datas(0,date.getDay())
btn_seguinte.addEventListener('click', function(){

    dias_calendar.innerText=''
    mes+=1
    mes>11? mes=0: mes=mes
    altera_mes(mes)
    date.setMonth(mes)
    dia_semana=date.getDay()
    ad_datas(mes,dia_semana)
    console.log(dia_semana)

})

btn_anterior.addEventListener('click', function(){
    

    dias_calendar.innerText=''
    mes=mes-1
    mes<0? mes=11: mes=mes
    altera_mes(mes)
    date.setMonth(mes)
    dia_semana=date.getDay()
    ad_datas(mes,dia_semana)
    console.log(dia_semana)
  
})

add_event.addEventListener('click', function(){

   if(alea<=31 && alea>=1 ){
    error_data.classList.add('esconder')
    body_calendar.classList.add('esconder')
    add_event.classList.add('esconder')
    menu_tarefa.classList.add('mostrar-menu-tarefa')
    menu_tarefa.classList.remove('esconder')

    for(let i in menu_tarefa.children){
        menu_tarefa.children[i].classList.remove('esconder')
    }
   }else{
    error_data.classList.remove('esconder')
   }
  
})

btn_cancel.addEventListener('click', function(){

    menu_tarefa.classList.remove('mostrar-menu-tarefa')
    body_calendar.classList.remove('esconder')
    add_event.classList.remove('esconder')
   
    for(let i in menu_tarefa.children){
        menu_tarefa.children[i].classList.add('esconder')
    }

})



dias_calendar.addEventListener('click', (e)=>{
    
    for(let i in dias_calendar.children){
        

        if(alea==Number(dias_calendar.children[i].innerText)){
            alea2.classList.remove('datas-select')
         }
        
    }

    

    const div_datas=e.target
    const valor_datas= Number(div_datas.innerText)
    if(valor_datas<=31 && valor_datas>0){
        div_datas.classList.add('datas-select')
    }
    console.log(valor_datas)
   
    alea=valor_datas
    alea2=div_datas

})



list.forEach((item)=>
item.addEventListener('click',activeLink)
)

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active')
}

function ad_datas(p,d){

    for(let i=1; i<=d;i++){
        const div= document.createElement('div')
        
        div.classList.add('null-datas')
        dias_calendar.appendChild(div)
        div.innerText=String(1)
  
        

    }

    
    for(let i=1; i<=m_dias[p];i++){
        const div= document.createElement('div')
        
        div.classList.add('datas')
        dias_calendar.appendChild(div)
        div.innerText=String(i)

    }
}
function altera_mes(p){

    mes_calendar.innerText=nome_mes[p]

}

function remove_escon(){

    body_calendar.classList.remove('esconder')
}