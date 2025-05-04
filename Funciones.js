const Cerrar_Sesion = ({ID,Path}) => {
    if(ID == "BtnCerrarSesion"){
        document.getElementById(ID).addEventListener("click",()=>{
            const dialog = document.createElement('dialog');
            dialog.className = 'Dialog_CerrarSesion';
            dialog.open = true;
            dialog.style.width = '97.7%';
            dialog.style.border = 'none';
            dialog.style.height = '90vh';
            dialog.style.background = 'none';
            dialog.style.display = 'flex';
            dialog.style.justifyContent = 'center';
            dialog.style.alignItems = 'center';
            dialog.style.zIndex = '10';
            dialog.style.backdropFilter = 'blur(5px)';

            const divContainer = document.createElement('div');
            divContainer.style.display = 'flex';
            divContainer.style.alignItems = 'center';
            divContainer.style.justifyContent = 'center';
            divContainer.style.flexDirection = 'column';
            divContainer.style.border = '1px solid gray';
            divContainer.style.padding = '10px';
            divContainer.style.borderRadius = '10px';
            divContainer.style.gap = '10px';
            divContainer.style.background = 'white';

            const Span = document.createElement('span');
            Span.innerText = 'Seguro que quieres continuar??';
            Span.style.fontSize = '20px';

            const BtnCancelar = document.createElement('button');
            // BtnCancelar.style.height = '20px';
            BtnCancelar.style.width = '100px';
            BtnCancelar.style.padding = '5px';
            BtnCancelar.style.borderRadius = '10px';
            BtnCancelar.style.border = '1px solid gray';
            BtnCancelar.innerText = 'Cancelar';
            BtnCancelar.addEventListener("click",()=>{
                dialog.remove();
            })

            const BtnContinuar = document.createElement('button');
            BtnContinuar.innerText = 'Continuar';
            BtnContinuar.style.padding = '5px';
            BtnContinuar.style.borderRadius = '10px';
            BtnContinuar.style.border = '1px solid gray';
            BtnContinuar.style.width = '100px';

            BtnContinuar.addEventListener("click",()=>{
                dialog.remove();
            })

            divContainer.append(Span,BtnCancelar,BtnContinuar)
            dialog.append(divContainer);
            document.getElementById('Body_Container').append(dialog)


        })
    }else{
        document.getElementById(ID).addEventListener("click", () => {
        location.href = Path;
        });
    }
}