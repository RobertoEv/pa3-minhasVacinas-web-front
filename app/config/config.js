const SERVER_URL_PROD = "http://wsminhasvacinas.com.br/";
const SERVER_URL_DESV = "http://localhost:8080/";

const CONFIG = {};

//WEBSERVICE
CONFIG.SERVER_URL = (location.hostname.indexOf("localhost") != -1 ? SERVER_URL_DESV : SERVER_URL_PROD);

//VARIAREIS DE SERVIÇOS
CONFIG.AUTHENTICATION = CONFIG.SERVER_URL+"authentication/loginin";
CONFIG.CADASTRO_USUARIO = CONFIG.SERVER_URL+"usuario"
CONFIG.SERVICE_CURSO = CONFIG.SERVER_URL+"curso"

export const APPLICATION = CONFIG;
