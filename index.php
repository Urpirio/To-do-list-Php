<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>to do list</title>
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
                    <h2>Juan Manuel</h2>
                    <span>Admin</span>
                </div>
            </div>
            <div class = <?php echo $clase; ?>>
                    <?php foreach (Menu as $key => $value) :?>

                    <button id = "<?= $value[2] ?>" onclick = 'Cerrar_Sesion({ID: "<?= $value[2] ?>",Path: "<?= $value[0] ?>"})'>
                        <i class = "<?php echo $value[1] ?>"></i>
                        <span><?php echo $key ?></span>
                    </button>

                    <?php endforeach ?>
            </div>
        </header>
        <section class = "Content">
            <div class = "Container-Home">

            </div>
        </section>
    </section>
    <script src = "UserLocation.js"></script>
    <script src = "Funciones.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/less" ></script>
</body>
</html>