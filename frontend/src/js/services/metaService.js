/* Service to validate meta description for current page */
angular
    .module('evalai')
    .service('metaService', metaService);

metaService.$inject = ['$rootScope'];

var defaultMeta = {
    "type": "website",
    "site_name": "EvalAI",
    "url": "https://evalai.cloudcv.org",
    "title": "EvalAI: Evaluating state of the art in AI",
    "image": {
        "url": "http://staging.evalai.cloudcv.org/dist/images/evalai-cover.png",
        "width": "1200",
        "height": "628",
        "type": "image/png",
        "alt": "EvalAI_cover_image"
    },
    "description": "EvalAI is an open-source web platform for organizing and participating in challenges to push the state of the art on AI tasks.",
};

function metaService() {
    var meta = defaultMeta;
    this.validate = function(metaData) {
        var newMeta = metaData;
        meta.type = (typeof newMeta.type === 'undefined') ? defaultMeta.type : newMeta.type;
        meta.site_name = (typeof newMeta.site_name === 'undefined') ? defaultMeta.site_name : newMeta.site_name;
        meta.url = (typeof newMeta.url === 'undefined') ? defaultMeta.url : newMeta.url;
        meta.title = (typeof newMeta.title === 'undefined') ? defaultMeta.title : newMeta.title;
        meta.image.url = (typeof newMeta.image.url === 'undefined') ? defaultMeta.image.url : newMeta.image.url;
        meta.image.width = (typeof newMeta.image.width === 'undefined') ? defaultMeta.image.width : newMeta.image.width;
        meta.image.height = (typeof newMeta.image.height === 'undefined') ? defaultMeta.image.height : newMeta.image.height;
        meta.image.type = (typeof newMeta.image.type === 'undefined') ? defaultMeta.image.type : newMeta.image.type;
        meta.image.alt = (typeof newMeta.image.alt === 'undefined') ? defaultMeta.image.alt : newMeta.image.alt;
        meta.description = (typeof newMeta.description === 'undefined') ? defaultMeta.description : newMeta.description;
        return meta;
    };
}