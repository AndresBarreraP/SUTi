const places = [
  {
  id: '1',
  name: 'Parque Caldas',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/parque_caldas.jpg?alt=media&token=15871c1e-4759-4977-a52b-7b8e47a71e5f'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/parque_caldas.png?alt=media&token=e49878e9-8fc4-4bc8-a78f-f2ba6c62e2f3'},
  details:`Cuando se fundó Popayán en 1537 este lugar hizo las veces de Plaza Mayor (o Plaza de Armas) y luego la gente compraba sus víveres porque también funcionó como plaza de mercado. 
  \nEn este lugar de caminos diagonales y circulares se extiende entre esquina y esquina un aura de historia que te ofrecerá, bajo la luz que atraviesa las copas de sus tupidos árboles, un espacio para caminar o permanecer.\n`,
  details1:`Aquí se situó el cepo hasta 1808, un artefacto empleado por las autoridades civiles para someter a los presos a escarnio público durante el periodo colonial.
  \nEl cepo fue reemplazado por una fuente de piedra que finalmente, en el año de 1910, fue sustituida por la estatua que reposa en el centro: el sabio payanés Francisco José de Caldas y Tenorio.`
  },
  {
  id: '2',
  name: 'Torre del reloj',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/torre_del_reloj.jpg?alt=media&token=9262394b-48bc-4aee-ab28-c768cd833390'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/torre_del_reloj.png?alt=media&token=3cced7cf-b7fd-48e2-bc33-81e63616d1f4'},
  details: `Fue por el trabajo de un grupo de indígenas Nasa, quienes hicieron las veces de maestros de obra, que se edificó este lugar entre 1673 y 1682 por mandato del obispo Cristobal Bernaldo de Quirós Mazo. El obispo contrató arquitectos mestizos de Santafé, mismos orientarían el trabajo de los indígenas en esta conocida esquina de la calle quinta. 
  \nA esta construcción también se le conoce popularmente como la nariz de Popayán y no siempre funcionó como lo que hoy es pues en su planta inferior estuvo ubicado el primer baptisterio de la catedral, además, en algún momento la edificación fue usada como cárcel para religiosos y sacerdotes mientras se les emitía sentencia definitiva.`,
  details1:`Su uso como cárcel fue dictaminado por disposición de Mateo de Villafañe y Panduro, obispo de esta diócesis entre 1696 y 1714.
  \nEn 1983 sufrió serias afectaciones en su estructura a causa del terremoto del Jueves Santo 31 de marzo. Fue restaurada posteriormente mediante técnicas de concreto pretensando y reforzamiento en acero, lo que permitió que sus muros recuperasen su posición original.
  \nEn 1737 fue instalado el reloj de origen inglés con numeración romana que cuenta con un solo puntero para marcar las horas. Se prescindió del que corresponde a los minutos.`,
  },
  {
  id: '3',
  name: 'Teatro Guillermo Valencia',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/teatro_guillermo.jpg?alt=media&token=29d3b3fd-9b5b-45de-bd2d-e4cb22d71ea0'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/teatro_guillermo_valencia.png?alt=media&token=52519ecf-1bd6-48db-a459-2b3181787788'},
  details:`Indagando en la historia encontrarás que con la interpretación de la compañía italiana Bracale de la ópera Il Trovatore de Verdi el teatro fue inaugurado para las fechas en que se celebraría el centenario de fundación de la Universidad del Cauca.
  \nAl examinar en detalle su modelo arquitectónico y consultar, tal vez en internet, verás que se basó en el del Teatro Châtelet de París. 
  \nUna vez dentro, encontrarás varios de sus elementos decorativos, como el revestimiento de sus palcos que fueron encargados a una firma belga y confirmarás que se trata de un recinto magistral que desde 1998 es iluminado por la gran lámpara de cristal de Bohemia. `,
  details1:`Fue construido entre 1915 y 1927 sobre planos diseñados por la firma de ingenieros-arquitectos Borrero y Ospina de Cali.
  \nEn 1983, sufrió serías afectaciones a raíz del terremoto 31 de marzo, siendo posteriormente restaurado y reinaugurado en 1998.`,
  },
  {
  id: '4',
  name: 'Puente del humilladero',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/puente_del_humilladero.jpg?alt=media&token=46f8eaf0-03dc-4d44-825d-3f5153679af1'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/puente_del_humilladero.png?alt=media&token=0144e73d-7f7a-4812-a803-5950ff6c09fe'},
  details:`Siempre he sentido gran fascinación por este puente que va desde el barrio Bolívar hasta el centro de la ciudad. Su nombre tal vez se deba a que hace muchos años los viajeros debían inclinar su cabeza para subir una pendiente pronunciada que existía antes de su construcción, cuando la gente ingresaba a la ciudad por el Camino Real del Portazgo del Norte.
  \nEl puente tiene doce arcos de medio punto de diferentes dimensiones con vistas a la Arcada o a las calles empedradas y el amplio verde circundante. `,
  details1:`La obra, de calidad poética dirían algunos sabios habitantes, fue creada durante el periodo Republicano: entre 1868 y 1873 bajo la dirección un religioso italiano conocido como fray Serafín Barbetti.
  \nSus arcos fueron elaborados gracias a un trabajo de mampostería, es decir, a partir de la colocación manual o rudimentaria de sus elementos. `,
  },
  {
  id: '5',
  name: 'Morro de Tulcán',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/morro_de_tulcan.jpg?alt=media&token=96b688f4-f2b7-48d0-b34b-7efa171499da'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/morro_de_tulcan.png?alt=media&token=51d4586f-dfd0-421a-b2c5-a97245156b8f'},
  details:`Su nombre puede provenir de las voces quechuas “tulo”, pequeña estaca; “tulam”, cavar; “tulo”, talego, y “can”, tu, o haber sido formado por los vocablos del antiguo guambiano “Tul”: huerto de animales y “Kan”: uno.
  \nEntre mediados de 1957 y el segundo semestre de 1958 las investigaciones del historiador Julio César Cubillos confirmaron que El Morro es en realidad una pirámide prehispánica; la primera de su tipo hallada en territorio colombiano.
  \nEsta pirámide parece ser perteneciente a una etapa que los adultos llaman cultura formativa tardía, previa a la fundación hispánica de Popayán en 1537 por parte del español Sebastián de Belalcázar.`,
  details1:`El arqueólogo Cubillos señala que en 1937, al construirse la carretera que actualmente circunvala El Morro, surgieron los vestigios de una antigua construcción indígena.
  \nAntiguamente se hacían trabajos de guaquería en este lugar. En 1952 se concluyó que se trataba una formación artificial.
  \nEn 1957 el Instituto Etnológico de la Universidad del Cauca efectúo trabajos de exploración y reconocimiento, reafirmando la autenticidad de los hallazgos arqueológicos previos.
  \nSebastián de Belalcázar tuvo su estatua ecuestre ubicada en la cima desde el año de 1940 hasta el 2020, cuando fue removida por parte de un grupo de indígenas Misak.`,
  }, 
  { 
  id: '6',
  name: 'Iglesia de San Agustín',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/iglesia_san_agustin.jpg?alt=media&token=e9c5feb0-eeea-4bdd-a555-69bd1c31b873'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/iglesia_san_agustin.png?alt=media&token=0a19f822-28fb-4cb1-a124-8bd50d8d5d91'},
  details:`Las plegarias que hoy podéis elevar en el altar mayor tallado en madera, fueron escuchadas también en un templo y un convento primigenios, mismos que sufrirían graves daños a causa del terremoto del 2 de febrero del año 1736.
  \nAllende, el templo tuvo que ser reedificado con donativos de la devota Dionisia Pérez Manrique, conocida como Marquesa de San Miguel de la Vega, del payanés Jacinto de Mosquera Figueroa y Silva y del sacerdote José Beltrán de Caicedo. `,
  details1:`A causa de otro movimiento telúrico de 1827 la iglesia resultó nuevamente afectada por lo que debió ser reconstruida en 1834. Por su parte, el claustro conventual inició su uso escolar en la década del 50 del S. XX. 
  \nLa custodia del Águila Bicéfala fue una de las joyas legadas por la comunidad local de los frailes agustinos. Elaborada en plata dorada, decorada con perlas y esmeraldas por los orfebres Antonio Rodríguez y N. Alvarez, actualmente es preservada en el Museo Arquidiocesano de Arte Religioso de Popayán.`,
  }, 
  { 
  id: '7',
  name: 'Santuario de Belén',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/iglesia_de_belen.jpg?alt=media&token=5947bb62-6137-406d-acb7-c7e64471bfe3'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/santuario_de_belen.png?alt=media&token=4111dfaf-e2c5-47a5-835a-afb2140f4a18'},
  details:`Fue entre 1681 y 1689 que obtuve la gracia de poder financiar, yo Juan Antonio de Velasco, la construcción del santuario, así como unos años antes, en 1680, costeé la imagen del Santo Ecce-Homo.
  \nLa cosa fue así: el ilustrísimo obispo Bernaldo de Quiróz Mazo me dio la licencia del levantamiento de este templo, una vez fui lo que comúnmente se conocía como esclavo liberto.
  \nDebo lamentar que el terremoto de 1885 afectó gravemente la construcción, pero tiempo después fue reedificada para ser aquejada nuevamente por el sismo de 1925.
  \nFinalmente, nuestra ciudad, ya acostumbrada a tanto movimiento telúrico, fue testiga de la semidestrucción del templo debido al terremoto del Jueves Santo del 31 de marzo de 1983. Como mejores días aprecieron, fue restaurada gracias a las gestiones realizadas por el arzobispo Samuel Silverio Buitrago Trujillo.`,
  details1:`Juan Antonio de Velasco, conocido como esclavo liberto: hombre esclavizado que luego obtuvo su libertad en un caso excepcional en el contexto colonial local.
  \nEl Santo Ecce-Homo fue entronizado en un altar propio dentro del templo en 1717. También se convirtió en el santo patrono de la ciudad. 
  \nEn su atrio se encuentra ubicada desde 1789 una estilizada cruz de piedra (crucero) diseñada por Miguel Aguilón.
  \nLa cruz cuenta con cuatro inscripciones grabadas en su pedestal que hacen alusión a: la ruina de la ciudad (por causa de los terremotos); la buena muerte; el comején y los rayos.`,
  }, 
  { 
  id: '8',
  name: 'Museo Guillermo Valencia',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/museo_guillermo.jpg?alt=media&token=ff6b40d4-722a-41f1-bd68-3e383433e422'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/museo_guillermo_valencia.png?alt=media&token=13fedab1-d642-438a-a6bd-171f11f7114f'},
  details:`Me gustan la penumbra y la luz que nos cubre en los pasillos del museo. Aquí se alojan entrañables objetos: figuritas, cartas, sombreros, todo lo legado del poeta. Este lugar fue construido por el arquitecto payanés Marcelino Pérez de Arroyo a finales del S. XVIII. 
  \nMucho de lo que hoy forma el lugar, fue reconstruido bajo la orientación del señor Álvaro Pío Valencia, hijo del poeta, pues la fuerza del terremoto de 1983 le causó graves daños. El señor Álvaro Pío Valencia se convertiría luego en el primer director del museo.`,
  details1:`El encargo de edificar la casa a finales del S. XVIII se le atribuye al corregidor José Gregorio Angulo.
  \nEn 1906 fue adquirida por Ignacio Muñoz Córdoba que la cedió a su hija Josefina Muñoz, esposa del honorable poeta Guillermo Valencia, quien falleció en 1943.
  \nEn 1943 pasó a ser propiedad la Nación para finalmente disponer la construcción como museo según lo establecido por la ley 80 del mismo año.`,
  }, 
  { 
  id: '9',
  name: 'Cerro Las Tres Cruces',
  location: 'Popayán',
  image: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/sendero_de_las_3_cruces.jpg?alt=media&token=d1c3a1c5-a8e9-4121-8d46-1ac954b85928'},
  qr: {uri: 'https://firebasestorage.googleapis.com/v0/b/suti-e9aba.appspot.com/o/cerro_las_3_cruces.png?alt=media&token=74096f39-fed5-4ca7-bccb-16cb88b24787'},
  details:`En este cerro tal vez aprendas a mirar como nuevo aquello que ya conocías. Eso porque al subir desde su circundante sendero ecológico, hoy administrado por la Alcaldía de Popayán y la CRC, serás recibido por árboles y caminos trazados que dejan escuchar el paso del tiempo y las hojas al viento.
  \nAsí como podrás sentir la fuerza de la vida floreciendo en cada paso de su espiral ascendente, mismo que te conducirá hacia una ventana de ramas por la cual verás a Popayán.
  \nHay pocas cosas que la gente pueda desear tanto, por eso las Tres Cruces fue propiedad de Catalina Moreno de Zúñiga durante el periodo colonial, además, tuvo otros dueños incluyendo a la familia Caldas en 1830.`,
  details1:`El lugar también es conocido como: “Cerro de la Eme”. 
  \nLas actuales cruces de concreto fueron financiadas por Ignacio Muñoz Córdoba en 1929 y bendecidas el 3 de mayo de 1930 por el sacerdote Miguel Ángel Arce Vivas, arzobispo de Popayán de 1965 a 1976. 
  \nEn 1956 se levantó un altar en piedra para celebrar oficios religiosos durante la fiesta de la Santa Cruz.
  \nSe cree que, desde los primeros años de la fundación hispánica de la ciudad, se instaló en lo alto una cruz en cumplimiento de las Leyes de Indias que ordenaban ubicarla en el monte más cercano a cada población. `,
  }, 
  ];
  
  export default places;