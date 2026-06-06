function gerarRodizio(){

  const monthVal = document.getElementById('monthPick').value;
  if(!monthVal){
    alert('Selecione o mês.');
    return;
  }

  const [y,m] = monthVal.split('-').map(Number);
  const mi = m - 1;

  document.getElementById('previewMes').textContent =
    monthShort[mi].toUpperCase() + ' - ' + y;

  const opsCulto = parseArea(document.getElementById('opsCulto').value);
  const opsReuniao = parseArea(document.getElementById('opsReuniao').value);
  const opsEnsaio = parseArea(document.getElementById('opsEnsaio').value);
  const opsCultoJov = parseArea(document.getElementById('opsCultoJovem').value);

  const chaveMes = `${y}-${String(m).padStart(2,'0')}`;

  let ultimoMes = localStorage.getItem("ultimoMesGerado");

  let pC = parseInt(localStorage.getItem("idxCulto") || "1");
  let pR = parseInt(localStorage.getItem("idxReuniao") || "0");
  let pE = parseInt(localStorage.getItem("idxEnsaio") || "0");
  let pJ = parseInt(localStorage.getItem("idxCultoJovem") || "0");

  let inicioCulto = pC;
  let inicioReuniao = pR;
  let inicioEnsaio = pE;
  let inicioCultoJov = pJ;

  const cultoDates = allWeekdays(y, mi, [0,2,4]);

  const cultoRows = cultoDates.map(dt => ({
    dia: dayName[dt.getDay()],
    data: fmtShort(dt),
    irmao: opsCulto[pC++ % opsCulto.length]
  }));

  const doms = allWeekdays(y, mi, [0]);

  const reuniaoRows = doms.map(dt => ({
    dia: dayName[dt.getDay()],
    data: fmtShort(dt),
    irmao: opsReuniao[pR++ % opsReuniao.length]
  }));

  const dt2sexta = nthWeekday(y, mi, 5, 2);

  const ensaioRows = dt2sexta ? [{
    dia: dayName[dt2sexta.getDay()],
    data: fmtShort(dt2sexta),
    irmao: opsEnsaio[pE % opsEnsaio.length]
  }] : [];

  const dt2sab = nthWeekday(y, mi, 6, 2);

  const cultoJovRows = dt2sab ? [{
    dia: dayName[dt2sab.getDay()],
    data: fmtShort(dt2sab),
    irmao: opsCultoJov[pJ % opsCultoJov.length]
  }] : [];

  let out = '';

  out += sectionHTML('CULTOS:', '#e6e6e6', cultoRows);
  out += sectionHTML('REUNIÃO DE JOVENS:', '#dbe7ff', reuniaoRows);
  out += sectionHTML('ENSAIO:', '#f4e0c8', ensaioRows);
  out += sectionHTML('CULTO DE JOVENS:', '#f8d6d6', cultoJovRows);

  document.getElementById('resultArea').innerHTML = out;

  if(ultimoMes !== chaveMes){

    localStorage.setItem(
      "idxCulto",
      pC % opsCulto.length
    );

    localStorage.setItem(
      "idxReuniao",
      pR % opsReuniao.length
    );

    localStorage.setItem(
      "idxEnsaio",
      pE % opsEnsaio.length
    );

    localStorage.setItem(
      "idxCultoJovem",
      pJ % opsCultoJov.length
    );

    localStorage.setItem(
      "ultimoMesGerado",
      chaveMes
    );
  }
}
