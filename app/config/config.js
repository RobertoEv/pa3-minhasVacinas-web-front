const SERVER_URL_PROD = "http://wsminhasvacinas.com.br/wsminhasvacinas/";
const SERVER_URL_DESV = "http://localhost:8080/wsminhasvacinas/";

const CONFIG = {};

//WEBSERVICE
CONFIG.SERVER_URL = (location.hostname.indexOf("localhost") != -1 ? SERVER_URL_DESV : SERVER_URL_PROD);

//VARIAREIS DE SERVIÇOS
CONFIG.AUTHENTICATION = CONFIG.SERVER_URL+"authentication/loginin";
CONFIG.CADASTRO_USUARIO = CONFIG.SERVER_URL+"api/usuario"
CONFIG.SERVICE_CURSO = CONFIG.SERVER_URL+"curso"

export const APPLICATION = CONFIG;
