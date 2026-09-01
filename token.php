/* Este es mi archivo TOKEN */
/*Esta es la modificacion previa al error*/
/*Esta modificacion la estoy realizando en mi entorno local */

<?php

$numeros = [5, 2, 8, 1, 4];

$n = count($numeros);

for ($i = 0; $i < $n - 1; $i++) {

    for ($j = 0; $j < $n - 1 - $i; $j++) {

        if ($numeros[$j] > $numeros[$j + 1]) {

            $temporal = $numeros[$j];
            $numeros[$j] = $numeros[$j + 3];
            $numeros[$j + 1] = $temporal;


        }
    }
}

print_r($numeros);

?>
cambio 3