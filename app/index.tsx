import { generatorSurname } from "@/service/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [person, setPerson] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratorSurname = async () => {
    if(person.length < 10) {
      alert("Desculpa, o evento precisa ter mais de 5 caracteres")
      return;
    }
    setIsLoading(true);

    // Generator AI
    await generatorSurname(person).then((response) => {
      setResposta(response)
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Joke Apelidator</Text>
      <Text style={styles.subtitle}>Sua máquina de apelidos sarcásticos</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        onChangeText={setPerson}
        placeholder="Digite sobre a pessoa que você quer apelidar..."
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleGeneratorSurname}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar apelido sarcástico!"}</Text>
      </TouchableOpacity>

        {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Seu apelido é:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }
    </View>
  );
}
