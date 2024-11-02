/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatDate = (date: any) => {
    const dataIso8601 = date;
  
    const data = new Date(dataIso8601);
  
    let dia = data.getUTCDate() as any;
    let mes = (data.getUTCMonth() + 1) as any; 
    let ano = data.getUTCFullYear() as any;
    let horas = data.getUTCHours() as any;
    let minutos = data.getUTCMinutes() as any;

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    if (date) {
      return dia + "/" + mes + "/" + ano + " | " + horas + ":" + minutos;
    }
    return "N/A";
  };
  