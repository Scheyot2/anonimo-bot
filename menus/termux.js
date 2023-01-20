const termux = (pr, NomeDoBot, nomeDono,pushname) => {
    return`

                    
                    
〔☕〕 [ 𝒕𝒆𝒓𝒎𝒖𝒙 ]

╔────────
║⇝ apt update && apt upgrade
║⇝ pkg install python 
║⇝ pkg install python2
║⇝ pkg install python3
║⇝ clear [Limpa a tela do termux]
╚──────────────⊀

〔☕〕 [𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒕𝒆𝒓𝒎𝒖𝒙]

╔────────
 https://www.mediafire.com/file/e2qo64gee5zy9ds/Termux.apk/file  
╚──────────────⊀

〔☕〕𝐀𝐥𝐠𝐮𝐦𝐚𝐬 𝐟𝐞𝐫𝐫𝐚𝐦𝐞𝐧𝐭𝐚𝐬

╔──────────────⊀
║⇝ cd /sdcard/nome da pasta
║isso fara que vc entre na pasta
╚──────────────⊀
╔──────────────⊀
║⇝ cd $H [Volta pro início]
╚──────────────⊀
╔──────────────⊀
║⇝ MV -V [Para mover algo]
╚──────────────⊀
╔──────────────⊀
║⇝ rm -rf  [apaga pasta]
╚──────────────⊀
╔──────────────⊀
║⇝ git clone [clona uma ferramenta]
╚──────────────⊀

〔☕〕𝑨𝒍𝒈𝒖𝒎𝒂𝒔 𝒇𝒆𝒓𝒓𝒂𝒎𝒆𝒏𝒕𝒂𝒔
╔────────
║⇝ ${pr}SpamWa
║⇝ ${pr}LITEDDOS
║⇝ ${pr}sqlmap
║⇝ ${pr}Kiny-Painel
║⇝ ${pr}TBomb
║⇝ ${pr}trackip
║⇝ ${pr}Brutal
║⇝ ${pr}crocodile
║⇝ ${pr}ipdrone
╚──────────────⊀
`
}
module.exports.termux = termux

const SpamWa = (pr, NomeDoBot, nomeDono) => {
    return`

Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg install python 
    
    pkg install git 
    
    python3 -m pip install requests
    
    git clone https://github.com/krypton-byte/SpamWa
    
    cd SpamWa 
    python3 spam.py
`
}
module.exports.SpamWa = SpamWa

const sqlmap = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
   git clone --depth 1 https://github.com/sqlmapproject/sqlmap.git
   
Para obter uma lista de opções e opções básicas, use: 
  python sqlmap.py -h
  
  Para obter uma lista de todas as opções e opções, use: 
  python sqlmap.py -hh
  
  `
}
module.exports.sqlmap = sqlmap

const LITEDDOS = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.

   git clone  https://github.com/4L13199/LITEDDOS
   
   python2 LITEDDOS.py <ip> <porta> <pacotes>
   
   `
}
module.exports.LITEDDOS = LITEDDOS

const Painel = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg upgrade && pkg update -y 
    
    pkg install git python -y 
    
    git clone https://github.com/Kiny-Kiny/Kiny-Painel 
    
    cd Kiny-Painel
    
    python3 main.py
    
    
`
}
module.exports.Painel = Painel

const TBomb = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg install git -y 
    
    pkg install python -y 
    
    git clone https://github.com/TheSpeedX/TBomb.git 
   
    cd TBomb 
    
    ./TBomb.sh

 `
}
module.exports.TBomb = TBomb

const Brutal = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
 
    git clone https://github.com/Screetsec/Brutal.git

    cd Brutal
    
    chmod +x Brutal.sh
    
    ./Brutal.sh
`
}
module.exports.Brutal = Brutal

const trackip = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
 
  apt update

  apt install git curl -y

  git clone git://github.com/htr-tech/track-ip.git

  cd track-ip


bash trackip

`
}
module.exports.trackip = trackip
const crocodile = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
pkg update && pkg upgrade
pkg install node
pkg install git
git clone https://github.com/isaias-silva/crocodile
cd crocodile 
bash install.sh 
para iniciar ao abrir o termux: cd crocodile npm start
`
}
module.exports.crocodile = crocodile

const ipdrone = (pr, NomeDoBot, nomeDono) => {
    return`  
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
apt-get update -y
apt-get upgrade -y
pkg install python -y
pkg install python2 -y
pkg install git -y
pip install lolcat
pip install requests
git clone https://github.com/noob-hackers/ipdrone
cd $HOME
ls
cd ipdrone
ls
python ipdrone.py -v (seu ip de pessoa aqui)
    `
}
module.exports.ipdrone = ipdrone