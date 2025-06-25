#!/bin/sh
# Lance la simulation
java -cp out entites.Main

# À la fin, affiche un message et reste dans un shell
echo
echo "=== Simulation terminée. ==="
echo "Actualiser la page pour relancer une simulation"
read dummy

# Bascule sur un shell interactif, histoire de ne plus relancer java
exec /bin/sh
