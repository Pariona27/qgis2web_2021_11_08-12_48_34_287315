ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREA_1 = new ol.format.GeoJSON();
var features_AREA_1 = format_AREA_1.readFeatures(json_AREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_AREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_1.addFeatures(features_AREA_1);
var lyr_AREA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_1, 
                style: style_AREA_1,
                interactive: true,
                title: '<img src="styles/legend/AREA_1.png" /> AREA'
            });
var lyr_acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [362059.343750, 8639974.750000, 453659.343750, 8713849.750000]
                            })
                        });
var lyr_dir_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_3.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [362059.343750, 8639974.750000, 453659.343750, 8713849.750000]
                            })
                        });
var lyr_fill_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_4.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [362059.343750, 8639974.750000, 453659.343750, 8713849.750000]
                            })
                        });
var lyr_c_acc_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_5.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [384659.343750, 8666699.750000, 430271.843750, 8700449.750000]
                            })
                        });
var lyr_c_cauce_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_6.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [384659.343750, 8666699.750000, 430271.843750, 8700449.750000]
                            })
                        });
var lyr_c_fill_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_7.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [384659.343750, 8666699.750000, 430271.843750, 8700449.750000]
                            })
                        });
var format_c_shp_8 = new ol.format.GeoJSON();
var features_c_shp_8 = format_c_shp_8.readFeatures(json_c_shp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_shp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_8.addFeatures(features_c_shp_8);
var lyr_c_shp_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_8, 
                style: style_c_shp_8,
                interactive: true,
                title: '<img src="styles/legend/c_shp_8.png" /> c_shp'
            });
var format_c_curvas_9 = new ol.format.GeoJSON();
var features_c_curvas_9 = format_c_curvas_9.readFeatures(json_c_curvas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_curvas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_9.addFeatures(features_c_curvas_9);
var lyr_c_curvas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_9, 
                style: style_c_curvas_9,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_9.png" /> c_curvas'
            });
var lyr_c_reclass_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_10.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [384659.343750, 8666699.750000, 430271.843750, 8700449.750000]
                            })
                        });
var format_c_rios_11 = new ol.format.GeoJSON();
var features_c_rios_11 = format_c_rios_11.readFeatures(json_c_rios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_rios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_11.addFeatures(features_c_rios_11);
var lyr_c_rios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_11, 
                style: style_c_rios_11,
                interactive: true,
                title: '<img src="styles/legend/c_rios_11.png" /> c_rios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AREA_1.setVisible(true);lyr_acc_2.setVisible(true);lyr_dir_3.setVisible(true);lyr_fill_4.setVisible(true);lyr_c_acc_5.setVisible(true);lyr_c_cauce_6.setVisible(true);lyr_c_fill_7.setVisible(true);lyr_c_shp_8.setVisible(true);lyr_c_curvas_9.setVisible(true);lyr_c_reclass_10.setVisible(true);lyr_c_rios_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AREA_1,lyr_acc_2,lyr_dir_3,lyr_fill_4,lyr_c_acc_5,lyr_c_cauce_6,lyr_c_fill_7,lyr_c_shp_8,lyr_c_curvas_9,lyr_c_reclass_10,lyr_c_rios_11];
lyr_AREA_1.set('fieldAliases', {});
lyr_c_shp_8.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'a_km2': 'a_km2', 'p_km': 'p_km', });
lyr_c_curvas_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_11.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_AREA_1.set('fieldImages', {});
lyr_c_shp_8.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'a_km2': 'TextEdit', 'p_km': 'TextEdit', });
lyr_c_curvas_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CONTOUR': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_c_rios_11.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_AREA_1.set('fieldLabels', {});
lyr_c_shp_8.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'a_km2': 'no label', 'p_km': 'no label', });
lyr_c_curvas_9.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});