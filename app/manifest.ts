import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    "id": "backacia",
    "start_url": "/",
    "display_override": ["window-controls-overlay"], 
    "protocol_handlers": [{"protocol":"mailto","url":"/newEmail?to=%s"}], 
    "scope":"www.backacia.vercel.app/",
    "name": "Backacia",
    "short_name": "Backacia",
    "display": "standalone",
    "description": "Backacia - Pour que le réemploiredevienne un réflexe",
    "lang": " french",
    "dir": "auto",
    "theme_color": "#000000",
    "background_color": "#000000",
    "orientation": "any",
    "icons": [
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/backacia-93f7d.appspot.com/o/assets%2FBackacia_512.png?alt=media&token=c04dcab8-cca6-467a-b5bc-36370c3debe0",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "https://firebasestorage.googleapis.com/v0/b/backacia-93f7d.appspot.com/o/assets%2FBackacia_192.png?alt=media&token=6516b989-7082-4fbb-a2fe-9ef8b4edcc46",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      }
    ],
    "screenshots": [
      {
        "src": "/public/images/Homescreen.png",
        "sizes": "2880x1800",
        "type": "image/png",
      }
    ],
    "prefer_related_applications": false,
    "shortcuts": [
      {
        "name":"Backacia",
        "url":"/",
        "description":"Open Backacia"
      }
    ]
  }
}