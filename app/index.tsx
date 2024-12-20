import { generatorSurname } from "@/service/ai/generator";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';
import { Easing } from "react-native-reanimated"; // Importação do Easing

export default function Index() {
  const [person, setPerson] = useState("");
  const [situation, setSituation] = useState("");
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratorSurname = async () => {
    if(person.length < 3) {
      alert("Desculpa, eu preciso ter uma pessoa para zoar! kkk")
      return;
    }
    if(situation.length < 10) {
      alert("Desculpa, mas está faltando mais informações sobre a pessoa")
      return;
    }
    setIsLoading(true);

    // Generator AI
    await generatorSurname(person, situation).then((response) => {
      setResposta(response)
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Joke Apelidator</Text>
      <Text style={styles.subtitle}>Seu amigo de apelidos sarcásticos HAHAHA</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPerson}
        placeholder="Digite a pessoa que você quer apelidar..."
      ></TextInput>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        onChangeText={setSituation}
        placeholder="Digite Característica/Situação"
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleGeneratorSurname}>
        <Text style={styles.buttonText}>{isLoading ? "Carregando..." : "Gerar apelido sarcástico!"}</Text>
      </TouchableOpacity>

        {
        resposta && (
          <MotiView
            style={styles.card}
            from={{
              opacity: 0,
              translateX: 200,
              rotate: "-90deg", // Começa girando fora do campo de visão
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              rotate: "0deg", // Finaliza com rotação normal
            }}
            transition={{
              type: "timing",
              duration: 600,
              easing: Easing.out(Easing.ease), // Uso do Easing corrigido
            }}
          >
            <Text style={styles.cardTitle}>Seu apelido é:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }
    </View>
  );
}
