particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 1000,  // Increase the number of particles
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.3,
        },
        "size": {
            "value": 2,  // Decrease the size of particles
        },
        "line_linked": {
            "enable": false,
        },
        "move": {
            "enable": true,
            "speed": 6,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

