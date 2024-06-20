AOS.init();

const dataDoEvento = new Date("Jul 01, 2024 00:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAshoras = setInterval(function(){
        const agora = new Date()
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

        const diaEmMs = 1000 * 60 * 60 * 24
        const horaEmMs = 1000 * 60 * 60
        const minutoEmMs = 1000 * 60

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs)
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs)
        const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

        document.getElementById('contador').innerHTML = `<div> Dias <br> ${diasAteOEvento}<br></div>
                                                        <div> Horas <br> ${horasAteOEvento}<br></div>
                                                        <div> Minutos <br> ${minutosAteOEvento}<br></div>
                                                        <div> Segundos <br> ${segundoAteOEvento}<br></div>`

        if(distanciaAteOEvento < 0 ){
            clearInterval(contaAshoras)
            document.getElementById('contador').innerHTML = 'Evento expirou !!'
        }
}, 1000)