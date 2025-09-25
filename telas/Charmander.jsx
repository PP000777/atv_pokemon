import { View, Text, StyleSheet, Image } from 'react-native';

export default function Charmander(){
    return(
        <View style={estilo.tela}>
            <Image
                source={require('../imagens/charmander.png')}
                style={{height: 200, width: 300}}
                resizeMode='contain'
            />
            <Text style={{fontSize: 40, color: 'white', fontWeight: '600'}}>
                Charmander
            </Text>
            <View style={estilo.cxDetalhes}>
                <Text style={{padding: 20, fontSize: 20}}>
                    - Altura: 0.6m{'\n'}
                    - Peso: 8.5kg{'\n'}
                    - Tipo: Fogo{'\n'}
                    - Fraquezas: Água, Terra, Pedra
                </Text>
            </View>
        </View>
    )
}

export const estilo = StyleSheet.create({
    tela:{
        backgroundColor: '#9b4e32',
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    cxDetalhes:{
        backgroundColor: 'rgba(255,255,255,0.5)',
        width: 300,
        height: 300,
        borderRadius: 20,
        marginTop: 50
    }
})
