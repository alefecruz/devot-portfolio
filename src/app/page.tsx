import { Text } from '@/components/atom/text';

export default function App() {
    return (
        <main>
            <Text format="TITLE" color="DANGER">
                Seu nome
            </Text>
            <Text format="BODY1" color="DARK">
                Seu trabalho
            </Text>
            <Text format="BODY2" color="SECONDARY">
                Descrição do trabalho em formato de frase
            </Text>
            <Text format="TITLE2" color="DISABLED">
                Sobre
            </Text>
            <Text format="CONTENT" color="PRIMARY">
                Texto sobre
            </Text>
            <Text format="BUTTON" color="PRIMARY">
                ENTRE EM CONTATO
            </Text>
        </main>
    );
}
