// objetivo dos 2 o mesmo ajudar a criar tipagem, servem p msm coisa
// type mais recomendavel
// interface muito utilizados para quem usa / gosta POO

type Tuser = {
  id: number;
  name: string;
}

type TPay = {
  method: string;
}

type Taccount = Tuser & TPay;


// ---

interface Iuser {
  id: number;
  name: string
}

interface IPay {
  method: string;
}


interface Iaccount extends Iuser, IPay {}