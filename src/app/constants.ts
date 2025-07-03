type Question = {
  question: string;
  answers: string[];
  correct: string;
};

export const questions: Question[] = [
  {
    question:
      "Los motores eléctricos que propulsan los vehículos de movilidad personal pueden proporcionarles, por diseño, una velocidad máxima comprendida entre...",
    answers: ["25 y 50 km/h.", "25 y 45 km/h.", "6 y 25 km/h."],
    correct: "6 y 25 km/h.",
  },
  {
    question: "Se define como motocicleta al automóvil...",
    answers: [
      "con una cilindrada superior a 125 centímetros cúbicos.",
      "de dos o tres ruedas con una cilindrada superior a 50 centímetros cúbicos.",
      "de dos ruedas con un motor de cilindrada superior a 50 centímetros cúbicos, y/o con una velocidad máxima superior a 45 km/h.",
    ],
    correct:
      "de dos ruedas con un motor de cilindrada superior a 50 centímetros cúbicos, y/o con una velocidad máxima superior a 45 km/h.",
  },
  {
    question: "El vehículo derivado de turismo está destinado a…",
    answers: [
      "transporte, simultáneo o no, de personas y mercancías.",
      "servicios o a transporte exclusivo de mercancías.",
      "transporte de personas.",
    ],
    correct: "servicios o a transporte exclusivo de mercancías.",
  },
  {
    question:
      "¿Cómo se denomina el automóvil con cuatro ruedas o más, concebido y construido para el transporte de mercancías cuya cabina está integrada en el resto de la carrocería y con un máximo de 9 plazas, incluido el conductor?",
    answers: ["Turismo.", "Furgón.", "Camión."],
    correct: "Furgón.",
  },
  {
    question: "Un cambio de rasante es...",
    answers: [
      "un tramo de vía donde no se ve el ancho total de la calzada.",
      "un lugar en el que se encuentran dos tramos de vía de distinta inclinación.",
      "un tramo de vía donde hay un cambio de dirección.",
    ],
    correct:
      "un lugar en el que se encuentran dos tramos de vía de distinta inclinación.",
  },
  {
    question: "La masa en carga es…",
    answers: [
      "la masa efectiva del vehículo, sin incluir la masa del personal de servicio ni de los pasajeros.",
      "la masa máxima autorizada para la utilización del vehículo.",
      "la masa efectiva del vehículo y de su carga.",
    ],
    correct: "la masa efectiva del vehículo y de su carga.",
  },
  {
    question:
      "¿Se puede llevar una fotocopia del permiso de conducción en lugar del original?",
    answers: [
      "No.",
      "Sí, siempre que la misma esté debidamente cotejada.",
      "Sí, solo si es a color.",
    ],
    correct: "Sí, siempre que la misma esté debidamente cotejada.",
  },
  {
    question:
      "El número de puntos inicialmente asignado al titular de un permiso o licencia de conducción se verá reducido…",
    answers: [
      "cuando la sanción que lleve aparejada la pérdida de puntos sea firme.",
      "en el momento de cometer una infracción que lleve aparejada la pérdida de puntos.",
      "al día siguiente de cometer una infracción que lleve aparejada la pérdida de puntos.",
    ],
    correct:
      "cuando la sanción que lleve aparejada la pérdida de puntos sea firme.",
  },
  {
    question: "¿Cuántos puntos se pueden perder en un día?",
    answers: [
      "Un máximo de 8 puntos, salvo que las infracciones cometidas sean muy graves.",
      "No existe límite.",
      "Un máximo de 10 puntos.",
    ],
    correct:
      "Un máximo de 8 puntos, salvo que las infracciones cometidas sean muy graves.",
  },
  {
    question:
      "Cuando el titular de un permiso de conducir pierda parte de su asignación total de puntos, ¿puede recuperarlos?",
    answers: [
      "No, una vez perdidos no es posible recuperarlos.",
      "Sí, obteniendo de nuevo el permiso de conducción.",
      "Sí, realizando un curso de sensibilización y reeducación vial.",
    ],
    correct: "Sí, realizando un curso de sensibilización y reeducación vial.",
  },
  {
    question:
      "Con el curso de sensibilización y reeducación vial de recuperación parcial de puntos se puede recuperar...",
    answers: [
      "un máximo de 5 puntos.",
      "el permiso para conducir y se obtiene un nuevo crédito de 8 puntos.",
      "un máximo de 4 puntos.",
    ],
    correct: "un máximo de 4 puntos.",
  },
  {
    question:
      "El permiso de la clase B con más de tres años de antigüedad, ¿permite conducir por territorio español una motocicleta con sidecar?",
    answers: [
      "Sí, siempre que la motocicleta se pueda conducir con el permiso de la clase A1.",
      "Sí, siempre que la cilindrada de la motocicleta no sea superior a 250 cc.",
      "No, en ningún caso.",
    ],
    correct:
      "Sí, siempre que la motocicleta se pueda conducir con el permiso de la clase A1.",
  },
  {
    question: "Con el permiso B, ¿está permitido conducir un taxi en servicio?",
    answers: [
      "Sí.",
      "No, es necesario el permiso de la clase C1.",
      "En vías urbanas sí, en vías interurbanas no.",
    ],
    correct: "Sí.",
  },
  {
    question:
      "Un tractor agrícola de más de 3.500 kilogramos de MMA, ¿se puede conducir con el permiso B?",
    answers: [
      "No, porque sobrepasa los 3.500 kilogramos de masa máxima autorizada.",
      "Sí.",
      "Sí, cuando la velocidad máxima autorizada no exceda de 40 km/h.",
    ],
    correct: "Sí.",
  },
  {
    question:
      "Conducir, con un permiso de la clase B, un turismo que arrastra un remolque ligero, ¿está permitido?",
    answers: [
      "Sí, si el turismo se puede conducir con el permiso de la clase B.",
      "No, en ningún caso.",
      "Solo si la masa máxima autorizada del conjunto no supera los 3.500 kilogramos.",
    ],
    correct:
      "Sí, si el turismo se puede conducir con el permiso de la clase B.",
  },
  {
    question:
      "¿Qué requisitos mínimos son necesarios para conducir un turismo de 3.000 kg de MMA que arrastra un remolque de 800 kg de MMA?",
    answers: [
      "Ser titular del permiso de la clase B+E.",
      "Ser titular del permiso de la clase B y haber superado las pruebas de control de aptitudes y comportamientos para la obtención del código 96.",
      "Solo ser titular del permiso de la clase B.",
    ],
    correct:
      "Ser titular del permiso de la clase B y haber superado las pruebas de control de aptitudes y comportamientos para la obtención del código 96.",
  },
  {
    question:
      "El permiso de la clase B autoriza la conducción de ciertos automóviles impulsados por combustibles alternativos con una MMA no superior a 4.250 kg…",
    answers: [
      "con una antigüedad del permiso superior a dos años y únicamente dentro del territorio de la Unión Europea.",
      "con independencia de la antigüedad del permiso, pero se podrán conducir únicamente dentro del territorio español.",
      "con una antigüedad del permiso superior a dos años y únicamente dentro del territorio español.",
    ],
    correct:
      "con una antigüedad del permiso superior a dos años y únicamente dentro del territorio español.",
  },
  {
    question:
      "Si tiene el permiso de la clase B desde hace más de un año y ahora obtiene el de la clase A2, ¿está obligado a llevar una placa L en su motocicleta?",
    answers: [
      "Sí durante un año, en la parte trasera.",
      "No.",
      "Sí, en la parte delantera, durante un año.",
    ],
    correct: "No.",
  },
  {
    question: "¿Qué plazo de vigencia tiene el permiso de la clase B?",
    answers: [
      "10 años, hasta que el titular cumpla los 65 años de edad.",
      "5 años, hasta que el titular cumpla los 45 años de edad.",
      "10 años, hasta que el titular cumpla los 70 años de edad.",
    ],
    correct: "10 años, hasta que el titular cumpla los 65 años de edad.",
  },
  {
    question:
      "El titular de un permiso de conducción deberá comunicar a la Jefatura Provincial de Tráfico el cambio de su domicilio dentro del plazo de...",
    answers: ["30 días.", "15 días.", "10 días."],
    correct: "15 días.",
  },
  {
    question:
      "Para poder circular, ¿qué vehículos deben tener obligatoriamente el permiso de circulación?",
    answers: [
      "Los vehículos, remolques y semirremolques de masa máxima autorizada superior o igual a 750 kilogramos.",
      "Los vehículos, remolques y semirremolques de masa máxima autorizada superior o igual a 750 kilogramos y ciclomotores.",
      "Los vehículos a motor, remolques y semirremolques de masa máxima autorizada superior a 750 kilogramos y ciclomotores.",
    ],
    correct:
      "Los vehículos a motor, remolques y semirremolques de masa máxima autorizada superior a 750 kilogramos y ciclomotores.",
  },
  {
    question:
      "Para saber la fecha en que se debe pasar la primera ITV, la antigüedad de un vehículo empieza a contar a partir de...",
    answers: [
      "la fecha de la primera matriculación.",
      "el día de la compra del vehículo.",
      "la fecha en que pasó la inspección de fábrica.",
    ],
    correct: "la fecha de la primera matriculación.",
  },
  {
    question:
      "Si vende su vehículo, ¿debe comunicarlo a la Jefatura de Tráfico?",
    answers: [
      "Sí, pero no hay plazo obligatorio para comunicar la venta.",
      "Sí. Debo comunicar la venta en el plazo de 10 días, indicando los datos del nuevo titular.",
      "No. El nuevo titular es el que tiene que comunicar la compra.",
    ],
    correct:
      "Sí. Debo comunicar la venta en el plazo de 10 días, indicando los datos del nuevo titular.",
  },
  {
    question:
      "Los remolques ligeros con más de dos años de antigüedad, ¿deben pasar la ITV?",
    answers: [
      "Sí, cada dos años.",
      "Sí, cuando pase la ITV el automóvil al que van enganchados.",
      "No.",
    ],
    correct: "No.",
  },
  {
    question: "¿Cuándo debe pasar un turismo la primera inspección técnica?",
    answers: [
      "A los 3 años, a partir de la fecha de la primera matriculación.",
      "A los 4 años, a partir de la fecha de fabricación o importación.",
      "A los 4 años, a partir de la fecha de la primera matriculación.",
    ],
    correct: "A los 4 años, a partir de la fecha de fabricación o importación.",
  },
  {
    question: "¿Quién es el responsable de pasar la ITV a un turismo?",
    answers: [
      "El titular del vehículo.",
      "El tomador del seguro.",
      "El conductor habitual.",
    ],
    correct: "El titular del vehículo.",
  },
  {
    question:
      "Si se matricula hoy una caravana de la categoría O2 para llevarla enganchada a un turismo, ¿cada cuánto tiempo debe presentarla a inspección técnica periódica durante los primeros seis años?",
    answers: [
      "Cada dos años.",
      "Cada tres años.",
      "Está exenta durante los seis primeros años.",
    ],
    correct: "Está exenta durante los seis primeros años.",
  },
  {
    question:
      "Las motocicletas con más de cinco años de antigüedad deben pasar la ITV...",
    answers: ["cada cinco años.", "cada año.", "cada dos años."],
    correct: "cada dos años.",
  },
  {
    question:
      "Un furgón de hasta 3.500 kg de 5 años de antigüedad, ¿cuándo debe pasar la inspección técnica?",
    answers: [
      "Bienal, hasta los seis años.",
      "Bienal, hasta los 10 años.",
      "Anual, hasta los seis años.",
    ],
    correct: "Bienal, hasta los seis años.",
  },
  {
    question:
      "Un turismo con once años de antigüedad debe someterse a la inspección técnica periódica…",
    answers: ["cada cuatro años.", "cada dos años.", "cada año."],
    correct: "cada año.",
  },
  {
    question:
      "Un turismo acaba de pasar satisfactoriamente la primera inspección técnica periódica, ¿cuándo debe pasar la siguiente?",
    answers: ["Al año siguiente.", "Pasados cuatro años.", "Pasados dos años."],
    correct: "Pasados dos años.",
  },
  {
    question:
      "El seguro obligatorio, ¿cubre los daños en la persona del conductor del vehículo asegurado?",
    answers: [
      "Sí, en todo caso.",
      "No.",
      "Sí, salvo cuando el conductor es el tomador del seguro.",
    ],
    correct: "No.",
  },
  {
    question: "El seguro obligatorio, ¿cubre los daños del vehículo asegurado?",
    answers: [
      "Sí, cuando su conductor no sea culpable del accidente.",
      "No.",
      "Sí.",
    ],
    correct: "No.",
  },
  {
    question:
      "Los usuarios de las vías cuyo vehículo haya sufrido un accidente, ¿tienen permitido cumplimentar el parte de accidente en la plataforma de circulación?",
    answers: [
      "Sí, cuando se realice en los arcenes de la vía, nunca en la calzada.",
      "No, se llevará a cabo en un lugar seguro fuera de la vía.",
      "Sí, siempre que lo hagan con las debidas condiciones de seguridad.",
    ],
    correct: "No, se llevará a cabo en un lugar seguro fuera de la vía.",
  },
  {
    question:
      "En caso de accidente, el seguro obligatorio de un vehículo, ¿cubre los daños producidos a la parte contraria?",
    answers: [
      "Sí, siempre, pues así se contempla en la póliza del seguro obligatorio.",
      "Sí, en todo caso, si los gastos no superan los límites establecidos en la póliza.",
      "Sí, cuando su conductor resulta civilmente responsable del accidente, excepto si el vehículo hubiera sido robado.",
    ],
    correct:
      "Sí, cuando su conductor resulta civilmente responsable del accidente, excepto si el vehículo hubiera sido robado.",
  },
  {
    question:
      "Uno de los pasajeros adultos del turismo que usted conduce no lleva puesto el cinturón de seguridad. Si un agente de la autoridad denuncia la infracción, ¿quién es el responsable?",
    answers: ["El pasajero.", "El tomador del seguro.", "El conductor."],
    correct: "El pasajero.",
  },
  {
    question:
      "El tiempo desde que ve un peligro hasta que actúa, ¿cómo se llama?",
    answers: [
      "Tiempo de frenado.",
      "Tiempo de reacción.",
      "Tiempo de detención.",
    ],
    correct: "Tiempo de reacción.",
  },
  {
    question:
      "¿Puede aumentar la distancia de reacción si ha consumido alcohol?",
    answers: [
      "Sí, porque el tiempo de reacción aumenta.",
      "No, porque el vehículo siempre recorre los mismos metros.",
      "No, porque el tiempo de reacción no varía.",
    ],
    correct: "Sí, porque el tiempo de reacción aumenta.",
  },
  {
    question: "El consumo de drogas, ¿afecta a la capacidad de reacción?",
    answers: ["Sí, aumentándola.", "No.", "Sí, disminuyéndola."],
    correct: "Sí, disminuyéndola.",
  },
  {
    question: "El tiempo de reacción puede verse incrementado...",
    answers: [
      "después de una fuerte discusión.",
      "después de una comida ligera.",
      "si usamos gafas graduadas.",
    ],
    correct: "después de una fuerte discusión.",
  },
  {
    question: "A medida que aumenta la velocidad...",
    answers: [
      "disminuye el campo visual y se retrasa la aparición de la fatiga.",
      "disminuye el campo visual y se acelera la aparición de la fatiga.",
      "aumenta el campo visual y se acelera la aparición de la fatiga.",
    ],
    correct:
      "disminuye el campo visual y se acelera la aparición de la fatiga.",
  },
  {
    question:
      "En general, ¿dónde suelen producirse más accidentes por distracción?",
    answers: [
      "En carreteras con trazado sinuoso.",
      "En autopistas y autovías.",
      "En vías urbanas.",
    ],
    correct: "En autopistas y autovías.",
  },
  {
    question: "Los accidentes debidos a distracciones suceden más...",
    answers: [
      "durante el día y los fines de semana.",
      "durante la tarde.",
      "en los meses de invierno.",
    ],
    correct: "durante el día y los fines de semana.",
  },
  {
    question:
      "La vía, su entorno y el propio vehículo, ¿pueden favorecer la aparición de distracciones al volante?",
    answers: [
      "Sí, el vehículo y la vía pero no su entorno.",
      "Sí, la vía pero no su entorno.",
      "Sí.",
    ],
    correct: "Sí.",
  },
  {
    question: "Los accidentes por distracción son más frecuentes...",
    answers: [
      "en los conductores entre 30 y 45 años.",
      "en los mayores de 50 años.",
      "en los jóvenes entre 18 y 25 años y en los mayores de 70.",
    ],
    correct: "en los jóvenes entre 18 y 25 años y en los mayores de 70.",
  },
  {
    question: "Un factor que favorece la distracción del conductor es...",
    answers: [
      "la alta luminosidad del ambiente.",
      "una situación de tráfico excesivamente sencilla.",
      "la baja luminosidad del ambiente.",
    ],
    correct: "la baja luminosidad del ambiente.",
  },
  {
    question:
      "¿Cuál de las siguientes situaciones favorece la distracción al conducir?",
    answers: [
      "Una carretera excesivamente familiar.",
      "Una situación de tráfico compleja.",
      "Conducir durante la noche por vías bien iluminadas.",
    ],
    correct: "Una carretera excesivamente familiar.",
  },
  {
    question:
      "¿Se pueden sufrir más distracciones por los efectos del alcohol?",
    answers: [
      "No.",
      "Sí, especialmente en situaciones complejas.",
      "No, si la tasa de alcoholemia es inferior a la máxima permitida.",
    ],
    correct: "Sí, especialmente en situaciones complejas.",
  },
  {
    question:
      "Buscar una emisora de radio o manipular el reproductor de música, ¿puede distraer al conductor?",
    answers: [
      "Solo si las emisoras de radio no están guardadas en memoria.",
      "Sí, aumentando el riesgo de accidente.",
      "No.",
    ],
    correct: "Sí, aumentando el riesgo de accidente.",
  },
  {
    question:
      "Buscar una emisora de radio o manipular el reproductor de música, ¿puede distraer al conductor?",
    answers: [
      "Solo si las emisoras de radio no están guardadas en memoria.",
      "Sí, aumentando el riesgo de accidente.",
      "No.",
    ],
    correct: "Sí, aumentando el riesgo de accidente.",
  },
  {
    question: "Fumar mientras conduce, ¿puede afectar a la conducción?",
    answers: [
      "Sí, porque distrae y se pierde capacidad de maniobra.",
      "No, y además relaja.",
      "Sí, además está prohibido.",
    ],
    correct: "Sí, porque distrae y se pierde capacidad de maniobra.",
  },
  {
    question:
      "Hablar por un teléfono móvil con dispositivo de manos libres durante la conducción…",
    answers: [
      "tiene un cierto riesgo debido a la pérdida de atención.",
      "permite mantener sin riesgo largas conversaciones al volante.",
      "está prohibido.",
    ],
    correct: "tiene un cierto riesgo debido a la pérdida de atención.",
  },
  {
    question:
      "El accidente más frecuente por el uso del teléfono móvil, mientras se conduce, es...",
    answers: [
      "el choque frontalateral.",
      "la salida de la vía.",
      "el alcance.",
    ],
    correct: "la salida de la vía.",
  },
  {
    question:
      "¿Qué efectos tiene en la conducción una conversación por el móvil que supere el minuto y medio?",
    answers: [
      "La velocidad media aumenta, incluso con el dispositivo de manos libres.",
      "El conductor deja de percibir una parte importante de las señales, incluso con el dispositivo de manos libres.",
      "El conductor no deja de percibir las señales si usa el dispositivo de manos libres.",
    ],
    correct:
      "El conductor deja de percibir una parte importante de las señales, incluso con el dispositivo de manos libres.",
  },
  {
    question:
      "Entre los momentos de peligro en el uso del teléfono móvil se encuentran...",
    answers: [
      "colgar y guardar el móvil.",
      "recibir una llamada y detenerse en un lugar seguro para hablar.",
      "no utilizar el teléfono móvil.",
    ],
    correct: "colgar y guardar el móvil.",
  },
  {
    question: "El navegador GPS, ¿puede ser peligroso para la conducción?",
    answers: [
      "Sí, cuando produce distracciones.",
      "Sí, cuando nos lleva por una ruta distinta a la habitual.",
      "No, es de gran ayuda a la conducción.",
    ],
    correct: "Sí, cuando produce distracciones.",
  },
  {
    question: "¿Cómo debe colocar el navegador GPS portátil en el vehículo?",
    answers: [
      "A una distancia de entre 10 y 25 centímetros.",
      "Delante del volante.",
      "Donde no estorpezca la visión y nunca cerca de un airbag.",
    ],
    correct: "Donde no estorpezca la visión y nunca cerca de un airbag.",
  },
  {
    question:
      "Con el vehículo en movimiento, ¿puede el conductor poner en marcha un navegador GPS?",
    answers: [
      "No, ya que es incompatible con la obligatoria atención a la conducción.",
      "Sí, mientras que no entorpezca el manejo del vehículo.",
      "Sí, ya que no supone ningún peligro.",
    ],
    correct:
      "No, ya que es incompatible con la obligatoria atención a la conducción.",
  },
  {
    question: "Si lleva instalado un navegador GPS debe tener en cuenta que…",
    answers: [
      "las instrucciones del navegador deben prevalecer en todo momento.",
      "el criterio del conductor debe prevalecer en todo momento.",
      "debe mirar siempre al mapa de la pantalla.",
    ],
    correct: "el criterio del conductor debe prevalecer en todo momento.",
  },
  {
    question: "Un asiento ergonómico contribuye a...",
    answers: [
      "aumentar la aparición de la fatiga.",
      "prevenir la aparición de la fatiga.",
      "aumentar las distracciones.",
    ],
    correct: "prevenir la aparición de la fatiga.",
  },
  {
    question: "¿Qué puede favorecer la aparición de fatiga?",
    answers: [
      "Una vía en perfecto estado.",
      "Un buen diseño de los elementos interiores del vehículo.",
      "La existencia de defectos en la dirección o suspensión del vehículo.",
    ],
    correct:
      "La existencia de defectos en la dirección o suspensión del vehículo.",
  },
  {
    question:
      "Conducir a una velocidad elevada puede producir en el conductor...",
    answers: [
      "la aparición de la fatiga.",
      "una pérdida de orientación.",
      "el efecto submarino.",
    ],
    correct: "la aparición de la fatiga.",
  },
  {
    question: "Conducir con mal tiempo, ¿puede favorece la fatiga?",
    answers: [
      "Sí, por ello se debe descansar con mayor frecuencia.",
      "Solo en los viajes largos.",
      "No.",
    ],
    correct: "Sí, por ello se debe descansar con mayor frecuencia.",
  },
  {
    question: "¿Qué efecto produce la fatiga?",
    answers: [
      "Resulta más fácil mantener la concentración.",
      "Aumenta el campo visual.",
      "La sensibilidad auditiva puede disminuir.",
    ],
    correct: "La sensibilidad auditiva puede disminuir.",
  },
  {
    question: "La fatiga hace que...",
    answers: [
      "se asuman menos riesgos al volante.",
      "se conduzca de manera mucho más pasiva.",
      "disminuyan las conductas hostiles o agresivas.",
    ],
    correct: "se conduzca de manera mucho más pasiva.",
  },
  {
    question: "Entre otros, ¿qué síntoma es indicio de fatiga?",
    answers: [
      "Sensación unas veces de frío y otras de calor.",
      "Movimientos constantes en el asiento.",
      "Disminución del tiempo de reacción.",
    ],
    correct: "Movimientos constantes en el asiento.",
  },
  {
    question:
      "¿Cuáles son las horas especialmente propicias para la aparición del sueño en el conductor?",
    answers: [
      "Las horas de la madrugada y las primeras horas de la tarde.",
      "Las últimas horas de la mañana.",
      "Las últimas horas de la tarde y las primeras de la mañana.",
    ],
    correct: "Las horas de la madrugada y las primeras horas de la tarde.",
  },
  {
    question:
      "Para evitar un accidente, un conductor con fatiga al volante debe parar a descansar de forma adecuada cuanto antes porque...",
    answers: [
      "la agudeza visual aumenta y se ven los objetos borrosos.",
      "el sueño puede aparecer de un momento a otro.",
      "los efectos de la fatiga hacen que el conductor dé positivo en un control de alcoholemia.",
    ],
    correct: "el sueño puede aparecer de un momento a otro.",
  },
  {
    question:
      "El uso de sustancias estimulantes como el café, ¿resulta útil para vencer el sueño?",
    answers: [
      "Sí, puede resultar útil a corto plazo, pero lo más recomendable para evitar el sueño es descansar.",
      "Sí, puede resultar útil porque ayudan a mantener la atención del conductor a largo plazo.",
      "No, en ningún caso.",
    ],
    correct:
      "Sí, puede resultar útil a corto plazo, pero lo más recomendable para evitar el sueño es descansar.",
  },
  {
    question: "¿Es recomendable descansar durante los viajes?",
    answers: [
      "No, porque se alarga el tiempo del viaje y aumenta la fatiga del conductor.",
      "Sí, 20-30 minutos cada 2 horas de conducción o cada 200 kilómetros.",
      "No, si el viaje es por vías interurbanas.",
    ],
    correct:
      "Sí, 20-30 minutos cada 2 horas de conducción o cada 200 kilómetros.",
  },
  {
    question:
      "El sistema de advertencia de somnolencia y distracción (DDR), ¿analiza los patrones de conducción y las reacciones del conductor para detectar si hay cansancio en el conductor?",
    answers: [
      "No, utiliza un sistema de sensores situados en el volante que miden la temperatura corporal del conductor.",
      "Sí.",
      "No, solamente realiza un seguimiento de varios aspectos de la cara y los combina con datos de circulación.",
    ],
    correct: "Sí.",
  },
  {
    question:
      "En situaciones en las que el conductor pierde la concentración al volante, ya sea por fatiga o sueño, el sistema de advertencia de somnolencia y distracción (DDR)…",
    answers: [
      "detiene automáticamente el vehículo para así evitar accidentes.",
      "alerta al conductor antes de que ocurra un accidente para que se tome un descanso.",
      "alerta al conductor de que el sistema procederá a detener el vehículo para que estacione correctamente.",
    ],
    correct:
      "alerta al conductor antes de que ocurra un accidente para que se tome un descanso.",
  },
  {
    question: "¿Qué es un microsueño?",
    answers: [
      "Un periodo corto de descanso que el conductor realiza cuando siente fatiga.",
      "Un periodo de unos segundos durante el cual el conductor sueña mientras está conduciendo.",
      "Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.",
    ],
    correct:
      "Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.",
  },
  {
    question: "El alcohol es siempre peligroso para la seguridad vial...",
    answers: [
      "excepto si se consume en pequeñas cantidades.",
      "aunque sea consumido en pequeñas cantidades.",
      "salvo para quienes estén habituados a su consumo.",
    ],
    correct: "aunque sea consumido en pequeñas cantidades.",
  },
  {
    question:
      "Como norma general, está prohibido conducir turismos con una tasa de alcohol en sangre superior a...",
    answers: [
      "0,3 gramos por litro.",
      "0,5 gramos por litro.",
      "0,8 gramos por litro.",
    ],
    correct: "0,5 gramos por litro.",
  },
  {
    question:
      "¿Cuál es la tasa de alcohol en aire espirado que no podrá superar el conductor de un vehículo que realiza transporte escolar?",
    answers: [
      "0,15 miligramo por litro de aire espirado.",
      "0,25 miligramos por litro de aire espirado.",
      "0,3 miligramros por litro de aire espirado.",
    ],
    correct: "0,15 miligramo por litro de aire espirado.",
  },
  {
    question:
      "Tiene el permiso A1 desde hace dos años y acaba de obtener el B, ¿cuál será la tasa máxima de alcohol permitida cuando conduzca un turismo?",
    answers: [
      "0,25 miligramos de alcohol por litro de aire espirado.",
      "0,15 miligramos de alcohol por litro de aire espirado.",
      "0,30 miligramos de alcohol por litro de aire espirado.",
    ],
    correct: "0,25 miligramos de alcohol por litro de aire espirado.",
  },
  {
    question: "En general, ¿a quiénes afecta más el alcohol?",
    answers: [
      "A las mujeres.",
      "A los hombres.",
      "Los efectos del alcohol no dependen del sexo de la persona.",
    ],
    correct: "A las mujeres.",
  },
  {
    question:
      "Para conducir un camión de menos de 3.500 kg de MMA, la tasa máxima autorizada de alcohol en aire espirado es...",
    answers: [
      "0,15 miligramos por litro.",
      "0,30 miligramos por litro.",
      "0,25 miligramos por litro.",
    ],
    correct: "0,25 miligramos por litro.",
  },
  {
    question:
      "Los dos primeros años de su primer permiso, ¿cuál es la tasa máxima de alcohol si es mayor de edad?",
    answers: [
      "0,15 mg/l en aire espirado = 0,3 g/l en sangre.",
      "0,10 mg/l en aire espirado = 0,2 g/l en sangre.",
      "0,25 mg/l en aire espirado = 0,5 g/l en sangre.",
    ],
    correct: "0,15 mg/l en aire espirado = 0,3 g/l en sangre.",
  },
  {
    question:
      "Un conductor con tres años de antigüedad en el permiso AM acaba de obtener el permiso B. ¿Cuál es su tasa máxima permitida de alcohol?",
    answers: [
      "0,25 miligramos por litro de aire expirado.",
      "0,30 miligramos por litro de aire expirado.",
      "0,15 miligramos por litro de aire expirado.",
    ],
    correct: "0,25 miligramos por litro de aire expirado.",
  },
  {
    question:
      "Un conductor que tenga un resultado positivo en una prueba de detección de alcoholemia...",
    answers: [
      "solo puede ser sancionado con una multa de hasta 600 euros.",
      "pierde entre 4 y 6 puntos de su permiso de conducir.",
      "pierde 2 puntos de su permiso de conducir.",
    ],
    correct: "pierde entre 4 y 6 puntos de su permiso de conducir.",
  },
  {
    question:
      "La tasa máxima de alcohol en aire espirado para conducir vehículos que transportan mercancías peligrosas...",
    answers: [
      "es de 0,3 miligramos por litro en aire espirado.",
      "depende de la masa máxima autorizada del vehículo con el que se realice el transporte.",
      "es de 0,15 miligramos por litro en aire espirado.",
    ],
    correct: "es de 0,15 miligramos por litro en aire espirado.",
  },
  {
    question:
      "Para una persona mayor de edad, ¿cuál es la tasa máxima de alcohol permitida para poder conducir un vehículo de movilidad personal?",
    answers: [
      "0,15 miligramos por litro de aire aspirado.",
      "Los conductores de vehículos de movilidad personal no tienen tasa máxima de alcoholemia.",
      "0,25 miligramos por litro de aire aspirado.",
    ],
    correct: "0,25 miligramos por litro de aire aspirado.",
  },
  {
    question: "El efecto de la alcoholemia alcanza su máximo nivel...",
    answers: [
      "dos horas después de tomar la última copa.",
      "entre 30 y 90 minutos después de haber ingerido el alcohol.",
      "inmediatamente después de tomar la última copa.",
    ],
    correct: "entre 30 y 90 minutos después de haber ingerido el alcohol.",
  },
  {
    question:
      "Durmiendo un poco, ¿se consigue eliminar más rápidamente el alcohol?",
    answers: [
      "No.",
      "Sí, si se duerme un par de horas.",
      "Sí, cuando se duerme bien.",
    ],
    correct: "No.",
  },
  {
    question:
      "El tiempo de absorción del alcohol, ¿depende de la bebida ingerida?",
    answers: [
      "Sí, se absorbe más rápidamente el alcohol de las bebidas destiladas.",
      "No, la absorción se realiza por el organismo a un ritmo constante, independientemente de la bebida.",
      "Sí, se absorbe más rápidamente el alcohol de las bebidas fermentadas.",
    ],
    correct:
      "Sí, se absorbe más rápidamente el alcohol de las bebidas destiladas.",
  },
  {
    question:
      "El consumo de alcohol, ¿altera la posibilidad de deslumbramiento de un conductor?",
    answers: ["Sí, la disminuye.", "Sí, la aumenta.", "No, en ningún caso."],
    correct: "Sí, la aumenta.",
  },
  {
    question:
      "Uno de los efectos que algunas drogas pueden producir en el conductor es...",
    answers: [
      "la disminución de la distancia de detección.",
      "la ampliación del campo visual.",
      "la incorrecta percepción del tiempo y del espacio.",
    ],
    correct: "la incorrecta percepción del tiempo y del espacio.",
  },
  {
    question:
      "Los efectos que provoca el LSD en el comportamiento del conductor...",
    answers: [
      "pueden llegar a prolongarse de 10 a 12 horas desde su consumo.",
      "proporcionan un estado de relajación.",
      "son muy breves, pero pueden reaparecer por sorpresa algún tiempo después.",
    ],
    correct: "pueden llegar a prolongarse de 10 a 12 horas desde su consumo.",
  },
  {
    question:
      "El consumo de éxtasis, ¿cómo afecta en el comportamiento del conductor?",
    answers: [
      "Reduce su sensibilidad al deslumbramiento.",
      "Disminuye su capacidad de concentración.",
      "Provoca un agotamiento físico y mental mientras que están presentes los síntomas.",
    ],
    correct: "Disminuye su capacidad de concentración.",
  },
  {
    question:
      "¿Qué efectos puede producir en el conductor el consumo de éxtasis?",
    answers: [
      "Disminución del tiempo de reacción.",
      "Aumento de la capacidad de concentración.",
      "Episodios de depresión o ansiedad.",
    ],
    correct: "Episodios de depresión o ansiedad.",
  },
  {
    question: "El consumo de LSD produce en el conductor…",
    answers: [
      "alucinaciones y distorsiones en la percepción.",
      "estabilidad emocional.",
      "fatiga.",
    ],
    correct: "alucinaciones y distorsiones en la percepción.",
  },
  {
    question: "¿Cómo afecta el consumo de cocaína a la conducción?",
    answers: [
      "El conductor desarrolla un comportamiento menos agresivo.",
      "Disminuye la capacidad de concentración del conductor.",
      "La percepción del conductor no variará.",
    ],
    correct: "Disminuye la capacidad de concentración del conductor.",
  },
  {
    question: "Los efectos del cannabis afectan a la conducción por una...",
    answers: [
      "conducta más agresiva.",
      "alteración de la percepción del entorno.",
      "menor dificultad para calcular las distancias.",
    ],
    correct: "alteración de la percepción del entorno.",
  },
  {
    question:
      "Los agentes podrán someter a la prueba de detección de estupefacientes, psicotrópicos u otras sustancias análogas a...",
    answers: [
      "los conductores que sean denunciados por alguna infracción.",
      "cualquier usuario de la vía o conductor de vehículo.",
      "cualquier usuario de la vía con síntomas de estar bajo sus efectos.",
    ],
    correct: "los conductores que sean denunciados por alguna infracción.",
  },
  {
    question:
      "En un control preventivo, ¿quiénes están obligados a someterse a las pruebas que se establezcan para la detección de alcoholemia?",
    answers: [
      "Todos los usuarios de la vía.",
      "Únicamente los conductores de vehículos a motor.",
      "Los conductores de bicicletas.",
    ],
    correct: "Los conductores de bicicletas.",
  },
  {
    question:
      "Si a un conductor se le detecta una tasa de 0,3 miligramos por litro de aire espirado, ¿puede el agente solicitar una segunda prueba?",
    answers: [
      "Sí, pero debe transcurrir entre la realización de la primera y la segunda prueba un tiempo mínimo de 10 minutos.",
      "Sí, pero la segunda prueba solo se podrá realizar mediante análisis de sangre.",
      "No y además los agentes procederán a inmovilizar el vehículo.",
    ],
    correct:
      "Sí, pero debe transcurrir entre la realización de la primera y la segunda prueba un tiempo mínimo de 10 minutos.",
  },
  {
    question:
      "La conducción bajo los efectos del alcohol o de las drogas, ¿está considerada delito en el código penal?",
    answers: [
      "No, las sanciones son exclusivamente económicas.",
      "Solo cuando el conductor sea responsable de un accidente con víctimas mortales.",
      "Sí.",
    ],
    correct: "Sí.",
  },
  {
    question:
      "Los agentes de tráfico inmovilizan un vehículo cuando su conductor tiene una tasa de alcohol mayor de la permitida. ¿Cuándo se dejará sin efecto dicha inmovilización?",
    answers: [
      "Cuando el agente entregue al conductor el boletín de denuncia.",
      "Cuando desaparezca la causa que la motivó.",
      "Cuando el conductor viaje con menores de edad.",
    ],
    correct: "Cuando desaparezca la causa que la motivó.",
  },
  {
    question:
      "Las pruebas de detección de sustancias estupefacientes, ¿son obligatorias?",
    answers: [
      "No, las únicas pruebas obligatorias son las de alcoholemia.",
      "Sí, pero solo cuando el conductor esté implicado en un accidente.",
      "Sí, igual que las pruebas de investigación de alcoholemia.",
    ],
    correct: "Sí, igual que las pruebas de investigación de alcoholemia.",
  },
  {
    question: "Los síntomas de las alergias respiratorias pueden producir...",
    answers: [
      "un retraso en la aparición del sueño.",
      "una menor capacidad para mantener la concentración en el tráfico.",
      "una disminución del tiempo de reacción.",
    ],
    correct:
      "una menor capacidad para mantener la concentración en el tráfico.",
  },
  {
    question: "Las gripes, resfriados y alergias, ¿afectan a la conducción?",
    answers: [
      "No, apenas tienen efectos negativos.",
      "Sí, y resultan tan familiares que a veces se olvidan sus síntomas.",
      "Sí, pero resultan tan familiares que no es necesario tomar precauciones especiales.",
    ],
    correct:
      "Sí, y resultan tan familiares que a veces se olvidan sus síntomas.",
  },
  {
    question:
      "Todas las enfermedades, ¿son igual de peligrosas para la conducción?",
    answers: [
      "No, las enfermedades crónicas no son peligrosas.",
      "Sí, todas las enfermedades son igual de peligrosas.",
      "No, algunos trastornos neurológicos y enfermedades mentales son más peligrosas.",
    ],
    correct:
      "No, algunos trastornos neurológicos y enfermedades mentales son más peligrosas.",
  },
  {
    question:
      "Las medicinas alternativas o naturales, ¿pueden producir efectos negativos en la conducción?",
    answers: [
      "No, porque no se consideran medicamentos.",
      "Sí, siempre.",
      "Sí, en determinados casos.",
    ],
    correct: "Sí, en determinados casos.",
  },
  {
    question: "El estrés, ¿qué efectos puede tener sobre el conductor?",
    answers: [
      "Comportamientos excesivamente prudentes.",
      "Disminución de la fatiga y el sueño.",
      "La toma de decisiones al volante puede ser más lenta.",
    ],
    correct: "La toma de decisiones al volante puede ser más lenta.",
  },
  {
    question: "El estrés hace que el conductor...",
    answers: [
      "asuma menos riesgos.",
      "sea más hostil con los demás usuarios.",
      "respete más la señalización.",
    ],
    correct: "sea más hostil con los demás usuarios.",
  },
  {
    question:
      "Si conduce, y se encuentra en tratamiento médico con medicamentos, debe saber...",
    answers: [
      "que hay medicamentos que influyen negativamente en la atención y el tiempo de reacción.",
      "que está totalmente prohibido conducir si se toma algún medicamento.",
      "que los medicamentos recetados por el médico, no influyen en la capacidad para conducir.",
    ],
    correct:
      "que hay medicamentos que influyen negativamente en la atención y el tiempo de reacción.",
  },
  {
    question:
      "Los medicamentos que no necesitan receta médica, ¿afectan a la conducción?",
    answers: [
      "Sí, todos los medicamentos afectan a la conducción.",
      "Sí, algunos pueden tener efectos negativos.",
      "No.",
    ],
    correct: "Sí, algunos pueden tener efectos negativos.",
  },
  {
    question:
      "La depresión es una grave enfermedad que se sufre cada vez con más frecuencia. Si se padece debemos saber que...",
    answers: [
      "no debemos conducir hasta pasada al menos una hora de habernos medicado.",
      "no es recomendable conducir de noche o por entornos monótonos o durante muchas horas.",
      "si no nos medicamos no tiene efectos sobre la conducción.",
    ],
    correct:
      "no es recomendable conducir de noche o por entornos monótonos o durante muchas horas.",
  },
  {
    question:
      "La depresión es una grave enfermedad que se sufre cada vez con más frecuencia. Si se padece debemos saber que...",
    answers: [
      "no debemos conducir hasta pasada al menos una hora de habernos medicado.",
      "tiene un claro efecto sobre nuestras capacidades para conducir un vehículo con seguridad.",
      "si no nos medicamos no tiene efectos sobre la conducción.",
    ],
    correct:
      "tiene un claro efecto sobre nuestras capacidades para conducir un vehículo con seguridad.",
  },
  {
    question: "Bajo los efectos de la depresión...",
    answers: [
      "disminuyen las distracciones.",
      "se tiene más seguridad.",
      "se pierde información del entorno.",
    ],
    correct: "se pierde información del entorno.",
  },
  {
    question: "La depresión, ¿qué efectos produce en la conducción?",
    answers: [
      "Ansiedad y tranquilidad.",
      "Ninguno.",
      "Distractiones y somnolencia.",
    ],
    correct: "Distractiones y somnolencia.",
  },
  {
    question:
      "Los antihistamínicos modernos, ¿son más seguros para la conducción?",
    answers: [
      "No, producen somnolencia como todos los antihistamínicos.",
      "Sí, ya que pueden mezclarse sin problemas con otros medicamentos.",
      "Sí, pero no deben mezclarse con alcohol o con otros medicamentos.",
    ],
    correct:
      "Sí, pero no deben mezclarse con alcohol o con otros medicamentos.",
  },
  {
    question:
      "Ante un tratamiento farmacológico, ¿reaccionan todas las personas de igual forma?",
    answers: [
      "No, ya que circunstancias individuales como la fatiga o estar en ayunas pueden variar los efectos.",
      "Sí, ya que los medicamentos siempre producen los mismos efectos.",
      "No, depende únicamente del estado físico.",
    ],
    correct:
      "No, ya que circunstancias individuales como la fatiga o estar en ayunas pueden variar los efectos.",
  },
  {
    question: "¿Qué medicamentos deben llevar el símbolo de la imagen?",
    answers: [
      "Únicamente los antihistamínicos.",
      "Los que afectan a la conducción.",
      "Los que son inofensivos para la conducción.",
    ],
    correct: "Los que afectan a la conducción.",
  },
  {
    question: "Si está tomando medicamentos y va a conducir…",
    answers: [
      "no es necesario tomar ninguna precaución cuando no se necesita receta médica para poder comprarlos.",
      "debe leer las indicaciones del prospecto y, en caso de duda, consultar al médico o al farmacéutico.",
      "debe esperar al menos dos horas antes de conducir.",
    ],
    correct:
      "debe leer las indicaciones del prospecto y, en caso de duda, consultar al médico o al farmacéutico.",
  },
  {
    question:
      "Después de ingerir medicamentos tranquilizantes, el tiempo de reacción…",
    answers: ["no varía.", "disminuye.", "aumenta."],
    correct: "aumenta.",
  },
  {
    question: "Uno de los efectos que pueden producir los ansiolíticos es...",
    answers: [
      "la aparición de periodos de somnolencia.",
      "el aumento de la agudeza visual.",
      "la disminución de la sensibilidad al deslumbramiento.",
    ],
    correct: "la aparición de periodos de somnolencia.",
  },
  {
    question: "Los fármacos hipnóticos hacen que...",
    answers: [
      "aumente el campo visual.",
      "aumente el tiempo de reacción.",
      "disminuya el tiempo de reacción.",
    ],
    correct: "aumente el tiempo de reacción.",
  },
  {
    question:
      "Los efectos secundarios de los medicamentos que alteran la capacidad de conducción, ¿se manifiestan de la misma manera en todas las personas?",
    answers: [
      "No, pueden variar por diversos factores, como el hábito de consumo o el estado físico del conductor.",
      "Sí, sus efectos son idénticos para todas las personas.",
      "Solo si el tratamiento médico se prolonga en el tiempo.",
    ],
    correct:
      "No, pueden variar por diversos factores, como el hábito de consumo o el estado físico del conductor.",
  },
  {
    question: "Las comidas copiosas pueden provocar en el conductor...",
    answers: ["nerviosismo.", "el llamado efecto rebote.", "somnolencia."],
    correct: "somnolencia.",
  },
  {
    question:
      "Es conveniente que el traje del conductor o pasajero de una motocicleta sea…",
    answers: [
      "de piel u otro material similar que protege de lesiones en caso de accidente.",
      "muy amplio y suelto porque lo más importante es la estética y la comodidad.",
      "poco vistoso y de colores apagados, para no distraer a los demás conductores.",
    ],
    correct:
      "de piel u otro material similar que protege de lesiones en caso de accidente.",
  },
  {
    question: "Un traje adecuado para conducir una motocicleta, debe...",
    answers: [
      "estar muy ajustado al cuerpo para mejorar la estética.",
      "ser resistente a los golpes y a la abrasión en caso de caída.",
      "tener colores oscuros.",
    ],
    correct: "ser resistente a los golpes y a la abrasión en caso de caída.",
  },
  {
    question:
      "Es recomendable que los guantes que se utilicen para conducir una motocicleta...",
    answers: [
      "sean de piel y sin dibujo.",
      "tengan protector y la máxima cantidad de masa posible.",
      "sean de piel y con dibujo.",
    ],
    correct: "sean de piel y sin dibujo.",
  },
  {
    question:
      "¿Es adecuado conducir una motocicleta llevando como calzado unas sandalias?",
    answers: [
      "Es indiferente, el calzado no influye en la conducción de motocicletas.",
      "No.",
      "Sí.",
    ],
    correct: "No.",
  },
  {
    question:
      "En caso de caída de la carga en la calzada, el conductor deberá...",
    answers: [
      "cortar la circulación en todo caso.",
      "retirarla lo antes posible y adoptar entre tanto las medidas necesarias para avisar al resto de usuarios.",
      "proseguir la marcha y avisar del accidente a las autoridades pertinentes.",
    ],
    correct:
      "retirarla lo antes posible y adoptar entre tanto las medidas necesarias para avisar al resto de usuarios.",
  },
  {
    question:
      "Los resaltos en los pasos para peatones, ¿se consideran obstáculos en la calzada?",
    answers: [
      "Sí, puesto que dificultan el cruce de los pasos de peatones.",
      "Sí, cuando son metálicos.",
      "No, siempre que se garantice la seguridad vial de los usuarios y especialmente de los ciclistas.",
    ],
    correct:
      "No, siempre que se garantice la seguridad vial de los usuarios y especialmente de los ciclistas.",
  },
  {
    question: "Está prohibido arrojar a la vía objetos...",
    answers: [
      "solamente si pueden deteriorar la vía.",
      "que puedan deteriorar la vía o sus instalaciones.",
      "únicamente si pueden entorpecer la libre circulación.",
    ],
    correct: "que puedan deteriorar la vía o sus instalaciones.",
  },
  {
    question:
      "Arrojar un cigarro encendido por la ventanilla de un turismo, ¿puede suponer una infracción?",
    answers: [
      "Sí, y además conlleva pérdida de puntos.",
      "No, pero no se debe hacer.",
      "Sí, pero no conlleva pérdida de puntos.",
    ],
    correct: "Sí, y además conlleva pérdida de puntos.",
  },
  {
    question:
      "Los peatones, ¿tienen los mismos derechos que los conductores para utilizar las vías públicas?",
    answers: ["Solo en las calles residenciales.", "Sí.", "No."],
    correct: "Sí.",
  },
];
