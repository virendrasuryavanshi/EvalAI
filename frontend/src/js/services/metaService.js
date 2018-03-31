/* Service to validate meta description for current page */
angular
    .module('evalai')
    .service('metaService', metaService);

function metaService() {
    this.validate = function(metaData, defaultMeta) {
        var meta = defaultMeta;
        meta.type = (typeof metaData.type === 'undefined') ? defaultMeta.type : metaData.type;
        meta.site_name = (typeof metaData.site_name === 'undefined') ? defaultMeta.site_name : metaData.site_name;
        meta.url = (typeof metaData.url === 'undefined') ? defaultMeta.url : metaData.url;
        meta.title = (typeof metaData.title === 'undefined') ? defaultMeta.title : metaData.title;
        meta.image.url = (typeof metaData.image.url === 'undefined') ? defaultMeta.image.url : metaData.image.url;
        meta.image.width = (typeof metaData.image.width === 'undefined') ? defaultMeta.image.width : metaData.image.width;
        meta.image.height = (typeof metaData.image.height === 'undefined') ? defaultMeta.image.height : metaData.image.height;
        meta.image.type = (typeof metaData.image.type === 'undefined') ? defaultMeta.image.type : metaData.image.type;
        meta.image.alt = (typeof metaData.image.alt === 'undefined') ? defaultMeta.image.alt : metaData.image.alt;
        meta.description = (typeof metaData.description === 'undefined') ? defaultMeta.description : metaData.description;
        return meta;
    };
}