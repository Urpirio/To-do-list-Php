const Data_Btns = [
    {
        Id: "Container_Form",
        nombre: "Cancelar",
        functionClick: ({ID})=> {
            document.getElementById(ID).remove();
        }
    },
    {
        Id: "Container_Tarea",
        nombre: "Agregar tarea",
        functionClick: ({ID,title,descripcion})=> {
           const container = document.getElementById(ID);
           container.style.display = 'flex';
           container.style.alignContent = 'center';
           container.style.paddingLeft = '10px';
           container.style.paddingRight = '10px';
           container.style.border = '1px solid black';
           container.style.width = '98%';


           const divIntarea = document.createElement('div');
           divIntarea.style.display = 'flex';
           divIntarea.style.flexDirection = 'column';
           divIntarea.style.alignContent = 'center';


           const divTarea = document.createElement('div');
           divTarea.style.width = '100%';
           divTarea.style.display = 'flex';
           divTarea.style.width = '98%';
           divTarea.style.justifyContent = 'space-between';
           

           const Title = document.createElement('h1');
           Title.style.margin = '0px';
           Title.innerText = title;

           const Descripcion = document.createElement('p');
           Descripcion.style.margin = '0px';
           Descripcion.style.fontSize = '14px';
           Descripcion.innerText = descripcion;

           const divBtns = document.createElement('div');
           divBtns.style.alignContent = 'center';

           const BtnBorrar = document.createElement('button');
           BtnBorrar.innerText = 'Borrar';

           BtnBorrar.addEventListener('click',()=>{

           });

           divBtns.append(BtnBorrar);
           divIntarea.append(Title,Descripcion);
           divTarea.append(divIntarea,divBtns);
           container.append(divTarea);


        }
    }
];

const DataStatus = [
    {
        status: false,
    }
]



const Modal_List = () => {

       if(DataStatus[0].status == false){

        DataStatus[0].status = true;

        const Container_Form = document.createElement('div');
        Container_Form.style.zIndex = '10';
        Container_Form.style.border = '1px solid black';
        Container_Form.style.display = 'flex';
        Container_Form.style.flexDirection = 'column';
        Container_Form.style.padding = '10px';
        Container_Form.style.borderRadius = '10px';
        Container_Form.style.width = '90%';
        Container_Form.style.gap = '10px';
        Container_Form.style.background = 'white';
        Container_Form.style.marginTop = '20px';
        Container_Form.id = 'Container_Form';
    
    
        const div_Inputs = document.createElement('div');
        div_Inputs.style.display = 'flex';
        div_Inputs.style.flexDirection = 'column';
        div_Inputs.style.gap = '5px';
    
    
    
        const Input_tarea = document.createElement('input');
        Input_tarea.placeholder = 'Titulo de la tarea';
        Input_tarea.style.height = '30px';
        Input_tarea.style.fontSize = '16px';
        Input_tarea.style.paddingLeft = '10px';
        Input_tarea.style.paddingRight = '10px';
        Input_tarea.style.borderRadius = '5px'

    
    
        const textarea_Descripcion_Tarea = document.createElement('textarea');
        textarea_Descripcion_Tarea.placeholder = 'Descripcion de la tarea';
        textarea_Descripcion_Tarea.style.resize = 'none';
        textarea_Descripcion_Tarea.style.padding = '10px';
        textarea_Descripcion_Tarea.style.height = '50px';
        textarea_Descripcion_Tarea.style.borderRadius = '5px'
    
    
        const div_Btns = document.createElement('div');
        div_Btns.style.width = '100%';
        div_Btns.style.display = 'flex';
        div_Btns.style.justifyContent = 'end';
        div_Btns.style.gap = '5px';
        
    
        Data_Btns.forEach(Data => {

            const  Btn =  document.createElement('button');
            Btn.addEventListener('click',()=>{
                alert(Input_tarea.value)
                Data.Id == "Container_Tarea" ? Data.functionClick({
                    ID: Data.Id,
                    title: Input_tarea.value,
                    descripcion: textarea_Descripcion_Tarea.value,
                }) : Data.functionClick({
                    ID: Data.Id,
                });
            });

            Btn.innerText = Data.nombre;
            Btn.style.padding = '5px';
            Btn.style.borderRadius = '5px';
            div_Btns.appendChild(Btn);
        });
    
        div_Inputs.append(Input_tarea,textarea_Descripcion_Tarea);
        Container_Form.append(div_Inputs,div_Btns)
        document.querySelector('.Main-Tarea').append(Container_Form);
       }
};
