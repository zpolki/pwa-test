var domain = document.location.origin;
var startUrl = new URL("./index.html", location.href).href + location.search;
let url = window.URL.createObjectURL( new Blob( [JSON.stringify({
    "name": "Tiger444",
    "orientation": "portrait",
    "shortcuts": [
        {
            "name": "Tiger555",
            "url": startUrl
        }
    ],
    "short_name": "Tiger555",
    "icons": [
        {
            "src": new URL("./landing/static/logo.webp", location.href).href ,
            "sizes": "192x192",
            "type": "image/webp"
        },
        {
            "src": new URL("./landing/static/logo.webp", location.href).href,
            "sizes": "512x512",
            "type": "image/webp"
        },
        {
            "src": new URL("./landing/static/logo.webp", location.href).href,
            "sizes": "512x512",
            "type": "image/webp",
            "purpose": "any maskable"
        }
    ],
    "display_override": ["window-controls-overlay"],
    "edge_side_panel": {
        "preferred_width": 496
    },
    "start_url": startUrl,
    "display": "standalone",
    "background_color": "#fff",
    "theme_color": "#1976d2",
    "description": "Fortune Rabbit um jogo casual de coelho feliz. Sua interface de jogo exclusiva proporcionar uma experincia nica, permitindo que voc aproveite a diverso do jogo. Cada vez que voc joga, voc fica ansioso por isso. Voc nunca sabe que tipo de surpresa e alegria estar esperando por voc na prxima vez!",
    "screenshots": [
        {
            "src": new URL("./landing/static/01.webp", location.href).href,
            "sizes": "330x587",
            "type": "image/webp",
            "label": "Wonder Widgets"
        },
        {
            "src": new URL("./landing/static/02.webp", location.href).href,
            "sizes": "330x587",
            "type": "image/webp",
            "label": "Wonder Widgets"
        },
        {
            "src": new URL("./landing/static/03.webp", location.href).href,
            "sizes": "330x587",
            "type": "image/webp",
            "label": "Wonder Widgets"
        },
        {
            "src": new URL("./landing/static/04.webp", location.href).href,
            "sizes": "330x587",
            "type": "image/webp",
            "label": "Wonder Widgets"
        }
    ]
})], {type: "application/json"}))
var manifest = document.getElementById('manifest');
manifest.href = url;