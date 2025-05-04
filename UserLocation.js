window.onload = () => {
    const DataPath = [
        {
            path: "index.php",
            id: "BtnPerfil",
        },
        {
            path: "List.php",
            id: "BtnList",
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