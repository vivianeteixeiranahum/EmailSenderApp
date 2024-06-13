import { Image, StyleSheet, Platform, TextInput, Text, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import axios from 'axios';


export default function TabTwoScreen() {
    const [email, SetEmail] = useState("");


    const sendEmailContato = async () => {
        const dados = {
            email: email,
        };

        axios.post(
            'http://localhost:5000/send-email-recuperar-senha',
            dados
        )
            .then(function (response) {
                console.log(response);
                alert("Email enviado com Sucesso")
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">ASDRUBAL CORP</ThemedText>
            </ThemedView>
            <ThemedText type="subtitle">Recuperação de Senha</ThemedText>
            <ThemedView>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={SetEmail}
                    placeholder="Coloque seu E-mail"
                    keyboardType="email-address"
                />
            </ThemedView>
            <ThemedView>
                <Button onPress={sendEmailContato} title="Enviar E-mail" />
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 8,
    },
});

