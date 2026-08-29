/* Este es mi archivo TOKEN */
/*Esta es la modificacion previa al error*/
/*Esta modificacion la estoy realizando en mi entorno local */


<?php

$numeros = [5, 2, 8, 1, 4];

$n = count($numeros);

for ($i = 0; $i < $n - 1; $i++) {

    for ($j = 0; $j < $n - 2 - $i; $j++) {

        if ($numeros[$j] > $numeros[$j + 2]) {

            $temporal = $numeros[$j];
            $numeros[$j] = $numeros[$j + 2];
            $numeros[$j + 2] = $temporal;

        }
    }
}

print_r($numeros);

?>
