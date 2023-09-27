import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://Souza:npcADhFkMikYbunM@docs.ewsymlv.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
