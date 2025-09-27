# 🦕 Juego del Dinosaurio

Una recreación del clásico juego del dinosaurio de Google Chrome desarrollado con HTML, CSS y JavaScript vanilla.

## 🎮 Características

- **Dinosaurio saltarín**: Controla al dinosaurio con saltos precisos
- **Obstáculos variados**: 3 tipos diferentes de obstáculos
  - 🌵 **Cactus**: Obstáculo verde con brazos laterales
  - 🪨 **Roca**: Obstáculo bajo y redondeado
  - 🐦 **Pájaro**: Obstáculo volador con animación de aleteo
- **Sistema de puntuación**: Puntos que aumentan automáticamente
- **Dificultad progresiva**: La velocidad aumenta cada 100 puntos
- **Detección de colisiones**: Fin del juego al tocar obstáculos
- **Reinicio rápido**: Botón para volver a jugar

## 🕹️ Controles

- **Barra espaciadora** o **Clic**: Saltar
- **Barra espaciadora** o **Clic** (cuando el juego no está corriendo): Iniciar juego

## 🚀 Cómo jugar

1. Abre `index.html` en tu navegador
2. Presiona **ESPACIO** o haz **clic** para iniciar
3. Salta para evitar los obstáculos
4. ¡Consigue la puntuación más alta!

## 📁 Estructura del proyecto

```
aplicacionaws/
├── index.html      # Estructura HTML del juego
├── style.css       # Estilos y animaciones
├── script.js       # Lógica del juego
└── README.md       # Este archivo
```

## ⚙️ Mecánicas del juego

- **Primer obstáculo**: Aparece a los 400ms de iniciar
- **Intervalo inicial**: 1.5 segundos entre obstáculos
- **Aceleración**: Cada 100 puntos reduce 50ms el intervalo
- **Velocidad mínima**: 800ms entre obstáculos
- **Puntuación**: +10 puntos cada 100ms

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura del juego
- **CSS3**: Estilos, animaciones y efectos visuales
- **JavaScript**: Lógica del juego, detección de colisiones y controles

## 🎯 Características técnicas

- Detección de colisiones en tiempo real
- Animaciones CSS fluidas
- Generación aleatoria de obstáculos
- Sistema de eventos para controles
- Gestión de intervalos para optimización

---

¡Disfruta del juego y trata de superar tu récord! 🏆