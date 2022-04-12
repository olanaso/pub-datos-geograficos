window.colorescapas= {
    piso: {
        fondo: "#2A322E"
    },
    vereda: {
        bordeancho: 0.5,
        bordecolor: "#000",
        bordeopacidad: 1.0,
        fondocolor: "#FFFFFF"
    },
    lote: {
        todoslotespaint: {
            "fill-color": ['case', ['boolean', ['feature-state', 'hover'], false], 'yellow', '#1B94EF'],
            'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.6, 1],
            "fill-outline-color": "#FFFFFF"
        },
        lotesvendidos: {
            'fill-color': '#EF583F',
            'fill-opacity': 0.90
        }
        ,
        lotesreservados:  {

            'fill-color': 'rgba(252,176,76,0.9)',
            'fill-opacity': 0.90
        }
        ,
        lotespreventa: {
            'fill-color': 'rgba(249,140,65,0.9)',
            'fill-opacity': 0.90
        }
        ,
        loteseleccionado: {
            'fill-color': '#FFFF0F',
            'fill-opacity': 0.7
        },
        etiquetalote: {
            layout: {
                "text-field": "{lt}",
                "text-size": 18,
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"]
            },
            paint: {
                "text-color": "#FFFFFF",
                // "text-opacity": ["interpolate", ["exponential", 1],
                //     ["zoom"], 16, 0, 22, 1
                // ],
                // "text-halo-color": "#000"
            }
        },
        lotebordes: {
            "line-width": .4,
            "line-color": "#FFFFFF",
            "line-opacity": ["case", ["boolean", ["feature-state", "hover"], !1], .7, .7]
        }
    },
    manzanas: {
        layout: {
            "text-field": "Mz.\n{mz}",
            "text-font": ["Open Sans SemiBold", "Arial Unicode MS Bold"],
            "icon-image": "custom-marker",
            "icon-size": .1,
            "symbol-spacing": 500,
            "text-size": ["interpolate", ["linear"], ["zoom"], 4, 7, 15, 3, 18, 14]
        },
        paint: {
            "text-color": "hsla(0, 0%, 0%, 1)",
            "text-halo-color": "hsl(0, 0%, 27%)"
        }
    },
    areas_verde: {

        "fill-color": "#25DF0B",
        "fill-opacity": 1
    },
    areas_parque: {

        "fill-color": "#FFFF24",
        "fill-opacity": 1
    },
    areas_otros_fines: {

        "fill-color": "#FECC66",
        "fill-opacity": 1
    },
    areas_boulevar: {

        "fill-color": "red",
        "fill-opacity": 1
    },
    areas_comercio: {

        "fill-color": "#8000FF",
        "fill-opacity": 1
    }
    ,
    areas_educacion: {

        "fill-color": "#FF8040",
        "fill-opacity": 1
    },
    areas_reservada: {

        "fill-color": "#8080C0",
        "fill-opacity": 1
    }
    ,
    area_pje_peatonal: {

        "fill-color": "#C0C0C0",
        "fill-opacity": 1
    },
    area_rec_public: {

        "fill-color": "#AED864",
        "fill-opacity": 1
    },
    area_zona_miradores: {

        "fill-color": "#00FFFF",
        "fill-opacity": 1
    },
    area_bordes: {
        "line-width": 3,
        "line-color": "#040404",
        "line-opacity": 1
    },
    area_etiqueta: {
        layout: {
            "text-field": "{text}",
            "text-size": 18,
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"]
        },
        paint: {
            "text-color": "#CCDFFF",

            "text-opacity": ["interpolate", ["exponential", .5],
                ["zoom"], 16, 0, 22, 1
            ],
            "text-halo-color": "rgba(255, 255, 0, 1)"
        }
    },
    calles: {
        "line-color": "#FFF",
        "line-width": 2,
        "line-opacity": 0.6,

        "line-dasharray": [100, 100]

    },
    calle_etiqueta: {
        paint: {
            "text-color": "#FFFFFF",
            "text-halo-color": "#000",
            "text-halo-width": 1

        },
        layout: {
            "symbol-placement": "line",
            "text-font": ["Open Sans Bold"],
            "text-field": '{text}', // part 2 of this is how to do it
            "text-size": 18,

        }

    }
}

window.geoservicios={

    piso: "http://localhost:8080/geoserver/inmobitec/wms?service=WMS&version=1.1.0&request=GetMap&layers=inmobitec%3Alimites_wgs&bbox=-76.3323287963867%2C-13.1651735305786%2C-76.3149337768555%2C-13.1476497650146&width=762&height=768&srs=EPSG%3A4326&styles=&format=geojson",
    calle: "http://localhost:8080/geoserver/inmobitec/wms?service=WMS&version=1.1.0&request=GetMap&layers=inmobitec%3Acalles_wgs&bbox=-76.3321838378906%2C-13.1649732589722%2C-76.315055847168%2C-13.1487894058228&width=768&height=725&srs=EPSG%3A4326&styles=&format=geojson",
    vereda: "http://localhost:8080/geoserver/inmobitec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=inmobitec%3Avereda_wgs&maxFeatures=50000&outputFormat=application%2Fjson",
    lotes: "http://localhost:8080/geoserver/inmobitec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=inmobitec%3Apredio_gardenias&maxFeatures=50000&outputFormat=application%2Fjson",
    manzanas: "http://localhost:8080/geoserver/inmobitec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=inmobitec%3Amanzanas_wgs&maxFeatures=1000&outputFormat=application%2Fjson",
    parques: "http://localhost:8080/geoserver/inmobitec/wms?service=WMS&version=1.1.0&request=GetMap&layers=inmobitec%3Aotros_wgs&bbox=-76.3319473266602%2C-13.1647596359253%2C-76.3150863647461%2C-13.1476678848267&width=757&height=768&srs=EPSG%3A4326&styles=&format=geojson",
    puntos:"http://localhost:8080/geoserver/inmobitec/wms?service=WMS&version=1.1.0&request=GetMap&layers=inmobitec%3Apunto&bbox=-76.331916809082%2C-13.1645603179932%2C-76.3152694702148%2C-13.1488218307495&width=768&height=726&srs=EPSG%3A4326&styles=&format=geojson",
    busqueda_mz:"http://localhost:8080/geoserver/inmobitec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=inmobitec%3Apredio_gardenias&maxFeatures=50&&CQL_FILTER=mz%3D'__mz__'&outputFormat=application%2Fjson",
    busqueda_mzlt:"http://localhost:8080/geoserver/inmobitec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=inmobitec%3Apredio_gardenias&maxFeatures=50&&CQL_FILTER=mzlt%3D'__mznlt__'&outputFormat=application%2Fjson",

}

