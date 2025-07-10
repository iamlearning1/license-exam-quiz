type Question = {
  question: string;
  answers: string[];
  correct: string;
};

export const questions: Question[] = [
  {
    question:
      'Los motores eléctricos que propulsan los vehículos de movilidad personal pueden proporcionarles, por diseño, una velocidad máxima comprendida entre...',
    answers: ['25 y 50 km/h.', '25 y 45 km/h.', '6 y 25 km/h.'],
    correct: '6 y 25 km/h.',
  },
  {
    question: 'Se define como motocicleta al automóvil...',
    answers: [
      'con una cilindrada superior a 125 centímetros cúbicos.',
      'de dos o tres ruedas con una cilindrada superior a 50 centímetros cúbicos.',
      'de dos ruedas con un motor de cilindrada superior a 50 centímetros cúbicos, y/o con una velocidad máxima superior a 45 km/h.',
    ],
    correct:
      'de dos ruedas con un motor de cilindrada superior a 50 centímetros cúbicos, y/o con una velocidad máxima superior a 45 km/h.',
  },
  {
    question: 'El vehículo derivado de turismo está destinado a…',
    answers: [
      'transporte, simultáneo o no, de personas y mercancías.',
      'servicios o a transporte exclusivo de mercancías.',
      'transporte de personas.',
    ],
    correct: 'servicios o a transporte exclusivo de mercancías.',
  },
  {
    question:
      '¿Cómo se denomina el automóvil con cuatro ruedas o más, concebido y construido para el transporte de mercancías cuya cabina está integrada en el resto de la carrocería y con un máximo de 9 plazas, incluido el conductor?',
    answers: ['Turismo.', 'Furgón.', 'Camión.'],
    correct: 'Furgón.',
  },
  {
    question: 'Un cambio de rasante es...',
    answers: [
      'un tramo de vía donde no se ve el ancho total de la calzada.',
      'un lugar en el que se encuentran dos tramos de vía de distinta inclinación.',
      'un tramo de vía donde hay un cambio de dirección.',
    ],
    correct:
      'un lugar en el que se encuentran dos tramos de vía de distinta inclinación.',
  },
  {
    question: 'La masa en carga es…',
    answers: [
      'la masa efectiva del vehículo, sin incluir la masa del personal de servicio ni de los pasajeros.',
      'la masa máxima autorizada para la utilización del vehículo.',
      'la masa efectiva del vehículo y de su carga.',
    ],
    correct: 'la masa efectiva del vehículo y de su carga.',
  },
  {
    question:
      '¿Se puede llevar una fotocopia del permiso de conducción en lugar del original?',
    answers: [
      'No.',
      'Sí, siempre que la misma esté debidamente cotejada.',
      'Sí, solo si es a color.',
    ],
    correct: 'Sí, siempre que la misma esté debidamente cotejada.',
  },
  {
    question:
      'El número de puntos inicialmente asignado al titular de un permiso o licencia de conducción se verá reducido…',
    answers: [
      'cuando la sanción que lleve aparejada la pérdida de puntos sea firme.',
      'en el momento de cometer una infracción que lleve aparejada la pérdida de puntos.',
      'al día siguiente de cometer una infracción que lleve aparejada la pérdida de puntos.',
    ],
    correct:
      'cuando la sanción que lleve aparejada la pérdida de puntos sea firme.',
  },
  {
    question: '¿Cuántos puntos se pueden perder en un día?',
    answers: [
      'Un máximo de 8 puntos, salvo que las infracciones cometidas sean muy graves.',
      'No existe límite.',
      'Un máximo de 10 puntos.',
    ],
    correct:
      'Un máximo de 8 puntos, salvo que las infracciones cometidas sean muy graves.',
  },
  {
    question:
      'Cuando el titular de un permiso de conducir pierda parte de su asignación total de puntos, ¿puede recuperarlos?',
    answers: [
      'No, una vez perdidos no es posible recuperarlos.',
      'Sí, obteniendo de nuevo el permiso de conducción.',
      'Sí, realizando un curso de sensibilización y reeducación vial.',
    ],
    correct: 'Sí, realizando un curso de sensibilización y reeducación vial.',
  },
  {
    question:
      'Con el curso de sensibilización y reeducación vial de recuperación parcial de puntos se puede recuperar...',
    answers: [
      'un máximo de 5 puntos.',
      'el permiso para conducir y se obtiene un nuevo crédito de 8 puntos.',
      'un máximo de 4 puntos.',
    ],
    correct: 'un máximo de 4 puntos.',
  },
  {
    question:
      'El permiso de la clase B con más de tres años de antigüedad, ¿permite conducir por territorio español una motocicleta con sidecar?',
    answers: [
      'Sí, siempre que la motocicleta se pueda conducir con el permiso de la clase A1.',
      'Sí, siempre que la cilindrada de la motocicleta no sea superior a 250 cc.',
      'No, en ningún caso.',
    ],
    correct:
      'Sí, siempre que la motocicleta se pueda conducir con el permiso de la clase A1.',
  },
  {
    question: 'Con el permiso B, ¿está permitido conducir un taxi en servicio?',
    answers: [
      'Sí.',
      'No, es necesario el permiso de la clase C1.',
      'En vías urbanas sí, en vías interurbanas no.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Un tractor agrícola de más de 3.500 kilogramos de MMA, ¿se puede conducir con el permiso B?',
    answers: [
      'No, porque sobrepasa los 3.500 kilogramos de masa máxima autorizada.',
      'Sí.',
      'Sí, cuando la velocidad máxima autorizada no exceda de 40 km/h.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Conducir, con un permiso de la clase B, un turismo que arrastra un remolque ligero, ¿está permitido?',
    answers: [
      'Sí, si el turismo se puede conducir con el permiso de la clase B.',
      'No, en ningún caso.',
      'Solo si la masa máxima autorizada del conjunto no supera los 3.500 kilogramos.',
    ],
    correct:
      'Sí, si el turismo se puede conducir con el permiso de la clase B.',
  },
  {
    question:
      '¿Qué requisitos mínimos son necesarios para conducir un turismo de 3.000 kg de MMA que arrastra un remolque de 800 kg de MMA?',
    answers: [
      'Ser titular del permiso de la clase B+E.',
      'Ser titular del permiso de la clase B y haber superado las pruebas de control de aptitudes y comportamientos para la obtención del código 96.',
      'Solo ser titular del permiso de la clase B.',
    ],
    correct:
      'Ser titular del permiso de la clase B y haber superado las pruebas de control de aptitudes y comportamientos para la obtención del código 96.',
  },
  {
    question:
      'El permiso de la clase B autoriza la conducción de ciertos automóviles impulsados por combustibles alternativos con una MMA no superior a 4.250 kg…',
    answers: [
      'con una antigüedad del permiso superior a dos años y únicamente dentro del territorio de la Unión Europea.',
      'con independencia de la antigüedad del permiso, pero se podrán conducir únicamente dentro del territorio español.',
      'con una antigüedad del permiso superior a dos años y únicamente dentro del territorio español.',
    ],
    correct:
      'con una antigüedad del permiso superior a dos años y únicamente dentro del territorio español.',
  },
  {
    question:
      'Si tiene el permiso de la clase B desde hace más de un año y ahora obtiene el de la clase A2, ¿está obligado a llevar una placa L en su motocicleta?',
    answers: [
      'Sí durante un año, en la parte trasera.',
      'No.',
      'Sí, en la parte delantera, durante un año.',
    ],
    correct: 'No.',
  },
  {
    question: '¿Qué plazo de vigencia tiene el permiso de la clase B?',
    answers: [
      '10 años, hasta que el titular cumpla los 65 años de edad.',
      '5 años, hasta que el titular cumpla los 45 años de edad.',
      '10 años, hasta que el titular cumpla los 70 años de edad.',
    ],
    correct: '10 años, hasta que el titular cumpla los 65 años de edad.',
  },
  {
    question:
      'El titular de un permiso de conducción deberá comunicar a la Jefatura Provincial de Tráfico el cambio de su domicilio dentro del plazo de...',
    answers: ['30 días.', '15 días.', '10 días.'],
    correct: '15 días.',
  },
  {
    question:
      'Para poder circular, ¿qué vehículos deben tener obligatoriamente el permiso de circulación?',
    answers: [
      'Los vehículos, remolques y semirremolques de masa máxima autorizada superior o igual a 750 kilogramos.',
      'Los vehículos, remolques y semirremolques de masa máxima autorizada superior o igual a 750 kilogramos y ciclomotores.',
      'Los vehículos a motor, remolques y semirremolques de masa máxima autorizada superior a 750 kilogramos y ciclomotores.',
    ],
    correct:
      'Los vehículos a motor, remolques y semirremolques de masa máxima autorizada superior a 750 kilogramos y ciclomotores.',
  },
  {
    question:
      'Para saber la fecha en que se debe pasar la primera ITV, la antigüedad de un vehículo empieza a contar a partir de...',
    answers: [
      'la fecha de la primera matriculación.',
      'el día de la compra del vehículo.',
      'la fecha en que pasó la inspección de fábrica.',
    ],
    correct: 'la fecha de la primera matriculación.',
  },
  {
    question:
      'Si vende su vehículo, ¿debe comunicarlo a la Jefatura de Tráfico?',
    answers: [
      'Sí, pero no hay plazo obligatorio para comunicar la venta.',
      'Sí. Debo comunicar la venta en el plazo de 10 días, indicando los datos del nuevo titular.',
      'No. El nuevo titular es el que tiene que comunicar la compra.',
    ],
    correct:
      'Sí. Debo comunicar la venta en el plazo de 10 días, indicando los datos del nuevo titular.',
  },
  {
    question:
      'Los remolques ligeros con más de dos años de antigüedad, ¿deben pasar la ITV?',
    answers: [
      'Sí, cada dos años.',
      'Sí, cuando pase la ITV el automóvil al que van enganchados.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: '¿Cuándo debe pasar un turismo la primera inspección técnica?',
    answers: [
      'A los 3 años, a partir de la fecha de la primera matriculación.',
      'A los 4 años, a partir de la fecha de fabricación o importación.',
      'A los 4 años, a partir de la fecha de la primera matriculación.',
    ],
    correct: 'A los 4 años, a partir de la fecha de fabricación o importación.',
  },
  {
    question: '¿Quién es el responsable de pasar la ITV a un turismo?',
    answers: [
      'El titular del vehículo.',
      'El tomador del seguro.',
      'El conductor habitual.',
    ],
    correct: 'El titular del vehículo.',
  },
  {
    question:
      'Si se matricula hoy una caravana de la categoría O2 para llevarla enganchada a un turismo, ¿cada cuánto tiempo debe presentarla a inspección técnica periódica durante los primeros seis años?',
    answers: [
      'Cada dos años.',
      'Cada tres años.',
      'Está exenta durante los seis primeros años.',
    ],
    correct: 'Está exenta durante los seis primeros años.',
  },
  {
    question:
      'Las motocicletas con más de cinco años de antigüedad deben pasar la ITV...',
    answers: ['cada cinco años.', 'cada año.', 'cada dos años.'],
    correct: 'cada dos años.',
  },
  {
    question:
      'Un furgón de hasta 3.500 kg de 5 años de antigüedad, ¿cuándo debe pasar la inspección técnica?',
    answers: [
      'Bienal, hasta los seis años.',
      'Bienal, hasta los 10 años.',
      'Anual, hasta los seis años.',
    ],
    correct: 'Bienal, hasta los seis años.',
  },
  {
    question:
      'Un turismo con once años de antigüedad debe someterse a la inspección técnica periódica…',
    answers: ['cada cuatro años.', 'cada dos años.', 'cada año.'],
    correct: 'cada año.',
  },
  {
    question:
      'Un turismo acaba de pasar satisfactoriamente la primera inspección técnica periódica, ¿cuándo debe pasar la siguiente?',
    answers: ['Al año siguiente.', 'Pasados cuatro años.', 'Pasados dos años.'],
    correct: 'Pasados dos años.',
  },
  {
    question:
      'El seguro obligatorio, ¿cubre los daños en la persona del conductor del vehículo asegurado?',
    answers: [
      'Sí, en todo caso.',
      'No.',
      'Sí, salvo cuando el conductor es el tomador del seguro.',
    ],
    correct: 'No.',
  },
  {
    question: 'El seguro obligatorio, ¿cubre los daños del vehículo asegurado?',
    answers: [
      'Sí, cuando su conductor no sea culpable del accidente.',
      'No.',
      'Sí.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Los usuarios de las vías cuyo vehículo haya sufrido un accidente, ¿tienen permitido cumplimentar el parte de accidente en la plataforma de circulación?',
    answers: [
      'Sí, cuando se realice en los arcenes de la vía, nunca en la calzada.',
      'No, se llevará a cabo en un lugar seguro fuera de la vía.',
      'Sí, siempre que lo hagan con las debidas condiciones de seguridad.',
    ],
    correct: 'No, se llevará a cabo en un lugar seguro fuera de la vía.',
  },
  {
    question:
      'En caso de accidente, el seguro obligatorio de un vehículo, ¿cubre los daños producidos a la parte contraria?',
    answers: [
      'Sí, siempre, pues así se contempla en la póliza del seguro obligatorio.',
      'Sí, en todo caso, si los gastos no superan los límites establecidos en la póliza.',
      'Sí, cuando su conductor resulta civilmente responsable del accidente, excepto si el vehículo hubiera sido robado.',
    ],
    correct:
      'Sí, cuando su conductor resulta civilmente responsable del accidente, excepto si el vehículo hubiera sido robado.',
  },
  {
    question:
      'Uno de los pasajeros adultos del turismo que usted conduce no lleva puesto el cinturón de seguridad. Si un agente de la autoridad denuncia la infracción, ¿quién es el responsable?',
    answers: ['El pasajero.', 'El tomador del seguro.', 'El conductor.'],
    correct: 'El pasajero.',
  },
  {
    question:
      'El tiempo desde que ve un peligro hasta que actúa, ¿cómo se llama?',
    answers: [
      'Tiempo de frenado.',
      'Tiempo de reacción.',
      'Tiempo de detención.',
    ],
    correct: 'Tiempo de reacción.',
  },
  {
    question:
      '¿Puede aumentar la distancia de reacción si ha consumido alcohol?',
    answers: [
      'Sí, porque el tiempo de reacción aumenta.',
      'No, porque el vehículo siempre recorre los mismos metros.',
      'No, porque el tiempo de reacción no varía.',
    ],
    correct: 'Sí, porque el tiempo de reacción aumenta.',
  },
  {
    question: 'El consumo de drogas, ¿afecta a la capacidad de reacción?',
    answers: ['Sí, aumentándola.', 'No.', 'Sí, disminuyéndola.'],
    correct: 'Sí, disminuyéndola.',
  },
  {
    question: 'El tiempo de reacción puede verse incrementado...',
    answers: [
      'después de una fuerte discusión.',
      'después de una comida ligera.',
      'si usamos gafas graduadas.',
    ],
    correct: 'después de una fuerte discusión.',
  },
  {
    question: 'A medida que aumenta la velocidad...',
    answers: [
      'disminuye el campo visual y se retrasa la aparición de la fatiga.',
      'disminuye el campo visual y se acelera la aparición de la fatiga.',
      'aumenta el campo visual y se acelera la aparición de la fatiga.',
    ],
    correct:
      'disminuye el campo visual y se acelera la aparición de la fatiga.',
  },
  {
    question:
      'En general, ¿dónde suelen producirse más accidentes por distracción?',
    answers: [
      'En carreteras con trazado sinuoso.',
      'En autopistas y autovías.',
      'En vías urbanas.',
    ],
    correct: 'En autopistas y autovías.',
  },
  {
    question: 'Los accidentes debidos a distracciones suceden más...',
    answers: [
      'durante el día y los fines de semana.',
      'durante la tarde.',
      'en los meses de invierno.',
    ],
    correct: 'durante el día y los fines de semana.',
  },
  {
    question:
      'La vía, su entorno y el propio vehículo, ¿pueden favorecer la aparición de distracciones al volante?',
    answers: [
      'Sí, el vehículo y la vía pero no su entorno.',
      'Sí, la vía pero no su entorno.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question: 'Los accidentes por distracción son más frecuentes...',
    answers: [
      'en los conductores entre 30 y 45 años.',
      'en los mayores de 50 años.',
      'en los jóvenes entre 18 y 25 años y en los mayores de 70.',
    ],
    correct: 'en los jóvenes entre 18 y 25 años y en los mayores de 70.',
  },
  {
    question: 'Un factor que favorece la distracción del conductor es...',
    answers: [
      'la alta luminosidad del ambiente.',
      'una situación de tráfico excesivamente sencilla.',
      'la baja luminosidad del ambiente.',
    ],
    correct: 'la baja luminosidad del ambiente.',
  },
  {
    question:
      '¿Cuál de las siguientes situaciones favorece la distracción al conducir?',
    answers: [
      'Una carretera excesivamente familiar.',
      'Una situación de tráfico compleja.',
      'Conducir durante la noche por vías bien iluminadas.',
    ],
    correct: 'Una carretera excesivamente familiar.',
  },
  {
    question:
      '¿Se pueden sufrir más distracciones por los efectos del alcohol?',
    answers: [
      'No.',
      'Sí, especialmente en situaciones complejas.',
      'No, si la tasa de alcoholemia es inferior a la máxima permitida.',
    ],
    correct: 'Sí, especialmente en situaciones complejas.',
  },
  {
    question:
      'Buscar una emisora de radio o manipular el reproductor de música, ¿puede distraer al conductor?',
    answers: [
      'Solo si las emisoras de radio no están guardadas en memoria.',
      'Sí, aumentando el riesgo de accidente.',
      'No.',
    ],
    correct: 'Sí, aumentando el riesgo de accidente.',
  },
  {
    question:
      'Buscar una emisora de radio o manipular el reproductor de música, ¿puede distraer al conductor?',
    answers: [
      'Solo si las emisoras de radio no están guardadas en memoria.',
      'Sí, aumentando el riesgo de accidente.',
      'No.',
    ],
    correct: 'Sí, aumentando el riesgo de accidente.',
  },
  {
    question: 'Fumar mientras conduce, ¿puede afectar a la conducción?',
    answers: [
      'Sí, porque distrae y se pierde capacidad de maniobra.',
      'No, y además relaja.',
      'Sí, además está prohibido.',
    ],
    correct: 'Sí, porque distrae y se pierde capacidad de maniobra.',
  },
  {
    question:
      'Hablar por un teléfono móvil con dispositivo de manos libres durante la conducción…',
    answers: [
      'tiene un cierto riesgo debido a la pérdida de atención.',
      'permite mantener sin riesgo largas conversaciones al volante.',
      'está prohibido.',
    ],
    correct: 'tiene un cierto riesgo debido a la pérdida de atención.',
  },
  {
    question:
      'El accidente más frecuente por el uso del teléfono móvil, mientras se conduce, es...',
    answers: [
      'el choque frontalateral.',
      'la salida de la vía.',
      'el alcance.',
    ],
    correct: 'la salida de la vía.',
  },
  {
    question:
      '¿Qué efectos tiene en la conducción una conversación por el móvil que supere el minuto y medio?',
    answers: [
      'La velocidad media aumenta, incluso con el dispositivo de manos libres.',
      'El conductor deja de percibir una parte importante de las señales, incluso con el dispositivo de manos libres.',
      'El conductor no deja de percibir las señales si usa el dispositivo de manos libres.',
    ],
    correct:
      'El conductor deja de percibir una parte importante de las señales, incluso con el dispositivo de manos libres.',
  },
  {
    question:
      'Entre los momentos de peligro en el uso del teléfono móvil se encuentran...',
    answers: [
      'colgar y guardar el móvil.',
      'recibir una llamada y detenerse en un lugar seguro para hablar.',
      'no utilizar el teléfono móvil.',
    ],
    correct: 'colgar y guardar el móvil.',
  },
  {
    question: 'El navegador GPS, ¿puede ser peligroso para la conducción?',
    answers: [
      'Sí, cuando produce distracciones.',
      'Sí, cuando nos lleva por una ruta distinta a la habitual.',
      'No, es de gran ayuda a la conducción.',
    ],
    correct: 'Sí, cuando produce distracciones.',
  },
  {
    question: '¿Cómo debe colocar el navegador GPS portátil en el vehículo?',
    answers: [
      'A una distancia de entre 10 y 25 centímetros.',
      'Delante del volante.',
      'Donde no estorpezca la visión y nunca cerca de un airbag.',
    ],
    correct: 'Donde no estorpezca la visión y nunca cerca de un airbag.',
  },
  {
    question:
      'Con el vehículo en movimiento, ¿puede el conductor poner en marcha un navegador GPS?',
    answers: [
      'No, ya que es incompatible con la obligatoria atención a la conducción.',
      'Sí, mientras que no entorpezca el manejo del vehículo.',
      'Sí, ya que no supone ningún peligro.',
    ],
    correct:
      'No, ya que es incompatible con la obligatoria atención a la conducción.',
  },
  {
    question: 'Si lleva instalado un navegador GPS debe tener en cuenta que…',
    answers: [
      'las instrucciones del navegador deben prevalecer en todo momento.',
      'el criterio del conductor debe prevalecer en todo momento.',
      'debe mirar siempre al mapa de la pantalla.',
    ],
    correct: 'el criterio del conductor debe prevalecer en todo momento.',
  },
  {
    question: 'Un asiento ergonómico contribuye a...',
    answers: [
      'aumentar la aparición de la fatiga.',
      'prevenir la aparición de la fatiga.',
      'aumentar las distracciones.',
    ],
    correct: 'prevenir la aparición de la fatiga.',
  },
  {
    question: '¿Qué puede favorecer la aparición de fatiga?',
    answers: [
      'Una vía en perfecto estado.',
      'Un buen diseño de los elementos interiores del vehículo.',
      'La existencia de defectos en la dirección o suspensión del vehículo.',
    ],
    correct:
      'La existencia de defectos en la dirección o suspensión del vehículo.',
  },
  {
    question:
      'Conducir a una velocidad elevada puede producir en el conductor...',
    answers: [
      'la aparición de la fatiga.',
      'una pérdida de orientación.',
      'el efecto submarino.',
    ],
    correct: 'la aparición de la fatiga.',
  },
  {
    question: 'Conducir con mal tiempo, ¿puede favorece la fatiga?',
    answers: [
      'Sí, por ello se debe descansar con mayor frecuencia.',
      'Solo en los viajes largos.',
      'No.',
    ],
    correct: 'Sí, por ello se debe descansar con mayor frecuencia.',
  },
  {
    question: '¿Qué efecto produce la fatiga?',
    answers: [
      'Resulta más fácil mantener la concentración.',
      'Aumenta el campo visual.',
      'La sensibilidad auditiva puede disminuir.',
    ],
    correct: 'La sensibilidad auditiva puede disminuir.',
  },
  {
    question: 'La fatiga hace que...',
    answers: [
      'se asuman menos riesgos al volante.',
      'se conduzca de manera mucho más pasiva.',
      'disminuyan las conductas hostiles o agresivas.',
    ],
    correct: 'se conduzca de manera mucho más pasiva.',
  },
  {
    question: 'Entre otros, ¿qué síntoma es indicio de fatiga?',
    answers: [
      'Sensación unas veces de frío y otras de calor.',
      'Movimientos constantes en el asiento.',
      'Disminución del tiempo de reacción.',
    ],
    correct: 'Movimientos constantes en el asiento.',
  },
  {
    question:
      '¿Cuáles son las horas especialmente propicias para la aparición del sueño en el conductor?',
    answers: [
      'Las horas de la madrugada y las primeras horas de la tarde.',
      'Las últimas horas de la mañana.',
      'Las últimas horas de la tarde y las primeras de la mañana.',
    ],
    correct: 'Las horas de la madrugada y las primeras horas de la tarde.',
  },
  {
    question:
      'Para evitar un accidente, un conductor con fatiga al volante debe parar a descansar de forma adecuada cuanto antes porque...',
    answers: [
      'la agudeza visual aumenta y se ven los objetos borrosos.',
      'el sueño puede aparecer de un momento a otro.',
      'los efectos de la fatiga hacen que el conductor dé positivo en un control de alcoholemia.',
    ],
    correct: 'el sueño puede aparecer de un momento a otro.',
  },
  {
    question:
      'El uso de sustancias estimulantes como el café, ¿resulta útil para vencer el sueño?',
    answers: [
      'Sí, puede resultar útil a corto plazo, pero lo más recomendable para evitar el sueño es descansar.',
      'Sí, puede resultar útil porque ayudan a mantener la atención del conductor a largo plazo.',
      'No, en ningún caso.',
    ],
    correct:
      'Sí, puede resultar útil a corto plazo, pero lo más recomendable para evitar el sueño es descansar.',
  },
  {
    question: '¿Es recomendable descansar durante los viajes?',
    answers: [
      'No, porque se alarga el tiempo del viaje y aumenta la fatiga del conductor.',
      'Sí, 20-30 minutos cada 2 horas de conducción o cada 200 kilómetros.',
      'No, si el viaje es por vías interurbanas.',
    ],
    correct:
      'Sí, 20-30 minutos cada 2 horas de conducción o cada 200 kilómetros.',
  },
  {
    question:
      'El sistema de advertencia de somnolencia y distracción (DDR), ¿analiza los patrones de conducción y las reacciones del conductor para detectar si hay cansancio en el conductor?',
    answers: [
      'No, utiliza un sistema de sensores situados en el volante que miden la temperatura corporal del conductor.',
      'Sí.',
      'No, solamente realiza un seguimiento de varios aspectos de la cara y los combina con datos de circulación.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'En situaciones en las que el conductor pierde la concentración al volante, ya sea por fatiga o sueño, el sistema de advertencia de somnolencia y distracción (DDR)…',
    answers: [
      'detiene automáticamente el vehículo para así evitar accidentes.',
      'alerta al conductor antes de que ocurra un accidente para que se tome un descanso.',
      'alerta al conductor de que el sistema procederá a detener el vehículo para que estacione correctamente.',
    ],
    correct:
      'alerta al conductor antes de que ocurra un accidente para que se tome un descanso.',
  },
  {
    question: '¿Qué es un microsueño?',
    answers: [
      'Un periodo corto de descanso que el conductor realiza cuando siente fatiga.',
      'Un periodo de unos segundos durante el cual el conductor sueña mientras está conduciendo.',
      'Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.',
    ],
    correct:
      'Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.',
  },
  {
    question: 'El alcohol es siempre peligroso para la seguridad vial...',
    answers: [
      'excepto si se consume en pequeñas cantidades.',
      'aunque sea consumido en pequeñas cantidades.',
      'salvo para quienes estén habituados a su consumo.',
    ],
    correct: 'aunque sea consumido en pequeñas cantidades.',
  },
  {
    question:
      'Como norma general, está prohibido conducir turismos con una tasa de alcohol en sangre superior a...',
    answers: [
      '0,3 gramos por litro.',
      '0,5 gramos por litro.',
      '0,8 gramos por litro.',
    ],
    correct: '0,5 gramos por litro.',
  },
  {
    question:
      '¿Cuál es la tasa de alcohol en aire espirado que no podrá superar el conductor de un vehículo que realiza transporte escolar?',
    answers: [
      '0,15 miligramo por litro de aire espirado.',
      '0,25 miligramos por litro de aire espirado.',
      '0,3 miligramros por litro de aire espirado.',
    ],
    correct: '0,15 miligramo por litro de aire espirado.',
  },
  {
    question:
      'Tiene el permiso A1 desde hace dos años y acaba de obtener el B, ¿cuál será la tasa máxima de alcohol permitida cuando conduzca un turismo?',
    answers: [
      '0,25 miligramos de alcohol por litro de aire espirado.',
      '0,15 miligramos de alcohol por litro de aire espirado.',
      '0,30 miligramos de alcohol por litro de aire espirado.',
    ],
    correct: '0,25 miligramos de alcohol por litro de aire espirado.',
  },
  {
    question: 'En general, ¿a quiénes afecta más el alcohol?',
    answers: [
      'A las mujeres.',
      'A los hombres.',
      'Los efectos del alcohol no dependen del sexo de la persona.',
    ],
    correct: 'A las mujeres.',
  },
  {
    question:
      'Para conducir un camión de menos de 3.500 kg de MMA, la tasa máxima autorizada de alcohol en aire espirado es...',
    answers: [
      '0,15 miligramos por litro.',
      '0,30 miligramos por litro.',
      '0,25 miligramos por litro.',
    ],
    correct: '0,25 miligramos por litro.',
  },
  {
    question:
      'Los dos primeros años de su primer permiso, ¿cuál es la tasa máxima de alcohol si es mayor de edad?',
    answers: [
      '0,15 mg/l en aire espirado = 0,3 g/l en sangre.',
      '0,10 mg/l en aire espirado = 0,2 g/l en sangre.',
      '0,25 mg/l en aire espirado = 0,5 g/l en sangre.',
    ],
    correct: '0,15 mg/l en aire espirado = 0,3 g/l en sangre.',
  },
  {
    question:
      'Un conductor con tres años de antigüedad en el permiso AM acaba de obtener el permiso B. ¿Cuál es su tasa máxima permitida de alcohol?',
    answers: [
      '0,25 miligramos por litro de aire expirado.',
      '0,30 miligramos por litro de aire expirado.',
      '0,15 miligramos por litro de aire expirado.',
    ],
    correct: '0,25 miligramos por litro de aire expirado.',
  },
  {
    question:
      'Un conductor que tenga un resultado positivo en una prueba de detección de alcoholemia...',
    answers: [
      'solo puede ser sancionado con una multa de hasta 600 euros.',
      'pierde entre 4 y 6 puntos de su permiso de conducir.',
      'pierde 2 puntos de su permiso de conducir.',
    ],
    correct: 'pierde entre 4 y 6 puntos de su permiso de conducir.',
  },
  {
    question:
      'La tasa máxima de alcohol en aire espirado para conducir vehículos que transportan mercancías peligrosas...',
    answers: [
      'es de 0,3 miligramos por litro en aire espirado.',
      'depende de la masa máxima autorizada del vehículo con el que se realice el transporte.',
      'es de 0,15 miligramos por litro en aire espirado.',
    ],
    correct: 'es de 0,15 miligramos por litro en aire espirado.',
  },
  {
    question:
      'Para una persona mayor de edad, ¿cuál es la tasa máxima de alcohol permitida para poder conducir un vehículo de movilidad personal?',
    answers: [
      '0,15 miligramos por litro de aire aspirado.',
      'Los conductores de vehículos de movilidad personal no tienen tasa máxima de alcoholemia.',
      '0,25 miligramos por litro de aire aspirado.',
    ],
    correct: '0,25 miligramos por litro de aire aspirado.',
  },
  {
    question: 'El efecto de la alcoholemia alcanza su máximo nivel...',
    answers: [
      'dos horas después de tomar la última copa.',
      'entre 30 y 90 minutos después de haber ingerido el alcohol.',
      'inmediatamente después de tomar la última copa.',
    ],
    correct: 'entre 30 y 90 minutos después de haber ingerido el alcohol.',
  },
  {
    question:
      'Durmiendo un poco, ¿se consigue eliminar más rápidamente el alcohol?',
    answers: [
      'No.',
      'Sí, si se duerme un par de horas.',
      'Sí, cuando se duerme bien.',
    ],
    correct: 'No.',
  },
  {
    question:
      'El tiempo de absorción del alcohol, ¿depende de la bebida ingerida?',
    answers: [
      'Sí, se absorbe más rápidamente el alcohol de las bebidas destiladas.',
      'No, la absorción se realiza por el organismo a un ritmo constante, independientemente de la bebida.',
      'Sí, se absorbe más rápidamente el alcohol de las bebidas fermentadas.',
    ],
    correct:
      'Sí, se absorbe más rápidamente el alcohol de las bebidas destiladas.',
  },
  {
    question:
      'El consumo de alcohol, ¿altera la posibilidad de deslumbramiento de un conductor?',
    answers: ['Sí, la disminuye.', 'Sí, la aumenta.', 'No, en ningún caso.'],
    correct: 'Sí, la aumenta.',
  },
  {
    question:
      'Uno de los efectos que algunas drogas pueden producir en el conductor es...',
    answers: [
      'la disminución de la distancia de detección.',
      'la ampliación del campo visual.',
      'la incorrecta percepción del tiempo y del espacio.',
    ],
    correct: 'la incorrecta percepción del tiempo y del espacio.',
  },
  {
    question:
      'Los efectos que provoca el LSD en el comportamiento del conductor...',
    answers: [
      'pueden llegar a prolongarse de 10 a 12 horas desde su consumo.',
      'proporcionan un estado de relajación.',
      'son muy breves, pero pueden reaparecer por sorpresa algún tiempo después.',
    ],
    correct: 'pueden llegar a prolongarse de 10 a 12 horas desde su consumo.',
  },
  {
    question:
      'El consumo de éxtasis, ¿cómo afecta en el comportamiento del conductor?',
    answers: [
      'Reduce su sensibilidad al deslumbramiento.',
      'Disminuye su capacidad de concentración.',
      'Provoca un agotamiento físico y mental mientras que están presentes los síntomas.',
    ],
    correct: 'Disminuye su capacidad de concentración.',
  },
  {
    question:
      '¿Qué efectos puede producir en el conductor el consumo de éxtasis?',
    answers: [
      'Disminución del tiempo de reacción.',
      'Aumento de la capacidad de concentración.',
      'Episodios de depresión o ansiedad.',
    ],
    correct: 'Episodios de depresión o ansiedad.',
  },
  {
    question: 'El consumo de LSD produce en el conductor…',
    answers: [
      'alucinaciones y distorsiones en la percepción.',
      'estabilidad emocional.',
      'fatiga.',
    ],
    correct: 'alucinaciones y distorsiones en la percepción.',
  },
  {
    question: '¿Cómo afecta el consumo de cocaína a la conducción?',
    answers: [
      'El conductor desarrolla un comportamiento menos agresivo.',
      'Disminuye la capacidad de concentración del conductor.',
      'La percepción del conductor no variará.',
    ],
    correct: 'Disminuye la capacidad de concentración del conductor.',
  },
  {
    question: 'Los efectos del cannabis afectan a la conducción por una...',
    answers: [
      'conducta más agresiva.',
      'alteración de la percepción del entorno.',
      'menor dificultad para calcular las distancias.',
    ],
    correct: 'alteración de la percepción del entorno.',
  },
  {
    question:
      'Los agentes podrán someter a la prueba de detección de estupefacientes, psicotrópicos u otras sustancias análogas a...',
    answers: [
      'los conductores que sean denunciados por alguna infracción.',
      'cualquier usuario de la vía o conductor de vehículo.',
      'cualquier usuario de la vía con síntomas de estar bajo sus efectos.',
    ],
    correct: 'los conductores que sean denunciados por alguna infracción.',
  },
  {
    question:
      'En un control preventivo, ¿quiénes están obligados a someterse a las pruebas que se establezcan para la detección de alcoholemia?',
    answers: [
      'Todos los usuarios de la vía.',
      'Únicamente los conductores de vehículos a motor.',
      'Los conductores de bicicletas.',
    ],
    correct: 'Los conductores de bicicletas.',
  },
  {
    question:
      'Si a un conductor se le detecta una tasa de 0,3 miligramos por litro de aire espirado, ¿puede el agente solicitar una segunda prueba?',
    answers: [
      'Sí, pero debe transcurrir entre la realización de la primera y la segunda prueba un tiempo mínimo de 10 minutos.',
      'Sí, pero la segunda prueba solo se podrá realizar mediante análisis de sangre.',
      'No y además los agentes procederán a inmovilizar el vehículo.',
    ],
    correct:
      'Sí, pero debe transcurrir entre la realización de la primera y la segunda prueba un tiempo mínimo de 10 minutos.',
  },
  {
    question:
      'La conducción bajo los efectos del alcohol o de las drogas, ¿está considerada delito en el código penal?',
    answers: [
      'No, las sanciones son exclusivamente económicas.',
      'Solo cuando el conductor sea responsable de un accidente con víctimas mortales.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Los agentes de tráfico inmovilizan un vehículo cuando su conductor tiene una tasa de alcohol mayor de la permitida. ¿Cuándo se dejará sin efecto dicha inmovilización?',
    answers: [
      'Cuando el agente entregue al conductor el boletín de denuncia.',
      'Cuando desaparezca la causa que la motivó.',
      'Cuando el conductor viaje con menores de edad.',
    ],
    correct: 'Cuando desaparezca la causa que la motivó.',
  },
  {
    question:
      'Las pruebas de detección de sustancias estupefacientes, ¿son obligatorias?',
    answers: [
      'No, las únicas pruebas obligatorias son las de alcoholemia.',
      'Sí, pero solo cuando el conductor esté implicado en un accidente.',
      'Sí, igual que las pruebas de investigación de alcoholemia.',
    ],
    correct: 'Sí, igual que las pruebas de investigación de alcoholemia.',
  },
  {
    question: 'Los síntomas de las alergias respiratorias pueden producir...',
    answers: [
      'un retraso en la aparición del sueño.',
      'una menor capacidad para mantener la concentración en el tráfico.',
      'una disminución del tiempo de reacción.',
    ],
    correct:
      'una menor capacidad para mantener la concentración en el tráfico.',
  },
  {
    question: 'Las gripes, resfriados y alergias, ¿afectan a la conducción?',
    answers: [
      'No, apenas tienen efectos negativos.',
      'Sí, y resultan tan familiares que a veces se olvidan sus síntomas.',
      'Sí, pero resultan tan familiares que no es necesario tomar precauciones especiales.',
    ],
    correct:
      'Sí, y resultan tan familiares que a veces se olvidan sus síntomas.',
  },
  {
    question:
      'Todas las enfermedades, ¿son igual de peligrosas para la conducción?',
    answers: [
      'No, las enfermedades crónicas no son peligrosas.',
      'Sí, todas las enfermedades son igual de peligrosas.',
      'No, algunos trastornos neurológicos y enfermedades mentales son más peligrosas.',
    ],
    correct:
      'No, algunos trastornos neurológicos y enfermedades mentales son más peligrosas.',
  },
  {
    question:
      'Las medicinas alternativas o naturales, ¿pueden producir efectos negativos en la conducción?',
    answers: [
      'No, porque no se consideran medicamentos.',
      'Sí, siempre.',
      'Sí, en determinados casos.',
    ],
    correct: 'Sí, en determinados casos.',
  },
  {
    question: 'El estrés, ¿qué efectos puede tener sobre el conductor?',
    answers: [
      'Comportamientos excesivamente prudentes.',
      'Disminución de la fatiga y el sueño.',
      'La toma de decisiones al volante puede ser más lenta.',
    ],
    correct: 'La toma de decisiones al volante puede ser más lenta.',
  },
  {
    question: 'El estrés hace que el conductor...',
    answers: [
      'asuma menos riesgos.',
      'sea más hostil con los demás usuarios.',
      'respete más la señalización.',
    ],
    correct: 'sea más hostil con los demás usuarios.',
  },
  {
    question:
      'Si conduce, y se encuentra en tratamiento médico con medicamentos, debe saber...',
    answers: [
      'que hay medicamentos que influyen negativamente en la atención y el tiempo de reacción.',
      'que está totalmente prohibido conducir si se toma algún medicamento.',
      'que los medicamentos recetados por el médico, no influyen en la capacidad para conducir.',
    ],
    correct:
      'que hay medicamentos que influyen negativamente en la atención y el tiempo de reacción.',
  },
  {
    question:
      'Los medicamentos que no necesitan receta médica, ¿afectan a la conducción?',
    answers: [
      'Sí, todos los medicamentos afectan a la conducción.',
      'Sí, algunos pueden tener efectos negativos.',
      'No.',
    ],
    correct: 'Sí, algunos pueden tener efectos negativos.',
  },
  {
    question:
      'La depresión es una grave enfermedad que se sufre cada vez con más frecuencia. Si se padece debemos saber que...',
    answers: [
      'no debemos conducir hasta pasada al menos una hora de habernos medicado.',
      'no es recomendable conducir de noche o por entornos monótonos o durante muchas horas.',
      'si no nos medicamos no tiene efectos sobre la conducción.',
    ],
    correct:
      'no es recomendable conducir de noche o por entornos monótonos o durante muchas horas.',
  },
  {
    question:
      'La depresión es una grave enfermedad que se sufre cada vez con más frecuencia. Si se padece debemos saber que...',
    answers: [
      'no debemos conducir hasta pasada al menos una hora de habernos medicado.',
      'tiene un claro efecto sobre nuestras capacidades para conducir un vehículo con seguridad.',
      'si no nos medicamos no tiene efectos sobre la conducción.',
    ],
    correct:
      'tiene un claro efecto sobre nuestras capacidades para conducir un vehículo con seguridad.',
  },
  {
    question: 'Bajo los efectos de la depresión...',
    answers: [
      'disminuyen las distracciones.',
      'se tiene más seguridad.',
      'se pierde información del entorno.',
    ],
    correct: 'se pierde información del entorno.',
  },
  {
    question: 'La depresión, ¿qué efectos produce en la conducción?',
    answers: [
      'Ansiedad y tranquilidad.',
      'Ninguno.',
      'Distractiones y somnolencia.',
    ],
    correct: 'Distractiones y somnolencia.',
  },
  {
    question:
      'Los antihistamínicos modernos, ¿son más seguros para la conducción?',
    answers: [
      'No, producen somnolencia como todos los antihistamínicos.',
      'Sí, ya que pueden mezclarse sin problemas con otros medicamentos.',
      'Sí, pero no deben mezclarse con alcohol o con otros medicamentos.',
    ],
    correct:
      'Sí, pero no deben mezclarse con alcohol o con otros medicamentos.',
  },
  {
    question:
      'Ante un tratamiento farmacológico, ¿reaccionan todas las personas de igual forma?',
    answers: [
      'No, ya que circunstancias individuales como la fatiga o estar en ayunas pueden variar los efectos.',
      'Sí, ya que los medicamentos siempre producen los mismos efectos.',
      'No, depende únicamente del estado físico.',
    ],
    correct:
      'No, ya que circunstancias individuales como la fatiga o estar en ayunas pueden variar los efectos.',
  },
  {
    question: '¿Qué medicamentos deben llevar el símbolo de la imagen?',
    answers: [
      'Únicamente los antihistamínicos.',
      'Los que afectan a la conducción.',
      'Los que son inofensivos para la conducción.',
    ],
    correct: 'Los que afectan a la conducción.',
  },
  {
    question: 'Si está tomando medicamentos y va a conducir…',
    answers: [
      'no es necesario tomar ninguna precaución cuando no se necesita receta médica para poder comprarlos.',
      'debe leer las indicaciones del prospecto y, en caso de duda, consultar al médico o al farmacéutico.',
      'debe esperar al menos dos horas antes de conducir.',
    ],
    correct:
      'debe leer las indicaciones del prospecto y, en caso de duda, consultar al médico o al farmacéutico.',
  },
  {
    question:
      'Después de ingerir medicamentos tranquilizantes, el tiempo de reacción…',
    answers: ['no varía.', 'disminuye.', 'aumenta.'],
    correct: 'aumenta.',
  },
  {
    question: 'Uno de los efectos que pueden producir los ansiolíticos es...',
    answers: [
      'la aparición de periodos de somnolencia.',
      'el aumento de la agudeza visual.',
      'la disminución de la sensibilidad al deslumbramiento.',
    ],
    correct: 'la aparición de periodos de somnolencia.',
  },
  {
    question: 'Los fármacos hipnóticos hacen que...',
    answers: [
      'aumente el campo visual.',
      'aumente el tiempo de reacción.',
      'disminuya el tiempo de reacción.',
    ],
    correct: 'aumente el tiempo de reacción.',
  },
  {
    question:
      'Los efectos secundarios de los medicamentos que alteran la capacidad de conducción, ¿se manifiestan de la misma manera en todas las personas?',
    answers: [
      'No, pueden variar por diversos factores, como el hábito de consumo o el estado físico del conductor.',
      'Sí, sus efectos son idénticos para todas las personas.',
      'Solo si el tratamiento médico se prolonga en el tiempo.',
    ],
    correct:
      'No, pueden variar por diversos factores, como el hábito de consumo o el estado físico del conductor.',
  },
  {
    question: 'Las comidas copiosas pueden provocar en el conductor...',
    answers: ['nerviosismo.', 'el llamado efecto rebote.', 'somnolencia.'],
    correct: 'somnolencia.',
  },
  {
    question:
      'Es conveniente que el traje del conductor o pasajero de una motocicleta sea…',
    answers: [
      'de piel u otro material similar que protege de lesiones en caso de accidente.',
      'muy amplio y suelto porque lo más importante es la estética y la comodidad.',
      'poco vistoso y de colores apagados, para no distraer a los demás conductores.',
    ],
    correct:
      'de piel u otro material similar que protege de lesiones en caso de accidente.',
  },
  {
    question: 'Un traje adecuado para conducir una motocicleta, debe...',
    answers: [
      'estar muy ajustado al cuerpo para mejorar la estética.',
      'ser resistente a los golpes y a la abrasión en caso de caída.',
      'tener colores oscuros.',
    ],
    correct: 'ser resistente a los golpes y a la abrasión en caso de caída.',
  },
  {
    question:
      'Es recomendable que los guantes que se utilicen para conducir una motocicleta...',
    answers: [
      'sean de piel y sin dibujo.',
      'tengan protector y la máxima cantidad de masa posible.',
      'sean de piel y con dibujo.',
    ],
    correct: 'sean de piel y sin dibujo.',
  },
  {
    question:
      '¿Es adecuado conducir una motocicleta llevando como calzado unas sandalias?',
    answers: [
      'Es indiferente, el calzado no influye en la conducción de motocicletas.',
      'No.',
      'Sí.',
    ],
    correct: 'No.',
  },
  {
    question:
      'En caso de caída de la carga en la calzada, el conductor deberá...',
    answers: [
      'cortar la circulación en todo caso.',
      'retirarla lo antes posible y adoptar entre tanto las medidas necesarias para avisar al resto de usuarios.',
      'proseguir la marcha y avisar del accidente a las autoridades pertinentes.',
    ],
    correct:
      'retirarla lo antes posible y adoptar entre tanto las medidas necesarias para avisar al resto de usuarios.',
  },
  {
    question:
      'Los resaltos en los pasos para peatones, ¿se consideran obstáculos en la calzada?',
    answers: [
      'Sí, puesto que dificultan el cruce de los pasos de peatones.',
      'Sí, cuando son metálicos.',
      'No, siempre que se garantice la seguridad vial de los usuarios y especialmente de los ciclistas.',
    ],
    correct:
      'No, siempre que se garantice la seguridad vial de los usuarios y especialmente de los ciclistas.',
  },
  {
    question: 'Está prohibido arrojar a la vía objetos...',
    answers: [
      'solamente si pueden deteriorar la vía.',
      'que puedan deteriorar la vía o sus instalaciones.',
      'únicamente si pueden entorpecer la libre circulación.',
    ],
    correct: 'que puedan deteriorar la vía o sus instalaciones.',
  },
  {
    question:
      'Arrojar un cigarro encendido por la ventanilla de un turismo, ¿puede suponer una infracción?',
    answers: [
      'Sí, y además conlleva pérdida de puntos.',
      'No, pero no se debe hacer.',
      'Sí, pero no conlleva pérdida de puntos.',
    ],
    correct: 'Sí, y además conlleva pérdida de puntos.',
  },
  {
    question:
      'Los peatones, ¿tienen los mismos derechos que los conductores para utilizar las vías públicas?',
    answers: ['Solo en las calles residenciales.', 'Sí.', 'No.'],
    correct: 'Sí.',
  },
  {
    question:
      'Un conductor, ¿está obligado a colaborar en las pruebas de detección de emisión de ruidos de su vehículo?',
    answers: [
      'Sí, están obligados todos los conductores de vehículos.',
      'Sí, pero únicamente cuando pase la ITV.',
      'No, únicamente está obligado a colaborar en las pruebas de alcoholemia.',
    ],
    correct: 'Sí, están obligados todos los conductores de vehículos.',
  },
  {
    question:
      'Un vehículo tiene el silenciador del escape estropeado. ¿Está permitido circular así?',
    answers: [
      'No, pero las motos y ciclomotores pueden circular sin él.',
      'Sí, solamente en carretera.',
      'No, por la contaminación acústica que produce.',
    ],
    correct: 'No, por la contaminación acústica que produce.',
  },
  {
    question:
      '¿Está permitido llevar las puertas o el maletero abiertos para aumentar la capacidad de carga?',
    answers: [
      'No.',
      'No, excepto en los vehículos destinados al transporte de mercancías.',
      'Las puertas no, pero sí el maletero si está sujeto de forma que no pueda caer la carga.',
    ],
    correct: 'No.',
  },
  {
    question: 'Al cargar combustible en el vehículo es obligatorio...',
    answers: [
      'apagar las luces y subir las ventanillas.',
      'parar el motor y encender la señal de emergencia.',
      'apagar las luces y los sistemas eléctricos como la radio.',
    ],
    correct: 'apagar las luces y los sistemas eléctricos como la radio.',
  },
  {
    question:
      '¿Está permitido que una persona en silla de ruedas se desplace por el arcén?',
    answers: [
      'No.',
      'Sí, siempre que adopte las debidas precauciones.',
      'Solo en vías urbanas.',
    ],
    correct: 'Sí, siempre que adopte las debidas precauciones.',
  },
  {
    question: 'Los usuarios de monopatines, patines o similares...',
    answers: [
      'tienen prohibido circular por las zonas peatonales.',
      'en ningún caso tienen permitido ser arrastrados por otros vehículos.',
      'deben circular por la calzada para evitar atropellos a los peatones.',
    ],
    correct:
      'en ningún caso tienen permitido ser arrastrados por otros vehículos.',
  },
  {
    question:
      'Cuando no existe zona peatonal o esta no es practicable, los peatones...',
    answers: [
      'no pueden transitar por las carreteras.',
      'pueden transitar por el arcén.',
      'deben transitar por la calzada.',
    ],
    correct: 'pueden transitar por el arcén.',
  },
  {
    question:
      'Si no existe paso para peatones, ¿cómo deben cruzar la calzada los peatones?',
    answers: [
      'Perpendicularmente al eje de la calzada.',
      'Siguiendo siempre las indicaciones de los semáforos para peatones.',
      'Cruzando en diagonal para tener mayor visibilidad.',
    ],
    correct: 'Perpendicularmente al eje de la calzada.',
  },
  {
    question:
      'Si un peatón circula de noche por una vía interurbana, está obligado a utilizar...',
    answers: [
      'un elemento luminoso o retrorreflectante visible a una distancia mínima de 150 metros.',
      'ropa clara que sea visible desde una distancia de 150 metros.',
      'una luz blanca hacia delante y roja hacia atrás.',
    ],
    correct:
      'un elemento luminoso o retrorreflectante visible a una distancia mínima de 150 metros.',
  },
  {
    question:
      'En vías fuera de poblado que no dispongan de espacio especialmente reservado para ellos, a los peatones, ¿se está permitido circular por su derecha?',
    answers: [
      'Sí, los peatones siempre circularán por su derecha en este tipo de vías.',
      'Solo excepcionalmente si existen razones de mayor seguridad.',
      'No, en ningún caso.',
    ],
    correct: 'Solo excepcionalmente si existen razones de mayor seguridad.',
  },
  {
    question:
      'Los peatones, cuando circulen de noche en grupo, deben señalar su posición…',
    answers: [
      'con unos triángulos de preselección de peligro.',
      'con una señal manual de stop.',
      'con una luz blanca o amarilla que ilumine hacia adelante y otra roja hacia atrás.',
    ],
    correct:
      'con una luz blanca o amarilla que ilumine hacia adelante y otra roja hacia atrás.',
  },
  {
    question:
      'En vía urbana, las personas que empujen un ciclomotor por la calzada o el arcén están obligadas a circular...',
    answers: [
      'indistintamente, por cualquiera de los dos lados.',
      'por el lado izquierdo.',
      'por el lado derecho.',
    ],
    correct: 'por el lado derecho.',
  },
  {
    question:
      'Si tiene que empujar a pie un ciclomotor de dos ruedas por una vía interurbana sin arcén, ¿por dónde circulará?',
    answers: [
      'Por el lado derecho de la calzada.',
      'Por el lado izquierdo, como los peatones.',
      'En este caso no se puede circular.',
    ],
    correct: 'Por el lado derecho de la calzada.',
  },
  {
    question:
      'En una vía interurbana que no dispone de zona peatonal, ¿por qué lado deben circular los peatones?',
    answers: [
      'Por el lado derecho.',
      'Por el lado izquierdo.',
      'Indistintamente, por cualquiera de los dos lados.',
    ],
    correct: 'Por el lado izquierdo.',
  },
  {
    question:
      'Si un cuadrículo ligero tiene cinturones de seguridad, ¿es obligatorio ponerse el casco?',
    answers: [
      'No.',
      'Sí, pero únicamente fuera de poblado.',
      'Sí, cuando el vehículo es descapotable.',
    ],
    correct: 'No.',
  },
  {
    question:
      'El conductor de un quad-ATV, como el de la imagen, ¿debe utilizar casco?',
    answers: [
      'No, solo es obligatorio para las motocicletas y los ciclomotores.',
      'No, en estos vehículos solo es obligatorio para el pasajero.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Los peatones, ¿pueden atravesar las plazas y glorias por su calzada?',
    answers: [
      'Sí, si no existe zona peatonal.',
      'Sí, atravesándolas perpendicularmente, ya que se trata del recorrido más corto.',
      'No, deben rodearlas, utilizando el arcén o, en su defecto, la calzada si no existe zona peatonal.',
    ],
    correct:
      'No, deben rodearlas, utilizando el arcén o, en su defecto, la calzada si no existe zona peatonal.',
  },
  {
    question:
      'Los ciclistas, ¿están obligados a encender el alumbrado cuando circulan de noche?',
    answers: [
      'No, cuando llevan alguna prenda reflectante.',
      'Sí, siempre.',
      'No, cuando la vía está iluminada.',
    ],
    correct: 'Sí, siempre.',
  },
  {
    question: 'El ciclista, ¿puede quitarse el casco en vías interurbanas?',
    answers: [
      'Solo en rampas ascendenes prolongadas.',
      'En caso de rampas ascendentes prolongadas, en condiciones extremas de calor o por razones médicas.',
      'No.',
    ],
    correct:
      'En caso de rampas ascendentes prolongadas, en condiciones extremas de calor o por razones médicas.',
  },
  {
    question:
      '¿Por dónde deben circular los animales conducidos en manada o rebaño?',
    answers: [
      'Por el arcén derecho o el izquierdo, indistintamente.',
      'Lo más cerca posible del borde derecho de la vía en el sentido de su marcha y de forma que nunca ocupen más de la mitad derecha de la calzada.',
      'Por el arcén de la izquierda en el sentido de su marcha.',
    ],
    correct:
      'Lo más cerca posible del borde derecho de la vía en el sentido de su marcha y de forma que nunca ocupen más de la mitad derecha de la calzada.',
  },
  {
    question:
      'Cuando no exista vía pecuaria, ¿se permite a los animales transitar por las vías públicas?',
    answers: [
      'No, los animales nunca pueden utilizar vías públicas.',
      'Sí, excepto por autovías y autopistas.',
      'Sí, en todo caso.',
    ],
    correct: 'Sí, excepto por autovías y autopistas.',
  },
  {
    question:
      'Los vehículos especiales que circulan por una vía de uso público deben utilizar la luz rotativa amarillo auto cuando circulen a una velocidad...',
    answers: [
      'no superior a 40 km/h.',
      'no superior a 40 km/h, solamente de noche.',
      'superior a 40 km/h.',
    ],
    correct: 'no superior a 40 km/h.',
  },
  {
    question:
      'La luz rotativa que llevan los vehículos especiales, ¿les concede prioridad frente a los demás conductores?',
    answers: [
      'Sí, pero cuando circulan con ella encendida.',
      'Sí, en cualquier caso.',
      'No, solo señala su situación.',
    ],
    correct: 'No, solo señala su situación.',
  },
  {
    question:
      'Los vehículos destinados a obras y servicios, ¿deberán llevar algún tipo de distintivo luminoso cuando están realizando obras de reparación en una calzada y puedan suponer un peligro para los demás usuarios?',
    answers: [
      'Sí, una luz rotativa que puede ser de cualquier color.',
      'Sí, una luz rotativa de color azul.',
      'Sí, una luz rotativa de color amarillo auto.',
    ],
    correct: 'Sí, una luz rotativa de color amarillo auto.',
  },
  {
    question:
      'En caso de avería de la luz rotativa amarilla auto que utilizan los vehículos especiales, ¿se debe utilizar algún alumbrado?',
    answers: [
      'Sí, la luz de cruce.',
      'Sí, la luz de cruce junto con la señal de emergencia.',
      'Sí, la señal de emergencia.',
    ],
    correct: 'Sí, la luz de cruce junto con la señal de emergencia.',
  },
  {
    question: 'Un mantenimiento adecuado del vehículo...',
    answers: [
      'puede reducir la probabilidad de sufrir un accidente.',
      'elimina la probabilidad de sufrir un accidente.',
      'no reduce nunca la probabilidad de sufrir un accidente.',
    ],
    correct: 'puede reducir la probabilidad de sufrir un accidente.',
  },
  {
    question:
      'Un vehículo que dispone de la última tecnología, ¿puede sufrir un accidente?',
    answers: [
      'No.',
      'Sí, cuando no se hace un uso adecuado.',
      'Sí, porque la tecnología no aumenta la seguridad, sino la comodidad en la conducción.',
    ],
    correct: 'Sí, cuando no se hace un uso adecuado.',
  },
  {
    question: 'El reposacabezas es un elemento de…',
    answers: ['seguridad activa.', 'confort.', 'seguridad pasiva.'],
    correct: 'seguridad pasiva.',
  },
  {
    question: 'El casco, ¿se puede incluir entre los elementos de seguridad?',
    answers: [
      'Sí, de seguridad pasiva.',
      'Sí, únicamente de la seguridad activa.',
      'No.',
    ],
    correct: 'Sí, de seguridad pasiva.',
  },
  {
    question: 'Los frenos, ¿son un dispositivo de seguridad activa?',
    answers: [
      'Sí.',
      'No, son un sistema mecánico del vehículo.',
      'No, son un elemento de seguridad pasiva.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'El alumbrado, ¿se considera un sistema de seguridad del vehículo?',
    answers: [
      'Sí, de seguridad pasiva.',
      'No, únicamente sirve para ver y ser visto.',
      'Sí, de seguridad activa.',
    ],
    correct: 'Sí, de seguridad activa.',
  },
  {
    question:
      'Cuando la luz que proyecta el sistema de alumbado de un vehículo es demasiado baja, ¿qué puede ocurrir?',
    answers: [
      'Que el conductor tarde más tiempo en percibir cualquier obstáculo que pueda haber en la calzada.',
      'Nada, porque cualquier obstáculo sobre la calzada se verá perfectamente.',
      'Que el conductor necesite menos tiempo para percibir los obstáculos que se encuentren en la calzada.',
    ],
    correct:
      'Que el conductor tarde más tiempo en percibir cualquier obstáculo que pueda haber en la calzada.',
  },
  {
    question:
      '¿Cómo gestiona el sistema de activación automática de alumbrado el encendido y apagado de las luces del vehículo?',
    answers: [
      'Mediante un sensor que mide la luminosidad interior.',
      'Mediante un ordenador que analiza la hora y la estación del año.',
      'Mediante un sensor que mide la luminosidad exterior.',
    ],
    correct: 'Mediante un sensor que mide la luminosidad exterior.',
  },
  {
    question:
      'Cuando se realiza un giro, las luces angulares se encienden o giran iluminando…',
    answers: [
      'el exterior de la trayectoria.',
      'el interior y el exterior de la trayectoria.',
      'el interior de la trayectoria.',
    ],
    correct: 'el interior de la trayectoria.',
  },
  {
    question: '¿Puede emplear en su vehículo luces adaptativas?',
    answers: ['Sí.', 'Sí, son obligatorias.', 'No, están prohibidas.'],
    correct: 'Sí.',
  },
  {
    question: 'Las luces adaptativas...',
    answers: [
      'mejoran la visibilidad en determinadas situaciones, como una curva o una intersección.',
      'adaptan su luminosidad a la visibilidad existente.',
      'emiten más luz que las luces convencionales.',
    ],
    correct:
      'mejoran la visibilidad en determinadas situaciones, como una curva o una intersección.',
  },
  {
    question:
      'En una pendiente descendente prolongada, ¿cómo es recomendable conducir?',
    answers: [
      'Con marchas cortas para utilizar poco el freno.',
      'Controlando la velocidad con el freno y el embrague.',
      'Circulando en punto muerto.',
    ],
    correct: 'Con marchas cortas para utilizar poco el freno.',
  },
  {
    question:
      'La eficacia del frenado aumenta, entre otras circunstancias, cuando...',
    answers: [
      'se pisa el pedal de embrague al mismo tiempo que el pedal de freno.',
      'la adherencia de los neumáticos al suelo es mayor.',
      'la masa del vehículo es mayor, ya que a mayor masa menor distancia de frenado.',
    ],
    correct: 'la adherencia de los neumáticos al suelo es mayor.',
  },
  {
    question: 'El sistema antibloqueo de frenos ABS...',
    answers: [
      'en la mayoría de los casos permite reducir la distancia de frenado.',
      'hace que el vehículo mantenga su trayectoria.',
      'reduce la distancia de frenado en todos los casos.',
    ],
    correct:
      'en la mayoría de los casos permite reducir la distancia de frenado.',
  },
  {
    question:
      'Cuando el sistema de frenado autónomo de emergencia (AEB) detecta peligro de colisión, ¿cómo actúa?',
    answers: [
      'Realizando inmediatamente una frenada de emergencia, sin avisar al conductor.',
      'Avisando al conductor, únicamente.',
      'Avisando al conductor y, en caso de que este haga caso omiso a la advertencia, realizando una frenada de emergencia.',
    ],
    correct:
      'Avisando al conductor y, en caso de que este haga caso omiso a la advertencia, realizando una frenada de emergencia.',
  },
  {
    question:
      'El sistema de frenado autónomo de emergencia (AEB) es capaz de detectar un peligro inminente de colisión...',
    answers: ['lateral.', 'trasera.', 'por alcance.'],
    correct: 'por alcance.',
  },
  {
    question:
      'En una frenada de emergencia con ABS, si el pedal de freno vibra debe...',
    answers: [
      'seguir frenando a fondo.',
      'pisar el pedal de forma intermitente.',
      'soltar el pedal para no bloquear las ruedas.',
    ],
    correct: 'seguir frenando a fondo.',
  },
  {
    question:
      'En caso de emergencia, ¿es conveniente pisar el pedal de freno a fondo y mantener la máxima presión hasta el final?',
    answers: [
      'Sí, en cualquier caso.',
      'No.',
      'Únicamente si el vehículo dispone de sistema ABS.',
    ],
    correct: 'Únicamente si el vehículo dispone de sistema ABS.',
  },
  {
    question: 'Si lleva a un pasajero en la motocicleta, al frenar...',
    answers: [
      'es más difícil que se bloquee la rueda trasera.',
      'el peso se desplaza hacia la parte trasera.',
      'aumenta el desequilibrio.',
    ],
    correct: 'es más difícil que se bloquee la rueda trasera.',
  },
  {
    question:
      'Mientras circula se produce un fallo en el sistema de frenado, ¿qué debe hacer?',
    answers: [
      'Soltar el acelerador y reducir la velocidad con el freno motor.',
      'Dirigir el vehículo hacia un obstáculo para detenerlo.',
      'Tirar bruscamente de la palanca del freno de mano.',
    ],
    correct: 'Soltar el acelerador y reducir la velocidad con el freno motor.',
  },
  {
    question:
      'El aviso de frenada de emergencia o EBD consiste en que cuando el conductor pisa el pedal del freno de manera potente y rápida…',
    answers: [
      'se enciende la señal de emergencia.',
      'se produce un aviso sonoro.',
      'se produce un rápido parpadeo de las luces de freno.',
    ],
    correct: 'se produce un rápido parpadeo de las luces de freno.',
  },
  {
    question:
      '¿Qué elementos del vehículo requieren una mayor supervisión por parte del conductor?',
    answers: ['Los neumáticos.', 'Los frenos.', 'La amortiguación.'],
    correct: 'Los neumáticos.',
  },
  {
    question:
      '¿Está permitido montar neumáticos con índice de carga o un código de velocidad distinto al que recomienda el fabricante?',
    answers: [
      'Sí, cuando el índice y el código sean superiores al recomendado por el fabricante.',
      'Únicamente se pueden montar con distinto código de velocidad, el índice de carga nunca se puede variar.',
      'No, está prohibido en cualquier caso.',
    ],
    correct:
      'Sí, cuando el índice y el código sean superiores al recomendado por el fabricante.',
  },
  {
    question:
      '¿Qué indica la palabra "tubeless" escrita en el lateral del neumático?',
    answers: [
      'Que es un neumático preparado para ser montado sin cámara.',
      'Que es un neumático adecuado para utilizarlo cuando la calzada tenga agua.',
      'Que es un neumático adecuado para colocarlo en un autobús.',
    ],
    correct: 'Que es un neumático preparado para ser montado sin cámara.',
  },
  {
    question:
      'Cuando la presión de inflado de los neumáticos es inferior a la recomendada...',
    answers: [
      'el vehículo consume más combustible.',
      'no afecta al consumo de combustible.',
      'el vehículo consume menos combustible.',
    ],
    correct: 'el vehículo consume más combustible.',
  },
  {
    question: 'Cuando un neumático tiene mucho aire, ¿qué ocurre?',
    answers: [
      'Se agarra peor a la calzada.',
      'Se desgasta más por los lados.',
      'Se agarra mejor a la calzada.',
    ],
    correct: 'Se agarra peor a la calzada.',
  },
  {
    question:
      'La profundidad mínima de las ranuras principales de la banda de rodamiento de los neumáticos de un turismo debe ser de...',
    answers: ['1,4 milímetros.', '2 milímetros.', '1,6 milímetros.'],
    correct: '1,6 milímetros.',
  },
  {
    question:
      'Los surcos que hay en la banda de rodadura de los neumáticos del vehículo deben garantizar un buen drenaje del agua hacia…',
    answers: [
      'el interior de los surcos y por los laterales.',
      'el interior de los surcos y hacia delante.',
      'atrás y por los laterales.',
    ],
    correct: 'atrás y por los laterales.',
  },
  {
    question:
      '¿Cuál es la profundidad mínima en las ranuras principales de la banda de rodamiento de una motocicleta?',
    answers: [
      'Las motocicletas no están obligadas a tener una profundidades mínimas en sus ruedas, pero se aconseja 1,6 milímetros como mínimo.',
      '16 milímetros.',
      '1,6 milímetros.',
    ],
    correct:
      'Las motocicletas no están obligadas a tener una profundidades mínimas en sus ruedas, pero se aconseja 1,6 milímetros como mínimo.',
  },
  {
    question: 'Es aconsejable cambiar los neumáticos del vehículo...',
    answers: [
      'cada 5 años únicamente si no tienen dibujo suficiente.',
      'al menos cada 10 años.',
      'al menos cada 5 años.',
    ],
    correct: 'al menos cada 5 años.',
  },
  {
    question: 'El calor, ¿influye en el desgaste de los neumáticos?',
    answers: ['No.', 'Sí, reduce el desgaste.', 'Sí, aumenta el desgaste.'],
    correct: 'Sí, aumenta el desgaste.',
  },
  {
    question:
      'En caso de sufrir un reventón circulando por una vía a velocidad elevada, ¿es aconsejable pisar el pedal de freno con brusquedad?',
    answers: [
      'No, el frenado debe ser suave y progresivo.',
      'Sí, para mantener con mayor facilidad la trayectoria recta del vehículo.',
      'Solo si el reventón se produce en una de las ruedas delanteras.',
    ],
    correct: 'No, el frenado debe ser suave y progresivo.',
  },
  {
    question:
      'Una de las funciones del chasis y la carrocería del vehículo es...',
    answers: [
      'proteger a los ocupantes.',
      'sustituir cinturones y airbags.',
      'ser poco deformable.',
    ],
    correct: 'proteger a los ocupantes.',
  },
  {
    question:
      '¿Por qué es necesario y obligatorio ponerse el cinturón de seguridad?',
    answers: [
      'El cinturón no es obligatorio cuando el vehículo tiene airbag.',
      'Porque reduce casi a la mitad la probabilidad de que un accidente sea mortal.',
      'Porque absorbe la energía del impacto en un accidente.',
    ],
    correct:
      'Porque reduce casi a la mitad la probabilidad de que un accidente sea mortal.',
  },
  {
    question:
      'Los ocupantes menores de edad de estatura inferior a 135 cm, ¿en qué asientos de un turismo pueden viajar?',
    answers: [
      'Siempre en el asiento delantero, con un dispositivo de retención homologado adaptado a su talla y peso, para mejor control.',
      'En los traseros, y en algunos casos, con un dispositivo de retención homologado adaptado a su talla y peso, en el delantero.',
      'Siempre en los traseros, con un dispositivo de retención homologado adaptado a su talla y peso.',
    ],
    correct:
      'Siempre en el asiento delantero, con un dispositivo de retención homologado adaptado a su talla y peso, para mejor control.',
  },
  {
    question:
      '¿Quién debe usar los cinturones de seguridad en un autobús que no dispone de sistemas de retención infantil homologados?',
    answers: [
      'El conductor solamente.',
      'El conductor y los pasajeros, aunque los menores de edad de estatura igual o inferior a 135 centímetros de tres o más años los usarán solo si son adecuados a su talla y peso.',
      'Todos los pasajeros.',
    ],
    correct:
      'El conductor y los pasajeros, aunque los menores de edad de estatura igual o inferior a 135 centímetros de tres o más años los usarán solo si son adecuados a su talla y peso.',
  },
  {
    question:
      '¿Están obligados a usar cinturón de seguridad los pasajeros de un taxi?',
    answers: [
      'Sí, excepto cuando circulen en tráfico urbano, no alcancen los 135 centímetros de estatura y viajen en los asientos traseros.',
      'Sí, solo cuando viajen en las plazas delanteras.',
      'No.',
    ],
    correct:
      'Sí, excepto cuando circulen en tráfico urbano, no alcancen los 135 centímetros de estatura y viajen en los asientos traseros.',
  },
  {
    question:
      'No están obligados a utilizar el cinturón de seguridad, como norma general...',
    answers: [
      'los conductores de taxis cuando están de servicio, en vías urbanas y carreteras convencionales.',
      'las embarazadas.',
      'los distribuidores de mercancías, en vías de poblado, cuando realicen operaciones de carga y descarga a corta distancia.',
    ],
    correct: 'las embarazadas.',
  },
  {
    question:
      'El conductor, al circular marcha atrás para estacionar, ¿debe llevar puesto el cinturón de seguridad?',
    answers: [
      'Sí, solo podrá quitárselo si es taxista o repartidor.',
      'Sí, debe llevarlo abrochado hasta que el vehículo esté inmovilizado.',
      'No, no es obligatorio.',
    ],
    correct:
      'Sí, debe llevarlo abrochado hasta que el vehículo esté inmovilizado.',
  },
  {
    question:
      'Las personas provistas de un certificado médico de exención, ¿están obligadas a abrocharse el cinturón de seguridad?',
    answers: ['Sí.', 'Únicamente fuera de poblado.', 'No.'],
    correct: 'Sí.',
  },
  {
    question:
      '¿Por dónde debe pasar la cinta torácica del cinturón de seguridad?',
    answers: [
      'Por encima del hombro.',
      'Sobre la clavícula y por el centro del pecho.',
      'Por los huesos de la cadera.',
    ],
    correct: 'Sobre la clavícula y por el centro del pecho.',
  },
  {
    question: 'Cuando está lloviendo, ¿qué presión deben tener los neumáticos?',
    answers: [
      'La presión que aconseja el fabricante.',
      'Menor que la aconsejada por el fabricante.',
      'Mayor que la aconsejada por el fabricante.',
    ],
    correct: 'La presión que aconseja el fabricante.',
  },
  {
    question: 'El calor, ¿influye en el desgaste de los neumáticos?',
    answers: ['Sí, aumenta el desgaste.', 'No.', 'Sí, reduce el desgaste.'],
    correct: 'Sí, aumenta el desgaste.',
  },
  {
    question: 'Si circulando se le pincha una rueda debe...',
    answers: [
      'abandonar inmediatamente el vehículo, cualquiera que sea el lugar en que se encuentre.',
      'continuar el viaje hasta el taller más próximo.',
      'inmovilizar rápidamente el vehículo fuera de la calzada, o en lugar seguro.',
    ],
    correct:
      'inmovilizar rápidamente el vehículo fuera de la calzada, o en lugar seguro.',
  },
  {
    question:
      'En caso de sufrir un reventón circulando por una vía a velocidad elevada, ¿es aconsejable pisar el pedal de freno con brusquedad?',
    answers: [
      'Solo si el reventón se produce en una de las ruedas delanteras.',
      'No, el frenado debe ser suave y progresivo.',
      'Sí, para mantener con mayor facilidad la trayectoria recta del vehículo.',
    ],
    correct: 'No, el frenado debe ser suave y progresivo.',
  },
  {
    question:
      'Si se ve obligado a circular con una rueda de repuesto de uso temporal o de emergencia, debe tener en cuenta…',
    answers: [
      'que si está homologada no es necesario sustituirla por una rueda normal.',
      'las indicaciones de los fabricantes de este tipo de repuestos.',
      'que la presión debe ser más alta que las que lleva normalmente el vehículo.',
    ],
    correct: 'las indicaciones de los fabricantes de este tipo de repuestos.',
  },
  {
    question:
      'Una carrocería de gran resistencia, ¿puede sustituir a otros sistemas de seguridad pasiva?',
    answers: [
      'Sí, por ejemplo al airbag.',
      'No.',
      'Sí, en los vehículos todo-terreno.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Una de las funciones del chasis y la carrocería del vehículo es...',
    answers: [
      'ser poco deformable.',
      'proteger a los ocupantes.',
      'sustituir cinturones y airbags.',
    ],
    correct: 'proteger a los ocupantes.',
  },
  {
    question:
      'Llevar correctamente abrochado el cinturón de seguridad, ¿qué ventajas tiene?',
    answers: [
      'Evitar las lesiones cervicales en caso de accidente.',
      'Poder desconectar otros sistemas de seguridad que dejan de tener utilidad.',
      'Evitar que salga despedido del vehículo en caso de accidente.',
    ],
    correct: 'Evitar que salga despedido del vehículo en caso de accidente.',
  },
  {
    question:
      'Si tiene un accidente y no lleva puesto el cinturón de seguridad, las posibilidades de resultar muerto en el siniestro son casi el doble en...',
    answers: [
      'todas las plazas del vehículo.',
      'las plazas delanteras, únicamente.',
      'la plaza del conductor, únicamente.',
    ],
    correct: 'todas las plazas del vehículo.',
  },
  {
    question:
      '¿Por qué es necesario y obligatorio ponerse el cinturón de seguridad?',
    answers: [
      'Porque absorbe la energía del impacto en un accidente.',
      'El cinturón no es obligatorio cuando el vehículo tiene airbag.',
      'Porque reduce casi a la mitad la probabilidad de que un accidente sea mortal.',
    ],
    correct:
      'Porque reduce casi a la mitad la probabilidad de que un accidente sea mortal.',
  },
  {
    question:
      'Los asientos de un vehículo mixto tienen cinturones de seguridad. ¿Está obligado el conductor a utilizarlo?',
    answers: [
      'No, en ningún tipo de vía.',
      'No, en vías fuera de poblado.',
      'Sí, en todas las vías.',
    ],
    correct: 'Sí, en todas las vías.',
  },
  {
    question:
      'El conductor de un turismo, ¿debe llevar el cinturón de seguridad si el trayecto es corto?',
    answers: [
      'No, si realiza operaciones de carga y descarga a corta distancia.',
      'Sí, siempre.',
      'No, si circula en vías urbanas.',
    ],
    correct: 'Sí, siempre.',
  },
  {
    question:
      'Un niño de ocho años de edad con una estatura de 120 cm viaja en un turismo que no dispone de dispositivos de seguridad, ¿puede hacerlo?',
    answers: [
      'Sí, en los asientos traseros.',
      'No, porque no alcanza los 135 cm de estatura.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Los ocupantes menores de edad de estatura inferior a 135 cm, ¿en qué asientos de un turismo pueden viajar?',
    answers: [
      'Siempre en los traseros, con un dispositivo de retención homologado adaptado a su talla y peso.',
      'Siempre en el asiento delantero, con un dispositivo de retención homologado adaptado a su talla y peso, para mejor control.',
      'En los traseros, y en algunos casos, con un dispositivo de retención homologado adaptado a su talla y peso, en el delantero.',
    ],
    correct:
      'En los traseros, y en algunos casos, con un dispositivo de retención homologado adaptado a su talla y peso, en el delantero.',
  },
  {
    question:
      'Los menores de edad, ¿pueden viajar en los asientos delanteros de su turismo?',
    answers: [
      'No, tienen que viajar obligatoriamente en los asientos traseros.',
      'Sí, si utilizan el cinturón de seguridad para adultos, o un sistema de retención adecuado, cuando su estatura es superior a 135 centímetros.',
      'Sí, pero no es necesario que utilicen el cinturón de seguridad.',
    ],
    correct:
      'Sí, si utilizan el cinturón de seguridad para adultos, o un sistema de retención adecuado, cuando su estatura es superior a 135 centímetros.',
  },
  {
    question:
      'Los menores, ¿cuándo pueden empezar a utilizar los cinturones de seguridad normales?',
    answers: [
      'Cuando midan más de 1,35 m de estatura.',
      'Siempre que midan menos de 1,35 m de estatura.',
      'A partir de 1,50 m de estatura.',
    ],
    correct: 'Cuando midan más de 1,35 m de estatura.',
  },
  {
    question:
      'En un turismo, ¿puede viajar en los asientos delanteros un menor de 1 año de edad si todas las plazas traseras están ocupadas por niños con sistemas de retención infantil?',
    answers: [
      'Sí, con un sistema de retención infantil adaptado a su talla y peso.',
      'No, porque no debe viajar en el asiento delantero.',
      'Sí, pero con el cinturón de seguridad.',
    ],
    correct:
      'Sí, con un sistema de retención infantil adaptado a su talla y peso.',
  },
  {
    question:
      '¿Quién debe usar los cinturotes de seguridad en un autobús que no dispone de sistemas de retención infantil homologados?',
    answers: [
      'Todos los pasajeros.',
      'El conductor solamente.',
      'El conductor y los pasajeros, aunque los menores de edad de estatura igual o inferior a 135 centímetros de tres o más años los usarán solo si son adecuados a su talla y peso.',
    ],
    correct:
      'El conductor y los pasajeros, aunque los menores de edad de estatura igual o inferior a 135 centímetros de tres o más años los usarán solo si son adecuados a su talla y peso.',
  },
  {
    question:
      '¿Están obligados a usar cinturón de seguridad los pasajeros de un taxi?',
    answers: [
      'No.',
      'Sí, excepto cuando ciruculen en tráfico urbano, no alcancen los 135 centímetros de estatura y viajen en los asientos traseros.',
      'Sí, solo cuando viajen en las plazas delanteras.',
    ],
    correct:
      'Sí, excepto cuando ciruculen en tráfico urbano, no alcancen los 135 centímetros de estatura y viajen en los asientos traseros.',
  },
  {
    question:
      'No están obligados a utilizar el cinturón de seguridad, como norma general...',
    answers: [
      'los conductores de taxis cuando están de servicio en vía urbana.',
      'los menores de 16 años.',
      'las embarazadas.',
    ],
    correct: 'los conductores de taxis cuando están de servicio en vía urbana.',
  },
  {
    question:
      'Los conductores y pasajeros de vehículos que realicen servicios de urgencia, ¿están obligados a utilizar el cinturón de seguridad cuando circulen en poblado?',
    answers: [
      'Los conductores sí están obligados; los pasajeros, no.',
      'Los conductores no están obligados; los pasajeros, sí.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'No están obligados a utilizar el cinturón de seguridad, como norma general...',
    answers: [
      'los distribuidores de mercancías, en vías de poblado, cuando realicen operaciones de carga y descarga a corta distancia.',
      'los conductores de taxis cuando están de servicio, en vías urbanas y carreteras convencionales.',
      'las embarazadas.',
    ],
    correct:
      'los distribuidores de mercancías, en vías de poblado, cuando realicen operaciones de carga y descarga a corta distancia.',
  },
  {
    question:
      'El conductor, al circular marcha atrás para estacionar, ¿debe llevar puesto el cinturón de seguridad?',
    answers: [
      'No, no es obligatorio.',
      'Sí, solo podrá quitárselo si es taxista o repartidor.',
      'Sí, debe llevarlo abrochado hasta que el vehículo esté inmovilizado.',
    ],
    correct: 'No, no es obligatorio.',
  },
  {
    question:
      'Las personas provistas de un certificado médico de exención, ¿están obligadas a abrocharse el cinturón de seguridad?',
    answers: ['No.', 'Sí.', 'Únicamente fuera de poblado.'],
    correct: 'No.',
  },
  {
    question:
      'En los vehículos de hasta nueve plazas incluido el conductor, los niños menores de tres años, ¿cómo deben viajar?',
    answers: [
      'Siempre con un sistema de sujeción adaptado a su talla y peso.',
      'Sujetos al menos con el cinturón de seguridad de los adultos.',
      'Sujetos en los brazos de un adulto.',
    ],
    correct: 'Siempre con un sistema de sujeción adaptado a su talla y peso.',
  },
  {
    question:
      '¿Por dónde debe pasar la cinta torácica del cinturón de seguridad?',
    answers: [
      'Por los huesos de la cadera.',
      'Por encima del hombro.',
      'Sobre la clavícula y por el centro del pecho.',
    ],
    correct: 'Sobre la clavícula y por el centro del pecho.',
  },
  {
    question: 'La cinta abdominal del cinturón de seguridad debe colocarse...',
    answers: [
      'sobre los huesos de la cadera o sobre el abdomen.',
      'sobre los huesos de la cadera, siempre por debajo del abdomen.',
      'sobre el abdomen, únicamente.',
    ],
    correct: 'sobre los huesos de la cadera, siempre por debajo del abdomen.',
  },
  {
    question: 'Utilizar pinzas para retener el cinturón de seguridad…',
    answers: [
      'es conveniente, porque reduce la presión del cinturón sobre el pecho.',
      'es peligroso, porque reduce la eficacia del cinturón.',
      'es necesario, como complemento del airbag, en los vehículos dotados del mismo.',
    ],
    correct: 'es peligroso, porque reduce la eficacia del cinturón.',
  },
  {
    question:
      'Si no lleva colocado correctamente el cinturón de seguridad, ¿puede influir en las consecuencias de un accidente?',
    answers: [
      'No, cuando el vehículo tenga además instalado airbag.',
      'No, el cinturón es efectivo siempre.',
      'Sí, ya que se pueden sufrir lesiones graves.',
    ],
    correct: 'Sí, ya que se pueden sufrir lesiones graves.',
  },
  {
    question:
      'Durante un día con temperaturas ambientales muy bajas, ¿es correcto conducir con el abrigo puesto?',
    answers: [
      'Sí, para no tener sensación de frío, que puede hacer que nos distraigamos.',
      'Sí, para no tener frío y, además, en caso de accidente protege al ocupante.',
      'No, ya que en caso de accidente reduce la eficacia del cinturón de seguridad y del pretensor.',
    ],
    correct:
      'No, ya que en caso de accidente reduce la eficacia del cinturón de seguridad y del pretensor.',
  },
  {
    question: 'El efecto submarino se produce cuando...',
    answers: [
      'el apoyacabezas está mal regulado.',
      'el cinturón de seguridad no es capaz de retener adecuadamente durante un accidente y el cuerpo se desliza por debajo de él.',
      'la distancia con el airbag es incorrecta.',
    ],
    correct:
      'el cinturón de seguridad no es capaz de retener adecuadamente durante un accidente y el cuerpo se desliza por debajo de él.',
  },
  {
    question:
      '¿Es correcto que el conductor de un turismo utilice un cojín en su asiento?',
    answers: [
      'Sí, porque la altura mejora el campo de visión del conductor.',
      'Sí, porque el conductor va más cómodo.',
      'No, porque puede limitar la eficacia del cinturon de seguridad.',
    ],
    correct: 'No, porque puede limitar la eficacia del cinturon de seguridad.',
  },
  {
    question: 'Cuando se conduce, poner una toalla sobre el asiento...',
    answers: [
      'es recomendable, sobre todo en verano, para proteger el asiento.',
      'puede favorecer el efecto submarino.',
      'no representa ningún peligro.',
    ],
    correct: 'puede favorecer el efecto submarino.',
  },
  {
    question: 'El cinturón de seguridad deber ir...',
    answers: [
      'sobre el abdomen para que sea realmente eficaz.',
      'holgado para que la conducción sea cómoda y no aparezca la fatiga.',
      'bien ceñido para evitar el efecto submarino.',
    ],
    correct: 'bien ceñido para evitar el efecto submarino.',
  },
  {
    question: '¿Es peligroso no abrocharse el cinturón de seguridad?',
    answers: [
      'En tráfico urbano no, debido a las bajas velocidades a las que se circula.',
      'Sí, porque incluso en un choque a baja velocidad no siempre es posible mantenerse sujeto al asiento.',
      'Solo es peligroso no abrocharse el cinturón en los asientos delanteros.',
    ],
    correct:
      'Sí, porque incluso en un choque a baja velocidad no siempre es posible mantenerse sujeto al asiento.',
  },
  {
    question:
      '¿Puede la postura del asiento influir en la eficacia del cinturón de seguridad?',
    answers: [
      'Sí, no es recomendable inclinar el asiento demasiado hacia atrás.',
      'No.',
      'No, mientras que el cinturón esté totalmente ceñido.',
    ],
    correct:
      'Sí, no es recomendable inclinar el asiento demasiado hacia atrás.',
  },
  {
    question: 'El cinturón de seguridad en los asientos traseros...',
    answers: [
      'es importante, pero solo en vías interurbanas.',
      'es responsabilidad única de sus ocupantes, ya que en un accidente serían los únicos perjudicados.',
      'puede salvar la vida de sus ocupantes y evita que estos provoquen graves lesiones en los demás.',
    ],
    correct:
      'puede salvar la vida de sus ocupantes y evita que estos provoquen graves lesiones en los demás.',
  },
  {
    question:
      'Si el recorrido que va a realizar con su vehículo es corto, ¿está permitido llevar a un niño pequeño en brazos?',
    answers: [
      'No, es obligatorio usar un sistema de retención infantil.',
      'Sí, cuando todo el recorrido transcurre por vías urbanas.',
      'Solo si se circula a una velocidad igual o inferior a 30 km/h.',
    ],
    correct: 'No, es obligatorio usar un sistema de retención infantil.',
  },
  {
    question:
      'Colocar una sillita para niños en una plaza con airbag frontal, ¿es correcto?',
    answers: [
      'Solo cuando el airbag se ha desconectado previamente.',
      'Sí, para proteger al niño en caso de impacto frontal.',
      'No, es algo que nunca debe hacerse.',
    ],
    correct: 'Solo cuando el airbag se ha desconectado previamente.',
  },
  {
    question:
      'La colocación de los dispositivos de retención infantil resulta más segura en…',
    answers: [
      'cualquiera de los asientos traseros laterales.',
      'el asiento delantero, para que el conductor pueda vigilar al niño.',
      'el asiento trasero central, ya que resulta menos afectado por los impactos laterales.',
    ],
    correct:
      'el asiento trasero central, ya que resulta menos afectado por los impactos laterales.',
  },
  {
    question:
      'Los dispositivos de retención infantil hay que seleccionarlos fundamentalmente en función…',
    answers: [
      'del asiento del vehículo que ofrezca mejor ubicación.',
      'de la comodidad y adaptación al niño.',
      'del peso y talla del niño.',
    ],
    correct: 'del peso y talla del niño.',
  },
  {
    question:
      'Mientras se realiza un estacionamiento, ¿es fácil que el dispositivo del airbag se dispare?',
    answers: [
      'No, puesto que los sistemas de airbag actuales son muy precisos a la hora de determinar cuándo deben hincharse.',
      'Este tipo de cuestiones dependerá de la marca del automóvil.',
      'Sí, un airbag puede ponerse en funcionamiento en cualquier momento.',
    ],
    correct:
      'No, puesto que los sistemas de airbag actuales son muy precisos a la hora de determinar cuándo deben hincharse.',
  },
  {
    question: 'Los airbags, entre otras funciones, protegen de...',
    answers: [
      'el efecto submarino.',
      'lesiones cervicales y de impactos contra elementos del interior del vehículo.',
      'lesiones abdominales.',
    ],
    correct:
      'lesiones cervicales y de impactos contra elementos del interior del vehículo.',
  },
  {
    question:
      '¿Cuál de las siguientes es una de las principales funciones del airbag en caso de accidente?',
    answers: [
      'Evitar el efecto submarino.',
      'Reducir el riesgo de heridas en la cara producidas por fragmentos de cristal procedentes del parabrisas.',
      'Evitar que la columna de dirección golpee al conductor.',
    ],
    correct:
      'Reducir el riesgo de heridas en la cara producidas por fragmentos de cristal procedentes del parabrisas.',
  },
  {
    question: 'Además del airbag frontal, ¿existen otros tipos de airbag?',
    answers: [
      'Sí, los laterales y los de techo o cortina entre otros.',
      'No.',
      'Sí, los laterales.',
    ],
    correct: 'Sí, los laterales y los de techo o cortina entre otros.',
  },
  {
    question:
      'Cuando un vehículo lleva airbag, ¿las gafas suelen ser peligrosas para el conductor si este salta debido a un impacto?',
    answers: [
      'No, cuando se utilizan sin el cinturón de seguridad; en caso contrario, es aconsejable desconectar el airbag.',
      'No.',
      'Sí.',
    ],
    correct: 'No.',
  },
  {
    question:
      '¿Cuál es la distancia ideal a la que debe colocarse con respecto al airbag?',
    answers: [
      '10 cm.',
      'La distancia que le permita conducir en una postura cómoda.',
      '25 cm.',
    ],
    correct: '25 cm.',
  },
  {
    question:
      '¿En qué tipo de accidentes es más frecuente que se produzca el latigazo cervical?',
    answers: [
      'En las colisiones por alcance.',
      'Es la lesión más frecuente que se da en los accidentes en solitario.',
      'Es especialmente frecuente en los atropellos.',
    ],
    correct: 'En las colisiones por alcance.',
  },
  {
    question:
      'En un automóvil, ¿cuál de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisión?',
    answers: [
      'Los frenos ABS.',
      'El cinturón de seguridad.',
      'El reposacabezas, ajustado de forma apropiada.',
    ],
    correct: 'El reposacabezas, ajustado de forma apropiada.',
  },
  {
    question:
      '¿Qué sistemas de seguridad pueden perder eficacia si no se lleva abrochado el cinturón de seguridad?',
    answers: [
      'Los airbags y los reposacabezas.',
      'Los frenos y el ABS.',
      'La suspensión y los amortiguadores.',
    ],
    correct: 'Los airbags y los reposacabezas.',
  },
  {
    question:
      'Para que el apoyacabezas esté regulado correctamente, la distancia respecto a la cabeza debe ser...',
    answers: [
      'la mínima posible y nunca superior a 4 cm.',
      'la que resulte más cómoda para el conductor.',
      'superior a 4 cm.',
    ],
    correct: 'la mínima posible y nunca superior a 4 cm.',
  },
  {
    question: '¿Cómo se debe regular adecuadamente la altura del apoyacabezas?',
    answers: [
      'El borde debe quedar situado entre el límite superior de la cabeza y la altura de los ojos.',
      'El borde debe quedar situado entre el límite inferior de la cabeza y la altura de los ojos.',
      'En función de la comodidad del conductor.',
    ],
    correct:
      'El borde debe quedar situado entre el límite superior de la cabeza y la altura de los ojos.',
  },
  {
    question:
      'El conductor de una motocicleta circula con el casco desabrochado, ¿es correcto?',
    answers: [
      'No, debe ir ajustado a la cabeza y abrochado.',
      'Sí, si circula a poca velocidad y por ciudad.',
      'Sí, si circula a poca velocidad.',
    ],
    correct: 'No, debe ir ajustado a la cabeza y abrochado.',
  },
  {
    question:
      'Si el casco no lleva visera, ¿es obligatorio que los pasajeros de motocicletas utilicen gafas de seguridad?',
    answers: [
      'Sí, y preferiblemente de cristal.',
      'No, no es obligatorio ni aconsejable.',
      'No, pero sí es muy aconsejable.',
    ],
    correct: 'No, pero sí es muy aconsejable.',
  },
  {
    question: '¿Qué protege un casco integral?',
    answers: [
      'Únicamente la parte trasera del cráneo.',
      'Solo la parte superior del cráneo.',
      'La cara y la cabeza.',
    ],
    correct: 'La cara y la cabeza.',
  },
  {
    question: 'El casco debe cambiarse cuando...',
    answers: [
      'los colores hayan pasado de moda.',
      'sufra algún golpe, ya que puede haberse dañado.',
      'cambie de motocicleta.',
    ],
    correct: 'sufra algún golpe, ya que puede haberse dañado.',
  },
  {
    question: 'Al comprar un casco, ¿qué debe tener en cuenta?',
    answers: [
      'Únicamente que esté homologado.',
      'Que esté homologado, además de su talla y el material con que esté fabricado.',
      'La marca.',
    ],
    correct:
      'Que esté homologado, además de su talla y el material con que esté fabricado.',
  },
  {
    question: 'En un casco, ¿qué pantalla es la más recomendable?',
    answers: [
      'Una pantalla antivaho.',
      'Una pantalla polarizada.',
      'Una pantalla oscura.',
    ],
    correct: 'Una pantalla antivaho.',
  },
  {
    question: 'El color del casco, ¿influye en la seguridad del motorista?',
    answers: [
      'No.',
      'Sí, los más seguros son los de colores claros.',
      'Sí, son más seguros los colores oscuros.',
    ],
    correct: 'Sí, los más seguros son los de colores claros.',
  },
  {
    question:
      'Al elegir un casco para conducir una motocicleta, ¿qué debe tener en cuenta?',
    answers: [
      'Que se pueda sujetar sin tener que llevarlo abrochado.',
      'Que tenga buena ventilación para que no se empañe la visera.',
      'Que aísle completamente de los ruidos.',
    ],
    correct: 'Que tenga buena ventilación para que no se empañe la visera.',
  },
  {
    question: 'El freno de pie en un turismo actúa sobre las...',
    answers: ['cuatro ruedas.', 'ruedas delanteras.', 'ruedas motrices.'],
    correct: 'cuatro ruedas.',
  },
  {
    question:
      '¿Es correcto el uso frecuente del freno de mano cuando se conduce?',
    answers: [
      'Sí, se debe utilizar en curvas cerradas.',
      'Sí, siempre que el vehículo tenga ABS.',
      'No, solo se debe utilizar en los casos de inmovilización del vehículo.',
    ],
    correct:
      'No, solo se debe utilizar en los casos de inmovilización del vehículo.',
  },
  {
    question:
      'El freno de estacionamiento, más conocido como freno de mano, ¿sobre qué ruedas actúa generalmente?',
    answers: [
      'Sobre todas.',
      'Sobre las ruedas delanteras.',
      'Sobre las ruedas traseras.',
    ],
    correct: 'Sobre las ruedas traseras.',
  },
  {
    question:
      'En la disposición más generalizada en los mandos de una motocicleta, el acelerador se acciona con...',
    answers: ['la mano izquierda.', 'la mano derecha.', 'el pie derecho.'],
    correct: 'la mano derecha.',
  },
  {
    question:
      'Como norma general, el pedal de cambio de velocidades de una motocicleta, ¿con qué pie se acciona?',
    answers: [
      'Con el pie izquierdo.',
      'Con el pie derecho.',
      'El cambio de velocidades de una motocicleta no se acciona con el pie.',
    ],
    correct: 'Con el pie izquierdo.',
  },
  {
    question:
      'En una motocicleta, generalmente, ¿con qué pie se acciona el freno trasero?',
    answers: [
      'Con el pie izquierdo.',
      'Con el pie derecho.',
      'El freno trasero no se acciona con el pie, se acciona con la mano izquierda.',
    ],
    correct: 'Con el pie derecho.',
  },
  {
    question:
      '¿Está permitido colocar adhesivos en el parabrisas de un turismo?',
    answers: [
      'No, si no han sido previamente homologados.',
      'No, está prohibido.',
      'Sí, mientras sea posible la visibilidad diáfana del conductor sobre toda la vía.',
    ],
    correct:
      'Sí, mientras sea posible la visibilidad diáfana del conductor sobre toda la vía.',
  },
  {
    question:
      '¿Está permitida la colocación en un turismo de vidrios tintados no homologados?',
    answers: [
      'Sí, puesto que no son elementos que influyan en la seguridad vial.',
      'No, están prohibidos.',
      'Sí, pero solamente en las ventanillas delanteras.',
    ],
    correct: 'No, están prohibidos.',
  },
  {
    question: '¿Qué le permiten los espejos retrovisores?',
    answers: [
      'Observar únicamente lo que está detrás del vehículo.',
      'Evitar los ángulos muertos.',
      'Observar en todo momento lo que rodea al vehículo.',
    ],
    correct: 'Observar en todo momento lo que rodea al vehículo.',
  },
  {
    question: 'El lavaparabrisas del vehículo...',
    answers: [
      'no necesita ningún mantenimiento.',
      'necesita que se vigile el nivel de agua de su propio depósito.',
      'necesita que se vigile el nivel del circuito de refrigeración de donde toma el agua.',
    ],
    correct: 'necesita que se vigile el nivel de agua de su propio depósito.',
  },
  {
    question:
      'El conductor, ¿puede activar el limpiaparabrisas automático cuando lo desea?',
    answers: [
      'Sí, poniendo la palanca del limpiaparabrisas en la posición automática.',
      'No, es un sistema que está conectado permanentemente.',
      'Solo si la lluvia es ligera, ya que siempre se conecta automáticamente cuando es intensa.',
    ],
    correct:
      'Sí, poniendo la palanca del limpiaparabrisas en la posición automática.',
  },
  {
    question: '¿Este vehículo puede llevar cortinillas en la parte trasera?',
    answers: [
      'No, porque el conductor es novel.',
      'No, están prohibidas porque dificultan la visibilidad.',
      'Sí, pero es obligatorio llevar los dos espejos retrovisores exteriores.',
    ],
    correct:
      'Sí, pero es obligatorio llevar los dos espejos retrovisores exteriores.',
  },
  {
    question:
      'En un turismo, ¿está permitido eliminar uno de los espejos retrovisores exteriores si coloca uno interior panorámico?',
    answers: [
      'Únicamente el derecho, y solo cuando su uso no sea obligatorio por las condiciones del vehículo o del conductor.',
      'No, ninguno de los dos.',
      'Sí, cualquiera de los dos, siempre que conserve el otro.',
    ],
    correct:
      'Únicamente el derecho, y solo cuando su uso no sea obligatorio por las condiciones del vehículo o del conductor.',
  },
  {
    question:
      'Si el equipaje disminuye la visibilidad por el espejo interior, ¿a qué está obligado?',
    answers: [
      'En ningún caso la carga puede disminuir la visibilidad.',
      'A tener instalados el espejo retrovisor interior y el exterior izquierdo.',
      'A tener instalados dos espejos retrovisores exteriores, uno a cada lado del vehículo.',
    ],
    correct:
      'A tener instalados dos espejos retrovisores exteriores, uno a cada lado del vehículo.',
  },
  {
    question:
      'Un turismo, ¿puede llevar solo el espejo exterior izquierdo y el interior?',
    answers: [
      'Sí.',
      'No, también debe llevar el espejo exterior derecho.',
      'No, solo son obligatorios el espejo interior y el exterior derecho.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'El espejo exterior izquierdo de su turismo está roto, ¿está permitido circular así?',
    answers: [
      'No, porque el espejo exterior izquierdo es obligatorio.',
      'Sí, cuando tiene espejo exterior derecho.',
      'Sí, cuando tiene el espejo exterior derecho y el interior.',
    ],
    correct: 'No, porque el espejo exterior izquierdo es obligatorio.',
  },
  {
    question: 'En los ciclomotores de dos ruedas...',
    answers: [
      'es obligatorio el espejo retrovisor del lado izquierdo y optativo el del lado derecho.',
      'son obligatorios dos espejos retrovisores exteriores, uno al lado izquierdo y otro al lado derecho.',
      'es optativo el espejo retrovisor del lado izquierdo y obligatorio el del lado derecho.',
    ],
    correct:
      'es obligatorio el espejo retrovisor del lado izquierdo y optativo el del lado derecho.',
  },
  {
    question:
      '¿Cuántos espejos retrovisores debe de llevar este cuadriciclo pesado?',
    answers: [
      'Solo el exterior izquierdo.',
      'Solo el exterior derecho.',
      'Dos, el interior y el exterior izquierdo.',
    ],
    correct: 'Dos, el interior y el exterior izquierdo.',
  },
  {
    question:
      '¿Cuántos espejos retrovisores tienen que llevar instalados las motocicletas?',
    answers: [
      'Obligatoriamente uno en el lado derecho, pero pueden llevar dos.',
      'Siempre deben llevar dos espejos, uno en cada lado.',
      'Un espejo exterior izquierdo si no superan los 100 km/h y dos, uno en cada lado, si la velocidad es mayor.',
    ],
    correct:
      'Un espejo exterior izquierdo si no superan los 100 km/h y dos, uno en cada lado, si la velocidad es mayor.',
  },
  {
    question:
      '¿Cuántos espejos retrovisores tiene que llevar instalados una motocicleta con estructura de autoprotección, si su velocidad máxima no supera los 100 km/h?',
    answers: [
      'Dos exteriores, uno en cada lado.',
      'Uno interior y otro exterior izquierdo.',
      'Uno exterior, en el lado izquierdo.',
    ],
    correct: 'Uno exterior, en el lado izquierdo.',
  },
  {
    question: 'Las palancas del asiento del conductor, ¿para qué sirven?',
    answers: [
      'Para colocarme a la distancia adecuada de los mandos.',
      'Para que el cinturón de seguridad me sujete mejor.',
      'Para hacer más cómodos los asientos traseros.',
    ],
    correct: 'Para colocarme a la distancia adecuada de los mandos.',
  },
  {
    question: 'Una adecuada posición al volante permite al conductor...',
    answers: [
      'actuar mejor y más rápido ante cualquier imprevisto.',
      'relajar su atención.',
      'aumentar su tiempo de reacción.',
    ],
    correct: 'actuar mejor y más rápido ante cualquier imprevisto.',
  },
  {
    question: '¿Cómo se deben colocar los espejos?',
    answers: [
      'Con el coche parado en calzada recta.',
      'Parado o en movimiento, es igual.',
      'Con el coche en movimiento para ver mejor.',
    ],
    correct: 'Con el coche parado en calzada recta.',
  },
  {
    question: '¿Cuándo está bien colocado en el asiento para conducir?',
    answers: [
      'Cuando llevo las piernas dobladas y el cuerpo hacia adelante.',
      'Cuando llevo las piernas un poco dobladas y el cuerpo recto.',
      'Cuando llevo las piernas rectas y el cuerpo hacia atrás.',
    ],
    correct: 'Cuando llevo las piernas un poco dobladas y el cuerpo recto.',
  },
  {
    question: '¿Cuándo debe comprobar el reglaje de los espejos retrovisores?',
    answers: [
      'Antes de iniciar la marcha en terreno llano y recto.',
      'Cuando el vehículo circule en terreno llano y recto.',
      'Circulando a una velocidad lenta.',
    ],
    correct: 'Antes de iniciar la marcha en terreno llano y recto.',
  },
  {
    question: 'En las motocicletas, la postura del conductor ha de ser...',
    answers: [
      'un poco forzada, para evitar relajamientos.',
      'suelta y no forzada, sin encorvar el cuerpo más de lo necesario.',
      'lo más aerodinámica posible, encorvando el cuerpo cuanto más mejor.',
    ],
    correct: 'suelta y no forzada, sin encorvar el cuerpo más de lo necesario.',
  },
  {
    question: 'El ADAS denominado asistente de velocidad inteligente (ISA)…',
    answers: [
      'ayuda a conocer y respetar el límite de velocidad.',
      'detecta cuando la presión del inflado de alguna rueda no es correcta.',
      'previene una posible colisión con peatones o vehículos en el ángulo muerto de visión del conductor.',
    ],
    correct: 'ayuda a conocer y respetar el límite de velocidad.',
  },
  {
    question:
      'La cámara de marcha atrás transmite una vista del entorno trasero del vehículo...',
    answers: [
      'al poner la marcha atrás.',
      'al encender la pantalla multifunción.',
      'al detener el vehículo.',
    ],
    correct: 'al poner la marcha atrás.',
  },
  {
    question:
      'Cuando el vehículo está en una cuesta arriba y el conductor cambia el pie del freno al acelerador para iniciar la marcha, el sistema de ayuda de salida en pendiente...',
    answers: [
      'mantiene la presión del circuito de frenos durante unos instantes, impidiendo que el vehículo se vaya hacia atrás.',
      'libera más rápido la presión del circuito de frenos para que el vehículo arranque fácilmente.',
      'revoluciona fuertemente el motor para facilitar la salida del vehículo.',
    ],
    correct:
      'mantiene la presión del circuito de frenos durante unos instantes, impidiendo que el vehículo se vaya hacia atrás.',
  },
  {
    question: 'El sistema de alerta de tráfico cruzado (RCTA) supervisa...',
    answers: [
      'el tráfico trasero en sentido transversal.',
      'el tráfico delantero en sentido transversal.',
      'todo el tráfico en sentido transversal.',
    ],
    correct: 'el tráfico trasero en sentido transversal.',
  },
  {
    question: 'De día es obligatorio encender el alumbrado que corresponda...',
    answers: [
      'cuando se circule por carriles para VAO.',
      'cuando se circule por pasos inferiores o tramos de vía afectados por la señal túnel.',
      'solo cuando existan condiciones que disminuyan la visibilidad.',
    ],
    correct:
      'cuando se circule por pasos inferiores o tramos de vía afectados por la señal túnel.',
  },
  {
    question:
      'Se entiende por vía insuficientemente iluminada aquella en la que...',
    answers: [
      'no puede distinguirse un vehículo a 20 metros de distancia.',
      'no puede leerse la matrícula a 10 metros o no se distingue un vehículo oscuro a 50 metros de distancia.',
      'no puede leerse la matrícula a 50 metros o no se distingue un vehículo oscuro a 10 metros de distancia.',
    ],
    correct:
      'no puede leerse la matrícula a 10 metros o no se distingue un vehículo oscuro a 50 metros de distancia.',
  },
  {
    question:
      'El conductor de un turismo debe circular con el alumbrado de su vehículo encendido…',
    answers: [
      'cuando circule por un carril para vehículos con alta ocupación (VAO).',
      'en los puentes y pasos a nivel.',
      'entre la puesta y la salida del sol.',
    ],
    correct: 'entre la puesta y la salida del sol.',
  },
  {
    question:
      'En caso de avería de uno de los dispositivos de alumbrado del vehículo, ¿puede circular de noche con un alumbrado de intensidad inferior?',
    answers: [
      'Sí, pero deberá reducir la velocidad hasta la que permita detener el vehículo dentro de la zona iluminada.',
      'No, no podrá continuar el viaje.',
      'Sí, puede continuar hasta el taller más próximo.',
    ],
    correct:
      'Sí, pero deberá reducir la velocidad hasta la que permita detener el vehículo dentro de la zona iluminada.',
  },
  {
    question: 'La luz de posición de los vehículos, ¿qué indica?',
    answers: [
      'Que el vehículo está circulando.',
      'Que el vehículo está parado.',
      'El lugar que ocupa en la calzada y la anchura del vehículo.',
    ],
    correct: 'El lugar que ocupa en la calzada y la anchura del vehículo.',
  },
  {
    question:
      '¿Deberá estar iluminada la placa de matrícula posterior de un remolque?',
    answers: [
      'Sí, entre el ocaso y la salida del sol.',
      'No, porque es retroreflectante.',
      'No, porque únicamente deberá estar iluminada obligatoriamente la del vehículo tractor.',
    ],
    correct: 'Sí, entre el ocaso y la salida del sol.',
  },
  {
    question:
      '¿Está permitido circular utilizando solamente el alumbrado de posición del vehículo entre la puesta y la salida del sol?',
    answers: [
      'Sí, en vías de poblado suficientemente iluminadas.',
      'Sí, en cualquier vía suficientemente iluminada.',
      'No, debe utilizarse además el alumbrado de cruce o el de carretera.',
    ],
    correct:
      'No, debe utilizarse además el alumbrado de cruce o el de carretera.',
  },
  {
    question:
      'El conductor de un vehículo inmovilizado en la calzada o arcén de una vía interurbana entre la puesta y la salida del sol está obligado a...',
    answers: [
      'mantener encendidas las luces de posición.',
      'mantener encendidas siempre las luces de emergencia.',
      'apagar el alumbrado para evitar el desgaste de la batería.',
    ],
    correct: 'mantener encendidas las luces de posición.',
  },
  {
    question:
      'En vías urbanas que no sean travesías ¿es obligatorio que los vehículos estacionados tengan encendido el alumbrado de posición?',
    answers: [
      'No, cuando la iluminación permita distinguirlos a una distancia suficiente.',
      'Sí, cuando la vía forma intersección con una travesía.',
      'Sí, cuando la vía solo tiene un carril de circulación.',
    ],
    correct:
      'No, cuando la iluminación permita distinguirlos a una distancia suficiente.',
  },
  {
    question:
      'Si estaciona en una travesía insuficientemente iluminada, ¿qué luces debe dejar encendidas?',
    answers: [
      'La luz de posición, que podrá sustituirse por la de estacionamiento cuando el vehículo se halle estacionado en línea.',
      'La luz de posición con la de cruce o la de largo alcance.',
      'Ninguna.',
    ],
    correct:
      'La luz de posición, que podrá sustituirse por la de estacionamiento cuando el vehículo se halle estacionado en línea.',
  },
  {
    question: 'Un vehículo debe llevar encendida la luz de gálibo si mide...',
    answers: [
      '2 o más metros de ancho y 6 o más metros de largo.',
      'más de 4 metros de alto.',
      'más de 2,10 metros de ancho.',
    ],
    correct: 'más de 2,10 metros de ancho.',
  },
  {
    question:
      'Un vehículo tiene una anchura superior a 2,10 metros, ¿cuándo es obligatorio encender la luz de gálibo?',
    answers: [
      'Cuando circule por un túnel a cualquier hora del día.',
      'Solo cuando circule por un túnel entre la puesta y la salida del sol.',
      'Solo cuando circule por un túnel insuficientemente iluminado.',
    ],
    correct: 'Cuando circule por un túnel a cualquier hora del día.',
  },
  {
    question:
      'Las motocicletas cuya cilindrada no supera los 125 centímetros cúbicos, ¿están obligadas a llevar instalada la luz de largo alcance o carretera?',
    answers: [
      'Sí, una o dos luces.',
      'No.',
      'Sí, si llevan sidecar; en caso contrario no.',
    ],
    correct: 'Sí, una o dos luces.',
  },
  {
    question: '¿En qué vías puede emplear las luces de largo alcance?',
    answers: [
      'En cualquier tipo de vía, siempre que sea necesario.',
      'En las vías interurbanas insuficientemente iluminadas.',
      'En las vías urbanas, incluidas las travesías.',
    ],
    correct: 'En las vías interurbanas insuficientemente iluminadas.',
  },
  {
    question:
      'Es obligatorio utilizar el alumbrado de largo alcance o carretera al circular a más de...',
    answers: [
      '40 kilómetros por hora por una vía interurbana insuficientemente iluminada.',
      '20 km/h por una vía interurbana o travesía insuficientemente iluminada.',
      '20 km/h por una vía interurbana insuficientemente iluminada.',
    ],
    correct:
      '40 kilómetros por hora por una vía interurbana insuficientemente iluminada.',
  },
  {
    question:
      'Circulando por vía urbana, para evitar un posible accidente, ¿cómo indicará su presencia a otro vehículo que pretende incorporarse a la circulación?',
    answers: [
      'Únicamente utilizando el claxon para que no salga.',
      'Encendiendo la luz de largo alcance y utilizando el claxon de forma simultánea.',
      'Utilizando de forma intermitente los alumbrados de corto o largo alcance sin deslumbrar.',
    ],
    correct:
      'Utilizando de forma intermitente los alumbrados de corto o largo alcance sin deslumbrar.',
  },
  {
    question:
      '¿Puede mantener encendida la luz de largo alcance cuando efectúe una parada?',
    answers: [
      'Sí, cuando la vía está insuficientemente iluminada.',
      'No, está prohibido.',
      'Sí, en vías interurbanas.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question: 'No está permitido utilizar la luz de largo alcance...',
    answers: [
      'si el vehículo está parado o estacionado.',
      'en túneles y tramos de vía afectados por señal de túnel.',
      'para avisar a otros usuarios de un posible peligro.',
    ],
    correct: 'si el vehículo está parado o estacionado.',
  },
  {
    question:
      '¿Está permitido circular en poblado con la luz de largo alcance?',
    answers: [
      'No.',
      'Sí, siempre que no se deslumbre a ningún usuario.',
      'Sí, cuando la vía esté insuficientemente iluminada.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Las motocicletas sin sidecar, ¿cuántas luces de corto alcance deben llevar instaladas?',
    answers: [
      'Una o dos delante.',
      'Dos, obligatoriamente, una delante y otra detrás.',
      'Solo una delante.',
    ],
    correct: 'Una o dos delante.',
  },
  {
    question:
      'Un turismo circula por una travesía insuficientemente iluminada, ¿qué alumbrado debe llevar?',
    answers: [
      'El alumbrado de posición y el de cruce.',
      'Solo el alumbrado de carretera.',
      'Solo el alumbrado de posición.',
    ],
    correct: 'El alumbrado de posición y el de cruce.',
  },
  {
    question:
      '¿Qué alumbrado debe utilizar si circula antes de la salida del sol, pero con buena visibilidad?',
    answers: [
      'El de posición y el de corto alcance.',
      'No es necesario que utilice ningún alumbrado.',
      'Únicamente el alumbrado de posición.',
    ],
    correct: 'El de posición y el de corto alcance.',
  },
  {
    question:
      'Si circula de noche por una vía urbana y no puede ver un vehículo pintado de oscuro a 50 metros, debe utilizar la luz de posición y...',
    answers: [
      'el alumbrado de corto alcance y el de largo alcance.',
      'el alumbrado de corto alcance.',
      'el alumbrado de corto alcance o el de largo alcance indistintamente.',
    ],
    correct: 'el alumbrado de corto alcance.',
  },
  {
    question:
      'Cuando circule de noche por una vía urbana bien iluminada, ¿qué luces debe llevar encendidas en su motocicleta?',
    answers: [
      'Solamente la luz de posición.',
      'La luz de posición y la de carretera, si no hay riesgo de producir deslumbramiento.',
      'La luz de posición y la de cruce.',
    ],
    correct: 'La luz de posición y la de cruce.',
  },
  {
    question:
      'Si circula y tiene dudas sobre las condiciones de luminosidad, ¿qué debe hacer?',
    answers: [
      'Ante la duda, encender las luces de cruce.',
      'Ante la duda, apagar las luces para no provocar deslumbramientos.',
      'Ante la duda, encender las luces de carretera.',
    ],
    correct: 'Ante la duda, encender las luces de cruce.',
  },
  {
    question:
      'Circulando por un paso inferior suficientemente iluminado, ¿es necesario encender algún alumbrado?',
    answers: [
      'No, porque con la iluminación de la vía es suficiente.',
      'Sí, el alumbrado de posición y el de corto alcance.',
      'Sí, el alumbrado de posición, para advertir mi presencia a los demás usuarios.',
    ],
    correct: 'Sí, el alumbrado de posición y el de corto alcance.',
  },
  {
    question:
      '¿Debe encender la luz de corto alcance en un túnel suficientemente iluminado?',
    answers: [
      'Sí, es obligatorio.',
      'No, porque está iluminado.',
      'No, debe encender la luz de largo alcance.',
    ],
    correct: 'Sí, es obligatorio.',
  },
  {
    question:
      'Durante el día, con tiempo claro, ¿cuándo es obligatorio encender la luz corta?',
    answers: [
      'Cuando circulo por un carril reversible o por un carril abierto a la circulación en sentido contrario.',
      'Cuando necesite frenar bruscamente.',
      'Cuando circulo por vías estrechas y con muchas curvas.',
    ],
    correct:
      'Cuando circulo por un carril reversible o por un carril abierto a la circulación en sentido contrario.',
  },
  {
    question:
      'Si está amaneciendo y aún no ha salido el sol, ¿qué luces debe llevar encendidas en su turismo?',
    answers: [
      'Las de corto alcance y las de posición.',
      'Ninguna.',
      'Solo las de posición, porque se ve bien.',
    ],
    correct: 'Las de corto alcance y las de posición.',
  },
  {
    question:
      '¿Cuándo es obligatorio utilizar el alumbrado de corto alcance durante el día?',
    answers: [
      'Al circular por un carril para VAO.',
      'Cuando llueve.',
      'Al circular por un carril reversible.',
    ],
    correct: 'Al circular por un carril reversible.',
  },
  {
    question: '¿En qué situaciones utilizará el alumbrado por el día?',
    answers: [
      'Cuando conduzca una motocicleta en cualquier tipo de vía y los vehículos que circulen por carriles habilitados en sentido contrario.',
      'Las motocicletas y los vehículos que circulen por una vía con un carril en sentido contrario.',
      'Conduciendo una motocicleta o un ciclomotor solo cuando las condiciones meteorológicas disminuyan la visibilidad.',
    ],
    correct:
      'Cuando conduzca una motocicleta en cualquier tipo de vía y los vehículos que circulen por carriles habilitados en sentido contrario.',
  },
  {
    question: 'La luz de carretera debe sustituirse por la de cruce...',
    answers: [
      'cuando haya niebla.',
      'al circular por una autopista o una autovía.',
      'cuando exista la posibilidad de deslumbrar a otros usuarios.',
    ],
    correct: 'cuando exista la posibilidad de deslumbrar a otros usuarios.',
  },
  {
    question: 'Con las luces de corto alcance, ¿está permitido hacer ráfagas?',
    answers: [
      'Sí, solo en vías urbanas.',
      'Sí, solo en vías interurbanas.',
      'Sí, tanto en vías urbanas como en vías interurbanas.',
    ],
    correct: 'Sí, tanto en vías urbanas como en vías interurbanas.',
  },
  {
    question:
      'Durante la noche, ¿debe utilizarse la luz antiniebla delantera con alguna otra?',
    answers: [
      'Sí, al menos posición.',
      'No.',
      'Sí, con la luz de posición y además con las de cruce y/o carretera.',
    ],
    correct:
      'Sí, con la luz de posición y además con las de cruce y/o carretera.',
  },
  {
    question: 'Hay una nube de humo, ¿debe utilizarse algún tipo de alumbrado?',
    answers: [
      'No, porque es de día.',
      'Sí, la luz antiniebla delantera o la luz de corto o largo alcance.',
      'Solo si viene algún vehículo en sentido contrario.',
    ],
    correct:
      'Sí, la luz antiniebla delantera o la luz de corto o largo alcance.',
  },
  {
    question:
      'Cuando circula con su motocicleta en condiciones de lluvia intensa y niebla, ¿qué luces debe encender, al menos?',
    answers: [
      'La luz antiniebla trasera y opcionalmente la delantera.',
      'La luz de carretera, tanto dentro como fuera de poblado.',
      'La luz de posición y la de corto alcance.',
    ],
    correct: 'La luz de posición y la de corto alcance.',
  },
  {
    question: 'La luz antiniebla delantera podrá utilizarse...',
    answers: [
      'cuando existan condiciones meteorológicas o ambientales que disminuyan sensiblemente la visibilidad.',
      'siempre entre la puesta y la salida del sol, para complementar a las otras luces.',
      'siempre que se circule de noche.',
    ],
    correct:
      'cuando existan condiciones meteorológicas o ambientales que disminuyan sensiblemente la visibilidad.',
  },
  {
    question: 'La luz antinieblas trasera deberá utilizarse en caso de...',
    answers: ['circulación intensa.', 'lluvia muy intensa.', 'fuerte viento.'],
    correct: 'lluvia muy intensa.',
  },
  {
    question:
      'Con niebla que reduce sensiblemente la visibilidad, ¿está permitido conducir únicamente con los alumbrados de posición y corto alcance?',
    answers: [
      'Sí, aunque el vehículo disponga de luz delantera de niebla.',
      'No, debe llevar las luces delanteras de niebla en todos los casos.',
      'No, debe encender obligatoriamente el alumbrado delantero y trasero de niebla.',
    ],
    correct: 'Sí, aunque el vehículo disponga de luz delantera de niebla.',
  },
  {
    question:
      'En caso de lluvia no intensa, ¿está permitido utilizar la luz antiniebla?',
    answers: [
      'Sí, tanto la delantera como la trasera.',
      'Sí, pero solo la trasera.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: 'La luz antiniebla trasera deberá utilizarse en caso de...',
    answers: ['frenada brusca.', 'nubes densas de humo.', 'heladas nocturnas.'],
    correct: 'nubes densas de humo.',
  },
  {
    question:
      '¿Está permitido circular por una travesía con las luces antiniebla encendidas en condiciones normales de visibilidad?',
    answers: ['Sí.', 'No, porque en travesía están prohibidas.', 'No.'],
    correct: 'No.',
  },
  {
    question:
      'Entre la puesta y la salida del sol, en un tramo con muchas curvas, señalizadas con la señal de curvas peligrosas, ¿está permitido usar la luz antiniebla delantera?',
    answers: [
      'Sí, siempre es obligatorio utilizarla junto con la luz de cruce o la de carretera.',
      'No, si no hay condiciones meteorológicas o ambientales adversas.',
      'Sí, cuando la vía sea estrecha.',
    ],
    correct: 'Sí, cuando la vía sea estrecha.',
  },
  {
    question: 'Una motocicleta, ¿puede llevar instaladas luces antiniebla?',
    answers: [
      'No, las motocicletas no pueden llevar luces antiniebla.',
      'Sí, de forma opcional, tanto en la parte delantera como trasera.',
      'Sí, pero únicamente en la parte trasera.',
    ],
    correct: 'Sí, de forma opcional, tanto en la parte delantera como trasera.',
  },
  {
    question:
      'En un tramo recto, de noche, sin condiciones atmosféricas adversas, ¿es correcto el alumbrado que lleva encendido este vehículo?',
    answers: [
      'Sí.',
      'Únicamente cuando circule por una calzada estrecha.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Circulando con lluvia intensa, ¿es obligatorio utilizar la luz antiniebla trasera?',
    answers: ['Sí.', 'No.', 'Sí, la trasera y la delantera.'],
    correct: 'No.',
  },
  {
    question:
      'Al circular bajo condiciones de visibilidad especialmente desfavorables, ¿es obligatorio encender la luz antiniebla trasera?',
    answers: [
      'Sí, para indicar su posición al resto de los usuarios.',
      'Sí, siendo también obligatorio encender la luz de largo alcance.',
      'No, es solo opcional.',
    ],
    correct: 'Sí, para indicar su posición al resto de los usuarios.',
  },
  {
    question:
      'El conductor de un vehículo que no puede alcanzar la velocidad mínima de la vía, ¿está obligado a encender la señal de emergencia si existe peligro de alcance?',
    answers: [
      'Sí.',
      'No, está prohibido usar la señal de emergencia con el vehículo en movimiento.',
      'No es obligatorio, pero sí es aconsejable.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Este vehículo está averiado y circula muy despacio con la luz de emergencia encendida. ¿Es correcto?',
    answers: [
      'No, porque está prohibido utilizarla en vías urbanas.',
      'No, porque las luces de emergencia se encienden únicamente cuando el vehículo está parado.',
      'Sí, porque está averiado.',
    ],
    correct: 'Sí, porque está averiado.',
  },
  {
    question: 'Una motocicleta, ¿puede disponer de señal de emergencia?',
    answers: ['Sí.', 'Sí, cuando es de más de 125 centímetros cúbicos.', 'No.'],
    correct: 'Sí.',
  },
  {
    question:
      'Las luces rojas encendidas del vehículo de delante, ¿qué indican?',
    answers: [
      'Que hay niebla.',
      'Qué círculo por una travesía.',
      'Que el vehículo está frenando.',
    ],
    correct: 'Que el vehículo está frenando.',
  },
  {
    question:
      '¿Es correcto que un automóvil disponga únicamente de la tercera luz de frenado?',
    answers: [
      'No.',
      'Sí, cuando esta sea de intensidad superior a las obligatorias.',
      'Sí, es suficiente para advertir la intención de inmovilizar el vehículo o de frenar.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Si por circunstancias del tráfico prevé que va a tener que reducir considerablemente la velocidad, ¿qué debe hacer?',
    answers: [
      'Deberá advertirlo mediante el empleo reiterado de las luces de freno.',
      'Advertirlo mediante señales acústicas.',
      'Circular con la marcha más corta posible.',
    ],
    correct:
      'Deberá advertirlo mediante el empleo reiterado de las luces de freno.',
  },
  {
    question:
      'El vehículo azul lleva las luces blancas encendidas. ¿Qué indica?',
    answers: [
      'Que está empezando a circular hacia adelante.',
      'Que tiene una avería.',
      'Que está efectuando la maniobra de marcha atrás.',
    ],
    correct: 'Que está efectuando la maniobra de marcha atrás.',
  },
  {
    question:
      'El conductor de un vehículo puede utilizar las señales acústicas para advertir su presencia a otros usuarios...',
    answers: [
      'tanto en vías urbanas como en vías interurbanas.',
      'solo en vías urbanas.',
      'únicamente en vías interurbanas.',
    ],
    correct: 'tanto en vías urbanas como en vías interurbanas.',
  },
  {
    question: 'Las advertencias acústicas se pueden utilizar...',
    answers: [
      'en vías estrechas con muchas curvas.',
      'para advertir el propósito de adelantar únicamente dentro de poblado.',
      'en vías anchas con pocas curvas.',
    ],
    correct: 'en vías estrechas con muchas curvas.',
  },
  {
    question:
      'En esta vía urbana, para advertir al conductor del vehículo rojo la intención de adelantarte, ¿puede usar las señales acústicas?',
    answers: [
      'Sí, pero solamente en caso de avería de las luces de mi vehículo.',
      'Sí, excepto cuando hay una señal que lo prohíbe.',
      'No, porque está prohibido.',
    ],
    correct: 'No, porque está prohibido.',
  },
  {
    question:
      'Circulando por vía urbana, para evitar un posible accidente, ¿cómo indicará su presencia a otro vehículo que pretende incorporarse a la circulación?',
    answers: [
      'Utilizando de forma intermitente los alumbrados de corto o largo alcance sin deslumbrar.',
      'Únicamente utilizando el claxon para que no salga.',
      'Encendiendo la luz de largo alcance y utilizando el claxon de forma simultánea.',
    ],
    correct:
      'Utilizando de forma intermitente los alumbrados de corto o largo alcance sin deslumbrar.',
  },
  {
    question:
      'Un semáforo cambia de rojo a verde. ¿Está permitido emplear el claxon para advertir a otro conductor que ya se puede pasar?',
    answers: [
      'No, en ningún caso.',
      'Sí, cuando se trate de una vía urbana.',
      'Sí, cuando se trate de una vía interurbana.',
    ],
    correct: 'No, en ningún caso.',
  },
  {
    question: 'En vías con tráfico denso, ¿se puede hacer uso del claxon?',
    answers: [
      'Sí, pero solo fuera de poblado.',
      'Sí, pero solo dentro de poblado.',
      'No, si no es estrictamente necesario.',
    ],
    correct: 'No, si no es estrictamente necesario.',
  },
  {
    question: '¿Es necesario revisar el filtro del aire?',
    answers: [
      'Solo si se circula por caminos polvorientos.',
      'No, no es necesario.',
      'Sí, periódicamente.',
    ],
    correct: 'Sí, periódicamente.',
  },
  {
    question: 'Los bornes de la batería, ¿deben mantenerse limpios?',
    answers: [
      'Sí, solo en las baterías con mantenimiento.',
      'Sí, solo en las baterías sin mantenimiento.',
      'Sí, en todas las baterías.',
    ],
    correct: 'Sí, en todas las baterías.',
  },
  {
    question:
      'Cuando una batería necesita líquido, ¿qué líquido se debe poner?',
    answers: ['Agua y aceite.', 'Agua y anticongelante.', 'Agua destilada.'],
    correct: 'Agua destilada.',
  },
  {
    question:
      '¿Es conveniente hacer una revisión exhaustiva del estado del vehículo si el humo que despide el tubo de escape es de color negro?',
    answers: [
      'No, porque solo es un problema de refrigeración que suele desaparecer.',
      'Sí, porque el motor puede estar quemando aceite.',
      'Sí, porque en este caso puede deberse a una mala combustión.',
    ],
    correct: 'Sí, porque en este caso puede deberse a una mala combustión.',
  },
  {
    question: 'Las lámparas del automóvil deben sustituirse...',
    answers: [
      'antes de pasar la inspección técnica del vehículo.',
      'solamente en caso de rotura.',
      'en cuanto disminuya su intensidad luminosa.',
    ],
    correct: 'en cuanto disminuya su intensidad luminosa.',
  },
  {
    question: 'El nivel de aceite del motor, ¿cómo se debe comprobar?',
    answers: [
      'Con el motor apagado y frío.',
      'Con el motor funcionando.',
      'Con el motor caliente.',
    ],
    correct: 'Con el motor apagado y frío.',
  },
  {
    question: 'El filtro de aceite, ¿cuándo hay que cambiarlo?',
    answers: [
      'Cuando cambio el aceite.',
      'Cada mil kilómetros.',
      'Cuando lo indique el manual del vehículo.',
    ],
    correct: 'Cuando lo indique el manual del vehículo.',
  },
  {
    question: '¿Qué se debe hacer con el aceite usado del vehículo?',
    answers: [
      'Tirarlo en tierra.',
      'Entregarlo en un contenedor de recuperación de aceite.',
      'Tirarlo en una alcantarilla o desagüe.',
    ],
    correct: 'Entregarlo en un contenedor de recuperación de aceite.',
  },
  {
    question: '¿Cuál es la misión principal del líquido refrigerante?',
    answers: [
      'Enfriar el motor del vehículo.',
      'Que el vehículo tenga calefacción.',
      'Que el vehículo tenga aire acondicionado.',
    ],
    correct: 'Enfriar el motor del vehículo.',
  },
  {
    question: 'Las ruedas motrices, ¿cuáles son?',
    answers: [
      'Las ruedas traseras.',
      'Pueden ser las ruedas delanteras o las ruedas traseras según el tipo de vehículo.',
      'Las ruedas delanteras.',
    ],
    correct:
      'Pueden ser las ruedas delanteras o las ruedas traseras según el tipo de vehículo.',
  },
  {
    question: 'A baja velocidad, la dirección asistida progresiva...',
    answers: [
      'hace que la dirección se endurezca.',
      'reduce al mínimo el esfuerzo necesario para mover el volante.',
      'permite un control más preciso del vehículo.',
    ],
    correct: 'reduce al mínimo el esfuerzo necesario para mover el volante.',
  },
  {
    question: 'Es recomendable revisar la dirección del vehículo cuando...',
    answers: [
      'el volante no vibra entre las manos a altas velocidades.',
      'se desvía a un lado al soltar el volante en terreno llano.',
      'las ruedas rebotan en los baches.',
    ],
    correct: 'se desvía a un lado al soltar el volante en terreno llano.',
  },
  {
    question: 'Si la amortiguación está en malas condiciones, al frenar...',
    answers: [
      'la parte trasera del vehículo se levanta excesivamente.',
      'la parte delantera del vehículo se levanta excesivamente.',
      'la parte trasera del vehículo se inclina excesivamente.',
    ],
    correct: 'la parte trasera del vehículo se levanta excesivamente.',
  },
  {
    question: 'La amortiguación en malas condiciones hace que, al frenar...',
    answers: [
      'la parte trasera del vehículo baje excesivamente.',
      'el vehículo se incline hacia delante.',
      'la parte delantera del vehículo se levante excesivamente.',
    ],
    correct: 'el vehículo se incline hacia delante.',
  },
  {
    question:
      '¿Puede perder el control del vehículo si circula con los amortiguadores en mal estado?',
    answers: [
      'Sí, porque la distancia de frenado disminuirá, especialmente con el firme irregular o mojado.',
      'Sí, porque el vehículo puede experimentar una inclinación excesiva al tomar las curvas.',
      'No, sin embargo, los cambios de marcha se realizarán con mayor dificultad debido a las oscilaciones del vehículo.',
    ],
    correct:
      'Sí, porque la distancia de frenado disminuirá, especialmente con el firme irregular o mojado.',
  },
  {
    question:
      'Un amortiguador en malas condiciones, ¿qué consecuencias puede tener?',
    answers: [
      'Que las luces oscilen durante la marcha y puedan deslumbrar.',
      'Que el vehículo gane estabilidad.',
      'Que disminuya la distancia de frenado.',
    ],
    correct: 'Que las luces oscilen durante la marcha y puedan deslumbrar.',
  },
  {
    question: 'Una correcta suspensión del vehículo sirve para...',
    answers: [
      'mantener el vehículo siempre en contacto con el suelo.',
      'mantener inmovilizado el vehículo.',
      'transmitir el giro del motor a las ruedas.',
    ],
    correct: 'mantener el vehículo siempre en contacto con el suelo.',
  },
  {
    question: 'Si los amortiguadores están defectuosos...',
    answers: [
      'para frenar es necesario ejercer menos presión en el pedal de freno.',
      'aumenta la distancia de frenado peligrosamente.',
      'se reduce la distancia de frenado en más del 50 por ciento.',
    ],
    correct: 'aumenta la distancia de frenado peligrosamente.',
  },
  {
    question:
      'Cuando los neumáticos del vehículo se desgastan irregularmente puede ser...',
    answers: [
      'únicamente porque la suspensión esté en malas condiciones.',
      'únicamente porque la amortiguación esté en malas condiciones.',
      'porque la suspensión o la amortiguación estén en malas condiciones.',
    ],
    correct:
      'porque la suspensión o la amortiguación estén en malas condiciones.',
  },
  {
    question:
      'Para el buen mantenimiento del sistema de frenos, ¿qué se debe hacer?',
    answers: [
      'Revisar el nivel del líquido de frenos.',
      'Pisar a fondo el pedal de freno para comprobar su eficacia.',
      'Engrasar los discos periódicamente.',
    ],
    correct: 'Revisar el nivel del líquido de frenos.',
  },
  {
    question:
      'Si observa que en el momento de pisar el pedal del freno este no actúa con eficacia puede ser debido a...',
    answers: [
      'falta de líquido en los frenos.',
      'que el servofreno haya cristalizado.',
      'que los manguitos de freno estén agarrotados.',
    ],
    correct: 'falta de líquido en los frenos.',
  },
  {
    question:
      'Si el pedal de freno tiene un tacto esponjoso puede ser porque...',
    answers: [
      'hay fugas en el circuito.',
      'las pastillas están muy desgastadas.',
      'hay aire en el sistema hidráulico.',
    ],
    correct: 'hay aire en el sistema hidráulico.',
  },
  {
    question:
      '¿Es necesario revisar con frecuencia el nivel del líquido de frenos?',
    answers: [
      'Sí, y sustituirlo completamente en los plazos indicados por el fabricante.',
      'No, ya que no se gasta con el uso.',
      'Sí, aunque no es necesario sustituirlo.',
    ],
    correct:
      'Sí, y sustituirlo completamente en los plazos indicados por el fabricante.',
  },
  {
    question:
      '¿Hay que revisar periódicamente el estado de las pastillas y los discos de freno?',
    answers: [
      'El estado de las pastillas sí, los discos no se estropean.',
      'No.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Si conduce una motocicleta y la calzada está mojada, ¿es necesario incrementar la presión de inflado de los neumáticos por encima de la recomendada por el fabricante?',
    answers: [
      'Sí, porque aumenta la adherencia de los neumáticos y mejorará la seguridad de circulación.',
      'No, ya que una mayor presión de inflado no contribuye a aumentar la seguridad de circulación.',
      'Sí, ya que aumenta la seguridad de circulación y así se evitan los derrapes.',
    ],
    correct:
      'No, ya que una mayor presión de inflado no contribuye a aumentar la seguridad de circulación.',
  },
  {
    question:
      '¿Cada cuánto tiempo debe controlar la presión de los neumáticos de su vehículo?',
    answers: [
      'Una o dos veces al mes, con los neumáticos en caliente.',
      'Una o dos veces al mes, con los neumáticos en frío.',
      'Solo cuando vaya a realizar un viaje largo.',
    ],
    correct: 'Una o dos veces al mes, con los neumáticos en frío.',
  },
  {
    question:
      '¿Qué elemento del vehículo es importante revisar con más frecuencia?',
    answers: ['Los neumáticos.', 'El líquido de frenos.', 'Las luces.'],
    correct: 'Los neumáticos.',
  },
  {
    question:
      '¿Es conveniente revisar con frecuencia el estado de los neumáticos?',
    answers: [
      'No, solamente cada 5 años como máximo.',
      'Sí, con el fin de que no se ponga en riesgo nuestra seguridad.',
      'Sí, excepto si los neumáticos son sin cámara.',
    ],
    correct: 'Sí, con el fin de que no se ponga en riesgo nuestra seguridad.',
  },
  {
    question:
      'Si la rueda de repuesto es igual al resto de las ruedas del vehículo, ¿qué presión de inflado debe llevar?',
    answers: [
      'La más alta de las recomendadas por el fabricante.',
      'La más baja de las recomendadas por el fabricante.',
      'La misma que recomienda el fabricante para el resto de las ruedas.',
    ],
    correct: 'La más alta de las recomendadas por el fabricante.',
  },
  {
    question:
      '¿A qué presión de inflado se deben llevar los neumáticos de un vehículo?',
    answers: [
      'A la recomendada en cada caso por el fabricante del vehículo.',
      'Un 10 % por encima de la recomendada por el fabricante del vehículo.',
      'Un 15 % por debajo de la recomendada por el fabricante del vehículo.',
    ],
    correct: 'A la recomendada en cada caso por el fabricante del vehículo.',
  },
  {
    question:
      'En esta vía deben obedecer las indicaciones del semáforo situado a la izquierda los vehículos que pretendan...',
    answers: [
      'girar a la izquierda, solamente.',
      'seguir de frente o girar a la derecha.',
      'girar a la izquierda o seguir de frente.',
    ],
    correct: 'girar a la izquierda o seguir de frente.',
  },
  {
    question: 'Cuando el semáforo se ponga verde, ¿qué debe hacer?',
    answers: [
      'Obedecer al semáforo, que tiene prioridad sobre la señal de stop.',
      'Obedecer al semáforo, pero debo ceder el paso.',
      'Obedecer la señal de stop.',
    ],
    correct:
      'Obedecer al semáforo, que tiene prioridad sobre la señal de stop.',
  },
  {
    question:
      'El agente de la imagen balancea una luz roja, ¿a quién ordena detenerse?',
    answers: [
      'A los usuarios de la vía hacia los que dirige la luz.',
      'Únicamente al camión naranja que llega por detrás.',
      'A los vehículos que se aproximen tanto por delante como por detrás.',
    ],
    correct: 'A los usuarios de la vía hacia los que dirige la luz.',
  },
  {
    question: '¿Qué indica este agente?',
    answers: [
      'Detención para todos los usuarios que se acerquen de frente.',
      'Detención para todos los usuarios que se acerquen al agente.',
      'Detención para los vehículos que se acerquen de frente al agente.',
    ],
    correct: 'Detención para todos los usuarios que se acerquen al agente.',
  },
  {
    question: 'Un agente, con toques de silbato cortos y frecuentes, ordena…',
    answers: [
      'que se inmovilice el vehículo fuera de la calzada.',
      'que se reanude la marcha.',
      'que se detengan los vehículos a quienes se dirija.',
    ],
    correct: 'que se detengan los vehículos a quienes se dirija.',
  },
  {
    question:
      'Si un vehículo de la policía de tráfico se sitúa detrás de usted y enciende un dispositivo con una luz amarilla intermitente hacia delante, ¿qué debe hacer?',
    answers: [
      'Detenerme en el lado izquierdo de la calzada, delante del vehículo policial.',
      'Reducir la velocidad y apartarme a la derecha, para facilitar el adelantamiento.',
      'Detenerme en el lado derecho y, en su caso, seguir las instrucciones del agente.',
    ],
    correct:
      'Detenerme en el lado derecho y, en su caso, seguir las instrucciones del agente.',
  },
  {
    question: '¿Qué indica este agente de tráfico?',
    answers: [
      'Que la calzada queda temporalmente cerrada al tráfico.',
      'La necesidad de extremar la precaución ante la proximidad de un vehículo especial.',
      'Que es necesario circular con precaución.',
    ],
    correct: 'Que la calzada queda temporalmente cerrada al tráfico.',
  },
  {
    question: 'Los conos de la imagen son señales...',
    answers: [
      'que únicamente indican el principio de un nuevo carril.',
      'de balizamiento y tienen prioridad sobre el resto de las señales, excepto las realizadas por los agentes de circulación.',
      'que indican lo mismo que las señales horizontales y en el orden de prioridad ocupan el mismo lugar.',
    ],
    correct:
      'de balizamiento y tienen prioridad sobre el resto de las señales, excepto las realizadas por los agentes de circulación.',
  },
  {
    question: 'Los paneles direccionales permanentes indican...',
    answers: [
      'una curva y su nivel de peligrosidad, únicamente.',
      'únicamente una curva y el sentido de la misma.',
      'una curva, el sentido de la misma y el nivel de peligrosidad.',
    ],
    correct: 'una curva, el sentido de la misma y el nivel de peligrosidad.',
  },
  {
    question:
      'Una luz roja intermitente o dos luces rojas alternativamente intermitentes de un semáforo...',
    answers: [
      'obligan a moderar la velocidad antes de pasar.',
      'prohíben temporalmente el paso.',
      'permiten el paso con precaución.',
    ],
    correct: 'prohíben temporalmente el paso.',
  },
  {
    question:
      'El vehículo de la imagen quiere cambiar de dirección a la derecha. ¿Está obligado a detenerse?',
    answers: [
      'No, las indicaciones del semáforo solo le afectan si pretende seguir de frente.',
      'Sí, debe obedecer las indicaciones del semáforo.',
      'No, puede continuar la marcha con precaución.',
    ],
    correct: 'Sí, debe obedecer las indicaciones del semáforo.',
  },
  {
    question:
      'En esta intersección con un semáforo en amarillo intermitente, ¿qué debe hacer?',
    answers: [
      'Continuar con precaución, el semáforo en amarillo intermitente exime de cumplir la señal vertical.',
      'Extremar la precaución y, en su caso, ceder el paso a ambos lados.',
      'Detener el vehículo.',
    ],
    correct: 'Detener el vehículo.',
  },
  {
    question:
      'En el semáforo se enciende la luz amarilla no intermitente, ¿qué debe hacer?',
    answers: [
      'Ceder el paso y después pasar.',
      'Detenerme, siempre y cuando pueda hacerlo sin peligro.',
      'Pasar antes de que se encienda la luz roja.',
    ],
    correct: 'Detenerme, siempre y cuando pueda hacerlo sin peligro.',
  },
  {
    question:
      'La luz verde en forma de flecha del semáforo significa que los vehículos pueden pasar en…',
    answers: [
      'la dirección de la flecha, dejando pasar a los vehículos que circulen por la vía transversal.',
      'cualquier dirección.',
      'la dirección de la flecha, y tienen prioridad en la intersección.',
    ],
    correct:
      'la dirección de la flecha, dejando pasar a los vehículos que circulen por la vía transversal.',
  },
  {
    question:
      'El conductor de este turismo pretende seguir recto pero los vehículos situados detrás de él quieren girar a la derecha, ¿qué debe hacer?',
    answers: [
      'Esperar a que el semáforo cambie para seguir recto.',
      'Girar a la derecha.',
      'Seguir de frente.',
    ],
    correct: 'Girar a la derecha.',
  },
  {
    question: 'Un semáforo con una flecha negra sobre una luz roja fija...',
    answers: [
      'prohíbe circular por donde indica la flecha.',
      'permite seguir circulando extremando la precaución.',
      'obliga a continuar por donde indica la flecha.',
    ],
    correct: 'prohíbe circular por donde indica la flecha.',
  },
  {
    question:
      'La luz verde de un semáforo circular para vehículos indica que...',
    answers: [
      'está permitido el paso y con preferencia de paso.',
      'puede pasar, cediendo el paso a los peatones.',
      'debe ceder el paso a los demás vehículos.',
    ],
    correct: 'está permitido el paso y con preferencia de paso.',
  },
  {
    question:
      'Un semáforo de carril con una luz roja en forma de aspa, ¿qué indica?',
    answers: [
      'Que la calzada está cerrada al tráfico.',
      'Que, temporalmente, no se puede circular por la vía así señalizada.',
      'Que está prohibido ocupar el carril sobre el que se encuentra situado.',
    ],
    correct:
      'Que está prohibido ocupar el carril sobre el que se encuentra situado.',
  },
  {
    question:
      'Si sobre su carril hay un semáforo cuadrado con una flecha verde, ¿debe obedecer una señal de stop o de ceda el paso?',
    answers: [
      'No, porque la flecha verde da prioridad de paso.',
      'No, porque el semáforo tiene prioridad sobre las señales verticales.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question: '¿Qué usuarios de la vía deben obedecer este semáforo?',
    answers: [
      'Bicicletas y ciclomotores.',
      'Motocicletas.',
      'Peatones y bicicletas.',
    ],
    correct: 'Bicicletas y ciclomotores.',
  },
  {
    question: 'Esta señal, ¿qué indica?',
    answers: [
      'Cruce con prioridad de la derecha.',
      'Intersección donde se debe ceder el paso.',
      'Intersección con prioridad sobre incorporación por la derecha.',
    ],
    correct: 'Intersección con prioridad sobre incorporación por la derecha.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Cruce de tranvía.',
      'Paso a nivel sin barreras.',
      'Paso a nivel provisto de barreras o semibarreras.',
    ],
    correct: 'Paso a nivel provisto de barreras o semibarreras.',
  },
  {
    question: 'Esta señal indica la proximidad de un...',
    answers: [
      'cruce con una línea de tranvía.',
      'paso a nivel, puente móvil o muelle.',
      'cruce sin prioridad.',
    ],
    correct: 'paso a nivel, puente móvil o muelle.',
  },
  {
    question: 'Esta señal anuncia la proximidad de...',
    answers: [
      'dos curvas peligrosas seguidas.',
      'una sucesión de curvas peligrosas, la primera a la izquierda.',
      'una curva peligrosa hacia la izquierda.',
    ],
    correct: 'una sucesión de curvas peligrosas, la primera a la izquierda.',
  },
  {
    question: '¿Qué indica la señal?',
    answers: [
      'Peligro por escalón lateral.',
      'Peligro por pendiente ascendente.',
      'Peligro por pendiente descendente.',
    ],
    correct: 'Peligro por pendiente descendente.',
  },
  {
    question: 'Esta señal advierte de la proximidad de...',
    answers: [
      'una calzada con pavimento en mal estado.',
      'un paso para peatones elevado.',
      'un cambio de rasante.',
    ],
    correct: 'una calzada con pavimento en mal estado.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Peligro por la posible existencia de obstáculos en la vía.',
      'Peligro por la proximidad de un tramo cuyo pavimento puede resultar deslizante a causa del hielo o la nieve.',
      'Peligro por la proximidad de una zona de la calzada cuyo pavimento puede resultar muy deslizante.',
    ],
    correct:
      'Peligro por la proximidad de una zona de la calzada cuyo pavimento puede resultar muy deslizante.',
  },
  {
    question: '¿Qué indica la señal?',
    answers: [
      'Vía con dos carriles para el mismo sentido.',
      'Circulación en los dos sentidos.',
      'Prioridad de paso en sentido contrario.',
    ],
    correct: 'Circulación en los dos sentidos.',
  },
  {
    question: 'La señal indica, peligro debido a que la vía desemboca en...',
    answers: [
      'una zona que hay obras.',
      'un muelle o en una corriente de agua.',
      'una pendiente con pavimento en mal estado.',
    ],
    correct: 'un muelle o en una corriente de agua.',
  },
  {
    question: '¿De qué peligro nos advierte esta señal?',
    answers: [
      'Escalón lateral.',
      'Pavimento deslizante.',
      'Obstrucción de la calzada.',
    ],
    correct: 'Obstrucción de la calzada.',
  },
  {
    question: 'Esta señalización prohíbe estacionar...',
    answers: [
      'en toda la población.',
      'desde la vertical de la señal hasta la próxima intersección.',
      'en la travesía.',
    ],
    correct: 'en toda la población.',
  },
  {
    question: '¿Dónde hay que detenerse para cumplir la señal de stop?',
    answers: [
      'Antes de la señal.',
      'Ante la línea de detención, sin rebasarla.',
      'Inmediatamente antes de la intersección, aun cuando se rebase la línea de detención.',
    ],
    correct: 'Ante la línea de detención, sin rebasarla.',
  },
  {
    question: 'Esta señal indica…',
    answers: [
      'que hay que detenerse siempre.',
      'prioridad respecto al sentido contrario.',
      'que no se puede pasar cuando se obligue a los vehículos que vengan en sentido contrario a detenerse.',
    ],
    correct: 'prioridad respecto al sentido contrario.',
  },
  {
    question: 'Esta señal, ¿qué indica?',
    answers: [
      'Entrada prohibida solo a vehículos a motor.',
      'Entrada prohibida a toda clase de vehículos.',
      'Circulación prohibida en ambos sentidos para toda clase de vehículos.',
    ],
    correct: 'Entrada prohibida a toda clase de vehículos.',
  },
  {
    question: 'A la vista de esta señal, ¿puede pasar conduciendo un ciclo?',
    answers: [
      'Sí, porque no es un vehículo a motor.',
      'Sí, porque la señal solo prohíbe el paso a automóviles.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: 'Esta señal indica entrada prohibida a…',
    answers: [
      'vehículos automóviles.',
      'turismos.',
      'vehículos a motor, excepto motocicletas de dos ruedas.',
    ],
    correct: 'vehículos a motor, excepto motocicletas de dos ruedas.',
  },
  {
    question:
      '¿A qué vehículos de transporte de mercancías prohíbe pasar esta señal?',
    answers: [
      'A los de menos de 3.500 kg de MMA.',
      'A los de más de 3.500 kg de MMA con carga o sin carga.',
      'A los de más de 3.500 kg de MMA solo cuando llevan carga.',
    ],
    correct: 'A los de más de 3.500 kg de MMA con carga o sin carga.',
  },
  {
    question: 'Esta señal prohíbe...',
    answers: [
      'el paso a vehículos que transporten más de 1.000 litros de productos capaces de contaminar el agua.',
      'el paso a vehículos cisternas.',
      'el paso a vehículos que transporten más de 500 litros de productos capaces de contaminar el agua.',
    ],
    correct:
      'el paso a vehículos que transporten más de 1.000 litros de productos capaces de contaminar el agua.',
  },
  {
    question: 'Esta señal, ¿prohíbe la entrada a los camiones?',
    answers: [
      'No.',
      'Solo si la masa máxima del camión no supera las 2 toneladas.',
      'Sí, en cualquier caso.',
    ],
    correct: 'No.',
  },
  {
    question: 'La señal de la imagen prohíbe el acceso a...',
    answers: [
      'tractores y otras máquinas de obras autopropulsadas.',
      'los vehículos agrícolas autopropulsados.',
      'todos los tractores.',
    ],
    correct: 'los vehículos agrícolas autopropulsados.',
  },
  {
    question:
      'A la vista de esta señal, ¿qué separación se debe mantener con el vehículo que circula delante?',
    answers: [
      '70 metros como mínimo, en cualquier caso.',
      '70 metros como mínimo, excepto para adelantar.',
      '70 metros como máximo.',
    ],
    correct: '70 metros como mínimo, excepto para adelantar.',
  },
  {
    question: '¿Qué significa esta señal?',
    answers: [
      'Limitación de longitud por eje.',
      'Limitación de masa por eje.',
      'Prohibición de paso a los vehículos cuya anchura entre ejes supere la indicada.',
    ],
    correct: 'Limitación de masa por eje.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Prohibición de pasar sin detenerse.',
      'Entrada prohibida.',
      'Circulación prohibida.',
    ],
    correct: 'Prohibición de pasar sin detenerse.',
  },
  {
    question:
      '¿Cuándo finaliza la prohibición de circular a velocidad superior a la indicada?',
    answers: [
      'Al rebasar la vertical de la próxima señal de "fin de prohibiciones".',
      'Al rebasar la intersección.',
      'Al llegar a la intersección.',
    ],
    correct: 'Al rebasar la intersección.',
  },
  {
    question: '¿Cuándo termina la prohibición de adelantar?',
    answers: [
      'Cuando rebase la vertical de la señal de "fin de la prohibición de adelantamiento".',
      'Cuando llegue al estrechamiento.',
      'Cuando salga del estrechamiento.',
    ],
    correct:
      'Cuando rebase la vertical de la señal de "fin de la prohibición de adelantamiento".',
  },
  {
    question: '¿Cuándo puede estacionar a la vista de esta señal?',
    answers: [
      'A partir de las 9 horas del día 16 y hasta las 9 horas del día 1.',
      'Nunca, ya que esta señal prohíbe el estacionamiento permanentemente.',
      'A partir de las 9 horas del día 1 y hasta las 9 horas del día 16.',
    ],
    correct:
      'A partir de las 9 horas del día 1 y hasta las 9 horas del día 16.',
  },
  {
    question: 'Delante de un vado, esta señal prohíbe...',
    answers: [
      'únicamente la parada.',
      'solamente el estacionamiento.',
      'la parada y el estacionamiento.',
    ],
    correct: 'solamente el estacionamiento.',
  },
  {
    question: 'Esta señal prohíbe…',
    answers: [
      'estacionar, pero permite parar.',
      'parar, pero permite estacionar.',
      'parar y estacionar.',
    ],
    correct: 'parar y estacionar.',
  },
  {
    question:
      'Si hoy es el día 17 del mes estará prohibido estacionar junto a...',
    answers: ['la señal A.', 'la señal C.', 'la señal B.'],
    correct: 'la señal A.',
  },
  {
    question: '¿Qué indica esta señal situada sobre un refugio?',
    answers: [
      'Los lados de la calzada en los que está permitido estacionar.',
      'Los lados del refugio por donde está prohibido pasar.',
      'Los lados del refugio por donde los vehículos han de pasar.',
    ],
    correct: 'Los lados del refugio por donde los vehículos han de pasar.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'La obligación de girar a la derecha en la intersección.',
      'La dirección y el sentido del movimiento giratorio que los vehículos deben seguir.',
      'La obligación de girar a la izquierda en la intersección.',
    ],
    correct:
      'La dirección y el sentido del movimiento giratorio que los vehículos deben seguir.',
  },
  {
    question:
      '¿Está obligado a circular cualquier automóvil por una calzada así señalizada?',
    answers: [
      'Sí, excepto camiones y furgones.',
      'Sí, excepto motocicletas de dos ruedas.',
      'Sí, porque es una vía exclusiva para automóviles.',
    ],
    correct: 'Sí, excepto motocicletas de dos ruedas.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Prohíbe circular a los camiones de más de 3.500 kg de MMA.',
      'Obliga a circular a todo tipo de camiones y furgones, independientemente de su MMA.',
      'Obliga a circular, únicamente, a los camiones y furgones de más de 3.500 kg de MMA.',
    ],
    correct:
      'Obliga a circular a todo tipo de camiones y furgones, independientemente de su MMA.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Vía obligatoria para cualquier motocicleta y prohibición de circular a los demás usuarios.',
      'Vía reservada a vehículos de dos ruedas.',
      'Calzada obligatoria para motocicletas sin sidecar.',
    ],
    correct: 'Calzada obligatoria para motocicletas sin sidecar.',
  },
  {
    question:
      '¿Qué vehículos están obligados a circular por una vía con esta señal?',
    answers: [
      'Los ciclomotores, únicamente.',
      'Los ciclos y las bicicletas.',
      'Los ciclos y los ciclomotores.',
    ],
    correct: 'Los ciclomotores, únicamente.',
  },
  {
    question:
      'A partir de esta señal, circular como mínimo a 30 kilómetros por hora...',
    answers: ['es obligatorio.', 'es recomendable.', 'está prohibido.'],
    correct: 'es obligatorio.',
  },
  {
    question:
      'La señal indica la obligación para los conductores de circular con el alumbrado de corto alcance al menos desde el lugar en que esté situada la señal hasta otra de...',
    answers: [
      'fin de todas las obligaciones para vehículos en movimiento.',
      'fin de todas las obligaciones de carácter local para vehículos en movimiento.',
      'fin de esta obligación.',
    ],
    correct: 'fin de esta obligación.',
  },
  {
    question:
      'Esta señal, en un carril de entrada a un peaje, obliga a quienes circulen por él a…',
    answers: [
      'pagar mediante el sistema de telepeaje o con otros medios.',
      'pagar, exclusivamente, mediante el sistema de peaje dinámico o telepeaje.',
      'utilizarlo, aunque el vehículo no esté equipado con el sistema de telepeaje operativo.',
    ],
    correct:
      'pagar, exclusivamente, mediante el sistema de peaje dinámico o telepeaje.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Fin de prohibición de adelantamiento para camiones.',
      'Fin de todas las prohibiciones anteriores de carácter local referidas a los camiones.',
      'Fin de circulación paralela.',
    ],
    correct: 'Fin de prohibición de adelantamiento para camiones.',
  },
  {
    question:
      'Esta señal indica el lugar desde donde deja de ser aplicable una anterior señal de…',
    answers: [
      'prohibición de adelantamiento.',
      'velocidad máxima.',
      'velocidad mínima.',
    ],
    correct: 'velocidad máxima.',
  },
  {
    question: 'Esta señal significa intervalo...',
    answers: [
      'aconsejado de velocidades, aunque las condiciones sean desfavorables.',
      'obligatorio de velocidades, siempre que las condiciones sean favorables.',
      'aconsejado de velocidades, siempre que las condiciones sean favorables.',
    ],
    correct:
      'aconsejado de velocidades, siempre que las condiciones sean favorables.',
  },
  {
    question: 'Esta señal, ¿puede indicar el principio de un paso inferior?',
    answers: [
      'No, indica el final de un túnel o paso inferior.',
      'No, indica únicamente el principio de un túnel.',
      'Sí, y también el principio de un túnel o de un tramo equiparado a túnel.',
    ],
    correct:
      'Sí, y también el principio de un túnel o de un tramo equiparado a túnel.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Un lugar reservado al estacionamiento.',
      'Una parada de taxis.',
      'Un parada de autobuses.',
    ],
    correct: 'Un lugar reservado al estacionamiento.',
  },
  {
    question: 'Esta señal...',
    answers: [
      'indica sentido obligatorio en una vía de uno o más carriles.',
      'permite cambiar de dirección pero no de sentido.',
      'prohíbe cambiar de dirección y de sentido.',
    ],
    correct: 'permite cambiar de dirección pero no de sentido.',
  },
  {
    question:
      'Conduciendo su turismo, esta señal le indica que para circular es obligatorio el uso de cadenas o neumáticos especiales a una velocidad máxima de...',
    answers: ['80 km/h.', '30 km/h.', '60 km/h.'],
    correct: '30 km/h.',
  },
  {
    question: '¿Qué indica la señal?',
    answers: [
      'Cambio de sentido al mismo nivel a 300 metros.',
      'Cambio de sentido a distinto nivel a 300 metros.',
      'Cambio de dirección al mismo nivel a 300 metros.',
    ],
    correct: 'Cambio de sentido al mismo nivel a 300 metros.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Que en el carril central y en el izquierdo está prohibido circular a más de 70 km/hora.',
      'Que en el carril de la derecha no se debe sobrepasar la velocidad de 70 km/hora.',
      'Que en el carril central y en el izquierdo se deberá circular a 70 km/hora como mínimo.',
    ],
    correct:
      'Que en el carril central y en el izquierdo se deberá circular a 70 km/hora como mínimo.',
  },
  {
    question: '¿Qué indica esta señal vertical?',
    answers: [
      'Que a 300 metros hay una salida.',
      'Que a 300 metros hay una salida o una entrada.',
      'Que a 300 metros hay una entrada.',
    ],
    correct: 'Que a 300 metros hay una salida.',
  },
  {
    question: '¿Está permitido estacionar en una calle residencial?',
    answers: [
      'Sí, donde no se estorbe a los peatones.',
      'No, excepto en los lugares señalizados.',
      'No, está siempre prohibido.',
    ],
    correct: 'No, excepto en los lugares señalizados.',
  },
  {
    question:
      'Esta señal, situada sobre un carril de un puesto de peaje, indica que en él...',
    answers: [
      'solo se puede abonar el peaje mediante tarjeta.',
      'se puede pagar mediante el sistema de peaje dinámico o telepeaje.',
      'es obligatorio el pago del peaje mediante el sistema de peaje dinámico o telepeaje.',
    ],
    correct:
      'se puede pagar mediante el sistema de peaje dinámico o telepeaje.',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'La situación de un apartadero en un túnel.',
      'Una zona de frenado de emergencia.',
      'Una parada de autobuses.',
    ],
    correct: 'La situación de un apartadero en un túnel.',
  },
  {
    question: 'Esta señal indica…',
    answers: [
      'la existencia de una vía para peatones y ciclos segregada del tráfico motorizado.',
      'la intersección con una vía ciclista.',
      'que el acceso esté prohibido a ciclos.',
    ],
    correct:
      'la existencia de una vía para peatones y ciclos segregada del tráfico motorizado.',
  },
  {
    question:
      'En una vía en la que está colocada esta señal, ¿está permitida la circulación de taxis por el carril reservado a autobuses?',
    answers: [
      'Sí, salvo prohibición expresa en contrario.',
      'Sí, porque la señal indica un carril reservado a vehículos dedicados al transporte público de viajeros, en general.',
      'No, porque en la señal no figura la mención "TAXI".',
    ],
    correct: 'No, porque en la señal no figura la mención "TAXI".',
  },
  {
    question: '¿Qué indica esta señal?',
    answers: [
      'Bifurcación hacia la derecha en calzada de tres carriles.',
      'Obligación de seguir de frente porque el carril derecho desaparece.',
      'Inicio de un nuevo carril hacia la derecha en una calzada de dos carriles.',
    ],
    correct: 'Bifurcación hacia la derecha en calzada de tres carriles.',
  },
  {
    question: 'La señal indica…',
    answers: [
      'que el carril sobre el que está situada la señal de vía ciclista solo puede ser utilizado por ciclos.',
      'la existencia de una senda cicable.',
      'que el carril sobre el que está situada la señal de vía ciclista solo puede ser utilizado por ciclos y ciclomotores.',
    ],
    correct:
      'que el carril sobre el que está situada la señal de vía ciclista solo puede ser utilizado por ciclos.',
  },
  {
    question: 'Circula a 70 km/h, ¿por qué carril es obligatorio circular?',
    answers: [
      'Por el del centro.',
      'Por el que mejor convenga a mi destino.',
      'Por el de la derecha.',
    ],
    correct: 'Por el de la derecha.',
  },
  {
    question: 'Esta señal indica la situación…',
    answers: [
      'de un merendero.',
      'de un área de servicio.',
      'de un área de descanso.',
    ],
    correct: 'de un área de descanso.',
  },
  {
    question: 'Esta señalización le indica la distancia…',
    answers: [
      'a la que se encuentra la señal de detención obligatoria de la próxima intersección.',
      'al lugar donde tiene que detenerse en la próxima intersección.',
      'al lugar donde tiene que ceder el paso en la próxima intersección.',
    ],
    correct:
      'a la que se encuentra la señal de detención obligatoria de la próxima intersección.',
  },
  {
    question: 'Los pictogramas de la señal le indican la situación de...',
    answers: [
      'una instalación que dispone de taller de reparación y surtidores de combustible.',
      'un surtidor o estación de servicio de carburante en la que se puede encontrar gasolina con plomo.',
      'un surtidor o estación de servicio de carburantes con disponibilidad de gas licuado de petróleo (GLP) o autogás y estación de recarga eléctrica.',
    ],
    correct:
      'un surtidor o estación de servicio de carburantes con disponibilidad de gas licuado de petróleo (GLP) o autogás y estación de recarga eléctrica.',
  },
  {
    question: '¿Qué indica el pictograma de la imagen?',
    answers: [
      'Que el alcance de la señalización se refiere a vehículos eléctricos.',
      'La existencia de una estación de recarga eléctrica y de vehículos híbridos enchufables.',
      'La existencia de una estación de recarga eléctrica.',
    ],
    correct:
      'Que el alcance de la señalización se refiere a vehículos eléctricos.',
  },
  {
    question: 'Por la izquierda de una línea continua, ¿se puede circular?',
    answers: [
      'Sí, si la vía es de sentido único.',
      'No, en ningún caso.',
      'Sí, para adelantar.',
    ],
    correct: 'Sí, si la vía es de sentido único.',
  },
  {
    question:
      'Cuando la separación entre los trazos de una línea discontinua es sensiblemente más corta que en el caso general, ¿qué puede anunciar?',
    answers: [
      'La proximidad de un carril especial.',
      'La proximidad de un tramo de vía que presenta un riesgo especial.',
      'La proximidad de una travesía.',
    ],
    correct:
      'La proximidad de un tramo de vía que presenta un riesgo especial.',
  },
  {
    question:
      'Si en una vía existe una línea longitudinal continua adosada a otra discontinua...',
    answers: [
      'el carril que tiene más cercana la línea discontinua es reversible.',
      'debemos tener en cuenta solo la línea más cercana al carril por el que circulamos.',
      'ningún vehículo que circule por la vía podrá atravesar ninguna de las dos líneas.',
    ],
    correct:
      'debemos tener en cuenta solo la línea más cercana al carril por el que circulamos.',
  },
  {
    question:
      'Esta marca transversal discontinua, ¿obliga a detenerse antes de franquearla?',
    answers: [
      'Solo si hay visibilidad reducida.',
      'No, salvo que sea necesario para ceder el paso.',
      'No, porque no parar no implica ningún peligro a la circulación.',
    ],
    correct: 'No, salvo que sea necesario para ceder el paso.',
  },
  {
    question: 'La señal horizontal indica…',
    answers: [
      'A que no se debe superar esta velocidad hasta la próxima intersección.',
      'B la velocidad máxima permitida en la vía.',
      'C la velocidad máxima a la que se puede circular por el carril en el que está situada.',
    ],
    correct:
      'C la velocidad máxima a la que se puede circular por el carril en el que está situada.',
  },
  {
    question: '¿Qué indica la flecha?',
    answers: [
      'Que hay un carril de salida a la derecha.',
      'Que hay curva a la derecha.',
      'Que me acerco a una línea continua.',
    ],
    correct: 'Que me acerco a una línea continua.',
  },
  {
    question:
      "Las letras 'P' y 'N' pintadas en la calzada, una a cada lado de un aspa, ¿qué indican?",
    answers: [
      'La proximidad de un paso a nivel con barreras.',
      'La proximidad de un paso a nivel sin barreras.',
      'La proximidad de un paso a nivel con o sin barreras.',
    ],
    correct: 'La proximidad de un paso a nivel con o sin barreras.',
  },
  {
    question: '¿Qué indica la línea longitudinal amarilla?',
    answers: [
      'Que se puede parar y estacionar.',
      'Que se puede parar pero no estacionar.',
      'Que no se puede parar ni estacionar.',
    ],
    correct: 'Que no se puede parar ni estacionar.',
  },
  {
    question: 'Un damero blanco y rojo indica...',
    answers: [
      'la necesidad de reducir la velocidad.',
      'la prohibición de penetrar en la intersección que señala.',
      'el lugar donde empieza una zona de frenado de emergencia.',
    ],
    correct: 'el lugar donde empieza una zona de frenado de emergencia.',
  },
  {
    question:
      '¿Tiene permitido una motocicleta estacionar en una zona delimitada por marcas viales azules?',
    answers: [
      'Sí, cuando la ordenanza municipal lo permita.',
      'Sí, pero solo si la motocicleta es de dos ruedas.',
      'No, el estacionamiento solo está permitido a turismos.',
    ],
    correct: 'Sí, cuando la ordenanza municipal lo permita.',
  },
  {
    question:
      '¿Cuándo debe ceñirse especialmente al borde derecho de la calzada?',
    answers: [
      'Cuando se circule por cambios de rasante o curvas de visibilidad reducida.',
      'Cuando circule en sentido contrario al habitual.',
      'Cuando la circulación esté saturada.',
    ],
    correct:
      'Cuando se circule por cambios de rasante o curvas de visibilidad reducida.',
  },
  {
    question: 'En las glorietas se circulará…',
    answers: [
      'dejando a la izquierda el centro.',
      'dejando a la derecha el centro.',
      'indistintamente, tanto por la derecha como por la izquierda.',
    ],
    correct: 'dejando a la izquierda el centro.',
  },
  {
    question:
      'Como norma general, una motocicleta, ¿puede circular por el arcén?',
    answers: [
      'No, debe circular por la calzada.',
      'Sí, pero solo si su cilindrada es igual o inferior a 125 c.c.',
      'Sí, pero no puede hacerlo en paralelo con otros vehículos.',
    ],
    correct: 'No, debe circular por la calzada.',
  },
  {
    question:
      'En esta situación de aglomeración, ¿podrá circular por el arcén?',
    answers: [
      'No, está prohibido.',
      'Sí, pues existe gran aglomeración y así descongestiona el tráfico.',
      'Sí, si tiene prisa.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question: 'En una autovía que discurre por suelo urbano, debe...',
    answers: [
      'circular por el carril izquierdo.',
      'circular por el carril que mejor convenga a su destino.',
      'circular normalmente por el carril de la derecha.',
    ],
    correct: 'circular normalmente por el carril de la derecha.',
  },
  {
    question:
      'Como norma general, ¿qué vehículos deben circular por la calzada y no por el arcén?',
    answers: [
      'Los vehículos especiales con MMA no superior a 3.500 kilogramos y todos los automóviles.',
      'Los vehículos especiales con MMA superior a 3.500 kilogramos y todos los automóviles.',
      'Todos los vehículos especiales y todos los automóviles.',
    ],
    correct:
      'Los vehículos especiales con MMA superior a 3.500 kilogramos y todos los automóviles.',
  },
  {
    question: 'En una curva de visibilidad reducida, ¿por dónde debe circular?',
    answers: [
      'Dejando completamente libre la mitad de la calzada que corresponda al sentido contrario.',
      'Ocupando parte del sentido contrario, para ser visible con más facilidad.',
      'Por el carril derecho, pasando lo más cerca posible del eje de la vía.',
    ],
    correct:
      'Dejando completamente libre la mitad de la calzada que corresponda al sentido contrario.',
  },
  {
    question:
      'En una vía de doble sentido, ¿por qué lado de una isleta se circulará?',
    answers: [
      'Por su derecha.',
      'Por su derecha o por su izquierda, indistintamente.',
      'Por su izquierda.',
    ],
    correct: 'Por su derecha.',
  },
  {
    question:
      'En vías divididas en tres calzadas, la central podrá estar destinada a la circulación en…',
    answers: [
      'los dos sentidos o en sentido único, según disponga la señalización.',
      'sentido único, en cualquier caso.',
      'los dos sentidos, siempre.',
    ],
    correct:
      'los dos sentidos o en sentido único, según disponga la señalización.',
  },
  {
    question:
      'En esta autopista, el vehículo que circula por el carril izquierdo y no está adelantando, ¿circular correctamente?',
    answers: [
      'Sí, porque puede utilizar cualquier carril.',
      'No, porque debe circular por el carril de la derecha.',
      'Sí, porque no impide el paso a otros vehículos.',
    ],
    correct: 'No, porque debe circular por el carril de la derecha.',
  },
  {
    question:
      'En esta vía de doble sentido de circulación y tres carriles separados por marcas longitudinales discontinuas, ¿qué carril utilizará el vehículo azul para cambiar de dirección a la izquierda?',
    answers: [
      'El carril situado a la derecha si está libre.',
      'El carril central.',
      'El carril izquierdo si está libre.',
    ],
    correct: 'El carril central.',
  },
  {
    question:
      'En una carretera de tres carriles en cada sentido, ¿cuándo se puede circular por el carril izquierdo?',
    answers: [
      'Solamente para adelantar.',
      'Nunca.',
      'Cuando los otros carriles estén ocupados y no obstaculice a los vehículos que circulan detrás.',
    ],
    correct:
      'Cuando los otros carriles estén ocupados y no obstaculice a los vehículos que circulan detrás.',
  },
  {
    question:
      'Una furgoneta, cuya longitud es de 7,30 metros y que tiene una MMA de 3.500 kg, circula por una vía interurbana con tres carriles por sentido de la circulación, ¿qué carriles puede utilizar?',
    answers: [
      'Solamente el de la derecha.',
      'Cualquiera de ellos, cuando las circunstancias del tráfico o de la vía lo aconsejen y no entorpezca la marcha de otro vehículo que le siga.',
      'El de la derecha, y el inmediato únicamente cuando las circunstancias del tráfico o de la vía lo aconsejen.',
    ],
    correct:
      'Cualquiera de ellos, cuando las circunstancias del tráfico o de la vía lo aconsejen y no entorpezca la marcha de otro vehículo que le siga.',
  },
  {
    question:
      'Un conjunto de vehículos de más de 7 metros de longitud que circula por una vía con tres carriles para el mismo sentido, además del carril derecho, ¿qué carriles puede utilizar?',
    answers: [
      'Cualquier carril.',
      'Ninguno, solo puede circular por el de la derecha.',
      'El inmediato cuando las circunstancias del tráfico o de la vía lo aconsejen.',
    ],
    correct:
      'El inmediato cuando las circunstancias del tráfico o de la vía lo aconsejen.',
  },
  {
    question:
      'Un conjunto de vehículos de más de 7 metros de longitud que circula por está vía de poblado con tres carriles para el mismo sentido delimitados por marcas longitudinales, además del carril derecho, ¿qué carriles puede utilizar?',
    answers: [
      'El carril que mejor convenga a su destino, siempre que no sea un obstáculo a la circulación de los demás vehículos.',
      'Ninguno, solo puede circular por el de la derecha.',
      'Únicamente el inmediato cuando las circunstancias del tráfico o de la vía lo aconsejen.',
    ],
    correct:
      'El carril que mejor convenga a su destino, siempre que no sea un obstáculo a la circulación de los demás vehículos.',
  },
  {
    question:
      'En una vía urbana con varios carriles para cada sentido, ¿por cuál de ellos circulará como norma general?',
    answers: [
      'Por el que más convenga a su destino, cuando los carriles estén delimitados por marcas longitudinales.',
      'Por el que más convenga a su destino, estén o no delimitados los carriles.',
      'Por el carril de la derecha, siempre.',
    ],
    correct:
      'Por el que más convenga a su destino, cuando los carriles estén delimitados por marcas longitudinales.',
  },
  {
    question:
      'En esta vía circula por el carril que mejor conviene a su destino, ¿cuándo puede abandonarlo?',
    answers: [
      'Cuando quiera cambiar de dirección o de sentido.',
      'Únicamente cuando pretenda parar o estacionar.',
      'Al prepararse para cambiar de dirección, adelantar, parar o estacionar.',
    ],
    correct:
      'Al prepararse para cambiar de dirección, adelantar, parar o estacionar.',
  },
  {
    question:
      'En una vía urbana de sentido único, si los carriles no están delimitados por marcas viales, ¿por dónde está obligado a circular el conductor de un turismo?',
    answers: [
      'Por el carril derecho, pudiendo utilizar el resto cuando las circunstancias lo aconsejen.',
      'Por el centro de la calzada.',
      'Por el carril que mejor convenga a su destino.',
    ],
    correct:
      'Por el carril derecho, pudiendo utilizar el resto cuando las circunstancias lo aconsejen.',
  },
  {
    question:
      'Si conduce una motocicleta por esta vía, ¿le está permitido circular por el carril situado más a la izquierda?',
    answers: [
      'Sí, cuando las circunstancias del tráfico o la vía lo aconsejen.',
      'No, únicamente puedo circular por el arcén.',
      'No, solo puede utilizar el derecho y el central.',
    ],
    correct: 'Sí, cuando las circunstancias del tráfico o la vía lo aconsejen.',
  },
  {
    question:
      '¿Puede circular un turismo por un carril BUS señalizado con línea longitudinal continua?',
    answers: [
      'Sí, para girar a la derecha.',
      'Sí, cuando el carril está en vía urbana.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Un vehículo mixto en el que solo viaja el conductor, ¿puede, en algún caso, circular por un carril para VAO?',
    answers: [
      'Sí, si el vehículo ostenta la señal de minusválido.',
      'No, porque debe estar ocupado por el número mínimo de personas que se fije.',
      'Sí, si el conductor es novel.',
    ],
    correct: 'Sí, si el vehículo ostenta la señal de minusválido.',
  },
  {
    question:
      'Un vehículo de extinción de incendios en servicio de urgencia, ¿tiene permitido circular por un carril para VAO?',
    answers: [
      'Únicamente si lleva más de tres ocupantes.',
      'De noche, no.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      '¿Podrá utilizar el carril para VAO un turismo ocupado por cuatro personas si lleva enganchado un remolque ligero?',
    answers: ['No.', 'Solo si el carril no está ocupado.', 'Sí, siempre.'],
    correct: 'No.',
  },
  {
    question: 'Los ciclomotores, ¿pueden utilizar un carril para VAO?',
    answers: [
      'Sí, pero solo si va ocupado por una persona.',
      'Sí, moderando la velocidad.',
      'No, está prohibido.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question:
      'No se tendrán en cuenta, a efectos de la normal utilización, los carriles...',
    answers: [
      'reservados a determinados vehículos.',
      'especiales.',
      'reversibles.',
    ],
    correct: 'reservados a determinados vehículos.',
  },
  {
    question: '¿Puede circular con su motocicleta por un carril bus?',
    answers: [
      'Sí, en caso de circulación muy densa.',
      'Sí, pero solo para adelantar y durante el recorrido indispensable.',
      'No, con carácter general.',
    ],
    correct: 'No, con carácter general.',
  },
  {
    question:
      '¿Está permitido que un turismo utilice un tramo de carril reservado para autobuses delimitado por una línea discontinua?',
    answers: [
      'Sí, pero solo para cambiar de dirección a la derecha.',
      'No, siempre está prohibido.',
      'Sí, para realizar cualquier maniobra que no sea parar, estacionar, cambiar de sentido o adelantar.',
    ],
    correct:
      'Sí, para realizar cualquier maniobra que no sea parar, estacionar, cambiar de sentido o adelantar.',
  },
  {
    question:
      'Si los paneles de mensaje variable indican que los turismos con distintivo ambiental B pueden circular por un carril para VAO, ¿qué ocupación mínima debe tener el vehículo?',
    answers: [
      'Dos ocupantes, sin incluir al conductor.',
      'Un ocupante.',
      'Dos ocupantes, incluido el conductor.',
    ],
    correct: 'Un occupant.',
  },
  {
    question: 'Al abandonar una autovía deberá...',
    answers: [
      'cambiar al carril más próximo a la salida y entrar en el carril de deceleración lo antes posible.',
      'reducir la velocidad a 60 km/h.',
      'continuar por su carril hasta la salida.',
    ],
    correct:
      'cambiar al carril más próximo a la salida y entrar en el carril de deceleración lo antes posible.',
  },
  {
    question: 'Un furgón, ¿puede utilizar un carril reversible?',
    answers: [
      'Sí.',
      'No.',
      'Solo cuando su masa máxima autorizada no sea superior a 3.500 kilogramos.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Circular por debajo del límite máximo de velocidad, ¿puede causar accidentes?',
    answers: [
      'No.',
      'No, solo se pueden causar accidentes circulando por encima de ese límite.',
      'Sí, cuando la velocidad no se adapte a las circunstancias del tráfico.',
    ],
    correct:
      'Sí, cuando la velocidad no se adapte a las circunstancias del tráfico.',
  },
  {
    question:
      'Circulando a una velocidad superior a la velocidad máxima permitida está circulando...',
    answers: [
      'a una velocidad moderada, según las circunstancias.',
      'con exceso de velocidad.',
      'a una velocidad máxima.',
    ],
    correct: 'con exceso de velocidad.',
  },
  {
    question: 'Velocidad inadecuada, ¿es lo mismo que velocidad excesiva?',
    answers: [
      'Sí.',
      'No.',
      'No, pero la velocidad inadecuada es siempre excesiva.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Circular por una autopista a 120 km/h con lluvia intensa, es circular a una velocidad…',
    answers: ['inadecuada.', 'prohibida.', 'adecuada.'],
    correct: 'inadecuada.',
  },
  {
    question: 'A medida que se aumenta la velocidad al circular...',
    answers: [
      'resulta menos peligroso circular.',
      'resulta más difícil controlar el vehículo.',
      'resulta más fácil adaptarse a las circunstancias del tráfico.',
    ],
    correct: 'resulta más difícil controlar el vehículo.',
  },
  {
    question: '¿Cuándo se circula a velocidad anormalmente reducida?',
    answers: [
      'Cuando se circula a velocidad inferior a la máxima permitida.',
      'Cuando se circula a velocidad inferior a la mínima permitida.',
      'Cuando se circula a velocidad superior a la mínima permitida.',
    ],
    correct: 'Cuando se circula a velocidad inferior a la mínima permitida.',
  },
  {
    question: 'Los excesos de velocidad…',
    answers: [
      'hoy apenas tienen incidencia en los accidentes, debido a la seguridad de los vehículos.',
      'son responsables de la mayoría de los accidentes, en vías de doble sentido solamente.',
      'junto con las distracciones, son responsables de la mayoría de los accidentes.',
    ],
    correct:
      'junto con las distracciones, son responsables de la mayoría de los accidentes.',
  },
  {
    question: 'Llevar una velocidad excesiva supone que...',
    answers: [
      'disminuya la saturación del tráfico.',
      'siempre se pierda el control del vehículo.',
      'aumente la probabilidad de tener un accidente.',
    ],
    correct: 'aumente la probabilidad de tener un accidente.',
  },
  {
    question:
      'Al aproximarse a ciclos circulando, ¿es obligatorio moderar la velocidad?',
    answers: [
      'No, en ningún caso.',
      'Sí, en cualquier caso.',
      'Solamente fuera de poblado.',
    ],
    correct: 'Sí, en cualquier caso.',
  },
  {
    question: 'En esta situación, ¿qué debe hacer?',
    answers: [
      'No disminuir la velocidad, porque la señalización lo permite.',
      'Moderar la velocidad, incluso detenerse, porque hay peatones en la calzada.',
      'Detenerse, para obedecer las marcas viales.',
    ],
    correct:
      'Moderar la velocidad, incluso detenerse, porque hay peatones en la calzada.',
  },
  {
    question: 'Al acercarse a un mercado, ¿qué precauciones se deben tomar?',
    answers: [
      'Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.',
      'Moderar la velocidad y si fuera preciso, detener el vehículo.',
      'Hacer señales acústicas para indicar nuestra presencia.',
    ],
    correct: 'Moderar la velocidad y si fuera preciso, detener el vehículo.',
  },
  {
    question:
      'Fuera de poblado, al circular por pavimento deslizante o cuando pueda salpicarse o proyectarse agua, gravilla u otras materias a los demás usuarios de la vía, todo conductor debe…',
    answers: [
      'hacer señales acústicas y circular a velocidad moderada.',
      'aumentar la velocidad para salir del tramo lo antes posible.',
      'circular a velocidad moderada y, si fuera necesario, detener su vehículo.',
    ],
    correct:
      'circular a velocidad moderada y, si fuera necesario, detener su vehículo.',
  },
  {
    question:
      '¿Está obligado a circular a una velocidad adecuada si las condiciones meteorológicas o ambientales son adversas?',
    answers: [
      'No, si el vehículo dispone de todos los sistemas de seguridad más avanzados.',
      'Sí, siempre que se circule por vías de sentido único.',
      'Sí, y si fuera preciso, debe detenerse sin riesgo para la circulación.',
    ],
    correct:
      'Sí, y si fuera preciso, debe detenerse sin riesgo para la circulación.',
  },
  {
    question:
      '¿Qué debe hacer siempre que se acerque a un autobús del que bajan niños?',
    answers: [
      'Moderar la velocidad, e incluso detenerse si fuera necesario.',
      'Tocar el claxon repetidamente para advertir de su presencia.',
      'Detenerse hasta que el autobús reanude su marcha.',
    ],
    correct: 'Moderar la velocidad, e incluso detenerse si fuera necesario.',
  },
  {
    question:
      'Al aproximarse a un autobús en situación de parada, ¿qué precauciones se deben tomar?',
    answers: [
      'Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.',
      'Ninguna si no vienen vehículos en sentido contrario.',
      'Moderar la velocidad y si fuera preciso, detener el vehículo.',
    ],
    correct: 'Moderar la velocidad y si fuera preciso, detener el vehículo.',
  },
  {
    question:
      'Al aproximarse a un vehículo inmovilizado en la calzada, ¿es obligatorio moderar la velocidad?',
    answers: [
      'Sí, en cualquier tipo de vía.',
      'Solo en vías fuera de poblado.',
      'No.',
    ],
    correct: 'Solo en vías fuera de poblado.',
  },
  {
    question:
      'Se debe circular a velocidad moderada y, si fuera preciso, detener el vehículo, al aproximarse a un…',
    answers: [
      'paso a nivel.',
      'vehículo inmovilizado en la calzada, fuera o dentro del poblado.',
      'semáforo.',
    ],
    correct: 'paso a nivel.',
  },
  {
    question:
      'El conductor de una motocicleta acaba de obtener su primer permiso de conducción, ¿a qué velocidad máxima le está permitido circular?',
    answers: [
      'A 80 kilómetros por hora durante el primer año.',
      'B Depende de la vía por la que circule, porque no tiene otra limitación de velocidad.',
      'C A 80 kilómetros por hora durante los dos primeros años.',
    ],
    correct:
      'B Depende de la vía por la que circule, porque no tiene otra limitación de velocidad.',
  },
  {
    question:
      '¿A qué velocidad, como máximo, está permitido circular por una autovía con este vehículo de tres ruedas asimilado a motocicleta?',
    answers: ['A 100 km/h.', 'A 120 km/h.', 'A 70 km/h.'],
    correct: 'A 120 km/h.',
  },
  {
    question:
      'Un turismo con remolque de más de 750 kg de MMA, ¿a qué velocidad máxima puede circular por autovía?',
    answers: ['A 100 km/h.', 'A 120 km/h.', 'A 90 km/h.'],
    correct: 'A 90 km/h.',
  },
  {
    question:
      '¿Cuál es la velocidad máxima a la que le está permitido circular por una autovía con una autocaravana de MMA inferior a 3.500 kg?',
    answers: ['120 km/h.', '100 km/h.', '90 km/h.'],
    correct: '120 km/h.',
  },
  {
    question:
      'La velocidad máxima para un vehículo mixto adaptable en autovía es...',
    answers: ['120 km/h.', '100 km/h.', '110 km/h.'],
    correct: '100 km/h.',
  },
  {
    question:
      'Con una motocicleta de hasta 125 centímetros cúbicos, ¿a qué velocidad máxima puede circular por una autovía?',
    answers: [
      'A 120 kilómetros por hora.',
      'A 80 kilómetros por hora.',
      'A 90 kilómetros por hora.',
    ],
    correct: 'A 120 kilómetros por hora.',
  },
  {
    question:
      'En autopista, ¿cuál es la velocidad máxima a la que puede adelantar un turismo?',
    answers: [
      '120 kilómetros por hora.',
      '160 kilómetros por hora.',
      '140 kilómetros por hora.',
    ],
    correct: '120 kilómetros por hora.',
  },
  {
    question:
      'Un vehículo especial que carece de señalización de frenado no debe rebasar la velocidad máxima de...',
    answers: ['70 km/h.', '40 km/h.', '25 km/h.'],
    correct: '25 km/h.',
  },
  {
    question:
      'Un tractor que arrastra un remolque, ¿qué velocidad máxima no debe rebasar fuera de poblado?',
    answers: [
      '70 kilómetros por hora.',
      '25 kilómetros por hora.',
      '40 kilómetros por hora.',
    ],
    correct: '25 kilómetros por hora.',
  },
  {
    question:
      'La velocidad máxima, con carácter general, para un vehículo especial es de...',
    answers: [
      '45 kilómetros por hora.',
      '40 kilómetros por hora.',
      '60 kilómetros por hora.',
    ],
    correct: '40 kilómetros por hora.',
  },
  {
    question:
      'Cuando los vehículos especiales puedan desarrollar una velocidad superior a los 60 km/h en llano con arreglo a sus características y cumplan las condiciones que se señalan en las normas reguladoras de los vehículos, ¿qué velocidad máxima no deben rebasar fuera de poblado?',
    answers: [
      '80 kilómetros por hora.',
      '70 kilómetros por hora.',
      '90 kilómetros por hora.',
    ],
    correct: '70 kilómetros por hora.',
  },
  {
    question:
      'En una carretera convencional la velocidad máxima a la que puede circular un automóvil derivado de turismo es de...',
    answers: ['90 km/h.', '80 km/h.', '100 km/h.'],
    correct: '90 km/h.',
  },
  {
    question:
      '¿Cuál es la velocidad máxima para un cuadriciclo pesado en esta vía?',
    answers: ['100 km/h.', '70 km/h.', '45 km/h.'],
    correct: '70 km/h.',
  },
  {
    question: 'En un carril reversible...',
    answers: [
      'debe llevar encendida la luz de cruce, siempre.',
      'debe circular como máximo a 100 km/h y como mínimo a 60 km/h.',
      'no debe cambiar nunca de carril salvo para adelantar.',
    ],
    correct: 'debe llevar encendida la luz de cruce, siempre.',
  },
  {
    question:
      'En una autovía hay un carril abierto para circular en sentido contrario al habitual para mejorar la fluidez, ¿a qué velocidad máxima se puede circular en ese carril?',
    answers: [
      'A 60 kilómetros por hora.',
      'A 80 kilómetros por hora.',
      'A la genérica de la vía.',
    ],
    correct: 'A 80 kilómetros por hora.',
  },
  {
    question:
      'Los camiones, ¿pueden utilizar un carril abierto a la circulación en sentido contrario al normal?',
    answers: [
      'No, nunca.',
      'Sí, cuando el carril se ha abierto por obras en la calzada.',
      'Sí, siempre que circulen con la luz de cruce encendida.',
    ],
    correct: 'Sí, cuando el carril se ha abierto por obras en la calzada.',
  },
  {
    question:
      'Un turismo con remolque, ¿puede circular por un carril habilitado para la circulación en sentido contrario al habitual?',
    answers: [
      'No, cuando haya sido habilitado por razones de fluidez de la circulación.',
      'Sí.',
      'Sí, excepto en caso de obras en la calzada.',
    ],
    correct:
      'No, cuando haya sido habilitado por razones de fluidez de la circulación.',
  },
  {
    question:
      'Circula de día por un carril habilitado en sentido contrario al habitual, ¿qué luces debe encender, al menos?',
    answers: [
      'La luz de carretera.',
      'La luz de cruce.',
      'La luz de posición, solamente.',
    ],
    correct: 'La luz de cruce.',
  },
  {
    question:
      '¿Qué vehículos tienen permitido circular por un carril habilitado, por razones de fluidez, en sentido contrario al habitual?',
    answers: [
      'Automóviles y vehículos con remolque hasta 750 kg de MMA.',
      'Solo turismos y motocicletas.',
      'Automóviles que superen los 3.500 kg de MMA y motocicletas.',
    ],
    correct: 'Solo turismos y motocicletas.',
  },
  {
    question:
      'Por obras en la calzada se habilita un carril para la circulación en sentido contrario al habitual, ¿qué vehículos pueden utilizarlo?',
    answers: [
      'Turismos sin remolque, vehículos mixtos adaptables y motocicletas.',
      'Todos los vehículos que estén autorizados a circular por la vía en obras, salvo prohibición expresa.',
      'Únicamente turismos sin remolque y motocicletas.',
    ],
    correct:
      'Todos los vehículos que estén autorizados a circular por la vía en obras, salvo prohibición expresa.',
  },
  {
    question:
      'Si por obras en la vía, se ha abierto un carril en sentido contrario al habitual, ¿puede circular por este carril un vehículo mixto?',
    answers: [
      'Sí.',
      'No, porque solo pueden circular turismos y motocicletas.',
      'Sí, pero solo cuando transporte pasajeros.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Un turismo con remolque, ¿tiene permitido circular por un carril adicional circunstancial?',
    answers: ['No.', 'Sí.', 'Sí, únicamente cuando el remolque sea ligero.'],
    correct: 'Sí.',
  },
  {
    question:
      'Al circular por un carril adicional circunstancial, ¿es obligatorio encender, al menos, la luz de cruce?',
    answers: [
      'No.',
      'Sí, solamente durante la noche.',
      'Sí, a cualquier hora del día.',
    ],
    correct: 'Sí, a cualquier hora del día.',
  },
  {
    question:
      'En una explanada de peaje de una autopista, ¿está permitido recoger a una persona que hace autostop?',
    answers: ['No.', 'Sí, en todo caso.', 'Sí, si se estaciona.'],
    correct: 'No.',
  },
  {
    question: 'Para pagar en un puesto de peaje, debe pasar...',
    answers: [
      'por el carril que indica la flecha verde.',
      'por cualquier carril, indistintamente.',
      'por el carril que indica el aspa roja.',
    ],
    correct: 'por el carril que indica la flecha verde.',
  },
  {
    question: 'No pueden circular por autopista...',
    answers: [
      'los ciclomotores.',
      'las motocicletas.',
      'los camiones de más de 3.500 kg de MMA.',
    ],
    correct: 'los ciclomotores.',
  },
  {
    question:
      'Salvo que exista señal que lo prohiba, por los arcenes de las autovías se permite circular...',
    answers: [
      'a peatones.',
      'a vehículos de tracción animal.',
      'a conductores de bicicletas mayores de 14 años.',
    ],
    correct: 'a conductores de bicicletas mayores de 14 años.',
  },
  {
    question: '¿Qué vehículos tienen prohibido circular por las autopistas?',
    answers: [
      'Los vehículos especiales.',
      'Las motocicletas y los ciclomotores.',
      'Los vehículos de movilidad personal.',
    ],
    correct: 'Los vehículos de movilidad personal.',
  },
  {
    question: 'En el arcén de esta autovía, ¿qué está permitido?',
    answers: [
      'Estacionar.',
      'Inmovilizar el vehículo por emergencia o avería.',
      'Hacer una parada.',
    ],
    correct: 'Inmovilizar el vehículo por emergencia o avería.',
  },
  {
    question:
      'Este conjunto de ciclistas circula junto al borde derecho de la calzada y en fila. ¿Es correcto?',
    answers: [
      'No.',
      'Sí, pero podrían hacerlo ocupando todo el carril derecho.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question: 'Este ciclista...',
    answers: [
      'circula correctamente.',
      'no debería circular por esa vía, pues no tiene arcén.',
      'debería circular lo más cerca posible del eje central de la calzada.',
    ],
    correct: 'circula correctamente.',
  },
  {
    question: '¿Tienen permitido las bicicletas circular en posición paralela?',
    answers: [
      'Sí, aproximándose todo lo posible a la parte derecha de la vía, excepto en los tramos sin visibilidad y cuando formen aglomeraciones de tráfico.',
      'Sí, manteniendo entre ellas una distancia mínima de 1,5 metros.',
      'No, en ningún caso.',
    ],
    correct:
      'Sí, aproximándose todo lo posible a la parte derecha de la vía, excepto en los tramos sin visibilidad y cuando formen aglomeraciones de tráfico.',
  },
  {
    question:
      'En un descenso prolongado con curvas y cuando razones de seguridad lo permitan, ¿podrán circular los ciclistas por la parte derecha de la calzada que necesiten?',
    answers: [
      'No, siempre utilizarán el arcén.',
      'Podrán utilizar toda la calzada.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Los vehículos para personas de movilidad reducida, ¿están obligados a circular por el arcén?',
    answers: [
      'Sí, en el caso de que no exista vía o parte de la misma que les esté especialmente destinada.',
      'No, pueden circular por el arcén cuando lo crean conveniente.',
      'No, dependerá de las indicaciones de los agentes y del tipo de vía.',
    ],
    correct:
      'Sí, en el caso de que no exista vía o parte de la misma que les esté especialmente destinada.',
  },
  {
    question:
      'Circulando por el arcén, ¿tiene permitido un vehículo de tracción animal circular en paralelo con otro vehículo?',
    answers: [
      'No, está prohibido.',
      'Sí, si el arcén es bastante ancho.',
      'Sí, puede circular en paralelo pero no podrá adelantar.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question:
      '¿Puede circular conduciendo un vehículo de tracción animal por una vía interurbana sin arcén?',
    answers: [
      'Sí, por el centro del carril derecho.',
      'No, en este caso no se puede circular.',
      'Sí, por la derecha, ocupando la parte imprescincible de la calzada.',
    ],
    correct:
      'Sí, por la derecha, ocupando la parte imprescincible de la calzada.',
  },
  {
    question:
      'El tractor de menos de 3.500 kg de MMA, ¿circula correctamente por el arcén?',
    answers: [
      'Sí, pero solamente en caso de avería.',
      'Sí.',
      'No, porque debe circular por el carril derecho.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      '¿Puede circular conduciendo un ciclomotor por una vía interurbana sin arcén?',
    answers: [
      'Sí, por el centro del carril derecho.',
      'No, en este caso no se puede circular.',
      'Sí, por la derecha, ocupando la parte imprescindible de la calzada.',
    ],
    correct:
      'Sí, por la derecha, ocupando la parte imprescindible de la calzada.',
  },
  {
    question:
      'Los ciclomotores, ¿pueden circular por el arcén en columna de a dos?',
    answers: [
      'Sí, de forma excepcional, cuando el arcén sea transitable y suficiente.',
      'No, nunca.',
      'Sí, siempre.',
    ],
    correct:
      'Sí, de forma excepcional, cuando el arcén sea transitable y suficiente.',
  },
  {
    question:
      'En una vía interurbana, ¿puede adelantar un ciclomotor a un tractor agrícola que circula por el arcén?',
    answers: [
      'Sí, pero solo de día.',
      'No, los vehículos que circulan por el arcén no se pueden adelantar.',
      'Sí, siempre que el recorrido en paralelo no supere los 200 metros o los 15 segundos.',
    ],
    correct:
      'Sí, siempre que el recorrido en paralelo no supere los 200 metros o los 15 segundos.',
  },
  {
    question:
      'El arcén de la derecha es transitable y suficiente. ¿Qué vehículos deben circular por él, como norma general?',
    answers: [
      'Los ciclos, ciclomotores y vehículos para personas de movilidad reducida.',
      'Los vehículos con MMA no superior a 3.500 kg que circulen a velocidad anormalmente reducida.',
      'Los vehículos especiales con MMA superior a 3.500 kg.',
    ],
    correct:
      'Los ciclos, ciclomotores y vehículos para personas de movilidad reducida.',
  },
  {
    question:
      'El arcén de esta carretera no está pavimentado, ¿debe circular por él un ciclomotor?',
    answers: [
      'No, circulará por la calzada, lo más cerca posible del borde derecho.',
      'Sí, pero solo cuando circulen otros vehículos por la calzada, para no entorpecerlos.',
      'Sí, pero reduciendo considerablemente la velocidad.',
    ],
    correct:
      'No, circulará por la calzada, lo más cerca posible del borde derecho.',
  },
  {
    question:
      'Un vehículo de acompañamiento de ciclistas en una calzada con arcén transitable y suficiente, ¿por dónde circulará?',
    answers: [
      'Por el arcén.',
      'Por el centro de la calzada.',
      'Por el carril derecho para proteger a los ciclistas.',
    ],
    correct: 'Por el arcén.',
  },
  {
    question:
      'Un vehículo mixto, ¿a qué velocidad está permitido que adelante en esta vía?',
    answers: ['A 110 km/h.', 'A 90 km/h.', 'A 100 km/h.'],
    correct: 'A 90 km/h.',
  },
  {
    question:
      'En una carretera convencional, ¿a qué velocidad máxima puede adelantar un camión?',
    answers: ['A 80 km/h.', 'A 120 km/h.', 'A 100 km/h.'],
    correct: 'A 80 km/h.',
  },
  {
    question:
      'En esta carretera convencional, ¿a qué velocidad puede adelantar un turismo a un vehículo que circula a 90 km/h?',
    answers: ['A 110 km/h.', 'A 120 km/h.', 'No puede adelantar.'],
    correct: 'No puede adelantar.',
  },
  {
    question:
      'Circula con su turismo por esta carretera convencional. ¿Cuál es la velocidad máxima permitida?',
    answers: ['100 km/h.', '90 km/h.', '80 km/h.'],
    correct: '90 km/h.',
  },
  {
    question:
      'Un turismo con remolque, ¿puede superar la velocidad máxima permitida para adelantar?',
    answers: ['Sí, en 10 km/h.', 'No.', 'Sí, en 20 km/h.'],
    correct: 'No.',
  },
  {
    question:
      'En esta carretera convencional con un carril para cada sentido, ¿a qué velocidad como máximo puede circular un pick-up?',
    answers: ['A 120 km/h.', 'A 110 km/h.', 'A 90 km/h.'],
    correct: 'A 90 km/h.',
  },
  {
    question:
      'Fuera de poblado, ¿cuál es la velocidad máxima a la que puede circular un ciclomotor?',
    answers: [
      '45 km/h.',
      '70 km/h.',
      '45 km/h, pudiendo superarla en 20 km/h para adelantar.',
    ],
    correct: '45 km/h.',
  },
  {
    question:
      'Un cuatriciclo ligero, ¿a qué velocidad máxima puede circular fuera de poblado?',
    answers: ['A 70 km/h.', 'A 50 km/h.', 'A 45 km/h.'],
    correct: 'A 45 km/h.',
  },
  {
    question:
      'En defecto de señalización, ¿cuál es la velocidad máxima a la que se permite la circulación por una autovía, dentro de poblado, a un autobús?',
    answers: [
      '100 kilómetros por hora.',
      '80 kilómetros por hora.',
      '50 kilómetros por hora.',
    ],
    correct: '80 kilómetros por hora.',
  },
  {
    question:
      'En vías urbanas de dos o más carriles por sentido, ¿cuál es la velocidad máxima permitida para un vehículo de movilidad personal?',
    answers: [
      '50 kilómetros por hora.',
      '25 kilómetros por hora.',
      '20 kilómetros por hora.',
    ],
    correct: '25 kilómetros por hora.',
  },
  {
    question:
      'En vías urbanas de un único carril por sentido de circulación, ¿cuál es la velocidad máxima permitida?',
    answers: [
      '20 kilómetros por hora.',
      '30 kilómetros por hora.',
      '35 kilómetros por hora.',
    ],
    correct: '30 kilómetros por hora.',
  },
  {
    question:
      'En vías urbanas que dispongan de plataforma única de calzada y acera, ¿cuál es la velocidad máxima permitida para un turismo con remolque?',
    answers: [
      '30 kilómetros por hora.',
      '20 kilómetros por hora.',
      '50 kilómetros por hora.',
    ],
    correct: '20 kilómetros por hora.',
  },
  {
    question:
      'En una travesía sin limitación específica, ¿cuál es la velocidad máxima permitida para adelantar?',
    answers: ['50 km/h.', '90 km/h.', '70 km/h.'],
    correct: '50 km/h.',
  },
  {
    question:
      'A partir de la señal, ¿cuál es la velocidad máxima en la travesía?',
    answers: [
      '100 kilómetros por hora.',
      '60 kilómetros por hora.',
      '50 kilómetros por hora.',
    ],
    correct: '50 kilómetros por hora.',
  },
  {
    question:
      'En una travesía, ¿cuál es la velocidad máxima permitida para una motocicleta?',
    answers: [
      '80 kilómetros por hora.',
      '50 kilómetros por hora.',
      '45 kilómetros por hora.',
    ],
    correct: '50 kilómetros por hora.',
  },
  {
    question: '¿Es importante cumplir con los límites inferiores de velocidad?',
    answers: [
      'No, ya que los límites inferiores son solo orientativos.',
      'Sí, pero solo para no ser sancionado.',
      'Sí, para evitar causar accidentes.',
    ],
    correct: 'Sí, para evitar causar accidentes.',
  },
  {
    question:
      'En esta autopista dentro de poblado, ¿a qué velocidad puede circular como máximo si no existe señalización?',
    answers: ['A 120 km/h.', 'B A 80 km/h.', 'C A 70 km/h.'],
    correct: 'B A 80 km/h.',
  },
  {
    question:
      'En autopistas y autovías dentro de poblado, el límite de velocidad para circular de un conductor novel es de...',
    answers: [
      '90 km/h.',
      '80 km/h.',
      '80 km/h, pudiendo rebasarlo en 20 km/h para adelantar.',
    ],
    correct: '80 km/h.',
  },
  {
    question:
      'En esta carretera convencional, ¿qué velocidad se considera anormalmente reducida, sin causa justificada, para un turismo?',
    answers: [
      'La inferior a 45 km/h.',
      '60 km/h o inferior.',
      'La inferior a 60 km/h.',
    ],
    correct: 'La inferior a 45 km/h.',
  },
  {
    question:
      'Circular por debajo de la velocidad mínima permitida, ¿podría ser un factor de riesgo?',
    answers: [
      'No, nunca.',
      'Sí, una velocidad anormalmente reducida puede causar accidentes.',
      'No, ya que siempre se considera una velocidad adecuada.',
    ],
    correct: 'Sí, una velocidad anormalmente reducida puede causar accidentes.',
  },
  {
    question:
      'En esta vía, la velocidad mínima permitida a los turismos es de...',
    answers: ['90 km/h.', '75 km/h.', '60 km/h.'],
    correct: '60 km/h.',
  },
  {
    question:
      '¿Está permitido circular por una autovía, sin causa justificada, por debajo del límite mínimo de velocidad establecido para dicha vía?',
    answers: [
      'No, porque es una velocidad anormalmente reducida.',
      'Sí, aunque en este caso estoy obligado a circular por el arcén.',
      'Sí, siempre que no circulen otros vehículos a los que pueda entorpecer su marcha normal.',
    ],
    correct: 'No, porque es una velocidad anormalmente reducida.',
  },
  {
    question:
      'En una autopista, ¿está permitido circular a una velocidad anormalmente reducida con niebla espesa?',
    answers: [
      'Sí.',
      'Sí, si la circulación es escasa, pero no si es densa.',
      'No, porque es una autopista y es una vía de gran seguridad.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'A más de 120 kilómetros por hora en autopista, la probabilidad de sobrevivir a un accidente...',
    answers: ['aumenta.', 'disminuye.', 'no varía.'],
    correct: 'disminuye.',
  },
  {
    question:
      'En ciudad, ¿es importante no circular a más de 50 kilómetros por hora?',
    answers: [
      'No, sobre todo en las calles y avenidas anchas.',
      'Sí, pero solo para no ser sancionado por exceso de velocidad.',
      'Sí, para que, en caso de atropello, el peatón tenga más posibilidades de sobrevivir.',
    ],
    correct:
      'Sí, para que, en caso de atropello, el peatón tenga más posibilidades de sobrevivir.',
  },
  {
    question: 'Los límites de velocidad se establecen para garantizar...',
    answers: [
      'la máxima fluidez, aunque disminuya la seguridad.',
      'la máxima seguridad, aunque disminuya la fluidez.',
      'la máxima seguridad y fluidez.',
    ],
    correct: 'la máxima seguridad y fluidez.',
  },
  {
    question:
      'Los límites de velocidad que se establecen para una vía, ¿de qué dependen?',
    answers: [
      'De su trazado y del tráfico que vaya a soportar.',
      'De su trazado y del número de curvas.',
      'De criterios económicos, fundamentalmente.',
    ],
    correct: 'De su trazado y del tráfico que vaya a soportar.',
  },
  {
    question:
      'La máxima velocidad segura que puede mantenerse sobre una sección de carretera en condiciones favorables es la velocidad...',
    answers: [
      'adecuada de una vía.',
      'de fluidez de una vía.',
      'de diseño de una vía.',
    ],
    correct: 'de diseño de una vía.',
  },
  {
    question:
      'El efecto túnel producido por la velocidad hace que el conductor...',
    answers: [
      'solo sea capaz de percibir con nitidez el centro de la vía.',
      'solo sea capaz de percibir con nitidez la parte lateral de la vía.',
      'sea más sensible a los deslumbramientos.',
    ],
    correct: 'solo sea capaz de percibir con nitidez el centro de la vía.',
  },
  {
    question:
      'Realizar por las vías públicas carreras y competiciones no autorizadas, ¿puede acarrear la pérdida de puntos del permiso de conducción?',
    answers: [
      'No, solamente tendrían una sanción económica.',
      'Sí, además están prohibidas.',
      'No, puesto que se trata de competiciones deportivas.',
    ],
    correct: 'Sí, además están prohibidas.',
  },
  {
    question: '¿Influye la velocidad en el campo visual del conductor?',
    answers: [
      'No, no influye.',
      'Sí, el campo visual aumenta con la velocidad.',
      'Sí, el campo visual disminuye al aumentar la velocidad.',
    ],
    correct: 'Sí, el campo visual disminuye al aumentar la velocidad.',
  },
  {
    question: 'Conducir durante mucho tiempo a una velocidad elevada...',
    answers: [
      'acelera la aparición de la fatiga y, por tanto, disminuye la agresividad.',
      'acelera la aparición de la fatiga y aumenta los comportamientos agresivos.',
      'disminuye la aparición de la fatiga pero aumenta los comportamientos agresivos.',
    ],
    correct:
      'acelera la aparición de la fatiga y aumenta los comportamientos agresivos.',
  },
  {
    question:
      'El exceso de velocidad hace que la capacidad de anticipación ante una situación de tráfico sea…',
    answers: [
      'la misma que a poca velocidad.',
      'mayor que a poca velocidad.',
      'menor que a poca velocidad.',
    ],
    correct: 'menor que a poca velocidad.',
  },
  {
    question: 'Cuando un conductor circula a velocidad adecuada...',
    answers: [
      'puede detectar las intenciones de otros usuarios y reaccionar a tiempo para evitar un accidente.',
      'hace que la circulación sea lenta y peligrosa.',
      'estorba a otros conductores y puede causar un accidente.',
    ],
    correct:
      'puede detectar las intenciones de otros usuarios y reaccionar a tiempo para evitar un accidente.',
  },
  {
    question: 'Al circular más rápido…',
    answers: [
      'se puede ver y analizar mejor lo que ocurre alrededor.',
      'se perciben peor las señales de tráfico.',
      'se perciben mejor las señales de tráfico.',
    ],
    correct: 'se perciben peor las señales de tráfico.',
  },
  {
    question: 'La distancia de reacción es...',
    answers: [
      'la distancia que recorre el vehículo durante el tiempo de reacción.',
      'la distancia que debe guardarse con el vehículo que va delante.',
      'la distancia que recorre el vehículo desde que empieza a frenar hasta que se detiene.',
    ],
    correct:
      'la distancia que recorre el vehículo durante el tiempo de reacción.',
  },
  {
    question: 'La velocidad, ¿influye en el tiempo de reacción?',
    answers: ['Sí, lo aumenta.', 'No.', 'Sí, lo disminuye.'],
    correct: 'No.',
  },
  {
    question:
      'Circula conduciendo su motocicleta y como se ve en la fotografía, la calzada se encuentra mojada. En caso de frenada, esta situación provocará...',
    answers: [
      'que no aumente la distancia de detección.',
      'una disminución de la distancia de reacción.',
      'un aumento de la distancia de frenado.',
    ],
    correct: 'un aumento de la distancia de frenado.',
  },
  {
    question:
      'La distancia de frenado es la que recorre el vehículo desde que el conductor...',
    answers: [
      'pisa el freno hasta que se detiene totalmente el vehículo.',
      'percibe un peligro hasta que se detiene totalmente el vehículo.',
      'percibe un peligro hasta que pisa el freno.',
    ],
    correct: 'pisa el freno hasta que se detiene totalmente el vehículo.',
  },
  {
    question:
      '¿Qué debe tener en cuenta si conduce una motocicleta llevando a un pasajero?',
    answers: [
      'Que es más fácil que se bloquen las ruedas al frenar.',
      'Que la distancia de detención será menor porque la motocicleta pesa más.',
      'Que debido al aumento de peso la distancia de frenado será mayor.',
    ],
    correct:
      'Que debido al aumento de peso la distancia de frenado será mayor.',
  },
  {
    question:
      'Para evitar un accidente en caso de frenada brusca, ¿debe adaptar la velocidad y la distancia de seguridad con el vehículo de delante si circula con una furgoneta cargada?',
    answers: [
      'No, el peso de la carga no influye en la distancia de frenado.',
      'Sí, el peso de la carga hace que aumente la distancia de frenado.',
      'Sí, el peso de la carga hace que disminuya la distancia de frenado.',
    ],
    correct:
      'Sí, el peso de la carga hace que aumente la distancia de frenado.',
  },
  {
    question: 'En bajada, ¿cuándo frena mejor el vehículo?',
    answers: [
      'Cuando lleva carga frena mejor.',
      'Frena igual con carga que sin carga.',
      'Cuando no lleva carga frena mejor.',
    ],
    correct: 'Cuando no lleva carga frena mejor.',
  },
  {
    question: 'La distancia de frenado está determinada por...',
    answers: [
      'la velocidad únicamente.',
      'la velocidad a la que se circula y por otros factores, como el estado de la vía y del vehículo.',
      'el estado del vehículo, principalmente.',
    ],
    correct:
      'la velocidad a la que se circula y por otros factores, como el estado de la vía y del vehículo.',
  },
  {
    question: 'El estado del vehículo influye en...',
    answers: [
      'la distancia de frenado.',
      'la distancia de reacción.',
      'el tiempo de reacción.',
    ],
    correct: 'la distancia de frenado.',
  },
  {
    question:
      'La distancia de detención es el espacio que recorre el vehículo…',
    answers: [
      'durante el tiempo que pasa desde que el conductor reacciona hasta que pisa el pedal del freno.',
      'desde que el conductor frena hasta que se detiene el vehículo.',
      'desde que el conductor percibe un peligro hasta que el vehículo se detiene.',
    ],
    correct:
      'desde que el conductor percibe un peligro hasta que el vehículo se detiene.',
  },
  {
    question: 'La distancia de detención puede variar en función...',
    answers: [
      'del mal estado del vehículo, del conductor o de la vía.',
      'del mal estado del vehículo solamente.',
      'del mal estado de la vía únicamente.',
    ],
    correct: 'del mal estado del vehículo, del conductor o de la vía.',
  },
  {
    question: 'Bajo los efectos del alcohol, la distancia de detención...',
    answers: ['aumenta.', 'no se ve afectada.', 'disminuye.'],
    correct: 'aumenta.',
  },
  {
    question:
      'Al cruzarse con los peatones en esta vía, ¿qué distancia lateral debe dejar?',
    answers: [
      '1 metro o más.',
      'Una separación lateral suficiente para que el cruce pueda realizarse con seguridad y sin peligro.',
      '1,5 metros o más.',
    ],
    correct:
      'Una separación lateral suficiente para que el cruce pueda realizarse con seguridad y sin peligro.',
  },
  {
    question:
      '¿Qué debe tener especialmente en cuenta para dejar con el vehículo de delante una distancia que le permita, en caso de frenada brusca, detenerse con seguridad?',
    answers: [
      'Las condiciones climatológicas y el tipo de vehículo que nos sigue.',
      'La velocidad de circulación, únicamente.',
      'La velocidad y las condiciones de adherencia y frenado.',
    ],
    correct: 'La velocidad y las condiciones de adherencia y frenado.',
  },
  {
    question:
      'Conduce un turismo en esta autopista, ¿qué distancia debe mantener con el turismo que circula delante?',
    answers: [
      'La que permita detener el vehículo en caso de frenado brusco, sin colisionar con él, si no tiene intención de adelantar.',
      'La que permita detener el vehículo sin colisionar con él, tenga o no intención de adelantar.',
      'Una separación mínima de 50 metros.',
    ],
    correct:
      'La que permita detener el vehículo sin colisionar con él, tenga o no intención de adelantar.',
  },
  {
    question:
      'En condiciones meteorológicas o ambientales desfavorables, ¿cómo debe ser la separación con los vehículos que circulan delante?',
    answers: [
      'Mayor, para así disponer de más tiempo y espacio para reaccionar.',
      'Igual que si fueran favorables.',
      'Menor, para ver mejor a los vehículos que circulan delante.',
    ],
    correct:
      'Mayor, para así disponer de más tiempo y espacio para reaccionar.',
  },
  {
    question:
      'Circula con su turismo por esta vía interurbana con un carril para cada sentido; si no pretende adelantar al camión, ¿qué distancia de seguridad debe dejar?',
    answers: [
      'La que permita al vehículo que circule detrás adelantarme con seguridad.',
      '50 metros.',
      '150 metros.',
    ],
    correct:
      'La que permita al vehículo que circule detrás adelantarme con seguridad.',
  },
  {
    question:
      'En esta situación usted no quiere adelantar al camión. ¿Qué distancia debe dejar?',
    answers: [
      'La distancia de seguridad.',
      '50 metros.',
      'La distancia para que otro vehículo pueda adelantar.',
    ],
    correct: 'La distancia de seguridad.',
  },
  {
    question:
      '¿En qué vías es obligatorio dejar con el vehículo que circula delante la distancia suficiente para permitir que otro pueda adelantar?',
    answers: [
      'En autopistas y autovías.',
      'En vías interurbanas con dos o más carriles para cada sentido.',
      'En carreteras con un carril para cada sentido.',
    ],
    correct: 'En carreteras con un carril para cada sentido.',
  },
  {
    question:
      'Conduce un camión de 3.000 kg de MMA. ¿Qué distancia debe dejar en este tramo de carretera?',
    answers: [
      '50 metros.',
      'La distancia de seguridad.',
      'La distancia que permita a otros vehículos adelantarme.',
    ],
    correct: 'La distancia de seguridad.',
  },
  {
    question: 'Se debe mantener una separación lateral adecuada...',
    answers: [
      'siempre, tanto al adelantar como al cruzarse con otros usuarios.',
      'solo al cruzarse con otros usuarios.',
      'solo al adelantar a los vehículos que circulen delante.',
    ],
    correct: 'siempre, tanto al adelantar como al cruzarse con otros usuarios.',
  },
  {
    question:
      'Si se pretende adelantar a este vehículo, ¿está permitido disminuir la distancia de seguridad?',
    answers: [
      'Sí, porque así tiene mejor visión del sentido contrario.',
      'No, se debe mantener siempre la distancia de seguridad.',
      'Sí, para hacer el adelantamiento más seguro.',
    ],
    correct: 'No, se debe mantener siempre la distancia de seguridad.',
  },
  {
    question:
      'A la hora de determinar la distancia de seguridad con el vehículo que circula delante...',
    answers: [
      'debe tener en cuenta las características del vehículo que circula delante.',
      'debe tener en cuenta la velocidad, la visibilidad y el estado de la calzada.',
      'debe tener en cuenta la velocidad, exclusivamente.',
    ],
    correct:
      'debe tener en cuenta la velocidad, la visibilidad y el estado de la calzada.',
  },
  {
    question:
      'A partir de la señal de la fotografía, ¿qué distancia de seguridad es obligatorio mantener, como mínimo, con la motocicleta?',
    answers: [
      '50 metros.',
      'Una separación que permita al vehículo que circula detrás adelantar con seguridad.',
      'Una separación que permita detenerse, en caso de que esta frene bruscamente, sin colisionar con ella.',
    ],
    correct:
      'Una separación que permita detenerse, en caso de que esta frene bruscamente, sin colisionar con ella.',
  },
  {
    question:
      'En una carretera, ¿qué vehículos deben guardar una separación mínima de 50 metros?',
    answers: [
      'Los conjuntos de vehículos de más de 10 metros de longitud.',
      'Todos los camiones.',
      'Los turismos.',
    ],
    correct: 'Los conjuntos de vehículos de más de 10 metros de longitud.',
  },
  {
    question:
      'Cuando se circula por una vía donde solo hay peatones, ¿debe advertir la maniobra de girar a la derecha?',
    answers: [
      'Sí, las maniobras deben advertirse a todos los usuarios.',
      'No es obligatorio, pero sí muy recomendable.',
      'No, solo debe advertirse a otros vehículos.',
    ],
    correct: 'Sí, las maniobras deben advertirse a todos los usuarios.',
  },
  {
    question:
      'Al realizar la maniobra de parada, ¿debe señalizarlo de alguna manera?',
    answers: [
      'No es necesario.',
      'Sí, con la luz indicadora de dirección del lado donde va a parar.',
      'Sí, con las luces de posición o las de estacionamiento.',
    ],
    correct:
      'Sí, con la luz indicadora de dirección del lado donde va a parar.',
  },
  {
    question:
      'Si un vehículo tiene el intermitente derecho encendido, pero su conductor le señaliza claramente con el brazo que va a girar a la izquierda, ¿qué señal tendrá en cuenta?',
    answers: [
      'La señal luminosa.',
      'Depende de la circulación.',
      'La realizada con el brazo.',
    ],
    correct: 'La realizada con el brazo.',
  },
  {
    question:
      'El vehículo detenido en el semáforo pretende girar a la izquierda, ¿debe mantener encendido el indicador de dirección?',
    answers: [
      'Sí, obligatoriamente.',
      'No es obligatorio, pero es aconsejable.',
      'No, puede encenderlo cuando reanude la marcha.',
    ],
    correct: 'Sí, obligatoriamente.',
  },
  {
    question:
      'El conductor de una motocicleta que va a girar a la izquierda, ¿cómo señalizará la maniobra?',
    answers: [
      'Con el brazo izquierdo doblado hacia arriba.',
      'Con el indicador de dirección izquierdo o con el brazo izquierdo extendido en posición horizontal y la palma de la mano hacia abajo.',
      'Con el indicador de dirección izquierdo o con el brazo izquierdo doblado hacia arriba.',
    ],
    correct:
      'Con el indicador de dirección izquierdo o con el brazo izquierdo extendido en posición horizontal y la palma de la mano hacia abajo.',
  },
  {
    question:
      '¿Cuándo debe apagar el indicador de dirección un vehículo que se desplaza lateralmente para adelantarse?',
    answers: [
      'Cuando haya rebasado al vehículo y antes de volver a la derecha.',
      'Cuando haya terminado el desplazamiento lateral.',
      'Cuando vuelva al carril derecho.',
    ],
    correct: 'Cuando haya terminado el desplazamiento lateral.',
  },
  {
    question:
      'El conductor de un vehículo extiende el brazo horizontalmente con la palma de la mano hacia atrás, ¿qué indica?',
    answers: [
      'Que tiene intención de inmovilizar el vehículo o de frenar su marcha de modo considerable.',
      'Que va a circular marcha atrás.',
      'Que va a girar a la izquierda.',
    ],
    correct: 'Que va a circular marcha atrás.',
  },
  {
    question: '¿Qué está indicando este conductor?',
    answers: [
      'Que va a girar a la izquierda.',
      'Que va a seguir de frente.',
      'Que va a girar a la derecha.',
    ],
    correct: 'Que va a girar a la derecha.',
  },
  {
    question:
      'Un conductor que señala un cambio de carril, ¿tiene preferencia sobre los conductores de los vehículos que circulan por el carril al que se pretende desplazar?',
    answers: [
      'Sí.',
      'Solo si va a adelantar a un vehículo de grandes dimensiones.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      '¿Cómo debe incorporarse a la vía el vehículo que sale del camino sin pavimentar?',
    answers: [
      'Cediendo el paso a los vehículos de la derecha.',
      'Cediendo el paso y a una velocidad que permita detenerse en el acto.',
      'Acelerando para alcanzar la velocidad máxima de la vía.',
    ],
    correct:
      'Cediendo el paso y a una velocidad que permita detenerse en el acto.',
  },
  {
    question:
      'El turismo amarillo sale de una gasolinera para incorporarse a la circulación, en caso necesario, ¿cuándo tiene que ceder el paso?',
    answers: [
      'Cuando se incorpora por la izquierda.',
      'Cuando se incorpora por la derecha o por la izquierda.',
      'Cuando se incorpora por la derecha.',
    ],
    correct: 'Cuando se incorpora por la derecha o por la izquierda.',
  },
  {
    question:
      'El vehículo rojo se quiere incorporar a la circulación proveniente del garaje particular de una vivienda, ¿debe cederle el paso?',
    answers: [
      'No.',
      'Solo si el vehículo rojo está destinado al servicio público.',
      'Sí, porque se incorpora por la derecha.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Si al incorporarse a una autopista por el carril de aceleración se ha detenido al principio de este para ceder el paso a los vehículos que circulan por la vía principal, qué deberá hacer a continuación?',
    answers: [
      'Acelerar hasta alcanzar la velocidad adecuada al final del carril.',
      'Disminuir la velocidad y detenerse de nuevo al final del carril.',
      'Acelerar hasta alcanzar obligatoriamente los 120 km/h al final del carril.',
    ],
    correct:
      'Acelerar hasta alcanzar la velocidad adecuada al final del carril.',
  },
  {
    question:
      'Cuando un autobús pretende incorporarse desde una parada señalizada, ¿qué deben hacer los demás conductores?',
    answers: [
      'Facilitarle la incorporación.',
      'Detenerse y cederle el paso.',
      'Continuar la marcha, ya que el conductor del autobús debe cederles el paso.',
    ],
    correct: 'Facilitarle la incorporación.',
  },
  {
    question:
      'En los cambios de carril en un mismo sentido, ¿quién tiene prioridad?',
    answers: [
      'El vehículo que realiza el cambio.',
      'El vehículo que circula por el carril que se pretende ocupar.',
      'Siempre los turismos.',
    ],
    correct: 'El vehículo que circula por el carril que se pretende ocupar.',
  },
  {
    question: '¿Está permitido adelantar en una glorieta?',
    answers: ['Sí, por la derecha.', 'No.', 'Sí.'],
    correct: 'Sí.',
  },
  {
    question:
      'Este vehículo va a girar a la izquierda, ¿está permitido adelantarlos por la derecha?',
    answers: [
      'Sí, porque está indicando claramente su propósito de girar a la izquierda.',
      'No, está prohibido adelantar en esta vía.',
      'No, porque lo correcto es adelantar por la izquierda.',
    ],
    correct:
      'Sí, porque está indicando claramente su propósito de girar a la izquierda.',
  },
  {
    question:
      'Como norma general, ¿se puede adelantar por la derecha en una autopista?',
    answers: [
      'Sí, si no se supera la velocidad máxima permitida.',
      'Sí, a un vehículo que circule a una velocidad reducida.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: 'En esta vía urbana, ¿está permitido adelantar por la derecha?',
    answers: [
      'No, se debe adelantar por la izquierda.',
      'No, porque se puede entorpecer la marcha de otros vehículos.',
      'Sí, porque la vía cuenta con dos carriles delimitados en el mismo sentido de la marcha.',
    ],
    correct:
      'Sí, porque la vía cuenta con dos carriles delimitados en el mismo sentido de la marcha.',
  },
  {
    question:
      'En esta vía de doble sentido de circulación, ¿por dónde adelantará al tranvía?',
    answers: [
      'Por la derecha.',
      'Tanto por la derecha como por la izquierda.',
      'Por la izquierda.',
    ],
    correct: 'Por la derecha.',
  },
  {
    question:
      'A la vista de la fotografía, ¿se considera adelantamiento el hecho de que los vehículos de un carril circulen más rápidamente que los de otro?',
    answers: [
      'No.',
      'Solo si los que circulan más rápido son los del carril izquierdo.',
      'Sí, salvo que los que circulen más rápido sean los del carril derecho.',
    ],
    correct: 'No.',
  },
  {
    question:
      'El adelantamiento se efectuará por la derecha y adoptando las máximas precauciones...',
    answers: [
      'siempre que se adelante a un vehículo articulado.',
      'cuando el conductor del vehículo al que se pretende adelantar está indicando claramente su propósito de girar a la izquierda.',
      'en vías con más de un carril en el mismo sentido.',
    ],
    correct:
      'cuando el conductor del vehículo al que se pretende adelantar está indicando claramente su propósito de girar a la izquierda.',
  },
  {
    question:
      'Si circula en esta vía con tráfico denso, no puede cambiar de carril para...',
    answers: ['salir de la calzada.', 'girar a la derecha.', 'adelantar.'],
    correct: 'adelantar.',
  },
  {
    question:
      'Después de adelantar al camión y al turismo, el turismo rojo desea seguir adelantando a otros vehículos. ¿Debe regresar antes al carril derecho?',
    answers: [
      'Sí, siempre.',
      'No, porque en autopistas no es obligatorio.',
      'Sí, pero solamente cuando circulen vehículos detrás a más velocidad.',
    ],
    correct:
      'Sí, pero solamente cuando circulen vehículos detrás a más velocidad.',
  },
  {
    question:
      'El camión que circula delante lo hace muy lentamente obstaculizando la circulación, ¿se le puede adelantar?',
    answers: [
      'Sí, porque es un obstáculo para los demás vehículos.',
      'No, porque el vehículo está en movimiento y no puedo atravesar la línea longitudinal continua.',
      'Sí, si tengo suficiente visibilidad y no se aproxima ningún vehículo en sentido contrario.',
    ],
    correct:
      'No, porque el vehículo está en movimiento y no puedo atravesar la línea longitudinal continua.',
  },
  {
    question:
      'En una autopista, ¿se puede circular por el carril de aceleración a mayor velocidad que los vehículos que circulan por el carril normal?',
    answers: [
      'No, se estaría realizando un adelantamiento por la derecha.',
      'Sí.',
      'No, salvo las motocicletas.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'El conductor del vehículo blanco quiere adelantar, pero el conductor del azul ya ha encendido el intermitente izquierdo. Si después de un tiempo prudencial no adelanta, ¿puede el conductor del vehículo blanco iniciar el adelantamiento?',
    answers: [
      'Sí, advirtiéndolo previamente con las señales acústicas u ópticas.',
      'Sí, pero dejando una separación lateral mayor que en otros adelantamientos, aproximadamente el doble.',
      'No, tendrá que esperar en todo caso a que realice el adelantamiento, o apague el intermitente.',
    ],
    correct:
      'Sí, advirtiéndolo previamente con las señales acústicas u ópticas.',
  },
  {
    question:
      'El vehículo gris al que pretende adelantar señala su propósito de desplazarse para adelantar, ¿puede adelantarle?',
    answers: [
      'Sí, si lo advierte con señales ópticas o acústicas.',
      'No, porque al señalizar tiene preferencia.',
      'No, en ningún caso.',
    ],
    correct: 'No, porque al señalizar tiene preferencia.',
  },
  {
    question:
      'No deberá iniciar un adelantamiento sin comprobar previamente que...',
    answers: [
      'el vehículo de delante reduce su velocidad para facilitar la maniobra.',
      'existe espacio suficiente para volver al carril derecho cuando termine la maniobra.',
      'los vehículos que circulan detrás mantienen la distancia de seguridad.',
    ],
    correct:
      'existe espacio suficiente para volver al carril derecho cuando termine la maniobra.',
  },
  {
    question:
      'Al adelantar a un peatón, es obligatorio dejar una separación lateral mínima de 1,50 metros cuando circule...',
    answers: [
      'por cualquier vía, fuera o dentro de poblado.',
      'en vías interurbanas, solamente.',
      'por poblado, exclusivamente.',
    ],
    correct: 'en vías interurbanas, solamente.',
  },
  {
    question:
      'Una vez iniciado el adelantamiento se producen circunstancias que pueden hacer difícil su finalización sin provocar riesgos, ¿qué está obligado a hacer el conductor?',
    answers: [
      'Terminar el adelantamiento aumentando rápidamente la velocidad.',
      'Desistir del adelantamiento, reduciendo rápidamente la marcha y regresando a su carril sin obstaculizar.',
      'Frenar bruscamente para volver a su derecha cuanto antes.',
    ],
    correct:
      'Desistir del adelantamiento, reduciendo rápidamente la marcha y regresando a su carril sin obstaculizar.',
  },
  {
    question:
      'En carretera desea adelantar a otro vehículo. ¿Cómo puede avisarle?',
    answers: [
      'Con las señales acústicas únicamente.',
      'Con las luces en ráfaga o con señales acústicas.',
      'Con el intermitente únicamente.',
    ],
    correct: 'Con las luces en ráfaga o con señales acústicas.',
  },
  {
    question:
      'Una vez sobrepasado el vehículo al que se pretende adelantar, el conductor deberá reintegrarse a su carril. Una norma práctica para efectuar la maniobra es iniciar el retorno al carril correspondiente...',
    answers: [
      'después de 15 segundos.',
      'después de ver en el espejo retrovisor la parte delantera del vehículo adelantado.',
      'después de recorrer 200 metros por delante del vehículo adelantado.',
    ],
    correct:
      'después de ver en el espejo retrovisor la parte delantera del vehículo adelantado.',
  },
  {
    question:
      'Al adelantar a una motocicleta de dos ruedas, ¿qué separación lateral de seguridad es obligatorio dejar?',
    answers: [
      '1,5 metros como mínimo en todo caso.',
      'Solamente una distancia lateral de seguridad.',
      'Al menos 1,5 metros, cuando el adelantamiento se realice fuera de poblado.',
    ],
    correct:
      'Al menos 1,5 metros, cuando el adelantamiento se realice fuera de poblado.',
  },
  {
    question:
      '¿Qué separación lateral debe dejar la motocicleta que está adelantando al camión?',
    answers: [
      'Una distancia proporcional a la velocidad a la que circule.',
      'Un espacio no inferior a 1,50 metros.',
      'Una separación que considere segura en función de las circunstancias del momento.',
    ],
    correct: 'Un espacio no inferior a 1,50 metros.',
  },
  {
    question:
      'En esta carretera, al adelantar con su camión de 3.500 kg a un turismo, ¿qué separación lateral debe respetar?',
    answers: [
      'Una distancia proporcional a la anchura y características de la calzada.',
      'Una distancia de 1,5 metros como mínimo.',
      'Una distancia proporcional a la anchura del turismo.',
    ],
    correct:
      'Una distancia proporcional a la anchura y características de la calzada.',
  },
  {
    question:
      'Al adelantar al ciclista que aparece en la fotografía, ¿es obligatorio invadir el carril de sentido contrario de la calzada?',
    answers: [
      'Sí.',
      'No.',
      'No, porque está prohibido adelantar a los ciclistas.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Quiere adelantar a un ciclista que circula por el arcén, ¿qué distancia lateral debe dejar?',
    answers: [
      'Al menos metro y medio.',
      'Un metro, al menos.',
      'No importa la distancia porque circula por el arcén.',
    ],
    correct: 'Al menos metro y medio.',
  },
  {
    question:
      'Cuando se adelante a vehículos de tracción animal, la separación lateral...',
    answers: [
      'no será inferior a 1,5 metros, cuando el adelantamiento se realice fuera de poblado.',
      'será al menos de 1,5 metros en todo caso.',
      'será siempre proporcional a la anchura y características de la vía.',
    ],
    correct:
      'no será inferior a 1,5 metros, cuando el adelantamiento se realice fuera de poblado.',
  },
  {
    question:
      'En una vía de doble sentido un vehículo va a girar a la izquierda, ¿debe facilitar el adelantamiento por la derecha a los demás vehículos?',
    answers: [
      'Sí, arrimándose todo lo posible al lado izquierdo de la calzada.',
      'No, ya que deben adelantar por la izquierda.',
      'Sí, arrimándose a la izquierda de su carril todo lo posible, pero sin obstaculizar a los vehículos que circulen en sentido contrario.',
    ],
    correct:
      'Sí, arrimándose a la izquierda de su carril todo lo posible, pero sin obstaculizar a los vehículos que circulen en sentido contrario.',
  },
  {
    question:
      '¿Qué debe hacer el conductor de un vehículo de grandes dimensiones para facilitar ser adelantado?',
    answers: [
      'Nada, la responsabilidad en el adelantamiento la tiene siempre el que adelanta.',
      'Disminuir la velocidad o apartarse al arcén si es practicable.',
      'Detenerse en el arcén obligatoriamente.',
    ],
    correct: 'Disminuir la velocidad o apartarse al arcén si es practicable.',
  },
  {
    question:
      '¿Tiene alguna obligación cuando observe que otro vehículo tiene el propósito de adelantarle?',
    answers: [
      'Ceñirme al borde derecho de la calzada.',
      'Disminuir la velocidad.',
      'Indicarle con el intermitente derecho que puede adelantar con seguridad.',
    ],
    correct: 'Ceñirme al borde derecho de la calzada.',
  },
  {
    question:
      'El vehículo blanco está adelantando incorrectamente. ¿Qué puede hacer el conductor del vehículo verde para facilitar el adelantamiento?',
    answers: [
      'Levantar el pie del acelerador o pisar un poco el freno.',
      'Circular obligatoriamente por el arcén.',
      'No debe hacer nada.',
    ],
    correct: 'Levantar el pie del acelerador o pisar un poco el freno.',
  },
  {
    question:
      'En este cambio de rasante de reducida visibilidad, ¿puede adelantar el vehículo blanco al azul?',
    answers: [
      'Sí, porque lo ha señalado convenientemente.',
      'Sí, porque no hay señalización expresa que lo prohíba.',
      'No, porque para ello debe ocupar parte de la calzada que corresponde al sentido contrario.',
    ],
    correct:
      'No, porque para ello debe ocupar parte de la calzada que corresponde al sentido contrario.',
  },
  {
    question: '¿En qué curvas está prohibido adelantar?',
    answers: [
      'En curvas a la derecha.',
      'En todas las curvas.',
      'En curvas de visibilidad reducida.',
    ],
    correct: 'En curvas de visibilidad reducida.',
  },
  {
    question:
      'En los pasos para peatones y en sus proximidades, ¿está permitido adelantar?',
    answers: [
      'Sí, cuando se haga a velocidad reducida, para poder detener el vehículo a tiempo si surgiera peligro de atropello.',
      'No, nunca.',
      'Sí, siempre que no haya peatones cruzando.',
    ],
    correct:
      'Sí, cuando se haga a velocidad reducida, para poder detener el vehículo a tiempo si surgiera peligro de atropello.',
  },
  {
    question:
      'En un paso a nivel o sus proximidades, ¿está permitido adelantar?',
    answers: [
      'No, nunca.',
      'Sí, siempre.',
      'Sí, cuando se adelante a vehículos de dos ruedas que no impidan la visibilidad lateral.',
    ],
    correct:
      'Sí, cuando se adelante a vehículos de dos ruedas que no impidan la visibilidad lateral.',
  },
  {
    question:
      'En un túnel con un solo carril para cada sentido, ¿está permitido el adelantamiento?',
    answers: ['No.', 'Sí.', 'Solo si la calzada dispone de arcén practicable.'],
    correct: 'No.',
  },
  {
    question:
      'En las intersecciones y sus proximidades, ¿está permitido adelantar?',
    answers: [
      'Sí, cuando no se genere peligro por falta de visibilidad.',
      'Sí, cuando el adelantamiento se realice a una velocidad tan suficientemente reducida que permita detenerse a tiempo si surgiera peligro.',
      'No, como norma general.',
    ],
    correct: 'No, como norma general.',
  },
  {
    question: 'Está prohibido adelantar en...',
    answers: [
      'todas las intersecciones, aunque la señalización lo permita.',
      'las glorietas.',
      'las intersecciones con vías para ciclistas.',
    ],
    correct: 'las intersecciones con vías para ciclistas.',
  },
  {
    question:
      '¿Puede girar en una intersección a la izquierda si no tiene visibilidad?',
    answers: [
      'No, aunque esté permitido por la señalización.',
      'Sí, con precaución.',
      'Sí, siempre.',
    ],
    correct: 'No, aunque esté permitido por la señalización.',
  },
  {
    question:
      'En esta vía de doble sentido, ¿dónde se colocará con su turismo para cambiar de dirección a la izquierda?',
    answers: [
      'Junto al borde izquierdo de la calzada.',
      'Cerca del borde derecho de la calzada.',
      'Junto a la marca longitudinal que separa los sentidos.',
    ],
    correct: 'Junto a la marca longitudinal que separa los sentidos.',
  },
  {
    question:
      'Para girar a la izquierda, en una vía en la que no hay marca que separe los dos sentidos de circulación, ¿dónde debe situarse?',
    answers: [
      'Obligatoriamente en el arcén, para realizar la maniobra desde allí.',
      'Junto al eje de la calzada, sin invadir el sentido contrario.',
      'En el centro de la calzada, invadiendo parte del sentido contrario si es preciso.',
    ],
    correct: 'Junto al eje de la calzada, sin invadir el sentido contrario.',
  },
  {
    question:
      'Para cambiar de dirección a la izquierda, ¿dónde debe dejar el centro de la intersección?',
    answers: [
      'A la derecha.',
      'A la izquierda.',
      'A la derecha o a la izquierda, es indiferente.',
    ],
    correct: 'A la izquierda.',
  },
  {
    question:
      'En esta vía de un solo sentido, ¿dónde se colocará para cambiar de dirección a la izquierda?',
    answers: [
      'Junto al borde derecho de la calzada.',
      'Junto al borde izquierdo de la calzada.',
      'Tanto en el borde derecho como en el izquierdo de la calzada.',
    ],
    correct: 'Junto al borde izquierdo de la calzada.',
  },
  {
    question:
      'En una vía interurbana de doble sentido y tres carriles separados por líneas discontinuas, ¿dónde se situará el conductor de un turismo para cambiar de dirección a la izquierda?',
    answers: [
      'En el carril central.',
      'En el carril situado a la izquierda de la calzada.',
      'En el carril de su derecha, como norma general.',
    ],
    correct: 'En el carril central.',
  },
  {
    question:
      'Si en una vía interurbana un ciclomotor de dos ruedas quiere girar a la izquierda y no hay carril acondicionado para ello...',
    answers: [
      'no puede realizar el giro.',
      'debe situarse a la derecha, e iniciarlo siempre desde dentro de la calzada.',
      'debe situarse a la derecha, e iniciarlo fuera de la calzada siempre que sea posible.',
    ],
    correct:
      'debe situarse a la derecha, e iniciarlo fuera de la calzada siempre que sea posible.',
  },
  {
    question:
      'El turismo está dando marcha atrás para cambiar el sentido de la marcha, ¿es correcto?',
    answers: [
      'Sí, si no recorre marcha atrás más de 15 metros.',
      'Sí, si no obstaculiza a otros conductores.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: 'En un túnel, ¿puede cambiar de sentido?',
    answers: [
      'Sí, cuando exista espacio suficiente y sin obstaculizar el paso de otros vehículos.',
      'Sí, cuando exista más de un carril para el sentido de la marcha.',
      'No, está prohibido.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question:
      'En un paso para peatones, ¿está permitido cambiar el sentido de la marcha?',
    answers: [
      'Sí.',
      'No, ni siquiera en sus proximidades.',
      'No, pero sí en sus proximidades.',
    ],
    correct: 'No, ni siquiera en sus proximidades.',
  },
  {
    question:
      'En un paso a nivel, ¿está permitido realizar un cambio de sentido?',
    answers: [
      'Sí, en los pasos a nivel sin barrera.',
      'Sí, cuando las barreras no estén en movimiento.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question: 'En autopistas y autovías, ¿está prohibido el cambio de sentido?',
    answers: [
      'Sí, salvo en los lugares habilitados al efecto.',
      'Sí, siempre.',
      'No.',
    ],
    correct: 'Sí, salvo en los lugares habilitados al efecto.',
  },
  {
    question:
      'En una autopista, ¿está permitido utilizar los pasos que hay en la mediana para hacer un cambio de sentido de la marcha?',
    answers: [
      'Sí, salvo que esté expresamente prohibido por una señal.',
      'No, porque está prohibido.',
      'Sí, cuando estén abiertos.',
    ],
    correct: 'No, porque está prohibido.',
  },
  {
    question:
      'En una vía cortada no se puede cambiar de sentido, ¿está permitido salir marcha atrás?',
    answers: [
      'Sí, pero el recorrido mínimo indispensable.',
      'No.',
      'Sí, pero sin recorrer más de 20 metros y efectuándola lo más rápido posible.',
    ],
    correct: 'Sí, pero el recorrido mínimo indispensable.',
  },
  {
    question:
      'Siempre que el recorrido hacia atrás no supere los 15 metros ni invada un cruce de vías, podrá circular marcha atrás…',
    answers: [
      'como maniobra complementaria de la parada.',
      'cuando no sea posible cambiar de dirección o sentido de la marcha.',
      'en autovías y autopistas que discurran por poblado.',
    ],
    correct: 'como maniobra complementaria de la parada.',
  },
  {
    question: 'La maniobra de marcha atrás debe efectuarse...',
    answers: [
      'lo más rápido posible.',
      'con la máxima precaución.',
      'advirtiéndolo previamente con la señal de emergencia.',
    ],
    correct: 'con la máxima precaución.',
  },
  {
    question:
      '¿Le está permitido a un turismo con remolque circular por el arcén de una autopista?',
    answers: [
      'Sí, si va a abandonar la vía por un carril de deceleración.',
      'Sí, cuando por razones de accidente o avería precise de un servicio de auxilio, para dirigirse hacia la primera salida.',
      'No, en ningún caso.',
    ],
    correct:
      'Sí, cuando por razones de accidente o avería precise de un servicio de auxilio, para dirigirse hacia la primera salida.',
  },
  {
    question:
      'En el caso de accidente o avería, si el vehículo está inmovilizado sin posibilidad de reemprender la marcha y las condiciones de circulación no permitieran a los ocupantes abandonar el vehículo con seguridad, ¿qué deben hacer estos?',
    answers: [
      'Permanecerán en el habitáculo con el cinturón abrochado.',
      'Intentar por todos los medios salir al exterior del vehículo para pedir auxilio.',
      'Permanecerán en el habitáculo con el cinturón desabrochado y las puertas abiertas.',
    ],
    correct: 'Permanecerán en el habitáculo con el cinturón abrochado.',
  },
  {
    question:
      'El chaleco reflectante es obligatorio ponérselo antes de salir del vehículo y ocupar la calzada o el arcén en…',
    answers: [
      'autopistas y autovías solamente.',
      'vías urbanas.',
      'vías interurbanas.',
    ],
    correct: 'vías interurbanas.',
  },
  {
    question:
      'En una vía de doble sentido, si por causa de accidente o avería el vehículo o su carga obstaculizaran la calzada, si no dispone del dispositivo luminoso de preselección de peligro, ¿es obligatorio colocar los triángulos de preselección de peligro?',
    answers: [
      'Sí, uno por delante y otro por detrás del vehículo o la carga.',
      'No, basta con encender la señal de emergencia.',
      'Sí, uno por detrás del vehículo.',
    ],
    correct: 'Sí, uno por delante y otro por detrás del vehículo o la carga.',
  },
  {
    question:
      'En condiciones de seguridad, en vías que no sean autopistas o autovías, ¿se permite el arrastre de un vehículo por otro no destinado a este fin?',
    answers: [
      'Sí, siempre que no se recorran de esta forma más de 5 kilómetros.',
      'Sí, pero solo hasta el lugar más próximo donde pueda quedar convenientemente inmovilizado.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'En una vía interurbana de doble sentido de la circulación, ¿está permitido realizar una parada o estacionamiento en el lado izquierdo?',
    answers: [
      'Sí, para atender una llamada urgente de teléfono.',
      'No, en ningún caso.',
      'Sí, para programar el sistema de navegación del vehículo.',
    ],
    correct: 'No, en ningún caso.',
  },
  {
    question:
      '¿Está prohibido parar o estacionar en la parte transitable del arcén de una vía interurbana?',
    answers: [
      'Solamente estacionar.',
      'Sí, tanto parar como estacionar.',
      'Solamente parar.',
    ],
    correct: 'Sí, tanto parar como estacionar.',
  },
  {
    question:
      '¿Se permite parar o estacionar en el arcén transitable de una travesía insuficientemente iluminada?',
    answers: ['No.', 'Parar sí, estacionar no.', 'Sí.'],
    correct: 'Sí.',
  },
  {
    question:
      'En una vía urbana de sentido único, está permitido estacionar en el lado...',
    answers: [
      'derecho.',
      'derecho o izquierdo.',
      'derecho o izquierdo, fuera de la calzada o el arcén.',
    ],
    correct: 'derecho o izquierdo.',
  },
  {
    question:
      '¿En qué parte de esta vía interurbana se podrá parar o estacionar una motocicleta?',
    answers: [
      'Fuera de la calzada, dejando libre la parte transitable del arcén de la derecha.',
      'Fuera de la calzada, en la parte transitable del arcén derecho.',
      'Fuera de la calzada, dejando libre la parte transitable del arcén derecho o izquierdo.',
    ],
    correct:
      'Fuera de la calzada, dejando libre la parte transitable del arcén de la derecha.',
  },
  {
    question: '¿Cómo debe colocar su vehículo al parar o estacionar?',
    answers: [
      'De manera que permita la mejor utilización del espacio disponible.',
      'Es indiferente, siempre que pare el motor y accione el freno de estacionamiento.',
      'Colocando el vehículo en paralelo a la vía, siempre.',
    ],
    correct:
      'De manera que permita la mejor utilización del espacio disponible.',
  },
  {
    question:
      'Si se estaciona un turismo en llano y el conductor se aleja, entre otras medidas debe...',
    answers: [
      'tomar las precauciones necesarias para impedir su uso sin autorización.',
      'colocar siempre en la caja de cambios la posición de estacionamiento.',
      'colocar calzos o bien apoyar las ruedas en la acera.',
    ],
    correct:
      'tomar las precauciones necesarias para impedir su uso sin autorización.',
  },
  {
    question:
      'Si estaciona un turismo con un remolque ligero en una pendiente sensible, debe...',
    answers: [
      'calzar el vehículo con cualquier elemento que sirva para ello.',
      'accionar el freno de mano, únicamente.',
      'colocar calzos o apoyar las ruedas directrices en el bordillo.',
    ],
    correct: 'colocar calzos o apoyar las ruedas directrices en el bordillo.',
  },
  {
    question: 'Estás prohibido parar...',
    answers: [
      'delante de los vados señalizados correctamente.',
      'donde se ocasione riesgo para el resto de usuarios.',
      'en las proximidades de los pasos para peatones.',
    ],
    correct: 'donde se ocasione riesgo para el resto de usuarios.',
  },
  {
    question:
      'La línea de borde de la calzada de la imagen es discontinua, ¿está permitido estacionar en la parte transitable del arcén?',
    answers: [
      'Solo para cargar o descargar mercancías.',
      'No, está prohibido.',
      'Sí, porque la línea es discontinua.',
    ],
    correct: 'No, está prohibido.',
  },
  {
    question: '¿Está correctamente inmovilizada esta furgoneta?',
    answers: [
      'Sí, siempre que se trate de una parada.',
      'Sí, ya que esté correctamente señalizada y no obstaculiza el paso.',
      'No, ya que entre la furgoneta y la marca continua hay una distancia inferior a 3 metros.',
    ],
    correct:
      'No, ya que entre la furgoneta y la marca continua hay una distancia inferior a 3 metros.',
  },
  {
    question:
      '¿En qué caso el estacionamiento perturba gravemente la circulación?',
    answers: [
      'En una zona reservada a carga y descarga, fuera de las horas de utilización.',
      'Cuando la distancia entre el vehículo y el borde opuesto de la calzada sea inferior a 5 metros.',
      'Cuando se efectúa en las medianas, separadores, isletas u otros elementos de canalización del tráfico.',
    ],
    correct:
      'Cuando se efectúa en las medianas, separadores, isletas u otros elementos de canalización del tráfico.',
  },
  {
    question:
      'Se considera que una parada o estacionamiento obstaculiza gravemente la circulación cuando…',
    answers: [
      'se efectúa en doble fila.',
      'se obstaculiza la utilización normal de los pasos rebajados para disminuidos físicos.',
      'se realiza en una vía pública calificada de atención preferente.',
    ],
    correct:
      'se obstaculiza la utilización normal de los pasos rebajados para disminuidos físicos.',
  },
  {
    question:
      '¿En qué caso se considera que un vehículo estacionado obstruye gravemente la circulación?',
    answers: [
      'Cuando está estacionado en doble fila sin conductor.',
      'Cuando esté estacionado en una zona reservada a carga y descarga, fuera de las horas de utilización.',
      'Cuando esté estacionado fuera del arcén transitable en vía interurbana.',
    ],
    correct: 'Cuando está estacionado en doble fila sin conductor.',
  },
  {
    question: '¿Está prohibido parar en una intersección en vía urbana?',
    answers: [
      'Sí, siempre.',
      'No, en ningún caso.',
      'Sí, cuando se dificulta el giro a otros vehículos.',
    ],
    correct: 'Sí, cuando se dificulta el giro a otros vehículos.',
  },
  {
    question: 'En un paso para peatones, ¿está permitido estacionar?',
    answers: ['Sí.', 'Sí, pero solo 2 minutos.', 'No.'],
    correct: 'No.',
  },
  {
    question:
      'En una zona señalizada para carga y descarga, ¿está permitido estacionar?',
    answers: [
      'No.',
      'Sí, en cualquier caso.',
      'Sí, pero solo fuera de las horas de utilización.',
    ],
    correct: 'No.',
  },
  {
    question: 'En doble fila, ¿qué está prohibido?',
    answers: ['Estacionar.', 'Parar.', 'Parar y estacionar.'],
    correct: 'Estacionar.',
  },
  {
    question: 'Está permitido parar...',
    answers: [
      'en los pasos para ciclistas.',
      'delante de los vados señalizados correctamente.',
      'en los carriles reservados para bicicletas.',
    ],
    correct: 'delante de los vados señalizados correctamente.',
  },
  {
    question: 'En esta intersección ¿quién debe pasar primero?',
    answers: [
      'El camión, porque tiene la derecha libre.',
      'El turismo, porque tiene preferencia sobre el resto de vehículos.',
      'El ciclomotor, porque se incorpora a la vía preferente.',
    ],
    correct: 'El camión, porque tiene la derecha libre.',
  },
  {
    question:
      'En esta intersección sin señalizar se encuentra con un ciclista, ¿debe cederle el paso?',
    answers: [
      'Sí, porque se aproxima por la derecha.',
      'No, porque los vehículos a motor tienen preferencia sobre los ciclos de dos ruedas.',
      'Sí, porque los vehículos de dos ruedas siempre tienen preferencia.',
    ],
    correct: 'Sí, porque se aproxima por la derecha.',
  },
  {
    question:
      'En una intersección donde no esté señalizada la prioridad, ¿debe ceder el paso a un tranvía?',
    answers: [
      'Sí, el tranvía tiene prioridad tanto si se aproxima por la derecha como por la izquierda.',
      'Solo se debe ceder el paso al tranvía si se aproxima por la derecha.',
      'No, ya que los tranvías no tienen prioridad de paso.',
    ],
    correct:
      'Sí, el tranvía tiene prioridad tanto si se aproxima por la derecha como por la izquierda.',
  },
  {
    question:
      'Un turismo circula por una vía preferente y por la derecha se le aproxima un tranvía, ¿quién tiene preferencia de paso?',
    answers: [
      'El tranvía, porque se aproxima por la derecha del turismo.',
      'El tranvía, porque circula sobre raíles.',
      'El turismo, porque circula por una vía preferente.',
    ],
    correct: 'El turismo, porque circula por una vía preferente.',
  },
  {
    question:
      'En una intersección en la que debe ceder el paso, ¿cuándo podrá reanudar la marcha?',
    answers: [
      'Cuando exista espacio suficiente para incorporarse.',
      'Cuando esté seguro de que no obliga al que tiene la prioridad a cambiar su trayectoria o velocidad.',
      'Inmediatamente después de que pase el vehículo al que cedo el paso.',
    ],
    correct:
      'Cuando esté seguro de que no obliga al que tiene la prioridad a cambiar su trayectoria o velocidad.',
  },
  {
    question: '¿Cuál debe ser su comportamiento al ceder el paso?',
    answers: [
      'Parar y comprobar si otro usuario de la vía tiene prioridad.',
      'No obligar al vehículo que tiene prioridad a modificar bruscamente su trayectoria o velocidad.',
      'Detenerse en las intersecciones si se acerca otro vehículo.',
    ],
    correct:
      'No obligar al vehículo que tiene prioridad a modificar bruscamente su trayectoria o velocidad.',
  },
  {
    question:
      'En una intersección que no tiene señal de preferencia, ¿cuándo debe ceder el paso a un vehículo de tracción animal?',
    answers: [
      'Siempre, porque tienen preferencia.',
      'Cuando entra por mi derecha.',
      'Nunca, porque no es un vehículo a motor.',
    ],
    correct: 'Cuando entra por mi derecha.',
  },
  {
    question:
      'El vehículo que sale de una vía no pavimentada, ¿a qué vehículos debe ceder el paso?',
    answers: [
      'Únicamente a los vehículos a motor que se aproximen por la derecha.',
      'A todos los que circulen por la vía pavimentada.',
      'Únicamente a los que se aproximen por la izquierda.',
    ],
    correct: 'A todos los que circulen por la vía pavimentada.',
  },
  {
    question:
      'El vehículo que circula dentro de una glorieta, ¿debe ceder el paso a un vehículo que quiere entrar por la derecha?',
    answers: [
      'No, porque tiene preferencia de paso.',
      'Sí, porque el que entra tiene prioridad.',
      'Sí, cuando no hay señales de prioridad.',
    ],
    correct: 'No, porque tiene preferencia de paso.',
  },
  {
    question:
      'En una intersección sin señalizar, tienen prioridad de paso los vehículos que circulen por...',
    answers: [
      'una glorieta sobre los que pretenden entrar en ella.',
      'la vía sin pavimentar.',
      'un carril de uso exclusivo para determinados vehículos.',
    ],
    correct: 'una glorieta sobre los que pretenden entrar en ella.',
  },
  {
    question: 'Ante este semáforo apagado, ¿qué debe hacer?',
    answers: [
      'Detenerme y después ceder el paso.',
      'Ceder el paso a los vehículos que vengan por la derecha.',
      'Pasar sin detenerme.',
    ],
    correct: 'Ceder el paso a los vehículos que vengan por la derecha.',
  },
  {
    question:
      'En las intersecciones señalizadas, ¿cuál es la norma general que prevalece?',
    answers: [
      'Ceder el paso siempre a la derecha.',
      'Abstenerse del cumplimiento de la señalización.',
      'Atenerse a la señalización que las regule.',
    ],
    correct: 'Atenerse a la señalización que las regule.',
  },
  {
    question:
      'En una intersección en la que es previsible quedarse detenido, ¿qué debe hacer si tiene prioridad de paso?',
    answers: [
      'No entrar en la intersección.',
      'Pasar y apartarse a un lado si obstaculiza la circulación.',
      'Pasar porque tiene prioridad de paso.',
    ],
    correct: 'No entrar en la intersección.',
  },
  {
    question:
      'Ha quedado detenido en una intersección regulada por semáforos y obstaculiza la circulación, ¿qué debe hacer?',
    answers: [
      'Esperar a que el semáforo se ponga verde.',
      'Dar marcha atrás para dejar libre la intersección.',
      'Salir del cruce lo antes posible, en condiciones de seguridad, sin esperar a que el semáforo se ponga verde.',
    ],
    correct:
      'Salir del cruce lo antes posible, en condiciones de seguridad, sin esperar a que el semáforo se ponga verde.',
  },
  {
    question:
      'Hay muchos vehículos circulando y prevé que va a quedar detenido en el paso para peatones. ¿Debe entrar en el paso?',
    answers: [
      'No, porque corto el paso a los peatones.',
      'Sí, cuando el semáforo está verde.',
      'Sí.',
    ],
    correct: 'No, porque corto el paso a los peatones.',
  },
  {
    question:
      'En esta intersección no hay línea de detención. ¿Dónde hay que detenerse?',
    answers: [
      'Antes de entrar en la intersección.',
      'A una distancia mínima de 5 metros antes de la intersección.',
      'Dentro de la intersección.',
    ],
    correct: 'Antes de entrar en la intersección.',
  },
  {
    question:
      'En una glorieta de una vía interurbana con dos carriles para su sentido, ¿por dónde debe circular?',
    answers: [
      'Por el carril de la izquierda.',
      'Por cualquiera de los carriles, es indiferente.',
      'Por el carril de la derecha, usando el otro carril si las circunstancias lo aconsejan, sin cortar la trayectoria a otros vehículos.',
    ],
    correct:
      'Por el carril de la derecha, usando el otro carril si las circunstancias lo aconsejan, sin cortar la trayectoria a otros vehículos.',
  },
  {
    question:
      'En un paso para peatones sin semáforos o agente que lo regule, ¿cuándo tienen preferencia los peatones?',
    answers: [
      'Solo cuando los peatones hayan iniciado el cruce.',
      'Solo cuando el paso esté situado en una travesía.',
      'Siempre.',
    ],
    correct: 'Siempre.',
  },
  {
    question:
      'En esta intersección, el vehículo está girando a la derecha, ¿quién tiene preferencia?',
    answers: [
      'El vehículo siempre.',
      'El peatón.',
      'El vehículo, porque no hay paso para peatones.',
    ],
    correct: 'El peatón.',
  },
  {
    question:
      'Los vehículos tienen prioridad sobre los peatones, excepto cuando...',
    answers: [
      'los peatones se aproximen por la derecha.',
      'vayan a girar en una intersección para entrar en otra vía y haya peatones cruzándola.',
      'se encuentren en la proximidad de un paso para peatones.',
    ],
    correct:
      'vayan a girar en una intersección para entrar en otra vía y haya peatones cruzándola.',
  },
  {
    question: 'En un paso para ciclistas, los demás conductores deben...',
    answers: [
      'ceder el paso a los ciclistas únicamente cuando se aproximen por la derecha.',
      'ceder el paso a los ciclists.',
      'ceder el paso a los ciclistas solo cuando estén pasando.',
    ],
    correct: 'ceder el paso a los ciclistas.',
  },
  {
    question:
      'Circula con su turismo por una vía que se cruza con un carril-bici, ¿debe ceder el paso a los ciclistas?',
    answers: [
      'No, los ciclistas no tienen prioridad de paso frente a los vehículos a motor.',
      'Solo cuando se aproximen por la derecha.',
      'Sí, siempre.',
    ],
    correct: 'Sí, siempre.',
  },
  {
    question:
      'Los conductores de bicicletas, ¿cuándo tienen prioridad de paso respecto a otros vehículos?',
    answers: [
      'Nunca.',
      'Cuando, circulando en grupo, el primer ciclista haya iniciado ya el cruce o haya entrado en una glorieta.',
      'Siempre.',
    ],
    correct:
      'Cuando, circulando en grupo, el primer ciclista haya iniciado ya el cruce o haya entrado en una glorieta.',
  },
  {
    question: 'En esta intersección, ¿debe ceder el paso a los ciclistas?',
    answers: [
      'No, porque los ciclistas no tienen prioridad.',
      'Sí, a todo el grupo.',
      'Sí, pero solo al primer ciclista.',
    ],
    correct: 'Sí, a todo el grupo.',
  },
  {
    question:
      '¿Cuándo tienen prioridad de paso los animales sobre los vehículos?',
    answers: [
      'Cuando se encuentren en una cañada debidamente señalizada.',
      'Si encuentra la señal de peligro por la proximidad de animales domésticos.',
      'Si se trata de un rebaño que circula como una unidad.',
    ],
    correct: 'Cuando se encuentren en una cañada debidamente señalizada.',
  },
  {
    question:
      'A la vista de la señal, ¿tienen preferencia de paso los animales domésticos cuando crucen la calzada?',
    answers: [
      'Sí, cuando vayan acompañados por un conductor de ganado.',
      'No.',
      'Sí, cuando vayan en grupo.',
    ],
    correct: 'No.',
  },
  {
    question: 'Al girar el vehículo, ¿debe dar prioridad a los animales?',
    answers: [
      'No, porque no existe un paso para animales domésticos.',
      'Sí.',
      'No, porque los animales no tienen nunca prioridad en la calzada.',
    ],
    correct: 'Sí.',
  },
  {
    question: 'Los vehículos deben ceder el paso a los peatones cuando...',
    answers: [
      'vayan a subir o bajar de un autobús en una parada señalizada como tal y se encuentren entre el autobús y la zona peatonal más próxima.',
      'se trate de una vía de poblado.',
      'circulen por la calzada.',
    ],
    correct:
      'vayan a subir o bajar de un autobús en una parada señalizada como tal y se encuentren entre el autobús y la zona peatonal más próxima.',
  },
  {
    question:
      'Al cruzar un arcén por el que circulan peatones en una zona en la que no existe zona peatonal, ¿qué debe hacer?',
    answers: [
      'Avisar a los peatones de nuestra presencia con señales acústicas.',
      'Ceder el paso a los peatones, pues tienen preferencia.',
      'Continuar circulando, ya que no tienen preferencia de paso.',
    ],
    correct: 'Ceder el paso a los peatones, pues tienen preferencia.',
  },
  {
    question: 'Los peatones tienen preferencia...',
    answers: [
      'al bajar de cualquier vehículo.',
      'en las vías urbanas.',
      'en las zonas peatonales.',
    ],
    correct: 'en las zonas peatonales.',
  },
  {
    question:
      'Al cruzar un arcén por el que transitan peatones, ¿qué debe hacer?',
    answers: [
      'Cederles el paso solamente cuando formen un grupo.',
      'Avisarles con las señales acústicas para que se aparten.',
      'Cederles el paso si no disponen de zona peatonal.',
    ],
    correct: 'Cederles el paso si no disponen de zona peatonal.',
  },
  {
    question:
      'Una fila de escolares está cruzando la calzada. ¿Debe cederles el paso?',
    answers: [
      'Sí.',
      'No, cuando no llevan paleta de STOP.',
      'Solamente en los pasos para peatones.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Los vehículos de auxilio en vías públicas, ¿tienen prioridad de paso sobre los demás vehículos y otros usuarios de la vía?',
    answers: [
      'Sí, siempre.',
      'Sí, cuando se hallen en servicio de auxilio.',
      'No, únicamente se les debe facilitar el paso en la medida de lo posible.',
    ],
    correct: 'Sí, cuando se hallen en servicio de auxilio.',
  },
  {
    question:
      'El vehículo de la fotografía tiene encendida únicamente la señalización luminosa, ¿tiene prioridad de paso?',
    answers: [
      'Sí, porque está en una vía urbana.',
      'Sí, siempre que la omisión de la señal acústica no entrañe peligro alguno para los demás usuarios.',
      'No, porque no lleva la señalización óptica y acústica simultáneamente.',
    ],
    correct:
      'Sí, siempre que la omisión de la señal acústica no entrañe peligro alguno para los demás usuarios.',
  },
  {
    question:
      'A un vehículo prioritario que circula en servicio de urgencia se le facilitará el paso...',
    answers: [
      'adoptando las medidas adecuadas según las circunstancias del momento.',
      'deteniendo siempre el vehículo en el lado izquierdo de la calzada.',
      'apartándose siempre a la derecha de la calzada.',
    ],
    correct:
      'adoptando las medidas adecuadas según las circunstancias del momento.',
  },
  {
    question:
      'El vehículo de policía en servicio urgente, ¿podrá circular en sentido contrario en una autopista?',
    answers: [
      'Sí.',
      'Sí, siempre que no exista peligro para los demás usuarios.',
      'No.',
    ],
    correct: 'Sí, siempre que no exista peligro para los demás usuarios.',
  },
  {
    question:
      'El conductor de un vehículo no prioritario que se vea forzado a realizar un servicio de urgencia...',
    answers: [
      'está obligado a respetar las normas y señales de circulación.',
      'está obligado a advertir su presencia con las señales de los vehículos prioritarios.',
      'no está obligado a respetar las normas de circulación, pero sí las señales.',
    ],
    correct: 'está obligado a respetar las normas y señales de circulación.',
  },
  {
    question:
      'Si por circunstancias especialmente graves un conductor traslada en su vehículo particular a una persona enferma, ¿cómo advertirá de su presencia?',
    answers: [
      'Agitando el brazo de arriba abajo con movimientos cortos y rápidos.',
      'Haciendo sonar el claxon en forma intermitente y conectando la luz de emergencia.',
      'Instalando en el techo de su vehículo una señal luminosa especial.',
    ],
    correct:
      'Haciendo sonar el claxon en forma intermitente y conectando la luz de emergencia.',
  },
  {
    question:
      'En un tramo de vía estrecho de gran pendiente, sin señalizar, debe ceder el paso generalmente...',
    answers: [
      'el vehículo más ligero.',
      'el vehículo que baja.',
      'el vehículo que sube.',
    ],
    correct: 'el vehículo que baja.',
  },
  {
    question:
      'En los estrechamientos en tramos de gran pendiente, si no hay señalización expresa al efecto, tendrá la preferencia de paso el vehículo que circule en sentido...',
    answers: [
      'ascendente, en todo caso.',
      'ascendente, salvo si pudiera llegar antes a un apartadero.',
      'descendente, salvo si pudiera llegar antes a un apartadero.',
    ],
    correct: 'ascendente, salvo si pudiera llegar antes a un apartadero.',
  },
  {
    question:
      'En una zona de obras en la que se ha producido un estrechamiento de la calzada, ¿qué vehículo tendrá preferencia si no hay señal que la regule?',
    answers: [
      'El que haya entrado primero.',
      'El que no tenga que cambiar de carril para entrar en el estrechamiento.',
      'El que se encuentre el estrechamiento a su derecha.',
    ],
    correct: 'El que haya entrado primero.',
  },
  {
    question:
      'En un estrechamiento sin señales de prioridad se encuentran un turismo que arrastra un remolque y un autobús, sin que se sepa cual entró primero, ¿qué vehículo tiene preferencia?',
    answers: [
      'El autobús.',
      'El que tenga que dar marcha atrás más distancia.',
      'El turismo que arrastra el remolque.',
    ],
    correct: 'El turismo que arrastra el remolque.',
  },
  {
    question:
      'Si en un tramo de vía muy estrecho sin señalar la prioridad se encuentran un camión y un turismo, ¿qué vehículo pasará primero?',
    answers: [
      'El camión si existe duda de qué vehículo entró primero.',
      'El turismo, porque tiene menor dificultad para pasar.',
      'El turismo, porque sus dimensiones son menores.',
    ],
    correct: 'El camión si existe duda de qué vehículo entró primero.',
  },
  {
    question:
      'Un turismo que arrastra un remolque de 750 kg y una autocaravana entran a la vez en un estrechamiento sin señalar, ¿qué vehículo pasará primero?',
    answers: [
      'El vehículo que tenga que dar marcha atrás menor distancia.',
      'La autocaravana.',
      'El vehículo que tenga que dar marcha atrás mayor distancia.',
    ],
    correct: 'El vehículo que tenga que dar marcha atrás mayor distancia.',
  },
  {
    question:
      'Un derivado de turismo y un camión entran a la vez en un estrechamiento sin señalizar, ¿qué vehículo está obligado a retroceder?',
    answers: [
      'El derivado de turismo.',
      'El vehículo que tenga mayor masa máxima autorizada.',
      'El camión.',
    ],
    correct: 'El derivado de turismo.',
  },
  {
    question:
      'Un ciclomotor y un turismo entran al mismo tiempo en un estrechamiento sin señalar la prioridad, ¿quién tiene prioridad?',
    answers: [
      'El turismo.',
      'El ciclomotor.',
      'El que pueda circular con menos seguridad.',
    ],
    correct: 'El turismo.',
  },
  {
    question:
      'Si en un estrechamiento sin señalar han entrado a la vez un turismo y un vehículo de tracción animal, ¿cuál de los dos vehículos tendrá preferencia de paso?',
    answers: [
      'El turismo.',
      'El vehículo de tracción animal.',
      'El que tenga que dar marcha atrás una mayor distancia.',
    ],
    correct: 'El vehículo de tracción animal.',
  },
  {
    question:
      'Un autobús y un camión entran a la vez a un estrechamiento sin señalizar, ¿qué vehículo debe retroceder?',
    answers: [
      'El vehículo que tenga mayor masa máxima autorizada.',
      'El camión.',
      'El autobús.',
    ],
    correct: 'El camión.',
  },
  {
    question: 'En un paso a nivel, una semibarrera móvil en movimiento…',
    answers: [
      'obliga a extremar la precaución, y solo puede cruzarlo si no se aproxima ningún vehículo.',
      'únicamente prohíbe el paso mientras se encuentra en posición transversal a la calzada, si está subiendo puede continuar.',
      'obliga a detenerse.',
    ],
    correct: 'obliga a detenerse.',
  },
  {
    question: 'Cuando se acerque a un puente móvil, ¿qué debe hacer?',
    answers: [
      'Disminuir la velocidad y conducir con más atención.',
      'Detener mi vehículo antes de pasar.',
      'Aumentar la velocidad y pasar rápidamente.',
    ],
    correct: 'Disminuir la velocidad y conducir con más atención.',
  },
  {
    question:
      'En un puente que disponga de un ancho de calzada inferior a 6 metros, ¿qué vehículos tienen prohibido cruzarse?',
    answers: [
      'Los vehículos prioritarios en servicio urgente.',
      'Los vehículos que necesitan una autorización especial para circular.',
      'Los vehículos articulados.',
    ],
    correct:
      'Los vehículos que necesitan una autorización especial para circular.',
  },
  {
    question:
      'Si no pretende adelantar, ¿cuándo deberá mantener una distancia de seguridad de al menos 100 metros con el vehículo que circule delante?',
    answers: [
      'Cuando circule por un paso elevado.',
      'Cuando circule por un túnel.',
      'Al llegar a un paso a nivel.',
    ],
    correct: 'Cuando circule por un túnel.',
  },
  {
    question:
      'El conductor de un conjunto de vehículos de más de 3.500 kg de MMA que circula por un túnel y no pretende adelantar debe dejar con el vehículo que le precede una separación de al menos...',
    answers: ['150 metros.', '100 metros.', '50 metros.'],
    correct: '150 metros.',
  },
  {
    question:
      'En un túnel, el conductor de una motocicleta que no pretende adelantar está obligado a dejar con el vehículo que le precede una separación de al menos...',
    answers: [
      '50 metros, o un intervalo mínimo de dos segundos.',
      '100 metros, o un intervalo mínimo de cuatro segundos.',
      '150 metros, o un intervalo mínimo de seis segundos.',
    ],
    correct: '100 metros, o un intervalo mínimo de cuatro segundos.',
  },
  {
    question:
      'En un túnel, si circula con su turismo sin intención de adelantar, debe mantener con el vehículo que circula delante una distancia…',
    answers: [
      'suficiente para no colisionar con él en caso de frenado brusco.',
      'de, al menos, 100 metros.',
      'que permita al que circule detrás adelantar con seguridad.',
    ],
    correct: 'de, al menos, 100 metros.',
  },
  {
    question:
      'Cuando quede detenido en el interior de un túnel, ¿qué precauciones debe adoptar?',
    answers: [
      'Apagar el motor y dejar el alumbrado de posición si dura más de 2 minutos.',
      'Poner el alumbrado de cruce y apagar el motor.',
      'Apagar el motor siempre.',
    ],
    correct:
      'Apagar el motor y dejar el alumbrado de posición si dura más de 2 minutos.',
  },
  {
    question:
      'En caso de incendio en el interior de un túnel o paso inferior, el conductor de un vehículo…',
    answers: [
      'dejará el motor encendido y las puertas abiertas.',
      'dejará el motor apagado y las puertas cerradas.',
      'dejará las puertas abiertas y la llave puesta.',
    ],
    correct: 'dejará las puertas abiertas y la llave puesta.',
  },
  {
    question:
      'Un vehículo lleva más carga que la Masa Máxima Autorizada (MMA). ¿Está permitido circular así?',
    answers: [
      'No, porque es peligroso.',
      'Sí, pero solamente cuando transporta equipaje y personas dentro de poblado.',
      'Sí, cuando es un vehículo de transporte de mercancías.',
    ],
    correct: 'No, porque es peligroso.',
  },
  {
    question:
      'Para transportar una mascota, salvo que exista en el vehículo un lugar destinado para su transporte, debe estar...',
    answers: [
      'controlada obligatoriamente por un pasajero.',
      'sujeta de forma que no interfiera con el conductor para evitar que pueda perder el control del vehículo.',
      'situada obligatoriamente en los asientos traseros y con el cinturón de seguridad del vehículo.',
    ],
    correct:
      'sujeta de forma que no interfiera con el conductor para evitar que pueda perder el control del vehículo.',
  },
  {
    question:
      'Para garantizar la seguridad en un turismo, ¿quién cuidará de que los pasajeros mantengan la posición adecuada?',
    answers: [
      'Siempre el conductor.',
      'El pasajero que viaje en el asiento delantero.',
      'Los pasajeros mayores de edad.',
    ],
    correct: 'Siempre el conductor.',
  },
  {
    question:
      'En un turismo con cinco plazas autorizadas, ¿puede transportar a seis personas?',
    answers: [
      'Sí, siempre que no supere en un 50% el número de plazas autorizadas.',
      'Sí, siempre que no supere la masa máxima autorizada.',
      'No, no está permitido.',
    ],
    correct: 'No, no está permitido.',
  },
  {
    question:
      'Dos vehículos del mismo tipo se encuentran en un estrechamiento y no se sabe cuál ha entrado primero, ¿cuál de ellos tiene prioridad?',
    answers: [
      'El vehículo que tenga que dar marcha atrás mayor distancia.',
      'El vehículo que tenga que dar marcha atrás una menor distancia.',
      'El vehículo que tenga mayor anchura o longitud.',
    ],
    correct: 'El vehículo que tenga que dar marcha atrás mayor distancia.',
  },
  {
    question:
      'Si un vehículo queda detenido por avería en un paso a nivel, lo más importante es...',
    answers: [
      'apagar el motor y encender el alumbrado de emergencia.',
      'colocar la señal triangular de peligro en la vía.',
      'que abandonen el vehículo todos sus ocupantes.',
    ],
    correct: 'que abandonen el vehículo todos sus ocupantes.',
  },
  {
    question:
      'En vía urbana de un solo sentido, los usuarios de un vehículo estacionado deberán salir de él...',
    answers: [
      'por el lado derecho.',
      'por el lado derecho o izquierdo, según el lado de la calzada donde se efectúe la inmovilización.',
      'siempre por el lado del conductor.',
    ],
    correct:
      'por el lado derecho o izquierdo, según el lado de la calzada donde se efectúe la inmovilización.',
  },
  {
    question: '¿Puede el conductor de una bicicleta transportar un pasajero?',
    answers: [
      'Sí, sentado entre el conductor y el manillar.',
      'No, está prohibido.',
      'Sí, a un menor de hasta siete años siempre que lo haga en un asiento adicional homologado.',
    ],
    correct:
      'Sí, a un menor de hasta siete años siempre que lo haga en un asiento adicional homologado.',
  },
  {
    question:
      'La falta de experiencia del pasajero, ¿puede ser la causa de un accidente en moto?',
    answers: [
      'Sí, debido al aumento de peso.',
      'No.',
      'Sí, sobre todo en las curvas.',
    ],
    correct: 'Sí, sobre todo en las curvas.',
  },
  {
    question: '¿Cómo debe sentarse el pasajero de una motocicleta?',
    answers: [
      'A horcajadas entre la persona que conduce y el manillar de dirección.',
      'De cualquier forma, siempre que vaya cómodo.',
      'A horcajadas y con los pies apoyados en los reposapies laterales.',
    ],
    correct:
      'A horcajadas y con los pies apoyados en los reposapies laterales.',
  },
  {
    question:
      'La edad mínima para viajar como acompañante en una motocicleta o ciclomotor será de...',
    answers: [
      '12 años y, excepcionalmente, siete años si la motocicleta o ciclomotor van conducidos por el padre, madre o tutor.',
      'tres años, pero siempre con asiento adicional.',
      'siempre 12 años.',
    ],
    correct:
      '12 años y, excepcionalmente, siete años si la motocicleta o ciclomotor van conducidos por el padre, madre o tutor.',
  },
  {
    question:
      'Transportar un niño situado entre el manillar y el conductor en una motocicleta, ¿está permitido?',
    answers: [
      'No.',
      'Sí, pero solo cuando el conductor sea el padre, la madre o una persona autorizada.',
      'Sí, con el correspondiente casco adecuado a su talla.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Una motocicleta que arrastra un remolque, ¿puede transportar una persona en él?',
    answers: [
      'Sí, igual que si se tratara de un sidecar.',
      'No, en ningún caso.',
      'Sí, si se trata de un niño mayor de 7 años.',
    ],
    correct: 'No, en ningún caso.',
  },
  {
    question:
      'Entre la puesta y la salida del sol, ¿está permitido conducir una motocicleta que arrastra un remolque?',
    answers: [
      'Sí, si se hace a una velocidad un 10 por ciento por debajo de la genérica de la vía.',
      'Sí, como a cualquier otra hora del día.',
      'No.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Para un vehículo con carga, ¿cuál es la altura máxima permitida?',
    answers: ['2,5 metros.', '4 metros como norma general.', '3 metros.'],
    correct: '4 metros como norma general.',
  },
  {
    question:
      '¿Está permitido que la carga de un turismo sobresalga por los laterales?',
    answers: [
      'No.',
      'Sí, cuando no comprometa la estabilidad del vehículo.',
      'Sí, señalizada con un panel de franjas rojas y blancas.',
    ],
    correct: 'No.',
  },
  {
    question:
      'En un vehículo de menos de 5 metros de longitud, destinado al transporte de mercancías, ¿cuánto puede sobresalir una carga de longitud indivisible por su parte delantera?',
    answers: [
      'Un 15 % de la longitud del vehículo.',
      'Nada; solo podrá sobresalir por su parte trasera.',
      'Un tercio de la longitud del vehículo.',
    ],
    correct: 'Un tercio de la longitud del vehículo.',
  },
  {
    question:
      'En un vehículo de más de 5 metros destinado al transporte de mercancías, una carga de longitud indivisible puede sobrasalir...',
    answers: [
      '3 metros por la parte anterior y 2 por la posterior.',
      'el 15 % de la longitud del vehículo por delante y por detrás.',
      '2 metros por la parte anterior y 3 por la posterior.',
    ],
    correct: '2 metros por la parte anterior y 3 por la posterior.',
  },
  {
    question:
      'En un turismo, ¿la carga puede sobresalir por su parte posterior?',
    answers: [
      'Sí, hasta un 10 por 100 de su longitud y, si la carga fuera indivisible, hasta un 15 por 100.',
      'Sí, hasta un 5 por 100 de su longitud.',
      'No, no está permitido que sobresalga la carga del vehículo.',
    ],
    correct:
      'Sí, hasta un 10 por 100 de su longitud y, si la carga fuera indivisible, hasta un 15 por 100.',
  },
  {
    question:
      'Una carga sobresale por la parte trasera de un turismo, ¿debe ir señalizada?',
    answers: [
      'Sí, tanto de día como de noche.',
      'No, porque no es un vehículo destinado exclusivamente al transporte de mercancías.',
      'Sí, pero solo de noche o cuando existan condiciones meteorológicas que disminuyan sensiblemente la visibilidad.',
    ],
    correct: 'Sí, tanto de día como de noche.',
  },
  {
    question: 'Este panel deberá colocarse…',
    answers: [
      'en todos los vehículos de anchura no inferior a un metro, cuando la carga sobresalga posteriormente.',
      'en la parte delantera y trasera en los vehículos destinados exclusivamente al transporte de mercancías.',
      'en la parte trasera de los vehículos destinados exclusivamente al transporte de mercancías.',
    ],
    correct:
      'en todos los vehículos de anchura no inferior a un metro, cuando la carga sobresalga posteriormente.',
  },
  {
    question: '¿Cómo debe señalizar la carga que sobresale de una motocicleta?',
    answers: [
      'De noche con una luz roja por la parte trasera.',
      'En las motocicletas la carga no es necesario señalizarla.',
      'Con un panel reglamentario en el extremo de la carga.',
    ],
    correct: 'En las motocicletas la carga no es necesario señalizarla.',
  },
  {
    question:
      'En un vehículo de anchura inferior a un metro, ¿puede sobresalir la carga por delante o por detrás?',
    answers: [
      'Solo por detrás hasta 25 centímetros.',
      'Sí, hasta 25 centímetros, por delante y por detrás.',
      'No, en ningún caso.',
    ],
    correct: 'Solo por detrás hasta 25 centímetros.',
  },
  {
    question: 'En los vehículos de anchura inferior a un metro...',
    answers: [
      'la carga no deberá sobresalir lateralmente más de 0,40 metros a cada lado de su eje longitudinal.',
      'la carga no deberá sobresalir lateralmente más de 0,50 metros a cada lado de su eje longitudinal.',
      'la carga podrá sobresalir por la parte trasera hasta un 15 %, cuando es indivisible.',
    ],
    correct:
      'la carga no deberá sobresalir lateralmente más de 0,50 metros a cada lado de su eje longitudinal.',
  },
  {
    question:
      'De noche, es obligatorio señalizar una carga que sobresale lateralmente más de 0,40 metros de los bordes exteriores de las luces de posición...',
    answers: [
      'con una luz roja y un dispositivo reflectante rojo por detrás, solamente.',
      'con una luz blanca y un dispositivo reflectante de color blanco por delante y con una luz roja y un dispositivo reflectante de color rojo por detrás.',
      'con un panel reflectante por detrás solamente.',
    ],
    correct:
      'con una luz blanca y un dispositivo reflectante de color blanco por delante y con una luz roja y un dispositivo reflectante de color rojo por detrás.',
  },
  {
    question: 'Este camión, ¿cómo debe llevar la carga que sobresale?',
    answers: [
      'Señalada y protegida en los extremos.',
      'Protegida solamente, porque es un vehículo de transporte de mercancías.',
      'Señalada solamente.',
    ],
    correct: 'Señalada y protegida en los extremos.',
  },
  {
    question:
      'Si por cualquier circunstancia tuviera que realizar la operación de descarga de su vehículo dentro de la vía pública, ¿cómo deberá hacerlo?',
    answers: [
      'Depositando la mercancía en el arcén o en la zona peatonal más próxima.',
      'Efectuando la descarga lo antes posible, evitando ruidos y molestias innecesarias.',
      'En ningún caso debe realizarse la operación de descarga dentro de la vía.',
    ],
    correct:
      'Efectuando la descarga lo antes posible, evitando ruidos y molestias innecesarias.',
  },
  {
    question:
      '¿Es correcto depositar objetos en la vía mientras se realizan operaciones de carga y descarga?',
    answers: [
      'Sí, cuando se realizan por el lado más próximo al borde de la calzada.',
      'No, ya que no se pueden depositar mercancías en la vía.',
      'Sí, siempre que no causen molestias.',
    ],
    correct: 'No, ya que no se pueden depositar mercancías en la vía.',
  },
  {
    question: 'Las operaciones de carga y descarga se llevarán a cabo...',
    answers: [
      'por el lado del vehículo más próximo al centro de la calzada.',
      'procurando evitar ruidos y molestias innecesarias.',
      'dentro de la vía, en cualquier caso.',
    ],
    correct: 'procurando evitar ruidos y molestias innecesarias.',
  },
  {
    question: '¿Cuántas placas de matrícula lleva una motocicleta?',
    answers: [
      'Dos, una delante y otra detrás.',
      'Una en la parte posterior, en posición vertical.',
      'Una en la parte posterior, en posición horizontal.',
    ],
    correct: 'Una en la parte posterior, en posición vertical.',
  },
  {
    question: 'Un vehículo con esta señal indica que…',
    answers: [
      'es lento y no puede superar los 40 km/h.',
      'transporta mercancías peligrosas.',
      'es especial y está realizando trabajos en la vía.',
    ],
    correct: 'es lento y no puede superar los 40 km/h.',
  },
  {
    question: '¿De qué le advierte la señal V-27, triángulo virtual?',
    answers: [
      'De la proximidad de un punto negro o tramo de concentración de accidentes.',
      'De la proximidad de un tramo especialmente peligroso.',
      'De la presencia de un peligro próximo informado por un tercero a la plataforma de vehículo conectado de la DGT.',
    ],
    correct:
      'De la presencia de un peligro próximo informado por un tercero a la plataforma de vehículo conectado de la DGT.',
  },
  {
    question: 'En una curva hay más riesgo de accidente cuando...',
    answers: [
      'se toma a velocidad reducida.',
      'el radio de la curva es pequeño.',
      'el radio de la curva es grande.',
    ],
    correct: 'el radio de la curva es pequeño.',
  },
  {
    question:
      'Para tomar una curva adecuadamente, siempre que sea posible, durante el desarrollo de la curva, se debe circular a una velocidad...',
    answers: [
      'que permita no tener que acelerar en todo su desarrollo.',
      'que permita no tener que frenar en todo su desarrollo.',
      'inferior a la mitad de la genérica permitida en la vía.',
    ],
    correct: 'que permita no tener que frenar en todo su desarrollo.',
  },
  {
    question:
      'Si realiza con su motocicleta un giro muy cerrado a una velocidad lenta, ¿qué precaución debe tener?',
    answers: [
      'Debe compensar el efecto giroscópico con el peso del cuerpo.',
      'No frenar con el freno delantero porque la rueda puede bloquearse y producirse una caída.',
      'A esa velocidad tan lenta no es necesario tomar ninguna precaución.',
    ],
    correct:
      'No frenar con el freno delantero porque la rueda puede bloquearse y producirse una caída.',
  },
  {
    question:
      'Al tomar una curva nota que su vehículo no gira tanto como debería porque los neumáticos delanteros han perdido cierta adherencia, ¿qué es lo primero que debe hacer?',
    answers: [
      'Pisar el pedal de freno con fuerza y corregir la trayectoria.',
      'Aumentar el ángulo de viraje para conseguir un mayor agarre.',
      'Dejar de acelerar y no tocar el pedal del freno, para conseguir más adherencia.',
    ],
    correct:
      'Dejar de acelerar y no tocar el pedal del freno, para conseguir más adherencia.',
  },
  {
    question:
      'En una calzada con nieve, ¿el uso brusco e inadecuado de los frenos puede ser causa de derrape?',
    answers: [
      'No, si las ruedas están perfectamente alineadas y equilibradas.',
      'No, si los neumáticos tienen la presión de inflado recomendada.',
      'Sí, si se frena bruscamente los neumáticos pueden perder la adherencia sobre el pavimento.',
    ],
    correct:
      'Sí, si se frena bruscamente los neumáticos pueden perder la adherencia sobre el pavimento.',
  },
  {
    question: 'Las señales de obras...',
    answers: [
      'tienen distinto símbolo y tamaño que las usadas en tramos sin obras.',
      'establecen para los tramos de obras una reducción de la velocidad máxima en 10 km/h.',
      'tienen el mismo significado que las usadas en tramos sin obras.',
    ],
    correct: 'tienen el mismo significado que las usadas en tramos sin obras.',
  },
  {
    question: 'En tramos de obras, ¿de qué color serán las marcas viales?',
    answers: ['Blanco.', 'Naranja.', 'Amarillo.'],
    correct: 'Amarillo.',
  },
  {
    question: 'Esta señal, ¿qué indica?',
    answers: [
      'Que hay un carril para circulación lenta.',
      'Que hay una salida obligatoria a la derecha.',
      'Que se termina el carril izquierdo y que hay obras.',
    ],
    correct: 'Que se termina el carril izquierdo y que hay obras.',
  },
  {
    question:
      'Es obligatorio que las obras que dificulten la circulación estén señalizadas...',
    answers: ['solo de noche.', 'tanto de día como de noche.', 'solo de día.'],
    correct: 'tanto de día como de noche.',
  },
  {
    question:
      'Circula de noche con el alumbrado interior encendido. ¿Es peligroso?',
    answers: [
      'Sí, porque veo peor.',
      'No, porque descansa la vista.',
      'No, porque evita deslumbramiento.',
    ],
    correct: 'Sí, porque veo peor.',
  },
  {
    question:
      'Si la furgoneta dispone de un mando para regular las luces, ¿debe su conductor, si es necesario, regular las luces cuando transporte carga pesada?',
    answers: [
      'No, normalmente las luces se adaptan a la carga.',
      'No, si el peso está distribuido uniformemente.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question: 'Por la noche, la agudeza visual...',
    answers: ['no varía.', 'se reduce.', 'aumenta.'],
    correct: 'se reduce.',
  },
  {
    question:
      '¿Puede deslumbar con la luz de largo alcance a los vehículos que circulan delante por su mismo carril?',
    answers: [
      'Sí, a través de los espejos retrovisores, por lo que debe cambiar a la luz de corto alcance.',
      'No, solo se deslumbra a los que encuentre de frente.',
      'Sí, por el reflejo de la calzada.',
    ],
    correct:
      'Sí, a través de los espejos retrovisores, por lo que debe cambiar a la luz de corto alcance.',
  },
  {
    question: 'El vehículo rojo…',
    answers: [
      'debe seguir circulando con la luz larga en la curva.',
      'debe cambiar la luz larga por la corta al cruzarse con el vehículo verde.',
      'debe apagar las luces para no deslumbar al conductor del vehículo verde.',
    ],
    correct:
      'debe cambiar la luz larga por la corta al cruzarse con el vehículo verde.',
  },
  {
    question: 'Ante este deslumbramiento debe...',
    answers: [
      'acelerar para que el tiempo de deslumbramiento sea el menor posible.',
      'reducir la velocidad lo necesario, llegando incluso a detenerse.',
      'encender las luces largas para aumentar la visibilidad.',
    ],
    correct: 'reducir la velocidad lo necesario, llegando incluso a detenerse.',
  },
  {
    question: 'De noche, ¿qué debe hacer para no deslumbrar?',
    answers: [
      'Circular con la luz corta en carretera y con la de posición en ciudad.',
      'Cambiar la luz larga por la corta cuando me acerco a otro vehículo en carretera.',
      'Circular siempre con la luz corta.',
    ],
    correct:
      'Cambiar la luz larga por la corta cuando me acerco a otro vehículo en carretera.',
  },
  {
    question:
      'Circula de noche con las luces largas encendidas. Ve peatones en el arcén. ¿Está obligado a cambiar la luz la larga por la corta?',
    answers: [
      'Sí, para no deslumbrar.',
      'No es necesario.',
      'Sí, pero solamente en los tramos rectos.',
    ],
    correct: 'Sí, para no deslumbrar.',
  },
  {
    question:
      'Cuando termine el adelantamiento, el vehículo adelantado deberá...',
    answers: [
      'cambiar la luz larga por la luz corta.',
      'reducir la velocidad obligatoriamente.',
      'circular igual que lo está haciendo, con la luz larga encendida.',
    ],
    correct: 'cambiar la luz larga por la luz corta.',
  },
  {
    question:
      'La lluvia, ¿exige al conductor tomar más precauciones de las habituales?',
    answers: [
      'Solo mientras caen las primeras gotas, luego no es necesario tomar precauciones.',
      'Sí, ya que los neumáticos pueden perder su adherencia.',
      'No, porque mejora la visibilidad al limpiar el parabrisas.',
    ],
    correct: 'Sí, ya que los neumáticos pueden perder su adherencia.',
  },
  {
    question: 'El aquaplaning produce...',
    answers: [
      'un aumento de adherencia en caso de lluvia.',
      'una pérdida de adherencia en caso de lluvia.',
      'una pérdida de visibilidad en caso de lluvia.',
    ],
    correct: 'una pérdida de adherencia en caso de lluvia.',
  },
  {
    question:
      'Si tiene que circular con su motocicleta por una zona especialmente deslizante, ¿qué precauciones debe tomar?',
    answers: [
      'Acelerar para pasar por la zona en el menor tiempo posible.',
      'Frenar en la zona para controlar la trayectoria.',
      'Disminuir la velocidad antes de llegar y mantener la motocicleta vertical al pasar sobre ella.',
    ],
    correct:
      'Disminuir la velocidad antes de llegar y mantener la motocicleta vertical al pasar sobre ella.',
  },
  {
    question:
      'Si conduciendo una motocicleta tiene que atravesar una zona con poca adherencia, debe hacerlo...',
    answers: [
      'aumentando la velocidad para pasar rápidamente.',
      'con la motocicleta perpendicular al suelo y sin acelerar o frenar bruscamente.',
      'frenando para disminuir el peligro.',
    ],
    correct:
      'con la motocicleta perpendicular al suelo y sin acelerar o frenar bruscamente.',
  },
  {
    question:
      'Si está lloviendo, ¿a qué prestará especial atención si conduce una motocicleta?',
    answers: [
      'A que disminuye el tiempo de reacción.',
      'A las marcas viales que son muy resbaladizas.',
      'A que se puede mojar el motor.',
    ],
    correct: 'A las marcas viales que son muy resbaladizas.',
  },
  {
    question: 'Si conduce con lluvia...',
    answers: [
      'la distancia de reacción aumenta.',
      'debe aumentar la distancia de seguridad con el vehículo que circula delante.',
      'la distancia de frenado disminuye.',
    ],
    correct:
      'debe aumentar la distancia de seguridad con el vehículo que circula delante.',
  },
  {
    question: 'Si hay charcos de agua en la calzada…',
    answers: [
      'no es aconsejable tomar ninguna precaución.',
      'debe moderar la velocidad en todo caso.',
      'debe acelerar para atravesarlos lo antes posible.',
    ],
    correct: 'debe moderar la velocidad en todo caso.',
  },
  {
    question: 'Cuando llueve es importante...',
    answers: [
      'no pisar el pedal del embrague.',
      'aumentar la presión de los neumáticos.',
      'comprobar de vez en cuando los frenos.',
    ],
    correct: 'comprobar de vez en cuando los frenos.',
  },
  {
    question:
      '¿Qué puede ocurrir si, al atravesar un charco de agua, los frenos se mojan?',
    answers: [
      'Que se reduce la distancia de frenado.',
      'Que pueden perder temporalmente su eficacia.',
      'Que se estropean y deben cambiarse las zapatas o pastillas.',
    ],
    correct: 'Que pueden perder temporalmente su eficacia.',
  },
  {
    question:
      'El suelo está mojado y se ve obligado a frenar por emergencia. ¿Qué peligro hay?',
    answers: [
      'No hay peligro.',
      'Que las ruedas se bloquee y el vehículo derrape.',
      'Que las ruedas se desgasten.',
    ],
    correct: 'Que las ruedas se bloquee y el vehículo derrape.',
  },
  {
    question: '¿Qué debe revisar si prevé que puede llover?',
    answers: [
      'El líquido de frenos y la presión de los neumáticos.',
      'Nada, no es necesaria ninguna revisión.',
      'El estado de los neumáticos y los limpiaparabrisas.',
    ],
    correct: 'El estado de los neumáticos y los limpiaparabrisas.',
  },
  {
    question: 'Si conduciendo le sorprende una lluvia torrencial...',
    answers: [
      'debe parar en todo caso, aunque sea en la calzada.',
      'debe acelerar para pasar la tormenta.',
      'debe estacionar en un lugar permitido y seguro, manteniendo encendidas las luces de posición.',
    ],
    correct:
      'debe estacionar en un lugar permitido y seguro, manteniendo encendidas las luces de posición.',
  },
  {
    question:
      'Circulando con la calzada nevada las pendientes se deben subir...',
    answers: [
      'con la relación de marchas más corta posible.',
      'rápidamente, porque si el vehículo se detiene será difícil reanudar la marcha.',
      'lentamente y a velocidad sostenida.',
    ],
    correct: 'lentamente y a velocidad sostenida.',
  },
  {
    question: 'Con nieve en la calzada, ¿cómo se debe iniciar la marcha?',
    answers: [
      'Utilizando la segunda o tercera marcha.',
      'Con la marcha más corta posible.',
      'Pisando a fondo el acelerador para que el coche salga de golpe.',
    ],
    correct: 'Utilizando la segunda o tercera marcha.',
  },
  {
    question: '¿Cómo debe conducir con nieve?',
    answers: [
      'Con las luces de emergencia encendidas.',
      'Frenando y acelerando con suavidad.',
      'Por el arcén.',
    ],
    correct: 'Frenando y acelerando con suavidad.',
  },
  {
    question:
      'Cuando nieva, ¿es recomendable circular sobre las marcas de otros vehículos?',
    answers: [
      'Sí, puesto que facilitará la adherencia.',
      'No, porque perjudicará la adherencia.',
      'Es indiferente, puesto que no influye en la adherencia.',
    ],
    correct: 'Sí, puesto que facilitará la adherencia.',
  },
  {
    question: 'Cuando nieva, ¿es recomendable usar gafas de sol?',
    answers: [
      'Sí, si sale el sol y se refleja fuertemente en la nieve pueden ser muy útiles.',
      'No, puesto que perjudicaría a la visión.',
      'Sí, y además son obligatorias.',
    ],
    correct:
      'Sí, si sale el sol y se refleja fuertemente en la nieve pueden ser muy útiles.',
  },
  {
    question:
      'Para conducir con hielo en la calzada de una forma preventiva debe...',
    answers: [
      'tener especial cuidado durante el día.',
      'disminuir la velocidad y utilizar marchas largas.',
      'disminuir la velocidad y utilizar marchas cortas.',
    ],
    correct: 'disminuir la velocidad y utilizar marchas largas.',
  },
  {
    question: 'Hay hielo en la calzada. ¿Qué debe hacer?',
    answers: [
      'Acelerar para salir rápidamente.',
      'Circular con la primera marcha, que es la más corta.',
      'Conducir con cuidado, frenar y acelerar con cuidado solo cuando sea necesario.',
    ],
    correct:
      'Conducir con cuidado, frenar y acelerar con cuidado solo cuando sea necesario.',
  },
  {
    question: 'Cuando la calzada está helada...',
    answers: [
      'la distancia de frenado se mantiene igual que en condiciones normales.',
      'la distancia de frenado aumenta.',
      'la distancia de frenado disminuye.',
    ],
    correct: 'la distancia de frenado aumenta.',
  },
  {
    question: 'En una zona de calzada helada...',
    answers: [
      'se puede mejorar la adherencia, con cadenas o neumáticos de clavos.',
      'no se pueden utilizar neumáticos de clavos.',
      'no se puede circular.',
    ],
    correct:
      'se puede mejorar la adherencia, con cadenas o neumáticos de clavos.',
  },
  {
    question:
      'Hay nieve y solo tiene cadenas para dos ruedas. ¿Dónde debe ponerlás?',
    answers: [
      'En las ruedas delanteras siempre.',
      'En las ruedas motrices siempre.',
      'En las ruedas traseras siempre.',
    ],
    correct: 'En las ruedas motrices siempre.',
  },
  {
    question: 'Hay nieve en la calzada, ¿cuándo es obligatorio usar cadenas?',
    answers: [
      'Siempre que la temperatura sea menor de cero grados (0 °C).',
      'Siempre que esté nevando y los neumáticos del vehículo no se agarren bien a la calzada.',
      'Cuando lo indique la señalización.',
    ],
    correct: 'Cuando lo indique la señalización.',
  },
  {
    question:
      'Hay niebla y lleva la luz antiniebla delantera encendida. ¿Está permitido encender la luz larga?',
    answers: [
      'No, porque está prohibido.',
      'Sí, está permitido, pero no es aconsejable.',
      'Sí, es obligatorio.',
    ],
    correct: 'Sí, está permitido, pero no es aconsejable.',
  },
  {
    question: 'Circulando con niebla es aconsejable...',
    answers: [
      'mantener el habitáculo bien ventilado para evitar que se empañen los cristales.',
      'poner la calefacción muy alta para conducir cómodamente.',
      'circular con las ventanillas abiertas para obtener mayor visibilidad.',
    ],
    correct:
      'mantener el habitáculo bien ventilado para evitar que se empañen los cristales.',
  },
  {
    question:
      '¿Se debe aumentar la distancia de seguridad cuando exista niebla?',
    answers: [
      'La niebla no influye en la distancia de detección.',
      'Sí, para tener más espacio para reaccionar ante cualquier frenada del vehículo que va delante.',
      'No, si se llevan las luces encendidas.',
    ],
    correct:
      'Sí, para tener más espacio para reaccionar ante cualquier frenada del vehículo que va delante.',
  },
  {
    question:
      'En caso de niebla espesa, ¿qué alumbrado es obligatorio para circular con su turismo?',
    answers: [
      'Las luces antiniebla delanteras, junto a las de posición y las de corto alcance.',
      'Las luces antiniebla delanteras.',
      'Las luces antiniebla traseras, junto a las de posición y las de corto alcance.',
    ],
    correct:
      'Las luces antiniebla traseras, junto a las de posición y las de corto alcance.',
  },
  {
    question: '¿Qué vehículos son los más afectados por el viento lateral?',
    answers: [
      'Las motocicletas y los ciclomotores.',
      'Los camiones.',
      'Los turismos.',
    ],
    correct: 'Las motocicletas y los ciclomotores.',
  },
  {
    question:
      'Conduciendo una motocicleta, ¿cuándo es especialmente peligroso el viento?',
    answers: [
      'Cuando sopla de frente, porque puede frenar la marcha.',
      'Cuando sopla de costado.',
      'Cuando sopla desde atrás, porque aumenta la velocidad.',
    ],
    correct: 'Cuando sopla de costado.',
  },
  {
    question:
      'Cuando llueve o hay viento, ¿por qué hay que tener más precaución con los ciclistas?',
    answers: [
      'Porque suelen estorbar el tráfico.',
      'Porque pueden salpicar agua.',
      'Porque tienen más probabilidad de caerse.',
    ],
    correct: 'Porque tienen más probabilidad de caerse.',
  },
  {
    question:
      'El viento por la derecha en los adelantamientos a vehículos grandes, ¿por qué es peligroso?',
    answers: [
      'Porque puedo perder el control del vehículo y salirme de la calzada.',
      'Porque no me deja ver la calzada.',
      'Porque frena mi vehículo y no me deja adelantar.',
    ],
    correct:
      'Porque puedo perder el control del vehículo y salirme de la calzada.',
  },
  {
    question: 'Bajo los efectos del calor es posible que...',
    answers: [
      'aumente el tiempo de reacción y disminuya la agresividad.',
      'disminuya el tiempo de reacción y aumente la agresividad.',
      'aumenten el tiempo de reacción y la agresividad.',
    ],
    correct: 'aumenten el tiempo de reacción y la agresividad.',
  },
  {
    question: 'Sopla viento lateral. ¿Qué debe hacer?',
    answers: [
      'Adaptar la velocidad y circular con marchas cortas cuando sea necesario.',
      'Reducir la velocidad y circular con la primera marcha, siempre.',
      'Aumentar la velocidad y circular con marchas largas.',
    ],
    correct:
      'Adaptar la velocidad y circular con marchas cortas cuando sea necesario.',
  },
  {
    question:
      'Si sopla un fuerte viento lateral de la izquierda, los conductores de turismos deberán…',
    answers: [
      'sujetar el volante, con firmeza pero sin rigidez, hacia la izquierda.',
      'circular por el arcén lentamente.',
      'sujetar el volante, con firmeza pero sin rigidez, hacia la derecha.',
    ],
    correct:
      'sujetar el volante, con firmeza pero sin rigidez, hacia la izquierda.',
  },
  {
    question:
      'Debido a que los vehículos voluminosos actúan como pantalla frente al aire, puede resultar especialmente peligroso adelantarlos sobre todo en...',
    answers: [
      'las fases inicial y final.',
      'la fase inicial únicamente.',
      'la fase final únicamente.',
    ],
    correct: 'las fases inicial y final.',
  },
  {
    question:
      'En un día de calor, tanto si se utiliza en el vehículo aire acondicionado como climatizador, ¿qué temperatura interior es la más adecuada?',
    answers: [
      'Cuánto más baja mejor.',
      'En torno a los 25 o 26 grados.',
      'Se debe procurar que la temperatura esté aproximadamente de los 20 a los 23 grados.',
    ],
    correct:
      'Se debe procurar que la temperatura esté aproximadamente de los 20 a los 23 grados.',
  },
  {
    question:
      'Si la temperatura en el interior del vehículo es muy alta, ¿puede influir en el tiempo de reacción del conductor?',
    answers: ['Sí, aumentándolo.', 'Sí, disminuyéndolo.', 'No, no influye.'],
    correct: 'Sí, aumentándolo.',
  },
  {
    question: 'Circular con calor, ¿puede favorecer la aparición del sueño?',
    answers: [
      'Sí, sobre todo después de las comidas.',
      'Sí, sobre todo durante el día.',
      'No.',
    ],
    correct: 'Sí, sobre todo después de las comidas.',
  },
  {
    question: 'El calor al volante...',
    answers: [
      'no representa ningún riesgo para la seguridad vial.',
      'se puede combatir con las ventanillas bajadas, lo que además contribuye a ahorrar combustible.',
      'representa un claro riesgo para la seguridad vial.',
    ],
    correct: 'representa un claro riesgo para la seguridad vial.',
  },
  {
    question:
      'Las altas temperaturas pueden suponer un riesgo para la seguridad durante la conducción, ¿debe circular adoptando medidas preventivas?',
    answers: [
      'Sí, por lo que se debe conducir durante la noche, ya que la temperatura al ser inferior permite al conductor un tiempo de reacción mayor.',
      'Sí, el conductor debe extremar las precauciones y realizar los descansos recomendados, para evitar la fatiga y el sueño.',
      'No, siempre que en el interior del vehículo no se alcancen temperaturas superiores a 20 grados.',
    ],
    correct:
      'Sí, el conductor debe extremar las precauciones y realizar los descansos recomendados, para evitar la fatiga y el sueño.',
  },
  {
    question: 'Los motociclistas, ¿es aconsejable que utilicen gafas de sol?',
    answers: [
      'No, no es necesario.',
      'No, porque todos tienen que llevar, como protección, una pantalla que les tape la cara.',
      'Sí, para proteger los ojos.',
    ],
    correct: 'Sí, para proteger los ojos.',
  },
  {
    question:
      'Los reflejos del sol directo sobre el conductor, ¿pueden tener un efecto negativo en la conducción?',
    answers: [
      'Sí, por lo que se debe encender la luz de largo alcance para facilitar la visibilidad.',
      'No, ninguno.',
      'Sí, afectan a la visión haciendo difícil distinguir los vehículos sobre el pavimento.',
    ],
    correct:
      'Sí, afectan a la visión haciendo difícil distinguir los vehículos sobre el pavimento.',
  },
  {
    question:
      'Entre los principales gastos sanitarios provocados por los accidentes de tráfico están…',
    answers: [
      'los medicamentos.',
      'los antidepresivos.',
      'los de rehabilitación y adaptaciones para las personas accidentadas.',
    ],
    correct:
      'los de rehabilitación y adaptaciones para las personas accidentadas.',
  },
  {
    question:
      'Los accidentes de tráfico, ¿suponen un enorme impacto económico para la población?',
    answers: [
      'No, ya que el coste sanitario es mínimo.',
      'Sí.',
      'No, pero suponen un enorme impacto social.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Los costes de policía y bomberos, de gestión de seguros y servicios, ¿cómo se llaman?',
    answers: [
      'Costes administrativos.',
      'Costes sanitarios.',
      'Costes humanos.',
    ],
    correct: 'Costes administrativos.',
  },
  {
    question:
      'Los daños a los vehículos y su carga, a la vía y el entorno y al medioambiente, ¿cómo se llaman?',
    answers: [
      'Costes administrativos.',
      'Costes humanos.',
      'Daños materiales.',
    ],
    correct: 'Daños materiales.',
  },
  {
    question:
      'La pérdida de vidas, de capacidad productiva y el sufrimiento físico y psicológico, ¿cómo se llaman?',
    answers: ['Costes sanitarios.', 'Costes humanos.', 'Costes materiales.'],
    correct: 'Costes humanos.',
  },
  {
    question: 'Los accidentes de tráfico son una de las principales causas de…',
    answers: [
      'mortalidad y lesiones.',
      'mortalidad, únicamente.',
      'lesiones, solamente.',
    ],
    correct: 'mortalidad y lesiones.',
  },
  {
    question:
      'Para reducir los accidentes de tráfico, ¿deben colaborar todos los agentes sociales?',
    answers: [
      'No, porque solo depende de los conductores.',
      'Sí.',
      'No, es un problema que debe resolver la Administración.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Para reducir la probabilidad de sufrir un accidente de tráfico es recomendable...',
    answers: [
      'conducir durante la noche.',
      'conocer los factores de riesgo.',
      'evitar los factores de riesgo que dependen del conductor.',
    ],
    correct: 'evitar los factores de riesgo que dependen del conductor.',
  },
  {
    question: '¿Qué factores intervienen en un accidente?',
    answers: [
      'El factor humano, exclusivamente.',
      'El factor humano, el factor vía y entorno y el factor vehículo.',
      'El factor vía y el factor humano exclusivamente.',
    ],
    correct: 'El factor humano, el factor vía y entorno y el factor vehículo.',
  },
  {
    question: 'Los accidentes de tráfico, ¿son evitables?',
    answers: [
      'Sí, aunque normalmente se piensa que no se pueden evitar.',
      'No, ya que dependen del azar o la suerte.',
      'No, porque dependen de muchos factores.',
    ],
    correct: 'Sí, aunque normalmente se piensa que no se pueden evitar.',
  },
  {
    question:
      '¿Pueden algunas enfermedades implicar algún riesgo para la conducción?',
    answers: [
      'Sí, porque son un factor de riesgo.',
      'Sí, pero solo las enfermedades crónicas.',
      'No, el estado del conductor no afecta a la seguridad vial.',
    ],
    correct: 'Sí, porque son un factor de riesgo.',
  },
  {
    question:
      '¿Tienen todos los factores de riesgo la misma relevancia como causa de un accidente?',
    answers: [
      'No, la mayoría de los accidentes se deben al factor humano.',
      'Sí, ya que los factores conductor, vía y vehículo intervienen siempre en un accidente.',
      'No, el factor humano apenas influye.',
    ],
    correct: 'No, la mayoría de los accidentes se deben al factor humano.',
  },
  {
    question: 'Para evitar los accidentes, es importante...',
    answers: [
      'llevar incorporado al vehículo un GPS.',
      'reducir la velocidad en las zonas con radares.',
      'conducir con la máxima seguridad en todo momento.',
    ],
    correct: 'conducir con la máxima seguridad en todo momento.',
  },
  {
    question: 'El mal estado del vehículo, ¿es un factor de riesgo?',
    answers: ['Sí.', 'No.', 'No cuando el vehículo alcanza poca velocidad.'],
    correct: 'Sí.',
  },
  {
    question:
      'Se estima que de cada 100 siniestros, los debidos al factor humano son...',
    answers: ['entre 70 y 90.', 'entre 10 y 35.', 'entre 4 y 13.'],
    correct: 'entre 70 y 90.',
  },
  {
    question:
      '¿Influyen en los accidentes la fatiga, el alcohol o el mal tiempo?',
    answers: [
      'No, ya que un accidente es impredecible.',
      'No, porque los factores de riesgo son otros.',
      'Sí, son factores de riesgo que aumentan la probabilidad y gravedad de los accidentes.',
    ],
    correct:
      'Sí, son factores de riesgo que aumentan la probabilidad y gravedad de los accidentes.',
  },
  {
    question:
      '¿En qué tipos de vías se producen la mayor parte de las víctimas mortales?',
    answers: ['En vías interurbanas.', 'En travesías.', 'En vías urbanas.'],
    correct: 'En vías interurbanas.',
  },
  {
    question:
      'La influencia del factor de riesgo vehículo, ¿cómo se puede disminuir?',
    answers: [
      'Revisando y manteniendo el vehículo.',
      'Manteniendo limpio el motor.',
      'Regulando bien la posición del asiento de conductor.',
    ],
    correct: 'Revisando y manteniendo el vehículo.',
  },
  {
    question:
      'La mayoría de los accidentes de tráfico con víctimas mortales se producen...',
    answers: [
      'los días laborables.',
      'durante los fines de semana.',
      'los días de diario a primera hora de la tarde.',
    ],
    correct: 'durante los fines de semana.',
  },
  {
    question:
      '¿Pueden influir otros factores en un accidente, cuando las condiciones climatológicas son adversas?',
    answers: [
      'Sí, el mal estado de la vía, únicamente.',
      'Sí, el conductor, si conduce a una velocidad inadecuada.',
      'No.',
    ],
    correct: 'Sí, el conductor, si conduce a una velocidad inadecuada.',
  },
  {
    question: 'En general, las autovías y autopistas son…',
    answers: [
      'menos seguras que las carreteras convencionales.',
      'igual de seguras que las carreteras convencionales.',
      'más seguras que las carreteras convencionales.',
    ],
    correct: 'más seguras que las carreteras convencionales.',
  },
  {
    question:
      '¿En qué épocas del año se producen más accidentes de circulación?',
    answers: [
      'Fuera de los períodos vacacionales.',
      'Es indiferente.',
      'Durante los períodos de vacaciones.',
    ],
    correct: 'Durante los períodos de vacaciones.',
  },
  {
    question:
      '¿En qué tipo de trazados se produce un mayor número de accidentes de tráfico?',
    answers: [
      'En curvas con buena visibilidad.',
      'En las rectas con buena visibilidad.',
      'En las curvas con mala visibilidad.',
    ],
    correct: 'En las rectas con buena visibilidad.',
  },
  {
    question: 'Durante el día, el mayor número de accidentes tiene lugar...',
    answers: [
      'al mediodía.',
      'a última hora de la tarde, al salir del trabajo.',
      'a primera hora de la mañana, los fines de semana.',
    ],
    correct: 'a última hora de la tarde, al salir del trabajo.',
  },
  {
    question: 'Llamamos grupos vulnerables a…',
    answers: [
      'los pasajeros que resultan heridos en un accidente de tráfico.',
      'determinados grupos de personas que sufren con mayor frecuencia los efectos negativos del tráfico.',
      'los niños y las personas mayores, exclusivamente.',
    ],
    correct:
      'determinados grupos de personas que sufren con mayor frecuencia los efectos negativos del tráfico.',
  },
  {
    question: '¿Cuáles son los principales grupos vulnerables en el tráfico?',
    answers: [
      'Los ciclistas.',
      'Los niños, los jóvenes y las personas mayores.',
      'Solo los niños y las personas mayores.',
    ],
    correct: 'Los niños, los jóvenes y las personas mayores.',
  },
  {
    question:
      '¿Qué grupos de peatones tienen más riesgo de sufrir un accidente?',
    answers: [
      'Los niños y los mayores.',
      'Los mayores fundamentalmente.',
      'Los niños y los jóvenes.',
    ],
    correct: 'Los niños y los mayores.',
  },
  {
    question:
      'Según las estadísticas, ¿qué grupo de conductores suele ser más proclive a sufrir un siniestro?',
    answers: [
      'Los adultos entre 30 y 50 años.',
      'Las personas mayores.',
      'Los conductores profesionales.',
    ],
    correct: 'Las personas mayores.',
  },
  {
    question: 'La mayoría de los atropellos a niños se produce...',
    answers: [
      'al inicio de la jornada escolar.',
      'durante los fines de semana.',
      'al término de la jornada escolar.',
    ],
    correct: 'al término de la jornada escolar.',
  },
  {
    question: '¿Dónde sufren los peatones más accidentes?',
    answers: [
      'En las ciudades.',
      'En las vías interurbanas.',
      'Tanto en poblado como fuera de poblado la cantidad de accidentes es la misma.',
    ],
    correct: 'En las ciudades.',
  },
  {
    question:
      'Según los datos de accidentalidad, la mayoría de los peatones víctimas de atropello...',
    answers: [
      'atravesaban la calzada sin respetar las indicaciones del semáforo.',
      'no habían cometido ninguna infracción.',
      'atravesaban la calzada por un lugar no destinado al paso de peatones.',
    ],
    correct: 'no habían cometido ninguna infracción.',
  },
  {
    question: 'Los peatones suelen cometer muchas infracciones, entre ellas...',
    answers: [
      'evaluar bien los riesgos de la circulación.',
      'no respetar los semáforos.',
      'valorar correctamente la velocidad de los vehículos.',
    ],
    correct: 'no respetar los semáforos.',
  },
  {
    question:
      '¿Cuál es una de las infracciones que cometen los conductores con mayor riesgo para los peatones?',
    answers: [
      'No mantener la distancia de seguridad con el vehículo que circula delante.',
      'No respetar la prioridad en los pasos para peatones.',
      'Circular por una autovía en sentido contrario al establecido.',
    ],
    correct: 'No respetar la prioridad en los pasos para peatones.',
  },
  {
    question:
      'Una de las infracciones de los conductores que implica más riesgo para los peatones es...',
    answers: [
      'el exceso de velocidad en autopistas.',
      'no utilizar los cinturones de seguridad.',
      'incumplir las indicaciones de los semáforos en amarillo o en rojo.',
    ],
    correct:
      'incumplir las indicaciones de los semáforos en amarillo o en rojo.',
  },
  {
    question:
      '¿Qué infracción de los conductores está relacionada con los atropellos a peatones?',
    answers: [
      'Parar en doble fila.',
      'Deslumbrar.',
      'Estacionar en los pasos para peatones.',
    ],
    correct: 'Estacionar en los pasos para peatones.',
  },
  {
    question: 'El campo visual de los niños es...',
    answers: [
      'menor que el de los adultos.',
      'mayor que el de los adultos.',
      'igual que el de los adultos.',
    ],
    correct: 'menor que el de los adultos.',
  },
  {
    question: 'Los niños suelen tener problemas en el tráfico porque...',
    answers: [
      'no conocen todos los comportamientos adecuados para circular.',
      'su campo visual es mayor.',
      'su visión periférica es mayor.',
    ],
    correct: 'no conocen todos los comportamientos adecuados para circular.',
  },
  {
    question:
      'Una de las posibles causas de los accidentes de las personas mayores como peatones es...',
    answers: [
      'el desconocimiento de las normas de tráfico.',
      'que pueden tener dificultad para distinguir los colores de los semáforos.',
      'que no miran para cruzar la vía.',
    ],
    correct:
      'que pueden tener dificultad para distinguir los colores de los semáforos.',
  },
  {
    question: 'A un peatón de edad avanzada, ¿le afecta el exceso de ruido?',
    answers: [
      'Sí, y le puede impedir oír y darse cuenta si se acerca un vehículo.',
      'No.',
      'Sí, el exceso de ruido afecta a cualquier tipo de peatón por igual.',
    ],
    correct:
      'Sí, y le puede impedir oír y darse cuenta si se acerca un vehículo.',
  },
  {
    question:
      'Entre los principales problemas que encuentran las personas mayores como peatones en las vías públicas se encuentra...',
    answers: [
      'el reconocer mejor los sonidos e identificar su procedencia.',
      'la dificultad de apreciar la velocidad de los vehículos.',
      'la mayor capacidad de orientación.',
    ],
    correct: 'la dificultad de apreciar la velocidad de los vehículos.',
  },
  {
    question:
      '¿En qué situación suelen tener menos accidentes las personas mayores como peatones?',
    answers: [
      'Cuando van acompañadas de otra persona mayor.',
      'Cuando van acompañando a niños.',
      'Cuando van solas.',
    ],
    correct: 'Cuando van acompañando a niños.',
  },
  {
    question: '¿Cómo puede evitar el atropello de peatones?',
    answers: [
      'Haciéndoles señales para que crucen la calzada.',
      'Prestando atención a los peatones que vayan hablando por el móvil.',
      'Modificando las partes exteriores de su vehículo, especialmente las delanteras.',
    ],
    correct:
      'Prestando atención a los peatones que vayan hablando por el móvil.',
  },
  {
    question: 'La parte delantera del vehículo, ¿por qué no debe modificarse?',
    answers: [
      'Porque el vehículo pierde velocidad punta.',
      'Únicamente porque lo prohíben las normas.',
      'Porque suele estar diseñada para evitar lesiones a los peatones.',
    ],
    correct: 'Porque suele estar diseñada para evitar lesiones a los peatones.',
  },
  {
    question: 'Muchos atropellos a peatones se producen...',
    answers: [
      'durante la noche.',
      'cuando los vehículos circulan marcha atrás.',
      'en autopistas.',
    ],
    correct: 'cuando los vehículos circulan marcha atrás.',
  },
  {
    question:
      'Los accidentes de tráfico son la principal causa de mortalidad para...',
    answers: [
      'las personas mayores de 65 años.',
      'los niños.',
      'los jóvenes de entre 15 y 29 años de edad.',
    ],
    correct: 'los jóvenes de entre 15 y 29 años de edad.',
  },
  {
    question:
      '¿A qué se debe que el número de muertos en accidente de tráfico aumente rápidamente a partir de los 15 años?',
    answers: [
      'A que esa edad coincide con la aparición de los primeros conductores de ciclomotores.',
      'A que aumenta la cifra de atropellos en las ciudades de individuos de esa edad.',
      'A que aumenta la cifra de accidentes dónde han intervenido ciclistas de esa edad.',
    ],
    correct:
      'A que esa edad coincide con la aparición de los primeros conductores de ciclomotores.',
  },
  {
    question:
      '¿Cuál es una de las causas que originan los accidentes de tráfico en los conductores jóvenes?',
    answers: [
      'No respetar las normas de circulación.',
      'La falta de reflejos.',
      'La mayor percepción del riesgo.',
    ],
    correct: 'No respetar las normas de circulación.',
  },
  {
    question: 'Los jóvenes suelen realizar más maniobras de riesgo…',
    answers: [
      'cuando van solos.',
      'tanto cuando van solos como cuando van acompañados.',
      'cuando van acompañados.',
    ],
    correct: 'cuando van acompañados.',
  },
  {
    question:
      'Si se encuentra con un ciclista circulando en sentido contrario, ¿qué debe hacer?',
    answers: [
      'No iniciar ni continuar un adelantamiento.',
      'Hacer destellos con la luz de largo alcance para avisarle de su presencia.',
      'Avisar al ciclista con el claxon para que se aparte al arcén.',
    ],
    correct: 'No iniciar ni continuar un adelantamiento.',
  },
  {
    question:
      '¿En qué tipos de vías se producen más accidentes mortales de ciclistas?',
    answers: [
      'En las travesías.',
      'En las vías interurbanas.',
      'En las vías urbanas.',
    ],
    correct: 'En las vías interurbanas.',
  },
  {
    question:
      '¿Cuándo se producen más accidentes de ciclistas, en verano o en invierno?',
    answers: [
      'En invierno, porque las condiciones meteorológicas adversas los provocan.',
      'En verano, puesto que con la llegada del buen tiempo hay más ciclistas en las carreteras.',
      'Es indiferente.',
    ],
    correct:
      'En verano, puesto que con la llegada del buen tiempo hay más ciclistas en las carreteras.',
  },
  {
    question:
      'Las distracciones, ¿influyen en los accidentes sufridos por los ciclistas?',
    answers: [
      'Sí, las distracciones por parte de los propios ciclistas tienen relación de forma directa.',
      'No, en los accidentes de los ciclistas afectan otro tipo de causas.',
      'No, los ciclistas son un grupo de conductores con un índice muy bajo de distracciones.',
    ],
    correct:
      'Sí, las distracciones por parte de los propios ciclistas tienen relación de forma directa.',
  },
  {
    question: '¿Cuál es el accidente más frecuente que sufren los ciclistas?',
    answers: [
      'Las salidas de vía.',
      'Los atropellos.',
      'La colisión frontal con otro vehículo.',
    ],
    correct: 'La colisión frontal con otro vehículo.',
  },
  {
    question: 'Los accidentes de motocicletas…',
    answers: [
      'resultan fácilmente mortales para sus ocupantes.',
      'son siempre de menor importancia que los de otros vehículos.',
      'producen lesiones de menor gravedad para sus ocupantes que los de otros vehículos.',
    ],
    correct: 'resultan fácilmente mortales para sus ocupantes.',
  },
  {
    question:
      'En los accidentes de motocicleta, ¿cuáles son las infracciones más frecuentes cometidas por sus conductores?',
    answers: [
      'No respetar la prioridad de paso.',
      'Estacionar en las aceras y ocupar el sentido contrario.',
      'Invadir el sentido contrario y conducir de forma distraída.',
    ],
    correct: 'Invadir el sentido contrario y conducir de forma distraída.',
  },
  {
    question: 'Para evitar los accidentes con motocicletas es recomendable...',
    answers: [
      'no circular en paralelo con los vehículos de dos ruedas.',
      'circular en paralelo con estos vehículos.',
      'reducir la distancia de seguridad para ver mejor a la motocicleta.',
    ],
    correct: 'no circular en paralelo con los vehículos de dos ruedas.',
  },
  {
    question:
      'En los accidentes de motocicletas, ¿qué tipo es el más frecuente?',
    answers: ['Salida de la vía.', 'Colisión con otro vehículo.', 'Atropello.'],
    correct: 'Colisión con otro vehículo.',
  },
  {
    question:
      'La mayoría de las muertes en accidentes de tráfico se producen...',
    answers: [
      'durante la primera hora tras el accidente, llamada "hora de oro".',
      'a las cuatro horas del accidente.',
      'al día siguiente del accidente.',
    ],
    correct:
      'durante la primera hora tras el accidente, llamada "hora de oro".',
  },
  {
    question:
      '¿Qué porcentaje de mortalidad tiene lugar durante la llamada hora de oro?',
    answers: [
      'Cerca del 75 %',
      'Entre el 15 y el 20 %',
      'Aproximadamente el 10 %',
    ],
    correct: 'Cerca del 75 %',
  },
  {
    question:
      'Tras un accidente, hay tres momentos en los que la vida de las personas implicadas se encuentra en grave peligro. Estos son:',
    answers: [
      'Muerte inmediata, momento crítico y hora de oro.',
      'Muerte inmediata, hora de oro y muerte tardía.',
      'Momento de alarma, momento crítico y muerte tardía.',
    ],
    correct: 'Muerte inmediata, hora de oro y muerte tardía.',
  },
  {
    question:
      'En un accidente de circulación, ¿es obligatorio detenerse para prestar ayuda?',
    answers: [
      'Sí, siempre.',
      'Solo si se está implicado en el siniestro.',
      'Sí, cuando la ayuda no está organizada.',
    ],
    correct: 'Sí, cuando la ayuda no está organizada.',
  },
  {
    question:
      'Para auxiliar a un herido en accidente de circulación. ¿Qué debe hacer?',
    answers: [
      'Pedir ayuda y controlar su respiración.',
      'Pedir ayuda cuando sea necesaria y sentar al herido.',
      'Pedir ayuda y dar al herido una bebida para animarle.',
    ],
    correct: 'Pedir ayuda y controlar su respiración.',
  },
  {
    question:
      'Lo primero que debe tener en cuenta en un accidente de tráfico es, por este orden…',
    answers: [
      'la protección del lugar del accidente y la protección de las víctimas.',
      'la autoprotección, la protección del lugar del accidente y la protección de las víctimas.',
      'la protección de las víctimas y la autoprotección.',
    ],
    correct:
      'la autoprotección, la protección del lugar del accidente y la protección de las víctimas.',
  },
  {
    question:
      'Nada más producirse un accidente, antes de atender a las víctimas hay que...',
    answers: [
      'proteger y señalizar la zona del accidente.',
      'organizar a los servicios de urgencia.',
      'avisar a la policía.',
    ],
    correct: 'proteger y señalizar la zona del accidente.',
  },
  {
    question: '¿Cómo debe inmovilizar los vehículos accidentados?',
    answers: [
      'Con el freno de mano y cortando el contacto.',
      'Con unos calzos o cualquier elemento que sirva como tal.',
      'Quitando el contacto de la batería.',
    ],
    correct: 'Con el freno de mano y cortando el contacto.',
  },
  {
    question:
      'En un accidente con heridos graves, si la ayuda no está organizada y no han llegado al lugar los agentes de la autoridad, ¿está obligado a ayudar?',
    answers: [
      'No, aunque esté implicado en el accidente.',
      'Sí, pero solo si está implicado en el accidente.',
      'Sí, esté o no esté implicado en el accidente.',
    ],
    correct: 'Sí, esté o no esté implicado en el accidente.',
  },
  {
    question: 'El chaleco reflectante de alta visibilidad puede ser...',
    answers: [
      'amarillo, naranja o rojo.',
      'amarillo o naranja, únicamente.',
      'amarillo o verde.',
    ],
    correct: 'amarillo, naranja o rojo.',
  },
  {
    question:
      '¿Qué le ocurre a un chaleco reflectante al mantenerlo expuesto a la luz del sol (como en el respaldo del asiento)?',
    answers: [
      'Perderá sus propiedades con el tiempo.',
      'Nada, el sol no daña el material pues es muy resistente.',
      'Disminuye en tamaño pero no pierde sus propiedades.',
    ],
    correct: 'Perderá sus propiedades con el tiempo.',
  },
  {
    question:
      'Su vehículo se incendia y no tiene extintor. ¿Cómo debe apagarlo?',
    answers: ['Con tierra.', 'Con aire.', 'Con agua.'],
    correct: 'Con tierra.',
  },
  {
    question:
      'En un accidente de circulación, ¿es obligatorio avisar a la Autoridad si no hay heridos y la seguridad de la circulación está restablecida?',
    answers: [
      'Sí, siempre.',
      'No, nunca.',
      'Sí, si alguna de las personas implicadas en el accidente lo solicita.',
    ],
    correct:
      'Sí, si alguna de las personas implicadas en el accidente lo solicita.',
  },
  {
    question:
      'Cuando avise de un accidente, ¿qué información es útil que aporte a los servicios de emergencia?',
    answers: [
      'El lugar del accidente, el número de víctimas y su identificación.',
      'Cómo ha ocurrido el accidente y los vehículos accidentados.',
      'El lugar del accidente y el número de matrícula de los vehículos.',
    ],
    correct:
      'El lugar del accidente, el número de víctimas y su identificación.',
  },
  {
    question:
      'Cuando ha habido heridos en un accidente de circulación es fundamental...',
    answers: [
      'moverlos lo menos posible y llamar al 112.',
      'sacarlos del vehículo para intentar reanimarlos.',
      'darles algo de beber para reanimarlos.',
    ],
    correct: 'moverlos lo menos posible y llamar al 112.',
  },
  {
    question: '¿Debe moverse a los heridos?',
    answers: [
      'No, en ningún caso.',
      'No, salvo que sea imprescincible por su seguridad.',
      'Sí, cuando sus lesiones no son graves.',
    ],
    correct: 'No, salvo que sea imprescincible por su seguridad.',
  },
  {
    question:
      '¿Quién debe realizar las actuaciones de soporte vital básico a las víctimas de un accidente?',
    answers: [
      'El personal especializado, siempre.',
      'El personal especializado, salvo que la persona que le auxilie esté totalmente seguro de conocerlas y poder realizarlas.',
      'Estas actuaciones siempre deben realizarse en un hospital.',
    ],
    correct:
      'El personal especializado, salvo que la persona que le auxilie esté totalmente seguro de conocerlas y poder realizarlas.',
  },
  {
    question:
      '¿Debe identificarse a los servicios de emergencia cuando avise de un accidente?',
    answers: [
      'Sí, con su número de matrícula.',
      'No es necesario.',
      'Sí, con sus datos personales.',
    ],
    correct: 'Sí, con sus datos personales.',
  },
  {
    question: 'Acompañar a las víctimas de un accidente, ¿es importante?',
    answers: [
      'No, si su estado no reviste gravedad.',
      'Sí, para transmitirles seguridad.',
      'No, es preferible dejarlas solas.',
    ],
    correct: 'Sí, para transmitirles seguridad.',
  },
  {
    question: 'En un accidente de tráfico en el que esté implicado...',
    answers: [
      'si algún herido está inconsciente deberá hacerle un masaje cardíaco, aun dentro del vehículo.',
      'no intentará sacar al herido hasta que no llegue la ayuda especializada.',
      'deberá sacar a los heridos rápidamente de los vehículos.',
    ],
    correct:
      'no intentará sacar al herido hasta que no llegue la ayuda especializada.',
  },
  {
    question:
      'Al auxiliar a una víctima de un accidente de tráfico, ¿debe darle alimentos o bebidas?',
    answers: ['Sí, si lo piden.', 'Alimentos no, pero bebidas sí.', 'No.'],
    correct: 'No.',
  },
  {
    question:
      'Como norma general, se recomienda no quitar el casco a un motorista accidentado porque...',
    answers: [
      'la cabeza roza contra el suelo.',
      'podrían agravarse posibles lesiones en la región cervical.',
      'la cabeza se queda fría.',
    ],
    correct: 'podrían agravarse posibles lesiones en la región cervical.',
  },
  {
    question:
      'Para hacer la respiración boca-boca a un herido, ¿qué debe hacer primero?',
    answers: [
      'Taparle la nariz.',
      'Limpiar y abrir las vías respiratorias.',
      'Colocar al herido en posición de defensa.',
    ],
    correct: 'Limpiar y abrir las vías respiratorias.',
  },
  {
    question:
      'Cuando se ha comprobado que un herido respira normalmente, tras realizar la evaluación secundaria, ¿qué debe hacer hasta que llegue la ayuda sanitaria?',
    answers: [
      'Vigilar su respiración.',
      'Limpiar las heridas con agua.',
      'Comprobar si tiene hemorragia.',
    ],
    correct: 'Vigilar su respiración.',
  },
  {
    question:
      'Como norma general, si un herido en accidente ha perdido el conocimiento, ¿cómo se le debe colocar?',
    answers: [
      'Acostado de lado en posición de defensa.',
      'Acostado boca abajo.',
      'Acostado boca arriba.',
    ],
    correct: 'Acostado de lado en posición de defensa.',
  },
  {
    question: 'La reanimación de un accidentado, ¿cuánto tiempo debe durar?',
    answers: [
      '5 minutos como máximo.',
      'Si después de dos minutos no se ha recuperado es mejor dejarlo.',
      'Hasta que se recupere o llegue la ayuda médica.',
    ],
    correct: 'Hasta que se recupere o llegue la ayuda médica.',
  },
  {
    question: 'Un herido tiene una hemorragia en el brazo. ¿Qué debe hacer?',
    answers: [
      'Sujetar fuerte el brazo para que no se mueva.',
      'Darle pomada en la herida.',
      'Taponar la herida y levantar el brazo.',
    ],
    correct: 'Taponar la herida y levantar el brazo.',
  },
  {
    question: 'Un herido tiene quemaduras. ¿Qué debe hacer?',
    answers: [
      'Limpiar la herida.',
      'Tapar la quemadura con gasas húmedas.',
      'Quitarle la ropa pegada a la quemadura.',
    ],
    correct: 'Tapar la quemadura con gasas húmedas.',
  },
  {
    question:
      'Para tratar de controlar o reducir una hemorragia por el oído, ¿cree usted que es conveniente taponarlo?',
    answers: [
      'No, lo adecuado es cubrir, sin presionar, el oído con una gasa estéril.',
      'No, lo adecuado es inclinar la cabeza hacia delante para facilitar la salida de la sangre.',
      'Sí, lo taponaremos porque es el método más eficaz.',
    ],
    correct:
      'No, lo adecuado es cubrir, sin presionar, el oído con una gasa estéril.',
  },
  {
    question:
      'Ante un motorista accidentado con una hemorragia por la nariz, la actuación correcta es...',
    answers: [
      'retirarle el casco para realizarle un taponamiento.',
      'no realizarle nunca taponamientos.',
      'colocarlo boca arriba para que deje de sangrar.',
    ],
    correct: 'no realizarle nunca taponamientos.',
  },
  {
    question:
      'De las que a continuación se citan, ¿qué actuación es correcta ante un herido que presenta una hemorragia por la nariz?',
    answers: [
      'Inclinar la cabeza hacia atrás y taponar la hemorragia.',
      'No taponar la hemorragia, en ningún caso.',
      'Inclinar la cabeza hacia delante y taponar la hemorragia.',
    ],
    correct: 'No taponar la hemorragia, en ningún caso.',
  },
  {
    question:
      'En circunstancias especialmente graves, ¿se puede trasladar a enfermos en un turismo?',
    answers: [
      'Sí, siempre que no haya otro medio.',
      'No, en ningún caso.',
      'Sí, pero nunca una distancia mayor de 50 km.',
    ],
    correct: 'Sí, siempre que no haya otro medio.',
  },
  {
    question:
      'Un botiquín de primeros auxilios, ¿se encuentra entre la dotación obligatoria de los vehículos de nueve o más plazas?',
    answers: [
      'No, un botiquín es solamente recomendable.',
      'Sí, es obligatorio.',
      'Es obligatorio dependiendo del número de pasajeros transportados.',
    ],
    correct: 'No, un botiquín es solamente recomendable.',
  },
  {
    question: 'En un viaje es aconsejable planificar...',
    answers: [
      'los descansos que se van a realizar.',
      'el itinerario más corto posible.',
      'la hora de salida y la de llegada.',
    ],
    correct: 'los descansos que se van a realizar.',
  },
  {
    question:
      'Entre la dotación obligatoria que debe llevar un turismo, ¿se encuentra un extintor?',
    answers: [
      'No.',
      'Sí.',
      'Sí, pero solamente cuando circule por vías fuera de poblado.',
    ],
    correct: 'No.',
  },
  {
    question:
      'Las cadenas para la nieve, ¿son un accesorio obligatorio para los turismos?',
    answers: ['No.', 'Sí.', 'Solo en invierno.'],
    correct: 'No.',
  },
  {
    question: 'Un turismo debe llevar las herramientas indispensables para…',
    answers: [
      'el cambio de manguitos, correas y bujías.',
      'efectuar pequeñas reparaciones.',
      'el cambio de la rueda de repuesto.',
    ],
    correct: 'el cambio de la rueda de repuesto.',
  },
  {
    question:
      'Un camión de 3.500 kilogramos de MMA, ¿puede llevar como repuesto una rueda de uso temporal?',
    answers: [
      'Sí.',
      'No, porque únicamente los turismos pueden llevar como repuesto este tipo de ruedas.',
      'No, es obligatorio que lleve una rueda completa.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'El conductor de un tractor agrícola, ¿está obligado a llevar un chaleco reflectante en su vehículo?',
    answers: [
      'No.',
      'Solo cuando circule por vía urbana.',
      'Solo cuando circule por vía interurbana.',
    ],
    correct: 'No.',
  },
  {
    question:
      'En un vehículo mixto adaptable, ¿es obligatorio llevar un chaleco reflectante?',
    answers: [
      'No, pero es recomendable.',
      'Sí, en el maletero del vehículo.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Un conjunto de vehículos no especiales en circulación debe llevar, entre sus accesorios…',
    answers: [
      'una rueda de repuesto del remolque o semirremolque.',
      'un equipo homologado de extensión de incendios, adecuado y en condiciones de uso.',
      'dos chalecos reflectantes de alta visibilidad.',
    ],
    correct:
      'un equipo homologado de extensión de incendios, adecuado y en condiciones de uso.',
  },
  {
    question:
      '¿Están obligados todos los automóviles a llevar una rueda de repuesto y las herramientas indispensables para su cambio?',
    answers: ['Sí.', 'No.', 'Solo cuando su MMA es superior a 3.500 kg.'],
    correct: 'No.',
  },
  {
    question: 'En la conducción, los espejos retrovisores permiten observar...',
    answers: [
      'en todo momento lo que está alrededor del vehículo.',
      'únicamente lo que está detrás del vehículo.',
      'únicamente lo que se aproxima al vehículo por los laterales.',
    ],
    correct: 'en todo momento lo que está alrededor del vehículo.',
  },
  {
    question:
      'La señal de la imagen, colocada en un vehículo de transporte de residuos, tiene como objetivo advertir a los usuarios vulnerables del peligro por la existencia de los ángulos muertos del mismo?',
    answers: [
      'No, la señal indica la existencia de un vehículo de residuos urbanos en situación de avería.',
      'Sí, y también indicar la importancia de situarse fuera de esas zonas no visibles para el conductor del vehículo.',
      'No, la señal indica la existencia de un vehículo de residuos urbanos en situación de trabajo.',
    ],
    correct:
      'Sí, y también indicar la importancia de situarse fuera de esas zonas no visibles para el conductor del vehículo.',
  },
  {
    question:
      'Para conducir de forma preventiva y, por razones de seguridad, para hacer más visible el vehículo es conveniente…',
    answers: [
      'retrasar el encendido del alumbrado al anochecer y anticipar su apagado al amanecer.',
      'anticipar el encendido del alumbrado al atardecer y retrasar su apagado al amanecer.',
      'no utilizar el alumbrado al atardecer para no molestar a otros usuarios.',
    ],
    correct:
      'anticipar el encendido del alumbrado al atardecer y retrasar su apagado al amanecer.',
  },
  {
    question: 'Si el vehículo de detrás se acerca demasiado, es conveniente...',
    answers: [
      'disminuir la separación con el vehículo de delante.',
      'aumentar la separación con el vehículo de delante.',
      'mantener la misma separación con el vehículo de delante.',
    ],
    correct: 'aumentar la separación con el vehículo de delante.',
  },
  {
    question:
      'La densidad del tráfico en zona urbana produce frecuentes zonas de incertidumbre, por lo que el conductor de una motocicleta deberá…',
    answers: [
      'aumentar la velocidad para evitar cuanto antes esta situación.',
      'advertir su presencia a los demás usuarios accionando la luz de largo alcance.',
      'prever y anticiparse a los posibles comportamientos de los demás usuarios.',
    ],
    correct:
      'prever y anticiparse a los posibles comportamientos de los demás usuarios.',
  },
  {
    question:
      'En las detenciones, una referencia útil para guardar la distancia adecuada con el vehículo de delante es ver...',
    answers: [
      'el punto en el que las ruedas traseras del vehículo de delante tocan el suelo.',
      'la matrícula del vehículo de delante.',
      'el paragolpes trasero del vehículo de delante.',
    ],
    correct:
      'el punto en el que las ruedas traseras del vehículo de delante tocan el suelo.',
  },
  {
    question:
      'En una detención (por ejemplo, ante un semáforo o en una retención), ¿qué distancia mínima se debe guardar con el vehículo de delante?',
    answers: ['2 o 3 metros.', '5 o 6 metros.', '1,5 metros.'],
    correct: '2 o 3 metros.',
  },
  {
    question:
      'Para evitar los alcances, es recomendable que el conductor del último vehículo de una fila...',
    answers: [
      'vigile a los vehículos que se acerquen por detrás.',
      'no mantenga el pedal del freno pisado.',
      'disminuya la distancia respecto al de delante.',
    ],
    correct: 'vigile a los vehículos que se acerquen por detrás.',
  },
  {
    question:
      'El estilo de conducción de una motocicleta, ¿puede influir en el consumo de combustible?',
    answers: [
      'No, solo depende de la cilindrada de la motocicleta.',
      'No, si se adopta una postura aerodinámica.',
      'Sí.',
    ],
    correct: 'Sí.',
  },
  {
    question:
      'Las técnicas de conducción eficiente pueden ahorrar entre un 10 y un 25 % del combustible...',
    answers: [
      'pero no pueden reducir las emisiones contaminantes.',
      'y reducir las emisiones contaminantes en la misma cantidad.',
      'y reducir de forma importante las emisiones contaminantes.',
    ],
    correct: 'y reducir de forma importante las emisiones contaminantes.',
  },
  {
    question: 'Al conducir de forma eficiente...',
    answers: [
      'el gasto de combustible aumenta.',
      'el ruido que produce el vehículo aumenta.',
      'los costes de uso y mantenimiento del vehículo se reducen.',
    ],
    correct: 'los costes de uso y mantenimiento del vehículo se reducen.',
  },
  {
    question: 'Cuando se estropea el tubo de escape, ¿qué sucede?',
    answers: [
      'El vehículo consume más combustible.',
      'Disminuye el ruido.',
      'El vehículo hace más ruido.',
    ],
    correct: 'El vehículo hace más ruido.',
  },
  {
    question: 'Para ahorrar carburante, ¿qué debe hacer?',
    answers: [
      'Adaptar las marchas a las necesidades del vehículo.',
      'Circular con marchas cortas.',
      'Circular a 90 kilómetros por hora, siempre.',
    ],
    correct: 'Adaptar las marchas a las necesidades del vehículo.',
  },
  {
    question: 'Al poner en marcha un motor de gasolina, es conveniente...',
    answers: [
      'acelerar en vacío para que se caliente cuanto antes.',
      'esperar unos minutos antes de iniciar la marcha para que el motor se caliente.',
      'iniciar la marcha inmediatamente después de arrancar el motor.',
    ],
    correct: 'iniciar la marcha inmediatamente después de arrancar el motor.',
  },
  {
    question: 'Para ahorrar combustible es recomendable...',
    answers: [
      'evitar cambios de marcha innecesarios.',
      'circular utilizando la marcha más corta posible.',
      'circular con el motor revolucionado.',
    ],
    correct: 'evitar cambios de marcha innecesarios.',
  },
  {
    question: '¿A qué puede afectar si cambia el carenado de una motocicleta?',
    answers: [
      'A la visibilidad del vehículo.',
      'Exclusivamente a la estética.',
      'A la aerodinámica y al consumo.',
    ],
    correct: 'A la aerodinámica y al consumo.',
  },
  {
    question:
      'Si nota que su vehículo consume más carburante del habitual, ¿qué sistema del vehículo se debe revisar?',
    answers: [
      'El de escape.',
      'La alimentación y el encendido.',
      'Únicamente el sistema de refrigeración.',
    ],
    correct: 'La alimentación y el encendido.',
  },
  {
    question: 'El sistema Start-Stop, ¿reduce el consumo de carburante?',
    answers: [
      'Sí, y también la emisión de gases de efecto invernadero.',
      'Sí, pero no la emisión de gases de efecto invernadero.',
      'No, pero reduce la emisión de gases de efecto invernadero.',
    ],
    correct: 'Sí, y también la emisión de gases de efecto invernadero.',
  },
  {
    question:
      'Conduciendo por una autovía con las ventanillas cerradas y el aire acondicionado encendido, el consumo de carburante...',
    answers: ['ni disminuye ni aumenta.', 'disminuye.', 'aumenta.'],
    correct: 'aumenta.',
  },
  {
    question:
      'El tipo de vía por la que se circula, ¿influye en el consumo de carburante?',
    answers: [
      'Sí, en las vías interurbanas se consume siempre más carburante.',
      'Sí, en las vías urbanas se consume más carburante, con carácter general.',
      'No.',
    ],
    correct:
      'Sí, en las vías urbanas se consume más carburante, con carácter general.',
  },
  {
    question: 'La señal de Zona de Bajas Emisiones...',
    answers: [
      'prohíbe la entrada a vehículos a motor, excepto aquellos vehículos que dispongan del distintivo ambiental indicado en la parte inferior de la señal.',
      'permite la entrada a vehículos a motor, excepto aquellos vehículos que dispongan del distintivo ambiental indicado en la parte inferior de la señal.',
      'permite la entrada únicamente a vehículos de uso concatenado que dispongan del distintivo ambiental indicado en la parte inferior de la señal.',
    ],
    correct:
      'prohíbe la entrada a vehículos a motor, excepto aquellos vehículos que dispongan del distintivo ambiental indicado en la parte inferior de la señal.',
  },
];
