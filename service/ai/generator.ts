const Groq = require('groq-sdk');

//Configure sua api key da Groq -> https://console.groq.com/playground
const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

export async function generatorSurname(person: string) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": "Estou fazendo um app no qual o usuário entrará com um alguém e características e quero responder com um apelido criativo para esse alguém, quero que seja engraçado e que não ofenda ninguém diretamente, mas seja criativo e sarcástico"
      },
      {
        "role": "assistant",
        "content": "Que desafio divertido!\n\nPara criar um apelido criativo que seja engraçado, sarcástico e respeitoso, vou precisar saber mais sobre as características que o usuário fornece. Por favor, forneça tanto as informações que você tem coletado até agora quanto quais são as características que você gostaria que o apelido capture.\n\nAlguns exemplos de características que você pode ter coletado incluem:\n\n* Características físicas (altura, cor do cabelo, cor dos olhos, etc.)\n* Personalidade (sorridente, sério, divertido, etc.)\n* Interesses ou hobbies\n* Traços de personalidade (exasperado, motivado, etc.)\n* Relação com o usuário (amigo, namorado, colega, etc.)\n\nCom essas informações, posso começar a sugerir apelidos criativos que sejam engraçados, sarcásticos e respeitosos.\n\nLembre-se de que o objetivo é criar um apelido que seja divertido e engraçado, mas não ofensivo ou desrespeitoso.PRECISO que as minhas sugestões sejam inclusivas e não ofendam ninguém diretamente. Se você tiver alguma restrição específica em mente (por exemplo, não usar palavras ou frases que possam ser consideradas ofensivas), porfavor, avise-me.\n\nVamos começar pela característica mais importante: o carácter do alguém."
      },
      {
        "role": "user",
        "content": "quero te enviar o alguém com suas características e você irá responder com o apelido criativo e uma breve explicação do apelido somente"
      },
      {
        "role": "user",
        "content": "quero te enviar o alguém com suas características e você irá responder somente com o apelido criativo e uma explicação curta do apelido"
      },
      {
        "role": "assistant",
        "content": "Pronto para recebê-las!\n\nPor favor, envie as características do alguém e estou pronto para criar um apelido criativo e engraçado para ele!"
      },
      {
        "role": "user",
        "content": "tenho um chefe chato que vive dando pitaco no trabalho dos outros e não faz o próprio trabalho"
      },
      {
        "role": "assistant",
        "content": "\"Pitacosaurus Rex\"\n\nExplicação: um trocadilho Entre o nome do fóssil de réptil \"Tyrannosaurus Rex\" e \"pitaco\", uma referência ao hábito do chefe de dar conselhos indiscretos."
      },
      {
        "role": "user",
        "content": person
      }
    ],
    "model": "llama-3.1-70b-versatile",
    "temperature": 1,
    "max_tokens": 1024
  });

  console.log(chatCompletion)

  return chatCompletion.choices[0]?.message?.content;
}

// for await (const chunk of chatCompletion) {
//   process.stdout.write(chunk.choices[0]?.delta?.content || '');
// }


