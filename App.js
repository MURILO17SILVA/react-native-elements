import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Tile, Button,Icon  } from '@rneui/themed';

type TilesComponentProps = {};

const Tiles: React.FunctionComponent<TilesComponentProps> = () => {
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <ScrollView style={{ paddingVertical: 10 }}>
          <View>
            <Tile
              imageSrc={{
                uri:
                  'https://th.bing.com/th/id/OIP.nyacnYzM5_mDO4TZ8744wAHaE7?pid=ImgDet&rs=1',
              }}
              titleStyle={{ fontSize: 15 }}
              featured
              caption="Estádio Santiago Bernabéu"
              activeOpacity={2}
              width={310}
            />
            <Text style={styles.stadiumName}>Estádio do Real Madrid</Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri:
                  'http://4.bp.blogspot.com/-yBnU1OFEAb0/VVKor5Amr3I/AAAAAAAAHlA/aNS8kaOCmH0/s1600/Barcelona-Camp-Nou.jpg',
              }}
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 60,
                color: 'white',
              }}
              featured
              activeOpacity={0.8}
              onPress={() => {
                'Tile pressed';
              }}
              width={310}
            />
            <Text style={styles.stadiumName}>Estádio do Barcelona</Text>
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 100 }}>
            <Tile
              imageSrc={{
                uri:
                  'https://th.bing.com/th/id/R.425a5ac5123108e695b961fa8ff9496a?rik=2b7OSG0rhOkHZA&pid=ImgRaw&r=0',
              }}
              titleStyle={{ fontSize: 15 }}
              featured
              caption="Estádio do Sevilla"
              activeOpacity={1}
              width={310}
            />
            <Text style={styles.stadiumName}>Estádio do Sevilla</Text>
             <Icon
                name='g-translate'
               color='#00aced' />
          </View>
          
        </ScrollView>
      </View>
      <Text style={styles.topEstadio}>Estádio do Brasil</Text>
      <View style={styles.bottomOptions}>
        <Button
          title="Visitar"
          type="solid"
          containerStyle={styles.bottomButtonContainer}
          buttonStyle={styles.bottomButton}
          titleStyle={styles.bottomButtonText}
        />
        <Button
          title="Saiba Mais"
          type="solid"
          containerStyle={styles.bottomButtonContainer}
          buttonStyle={styles.bottomButton}
          titleStyle={styles.bottomButtonText}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  
  stadiumName: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  topEstadio: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  bottomOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  bottomButtonContainer: {
    width: 120,
  },
  bottomButton: {
    backgroundColor: '#397',
  },
  bottomButtonText: {
    color: 'white',
  },
});

export default Tiles;
