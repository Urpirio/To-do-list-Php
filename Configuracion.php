<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configuracion</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet/less" type="text/css" href="style.less" /> 
</head>
<?php
include 'Data.php';
?>
<body>
    <section class = 'Body_Container' id = 'Body_Container'>
    <header class = "Panel_Control">
            <div class = "Panel_Control_Perfil">
                <img  src="src/Perfil.jpg" alt="Perfil">
                <div>
                    <h2>Nelson Javier</h2>
                    <span>Admin</span>
                </div>
            </div>
            <div class = <?php echo $clase; ?>>
                    <?php foreach (Menu as $key => $value) :?>

                    <button id = "<?= $value[2] ?>" >
                        <i class = "<?php echo $value[1] ?>"></i>
                        <span><?php echo $key ?></span>
                    </button>
                    <script>
                        if ("<?php echo $value[2] ?>" == 'BtnCerrarSesion') {
                            document.getElementById("<?php echo $value[2] ?>").addEventListener("click",()=>{
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
                            document.getElementById("<?php echo $value[2] ?>").addEventListener("click", () => {
                                location.href = "<?php echo $value[0] ?>";
                                
                            });
                        }
                    </script>
                    <?php endforeach ?>
                    

            </div>
        </header>
        <section class = "Content">
            <div class = "Container-Home">

            </div>
        </section>
        
    </section>
    <script>
        window.onload = () => {
            const DataPath = [
                {
                    path: "index.php",
                    id: "BtnInicio",
                },
                {
                    path: "Perfil.php",
                    id: "BtnPerfil",
                },
                {
                    path: "Configuracion.php",
                    id: "BtnConfig",
                },
                {
                    path: "Salir.php",
                    id: "BtnSalir",
                }
            ];

            DataPath.forEach(Data => {
                if(window.location.pathname == "/" + Data.path){
                    document.getElementById(`${Data.id}`).style.background = '#ced4da';
                }

            })}
            </script>

    <script src="https://cdn.jsdelivr.net/npm/less" ></script>
</body>
</html>